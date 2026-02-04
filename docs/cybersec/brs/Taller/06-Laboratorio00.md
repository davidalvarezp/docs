# Configuración dos *bridges* de Proxmox para conectar/separa-la rede exterior da interior.

Para crear un escenario no teñamos unha máquina virtual actuando como enrutador, **proxmox‑router**, que dea saída ás máquinas dos nosos escenarios cara a Internet hai que entender **como deben conectarse as interfaces da máquina proxmox‑router** coas pontes (*bridges*) de Proxmox. A estrutura típica é esta:

```
         ┌──────────────────────────┐
         │        INTERNET          │
         └──────────────┬───────────┘
                        │
                        │
            (Rede física 192.168.7.0/24)
                        │
                        │     ┌───────────────────────────┐
                        │     │        PROXMOX            │
                        │     │  Host físico / Hypervisor │
                        │     ├──────────────┬────────────┤
                        ├─────│ vmbr0 (WAN)  │ vmbr1 (LAN)│
                              └──────┬───────┴───────┬────┘
                                     │               │
                                 WAN │               │
 ┌──────────────────┐                │               │
 │  VM Router Linux │                │               │
 │──────────────────│                │               │
 │ eth1 -> vmbr0    ├────────────────┤               │    LAN interna
 │   192.168.7.100  │                    ───┬─────┬──┴────────────────┬────── 
 ├──────────────────┤                       │     │                   │
 │ eth0 -> vmbr1    ├───────────────────────┘     │                   │
 │ (LAN interna)    │                             │                   │
 │   10.0.0.1/24    │                             │                   │
 └──────────────────┘                             │                   │
                                                  │                   │
                                                  │                   │
                                        ┌─────────┴─────────┐  ┌──────┴─────────┐
                                        │     VM Kali       │  │   VM Kubuntu   │
                                        │   (LAN interna)   │  │ (LAN interna)  │
                                        │   IP 10.0.0.x     │  │ IP 10.0.0.x    │
                                        └───────────────────┘  └────────────────┘
```


- Temos unha **rede exterior** (WAN) que chega ó host Proxmox por `vmbr0` 
- Queremos crear unha **rede interna** illada para as máquinas virtuais, por exemplo `vmbr1` 
- A máquina virtual **proxmox‑router** terá **dúas interfaces** para facer NAT e routing entre ambas redes:
  - **eth0 -> LAN interna** (conectada a `vmbr1`)
  - **eth1 -> saída exterior** (conectada a `vmbr0`)
  - As demais máquinas virtuais que queiramos que saian a Internet conectaranse a `vmbr1` e usarán como *gateway* o IP da interface LAN do router **proxmox‑router**.

## Configuración no servidor Proxmox
Basicamente configuramos un *bridge* conectado á rede física (`vmbr0`), e outro illado para redes internas (`vmbr1`).

### 1. Bridge da rede exterior (xa existe por defecto): WAN do escenario
No ficheiro `/etc/network/interfaces` temos algo así:

```text
auto vmbr0
iface vmbr0 inet static
    address 192.168.7.100
    netmask 255.255.255.0
    gateway 192.168.7.254
    bridge-ports eno1
    bridge-stp off
    bridge-fd 0
```

Esta é a nosa **WAN**.

> Explicación de cada liña da configuración:

> - Indica que a interface `vmbr0` debe levantarse automaticamente ó arranca-lo sistema.
> - Define que `vmbr0` usará unha configuración IPv4 estática.
>- IP que terá o *bridge* `vmbr0` dentro da rede física 192.168.7.0/24
>- Máscara de rede asociada ó IP anterior.
>- Porta de enlace por defecto do host Proxmox. Todo o tráfico que saia do host irá a este gateway.
>- Indica que o *bridge* `vmbr0` está conectado fisicamente á interface `eno1` do servidor. É dicir: **`vmbr0` = switch virtual + porto físico `eno1`**.
>- Desactiva *STP (Spanning Tree Protocol)*. Normal en Proxmox salvo que teñas unha topoloxía complexa con *loops*.
>- *Forwarding delay* = 0 segundos. O *bridge* comeza a reenviar tráfico inmediatamente.

### 2. Crear un bridge interno para a LAN das máquinas virtuais: LAN do noso escenario
Engadir ó ficheiro `/etc/network/interfaces`:

```text
auto vmbr1
iface vmbr1 inet manual
    bridge-ports none
    bridge-stp off
    bridge-fd 0
```

`vmbr1` é unha rede virtual illada, sen conexión ó exterior.

>Explicación de cada liña da configuración:

>- A interface `vmbr1` tamén se levantará automaticamente no arranque.
>- `vmbr1` non terá IP asignada no host Proxmox. Funciona só como switch virtual para conectar VMs entre si.
>- `vmbr1` non está conectado a ningunha interface física. É unha rede completamente interna ó host.
>- *STP* desactivado (non é necesario nunha rede interna sen *loops*).
>- Sen retardo de reenvío, igual que en *vmbr0*.

### Reinicia-la rede ou o nodo para aplica-los cambios.
- A opción máis drástica é reinicia-lo nodo Proxmox:

```bash
sudo reboot
```
Aplícase todo con seguridade e é útil se se fixeron cambios profundos ou se non se está seguro do estado da rede.

- A opción recomendada para carga-la configuración de `/etc/network/interfaces` é usar `ifreload -a`, que aplica só os cambios necesarios cargando a configuración sen corta-la conexión SSH:

```bash
sudo ifreload -a
```

Se non está instalado `ifupdown2` (vén por defecto en Proxmox recentes):

```bash
sudo apt install ifupdown2
```

## Configuración da máquina virtual proxmox‑router

A máquina virtual debe ter **2 NICs**:

| Interface da VM | Conectada a | Función |
|-----------------|-------------|---------|
| **eth0**        | `vmbr1`     | LAN interior |
| **eth1**        | `vmbr0`     | WAN / saída exterior |


### Configuración dentro da máquina virtual router (Linux)

- 1.- Interface LAN (eth0)

```
10.0.0.1/16
```

- 2.- Interface WAN (eth1)

```
192.168.7.100/24
gateway 192.168.7.254
```

- 3.- Activar IP forwarding

```
sudo sysctl -w net.ipv4.ip_forward=1
```

- 4.- NAT para que as máquinas virtuais saian por eth1

```
sudo iptables -t nat -A POSTROUTING -o eth1 -j MASQUERADE
sudo iptables -A FORWARD -i eth0 -o eth1 -j ACCEPT
sudo iptables -A FORWARD -i eth1 -o eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT
```


### Configuración das demais máquinas virtuais

As máquinas virtuais que queiramos que saian ó exterior deben:

- Conectarse a **vmbr1**
- Ter como **gateway** o IP LAN do router (`10.0.0.1`)
- Usar DNS ó noso gusto (o do router, o da rede do departamento, ou 8.8.8.8)

---

# Montaxe dun router en Linux con dúas interfaces de rede.

O obxectivo é ter un **router Linux que encamiñe o tráfico da LAN interior cara á rede 192.168.7.0/24 mediante NAT**:

- Encamiña tráfico entre a LAN e a rede 192.168.7.0/24.
- Fai NAT para que os equipos da LAN poidan saír pola interface exterior.
- Mantén unha configuración simple e controlable:
   - **eth0 -> LAN interior** (a rede dos escenarios virtuais que se monten en clase).
   - **eth1 -> saída cara á rede 192.168.7.0/24**.

Infraestrutura:

- **Debian server ou Ubuntu Server** (tamén poderiamos facelo con *CentOS*).
- `iptables` (tamén poderiamos facelo con `nftables`).

## Configuración dun router en Linux
Requisitos básicos para que funcione como router:

- A máquina virtual debe ter dúas interfaces de rede:
   - Unha conectada á LAN interna (`vmbr1`)
   - Outra conectada á rede exterior (`vmbr0`)
- Activar IP forwarding (pode vir activado nalgúns sistemas).
- Configurar NAT ou routing estático, segundo o que necesitemos.

### 1. Configura-las interfaces de rede

- **LAN interior (eth0):** 10.0.0.1/16 
- **Rede exterior (eth1):** 192.168.7.100/24 
- **Gateway da rede 192.168.7.0/24:** 192.168.7.254


#### Exemplo de configuración temporal:
```bash
sudo ip addr add 10.0.0.1/16 dev eth0
sudo ip addr add 192.168.7.100/24 dev eth1
sudo ip link set eth0 up
sudo ip link set eth1 up
sudo ip route add default via 192.168.7.254
```


### 2. Activa-lo IP forwarding
Isto permite que o kernel encamiñe paquetes entre interfaces.

- Activación inmediata:

```bash
sudo sysctl -w net.ipv4.ip_forward=1
```

- Activación permanente:

Editar `/etc/sysctl.conf` e engadir:

```
net.ipv4.ip_forward = 1
```
E aplicar:

```bash
sudo sysctl -p
```


### 3. Configurar NAT para que a LAN saia pola rede 192.168.7.0/24

#### Usando `iptables` (compatible en todas partes)

```bash
sudo iptables -t nat -A POSTROUTING -o eth1 -j MASQUERADE
```

Isto fai que todo o tráfico que saia por **eth1** (cara á rede 192.168.7.0/24) leve como IP de orixe a IP 192.168.7.100 da máquina.

#### Permitir o reenvío entre interfaces

```bash
sudo iptables -A FORWARD -i eth0 -o eth1 -j ACCEPT
sudo iptables -A FORWARD -i eth1 -o eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT
```

### 4. Garda-las regras de iptables

#### En Debian/Ubuntu:

```bash
sudo apt install iptables-persistent
sudo netfilter-persistent save
```

#### En CentOS/RHEL:

```bash
sudo service iptables save
```

### 5. Configura-los clientes da LAN interior
Os equipos da rede interior deben ter como **gateway** o IP da interface LAN do router Linux:

- **Gateway:** 10.0.0.1 
- **Máscara:** a que corresponda á nosa rede: 16
- **DNS:** o que usamos normalmente na nosa rede do centro: 192.168.10.10 (pode ser externo: 8.8.8.8)


## Probas
Desde un equipo da LAN interior:

1. Probar conectividade co router:
   ```bash
   ping 10.0.0.1
   ```
2. Probar conectividade coa rede exterior:
   ```bash
   ping 192.168.7.254
   ```
3. Probar saída a Internet (**abrir previamente a saída a Internet do IP do router 192.168.7.100 en Aulas!**):
   ```bash
   ping 8.8.8.8
   ```
