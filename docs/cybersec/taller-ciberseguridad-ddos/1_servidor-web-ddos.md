# 1_servidor-web-ddos.md
## Servidor web vulnerable para demo de DDoS (Debian 12)

Este documento describe la **creación y configuración de un servidor web deliberadamente vulnerable**, diseñado para **caer bajo carga** y servir como demostración práctica de un ataque de tipo **Denegación de Servicio (DoS/DDoS)**.

Este servidor se usará:
- primero **de forma aislada**
- después **detrás de un balanceador de carga**

---

## Objetivo del servidor

- Mostrar cómo un **servidor web único**, con recursos muy limitados:
  - puede dejar de responder
  - puede devolver errores 500
  - puede saturar CPU
- Demostrar que **no hace falta malware ni exploits**
- Introducir la idea de que:
  > “una arquitectura pobre es una vulnerabilidad”

---

## Características de la máquina virtual

| Parámetro | Valor |
|---------|------|
| SO | Debian 12 |
| RAM | 512 MB |
| CPU | 1 |
| Swap | ❌ Deshabilitada |
| Servidor web | Apache2 |
| Lenguaje | PHP |

---

## Red

Este servidor **NO necesita acceso a Internet** una vez instalado.

Interfaz:
- `enp0s8` → Red interna VirtualBox  
- IP estática (ejemplo):
```

192.168.100.11

````

---

## Instalación de paquetes necesarios

Actualizar el sistema:

```bash
sudo apt update && sudo apt upgrade -y
````

Instalar Apache y PHP:

```bash
sudo apt install apache2 php libapache2-mod-php -y
```

Comprobar que Apache está activo:

```bash
systemctl status apache2
```

Debe aparecer:

```
Active: active (running)
```

---

## Desactivar swap (MUY IMPORTANTE)

Este paso es clave para que el servidor **caiga más fácilmente**.

### 1. Desactivar swap en caliente

```bash
sudo swapoff -a
```

### 2. Eliminar swap del arranque

Editar `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

Comentar o eliminar cualquier línea que contenga `swap`, por ejemplo:

```text
# /swapfile none swap sw 0 0
```

### 3. (Opcional) Eliminar el archivo swap

```bash
sudo rm -f /swapfile
```

Verificar:

```bash
free -h
```

Debe mostrar:

```
Swap: 0B
```

---

## Página web deliberadamente exigente

La clave de la demo es una **página web mal diseñada**, que:

* consume CPU
* se ejecuta en cada petición
* no tiene ningún tipo de caché

### 📄 Archivo: `/var/www/html/index.php`

Eliminar cualquier archivo previo:

```bash
sudo rm /var/www/html/index.html
```

Crear el archivo PHP:

```bash
sudo nano /var/www/html/index.php
```

Contenido:

```php
<?php

echo "<h1>Servidor web vulnerable</h1>";
echo "<p>Hora del servidor: " . date("H:i:s") . "</p>";

// Cálculo absurdo para consumir CPU
$contador = 0;
for ($i = 0; $i < 100000000; $i++) {
    $contador += sqrt($i);
}

echo "<p>Cálculo terminado</p>";
?>
```

Guardar y salir.

---

## Permisos correctos

```bash
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

---

## Prueba local

Desde el propio servidor:

```bash
curl http://localhost
```

Debe:

* tardar varios segundos
* devolver HTML

Si ya tarda **mucho**, es buena señal

---

## Simulación de ataque DoS (local)

**Solo en laboratorio**

Desde el propio servidor o desde otra máquina:

```bash
while true;
do curl -s http://IP_DEL_SERVIDOR > /dev/null;
done
```

Observa en otra terminal:

```bash
top
```

Verás:

* CPU al 100%
* Apache saturado
* lentitud extrema

---

## Comportamiento esperado bajo carga

Durante el ataque:

* la web tarda mucho o no responde
* aparecen errores `HTTP 500`
* `curl` se queda colgado
* el servidor deja de atender peticiones nuevas

**Esto es el punto didáctico clave**

---

## Mensaje para el alumnado

* No se ha “hackeado” nada
* No se ha explotado ninguna vulnerabilidad
* Solo se han hecho **muchas peticiones**
* El problema es:

  * poca RAM
  * sin swap
  * página mal diseñada
  * servidor único

---

## Siguiente paso

Una vez comprobado que **este servidor cae**, se usará como:

* backend de un **balanceador de carga**
* parte de una infraestructura más robusta

👉 Continúa con: [2_servidor-balanceador-carga.md](../2_servidor-balanceador-carga)
