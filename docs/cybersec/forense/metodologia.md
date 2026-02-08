# Metodología del Proceso Forense

## Introducción

Antes de proceder con un caso, debemos asegurarnos que todas las acciones que vamos a acometer se adecúan a la legislación nacional y/o internacional vigente.

Debe existir un **permiso** (orden judicial, orden interna de la organización) que garantice la investigación sobre las pruebas o evidencias. Recordemos que la finalidad de una investigación forense es utilizar las evidencias para demostrar o refutar hechos, por lo que es muy importante que las evidencias digitales sean obtenidas conforme a la legislación vigente.

Durante todo el proceso deberá garantizarse que la evidencia es **admisible** ante el tribunal.

Por todo esto, surge la necesidad de tener una metodología del proceso forense.

> **Importante:** No existe un estándar obligatorio universalmente aceptado, pero existen algunas metodologías y guías con cierta aceptación:
> - Normas ISO y UNE
> - RFC (Request For Comments) del IETF
> - Guías y manuales creados por instituciones varias

## Características de las Metodologías

### **Verificable**
Se debe poder comprobar la veracidad de las conclusiones extraídas a partir de la realización del análisis.

### **Reproducible**
Se deben poder reproducir en todo momento las pruebas realizadas durante el proceso.

### **Documentado**
Todo el proceso debe estar correctamente documentado y debe realizarse de manera comprensible y detallada.

### **Independiente**
Las conclusiones obtenidas deben ser las mismas, independientemente de la persona que realice el proceso y de la metodología utilizada.

## Fases de una Investigación

Dependiendo del autor se proponen varias fases. No es algo fijo y se pueden crear subdivisiones dentro de ellas.

## Fase Previa a la Investigación

Esta fase incluye todas las tareas que se realizan antes de comenzar la investigación propiamente dicha. Implica montar el laboratorio forense informático, crear una estación de trabajo forense, formar un equipo de investigación, obtener la aprobación de la autoridad competente, etc.

### **Comprobar el Material Forense**

1. **Reponer todos los consumibles** al terminar una investigación para que estén al 100% para la siguiente investigación.

2. **Borrado forense** de todo medio reutilizable empleado durante una investigación.
   - Referencia: *Guidelines for Media Sanitization - NIST Special Publication 800-88*

3. **Kit de herramientas** para recogida de evidencias y su análisis:
   - **Hardware:** Clonadoras, bloqueadores de escritura, etc.
   - **Software:** Sistemas operativos en vivo, utilidades de clonación y análisis.
     > No existe una herramienta que valga para todo, sino que un conjunto de muchas y diferentes herramientas te permiten llegar a los hallazgos.
   - **Equipo:** Estación de trabajo o portátil con suficiente potencia para procesar grandes cantidades de información.
     - Espacio de almacenamiento para evidencias (pueden ser discos de varios TB)
     - Potencia de cálculo para procesar grandes volúmenes de datos
     - Posible uso de **Inteligencia Artificial** para ayudar en la búsqueda de hallazgos

### **Revisión de las Leyes y Políticas en Vigor**

El forense debe conocer las leyes y cómo pueden afectar en su investigación. Influyen en:
- Método de recogida de evidencias
- Privacidad del usuario
- Ámbito de aplicación

> **Investigaciones corporativas:** Además de las leyes en vigor, es necesario conocer las políticas corporativas aplicables.

### **Notificar a las Autoridades y Obtener los Permisos Pertinentes**

En la mayoría de los escenarios, el forense deberá notificar o solicitar una autorización a una entidad superior como paso previo al comienzo de la investigación:

- **Investigaciones criminales:** Autorización mediante orden judicial
- **Investigaciones corporativas:** Autorización dada por la propia corporación

> Debemos asegurarnos de que los niveles adecuados de dirección de la organización aprobaron nuestras actividades y su alcance.

### **Material Mínimo para Acudir a un Escenario**

- Cámara fotográfica y de vídeo
- Cajas
- Cuadernos de notas
- Guantes
- Registros de evidencias
- Cintas de evidencias
- Bolsas de papel para evidencias
- Pegatinas para evidencias
- Etiquetas
- Cinta de escenario de crimen
- Bolsa anti-ESD
- Rotuladores permanentes
- Kit de herramientas no magnetizadas
- **Bolsas de Faraday** (especialmente útiles para móviles)
- Soportes de almacenamiento digital (memorias USB, CD/DVD vírgenes)

## Fase de Investigación

Considerada la **fase principal** de la investigación forense informática, implica la adquisición, conservación y análisis de datos probatorios para identificar el origen del delito y el culpable. Esta fase implica la aplicación de conocimientos técnicos para localizar las pruebas y examinar, documentar y conservar los hallazgos.

### **Identificación y Adquisición**

Se pueden realizar las siguientes tareas:
- Identificación del incidente
- Requisito pericial
- Entrevista aclaratoria
- Inspección ocular
- Recopilación de evidencias

#### **Entrevista Inicial**
Tras la notificación al equipo forense de un caso y obtener los permisos correspondientes, es habitual concretar una pequeña entrevista con los actores implicados:
- Quien notifica el caso
- Responsables de respuesta a incidentes
- Usuario del equipo

**Objetivo:** Establecer las **5WH** de una investigación:
1. **Quién (Who):** ¿Quién es el gestor del incidente? ¿Existe un identificador del incidente?
2. **Qué (What):** ¿Qué ocurrió?
3. **Cuándo (When):** ¿Cuándo es necesaria la presencia del forense?
4. **Dónde (Where):** ¿Dónde se encuentra la escena del incidente localizada? ¿Qué leyes le afectan?
5. **Por qué (Why):** ¿La investigación es abierta o encubierta? ¿Corporativa o criminal?
6. **Cómo (How):** ¿Qué dispositivos van a ser incautados? ¿Cuánto trabajo va a llevar el incidente?

#### **Documentación del Escenario**
- **Fotografiar y tomar vídeos** al llegar al escenario
- **Hacer un esbozo en papel** del escenario (como respaldo en caso de error de los registros fotográficos)
- Asignar un **número de caso** (identificativo aaammdd_xx, siendo xx el número del caso del día)
- Asignar nombre del investigador
- Utilizar todas las etiquetas necesarias para identificar las evidencias
- **Tomar notas** es fundamental para el investigador

### **Identificación**

#### **Dispositivos Físicos que pueden tener Evidencias Digitales**
- Disco duro
- Memoria USB
- Tarjetas de memoria
- Smart cards
- Escáner biométrico
- Contestador automático
- Cámaras digitales o de vigilancia
- RAM y almacenamiento volátil
- Dispositivos móviles y tabletas (calendarios, chats, emails, histórico de escritura, agenda, mensajes de voz y texto)
- Tarjeta de red (ej: dirección MAC)
- Routers, modems, switches (archivos de configuración, registros)
- Cables de red y conectores
- Servidores
- Impresoras (registros de uso)
- IoT y wearables (información GPS, dispositivos industriales, relojes)
- Información de la tarjeta de crédito

#### **Preguntas Clave durante la Identificación**
- ¿Cuáles son sus antecedentes?
- ¿Depende de otros dispositivos? (ej: ¿está conectado a una red?)
- ¿Existe un reglamento sobre el dispositivo? ¿Se aplicó? (ej: cámaras de seguridad)
- ¿En qué período de tiempo ocurrió el incidente?

### **Adquisición**

Esta es la fase en la que se recopilan las evidencias. Una evidencia puede definirse como cualquier prueba que pueda ser utilizada en un proceso legal.

#### **Características de la Evidencia (según RFC 3227)**
1. **Admisible:** Debe tener valor legal
2. **Auténtica:** Debe ser verídica y no sufrir manipulación alguna (asegurar integridad mediante hashing)
3. **Objetiva:** Debe estar libre de valoraciones personales y prejuicios
4. **Comprensible:** Debe ser clara y entendible
5. **Confiable:** Las técnicas utilizadas no deben generar ninguna duda sobre su veracidad

#### **Tipos de Evidencias**

##### **Evidencia Física**
Hace referencia al material informático físico:
- Discos duros
- Pendrives
- Equipos completos

##### **Evidencia Digital**
Corresponde a la información almacenada en las evidencias electrónicas:

**Archivos creados por los usuarios:**
- Cuadernos de direcciones de correos
- Archivos de bases de datos
- Archivos multimedia (imágenes, vídeos, sonido)
- Archivos de texto, documentos, hojas de cálculo
- Marcadores de internet, favoritos, historial

**Archivos protegidos por los usuarios:**
- Archivos comprimidos
- Archivos cifrados
- Archivos con contraseña
- Archivos ocultos
- **Esteganografía** (ocultar información en archivos)
  - Web para ocultar texto en una imagen: https://stylesuxx.github.io/steganography/
  - Web para ocultar una imagen dentro de otra: https://incoherency.co.uk/image-steganography/

**Archivos generados por el equipo:**
- Copias de seguridad
- Archivos de log
- Archivos de configuración
- Spool de la impresora
- Cookies de navegación
- Archivos de intercambio
- Archivos de sistema
- Archivos históricos
- Archivos temporales
- **Información temporal:** RAM, procesos, puertos abiertos

#### **Procedimiento del Forense durante la Adquisición**
1. Anotar todos los dispositivos que se encuentren en la escena, su estado y localización
2. Fotografiar todos los dispositivos para determinar su localización y estado (apagado o encendido y lo que se ve en pantalla)
3. Etiquetar unívocamente dichos dispositivos y sus conexiones
4. Fotografiar nuevamente toda la escena con los dispositivos y conexiones etiquetadas
5. Si el dispositivo está en estado de suspensión o con protector de pantalla, se puede actuar para que salga de ese estado y hacer la fotografía de la pantalla

### **Preservación**

Antes de obtener la evidencia debe tenerse en cuenta que el **primer objetivo es preservarla**.

#### **Principios de Preservación**
- No se deben perder las evidencias que se van a analizar
- Cuidado con la **información volátil**
- Rotular bien todos los elementos
- Registro de todas las acciones que se realizan
- Transportar con sumo cuidado
- Cuidado con las temperaturas extremas y campos electromagnéticos
- **Mantener la cadena de custodia** (Chain of Custody)
  - Romperla puede anular la validez de la prueba

### **Análisis**

Esta es la fase en la que se procede a analizar con detalle las evidencias adquiridas en busca de indicios que respondan a las preguntas planteadas.

Al realizar el análisis de la información recopilada se debe tener presente el tipo de incidente al que se pretende ofrecer respuesta. Dependiendo del caso, puede resultar útil analizar en profundidad diferentes elementos, también llamados **artefactos**.

#### **Ejemplos de Artefactos en Sistemas Windows**

1. **MFT (Master File Table):**
   - Tabla que almacena información sobre los ficheros almacenados en el disco
   - Almacena información como nombre, fechas de acceso, creación y modificación, localización de datos en disco, etc.

2. **Captura de Memoria RAM:**
   - El análisis de memoria RAM se considera hoy en día una fuente valiosísima de información
   - No siempre va a ser posible su adquisición, pero cuando sea posible, debe realizarse siempre

3. **Ficheros Borrados y Papelera de Reciclaje:**
   - Cuando se elimina un fichero en Windows, el sistema operativo elimina la referencia pero no la información en sí
   - La información puede ser recuperada mediante diferentes métodos
   - La papelera de reciclaje también puede contener información útil

4. **Registro de Windows:**
   - Almacena información diversa: redes a las que se conectó el equipo, listado de páginas visitadas, archivos abiertos recientemente, aplicaciones instaladas, histórico de dispositivos USB conectados, etc.
   - **Problema:** Partes de su estructura pueden verse modificadas por las distintas actualizaciones del sistema operativo

5. **Registro de Eventos (Windows Event Logs):**
   - Registra muchos de los eventos que se producen en el sistema
   - El tipo de eventos recogidos y el nivel de detalle depende de la configuración del sistema
   - **Recomendación:** Configurar un nivel de auditoría elevado, especialmente en sistemas Windows Server
   - **Herramienta útil:** Sysmon (Sysinternals) para elevar el nivel de detalle de la información almacenada

> **Fundamental:** Todo el proceso debe ser realizado desde un punto de vista **objetivo**, sin descartar lo que para el analista pueda ser considerado como obvio.

## Fase Posterior a la Investigación

Esta fase implica la presentación de informes y la documentación de todas las acciones emprendidas y de los hallazgos obtenidos durante el curso de la investigación. Garantiza que el público objetivo pueda comprender fácilmente el informe y que éste proporcione pruebas adecuadas y aceptables.

### **Documentación**

La documentación realmente es una **fase paralela** a las anteriores, ya que debemos documentar todos y cada uno de los pasos realizados durante todo el proceso:

- Sin escatimar en fotografías y capturas de pantalla
- Manteniendo una bitácora con las fechas y horas de cada acción realizada sobre las evidencias
- De forma comprensible y detallada

### **Informe**

Finalmente, deberemos realizar un **informe final** que recoja los pasos realizados y las conclusiones obtenidas. En caso de peritaje judicial, este informe se conoce como **informe pericial** y normalmente estará constituido por dos partes diferenciadas:

#### **1. Parte Ejecutiva**
- Destinada a personas que no tienen un perfil técnico
- El lenguaje empleado no puede ser muy técnico
- Se recomienda incluir un glosario final de términos técnicos empleados

#### **2. Parte Técnica**
- Destinada a personas con perfil más técnico
- Recogerá los pasos realizados de tal forma que cualquier técnico con los conocimientos adecuados pueda repetir los pasos seguidos y llegar a las mismas conclusiones
- **Referencia:** https://indalics.com/informe-pericial-informatico (resumen de la estructura que debe llevar un informe pericial informático)

### **Presentación**

La presentación de la información, en caso de tener que hacerla, es tan importante o más que las anteriores, ya que se deben hacer accesibles y comprensibles las conclusiones obtenidas del proceso de análisis forense.

#### **Pautas Recomendadas para la Presentación**
- Preparar una presentación de manera pedagógica que sea fácilmente comprensible
- Detallar las conclusiones
- Explicar de manera clara el proceso que se siguió para la obtención y análisis de las evidencias
- Evitar las afirmaciones no demostrables o los juicios de valor
- Elaborar las conclusiones desde un punto de vista objetivo

> **Nota final:** Las fases no son secuenciales sino que están **entrelazadas** entre sí. Por ejemplo, la fase de documentación comienza en la fase de preservación.
