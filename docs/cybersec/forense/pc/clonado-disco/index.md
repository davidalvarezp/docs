# Clonación de Discos en Informática Forense

## Introducción a la Clonación de Discos

La clonación de discos es un proceso fundamental en informática forense que consiste en crear una copia exacta "bit a bit" de un dispositivo de almacenamiento. Esta copia se realiza incluyendo todos los datos, errores y sectores defectuosos del medio original.

### **Características de la Clonación Forense:**
- **Exactitud bit a bit:** Copia fiel de todos los bits del medio original
- **Preservación de errores:** Incluye sectores defectuosos y errores de lectura
- **Integridad:** Generación automática de hashes para verificación
- **No alteración:** El medio original no sufre modificaciones durante el proceso

## Métodos de Clonación

### **Clonación por Hardware**

#### **Ventajas:**
- **Rápida y eficaz:** Alta velocidad de copia
- **Sencillez:** Interfaces intuitivas y procesos automatizados
- **Copia en paralelo:** Posibilidad de realizar múltiples copias simultáneamente
- **Bloqueo automático:** Incorporan bloqueadores de escritura integrados
- **Fiabilidad:** Menos dependencia del sistema operativo

#### **Desventajas:**
- **Acceso físico requerido:** Necesitan acceso directo al disco
- **Costo elevado:** Desde varios cientos hasta 20.000€
- **Especificidad:** Requieren discos destino de características similares al original

#### **Requisitos para Discos Destino:**
1. **Preferiblemente mismas características:**
   - Marca
   - Modelo
   - Capacidad
2. **Preparación previa:**
   - Escritura con ceros antes de la copia
   - Incluso en unidades recién compradas (pueden traer datos del fabricante o ser reacondicionadas)

#### **Ejemplos de Clonadoras Hardware:**

**Clonadora Forense Tableau TD2u:**
- Interfaz intuitiva
- Velocidades de copia elevadas
- Bloqueador de escritura integrado
- Verificación de hashes automática

**Clonadora Forense Atola TaskForce:**
- Funcionalidades avanzadas
- Recuperación de sectores dañados
- Análisis de superficies de disco
- Capacidad de clonación selectiva

### **Bloqueadores de Escritura**

Dispositivos hardware que previenen modificaciones accidentales en los medios de almacenamiento durante la adquisición:

**Tableau Forensic Bridge:**
- Conecta entre el disco y el ordenador
- Impide escrituras en el disco original
- Mantiene la integridad de la evidencia

### **Estaciones de Trabajo Forenses**

**Estación Forense Sherlock:**
- Plataforma completa para análisis
- Integra clonación, análisis y reporting
- Diseñada específicamente para entornos forenses

## Clonación por Software

Permite la clonación bit a bit tanto de dispositivo a dispositivo como de dispositivo a fichero(s) de imagen.

### **Ventajas:**
- **Flexibilidad:** Multitud de soliciones disponibles
- **Coste:** Muchas soluciones gratuitas o de software libre
- **Integración:** Incluidas en distribuciones especializadas
- **Portabilidad:** No requieren hardware específico

### **Requisito Esencial:**
- **Uso de bloqueadores de escritura:** Hardware o software que prevenga modificaciones

## Herramientas de Software para Clonación

### **Comando `dd` de Linux**

Herramienta estándar para copia de datos a bajo nivel.

#### **Sintaxis Básica:**
```bash
dd if=/dev/sda of=/dev/sdb bs=1M
```
- `if`: Archivo/Dispositivo de entrada (input file)
- `of`: Archivo/Dispositivo de salida (output file)
- `bs`: Tamaño de bloque (block size)

#### **Ejemplo con Opciones Forenses:**
```bash
dd if=/dev/sda of=fich.dd conv=notrunc,noerror,sync
```

**Opciones Importantes:**
- `conv=notrunc`: No truncar la salida en caso de error
- `conv=noerror`: No detener la duplicación en caso de error
- `conv=sync`: Rellenar la salida con ceros en caso de error
- `bs=1M`: Tamaño de bloque de 1 megabyte (optimiza velocidad)

#### **Consideraciones:**
- Sin cálculo automático de hash
- Sin logging detallado de errores
- Interfaz básica de línea de comandos

### **Comando `dc3dd` de Linux**

Versión mejorada del programa `dd` con características específicas para forense.

#### **Ventajas sobre `dd`:**
- **Logging de errores:** Escribe errores en un fichero específico
- **Agrupación de errores:** Organiza errores en el log
- **Cálculo automático de hashes:** Genera hashes durante la copia
- **Interfaz más informativa:** Progreso detallado del proceso

#### **Ejemplo Completo:**
```bash
dc3dd if=/dev/sdb of=./pen_drive_1.dd log=./pen_drive_1.log verb=on hash=sha256 hash=sha512
```

**Opciones Específicas:**
- `verb=on`: Modo verboso (muestra progreso detallado)
- `hash=sha256`: Calcula hash SHA-256 durante la copia
- `hash=sha512`: Calcula hash SHA-512 durante la copia
- `log=./archivo.log`: Especifica archivo de log para errores

### **GuyMager para Linux**

Herramienta gráfica para creación de imágenes forenses.

#### **Características:**
- **Interfaz gráfica intuitiva**
- **Soporte múltiples formatos:** RAW, E01, AFF, etc.
- **Cálculo automático de hashes:** MD5, SHA-1, SHA-256
- **Verificación de integridad:** Comparación de hashes
- **Soporte para segmentación:** Divide imágenes grandes en múltiples archivos
- **Compresión integrada:** Reduce tamaño de imágenes

### **FTK Imager para Windows**

Herramienta de AccessData para creación y manejo de imágenes forenses.

#### **Funcionalidades:**
- **Interfaz gráfica Windows**
- **Creación de imágenes:** Múltiples formatos soportados
- **Montaje de imágenes:** Acceso a contenido sin modificar original
- **Extracción de archivos:** Selección específica de elementos
- **Generación de informes:** Documentación del proceso

### **OSFClone**

Herramienta de código abierto para clonación forense.

#### **Características:**
- **Live CD/USB:** No requiere instalación
- **Interfaz sencilla:** Fácil de usar
- **Soporte amplio:** Múltiples sistemas de archivos
- **Verificación:** Hashes MD5 y SHA-1
- **Portable:** Ejecutable desde medios extraíbles

### **RaTool**

Herramienta para bloqueo de dispositivos y gestión de accesos.

#### **Funcionalidades:**
- **Bloqueo de escritura:** Para dispositivos USB, diskettes, smartphones
- **White listing:** Permite lista blanca de dispositivos autorizados
- **Control de acceso:** Restringe conexión de dispositivos no autorizados
- **Auditoría:** Registro de eventos de conexión

## Live CDs para Forense

Distribuciones especializadas que contienen conjuntos completos de herramientas para adquisición de evidencias.

### **Características Comunes:**
- **No montaje automático:** No montan discos automáticamente o lo hacen en modo sólo lectura
- **Bloqueo de escritura:** Actúan como bloqueadores de escritura sobre la evidencia
- **Herramientas preinstaladas:** Conjunto completo de utilidades forenses
- **Entorno aislado:** Minimizan interferencias con el sistema analizado

### **Distribuciones Activas:**

#### **Tsurugi Linux**
- Distribución forense japonesa
- Herramientas actualizadas regularmente
- Soporte múltiples idiomas
- Enfoque en usabilidad

#### **SIFT Workstation (SANS Investigative Forensic Toolkit)**
- Desarrollada por SANS Institute
- Basada en Ubuntu
- Conjunto completo de herramientas forenses
- Documentación extensa

#### **CAINE (Computer Aided Investigative Environment)**
- Distribución italiana
- Interfaz gráfica amigable
- Herramientas organizadas por categorías
- Comunidad activa

#### **PALADIN Forensic Suite**
- Basada en Ubuntu
- Interfaz simplificada
- Herramientas organizadas por flujo de trabajo
- Soporte para scripts personalizados

#### **Kali Linux**
- Aunque orientada a seguridad ofensiva
- Incluye herramientas forenses
- Comunidad muy activa
- Actualizaciones frecuentes

## Formatos de Imagen de Disco

### **RAW (dd, raw, img, ima)**
- **Descripción:** Copia bit a bit simple
- **Metadatos:** Sin metadatos incorporados
- **Estructura:** Uno o varios ficheros
- **Compresión:** No admite compresión
- **Compatibilidad:** Ampliamente soportada por herramientas
- **Ventaja:** Simplicidad y compatibilidad universal
- **Desventaja:** Sin información adicional sobre el proceso

### **SMART (s01)**
- **Origen:** Formato desarrollado para Linux
- **Metadatos:** Con metadatos incorporados
- **Estructura:** Uno o varios ficheros
- **Características:** Específico para entornos forenses
- **Uso:** Principalmente en herramientas de código abierto

### **EnCase Evidence File (e01, Ex01)**
- **Descripción:** Formato propietario de Guidance Software
- **Metadatos:** Extensos metadatos (examinador, notas, hashes, etc.)
- **Estructura:** Uno o varios ficheros con extensión .E01, .E02, etc.
- **Compresión:** Admite compresión (reducción de tamaño)
- **Cifrado:** Admite cifrado de imágenes
- **Integridad:** Checksums CRC32 para cada bloque de 64KB
- **Ventaja:** Información completa del proceso de adquisición
- **Desventaja:** Formato cerrado, requiere herramientas específicas

### **Advanced Forensics Format (AFF)**
- **Descripción:** Formato abierto desarrollado por Simson Garfinkel
- **Metadatos:** Extensos y personalizables
- **Estructura:** Basado en contenedores con metadatos XML
- **Compresión:** Múltiples algoritmos soportados
- **Características:** Diseñado específicamente para forense
- **Ventaja:** Formato abierto y extensible
- **Desventaja:** Poco usado comparado con otros formatos

## Discos Cifrados

### **Problemas con Discos Cifrados**

#### **1. Clonación Posible, Acceso Limitado**
- La clonación física del disco es técnicamente posible
- El acceso al contenido requiere la clave de cifrado
- La imagen resultante permanece cifrada

#### **2. Métodos para Obtener Acceso**

**Ataque por Fuerza Bruta:**
- Probablemente inviable con claves modernas
- Requiere recursos computacionales enormes
- Solo práctico para claves débiles

**Hackear la Unidad de Cifrado:**
- Explotación de vulnerabilidades en implementaciones
- Ataques a hardware de cifrado
- Ejemplo BitLocker: https://neodyme.io/en/blog/bitlocker_screwed_without_a_screwdriver/

**Análisis de Memoria (Cold Boot Attack):**
- Captura de claves en RAM
- Requiere acceso físico rápido tras apagado
- Vulnerabilidad en algunos sistemas

**Ataques a Implementaciones Específicas:**
- Android Full Disk Encryption: https://securityaffairs.co/wordpress/48933/hacking/android-full-disk-encryption.html
- Vulnerabilidades en versiones específicas de software

### **Funcionamiento de BitLocker**

BitLocker emplea múltiples capas de protección:

#### **Componentes Clave:**
1. **TPM (Trusted Platform Module):** Chip hardware para almacenamiento seguro de claves
2. **PIN/Contraseña:** Autenticación adicional
3. **Clave de Recuperación:** Backup para emergencias
4. **Cifrado Completo:** AES 128/256 bits

#### **Vectores de Ataque:**
- **Sin TPM:** Vulnerable a ataques de arranque
- **Con TPM pero sin PIN:** Vulnerable a cold boot attacks
- **Implementaciones Antiguas:** Vulnerabilidades conocidas

### **Estrategias para Discos Cifrados**

#### **1. Adquisición de Claves Legítimas**
- Solicitud mediante orden judicial
- Cooperación del propietario
- Políticas corporativas de retención de claves

#### **2. Análisis de Sistema en Estado "Live"**
- Captura de memoria RAM (contiene claves descifradas)
- Análisis de procesos en ejecución
- Extracción de claves de sesión

#### **3. Explotación de Vulnerabilidades**
- Análisis de versiones vulnerables
- Ataques a implementaciones específicas
- Uso de herramientas especializadas

#### **4. Consideraciones Legales**
- Autorización judicial específica para bypass de cifrado
- Cumplimiento de regulaciones de privacidad
- Documentación exhaustiva del proceso

### **Herramientas Especializadas**

#### **Para Análisis de Memoria:**
- **Volatility:** Framework para análisis de memoria RAM
- **Rekall:** Similar a Volatility con interfaz mejorada
- **LiME:** Módulo Linux para captura de memoria

#### **Para Ataques a Cifrado:**
- **Elcomsoft:** Herramientas comerciales para bypass de cifrado
- **Passware:** Suite para recuperación de contraseñas
- **Hashcat:** Ataque a hashes por fuerza bruta/diccionario

## Consideraciones Prácticas Finales

### **Documentación del Proceso**
1. **Registro de Hashes:** MD5, SHA-1, SHA-256 del medio original y copia
2. **Metadatos de la Imagen:** Fecha, hora, operador, herramientas utilizadas
3. **Logs de Errores:** Registro detallado de problemas durante la clonación
4. **Condiciones Ambientales:** Temperatura, humedad, condiciones del medio

### **Almacenamiento Seguro**
1. **Medios de Almacenamiento:** Discos nuevos o completamente borrados
2. **Control de Acceso:** Restricción física y lógica a las copias
3. **Copia de Seguridad:** Al menos dos copias en ubicaciones separadas
4. **Verificación Periódica:** Checksums regulares para detectar corrupción

### **Consideraciones Legales**
1. **Cadena de Custodia:** Documentación completa de manipulación
2. **Autorizaciones:** Permisos específicos para cada acción
3. **Privacidad:** Respeto a datos personales durante el proceso
4. **Validez Jurídica:** Cumplimiento de estándares forenses aceptados
