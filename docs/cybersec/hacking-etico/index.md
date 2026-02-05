# Introducción al Hacking Ético

## 1. Origen y Evolución del Concepto "Hacker"

### 1.1 Etimología y Primeros Usos
- **Término "Hack"**: Originalmente significa "cortar" o "truco"
- **MIT años 50**: Se usó para referirse a formas elegantes, ingeniosas o inspiradoras de hacer cualquier cosa
- **Finales de los 60**: Nacen los primeros hackers motivados por la curiosidad y las ganas de aprender

### 1.2 Contexto Histórico
- Universidades con grandes ordenadores y redes interconectadas
- Líneas telefónicas lentas y caras
- Surgimiento de **phreakers** para telefonear gratis
- Formación de subcultura underground con seudónimos (nicknames)
- Muchos jóvenes detenidos y encarcelados por operaciones ilegales

### 1.3 Hackers Notables
**Kevin Mitnick**
- Considerado el pirata informático más buscado de su época
- Experto en ingeniería social
- Arrestado por última vez en 1995

**Loyd Blankenship (The Mentor)**
- Detenido en 1986
- Autor del **Manifiesto Hacker** (1986)
- Expone motivaciones éticas de los primeros hackers
- Frase icónica: *"Mi crimen es la curiosidad..."*

### 1.4 Evolución Actual
- Emergencia de ciberdelincuentes que estafan y engañan
- Objetivos: empresas de cualquier tamaño, organismos públicos, hospitales, estados
- **AEPD (Agencia Española de Protección de Datos)**: Establece obligaciones y sanciones millonarias

## 2. Principios de la Seguridad de la Información

### 2.1 Principios Fundamentales (CID)
- **Confidencialidad**: Garantiza que la información solo sea accesible a personas autorizadas
- **Integridad**: Protege contra alteraciones no autorizadas o accidentales
- **Disponibilidad**: Asegura acceso a la información por sistemas o usuarios autorizados

### 2.2 Principios Adicionales para Intercambio de Información
- **Autenticación**: Verifica la identidad del creador mediante:
  - Factores inherentes (biometría)
  - Algo que el usuario sabe (contraseñas, PIN)
  - Algo que el usuario tiene (tarjetas, teléfono, claves)
  - **MFA (Multiple Factor Authentication)**: Combinación de varios factores
- **No Repudio**: El emisor no puede negar el envío de información

## 3. Clasificación de Medidas de Seguridad

### 3.1 Por Función
- **Seguridad Activa**: Medidas preventivas (controles de acceso, cortafuegos, protocolos seguros)
- **Seguridad Pasiva**: Reparación o minimización de daños (copias de seguridad, RAID, SAID)

### 3.2 Por Objeto de Protección
- **Seguridad Física**: Protección del hardware
- **Seguridad Lógica**: Protección del software

## 4. Tipología de Hackers

### 4.1 Clasificación por "Sombreros"
- **Sombrero Blanco**: 
  - Mejora la seguridad
  - Notifica vulnerabilidades
  - Hacker ético profesional contratado
- **Sombrero Negro**: Ciberdelincuente (robo, extorsión)
- **Sombrero Gris**: Posición intermedia que incluye:
  - **Hacktivistas** (ej. Anonymous, WikiLeaks)
  - Falsos sombreros blancos con puertas traseras
  - Hackers que persiguen delitos específicos

### 4.2 Otros Términos Relacionados
- **Script Kiddies**: Personas sin conocimientos profundos que usan herramientas creadas por otros
- **Cracker**: Término de los 80 relacionado con romper licencias de software
- **Lamers/Wannabes**: Aprendices sin conocimientos suficientes

## 5. Marco Legal Español

### 5.1 Código Penal (Artículos 197-201)
- **Artículo 197bis.1**: Acceso no autorizado a sistemas de información (6 meses a 2 años de prisión)
- **Artículo 197bis.2**: Interceptación de transmisiones no públicas (3 meses a 2 años)
- **Artículo 197ter**: Producción o distribución de herramientas para cometer delitos anteriores

### 5.2 Importancia de la Autorización
- Contrato que establezca propósito y ámbito de actividad
- Cláusula de confidencialidad
- Definición clara de objetivos

## 6. Amenazas de Seguridad

### 6.1 Definición (MAGERIT)
Causa potencial de un incidente que puede dañar sistemas de información u organizaciones.

### 6.2 Clasificación de Amenazas
1. **Origen Natural**: Terremotos, inundaciones
2. **Entorno/Industrial**: Cortes eléctricos, contaminación
3. **Defectos de Aplicaciones**: Vulnerabilidades por errores de diseño
4. **Personas Accidentales**: Ingeniería social no intencional
5. **Personas Deliberadas**: Atacantes intencionados

### 6.3 Tipos de Intrusos
- **Cracker**: Comportamiento ilegal relacionado con licencias de software
- **Phreaker**: Manipulación de sistemas telefónicos
- **Spammer**: Envío masivo de correo no deseado
- **Insider**: Amenaza interna de la empresa
- **Ex-empleado**: Con conocimiento interno
- **State-Sponsored Hacker**: Apoyado por naciones o estados

## 7. Malware (Códigos Dañinos)

### 7.1 Definición y Propagación
Programas desarrollados para causar daño o pérdida de control, que se propagan mediante:
- Software pirata
- Aplicaciones de fuente no verificada
- Archivos comprimidos aparentemente legítimos
- Técnicas de **esteganografía**
- Malware **fileless/in-memory** (solo en ejecución)

### 7.2 Tipos de Malware
- **Exploit**: Aprovecha vulnerabilidades (payload = acción maliciosa)
- **Virus**: Se acopla a programas legítimos y se replica
- **Ransomware**: Encripta información y pide rescate
- **Spyware**: Recopila actividad del usuario
- **Adware**: Muestra anuncios no deseados
- **Troyano**: Se disfraza como funcional y abre puertas traseras
- **Rootkit**: Proporciona acceso remoto
- **Keylogger**: Registra pulsaciones de teclado
- **Gusano**: Se autopropaga por redes
- **Bacteria**: Se replica consumiendo memoria
- **Bomba Lógica**: Se activa bajo condiciones específicas
- **Cryptojacking**: Mina criptomonedas con recursos ajenos

## 8. Tipos de Ataques

### 8.1 Ataques a Contraseñas
- **Fuerza Bruta**: Prueba todas las combinaciones posibles
- **Diccionario**: Usa listas de contraseñas comunes
- **Protección**: MFA y gestores de contraseñas
- **Herramienta**: Have I been pwned? (verificación de cuentas comprometidas)

### 8.2 Ingeniería Social
Manipulación mediante engaño para acciones perjudiciales:
- **Fraude Online**: Venta falsa de productos
- **Phishing/Vishing/Smishing**: Suplantación por email, llamadas o SMS
- **Baiting**: Uso de cebos para descargas maliciosas
- **Shoulder Surfing**: Observación para obtener credenciales
- **Dumpster Diving**: Búsqueda en basura para información

### 8.3 Ataques a Conexiones
- **DDoS**: Colapso de servicios con múltiples peticiones (medido en Mrps)
- **MitM (Man-in-the-Middle)**: Interceptación y modificación de tráfico
- **Spoofing**: Suplantación de datos de conexión
- **Sniffing**: Escucha de conexiones no cifradas
- **Rogue AP**: Puntos de acceso WiFi falsos

### 8.4 Ataques a Cadena de Suministro
- Objetivo: Proveedores de servicios confiables
- Ejemplo: Hackeo de SolarWinds
- Protección: **Zero Trust Security** (confianza nula)

### 8.5 Ataques Invisibles en Código Fuente
- Caracteres Unicode invisibles que alteran lógica del programa
- Descubierto en 2021
- Aprovecha vulnerabilidades en compiladores

## 9. Vulnerabilidades

### 9.1 Definición y Tipos
Fallo de diseño que pone en riesgo seguridad:
- **Software**: No intencionadas generalmente, pero pueden incluir backdoors
- **Hardware**: Ejemplos: Meltdown, Spectre, Rowhammer
- **Zeroday**: Vulnerabilidades no reportadas o sin parche

### 9.2 Documentación (CVE)
- Formato: CVE-XXXX-YYYYY (año + código)
- Fuentes: MITRE, https://www.cve.org/
- **CVSS**: Sistema de puntuación de gravedad (0-10)
  - Baja: 0.0-3.9
  - Media: 4.0-6.9
  - Alta: 7.0-9.0
  - Crítica: 9.0-10.0
- **CWE**: Clasificación exhaustiva de vulnerabilidades

## 10. Test de Intrusión (Pentest)

### 10.1 Definición y Objetivos
Actuación legítima para vulnerar servicios y analizar seguridad, con:
- Contrato con objetivos y alcance definidos
- Cláusula de confidencialidad
- Informe final con problemas y soluciones

### 10.2 Tipos de Auditoría
**Por Conocimiento:**
- **Caja Negra**: Sin conocimiento interno
- **Caja Blanca**: Acceso total a información
- **Caja Gris**: Conocimiento parcial

**Por Posición:**
- **Perimetral**: Desde fuera de la organización
- **Interna**: Como empleado con pocos privilegios
- **Interna con Privilegios**: Con acceso a configuraciones

**Por Alcance:**
- Auditoría web
- Aplicaciones móviles
- Wireless y VoIP
- Pruebas de estrés DoS/DDoS

### 10.3 Fases del Pentest
1. **Reconocimiento (Footprinting)**: Información pública no intrusiva
2. **Enumeración (Fingerprinting)**: Interacción activa con el objetivo
3. **Explotación**: Diseño y ejecución de ataques
4. **Postexplotación**: Análisis interno y escalada de privilegios
5. **Documentación**: Informes ejecutivo y técnico

### 10.4 Contrato de Pentest
Debe incluir:
- Servicios auditados y límites de carga
- Duración y horario
- Permisos para ingeniería social
- Conocimiento del personal sobre el test
- Autorización para backdoors o exploits peligrosos

## 11. Metodologías de Pentesting

### 11.1 PTES (Penetration Testing Execution Standard)
7 fases:
1. Interacciones previas
2. Recopilación de inteligencia (3 niveles: L1, L2, L3)
3. Modelado de amenazas
4. Análisis de vulnerabilidades
5. Explotación
6. Postexplotación
7. Informe

### 11.2 OSSTMM (Open Source Security Testing Methodology Manual)
- Versión 3.0 (2010)
- Certificación STAR
- Medida RAV (exposición de seguridad)
- 5 canales de seguridad

### 11.3 OWASP
- **WSTG**: Auditoría de aplicaciones web
- **MASTG**: Seguridad en aplicaciones móviles
- **FSTM**: Seguridad de firmware

### 11.4 Otras Metodologías
- PTF (Penetration Testing Framework)
- NIST SP 800-115

## 12. Equipos de Seguridad

### 12.1 Tipos de Equipos
- **Red Team (Equipo Rojo)**: Seguridad ofensiva
- **Blue Team (Equipo Azul)**: Seguridad defensiva
- **Purple Team**: Colaboración entre rojo y azul

### 12.2 APT y MITRE Att&ck
- **APT (Advanced Persistent Threat)**: Amenazas avanzadas persistentes
- **Matriz MITRE Att&ck**: Tácticas, técnicas y procedimientos

## 13. Perfil del Hacker Ético

### 13.1 Conocimientos Requeridos
- Arquitectura de computadoras
- Redes y protocolos
- Administración de SO
- Gestión de bases de datos
- Lenguajes de programación
- Criptografía

### 13.2 Plataformas de Aprendizaje
**Retos:**
- Atenea (CCN-CERT)
- Academia Hacker (INCIBE)
- Una al mes (Hispasec)
- PicoCTF (Carnegie Mellon)

**Máquinas:**
- HackTheBox
- TryHackMe
- VulnHub
- Proving Grounds

### 13.3 Certificaciones
- OSCP (Offensive Security Certified Professional)
- Pentest+ (CompTIA)
- ECPPT
- HTB CPTS (HackTheBox)
- PNTPT (TCM Security)

### 13.4 Distribuciones de Pentesting
- Kali Linux (Offensive Security)
- ParrotOS (aliada con HackTheBox)
- BlackArch (basada en Arch Linux)
- CommandoVM

## 14. Actividad Práctica y Laboratorios

### 14.1 Lectura y Análisis
- Extracto del libro de Kevin Mitnick
- Relación con conceptos del tema

### 14.2 Laboratorios Prácticos
1. Instalación de Kali Linux
2. Introducción a CTF (Atenea)
3. Máquina DC-1 de VulnHub
4. Recorrido por fases del hacking ético
