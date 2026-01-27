# 🖥️ 3_servidores-web-int.md
## Servidores web backend para balanceo de carga

Este documento describe la **configuración conjunta de los dos servidores web** (`web1` y `web2`) que trabajan **detrás del balanceador de carga**.

Ambos servidores:
- son **deliberadamente simples**
- tienen recursos muy limitados
- ejecutan la **misma aplicación web**
- permiten visualizar claramente el reparto de carga

---

## Objetivo de esta parte

- Tener **dos servidores idénticos**
- Mostrar cómo el balanceador reparte peticiones
- Comparar el comportamiento:
  - servidor único vs infraestructura mínima
- Introducir el concepto de **escalado horizontal**

---

## Máquinas implicadas

| Servidor | IP interna |
|--------|------------|
| web1 | 192.168.100.11 |
| web2 | 192.168.100.12 |

Ambos usan:
- Debian 12
- Apache2
- PHP
- Sin swap
- 512 MB de RAM

---

## Configuración de red

Cada servidor web tiene **UNA interfaz**:

- `enp0s3` → Red interna VirtualBox

### Ejemplo: `/etc/network/interfaces`

#### web1

```
auto enp0s3
iface enp0s3 inet static
    address 192.168.100.11
    netmask 255.255.255.0
````

#### web2

```
auto enp0s3
iface enp0s3 inet static
    address 192.168.100.12
    netmask 255.255.255.0
```

Reiniciar red o máquina tras el cambio.

---

## Instalación de servicios (en ambos)

```bash
sudo apt update
sudo apt install apache2 php libapache2-mod-php -y
```

Comprobar:

```bash
systemctl status apache2
```

---

## Swap deshabilitada (recordatorio)

Verificar que **NO hay swap**:

```bash
free -h
```

Si aparece swap, revisa `serverweb.md`.

---

## Aplicación web común

Ambos servidores deben tener **exactamente la misma web**, salvo un pequeño detalle para identificar cada nodo.

### Archivo: `/var/www/html/index.php`

```bash
sudo nano /var/www/html/index.php
```

Contenido (MODIFICA SOLO EL NOMBRE DEL SERVIDOR):

#### web1

```php
<?php
echo "<h1>Servidor WEB1</h1>";
echo "<p>Backend web1</p>";
echo "<p>Hora: " . date("H:i:s") . "</p>";

$contador = 0;
for ($i = 0; $i < 100000000; $i++) {
    $contador += sqrt($i);
}

echo "<p>Proceso terminado</p>";
?>
```

#### web2

```php
<?php
echo "<h1>Servidor WEB2</h1>";
echo "<p>Backend web2</p>";
echo "<p>Hora: " . date("H:i:s") . "</p>";

$contador = 0;
for ($i = 0; $i < 100000000; $i++) {
    $contador += sqrt($i);
}

echo "<p>Proceso terminado</p>";
?>
```

---

## Permisos

En ambos servidores:

```bash
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

---

## Pruebas individuales

Desde el **balanceador**:

```bash
curl http://192.168.100.11
curl http://192.168.100.12
```

Debe verse claramente:

* “Servidor WEB1”
* “Servidor WEB2”

Si esto no funciona, **NO sigas**.

---

## Prueba de balanceo

Desde el balanceador o el host:

```bash
curl http://IP_BALANCEADOR
```

Ejecuta varias veces.

Resultado esperado:

* a veces WEB1
* a veces WEB2
* ambos consumen CPU

---

## Visualización de carga

En `web1` y `web2`, en terminales separadas:

```bash
top
```

Durante peticiones:

* la CPU sube en ambos
* no se concentra todo en uno solo

Esto es **clave para la explicación**.

---

## Ataque DDoS distribuido

Lanza el ataque contra el balanceador:

```bash
while true;
do curl -s http://IP_BALANCEADOR > /dev/null;
done
```

Observa:

* ambos servidores trabajan
* la caída es más lenta
* el servicio aguanta más tiempo

---

## Mensaje clave 

* No hemos “blindado” los servidores
* Solo hemos:

  * duplicado el servicio
  * añadido un punto de control
* La seguridad mejora **sin tocar el código**

---

## Conclusión del escenario

| Escenario         | Resultado         |
| ----------------- | ----------------- |
| 1 servidor        | Caída rápida      |
| 2 servidores + LB | Mayor resistencia |
| LB + limitación   | Ataque mitigado   |

---

## Notas finales

* Este escenario es **mínimo y educativo**
* No pretende ser producción
* Sirve para:

  * visualizar conceptos
  * provocar preguntas
  * abrir debate

---

## Fin del recorrido

Con esto queda completo el laboratorio.

Vuelve a:

* `README.md` para visión general

* 
