# ⚖️ 2_servidor-balanceador-carga.md
## Balanceador de carga con Nginx (Debian 12)

Este documento describe la **configuración completa del balanceador de carga**, que actúa como **medida de alta disponibilidad y seguridad defensiva** frente al ataque DDoS simulado.

El balanceador recibe todas las peticiones HTTP y las reparte entre **dos servidores web vulnerables**, evitando que uno solo quede saturado.

---

## Objetivo del balanceador

- Centralizar el acceso al servicio web
- Repartir la carga entre varios servidores
- Aumentar la disponibilidad
- Mostrar que:
  > “la defensa también es arquitectura”

---

## Características de la máquina virtual

| Parámetro | Valor |
|---------|------|
| SO | Debian 12 |
| RAM | 1 GB |
| CPU | 1 |
| Servidor | Nginx |
| Rol | Reverse proxy + Load balancer |

---

## Configuración de red

El balanceador tiene **DOS interfaces**:

| Interfaz | Uso | Configuración |
|--------|----|---------------|
| enp0s3 | Acceso desde el aula / host | Bridge + DHCP |
| enp0s8 | Red interna con servidores web | IP estática |

### IP interna del balanceador

Ejemplo:

```

192.168.100.10

````

---

## `/etc/network/interfaces`

Ejemplo de configuración mínima:

```ini
auto enp0s3
iface enp0s3 inet dhcp

auto enp0s8
iface enp0s8 inet static
    address 192.168.100.10
    netmask 255.255.255.0
````

Reiniciar red:

```bash
sudo systemctl restart networking
```

---

## Instalación de Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

Comprobar estado:

```bash
systemctl status nginx
```

---

## Configuración del balanceo de carga

### 1. Definir el backend (upstream)

Editar el archivo principal:

```bash
sudo nano /etc/nginx/conf.d/loadbalancer.conf
```

Contenido:

```nginx
upstream servidores_web {
    server 192.168.100.11;
    server 192.168.100.12;
}

server {
    listen 80;

    location / {
        proxy_pass http://servidores_web;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Guardar y salir.

---

## Comprobación de sintaxis

```bash
sudo nginx -t
```

Debe devolver:

```
syntax is ok
test is successful
```

---

## Reiniciar Nginx

```bash
sudo systemctl restart nginx
```

---

## Prueba de funcionamiento

Desde el propio balanceador:

```bash
curl http://192.168.100.11
curl http://192.168.100.12
```

Ambos deben responder.

Ahora prueba el balanceador:

```bash
curl http://192.168.100.10
```

O desde el host (IP por DHCP del balanceador):

```bash
curl http://IP_BRIDGE_DEL_BALANCEADOR
```

La página debe:

* responder
* tardar algo
* pero **no caer inmediatamente**

---

## Demostración del balanceo

Ejecuta varias veces:

```bash
curl http://IP_BALANCEADOR
```

Mientras tanto, en los servidores web:

```bash
top
```

Verás que:

* la carga se reparte
* ningún servidor se satura tan rápido como cuando estaba solo

---

## Ataque DDoS contra el balanceador

Desde una o varias máquinas:

```bash
while true;
do curl -s http://IP_BALANCEADOR > /dev/null;
done
```

Observa:

* el servicio tarda más
* pero **aguanta mejor**
* sigue respondiendo durante más tiempo

---

## Extra: Limitación básica por IP

Para mostrar una **defensa adicional sencilla**, añade:

Editar el mismo archivo:

```bash
sudo nano /etc/nginx/conf.d/loadbalancer.conf
```

Dentro del `server {}`:

```nginx
limit_req_zone $binary_remote_addr zone=ddos:10m rate=5r/s;

server {
    listen 80;

    location / {
        limit_req zone=ddos burst=10;
        proxy_pass http://servidores_web;
    }
}
```

Comprobar y reiniciar:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

Ahora el ataque con `curl` será **mucho menos efectivo**.

---

## Mensaje clave

* El balanceador **no elimina el ataque**
* Reduce el impacto
* Permite escalar
* Compra tiempo para reaccionar

---

## 🔜 Siguiente paso

Configurar correctamente los **dos servidores web backend** para trabajar detrás del balanceador.

👉 Continúa con: [3_servidores-web-int.md](3_servidores-web-int)
