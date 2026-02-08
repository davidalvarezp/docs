# Volcado de Memoria en Informática Forense

## Introducción a las Evidencias Volátiles

Las evidencias volátiles son datos que se pierden cuando se apaga un sistema informático. Su captura es crítica en investigaciones forenses, especialmente en casos de malware avanzado, ataques en curso o cuando se necesita información de procesos activos.

### **Evidencias Volátiles de Interés:**

1. **Fecha y hora del sistema:**
   - Hora actual y configuración de zona horaria
   - Desviación respecto a hora real (UTC)
   - Configuración de servidores NTP

2. **Procesos activos:**
   - Lista completa de procesos en ejecución
   - PID (Process ID) y PPID (Parent Process ID)
   - Usuario propietario del proceso
   - Ruta del ejecutable
   - Argumentos de línea de comandos
   - Tiempos de ejecución

3. **Conexiones de red:**
   - Conexiones TCP/UDP establecidas
   - Puertos locales y remotos
   - Direcciones IP involucradas
   - Estado de las conexiones (ESTABLISHED, LISTEN, etc.)

4. **Puertos abiertos y servicios en escucha:**
   - Puertos TCP/UDP en estado LISTEN
   - Procesos asociados a cada puerto
   - Servicios identificados por número de puerto

5. **Información de usuarios:**
   - Usuarios conectados localmente
   - Sesiones remotas activas (RDP, SSH, etc.)
   - Tiempos de inicio de sesión
   - Últimas actividades

### **Recomendaciones de Almacenamiento:**
- **Nunca almacenar** en el equipo comprometido
- **Usar medios externos:** Discos USB, discos externos
- **Preferiblemente medios nuevos** o completamente borrados
- **Verificar espacio disponible** antes de comenzar la captura

## Conceptos Fundamentales de Memoria

### **Tipos de Memoria en Sistemas Informáticos**

#### **1. Memoria Física (RAM)**
- **Definición:** Memoria real del sistema (Random Access Memory)
- **Características:**
  - Volátil (se pierde al apagar el sistema)
  - Acceso rápido
  - Almacena datos y código en ejecución
- **Contenido Típico:**
  - Sistemas operativos cargados
  - Aplicaciones en ejecución
  - Datos de usuario activos
  - Contraseñas en texto claro
  - Claves de cifrado desencriptadas
  - Artefactos de malware

#### **2. Memoria Virtual**
- **Definición:** Mecanismo del SO que simula más memoria de la físicamente disponible
- **Mecanismos Involucrados:**
  - **Paginación:** División de memoria en páginas de tamaño fijo
  - **Segmentación:** División lógica de memoria por función
  - **Intercambio (Swap):** Movimiento de páginas entre RAM y almacenamiento secundario

### **Arquitecturas de Memoria Virtual**

#### **Windows:**
- **Pagefile.sys:** Archivo de paginación principal
  - Almacena páginas de memoria menos usadas
  - Ubicación: `C:\pagefile.sys` (por defecto)
- **Swapfile.sys:** Para aplicaciones UWP (Universal Windows Platform)
  - Similar al pagefile pero optimizado para apps modernas
- **Hiberfil.sys:** Archivo de hibernación
  - Contiene copia completa de la RAM en formato RAW
  - Se crea cuando el sistema hiberna
  - Puede contener evidencias incluso tras reinicio

#### **GNU/Linux:**
- **Partición Swap:** Partición dedicada para intercambio
  - Tamaño típico: igual o doble de la RAM
  - Identificada como tipo 82 (Linux swap)
- **Archivo Swap:** Alternativa a partición swap
  - Archivo especial en sistema de archivos existente
  - Ventaja: más flexible en tamaño y ubicación

## Herramientas para Volcado de Memoria

### **Consideraciones para la Selección de Herramientas**

#### **Criterios de Selección:**
1. **Compatibilidad:** Versión del SO y arquitectura (32/64 bits)
2. **Mínima alteración:** Impacto mínimo en el sistema analizado
3. **Integridad:** Generación de hashes para verificación
4. **Formato:** Compatibilidad con herramientas de análisis
5. **Portabilidad:** Ejecución sin instalación

### **Herramientas para Windows**

#### **DumpIt**
**Características Principales:**
- **Simplicidad:** Interfaz de línea de comandos muy sencilla
- **Portabilidad:** No requiere instalación
- **Formato:** RAW (imagen binaria de la memoria)
- **Tamaño:** Igual al tamaño de la RAM física
- **Logs:** Genera archivo JSON con metadatos
- **Integridad:** Hash SHA-256 incluido en el log

**Proceso de Uso:**
1. **Ejecución:** Desde línea de comandos como administrador
2. **Confirmación:** Pregunta de confirmación antes de proceder
3. **Almacenamiento:** Guarda en el mismo directorio de ejecución
4. **Nomenclatura:** `MEMORY.DMP` (volcado) + `MEMORY.DMP.JSON` (log)

**Ejemplo de Log JSON:**
```json
{
  "date": "2024-01-15T10:30:00Z",
  "memory_size": 8589934592,
  "output_file": "MEMORY.DMP",
  "sha256_hash": "a1b2c3d4e5f6...",
  "tool_version": "2.1.0"
}
```

#### **Winpmem**
- **Desarrollador:** Rekall Forensics
- **Características:**
  - Múltiples modos de adquisición
  - Compatible con diferentes versiones de Windows
  - Soporte para volcados comprimidos
  - Integración con análisis posterior

#### **MANDIANT Memoryze**
- **Características:**
  - Herramienta de FireEye/Mandiant
  - Captura y análisis integrados
  - Detección de malware en memoria
  - Scripts de automatización

#### **Belkasoft RAM Capturer**
- **Características:**
  - Interfaz gráfica amigable
  - Minimiza alteración del sistema
  - Opciones de compresión
  - Generación de reportes

#### **Magnet RAM Capture**
- **Características:**
  - Desarrollada por Magnet Forensics
  - Optimizada para captura rápida
  - Compatible con múltiples versiones de Windows
  - Integración con AXIOM

#### **FTK Imager**
- **Características:**
  - Captura de memoria como parte de suite completa
  - Interfaz gráfica familiar
  - Opciones de verificación de integridad
  - Compatible con otros productos AccessData

### **Herramientas para Linux**

#### **LiME Forensics (Linux Memory Extractor)**
**Características:**
- **Módulo del kernel:** Se carga como módulo para acceso directo a memoria
- **Bajo nivel:** Acceso a `/dev/mem` y `/proc/kcore`
- **Formato LiME:** Específico para análisis forense
- **Configuración:** Múltiples opciones de salida y formato

**Proceso de Uso Típico:**
1. **Compilación:** Compilar módulo para kernel específico
2. **Carga:** `insmod lime.ko "path=/tmp/memory.lime format=lime"`
3. **Descarga:** `rmmod lime` después de la captura

**Ventajas:**
- Captura completa incluyendo espacio del kernel
- Mínima alteración del estado de memoria
- Formato optimizado para análisis forense

**Limitaciones:**
- Requiere compilación para kernel específico
- Necesita privilegios de root

#### **AVML (Acquire Volatile Memory for Linux)**
**Características:**
- **Desarrollador:** Microsoft
- **Portabilidad:** No requiere saber distribución o kernel específico
- **Fuentes múltiples:** Usa `/dev/crash`, `/proc/kcore`, `/dev/mem`
- **Salida remota:** Puede guardar directamente en ubicación de red
- **Compresión:** Opcional con algoritmo Snappy
- **Formato:** Compatible con LiME

**Proceso de Captura:**
```bash
./avml --output memory.lime --compress
```

**Ventajas:**
- Sin necesidad de compilación previa
- Manejo automático de diferentes fuentes de memoria
- Compresión para reducir tamaño
- Fácil integración en flujos de trabajo automatizados

#### **Memdump**
- **Características:**
  - Herramienta clásica para Linux
  - Acceso directo a `/dev/mem`
  - Salida en formato RAW
  - Simple y directa

### **Herramientas para Android**

#### **Consideraciones Especiales:**
- **Root necesario:** La mayoría de herramientas requieren permisos de root
- **Fragmentation:** Múltiples versiones de Android y personalizaciones
- **Hardware específico:** Diferentes arquitecturas ARM

#### **Herramientas Compatibles:**
- **LiME:** Compilado para kernel Android específico
- **Fmem:** Módulo del kernel alternativo
- **Volatility Android Profiles:** Perfiles específicos para análisis

## Métodos Alternativos de Captura

### **Crash Dumps (Volcados por Caída del Sistema)**

#### **Mecanismo:**
- Provocar un fallo del sistema del que no pueda recuperarse
- El sistema genera automáticamente un volcado de memoria

#### **Tipos de Crash Dumps en Windows:**

1. **Minidump:**
   - Volcado parcial de memoria
   - Incluye información básica del sistema
   - Tamaño pequeño (varios MB)
   - Ubicación: `%SystemRoot%\Minidump\`

2. **Volcado Completo:**
   - Imagen completa de memoria física
   - Tamaño igual a RAM del sistema
   - Ubicación: `%SystemRoot%\Memory.dmp`
   - Requiere configuración previa del sistema

#### **Configuración en Windows:**
1. **Panel de Control → Sistema → Configuración avanzada del sistema**
2. **Opciones de inicio y recuperación → Configuración**
3. **Seleccionar tipo de volcado:**
   - "Ninguno"
   - "Minivolcado de memoria"
   - "Volcado de memoria kernel"
   - "Volcado de memoria completo"

#### **Herramientas para Provocar Crash Dumps:**

**NotMyFault (SysInternals):**
- Permite provocar fallos controlados
- Diferentes tipos de errores:
  - Errores de hardware
  - Excepciones no manejadas
  - Referencias a memoria no válida
- **Uso:** `notmyfault.exe /crash`

#### **Verificación de Crash Dumps:**

**Dumpchk (Microsoft):**
- Verifica integridad de archivos de volcado
- Identifica problemas de corrupción
- **Uso:** `dumpchk.exe memory.dmp`

### **Consideraciones de Seguridad y Legalidad**

#### **Riesgos del Método Crash Dump:**
1. **Pérdida de datos:** Sistema puede no reiniciar correctamente
2. **Daño a hardware:** En casos extremos
3. **Alteración de evidencias:** Cambios en estado del sistema
4. **Legalidad:** Provocar un fallo puede violar políticas

#### **Recomendaciones:**
- Último recurso cuando otras opciones fallan
- Solo en sistemas de laboratorio controlados
- Con autorización explícita por escrito
- Documentación exhaustiva del proceso

## Proceso de Captura de Memoria Paso a Paso

### **Fase 1: Preparación**

#### **1. Evaluación del Sistema:**
- Identificar sistema operativo y versión
- Determinar arquitectura (32/64 bits)
- Verificar tamaño de RAM disponible
- Identificar espacio libre en medios de almacenamiento

#### **2. Selección de Herramientas:**
- Basada en compatibilidad del sistema
- Considerar requisitos de privilegios
- Evaluar impacto en el sistema
- Preparar herramientas alternativas

#### **3. Preparación de Medios:**
- Medios de almacenamiento externos formateados
- Verificación de espacio suficiente (RAM × 1.1)
- Medios de ejecución (USB de arranque, etc.)
- Herramientas portables preconfiguradas

### **Fase 2: Ejecución**

#### **1. Minimizar Alteraciones:**
- Evitar ejecución de programas innecesarios
- Desactivar screensavers y sleep modes
- Cerrar aplicaciones no críticas
- Documentar procesos antes y después

#### **2. Ejecución de Captura:**
- Ejecutar herramienta con privilegios adecuados
- Especificar ubicación de salida en medio externo
- Configurar opciones (compresión, verificación, etc.)
- Monitorizar progreso y recursos

#### **3. Verificación Inmediata:**
- Confirmar creación del archivo de volcado
- Verificar tamaño esperado
- Generar hash inicial (si la herramienta no lo hace)
- Documentar timestamp de creación

### **Fase 3: Post-Captura**

#### **1. Verificación de Integridad:**
- Comparar hashes si están disponibles
- Verificar que el archivo no esté corrupto
- Confirmar que el volcado sea analizable

#### **2. Documentación:**
- Registrar herramienta utilizada y versión
- Documentar parámetros de ejecución
- Registrar hashes generados
- Anotar observaciones durante el proceso

#### **3. Manejo Seguro:**
- Copiar a múltiples medios de almacenamiento
- Almacenar en ubicaciones seguras
- Mantener cadena de custodia
- Proteger con cifrado si es necesario

## Formatos de Volcado de Memoria

### **RAW (Binario Crudo)**
- **Extensión:** `.dmp`, `.raw`, `.bin`
- **Características:**
  - Copia exacta de la memoria física
  - Sin metadatos adicionales
  - Tamaño igual a RAM del sistema
- **Ventajas:**
  - Compatibilidad universal
  - Simplicidad
- **Desventajas:**
  - Sin información contextual
  - Sin compresión

### **Formato LiME**
- **Extensión:** `.lime`
- **Características:**
  - Específico para forense de memoria
  - Incluye metadatos de arquitectura
  - Estructura optimizada para análisis
- **Ventajas:**
  - Información contextual incluida
  - Compatible con múltiples herramientas
- **Desventajas:**
  - Menos compatible que RAW

### **Formatos Específicos por Herramienta**
- **FTK Imager:** Formato propio con metadatos
- **Memoryze:** Formato optimizado para análisis Mandiant
- **AVML:** Compatible con LiME pero con opciones adicionales

## Análisis Posterior del Volcado

### **Herramientas de Análisis Comunes:**

#### **Volatility Framework**
- Framework de código abierto
- Soporte para múltiples sistemas operativos
- Plugins para diferentes tipos de análisis
- **Comandos comunes:**
  ```bash
  volatility -f memory.dmp imageinfo
  volatility -f memory.dmp --profile=Win10x64 pslist
  volatility -f memory.dmp --profile=Win10x64 netscan
  ```

#### **Rekall**
- Similar a Volatility
- Interfaz mejorada
- Automatización más avanzada

#### **Mandiant Redline**
- Interfaz gráfica
- Análisis guiado
- Generación de reportes automáticos

### **Tipos de Análisis Posibles:**

#### **1. Análisis de Procesos:**
- Listado de procesos activos
- Árbol de procesos (padre-hijo)
- DLLs cargadas por proceso
- Handles y recursos

#### **2. Análisis de Red:**
- Conexiones de red activas
- Puertos abiertos
- Sockets y estados
- Información de routing

#### **3. Análisis de Malware:**
- Detección de procesos sospechosos
- Análisis de inyección de código
- Detección de rootkits
- Extracción de muestras de malware

#### **4. Análisis de Usuarios:**
- Sesiones activas
- Tokens de seguridad
- Privilegios de usuario
- Actividades recientes

## Consideraciones Especiales y Mejores Prácticas

### **Retos Comunes:**

#### **1. Sistemas con Mucha RAM:**
- **Problema:** Volcados muy grandes (64GB+)
- **Soluciones:**
  - Compresión durante captura
  - Segmentación del volcado
  - Captura selectiva de regiones

#### **2. Sistemas en Producción:**
- **Problema:** Impacto en disponibilidad del servicio
- **Soluciones:**
  - Captura fuera de horas pico
  - Notificación a usuarios afectados
  - Plan de contingencia

#### **3. Sistemas con Antiforense:**
- **Problema:** Malware que detecta y evita captura
- **Soluciones:**
  - Captura desde medios de arranque externos
  - Uso de hardware especializado
  - Análisis de hardware (DMA attacks)

### **Mejores Prácticas:**

1. **Pruebas Previas:**
   - Probar herramientas en entorno similar
   - Verificar compatibilidad
   - Estimar tiempos de captura

2. **Redundancia:**
   - Usar múltiples herramientas simultáneamente
   - Capturar en diferentes momentos
   - Almacenar múltiples copias

3. **Documentación Exhaustiva:**
   - Registro de cada paso del proceso
   - Capturas de pantalla durante ejecución
   - Logs detallados de las herramientas

4. **Consideraciones Legales:**
   - Autorizaciones específicas para captura de memoria
   - Respeto a privacidad de datos personales
   - Cumplimiento de regulaciones sectoriales

### **Consideraciones Éticas:**

1. **Minimización de Datos:**
   - Capturar solo lo necesario
   - Excluir datos personales no relevantes
   - Anonimización cuando sea posible

2. **Transparencia:**
   - Comunicar acciones a afectados cuando sea posible
   - Documentar justificación de cada acción
   - Mantener trazabilidad completa

3. **Responsabilidad:**
   - Asumir consecuencias de errores
   - Mantener confidencialidad de datos
   - Destrucción segura de copias después del caso
