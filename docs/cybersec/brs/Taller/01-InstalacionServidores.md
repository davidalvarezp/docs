# Inventario de hardware
## Cableado troncal infraestrutura do centro
- 2 x enlaces fibra óptica monomodo de CPD a Ciber
- 1 x enlace Ethernet Cat. 7 de CPD a Ciber

## Rack interconexión infraestrutura troncal do centro
1 x Rack Aula de reforzo de Ciberseguridade - **R23**

- 1 x patch panel 24 portos ethernet
- 1 x patch panel 24 portos fibra
- Switch DLINK DGS-1250-28X
   - 24 portos Ethernet
   - 4 portos fibra
- Regleta de 8 enchufes

## Rack Comunicacións/redes CE Ciberseguridade
1 x rack 19" (medidas 800x600) de 42 U para os switches - **RK01**

- 2 x patch panel 24 portos Ethernet
- regleta de 24 enchufes  NON!
- Switch:  NON!

## Rack Servidores CE Ciberseguridade
1 x rack 19" (medidas 800x1000) de 42 U para os servidores - **RK02**

- 3 x regleta de 8 = total 24 enchufes
- patch panel 1x24   NON!
- Switch:
   - 3 x Fibra para interconexión servidores Proxmox
- Switch:
   - 3 x Ethernet para IdRAC
- 3 x DELL PowerEdge R760xs
   - RAM: 8 x 64GB = 512GB - DDR5 RDIMM a 5600 MT/s (**servidor 3 só ten 2 x 64 GB = 128 GB**)
   - Procesadores:
      - 2 x Intel Xeon Silver 4510 a 2'4GHz, 16 GT/s, 30 MB de cache, 150W (**48 núcleos**)
   - Discos:
      - Sistema operativo: 2 x 480GB SSD SATA en RAID 1
      - Sistema distribuído: 4 x 4TB SAS ISE, 12 Gb/s, 7200 RPM, 
   - Interfaces de rede:
      - 2 x PCI Express Ethernet 10/25 GbE, Dual SFP+ Port
      - 1 x iDRAC9, Enterprise 16G
      - 2 x fibra  FALTAN TODAVÍA!!
   - PSU:
      - dual, redundante (1+1), PSU en quente, 700W
   - Servizos de asistencia:
      - ProSupport que remata o 6 de outubro de 2028 
- 1 teclado + rato + monitor para acceso directo por consola


| Servidor | NIC           | MAC | Rede                     | IP                     |
| -------- | ------------- | --- | ------------------------ | ---------------------- |
| srvpve01 | *out-of-band* |     | iDRAC                    | 192.168.7.111          |
| srvpve01 | eno8303       |     | PROXMOX (administración) | 192.168.7.101          |
| srvpve02 | *out-of-band* |     | iDRAC                    | 192.168.7.112          |
| srvpve02 | eno8303       |     | PROXMOX (administración) | 192.168.7.102          |
| srvpve03 | *out-of-band* |     | iDRAC                    | 192.168.7.113          |
| srvpve03 | eno8303       |     | PROXMOX (administración) | 192.168.7.103          |





## Postos de traballo
11x posto de alumno/a

- 3 tomas de datos Ethernet internas (**C**xx)
- 1 toma de datos Ethernet troncal (**D**xx)
- 3 enchufes eléctricos

# Nomenclatura
## Racks - RKxx
- RK01 -> Rack de comunicacións (switches)
- RK02 -> Rack de servidores e almacenamento (Proxmox)

## Regletas enchufes / schukos (Power Distribution Unit) - PDUxx
- PDU01 -> PDU arriba
- PDU02 -> PDU abaixo
- PDU03 -> PDU máis abaixo

Tomas individuais - SKxx
- SK01 -> Schuko esquerda
- SK02 -> Schuko dereita
- SK03 -> Schuko máis á dereita


## Switches - SWxx
- SW01 -> Switch arriba
- SW02 -> Switch abaixo
- SW03 -> Switch máis abaixo

## Patch panels - PPxx
- PP01 -> Patch Panel arriba
- PP02 -> Patch Panel abaixo
- PP03 -> Patch Panel máis abaixo

## Tomas Ethernet troncais do centro- Dxx
- D01 -> Toma Ethernet - Punto 01
- D02 -> Toma Ethernet - Punto 02

## Tomas Ethernet interiores de Ciberseguridade- Dxx
- C01 -> Toma Ethernet - Punto 01
- C02 -> Toma Ethernet - Punto 02

## Tomas fibra - TFxx
- TF01 -> Toma Fibra Monomodo - Punto 01
- TF02 -> Toma Fibra Monomodo - Punto 02

## Servidores - srvpvexx
- srvpve01 -> Servidor arriba
- srvpve02 -> Servidor abaixo
- srvpve03 -> Servidor máis abaixo

## SAI
- UPS01 -> UPS Principal

## Cables - orixe-destino
- SW01-TE24 -> SW02-TE01  -> Cable de Switch01 - porto 24 a Switch02 - porto 01

# Rangos de redes 

- Administración Proxmox: **192.168.7.0/24** (comparte rede coas VMs/containers se non hai segregación) -> rede suxerida: 192.168.99.0/24
   - 192.168.7.101  -- proposta 51, 52, 53
   - 192.168.7.102
   - 192.168.7.103

- IdRAC: (usamo-la mesma rede que os servidores por comodidade)
   - 192.168.7.111  -- proposta 61, 62, 63
   - 192.168.7.112
   - 192.168.7.113

- Máquinas virtuais: **192.168.7.50..149** (comparte rede cos servidores Proxmox se non hai segregación) -> rede suxerida: a LAN da aula
   - (100 IPs para que non se pisen coas que o **DHCP asigna a máquinas sen rexistrar: 150-250**)

- **Acceso ós storages para ler/escribir por parte das máquinas virtuais**, e tráfico entre nodos do clúster: **10.10.10.0/24**
   - 10.10.10.101
   - 10.10.10.102
   - 10.10.10.103

- Recuperación, rebalanceo e **replicación interna entre OSDs do Ceph** no clúster: **10.10.20.0/24**
   - 10.10.20.101
   - 10.10.20.102
   - 10.10.20.103

Táboa Comparativa

| Característica	| iDRAC	| Management	| Almacenamento/Clúster	| Corosync |
|-----------------|--------|--------------|-----------------------|----------|
| Propósito	|Hardware	| Admin Proxmox	| Datos nodos	| Sincronización clúster |
| Protocolos	| IPMI, HTTP	| HTTP/HTTPS, SSH	| NFS, iSCSI, Ceph	| Corosync |
| Ancho Banda	| Baixo	| Medio	| **Alto**	| Moi Baixo |
| Latencia	| Non | **crítica**	| Non crítica	| Importante	| **Crítica** |
| Rede	| Dedicada	| Compartida	| Dedicada	| Dedicada |
| Acceso	| Web/SSH	| Web:8006/SSH	| Interno nodos	| Interno clúster |

Configuración ideal de redes

```
| Función                 | Interface | Tipo     | Velocidade | Rede                              |
| ----------------------- | --------- | -------- | ---------- | --------------------------------- |
| Administración/Corosync | eno1      | Ethernet | 1–10 GbE   | 192.168.99.0/24                   |
| Rede MV                 | eno2      | Ethernet | 1–10 GbE   | LAN organización (192.168.7.0/24) |
| Rede pública Ceph       | ens6f0np0 | Fibra    | 25–100 GbE | 10.10.10.0/24                     |
| Rede clúster Ceph       | ens6f1np1 | Fibra    | 25–100 GbE | 10.10.20.0/24                     |

                 +-------------------------+
                 |        Router/LAN       |
                 +-------------------------+
                          | (MVs)
                 ----------------------------  eno2 (Rede MV)
                          |
            +-----------------------------------------+
            |   Nodo Proxmox 1                        |
            +-----------------------------------------+
            | eno1  -> Administración 192.168.10.0/24 |
            | eno2  -> Rede MV                        |
            | ens6f0np0 -> Ceph Pública 10.10.10.0/24 |
            | ens6f1np1 -> Ceph Clúster 10.10.20.0/24 |
            +-----------------------------------------+

            (igual Nodo 2 e Nodo 3)

Rede Ceph Pública (25/100 GbE)  -----------------------------  
Rede Ceph Clúster (25/100 GbE)  -----------------------------
```


# Plan de traballo
Descrición do proceso dende o desempaquetado ata ter un clúster Proxmox completamente funcional montado en rack. 

Executar cada fase de forma secuencial e verificar cada paso antes de continuar.

## Fase 1: Planificación e preparación

### 1.1. Verificación de conectividade de tomas de datos e eléctricas
- [ OK ] Comprobar que as tomas de datos dos postos teñen conexión cos patch panel dos racks correspondentes
- [ OK ] Comprobar que as tomas eléctricas dos postos teñen corrente
- [  ] Comprobar que as tomas de interconexión co troncal do centro, no rack troncal teñen conexión co CPD do centro
  
### 1.2. Verificación de hardware
- [ OK ] Comprobar que os 3 DELL Optiplex son modelos compatibles con Proxmox
- [ OK ] Comprobar que dispón dos módulos RAM (servidores 1 e 2: 8 x 64 GB, servidor 3: 2 x 64 GB)
- [ OK ] Comprobar que dispón de 2 discos SSD (480 GB c/u) para o sistema (usaranse en RAID 1)
- [ OK ] Comprobar que dispón de 4 discos mecánicos SAS (4 TB c/u) para o sistema de arquivos distribuído (NON SE MONTA NINGÚN RAID SOBRE ELES)
- [ ] Verificar que as tarxetas de fibra son compatibles cos DELL PowerEdge R760xs
- [ OK ] Confirmar dispoñibilidade de raíles DELL específicos para o modelo PowerEdge R760xs
- [ ] Preparar cables de fibra óptica LC-LC ou SC-SC segundo as tarxetas
- [ ] Ter a man switches de fibra ou direct-attach cables para interconexión

### 1.3. Recursos necesarios
- [ OK ] USB >8GB para instalación de Proxmox
- [ OK ] ISO de Proxmox VE 9.0 última versión
- [ OK ] Monitor, teclado e rato temporal
- [ OK ] Ferramentas de montaxe en rack (nin sequera un desaparafusador estrela para poder abri-lo chasis dos servidores e instala-las tarxetas de rede -e eventuais discos extra-)
- [ ] Etiquetas para cableado
- [ ] Documentación de rede (IPs, VLANs, etc.)

--- 

** UN/UNHA ALUMNO/A NUNCA TRABALLO SÓ NO TALLER DE CIBERSEGURIDADE: dúas ou tres persoas en cada grupo!!!**

--- 

## Fase 2: Desempaquetado e configuración hardware
- Documentación oficial DELL PowerEdge R760xs: [https://dl.dell.com/content/manual31635693-dell-poweredge-r760xs-manual-de-instalaci%C3%B3n-y-servicio.pdf?language=es-mx](https://dl.dell.com/content/manual31635693-dell-poweredge-r760xs-manual-de-instalaci%C3%B3n-y-servicio.pdf?language=es-mx)
- Guía oficial de configuración de seguridade da Bios: [https://dl.dell.com/content/manual19847319-dell-poweredge-server-bios-security-configuration-guide.pdf?language=en-us](https://dl.dell.com/content/manual19847319-dell-poweredge-server-bios-security-configuration-guide.pdf?language=en-us)

### 2.1. Desempaquetado e verificación
Para cada servidor:

- [ OK ] Desempaquetar nunha superficie limpa e antiestática
- [ OK ] Verificar que non hai danos visibles no transporte
- [ OK ] Comprobar accesorios incluídos (cables, documentación)
- [ OK ] Etiquetar cada servidor (srvpve01, srvpve02, srvpve-03)

### 2.2. Instalación de compoñentes
- [ ] Apagar e desenchufar cada servidor
- [ ] Abrir chasis segundo manual
- [ ] Instalar tarxetas de fibra en slots PCIe dispoñibles
- [ ] Verificar que as tarxetas están firmemente asentadas
- [ ] Pechar chasis e asegurar tódolos parafusos

### 2.3. Configuración BIOS/UEFI
Conectar un **monitor + teclado + rato** en cada servidor, **SEN ENRACKAR (3 pantallas, teclados e ratos)**.

Acceder a **Setup BIOS** (**F2** durante arranque)

- [ OK ] Configurar modo UEFI (recomendado)
- [ OK ] ¿Deshabilitar Secure boot?
- [ ] Activar Virtualization Technology (VT-x/VT-d)
- [ OK ] Habilitar nos dispositivos GENERIC USB BOOT (en BOOT SETTINGS)
- [ OK ] Configurar arranque por orde: USB -> SSD/HDD (ou mellor **deixa-lo disco do sistema en primeiro lugar para evitar arranque por USB alleo**: nese caso para instalar hai que excoller USB no Boot Menu coa tecla **F11** durante o arranque)
- [ OK ] Establecer fuso horario, data/hora correcta
- [ OK ] Gardar configuración e saír

---

## Fase 3: Configuración iDRAC
- Documentación oficial: [https://dl.dell.com/content/manual61503815-gu%C3%ADa-del-usuario-idrac9.pdf?language=es-mx](https://dl.dell.com/content/manual61503815-gu%C3%ADa-del-usuario-idrac9.pdf?language=es-mx)
  
### 3.1. Configuración iDRAC básica
Os servidores DELL Optiplex teñen iDRAC:

- [ OK ] Arrancar e premer **F10** durante boot
- [ OK ] Navegar a iDRAC Settings
- Configurar:
   - [ OK ] ***IP Lyfecycle controller***: deixar sen configurar (en branco)
   - [ OK ] Network:
      - IP estática 192.168.7.xxx, máscara e porta de enlace
      - DNS 192.168.10.101, 192.168.10.102 (para permitir actualizacións por rede)
      - VLAN desactivado
   - Usuario: root
      - 
   - [ OK ] Habilitar acceso web
   - Habilitar acceso SSH??
   - Configuración do RAID de almacenamento:
      - [ OK ] RAID 1 nos dous discos do sistema SSD
      - [ ] Sen RAID nos discos de almacenamento SAS (`iDRAC -> Storage -> Controllers -> Select Controller -> Set to HBA Mode`)
- [ ] Gardar e saír

### 3.2. Acceso iDRAC
Dende navegador web:

- [ OK ] Conectar a https://IP_iDRAC
- [ OK ] Login con credenciais configuradas
- [ ] Verificar:
   - Estado de hardware
   - Temperaturas
   - Logs de sistema

### 3.3 Configuración dos discos de almacenamento
> Os nosos servidores ***Dell PowerEdge R760xs*** veñen cun controlador ***PERC H755*** que non soportan *JBOD (Non-RAID)* nativamente, polo que **non presentan os discos ó SO se non están nun RAID**.

> - Podemos comprobar no iDRAC se os discos aparecen fisicamente en `iDRAC -> Storage -> Physical Disks`.

![Discos no iDRAC en estado Ready, pero non visibles para o sistema PROXMOX](imaxes/discosReadyIDRAC.png)

> - Pero aínda que aí si que aparecen, como xa dixemos, **se non están nun disco virtual (VD), non aparecen no sistema operativo**.

Para facer que Proxmox vexa os discos de almacenamento que temos destinados a ser usados con ***Ceph***, a solución é **crear un RAID0 por cada disco**.

- Conectar ó inteface web de iDRAC e:
   - Ir a `iDRAC -> Storage -> Virtual Disks`
   - Escoller `Create Virtual Disk`
   - Seleccionar `RAID0`
   - Escoller só 1 disco
   - Repetir para cada disco grande
 
![Discos no iDRAC en estado Ready, pero non visibles para o sistema PROXMOX](imaxes/discosRaid0CreadosIDRAC.png)

O resultado é que os discos no iDRAC pasan ó estado Online e cada disco aparece en Proxmox (no apartado de `Disks` do nodo) como discos individuais (Ceph funciona correctamente con isto).

![Discos dispoñibles no sistema PROXMOX](imaxes/discosNodoProxmox.png)

Tamén é posible comprobar que agora xa aparecerán todolos discos físicos conectándonos por SSH ó servidor Proxmox:

```bash
lsblk
fdisk -l
```

---

## Fase 4: Instalación de Proxmox VE

### 4.1. Preparación USB de instalación
En ordenador de traballo:

- [ OK ] Descargar Proxmox VE ISO desde proxmox.com
- [ OK ] Usar Ventoy para crear USB booteable
- [ OK ] Verificar que o USB é booteable

### 4.2. Instalación do sistema
Para CADA servidor:

- [ OK ] Conectar USB de instalación
- [ OK ] Arrancar e premer **F11** para **Boot Menu**
- [ OK ] Seleccionar USB boot device
- [ OK ] Seguir instalación gráfica de Proxmox:
   - [ OK ] Aceptar EULA
   - [ OK ] Seleccionar disco de destino da instalación (SSD 480 GB) -**no noso caso debe estar previamente configurado como RAID1**-
   - [ OK ] Configurar:
     * País: Spain
     * Zona horaria: Europe/Madrid
     * Teclado: español
   - [ OK ] Configurar rede:
     * Escoller interface de rede: eno8303 (a tarxeta correctamente conectada á rede de PROXMOX)
     * Hostname: srvpve01, srvpve02, srvpve03
     * IP address: 192.168.7.101/102/103 (según plan)
     * Gateway: 192.168.7.254
     * DNS: 192.168.10.101, 192.168.10.102
     * [ ] Hostname (FQDN): srvpve01.teis.intranet, srvpve02.teis.intranet, srvpve03.teis.intranet   OLLO!!!! USAR DOMINIO TEIS??????????????
   - [ OK ] Configurar password de root
   - [ ] Configurar dirección de correo para notificacións de Proxmox   OLLO!!!! ELIXIR CONTA CORREO NOTIFICACIÓNS E CONFIGURAR RELAY CORREO????
   - [ OK ] Esperar a que complete instalación
   - [ OK ] Retirar USB e reiniciar

### 4.3. Configuración post-instalación
- [ OK ] Acceder vía web: https://IP_SERVIDOR:8006

1. Para cada nodo:
   - Login con root e password
   - Actualizar repositorios:
   
```bash
     sed -i 's/^deb/#deb/' /etc/apt/sources.list.d/pve-enterprise.list
     echo "deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list
```

   - Actualizar sistema:
   
```bash
     apt update && apt dist-upgrade -y
```

   - Reiniciar para aplicar updates

---

## Fase 5: Configuración do clúster Proxmox

### 5.1. Creación do clúster
En srvpve01 (primeiro nodo):

```bash
pvecm create cluster-proxmox
```
En srvpve02 e srvpve03:

```bash
pvecm add IP_srvpve01
```

### 5.2. Configuración de rede para clúster
Configurar `corosync` para tráfico de clúster:

1. En cada nodo, editar `/etc/pve/corosync.conf`
2. Verificar que todos os nodos están listados
3. Configurar rede dedicada se é posible para tráfico de clúster

### 5.3. Configuración de almacenamento compartido

# Segundo a infraestrutura dispoñible:

1. Configurar NFS, **Ceph** ou outro almacenamento compartido
2. Engadir almacenamento no clúster
3. Verificar acceso desde tódolos nodos

---

## Fase 6: Montaxe en rack
**Mínimo 3 persoas para colocar cada servidor no rack!**

### 6.1. Preparación do rack
- [ OK ]  Verificar que o rack está nivelado e seguro
- [ OK ]  Planificar posición de cada servidor (U)
- [ OK ]  Preparar raíles segundo instrucións DELL
- [ OK ]  Verificar que hai espazo para cableado traseiro

### 6.2. Instalación dos raíles
Para cada servidor:

- [ OK ]  Instalar pezas laterais nos servidores
- [ OK ]  Montar raíles externos no rack
- [ OK ]  Verificar que os raíles están nivelados
- [ OK ]  Comprobar mecanismo de bloqueo/desbloqueo

### 6.3. Montaxe dos servidores
1. Con axuda, levantar cada servidor á altura do rack
2. Enganchar parte traseira dos raíles primeiro
3. Empuxar suavemente até que encaixe na parte dianteira
4. Asegurar con parafusos de seguridade se é necesario
5. Verificar que o servidor despraza suavemente

### 6.4. Organización do cableado
1. Cableado de rede:
   - Conexión management (1Gbps)
   - Conexións de fibra para cluster/comunicación
   - Conexión iDRAC se existe

2. Cableado de potencia:
Cada servidor ten 2 fontes de alimentación. Cada regleta é dun circuíto diferente polo que hai que conectar cada unha das fontes de cada servidor a una regleta diferente.
   - Conectar cada fonte de alimentación á PDU do rack
   - Usar diferentes circuitos se é posible
   - Organizar cables con bridas

3. Etiquetar todos os cables:
   - Servidor de destino
   - Tipo de conexión
   - VLAN se aplicable

---

## Fase 7: Verificación final

### 7.1. Comprobación de hardware
1. Encender tódolos servidores
2. Verificar que arrancan correctamente
3. Comprobar que as tarxetas de fibra son detectadas
4. Verificar conectividade de rede

### 7.2. Comprobación do clúster
Dende pve-01:

```bash
pvecm status
pvecm nodes
```

Verificar en interface web:

- Tódolos nodos aparecen no clúster
- Estado "online" para todos
- Almacenamento compartido accesible

### 7.3. Test de migración
1. Crear unha VM de proba nun nodo
2. Migrar en vivo a outro nodo
3. Verificar que a migración foi exitosa
4. Comprobar conectividade de rede na VM

---

## Fase 8: Documentación

### 8.1. Crear documentación do clúster
1. Listar IPs de cada servidor e iDRAC
2. Documentar configuración de rede
3. Gardar passwords en xestor seguro
4. Crear diagrama de rede
5. Documentar procedementos de backup

--- 

## Outros pasos:

1. **Seguridade**: Cambiar passwords por defecto inmediatamente
2. **Backup**: Configurar backup da configuración de Proxmox
3. **Monitorización**: Configurar alertas por email
4. **Mantemento**: Planificar períodos de actualización

