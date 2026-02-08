# Fundamentos de la Informática Forense

## ¿Qué es la Informática Forense?

La informática forense es un conjunto de técnicas y procedimientos que ayudan a identificar, obtener, preservar, extraer, interpretar y documentar evidencias digitales. Estas evidencias se utilizan en investigaciones de diversos tipos, tanto corporativas como criminales.

En 1910, el francés **Edmond Locard** establece el primer laboratorio forense policial en Lyon y enuncia el **Principio de Locard**:
> "Siempre que dos objetos entran en contacto, transfieren parte de la materia que contienen al otro objeto."

Este principio sigue siendo fundamental en las investigaciones forenses digitales.

## Tipos de Investigaciones

### **Investigaciones Corporativas**
Son aquellas en las que se investiga un suceso interno en una corporación. Los sucesos que se investigan serán aquellos que violan las políticas corporativas.

**Ejemplos:**
- Visita a webs no permitidas durante la jornada laboral desde la red corporativa
- Filtración externa de información interna de la empresa
- Ataque de ransomware
- Uso no autorizado de recursos corporativos

### **Investigaciones Criminales**
Son aquellas que tienen lugar dentro del ámbito de un delito (civil o penal).

**Ejemplos:**
- Investigación de un asesinato
- Investigación de un fraude
- Investigación de distribución de pornografía infantil
- Ciberacoso o ciberdifamación

> **Importante:** Una investigación corporativa puede terminar en una investigación criminal. Por tanto, será necesario aplicar buenas estrategias en la adquisición de pruebas para que sean válidas en caso de llegar a un juicio.

**Dato relevante:** El 70% de los procedimientos judiciales en España incluyen alguna prueba digital.

[!NOTE]
**The digital forensics crisis in policing: What's going wrong?** | Computer Weekly

## Autorizaciones Necesarias

- **Investigación corporativa:** Es necesario recibir autorización de la corporación (principalmente departamentos de Recursos Humanos y Legales)
- **Investigación criminal:** Se necesita una orden judicial

En muchas investigaciones corporativas, después del análisis del incidente viene la parte de contención, solución y recuperación del sistema.

## Forense vs. Respuesta a Incidentes

**Forense:** Se centra en la obtención y preservación de pruebas para su uso en procesos legales.

**Respuesta a Incidentes:** Se centra en la contención, erradicación y recuperación del sistema afectado.

*Fuente: https://www.linkedin.com/posts/brettshavers_activity-7351662359028883457-tKTk*

## Objetivos de la Informática Forense

1. **Identificar, obtener y preservar la evidencia:** Reunir pruebas de delitos cibernéticos de forma sólida desde el punto de vista forense, utilizando herramientas y técnicas que resistan el escrutinio de un tribunal de justicia.

2. **Estimar el impacto potencial** de las actividades maliciosas en la víctima y evaluar la intención del autor.

3. **Minimizar la pérdida** en dinero, tiempo y daños en la reputación para la organización.

4. **Proteger a la organización** de incidentes similares en el futuro (muy relacionado con la respuesta a incidentes).

5. **Apoyar al procesamiento** del autor del incidente.

## Tipos de Delitos Cibernéticos

### **Interno**
El ataque/delito es realizado desde dentro de la red corporativa por un usuario (insider) que tiene acceso autorizado a la red corporativa. Pueden ser:
- Empleados actuales o antiguos
- Socios comerciales
- Subcontratas
- Proveedores o repartidores

### **Externo**
El ataque/delito es realizado por un agente externo a la organización y desde el exterior, tratando de obtener acceso a los recursos de la red. Estos atacantes usan:
- Agujeros de seguridad
- Vulnerabilidades
- Ingeniería social

## Ejemplos de Delitos Cibernéticos

### **Espionaje**
La espionaje corporativo es una amenaza fundamental para las organizaciones porque los competidores pueden lanzar productos similares al mercado, alterar los precios y, en general, perjudicar la posición de mercado de una organización objetivo.

### **Robo de Propiedad Intelectual**
Proceso de robar secretos comerciales, derechos de autor o derechos de patente de un activo o material que pertenece a particulares o entidades. Los bienes robados suelen entregarse a rivales o competidores.

### **Manipulación de Datos**
Actividad maliciosa en la que los atacantes modifican, cambian o alteran contenido digital valioso o datos confidenciales durante la transmisión, en lugar de robar directamente datos de la empresa.

### **Ataque Troyano**
Programa o fragmento de datos aparentemente inofensivo que contiene código malicioso o perjudicial, que posteriormente puede tomar control del equipo y causar daños.

### **Ataque de Inyección SQL**
Técnica que se emplea para explotar vulnerabilidades de entrada no saneadas para pasar comandos SQL a través de una aplicación web para su ejecución por parte de una base de datos.

### **Ataque de Fuerza Bruta**
Proceso de usar una herramienta de software o script para adivinar credenciales o contraseñas, o descubrir aplicaciones o páginas web ocultas mediante prueba y error.

### **Phishing/Spoofing**
Técnica en la que un atacante envía un correo electrónico o proporciona un enlace que afirma falsamente proceder de un sitio legítimo para obtener información personal o de la cuenta de un usuario.

### **Ataques de Escalada de Privilegios**
Los atacantes obtienen inicialmente acceso al sistema con privilegios bajos y después intentan obtener privilegios más altos para realizar actividades restringidas.

### **Ataque de Denegación de Servicio (DoS)**
Ataque a un ordenador o red que reduce, restringe o impide que los usuarios legítimos accedan a los recursos del sistema.

### **Ciberdifamación**
Actividad ofensiva en la que un ordenador o dispositivo conectado a la red se emplea como herramienta o fuente para dañar la reputación de una organización o individuo.

### **Ciberterrorismo**
Implica el uso de Internet o de recursos web para amenazar, intimidar o llevar a cabo actividades violentas con el fin de obtener ventaja ideológica o política sobre individuos o grupos.

### **Ciberguerra**
Libicki define la ciberguerra como el uso de sistemas de información contra las personas virtuales de individuos o grupos. Incluye el terrorismo informático, los ataques semánticos y la guerra simulada.

## Consecuencias para las Organizaciones

- **Pérdida en la confidencialidad, integridad y disponibilidad** de los datos almacenados
- **Robo de datos sensibles**
- **Interrupción de las actividades comerciales**
- **Pérdida de confianza de los clientes**
- **Daños a la reputación**
- **Enormes pérdidas financieras**
- **Multas por incumplimiento** de la normativa del país

## Enfoques de la Informática Forense

### **Investigación de Incidentes de Seguridad**
Análisis de incidentes relacionados con la ciberseguridad en un sistema, como puede ser:
- Robo de información
- Intrusión dentro de una red privada
- Ataques de denegación de servicio
- Ransomware

**Preguntas clave:**
- ¿Quién realizó el ataque?
- ¿Cuándo?
- ¿Cómo?
- ¿Qué vulnerabilidad explotó?
- ¿Qué hizo dentro del sistema?

### **Investigación de Delitos**
Análisis de dispositivos que pueden servir como prueba en delitos de sangre, secuestros, acoso, fraude financiera, etc.

**Preguntas clave:**
- ¿Dónde estaba en el momento del delito?
- ¿Existe información relevante en el dispositivo?
- ¿Qué conversas mantuvo?
- ¿Qué mensajes envió/recibió?

## Casos en los que la Informática Forense es Útil

- Casos de competencia desleal
- Fuga de información
- Incumplimiento de contrato
- Plagio
- Fraude financiero
- Investigación de seguros
- Acoso
- Homicidios
- Secuestros
- Pornografía infantil
- Ciberterrorismo

## Ramas de las Investigaciones Forenses Digitales

### **Forense de Sistemas u Ordenadores**
Comprende la obtención y análisis de evidencias físicas o lógicas en hardware, sistemas operativos, sistemas de archivos e información almacenada en:
- Servidores
- Equipos de sobremesa
- Portátiles

**Subramas:**
- **Forense Windows:** Como la mayoría de usuarios finales usan Windows, engloba el mayor número de análisis de forense
- **Forense en GNU/Linux:** Los servidores en la nube trabajan con GNU/Linux
- **Forense en MacOS:** Aumento de estos sistemas a nivel de usuario doméstico, con peculiaridades específicas a pesar de estar basado en UNIX

### **Forense de Redes**
Orientado a la monitorización y análisis de tráfico de redes con el objetivo de:
- Obtener información
- Adquirir pruebas digitales
- Detectar intrusiones en la red

**Características:** La información es volátil y dinámica
**Subramas:** Redes WiFi y redes cableadas

### **Forense de Dispositivos Móviles**
Comprende la obtención y análisis de evidencias físicas o lógicas en:
- Teléfonos móviles
- Agendas electrónicas
- E-books
- Tablets
- Wearables (smartwatches, pulseras de actividad)
- Dispositivos de localización (GPS de vehículos, portátiles)
- Drones

**Desafíos:**
- Espectro enorme de dispositivos hardware (Samsung, LG, Apple...)
- Variedad de sistemas operativos (Apple iOS, Android...) y versiones
- Necesidad de herramientas especializadas para extracción física y lógica

**Información que se puede obtener:**
- Agenda de contactos y su relación con el propietario
- Registro de llamadas
- Mensajes (correo electrónico, SMS, WhatsApp, Telegram...)
- Histórico de navegación web
- Interacciones en redes sociales
- Contenido multimedia
- Información de localización
- Recuperación de archivos borrados
- Logs internos
- Detección de malware

### **Forense de Dispositivos IoT**
Comprende la obtención de pruebas sobre dispositivos del Internet de las Cosas:
- Sistemas de video vigilancia
- Sensores
- Electrodomésticos inteligentes
- Wearables

### **Forense en la Nube (Cloud)**
Comprende la obtención de pruebas de servicios que están en la nube:
- Máquinas virtuales
- Contenedores
- Información almacenada en la nube
- Servicios PaaS (Platform as a Service)

**Ejemplos de información que se puede obtener:**
- Inicios de sesión en Office365
- Mensajes de Teams
- Correos electrónicos de Gmail
- Historial de localizaciones de Google
- Información de AWS, Azure, etc.
