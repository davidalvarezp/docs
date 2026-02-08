# Herramientas de Triaje y Análisis Automatizado de Evidencias

## Introducción

En muchas ocasiones, especialmente en casos de respuesta a incidentes, el **análisis rápido de la situación** puede marcar la diferencia entre un pequeño incidente y un bloqueo total de nuestros sistemas. En estos casos, no siempre es posible o recomendable realizar una clonación completa de un disco. Sin embargo, será necesario realizar una **adquisición lo más rápida posible** de los principales elementos (artefactos) que nos pueden servir para analizar la situación.

Es aquí donde podemos hacer uso de las **herramientas de triaje** que nos van a permitir realizar la adquisición de estos elementos individuales de una manera rápida y sin necesidad de clonar todo el disco.

En entornos Windows, los principales elementos que las herramientas de triaje van a permitir adquirir son, entre otros:
- Captura de la memoria RAM
- Ficheros de memoria virtual
- Registro de Windows
- Archivos Prefetch
- MFT (Master File Table)
- Papelera de reciclaje
- Navegación web (historial, caché, etc.)
- Eventos del sistema
- Información de usuarios

## 1. Triaje o Adquisición de Artefactos Individuales

### 1.1 Elementos o Artefactos a Adquirir

#### **Memoria y Archivos de Sistema:**
- **Captura de la memoria RAM:** Contiene información de procesos, contraseñas, conexiones de red
- **Ficheros de memoria virtual:** `pagefile.sys`, `swapfile.sys`, `hiberfil.sys`
- **Archivos Prefetch:** Información sobre programas ejecutados frecuentemente
- **MFT (Master File Table):** Metadatos de todos los archivos del sistema

#### **Registros y Configuración:**
- **Registro de Windows:** Configuración del sistema, información de usuarios, programas instalados
- **Eventos del sistema:** Logs de seguridad, aplicación, sistema
- **Papelera de reciclaje:** Archivos eliminados recientemente

#### **Información de Usuarios:**
- **Historial de navegación:** URLs visitadas, búsquedas, cookies
- **Archivos temporales:** Cache de navegadores, documentos temporales
- **Accesos recientes:** Documentos abiertos, programas ejecutados

### 1.2 Adquisición Local de Evidencias

Para la adquisición local de evidencias existen varias herramientas de triaje disponibles. La elección de una u otra dependerá del conocimiento que tengamos de ellas y de los elementos que permitan adquirir.

#### 1.2.1 Herramientas de Triaje

##### **KAPE (Kroll Artifact Parser and Extractor)**

**Características:**
- **Potente pero intrusivo:** Más pesado que otras soluciones, puede no ser aconsejable para escenarios donde necesitemos la mínima intrusión posible
- **Procesado integrado:** Permite (opción modules) el procesado de los datos obtenidos
- **Colecciones predefinidas:** Trabaja con colecciones ya definidas como `BasicCollection` o `SANS_Triage`
- **Interfaz gráfica:** Fácil de usar mediante selección de elementos a adquirir

**Uso básico:**
1. **Seleccionar elementos:** En el lado izquierdo, elegir los elementos o colección de elementos que queremos adquirir
2. **Procesado opcional:** En el lado derecho, elegir si ejecutar algún módulo de procesado de las evidencias
3. **Colecciones predefinidas:** Haciendo doble clic en ellas tenemos una descripción de los elementos que recogen

**Documentación:** Disponible en la página oficial de KAPE

##### **BrimorLabs Live Response Collection**

**Características:**
- **Herramienta antigua pero funcional:** Aunque algo antigua, sigue siendo funcional en sistemas actuales
- **Multiplataforma:** Ayuda a los analistas a realizar adquisición de datos en sistemas Windows, MacOS o Linux
- **Recolección amplia:** Recoge información del sistema, registros, ficheros de configuración, entre otros datos relevantes
- **Diseño simplificado:** Enfoque en adquisición rápida y sencilla

##### **IRTriage**

**Características:**
- **Herramienta veterana:** Diseñada específicamente para recolección de datos en respuesta a incidentes
- **Automatización completa:** Automatiza la recolección de:
  - Información del sistema
  - Información de red
  - Registros del sistema
  - Información del disco
  - Volcados de memoria
- **Capacidad especial:** Recolección de información de "Volume Shadow Copy" (VSS)
  - Ayuda a contrarrestar muchas técnicas antiforense
  - Permite acceder a versiones anteriores de archivos

##### **CyLR (Cybersecurity Live Response)**

**Características:**
- **Enfoque en NTFS:** Recolecta artefactos forenses de hosts con sistemas de archivos NTFS
- **Minimiza impacto:** Diseñada para ser rápida y segura, minimizando el impacto en el host
- **Código abierto:** Proyecto abierto y transparente
- **Portable:** Puede ser ejecutada desde un USB
- **Artefactos recogidos:**
  - Ficheros de sistema
  - Tareas programadas
  - Ficheros Prefetch
  - Registros de configuración

**Ejemplos de uso:**

**Adquisición de artefactos y almacenamiento local:**
```shell
CyLR.exe -o LRData
```

**Adquisición de artefactos y envío por SFTP:**
```shell
CyLR.exe -u username -p password -s 8.8.8.8
```

**Información adicional:**
- Listado completo de artefactos disponibles en la documentación oficial
- Ejemplos detallados de uso disponibles en el repositorio

### 1.3 Adquisición Remota de Evidencias

La adquisición remota de evidencias está pensada para su uso dentro de una red corporativa en la que, por el motivo que sea, necesitemos realizar una adquisición rápida de artefactos en varias de las máquinas de nuestra organización.

Aunque no es su propósito principal, estas herramientas también permiten cierto grado de monitorización remota.

#### 1.3.1 Velociraptor

**Información general:**
- **Crecimiento exponencial:** Una de las herramientas para adquisición remota de evidencias que más ha crecido en uso en los últimos años
- **Software libre:** Proyecto de código abierto desarrollado por la empresa Velocidex
- **Arquitectura sólida:** Diseñada para escalabilidad y rendimiento
- **Biblioteca extensible:** Artefactos forenses personalizables
- **Lenguaje propio:** VQL (Velociraptor Query Language) única y flexible

**Descripción según los desarrolladores:**
> "Con una arquitectura sólida, una biblioteca de artefactos forenses personalizables y su propia lengua de consulta única y flexible, Velociraptor representa la próxima generación en monitorización de endpoints, investigaciones forenses digitales y respuesta a incidentes de ciberseguridad."

**Características principales:**
- **Monitoreo de endpoints** en tiempo real
- **Investigaciones forenses** digitales automatizadas
- **Respuesta a incidentes** de ciberseguridad
- **Consulta flexible** mediante VQL
- **Arquitectura escalable** para grandes entornos

**Nota de seguridad importante:**
En los últimos tiempos, esta herramienta está siendo utilizada por ciberdelincuentes para la distribución de malware. Es crucial:
- Utilizar solo versiones oficiales
- Verificar integridad de descargas
- Mantener actualizaciones de seguridad
- Implementar controles de acceso adecuados

## 2. Análisis Automatizado de Evidencias

Existen varias herramientas en el mercado que nos van a permitir realizar un **análisis automatizado** de las evidencias adquiridas.

### **Características comunes:**
- **Entrada estándar:** Normalmente permiten tomar como entrada una imagen de disco
- **Módulos/plugins:** Ejecutan sobre ella diversos módulos para analizar artefactos específicos
- **Visualización múltiple:** Los datos obtenidos pueden mostrarse en diversos formatos (tablas, gráficas, líneas temporales, etc.)
- **Automatización:** Procesan grandes volúmenes de datos de forma automática

### **Limitaciones y consideraciones:**
- **No sustituyen conocimiento:** No reemplazan el conocimiento que el analista forense debe poseer sobre los sistemas a analizar
- **Punto de partida:** Son un buen punto de inicio para el análisis
- **Casos específicos:** Para la resolución de determinados casos, puede ser suficiente con la información extraída mediante estas herramientas

### **Herramientas principales:**

#### **1. EnCase Forensic Software**
- **Tipo:** Plataforma forense comercial
- **Soporte amplio:** Más de 25 tipos diferentes de dispositivos
- **Dispositivos soportados:**
  - Equipos de escritorio
  - Dispositivos móviles
  - Sistemas GPS
- **Características:** Interfaz profesional, amplia documentación, certificaciones

#### **2. Oxygen Forensic Detective**
- **Enfoque principal:** Dispositivos móviles
- **Plataformas soportadas:**
  - Dispositivos IoT
  - Servicios en la nube
  - Drones
  - Tarjetas multimedia
  - Plataformas de escritorio
- **Ventajas:** Análisis profundo de aplicaciones móviles, extracción de datos de servicios en la nube

#### **3. Autopsy / The Sleuth Kit**
- **Tipo:** Herramientas forenses de código abierto
- **Popularidad:** Probablemente unas de las más conocidas y populares
- **Funcionalidades:**
  - Análisis de imágenes de disco
  - Análisis en profundidad de sistemas de archivos
  - Módulos extensibles
  - Interfaz gráfica amigable
- **Ventajas:** Gratuita, comunidad activa, multiplataforma

#### **4. E3:Universal (Paraben Suite)**
- **Suite completa:** Ofrece una serie de herramientas forenses que cubren múltiples aspectos
- **Áreas cubiertas:**
  - **Análisis forense de escritorio:** Sistemas Windows, Linux, Mac
  - **Análisis forense de correo electrónico:** Múltiples formatos de correo
  - **Análisis de dispositivos móviles:** iOS, Android, otros
  - **Análisis de la nube:** Servicios cloud, SaaS
  - **Análisis forense de IoT:** Dispositivos conectados
  - **Triaje y visualización:** Herramientas específicas

#### **5. Magnet AXIOM**
- **Solución completa:** Para análisis forense digital
- **Plataformas soportadas:**
  - Computadoras
  - Dispositivos móviles
  - Almacenamiento en la nube
- **Características:** Interfaz intuitiva, procesamiento paralelo, líneas de tiempo automáticas

#### **6. XWays Forensics**
- **Tipo:** Framework avanzado de trabajo forense
- **Enfoque:** Profesional avanzado
- **Capacidades:**
  - Examen de discos duros
  - Análisis de imágenes de disco
  - Recuperación de evidencias
  - Herramientas de investigación
- **Ventajas:** Alta velocidad, bajo consumo de recursos, flexibilidad

#### **7. Belkasoft Evidence Center**
- **Detección integral:** Facilita detección, análisis e investigación de evidencias digitales
- **Fuentes de datos:**
  - Computadoras
  - Dispositivos móviles
  - Memoria RAM
  - Datos de nube
- **Características:** Análisis de memoria, extracción de artefactos de navegadores, soporte para múltiples formatos

## Consideraciones Prácticas para la Selección de Herramientas

### **Criterios de selección:**

#### **1. Tipo de Investigación:**
- **Respuesta a incidentes:** Herramientas rápidas y mínimamente intrusivas (KAPE, CyLR)
- **Investigación forense completa:** Herramientas completas (EnCase, AXIOM)
- **Dispositivos móviles:** Especializadas (Oxygen, Belkasoft)

#### **2. Presupuesto:**
- **Código abierto/gratuitas:** Autopsy, The Sleuth Kit, CyLR
- **Comerciales:** EnCase, AXIOM, Oxygen, Belkasoft

#### **3. Habilidades del Equipo:**
- **Interfaz gráfica:** Para equipos menos técnicos
- **Línea de comandos:** Para equipos técnicos avanzados
- **Automatización:** Para procesos repetitivos

#### **4. Escalabilidad:**
- **Pequeños entornos:** Herramientas individuales
- **Grandes organizaciones:** Soluciones empresariales con gestión centralizada

### **Mejores prácticas en el uso de herramientas de triaje:**

#### **1. Preparación previa:**
- Tener herramientas preparadas y actualizadas
- Verificar compatibilidad con versiones del SO
- Probar en entornos controlados antes del uso real

#### **2. Documentación:**
- Registrar versiones de herramientas utilizadas
- Documentar parámetros de ejecución
- Mantener logs de todas las operaciones

#### **3. Verificación:**
- Calcular hashes de evidencias recolectadas
- Verificar integridad de datos obtenidos
- Comparar resultados con múltiples herramientas cuando sea posible

#### **4. Legalidad:**
- Obtener autorizaciones necesarias
- Respetar políticas de privacidad
- Mantener cadena de custodia adecuada

## Conclusión

Las herramientas de triaje y análisis automatizado representan un avance significativo en el campo de la informática forense y respuesta a incidentes. Permiten:

1. **Respuesta rápida** en situaciones críticas
2. **Automatización** de tareas repetitivas
3. **Consistencia** en los procesos de recolección
4. **Escalabilidad** para grandes volúmenes de datos

Sin embargo, es crucial recordar que **ninguna herramienta sustituye el conocimiento y criterio del analista forense**. La tecnología debe ser vista como un complemento que potencia las capacidades humanas, no como un reemplazo.

La selección adecuada de herramientas, combinada con procedimientos documentados y personal capacitado, es la clave para investigaciones forenses exitosas en el entorno digital actual.
