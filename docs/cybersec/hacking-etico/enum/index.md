# Escaneo y Enumeración

## 1. Introducción a la Fase de Enumeración

### 1.1 Contexto y Objetivos
- **Previo**: Fase de reconocimiento (información pasiva)
- **Actual**: Enumeración activa (fingerprinting) - interacción directa con objetivos
- **Propósito principal**: Identificar vectores de ataque mediante enumeración detallada

### 1.2 Información Objetivo
**Reconocimiento Externo:**
- IP públicas asignadas al cliente
- Direcciones de equipos individuales específicos

**Reconocimiento Interno:**
- Subredes de la organización identificadas
- Topología de red interna

### 1.3 Objetivos de Enumeración
1. **Identificar hosts activos** en la red objetivo
2. **Determinar puertos abiertos** en hosts activos (puerto, servicio, versión)
3. **Profundizar en información de servicios** específicos
4. **Ocasionalmente**: Pruebas de identificación de SO
5. **Posteriormente**: Enumeración de vulnerabilidades

### 1.4 Características de la Fase
- **Actividad activa**: Interacción con objetivos
- **Verificación**: Confirmación de direcciones IP y dominios obtenidos
- **Detección de nuevos elementos**: Rúteres, cortafuegos, equipos adicionales
- **Riesgo de detección**: Deja señales en logs, IDS/IPS, cortafuegos
- **Pruebas controladas**: Para evitar daños y detección temprana

### 1.5 Técnicas Principales
- Escáneres de red y vulnerabilidades
- Análisis de aplicaciones web
- Ingeniería social

## 2. Fases de Enumeración

### 2.1 Flujo General
Las fases se realimentan - información de una fase alimenta la siguiente

### 2.2 Fase 1: Descubrimiento de Red
**Objetivo**: Identificar equipos activos y crear mapa de red

**Técnicas:**
- **Trazado de rutas** (traceroute/tracert)
- **Barrido de red** (ping sweep)
- **Descubrimiento ARP** (netdiscover)

**Herramientas principales:**
- `ping`, `traceroute`, `tracert`
- `fping`, `nmap`
- `netdiscover` (activo/pasivo)

### 2.3 Fase 2: Escaneo de Puertos
**Objetivo**: Buscar puertos abiertos TCP/UDP (cada puerto abierto = servicio en escucha)

**Consideraciones:**
- Aumenta hostilidad y ruido
- Omisión posible si servicio ya conocido
- Ejemplo: Aplicaciones web accesibles desde Internet

**Estados de puertos:**
- **Abierto**: Disponible con servicio esperando conexiones
- **Cerrado**: Accesible pero sin servicio respondiendo
- **Filtrado**: No alcanzable por cortafuegos

### 2.4 Fase 3: Identificación de Servicios y Versiones
**Objetivo**: Determinar servicios específicos detrás de puertos abiertos

**Consideraciones:**
- Puertos no siempre corresponden a servicios por defecto
- Verificación manual a menudo necesaria
- Identificación de versiones crítico para búsqueda de vulnerabilidades

### 2.5 Fase 4: Identificación del Sistema Operativo
**Objetivo**: Determinar SO de dispositivos basado en comportamiento

**Métodos:**
- **Pasivo**: Observación de tráfico (p0f, Wireshark, NetworkMiner)
- **Activo**: Envío de paquetes específicos (nmap -O)

### 2.6 Fase 5: Enumeración de Servicios
**Objetivo**: Profundizar en información específica de servicios

**Enfoque por protocolo:**
- HTTP: directorios, tecnologías, vulnerabilidades
- SMB: shares, usuarios, permisos
- FTP: configuración, accesos
- SSH: versión, configuración

### 2.7 Fase 6: Enumeración de Usuarios
**Objetivo**: Identificar usuarios existentes y patrones de nomenclatura

**Utilidad**: Generación de diccionarios para fases posteriores

## 3. Fase 1: Descubrimiento de Red en Detalle

### 3.1 Trazado de Rutas (Traceroute)
**Propósito**: Determinar ruta de paquetes y nodos intermedios

**Herramientas:**
- **Linux**: `traceroute` (UDP puerto 33434 por defecto)
- **Windows**: `tracert` (ICMP por defecto)
- **Parámetros comunes**: Tiempos de espera, IPv6, protocolos alternativos

**Interpretación de resultados:**
- Asterisco (*): Paquete perdido o no respondido
- Tiempos elevados: Recursos sobrecargados
- Sin respuesta: Configuraciones de seguridad

**TTL/ICMP en acción:**
- TTL inicial = 1, incrementa progresivamente
- Respuesta ICMP "Time Exceeded" en cada salto
- Respuesta final indica destino alcanzado

### 3.2 Barrido de Red (Ping Sweep)
**Técnica**: Envío de ICMP echo requests a rango de red

**Limitaciones:**
- Filtros comunes a peticiones ICMP
- Hosts Windows no responden por defecto
- Posible omisión de equipos

**Implementaciones:**
- **Bucles con `ping`**: Scripting básico
- **`fping`**: Optimizado para barridos
- **`nmap`**: Opciones avanzadas (-sn)

### 3.3 Descubrimiento ARP (netdiscover)
**Alcance**: Solo misma red local (protocolo ARP)

**Modos:**
- **Pasivo**: Espera tráfico ARP existente (sigiloso, lento)
- **Activo**: Genera tráfico ARP (rápido, menos sigiloso)

**Comando**: `netdiscover`

## 4. Fase 2: Escaneo de Puertos en Detalle

### 4.1 Análisis TCP de Conexión Completa (TCP Connect)
**Proceso**: Three-way handshake completo

**Respuestas:**
- **SYN+ACK → Abierto** (conexión completada)
- **RST → Cerrado** (host activo)
- **Sin respuesta/ICMP error → Filtrado**

**Características:**
- No requiere privilegios especiales
- Deja logs en servidor
- Método más fiable pero menos sigiloso

### 4.2 Análisis TCP Half-Connect (SYN Scan)
**Proceso**: SYN enviado, RST enviado al recibir SYN+ACK

**Respuestas:**
- **SYN+ACK → Abierto**
- **RST → Cerrado**
- **Sin respuesta/ICMP error → Filtrado**

**Ventajas:**
- Más eficiente (sin reserva de recursos)
- Más sigiloso (posiblemente)
- Requiere permisos de administrador

### 4.3 Análisis TCP ACK
**Propósito**: Determinar actividad de host y filtrado

**Respuestas:**
- **RST → Host activo**
- **Sin respuesta → Inactivo o fuertemente filtrado**

**Utilidad**: Penetración de cortafuegos (menos atención que SYN)

### 4.4 Análisis UDP
**Desafío**: Protocolo no orientado a conexión

**Respuestas:**
- **ICMP Port Unreachable → Cerrado** (host activo)
- **Otros errores ICMP → Host no activo**
- **Sin respuesta → Abierto/Filtrado** (ambiguo)

### 4.5 Escaneos Especiales
**FIN Scan**: Segmento solo con FIN activado
**XMAS Scan**: FIN, URG y PUSH activos
**NULL Scan**: Todos bits de control a cero

**Comportamiento por SO:**
- **Linux**: Respuestas predecibles
- **Windows/Cisco**: Comportamiento variable

**Respuestas:**
- **RST → Cerrado** (host activo)
- **ICMP Unreachable → Filtrado**
- **Sin respuesta → Abierto/Filtrado**

## 5. Fase 3: Identificación de Servicios y Versiones

### 5.1 Enfoque General
- Verificación de servicios en puertos identificados
- Confirmación manual frecuentemente necesaria
- Uso combinado de herramientas

### 5.2 Nmap para Identificación
**Comando**: `nmap -sV [objetivo]`
**Precisión**: Variable según servicio y configuración

### 5.3 Captura de Banner
**Definición**: Mensaje de bienvenida/información de servicio

**Herramientas:**
- **Protocolo específico**: Conexiones directas
- **Netcat**: `nc [objetivo] [puerto]`
- **Scripts Nmap**: Ej. `banner`, servicio-específicos

### 5.4 Ejemplo Práctico: FTP
**Protocolo**: Puertos 20/21 por defecto

**Métodos:**
1. **Nmap -sV**: Identificación básica
2. **Scripts Nmap**: `ftp-anon`, `ftp-bounce`, `ftp-syst`
3. **Conexión directa**: `ftp [objetivo]` o `nc [objetivo] 21`

**Comandos FTP útiles:**
- `SYST`: Información del sistema
- `STAT`: Estado del servidor

### 5.5 Ejemplo Práctico: SSH
**Protocolo**: Puerto 22 por defecto

**Característica**: Pide contraseña antes de banner

**Herramienta preferida**: Netcat sobre cliente SSH

## 6. Fase 4: Enumeración del Sistema Operativo

### 6.1 Métodos de Detección
**Basados en**: Implementaciones de protocolos y comportamientos

**Marcadores comunes**: 
- Valores en cabeceras TCP (tamaño ventana, TTL)
- Respuestas a paquetes específicos

### 6.2 Detección Pasiva
**Ventaja**: Sigilosa
**Desventaja**: Lenta
**Herramientas**:
- **Wireshark**: Análisis manual de tráfico
- **p0f**: Preinstalado en Kali
- **NetworkMiner**: Análisis forense
- **Satori**: Herramienta especializada

### 6.3 Detección Activa (Nmap)
**Comando**: `nmap -O [objetivo]`
**Precisión**: Alta pero no infalible
**Limitación**: Menos precisa con Windows

**Resultados**: Ordenados por probabilidad

## 7. Fase 5: Enumeración de Servicios - HTTP

### 7.1 Pasos para Enumeración Web
1. **Inspección visual**: Navegación manual
2. **Detección de tecnologías**: Servidores, frameworks, lenguajes
3. **Fuzzing web**: Descubrimiento de contenido oculto
4. **Análisis automático**: Herramientas especializadas

### 7.2 Inspección Visual
**Elementos a revisar:**
- **Código JavaScript**: Funcionalidad y lógica
- **Comentarios HTML**: Información reveladora
- **Archivos incluidos**: JS/CSS personalizados
- **Cookies**: Posible session hijacking
- **Páginas de login**: Credenciales por defecto
- **Footers/About**: Información de versión

**Herramientas del navegador:**
- Inspector de elementos
- Depurador JavaScript
- Gestor de cookies

### 7.3 Detección de Tecnologías
**Wappalyzer**: Plugin de navegador
**Whatweb**: Herramienta de terminal preinstalada en Kali

**Ejemplo**: `whatweb [URL]`

### 7.4 Enumeración de CMS Específicos
**WordPress:**
- **WPScan**: Herramienta principal
- **Scripts Nmap**: `http-wordpress-users`, `http-wordpress-enum`, `http-wordpress-brute`

**Joomla:**
- **Joomscan**: Herramienta en Perl

**Drupal:**
- **Drupwn**: Soporte versiones 7 y 8

**Multi-CMS:**
- **CMSeek**: Soporte para 180+ CMS

### 7.5 Fuzzing Web
**Definición**: Envío automático de peticiones con diccionarios

**Códigos HTTP relevantes:**
- **200 OK**: Recurso encontrado
- **301/302**: Redirección
- **403 Forbidden**: Acceso denegado
- **404 Not Found**: Recurso no existe

**Herramientas en Kali:**
- **Wfuzz**: Muy configurable
- **Dirbuster**: Interfaz gráfica disponible
- **Gobuster**: Escrita en Go, eficiente
- **Dirb**: Preinstalada
- **Dirsearch**: Preinstalada
- **Ffuf**: Alto rendimiento (Go)
- **Ferobuster**: Potente y rápida (Rust)

**Diccionarios comunes** (`/usr/share/wordlists/`):
- `/usr/share/wfuzz/wordlist/general/`
- `/usr/share/dirb/wordlists/`
- `/usr/share/dirbuster/wordlists/`

### 7.6 Fuzzing con Nmap
**Script**: `http-enum`
**Ejemplo**: `nmap -p80 --script http-enum -v [objetivo]`

**Parámetros avanzados**:
- `http-enum.basepath`: Ruta base específica

### 7.7 Fuzzing con Wfuzz
**Sintaxis básica**: 
```bash
wfuzz -c -t [hilos] -w [diccionario] --hc=404 [URL]/FUZZ
```

**Características**:
- `-c`: Salida coloreada
- `-t`: Número de hilos (ej. 400)
- `-w`: Diccionario a usar
- `--hc`: Ocultar códigos específicos
- `FUZZ`: Marcador para sustitución

**Búsqueda con extensiones**:
- Crear archivo con extensiones
- Usar doble marcador: `FUZZ.FUZ2Z`

**Seguimiento de redirecciones**: Opción `-L`

## 8. Fase 5: Enumeración de Servicios - SMB

### 8.1 Configuración Inicial
**Problema**: Herramientas modernas reacias a protocolos inseguros

**Solución en Linux**: Editar `/etc/samba/smb.conf`
```
client min protocol = NT1
```

**Reinicio**: `systemctl restart smbd`

### 8.2 Herramientas de Enumeración SMB
1. **Nbtscan**: Escaneo NetBIOS
2. **Enum4linux**: Combinación de múltiples herramientas
3. **Nmap**: Scripts especializados
4. **Smbmap**: Enumeración de shares y permisos
5. **Smbclient**: Cliente SMB interactivo
6. **Rpcclient**: Cliente RPC interactivo

### 8.3 Nbtscan
**Propósito**: Encontrar máquinas con SMB/SAMBA

**Uso**: `nbtscan [IP o subred]`

**Información**: Nombre NetBIOS, usuario logueado, servicios

### 8.4 Nmap para SMB
**Escaneo básico**: `nmap -sC [objetivo]`

**Scripts específicos**:
- `smb-protocols`: Versiones SMB soportadas
- `smb-os-discovery`: Información del SO (mejor con SMB1)
- `smb-enum-shares`: Enumeración de shares
- `smb-enum-users`: Enumeración de usuarios (SAMR/LSA)
- `smb-vuln-*`: Detección de vulnerabilidades específicas

**Ejemplo vulnerabilidades**:
- `smb-vuln-ms08-067`: Netapi (CVE-2008-4250)
- `smb-vuln-ms17-010`: EternalBlue

### 8.5 Smbmap
**Funcionalidad**: Enumeración de shares y permisos

**Parámetros comunes**:
- `-H`: IP del host
- `-P`: Puerto SMB (445 por defecto)
- `-v`: Información de versión
- `-u/-p`: Credenciales si necesarias
- `-r`: Mostrar contenido de shares

## 9. Descubrimiento Automatizado de Vulnerabilidades

### 9.1 Proceso General de Escáneres
1. **Descubrimiento**: Enumeración de hosts y puertos (Nmap-like)
2. **Identificación**: Determinación de software y versiones
3. **Correlación**: Comparación con base de datos de vulnerabilidades
4. **Reporte**: Generación de informes (validación manual requerida)

### 9.2 Herramientas Comunes
- **Legion**: Código abierto, extensible (Python)
- **Nessus**: Reconocida, versión académica disponible
- **OpenVAS/GVM**: Open source ampliamente usado
- **Nikto**: Especializado en web
- **Nuclei**: Basado en plantillas YAML
- **Wapiti/Uniscan/OWASP ZAP**: Especializadas web

### 9.3 Nikto
**Características**:
- Escáner de servidores web open source
- Más de 7000 archivos/programas peligrosos verificados
- 1250+ versiones de servidores verificadas
- 270+ problemas específicos por versión
- No sigiloso - deja logs

**Ejemplo**: `nikto -h [URL]`

**Salida**: Cabeceras de seguridad, métodos HTTP, directorios, vulnerabilidades

### 9.4 Nuclei
**Concepto**: Escaneo basado en plantillas YAML

**Características**:
- Plantillas actualizables automáticamente
- Configuración en `~/.config/nuclei/config.yaml`
- Plantillas en `~/.local/nuclei-templates`
- Secciones de plantilla: id, info, requests

**Uso**: `nuclei -u [URL]`

### 9.5 OpenVAS/GVM (Greenbone Vulnerability Management)
**Historia**: Evolución de OpenVAS a GVM

**Características**:
- Solución completa de gestión de vulnerabilidades
- Framework open source
- Componentes: Escáner, gestor, consola web

## 10. Laboratorios y Actividades Prácticas

### Laboratorio 3: Implementación Práctica
1. **Traceroute**: Análisis de rutas y nodos
2. **Ping Sweep**: Descubrimiento de hosts activos
3. **Técnicas de evasión con Nmap**: Escaneos sigilosos
4. **Identificación de servicios**: FTP, SSH, otros
5. **Enumeración HTTP**: Fuzzing, detección de tecnologías
6. **Enumeración SMB**: Shares, usuarios, vulnerabilidades
7. **Escáneres de vulnerabilidades**: Nikto, Nuclei, OpenVAS
8. **Creación de plantillas Nuclei**: Personalización de escaneos

### Actividades Específicas
- Análisis de máquina Five86-1: Enumeración completa
- Identificación de banners FTP en Metasploitable3
- Búsqueda de scripts Nmap específicos por servicio
- Comparación de resultados entre Nikto y Nuclei
- Configuración de herramientas SMB para protocolos antiguos
- Pruebas de evasión de cortafuegos con técnicas Nmap avanzadas

---

**Nota Crítica**: La enumeración es una fase intensiva que genera tráfico notable y puede activar sistemas de detección. Es esencial:
1. Mantener pruebas controladas según alcance acordado
2. Documentar exhaustivamente todos los hallazgos
3. Validar resultados automáticos manualmente
4. Considerar el balance entre exhaustividad y sigilo según objetivos
5. Respetar siempre los límites contractuales y legales