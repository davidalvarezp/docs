# Adquisición de Evidencias en PCs

## Consideraciones Previas

### **Tipo de Incidente**
La información que necesitamos y los pasos a seguir dependen del tipo de incidente:

- **Caso de competencia desleal:**
  - Seguramente la empresa afectada colabore
  - Enfocarse en analizar el disco

- **Caso de ataque con malware:**
  - Probablemente haya que analizar la memoria (RAM)

- **Caso de estafa:**
  - Probablemente el estafador no colabore
  - Necesidad de métodos más complejos de extracción

### **Colaboración**
- **Valorar quién participará:**
  - ¿Tiene habilidades y conocimientos para ello?
  - ¿Es mejor llamar a un asesor experto?

- **Preparar listas de a quién hay que mantener informado:**
  - Nombre, email, etc.

- **Solicitar las contraseñas necesarias:**
  - Sistemas de ficheros cifrados
  - Contraseñas de usuario

### **Autorización**
Es esencial obtener **autorización escrita** de quien corresponda y ver su alcance:

- **Empresa:**
  - Se trabaja con información confidencial
  - El trabajo del investigador afecta a la disponibilidad de los servicios

- **Juez:**
  - Asegurar la validez de las pruebas para el juicio
  - Determinar si se puede acceder al contenido de un dispositivo
  - Determinar si se puede acceder a volúmenes cifrados
  - Determinar si se puede acceder a la nube asociada, etc.

### **Legitimidad para Acceder a Contenidos**

#### **LECrim, Artículo 588 sexies a. Necesidad de motivación individualizada**
1. _(...)_
2. **La simple incautación de cualquiera de los dispositivos a los que se refiere el apartado anterior, practicada durante el transcurso de la diligencia de registro domiciliario, no legitima el acceso a su contenido**, sin perjuicio de que dicho acceso pueda ser autorizado ulteriormente por el juez competente.

#### **LECrim, Artículo 588 sexies c. Autorización judicial punto 1**
1. La resolución del juez de instrucción mediante la que se autorice el acceso a la información contenida en los dispositivos a que se refiere la presente sección, fijará los términos y el alcance del registro y podrá autorizar la realización de copias de los datos informáticos. (...)

#### **LECrim, Artículo 588 sexies c. Autorización judicial punto 3**
3. Cuando quienes lleven a cabo el registro o tengan acceso al sistema de información o a una parte del mismo conforme a lo dispuesto en este capítulo, tengan razones fundadas para considerar que los datos buscados están almacenados en otro sistema informático o en una parte de él, podrán ampliar el registro, siempre que los datos sean lícitamente accesibles por medio del sistema inicial o estén disponibles para este. Esta ampliación del registro deberá ser autorizada por el juez, salvo que ya lo hubiera sido en la autorización inicial. En caso de urgencia, la Policía Judicial o el fiscal podrán llevarlo a cabo, informando al juez inmediatamente, y en todo caso (...)

### **Entrada y Registro**
- **Con intervención del juez o letrado de la Administración de Justicia** (secretario judicial)
  - Todo lo que sea necesario, solicitárselo a él
- **Se produce una situación tensa con el titular**
  - Buscar respetar su privacidad y honor al máximo
- **Al terminar se registra un acta** con:
  - Lugar, fecha y hora de inicio y fin
  - Si estaba el titular presente
  - Intervinientes
  - Cómo se realizó
  - Qué se encontró
  - Incidentes ocurridos

## Tipos de Dispositivos
- PCs
- Móviles
- Discos duros
- Pendrives
- Cámaras
- Routers
- Escáneres
- Impresoras
- Dispositivos IoT
- Entornos virtualizados
- Cloud (nube)
- Instrumentos de OT (Tecnología Operacional)
- Etc.

## Perros Detectores de Dispositivos Electrónicos
- **Primero entrenados para detectar óxido de trifenilfosfina (TPPO):**
  - Empleado para que los chips no se calienten
- **Después entrenados para detectar:**
  - Polvo de tántalo usado en los condensadores electrolíticos
  - Fragmentos de PCB que desprenden COVs (compuestos orgánicos volátiles)

**Fuentes de información adicional:**
- https://www.youtube.com/watch?v=gxCJRC2P7co
- https://www.youtube.com/watch?v=GQOfza0iMH8
- https://www.youtube.com/watch?v=yxbV_yEWZPY
- https://www.youtube.com/watch?v=37QFDSwkYaI
- https://www.youtube.com/watch?v=yn4EwUzWy50
- https://www.youtube.com/watch?v=iv61VkpwDvU
- https://getxent.com/products/odor-getxent-tubes-electric-electronic-devices

## Inventario
**Etiquetar, inventariar y fotografiar todo, anotando:**

### **Datos Básicos:**
- Marca
- Modelo
- Número de serie
- Tipo de conexión (USB, FireWire, etc.)
- ...

### **Información Adicional:**
- Responsable del dispositivo
- Personas que trabajan con él
- Cualquier información que pueda ser relevante

## Herramientas Necesarias
Preparar de antemano un **kit completo** de herramientas para trabajar:

### **Hardware:**
- Discos duros, pendrives, CDs y DVDs vírgenes
- Pendrives de arranque de distintos SO
- Destornilladores para abrir equipos
- Clonadora de discos
- Bloqueadores de escritura
- Bases para insertar discos duros
- Bolsitas de evidencia
- Jaulas de Faraday

### **Software:**
- USBs y CDs con distintas herramientas forenses
- Sistemas operativos en vivo
- Herramientas de clonación y análisis

**Ejemplo de kit profesional:** TX1 Ultimate Kit (https://www.forensiccomputers.com/tx1-ultimate-kit)

## Toma de Notas
- **Se debe tomar notas de cada detalle** de la investigación
- **Aplicaciones específicas para forense:**
  - **Forensic Notes** (pago por suscripción): https://www.forensicnotes.com/
    - Capacidades: etiquetado, búsqueda, filtrado, sincronización, creación de plantillas, voz a texto, administración de casos, contactos, etc.
  - **Monolith Notes** (gratis): https://www.monolithforensics.com/free-tools

## Modos de Adquisición

### **Modo "Dead" o Estático**
- **Método recomendado** en muchas ocasiones
- **Procedimiento:** Apagar el ordenador **tirando del cable**
  - No de forma ordenada (apagado normal), que altera la evidencia
- **Ventaja:** Permite una clonación exacta
- **Problemas:**
  - No obtiene datos volátiles
  - Discos cifrados pueden quedar inaccesibles
    - ¿Nos van a facilitar la clave?

### **Modo "Live"**
- **Ventaja:** Permite obtener datos volátiles del equipo
- **Problemas:**
  1. **Complejidad:** Puede invalidar pruebas
     - Escrituras innecesarias en disco
     - Modificación de metadatos (fechas de acceso, etc.)
  2. **Imágenes difuminadas:**
     - Como lleva tiempo crearlas, puede haber cambios por el medio
     - Metadatos y datos no coincidirán
  3. **Medidas anti-forense** pueden activarse
- **Requisito:** Debe estar **muy documentado**

## Cadena de Custodia

### **Fundamento Legal**
En nuestra jurisprudencia encontramos el llamado **Principio de "mismidad" de la prueba** (STS 1190/2009):

> "Es necesario tener la completa seguridad de lo que se traslada, lo que se mide, lo que se pesa y lo que se analiza es lo mismo en todo momento, desde el instante mismo en que se recoge del lugar del delito hasta el momento final en que se estudia y destruye"

> "Es a través de la cadena de custodia como se satisface la garantía de la 'mismidad' de la prueba."

### **Definición**
No es un término definido en nuestra legislación, sino tomado de EEUU por nuestra jurisprudencia.

Según la **STS 587/2014**:
> "la cadena de custodia constituye un sistema formal de garantía que tiene por finalidad dejar constancia de todas las actividades llevadas a cabo por cada una de las personas que se ponen en contacto con las evidencias"

**Esto aplica tanto a evidencias físicas como digitales.**

### **Práctica de la Cadena de Custodia**
- Las FFCCS o los funcionarios judiciales emplearán:
  - Pegatinas-precinto
  - Sellos oficiales
  - Bolsas con precinto
- **Se empleará una nueva bolsa con precinto** cada vez que se haga algo con la evidencia
- **Registro exhaustivo** de todos los accesos y manipulaciones

### **Consecuencias de la Rotura de la Cadena**
Para considerarla rota ha de demostrarse **manipulación efectiva** (STS 629/2011).

**Su rotura no implica automáticamente:**
1. **La ilicitud y exclusión del medio de prueba** (STS 339/2013, STS 120/2018)
   - Podría simplemente dar menor fiabilidad a su valoración
2. **La vulneración automática de derechos fundamentales** (STS 1349/2009)

> **Va a depender mucho del criterio del tribunal**

### **Casos que NO han supuesto rotura de cadena:**
- La irregularidad en los protocolos establecidos (STS 339/2013)
- El retraso en la entrega y análisis (STS 773/2013 y STS 285/2014)
- La ausencia de documentación, si se testifica (STS 541/2018)
- Errores u omisiones en formularios (ATS 599/2018)
- Irregularidades en la identificación de lo intervenido (ATS 39/2011)
- Irregularidades en el lugar de depósito (STS 1029/2013)

> **¡Aun así tenemos que hacerlo lo mejor posible!**

### **Ejemplo de Fallo en Cadena de Custodia**
En el acta levantada por el Secretario Judicial:
> "en cuanto a desprecintos, nada cumplía la norma mínima de garantía que pudiera considerar precintado algo, encontrándose las vías de acceso (puertos USB) de las torres, libres y sin tapar"

*Fuente: https://www.elconfidencial.com/tecnologia/2016-07-06/anonymous-hackers-15m-junta-electoral-central-gijon_1220436/*

## RFC 3227: Directrices para la Recolección de Evidencias

### **Información General**
- **URL:** https://datatracker.ietf.org/doc/html/rfc3227
- **Estatus:** Puede servir como estándar de facto (no es de obligatorio cumplimiento)
- **Fecha de creación:** 2002

### **Directrices Principales**

#### **1. Seguir políticas y considerar personal**
- Seguir la política de seguridad de tu sitio
- Tener en cuenta personal de respuesta ante incidentes, policía, etc.

#### **2. Capturar imágenes precisas**
- Capturar una imagen del sistema tan precisa como sea posible
- **A nivel de bit** (bit-by-bit)

#### **3. Minimizar cambios**
- Minimizar los cambios en la información que se esté recolectando
- Ni siquiera hora de acceso a ficheros y directorios
- Eliminar los agentes externos que puedan cambiarla

#### **4. Mantener notas detalladas**
- Incluyendo fechas y horas
- Si es posible de forma automática
- Indicar si las horas son en UTC o en hora local
- Prepararse para testificar sobre lo realizado

#### **5. Priorizar recolección sobre análisis**
- En caso de dilema entre recolección y análisis, primar la recolección

#### **6. Orden descendiente de volatilidad**
- Ir de más a menos volátil

#### **7. Comprobar implementación**
- Comprobar que los métodos de recolección se pueden implementar
- Particularmente en situación de crisis

#### **8. Ser veloz, preciso y metódico**
- Automatizar procesos
- Si hay varios dispositivos, trabajar en paralelo
- Ir paso a paso

### **Orden de Volatilidad**
Una información es más volátil si es más fácil que cambie o desaparezca. **Ir de más a menos volátil:**

1. **Registros y caché** (más volátil)
2. **Tabla de enrutamiento, caché ARP, tabla de procesos, estadísticas del kernel**
3. **Memoria** (RAM)
4. **Sistemas de ficheros temporales**
5. **Disco** (almacenamiento persistente)
6. **Logs remotos del sistema**
7. **Configuración física, topología de red**
8. **Copias de seguridad** (menos volátil)

> **Nota:** El RFC no incluye la nube, que puede ser muy volátil

### **Cosas a Evitar**

#### **1. No apagar/encender innecesariamente**
- Hasta haber finalizado la recolección
- Se puede perder mucha evidencia
- El atacante puede haber alterado los scripts y servicios de arranque o parada para destruir evidencia

#### **2. No confiar en los programas del sistema**
- Usar los programas de recolección con enlazado estático
- Desde un medio protegido (sólo lectura)

#### **3. No emplear programas que modifiquen metadatos**
- P. ej.: tar, xcopy (modifican hora de acceso)

#### **4. Cuidado al eliminar agentes externos**
- Al desconectar de la red puede que haya mecanismos que detecten esto y borren evidencia
- Ejemplo: "kill switches" programados

### **Consideraciones de Privacidad**
- **Respetar las reglas de privacidad** impuestas por la compañía y por la ley
  - No dar acceso a personas que no lo tendrían normalmente
  - Esto incluye tanto datos personales como logs
- **No entrometerse en la privacidad de otros sin justificación**
  - No recopilar datos personales a menos que la evidencia de incidente sea insuficiente
- **Buscar respaldo en los procedimientos de la empresa**

### **Consideraciones Legales de la Evidencia**
La evidencia ha de ser:

1. **Admisible:** Válida en un proceso legal
2. **Auténtica:** Poder demostrar que no ha sido manipulada
3. **Completa:** Debe contar toda la historia y no una única perspectiva
4. **Fiable:** No puede haber duda sobre su autenticidad y veracidad
5. **Creíble y comprensible** por un jurado

### **Pasos de la Recolección**

#### **1. Identificación de evidencia**
- ¿Dónde está la evidencia?
- Listar qué sistemas estuvieron involucrados en el incidente
- Determinar de cuáles de ellos se deben tomar evidencias

#### **2. Establecer relevancia**
- Establecer qué es más probable que sea relevante y admisible
- **Ante la duda es mejor recolectar de más**

#### **3. Orden de volatilidad**
- Para cada sistema, establecer el orden relevante de volatilidad

#### **4. Eliminar agentes externos**
- Eliminar los agentes externos de cambio

#### **5. Recolección sistemática**
- Siguiendo el orden de volatilidad
- Recolectar la evidencia con herramientas especializadas

#### **6. Documentación del tiempo**
- Registrar cuán desviado está el reloj del sistema

#### **7. Identificación adicional**
- Preguntarse qué más puede ser una evidencia durante los pasos de la recolección

#### **8. Documentación exhaustiva**
- Documentar cada paso
- Tomar notas de quién estuvo allí y qué es lo que estuvieron haciendo
- Registrar qué observaron y cómo reaccionaron

#### **9. Verificación de integridad**
- Generar checksums y firmar la evidencia criptográficamente
- Ayuda a mantener la cadena de custodia
- **No se debe alterar la evidencia** al dar este paso

### **Cadena de Custodia según RFC 3227**
Se debe explicar claramente:
- Cómo se encontró la evidencia
- Cómo se manejó
- Todo lo que le pasó

**Documentar entre otros:**
- Dónde, cuándo y quién la descubrió y recolectó
- Dónde, cuándo y quién la manejó o examinó
- Quién la tuvo bajo custodia, durante qué período y cómo la tuvo almacenada
- Cuando cambió de manos, quién y cómo hizo la transferencia (incluyendo números de envío, etc.)

### **Almacenamiento y Acceso a la Evidencia**
- **Usar medios de almacenamiento comunes**
  - No formas de almacenamiento poco conocidas
- **Restringir y documentar el acceso** a la evidencia de forma exhaustiva
  - Emplear métodos que registren accesos no autorizados

**Aspectos no mencionados en el RFC pero importantes:**
- Controlar la temperatura y humedad del lugar
- Usar armarios ignífugos y contra inundación

## Herramientas para la Recolección

### **Preparación de Herramientas**
1. **Tener los programas de recolección en medio de sólo lectura**
2. **No emplear los programas del propio sistema**
   - Pueden estar comprometidos (ej.: casos de malware)
3. **Programas enlazados de forma estática**
   - No requerir librerías fuera del medio de sólo lectura
4. **Aun así, considerar limitaciones:**
   - Los rootkits se pueden instalar mediante módulos de carga del kernel
   - Las herramientas pueden no estar dando la imagen completa

### **Características de las Herramientas Ideales**
- **Alterar el escenario lo mínimo posible**
  - Que requieran poca memoria
  - Preferiblemente sin interfaz gráfico
- **Preparar de antemano** todas las herramientas
  - Para cada SO con el que se trabaje
- **Estar preparado para testificar** sobre la autenticidad y fiabilidad de las herramientas

### **Tipos de Herramientas Necesarias**
1. **Programas para listar y examinar procesos**
2. **Programas para comprobar el estado del sistema**
3. **Programas para realizar copias bit a bit**
4. **Programas para generar checksums y firmas**
5. **Programas para generar y examinar imágenes del core (memoria)**
6. **Scripts para automatizar la recolección**

## Otras Consideraciones Importantes

### **Establecer los Pasos a Seguir**
- **De forma general:**
  - Que no se nos olvide ningún aspecto
- **De forma detallada,** teniendo en cuenta:
  - Duración del proceso
  - Urgencia del mismo
  - Recursos necesarios para llevarlo a cabo
  - Etc.

### **Ejemplo de Evidencias Electrónicas**
Post de Juan Antonio Rodríguez Álvarez de Sotomayor, Jefe Departamento Contra el Cibercrimen (UCO):
https://www.linkedin.com/posts/cybercrime-gc_eabrevidence-ciberseguridad-activity-7193262271429545986-F6-W
