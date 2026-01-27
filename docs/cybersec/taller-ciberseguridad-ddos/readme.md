# 🛡️ Escenario práctico de DDoS y balanceo de carga (Debian 12)

Este repositorio contiene un **escenario práctico completo de ciberseguridad**, diseñado para ser ejecutado **en vivo** durante una charla o clase,  orientado a **SMR**, adaptable a otros niveles.

El objetivo es **mostrar de forma visual y comprensible** cómo:
- un ataque sencillo de tipo **DDoS** puede tumbar un servidor mal dimensionado
- el **balanceo de carga** mejora la **disponibilidad** y la **seguridad**
- la **seguridad ofensiva** ayuda a diseñar **mejores defensas**

Todo el escenario está basado en **servidores Debian 12** y ejecutado sobre **VirtualBox**.
Importar escenario completo: [drive.google.com](https://drive.google.com/file/d/1youuMw9QuI2W8kBspaG40wpCOiNSKGpf/view?usp=sharing)
- usuario: administrador / root
- passwd: renaido

---

## Objetivos didácticos

- Entender qué es un **DDoS** sin usar malware ni herramientas ilegales
- Ver la diferencia entre:
  - ❌ un servidor aislado
  - ✅ una pequeña infraestructura
- Comprender el papel de un **balanceador de carga**
- Introducir conceptos reales de:
  - alta disponibilidad
  - seguridad defensiva
  - limitación de recursos
- Aprender que la seguridad no es solo “poner firewalls”, sino **arquitectura**

---

## Arquitectura del escenario

El laboratorio está formado por **3 máquinas virtuales**:

```
            Internet / Red del aula
                    |
             (Bridge - DHCP)
                    |
                [ LB ]
          Balanceador de carga
          Debian 12 + Nginx
            IP interna: 192.168.100.10
                    |
             (Red interna VirtualBox)
                    |
      ┌─────────────┴───────────────────┐
      │                                 │
   [ WEB1 ]                          [ WEB2 ]
Apache + PHP                     Apache + PHP
IP: 192.168.100.11              IP: 192.168.100.12

````

---

## Máquinas virtuales

| VM   | Rol                         | RAM   | CPU |
|-----|-----------------------------|-------|-----|
| web1 | Servidor web vulnerable     | 512MB | 1   |
| web2 | Servidor web vulnerable     | 512MB | 1   |
| lb   | Balanceador de carga        | 1GB   | 1   |

- Todas las máquinas usan **Debian 12**
- Los servidores web **no tienen swap**
- La página web está diseñada para ser **muy exigente en CPU**

---

## Redes en VirtualBox

- **enp0s3 (Bridge + DHCP)**  
  Usada solo para:
  - gestión
  - acceso desde el PC del profesor
  - salida a Internet

- **enp0s8 (Red interna VirtualBox)**  
  Usada para:
  - comunicación entre balanceador y servidores web
  - tráfico del servicio HTTP

La red interna utilizada es, por ejemplo: `intnet`.

---

## Ataque DDoS (simulado)

El ataque se realiza **únicamente con `curl`**, desde:
- el host
- o varios PCs del alumnado

Ejemplo de ataque:

```bash
while true; do curl -s http://IP_OBJETIVO > /dev/null; done
````

No se usan:

* botnets
* malware
* herramientas externas

Esto permite explicar que **no hace falta “hackear” nada para causar una denegación de servicio**.

---

## Defensa aplicada

La defensa se construye **por capas**:

1. Balanceo de carga con Nginx
2. Reparto de peticiones entre dos servidores
3. limitación de peticiones por IP
4. Infraestructura en lugar de servidor único

---

## Estructura del repositorio

```
.
├── README.md            # Visión general del escenario
├── servidor_web_ddos.md         # Servidor web vulnerable (demo DDoS)
├── servidores_web_int.md     # Configuración de web1 y web2
└── servidor_lb.md          # Balanceador de carga (Nginx)

```

---

## Aviso importante

Este escenario está diseñado **EXCLUSIVAMENTE** para:

* entornos de laboratorio
* redes aisladas
* fines educativos

❌ No debe ejecutarse contra servicios reales
❌ No debe exponerse a Internet

---

## Mensaje clave de la práctica

> “Un ataque sencillo puede causar un gran impacto.
> La defensa no está en una sola herramienta, sino en el diseño.”

---

## 📌 Licencia

Material educativo.
Úsalo, modifícalo y compártelo para fines formativos.
