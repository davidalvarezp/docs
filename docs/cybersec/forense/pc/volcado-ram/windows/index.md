# Adquisición de Evidencias Volátiles en Windows

## Introducción

Uno de los principales retos a la hora de realizar un análisis forense es tener claro el tipo de incidente al que nos enfrentamos. A partir de ahí, determinar qué evidencias es necesario adquirir y la manera de proceder. Aunque hay aspectos comunes, no es lo mismo realizar un análisis forense en un caso de malware que en un caso de acoso, ya que los puntos donde debe focalizarse el investigador para localizar evidencias son distintos.

El **RFC 3227** es un documento que recoge las "directrices para la recopilación de evidencias y su almacenamiento" y puede llegar a servir como estándar de facto para la recopilación de información en incidentes de seguridad.

## 1. Adquisición de Evidencias

### 1.1 Directrices para la Adquisición de Evidencias y su Almacenamiento

#### Consideraciones Previas de Privacidad
Hay que asegurarse de que toda la información recopilada durante el proceso sea tratada dentro del marco legal establecido, manteniendo la privacidad exigida. Los ficheros de log están incluidos en este apartado ya que pueden almacenar patrones de comportamiento del usuario del equipo.

### 1.2 Orden de Volatilidad

La **orden de volatilidad** hace referencia al período de tiempo en el que está accesible cierta información. Por este motivo se debe recoger en primer lugar aquella información que vaya a estar disponible durante el menor período de tiempo, es decir, aquella cuya volatilidad sea mayor.

#### Elementos Volátiles:
- **Configuración y conexiones de red**, tabla ARP, usuarios logueados, procesos en ejecución, etc.
- **Memoria RAM** (Random Access Memory)

#### Elementos No Volátiles:
- **Discos duros**
- **Pen Drives, CDs, DVDs**, etc.

**Orden de mayor a menor volatilidad:**
1. Registros y cachés
2. Tabla de enrutamiento, caché ARP, tabla de procesos, estadísticas del kernel
3. Memoria RAM
4. Sistemas de ficheros temporales
5. Disco duro
6. Logs remotos del sistema
7. Configuración física, topología de red
8. Copias de seguridad

### 1.3 Acciones que Deben Evitarse

Deben evitarse las siguientes acciones con el fin de no invalidar el proceso de recolección de información, ya que debe preservarse su integridad para que los resultados obtenidos puedan ser utilizados en un juicio:

- **No apagar el computador** hasta que se recopiló toda la información volátil
- **No confiar en la información** proporcionada por los programas del sistema ya que pueden verse comprometidos
- **Recopilar la información mediante programas** desde un medio protegido contra escritura
- **No ejecutar programas** que modifiquen la fecha y hora de acceso de todos los ficheiros del sistema

### 1.4 Herramientas Necesarias

#### Pautas para la Selección de Herramientas
Existen una serie de pautas que deben ser seguidas a la hora de seleccionar las herramientas con las que se va a llevar a cabo el proceso de recolección:

1. **Utilizar herramientas ajenas al sistema** ya que, como se mencionó anteriormente, estas pueden verse comprometidas
2. **Procurar utilizar herramientas** que alteren lo menos posible el escenario, evitando, en la medida de lo posible, el uso de herramientas de interfaz gráfico y aquellas cuyo uso de memoria sea grande
3. **Los programas que se vayan a utilizar** para recoger las evidencias deben estar situados en un dispositivo de sólo lectura (CDROM, USB, etc.)
4. **Preparar un conjunto de utilidades** adecuadas a los sistemas operativos con los que se trabaje

#### Kit de Análisis Mínimo
El kit de análisis debe incluir, entre otros, los siguientes tipos de herramientas:
- Programas para listar y examinar procesos
- Programas para examinar el estado del sistema
- Programas para realizar copias bit a bit

### 1.5 Consideraciones Previas

Existen una serie de consideraciones previas que se deben tener en cuenta antes de comenzar el proceso de toma de evidencias:

#### 1. Estado del Equipo:
- **No modificar el estado del equipo**, dejarlo exactamente como está: ni abrir ficheros, ni ejecutar programas, ni borrar carpetas, etc.
- **Si está encendido**, no apagarlo
- **Si está apagado**, no encenderlo

**Importante:** Existe gran cantidad de información volátil que desaparece al apagar el computador, por lo que hacerlo podría suponer la pérdida de información muy significativa. De la misma manera, si está apagado, el hecho de encenderlo podría suponer la modificación de fechas o la ocultación de ficheros en caso de que haya un rootkit.

#### 2. Planificación:
- **Establecer de manera global** los pasos que se van a seguir con el fin de tener una guía operativa del proceso
- **Concretar de manera detallada** los pasos que se van a seguir, teniendo en cuenta diferentes aspectos como:
  - Tiempo estimado de duración del análisis
  - Urgencia del mismo
  - Recursos necesarios para llevarlo a cabo

#### 3. Evaluación de Capacidades:
- **Valorar si la persona responsable** de realizar el proceso tiene las habilidades y conocimientos necesarios para hacerlo
- **En caso de dudas** sobre la capacidad para llevarlo a cabo, es mejor consultar a alguien con experiencia y conocimientos contrastados

#### 4. Autorizaciones:
- **Obtener una autorización por escrito** de quien corresponda para poder llevar a cabo el análisis y la recolección de evidencias
- **En cierto tipo de incidentes** será necesario solicitar una autorización judicial para asegurar la validez de las pruebas recogidas en un futuro juicio

#### 5. Preparación Técnica:
- **Solicitar las contraseñas** necesarias para acceder al sistema y a ficheros o volúmenes cifrados
- **Preparar un kit lo más completo posible** de utilidades siguiendo las pautas indicadas anteriormente
- **Preparar una lista de personas** a las que se deba informar y mantener al tanto del proceso

### 1.7 Inicio del Proceso

Una vez valoradas todas las consideraciones previas que ayuden a tener claro el tipo de incidente al que nos enfrentamos y los pasos que se deben seguir para solucionarlo, comenzará el proceso de recolección de evidencias propiamente dicho.

**Recordatorio:** Es necesario etiquetar, inventariar y fotografiar todos los dispositivos que se van a analizar: discos duros, pendrives, cámaras, etc. Incluso, dependiendo del tipo de incidente, puede ser necesario incluir routers, escáneres, impresoras, etc.

**Datos a anotar para cada dispositivo:**
- Marca
- Modelo
- Número de serie
- Tipo de conexión (USB, firewire, etc.)
- Persona responsable del equipo
- Usuario o usuarios que trabajen en él
- Cualquier otra información que pueda resultar relevante

**Cadena de custodia:** Es fundamental ya que demuestra que las pruebas obtenidas no fueron manipuladas. Se debe ser especialmente meticuloso en este aspecto, documentando todas y cada una de las evidencias obtenidas.

## 2. Adquisición de Elementos Volátiles en Entornos Windows

Una vez etiquetados, inventariados y fotografiados todos los dispositivos se procede a la recopilación de las evidencias. De forma genérica, se puede clasificar el tipo de información a recopilar en dos grandes grupos:

1. **Información volátil**
2. **Información no volátil**

Así mismo, se puede hablar de:
- **Adquisición en vivo:** Obtención de información en un sistema en funcionamiento
- **Adquisición estática o post-mortem:** Obtención de información de un sistema que está apagado

### Notas Importantes sobre la Adquisición:

**Enfoque habitual:** Normalmente se suele realizar únicamente el volcado de memoria RAM y el volcado de disco, trabajando a partir de ahí sobre diferentes copias para obtener el resto de evidencias.

**Software no invasivo:** Para realizar una correcta adquisición de evidencias es importante el uso de software no invasivo y que se encuentre en dispositivos protegidos contra escritura (pendrive de sólo lectura, CD-ROM, etc.).

**Herramientas utilizadas en esta guía:**
- Comandos del sistema
- Herramientas de la suite Sysinternals
- Herramientas de Nirsoft (no necesitan instalación y pueden ejecutarse desde línea de comandos)

**Importante:** Muchos de los comandos listados a continuación deben ejecutarse con permisos de administración.

**Nota sobre ejecución de comandos:** En ciertas situaciones puede ser recomendable la ejecución de los comandos del sistema desde una consola (cmd.exe) ejecutada en el propio dispositivo extraíble, para evitar el uso de la consola del sistema que puede estar comprometida.

**Advertencia sobre antivirus:** Los motores antivirus pueden bloquear la ejecución de algunas de las herramientas mostradas, sobre todo aquellas relacionadas con la recuperación de contraseñas. Esto debe tenerse en cuenta ya que, dependiendo del escenario en que nos encontremos, puede no ser posible la deshabilitación del antivirus.

### 2.1 Hora y Fecha del Sistema

En cuanto a la información volátil, lo primero que se debe obtener es la **fecha y hora del sistema** para poder establecer una línea temporal de recopilación de evidencias, duración del proceso, etc.

```cmd
date /t > DataEHoraDeInicio.txt & time /t >> DataEHoraDeInicio.txt
```

**Debe compararse la fecha obtenida** con el tiempo universal coordinado (UTC), estándar de tiempo por el cual se regula la hora a nivel mundial, para determinar si la fecha establecida en el sistema es correcta o no, y qué desviación existe.

**Al finalizar el proceso**, debe ejecutarse la misma instrucción cambiando el fichero de destino:
```cmd
date /t > DataEHora_Fin.txt & time /t >> DataEHora_Fin.txt
```

### 2.2 Información de Red y Conexiones

#### Configuración de Interfaces de Red:
```cmd
ipconfig /all > ConfiguracionRede.txt
```

#### Consultas DNS Realizadas:
```cmd
ipconfig /displaydns > DNSCache.txt
```

#### Estado de la Caché ARP:
```cmd
arp -a > ArpCache.txt
```

#### Listado de Puertos Abiertos (con filtrado):
```cmd
netstat -an | findstr /i "estado listening established" > PortosAbertos.txt
```

#### Listado de Aplicaciones con Puertos Abiertos:
```cmd
netstat -anob > AplicacionsConPortosAbertos.txt
```

#### Tabla de Enrutamiento:
```cmd
netstat -r > TablaEnrutamento.txt
```

#### Conexiones NetBIOS Establecidas:
```cmd
nbtstat -S > ConexiónsNetbiosEstablecidas.txt
```

### 2.3 Ficheros y Carpetas Compartidas

#### Unidades Mapeadas:
```cmd
net use > UnidadesMapeadas.txt
```

#### Carpetas Compartidas:
```cmd
net share > CarpetasCompartidas.txt
```

#### Ficheros Copiados Recientemente mediante NetBIOS:
```cmd
net file > FicheirosCopiadosMedianteNetbios.txt
```

#### Ficheros (del equipo) Abiertos Remotamente (Sysinternals):
```cmd
psfile /accepteula > FicherosAbertosRemotamente.txt
```

#### Captura de Tráfico de Red
En este punto puede ser interesante realizar una captura del tráfico de red para identificar las conversaciones que tiene la máquina con el exterior o dentro de la propia red.

**Herramientas recomendadas:**
- **TShark** o **Wireshark**
- **Problema:** Suelen necesitar tener instalado en el sistema un driver de captura de tráfico como Npcap o WinPcap

**Importante:** Una vez realizada la captura de tráfico y de las evidencias anteriores, sería el momento de realizar la captura o volcado de la memoria RAM y podría desconectarse el equipo de la red. Desconectando o aislando un equipo de la red podemos lograr que una determinada acción no siga ocurriendo, por ejemplo una descarga de datos no autorizada o el borrado remoto de datos por parte del atacante.

### 2.4 Histórico de Comandos de Consola
```cmd
doskey /history > HistoricoComandos.txt
```

### 2.5 Procesos

Para obtener la lista de procesos en ejecución y los elementos relacionados con ellos como pueden ser las DLLs y los Handles:

#### Procesos en Ejecución:
```cmd
tasklist > ProcesosEnExecucion.txt
```

#### Árbol Jerárquico de los Procesos en Ejecución (Sysinternals):
```cmd
pslist /accepteula /t > ArboreDeProcesosEnExecucion.txt
```

#### Procesos en Ejecución y Librerías DLL Asociadas (Sysinternals):
```cmd
listdlls /accepteula > ProcesosEDlls.txt
```

#### Listado de Handles Abiertos por Cada Programa (Sysinternals):
```cmd
handle /accepteula /a > Handles.txt
```

#### Procesos del Usuario Actual (Nirsoft):
```cmd
cprocess /stext ProcesosUsuario.txt
```

#### Servicios en Ejecución:
```cmd
sc query > ServiciosEnExecucion.txt
```

### 2.6 Información de Usuarios

#### Nombre de Equipo y Grupo de Trabajo de NetBIOS:
```cmd
nbtstat -n > NomeEquipoEGrupoDeTraballoNetbios.txt
```

#### Usuarios y Grupos de Usuario Locales del Equipo:
```cmd
net user > UsuariosEGruposDoEquipo.txt && net localgroup >> UsuariosEGruposDoEquipo.txt
```

#### Información Detallada de un Usuario Específico:
```cmd
net user nombre_usuario > InformacionUsuario_nombre_usuario.txt
```

#### Usuarios Remotos que Iniciaron Sesión:
```cmd
net session > UsuariosRemotos.txt
```

#### Sesiones Activas en el Sistema (Sysinternals):
```cmd
logonsessions /accepteula > SesionsActivas.txt
```

#### Usuarios Locales y Remotos que Iniciaron Sesión en el Equipo (Sysinternals):
```cmd
psloggedon /accepteula > UsuariosIniciadoSesion.txt
```

### 2.7 Contraseñas

En ciertos incidentes puede resultar muy útil conocer los diferentes nombres de usuario y contraseñas almacenadas en el equipo. Existen multitud de contraseñas que pueden estar almacenadas en el equipo, de diferentes servicios como correo electrónico, banca en línea, recursos compartidos, etc.

**Herramientas de Nirsoft para recuperación de contraseñas:**

#### WebBrowserPassView:
Recoge las contraseñas almacenadas en los siguientes navegadores:
- Internet Explorer (versión 4.0-11.0)
- Mozilla Firefox (todas las versiones)
- Google Chrome
- Safari
- Opera

```cmd
WebBrowserPassView /stab "ContraseñasNavegadores.txt"
```

#### Network Password Recovery:
Recoge las contraseñas correspondientes a los recursos de red a los que está conectado el usuario actual.
```cmd
Netpass /stab "NetworkPasswordRecovery.txt"
```

#### Mail PassView:
Recoge las contraseñas de los principales gestores de correo.
```cmd
mailpv /stab "MailPassView.txt"
```

**Nota sobre versiones de Nirsoft:** En la página principal de descarga de algunas herramientas de Nirsoft, la versión descargada no permite el uso de parámetros para línea de comandos. Para descargar la versión que sí lo permite hay que seguir las indicaciones mostradas en esta página.

### 2.8 Árbol de Directorios y Ficheros

Puede resultar interesante conocer el árbol de directorios y ficheros con el fin de poder comprobar la existencia de ficheros sospechosos. Para esto, podemos obtener 3 listados ordenados por los tiempos MAC (Modificación, Acceso, Creación) de los ficheros.

**Nota:** Para unos mejores resultados, estos comandos deben ser realizados desde la consola del sistema y no desde una externa.

#### Listado en Base a la Fecha de Modificación:
```cmd
dir /t:w /a /s /o:d c:\ > "ListadoFicheirosPorDataDeModificacion.txt"
```

#### Listado en Base al Último Acceso:
```cmd
dir /t:a /a /s /o:d c:\ > "ListadoFicheirosPorUltimoAcceso.txt"
```

#### Listado en Base a la Fecha de Creación:
```cmd
dir /t:c /a /s /o:d c:\ > "ListadoFicheirosPorDataDeCreacion.txt"
```

**Importante:** En caso de que existan varios discos duros o particiones deberá ejecutarse la instrucción por cada disco o partición, es decir, habría que ejecutar el comando tantas veces como fuese necesario cambiando el directorio sobre el que se hace el listado (en este caso `c:\`) y cambiando a su vez el nombre del fichero que almacenará el listado.

#### Listado de Ficheros Abiertos (Nirsoft):
```cmd
openedfilesview /stext > FicherosAbertos.txt
```

### 2.9 Navegadores Web

Veremos más adelante en el curso con mayor profundidad el análisis de las evidencias disponibles en los navegadores web, pero podemos adelantar el uso de algunas herramientas de línea de comandos que nos van a permitir realizar una adquisición previa.

#### 2.9.1 Información Cacheada en los Navegadores

Utilizaremos las herramientas de Nirsoft:

```cmd
IECacheView /stab "IECache.txt"
Chromecacheview /stab "ChromeCacheView.txt"
MZCacheView /stab "FirefoxCacheView.txt"
```

#### 2.9.2 Historial de Internet

El historial de internet puede resultar una fuente muy importante de información tanto en caso de pericias judiciales para saber las páginas visitadas por algún usuario, como en casos de incidentes de seguridad ya que los ciberdelincuentes pueden aprovechar vulnerabilidades en los navegadores.

**BrowsingHistoryView:** Herramienta capaz de recoger el historial de navegación de varias versiones de navegadores web (Internet Explorer, Mozilla Firefox, Google Chrome, y Safari).

```cmd
BrowsingHistoryView.exe /VisitTimeFilterType 1 /HistorySource 2 /LoadIE 1 /LoadFirefox 1 /LoadChrome 1 /LoadSafari 1 /stab Historial.txt
```

#### 2.9.3 Últimas Búsquedas

Conocer las últimas búsquedas realizadas en los principales motores puede resultar de interés dependiendo del tipo de incidente. Para recopilar toda esta información se pueden utilizar herramientas como **MyLastSearch (Nirsoft)**, la cual obtiene todas las búsquedas realizadas en los principales motores de búsqueda (Google, Yahoo y MSN) y en varias redes sociales (por ejemplo Twitter y Facebook).

```cmd
MyLastSearch /stab "MyLastSearch.txt"
```

### 2.10 Volúmenes Cifrados

Cada vez es más habitual utilizar herramientas de cifrado con el fin de añadir cierto nivel de privacidad y seguridad a la información. Puede resultar de interés en un proceso forense identificar volúmenes cifrados ya que es probable que almacenen información relevante.

**Elcomsoft Encrypted Disk Hunter:** Analiza las unidades de almacenamiento del computador y determina si alguna de ellas corresponde a un volumen cifrado con las principales herramientas, como TrueCrypt, PGP, Safeboot, o Bitlocker.

```cmd
eedh.exe > "VolumesCifrados.txt"
```

### 2.11 Otros

#### Fecha y Hora de Arranque del Sistema:

**Windows Server:**
```cmd
net stats srv > ArranqueSistema.txt
```

**Windows Workstation:**
```cmd
net stats workstation > ArranqueSistema.txt
```

#### Información del Sistema:
```cmd
systeminfo > InformacionSistema.txt
```

### 2.12 Adquisición de la Memoria RAM

La captura o volcado de memoria es uno de los aspectos más importantes y críticos de la fase de adquisición. Realizar una correcta adquisición de memoria puede suponer la diferencia entre la resolución del incidente o no. Debido a esto debe ser cuidadoso durante el proceso.

#### Tipos de Memoria:
- **Memoria física:** Corresponde a la memoria real del sistema
- **Memoria virtual:** Corresponde principalmente al fichero de paginación `pagefile.sys`, aunque también hay que tener en cuenta el fichero `hiberfile.sys` y, más recientemente, el fichero `swapfile.sys`

#### Herramientas para Volcado de Memoria:
Existen un gran número de utilidades que permiten realizar un volcado de memoria, pero entre todas destaca **DumpIt** por su simplicidad y compatibilidad con las distintas versiones de Windows.

**DumpIt:**
- Ejecutar la aplicación desde el intérprete de comandos
- Realiza un volcado de memoria en formato RAW en el mismo directorio desde donde se ejecute el programa
- Al finalizar obtiene un fichero del tamaño de la memoria RAM del equipo
- Genera un fichero JSON con un log de la ejecución del comando, incluyendo el hash en SHA256 del fichero

**Otras herramientas disponibles:**
- Winpmem
- Memoryze
- RamCapture
- FTK Imager
- VARC, etc.

#### Adquisición Remota:
Si no tenemos acceso físico al equipo, pero nos encontramos en otro equipo que pertenece al mismo dominio y conocemos las credenciales de acceso de un usuario administrador, siempre podemos hacer una adquisición remota mediante la herramienta **PsExec de Sysinternals**, que permite la ejecución de comandos remotos.

#### Verificación de Integridad:
Una vez obtenida la imagen correspondiente al volcado de memoria física, si la herramienta utilizada no lo proporciona directamente, será necesario obtener un hash del fichero generado, que será anotado en la documentación de la cadena de custodia.

**Herramientas para cálculo de hash:**
- HashMyFiles
- HashCalc

**Ejemplo con HashMyFiles:**
```cmd
HashMyFiles /save "hashes.txt" "C:\ruta\al\volcado.dmp"
```

#### Método Alternativo: Crash Dump
Otra manera de obtener la memoria física es mediante un **"crash dump"**, el cual corresponde a un fallo del que el sistema no puede recuperarse. Cuando se produce este tipo de fallos se genera un fichero:
- **Minidump:** Volcado parcial de la memoria física
- **Volcado completo:** Configurándolo expresamente (`%SystemRoot%\Memory.dmp`)

Estos fallos pueden ser provocados mediante herramientas como **NotMyFault (SysInternals)**.

## 3. Fuentes

1. MARTÍNEZ RETENAGA, Asier. Guía de toma de evidencias en entornos Windows.
2. VILA AVENDAÑO, Pilar. Técnicas de análisis forense informático para peritos judiciales profesionales. 0XWord, 2018. ISBN: 9788469777008.

---

**Nota Final sobre la Adquisición:** 
La decisión final de cómo realizar la adquisición de las distintas evidencias será del analista que esté realizando el proceso, apoyado en su conocimiento, experiencia y manejo de las distintas técnicas y herramientas de las que dispone.
