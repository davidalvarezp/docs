# Fase de Reconocimiento y OSINT

## 1. Introducción a la Inteligencia

### 1.1 Definición y Propósito
- **Primera fase del pentesting**: Recopilación detallada de información para diseñar estrategias de ataque efectivas
- **Inteligencia vs. Información**: La inteligencia es información procesada, más útil y precisa
- **Proceso de intelligence gathering**: Transformación de datos en inteligencia aplicable

### 1.2 Tipos de Información Relevante
**Información Comercial y Legal:**
- Detalles de empleados, cargos, correos electrónicos
- Relaciones empresariales (proveedores, clientes)
- Tipos de proyectos y productos
- Marcas registradas y patentes

**Información Tecnológica:**
- Tipo de servicios web y gestores de contenido
- Servicios en la nube
- Metadatos de documentos
- Dominios registrados y en uso
- Rangos de IP de servicios
- Infraestructura de red interna

### 1.3 Niveles y Fuentes de Información
**Niveles Jerárquicos:**
- Datos → Información → Conocimiento → Inteligencia

**Fuentes de Información:**
- **OSINT**: Inteligencia de fuentes abiertas (principal enfoque)
- **HUMINT**: Inteligencia de fuentes humanas
- **SIGINT**: Inteligencia de señales

## 2. OSINT (Open Source Intelligence)

### 2.1 Definición y Alcance
- Búsqueda en fuentes públicas, no necesariamente gratuitas o digitales
- Incluye buscadores, registros mercantiles, catastro, archivos documentales
- Fuentes variadas: medios de comunicación, gubernamentales, conferencias, bibliotecas

### 2.2 Ciclo OSINT
1. **Requisitos**: Definición de necesidades y condiciones
2. **Identificación de fuentes**: Selección de las más adecuadas
3. **Adquisición**: Obtención de información
4. **Procesamiento**: Formateo para análisis
5. **Análisis**: Generación de inteligencia
6. **Presentación**: Exposición efectiva de resultados

### 2.3 Métodos de Búsqueda Principales
- Buscadores web (Google, Bing, especializados)
- Herramientas de búsqueda de personas
- Consulta de dominios
- Análisis de metadatos
- Redes sociales
- Archivos y repositorios

## 3. Redes Anónimas y Deep/Dark Web

### 3.1 Capas de Internet
- **Surface Web (4%)**: Accesible con motores de búsqueda tradicionales
- **Deep Web**: Contenido no indexable, requiere autorización
- **Dark Web**: Intencionalmente oculta, accesible con navegadores especiales

### 3.2 Darknets Principales
- **TOR (The Onion Router)**: Más popular, dominio .onion
- **I2P (The Invisible Internet Project)**
- **FreeNET**
- **ZeroNET**

### 3.3 VPN vs. Redes Anónimas
- **VPN**: Empresas privadas, posible registro de datos
- **Redes Anónimas**: Descentralizadas, mayor anonimato pero menor velocidad

### 3.4 Funcionamiento de TOR
- **Onion Routing**: Enrutamiento en capas con cifrado múltiple
- **Circuito de 3 nodos aleatorios**: Entry → Middle → Exit Relay
- **Ventaja**: Anonimato mediante cifrado asimétrico en capas
- **Desventaja**: Velocidad reducida

### 3.5 Herramientas Relacionadas
- **Tor Browser**: Niveles de seguridad (Standard, Safer, Safest)
- **Proxychains/Proxychains-ng**: Ofuscación de origen del tráfico
- **Android**: Orbot (proxy) + Orfox (navegador)

## 4. Motores de Búsqueda y Técnicas

### 4.1 Tipos de Buscadores
- **Generales**: Google, Bing, Yandex, DuckDuckGo
- **Específicos**: Wolfram Alpha
- **Tecnológicos**: Shodan, ZoomEye, Censys
- **Redes anónimas**: Ahmia, The Hidden Wiki, Onion Search

### 4.2 Crawlers y robots.txt
- **Crawlers**: Rastreadores que indexan contenido
- **robots.txt**: Archivo que indica páginas no indexables (cumplimiento voluntario)
- **Seguridad por oscuridad**: No recomendada como medida de seguridad

### 4.3 Google Dorks (Google Hacking)
**Operadores Principales:**
- `" "`: Búsqueda exacta
- `-`: Exclusión de palabras
- `site:`: Búsqueda en sitio específico
- `filetype:`: Búsqueda por tipo de archivo
- `inurl:`: Palabra en la URL
- `intext:`: Palabra en el texto
- `cache:`: Búsqueda en caché
- `ext:`: Extensión de archivo

**Herramientas Automatizadas:**
- Pagodo (Python) - ¡Precaución con bloqueos de IP!

### 4.4 Buscadores Tecnológicos (Shodan)
- **Propósito**: Indexación de servicios, no contenido
- **Funcionamiento**: Escaneo de puertos activos y análisis de banners
- **Información obtenida**: Software, versión, ubicación, ISP, SO
- **Alternativas**: Censys, ZoomEye, MrLooquer

### 4.5 Búsqueda Inversa
- **Imágenes**: TinEye, Google Images
- **Vídeos**: Verificación de contenido
- **Herramientas especializadas**: Berify (derechos de autor)

## 5. Reconocimiento Web

### 5.1 Descarga de Sitios Web
- **Herramienta principal**: `wget`
- **Propósito**: Análisis de estructura, comentarios HTML, metadatos
- `wget --mirror --convert-links --adjust-extension --page-requisites --no-parent [URL]`

### 5.2 Versiones Históricas
- **Wayback Machine** (archive.org): Copias desde 1996
- **Uso**: Identificación de información eliminada o cambios tecnológicos

### 5.3 Testigos Online
- **EGarante**: Certificación de contenido web, email y documentos
- **Save the Proof**: Incluye certificación de sesiones de navegación y tweets

## 6. Análisis de Archivos

### 6.1 Identificación de Formatos
- **Número mágico**: Valor único en cabecera (más fiable que extensión)
- **Comando `file`**: Identificación por número mágico en Linux
- **Editores hexadecimales**: `hexdump` para análisis de cabeceras

### 6.2 Metadatos
**Información contenida:**
- Autor, fechas de creación/modificación
- Software utilizado, versiones
- Coordenadas GPS (imágenes)
- Rutas locales, nombres de equipos

**Herramientas:**
- `exiftool`: Análisis exhaustivo de metadatos
- `metagoofil`: Búsqueda y descarga de archivos por dominio + análisis con exiftool

### 6.3 Búsqueda de Información Textual
**Archivos de texto:**
- `grep`: Búsqueda de patrones
- Opciones: `-i` (case-insensitive), `-r` (recursivo), `-e` (expresión regular)

**Archivos no textuales:**
- PDF: `pdftotext` para conversión
- Imágenes: OCR (Tesseract, EasyOCR)
- **Pixelado**: Técnica insegura, herramientas de recuperación (Depix, DepixHMM, Unredacter)

## 7. Información Personal

### 7.1 Correos Electrónicos
**Propósito**: Ataques de ingeniería social
**Herramientas:**
- Hunter.io: Servicio web especializado
- Infoga: Línea de comandos, usa buscadores y Shodan
- IKY (I Know You): Recopilación completa de información

### 7.2 Redes Sociales
**LinkedIn**: Currículos completos de empleados
**Herramientas:**
- Sherlock: Verificación de nicknames en múltiples redes
- Osintgram: Instagram OSINT
- Técnicas específicas para X/Twitter, Mastodon

### 7.3 Filtraciones de Información
**Sitios de referencia:**
- Have I been pwned?: Verificación de brechas
- Dehashed: Información extendida (requiere registro/pago)
- GhostProject: Servicio de pago

**Código fuente:**
- Repositorios: GitHub, GitLab (posibles fugas de credenciales)
- Herramientas: Gitleaks (automatización)
- Paste sites: Pastebin, AnonPaste

## 8. Frameworks OSINT

### 8.1 OSR Framework
- Open source, Python
- Módulos: usufy, mailfy, searchfy, phonefy, entify
- Verificación en cientos de plataformas

### 8.2 Recon-ng
- Framework completo en Python
- Reconocimiento pasivo mediante consultas web
- Gestión de proyectos con base de datos
- Generación de informes organizados

### 8.3 FOCA
- Desarrollado por ElevenPaths (Telefónica)
- Análisis de metadatos en documentos
- Descubrimiento de servidores y subdominios
- Limitación: Solo Windows, requiere SQL Server

### 8.4 Maltego
- Herramienta más potente del mercado
- Versiones: Community (gratuita) y comerciales
- Conceptos: Entidades y transformadas
- Representación gráfica de relaciones
- Compatibilidad con otras herramientas (FOCA)

## 9. Reconocimiento DNS

### 9.1 Sistema de Nombres de Dominio
**Propósitos principales:**
- Resolución de nombres (host → IP)
- Resolución inversa (IP → nombre)
- Localización de servidores de correo (MX)

**Jerarquía DNS:**
- TLD (Top Level Domains): .com, .es, .org, etc.
- ICANN: Administración de dominio raíz y TLD
- Operadores de registro: Gestión de TLD específicos

### 9.2 Tipos de Servidores DNS
- **Autoritativos**: Primarios/secundarios, conocen completamente su zona
- **Caché**: Mejoran tiempos de respuesta, sin autoridad
- **Forwarders**: Centralizan peticiones hacia Internet

### 9.3 Registros DNS Principales
- **A**: Host → IPv4
- **AAAA**: Host → IPv6
- **CNAME**: Alias para un host
- **MX**: Servidores de correo
- **NS**: Servidores de nombres autorizados
- **PTR**: IP → nombre (resolución inversa)
- **TXT**: Información adicional (SPF, DKIM)
- **SOA**: Información de la zona

### 9.4 DNSSEC
- Autenticación criptográfica de respuestas DNS
- Verificación de origen autorizado e integridad

## 10. Herramientas de Consulta DNS

### 10.1 WHOIS
**Propósito**: Consulta de información de registro de dominios
**Información obtenida:**
- Registrante y registrador
- Fechas de creación y expiración
- Servidores DNS
- Estado del dominio (protecciones)

**Herramientas:**
- Web: whois.net, who.is, lookup.icann.org
- Línea de comandos: `whois`
- Dominios .es: Página oficial de dominios.es

### 10.2 RIRs (Registros Regionales de Internet)
- **ARIN**: América del Norte
- **RIPE NCC**: Europa, Medio Oriente, Asia Central
- **APNIC**: Asia-Pacífico
- **LACNIC**: América Latina y Caribe
- **AFRINIC**: África

### 10.3 Herramientas de Línea de Comandos
**host:**
- `host [dominio]`: Resolución básica
- `host -t [tipo] [dominio]`: Consulta específica
- `host -a [dominio]`: Todos los registros

**nslookup:**
- Modo interactivo: `set type=[tipo]`
- Consultas específicas por tipo de registro

**dig:**
- `dig [dominio]`: Consulta completa
- `dig +short [dominio]`: Respuesta abreviada
- `dig @[servidor] [dominio]`: Servidor específico
- `dig +trace [dominio]`: Trazado de resolución
- `dig -x [IP]`: Búsqueda inversa

## 11. Técnicas Avanzadas de Reconocimiento DNS

### 11.1 Automatización con Scripts
**Herramientas en Kali:**
- `dnsenum`: Enumeración completa
- `dnsrecon`: Reconocimiento avanzado
- `fierce`: Búsqueda de subdominios
- `theHarvester`: Búsqueda de emails y hosts

### 11.2 Subdominios por Fuerza Bruta
- **DNS Brutting**: Consulta masiva de posibles subdominios
- **Herramientas**: `dnsmap`, `subbrute`
- **Diccionarios**: Específicos para subdominios

### 11.3 Subdominios mediante Certificados Digitales
- **Certificate Transparency**: Protocolo experimental
- **Herramienta**: `ct-exposer`
- **Ventaja**: Descubrimiento de subdominios ocultos

### 11.4 DNS Caché Snooping
- **Propósito**: Identificar sitios visitados por usuarios
- **Herramienta**: `dnsrecon -t snoop`
- **Aplicación**: Ingeniería social basada en hábitos

### 11.5 Transferencia de Zona
- **AXFR**: Transferencia completa de zona
- **Vulnerabilidad**: Configuración insegura de servidores
- **Dominio de prueba**: zonetransfer.me
- **Comando**: `dig axfr @[servidor] [dominio]`

### 11.6 Búsqueda Inversa de IPs
- **Propósito**: Identificar múltiples dominios en mismo hosting
- **Registro PTR**: Para resolución inversa
- **Aplicación**: Compromiso de servidor compartido

## 12. Herramientas Visuales y Web

### 12.1 Frameworks Automatizados
- **Sublist3r**: Python, múltiples fuentes OSINT
- **Spiderfoot**: Python, versión profesional disponible

### 12.2 Servicios Web
- **DomainTools**: Servicios avanzados (pago)
- **Robtex**: Información consolidada de IP, DNS, AS
- **Netcraft**: Protección empresarial, herramientas DNS
- **VirusTotal**: Detección de malware, sección de intelligence
- **DNSDumpster**: Consulta sencilla con mapa de relaciones

---

## Laboratorios y Actividades Prácticas

### Laboratorio 2: Implementación Práctica
1. **Instalación y configuración de herramientas anónimas**
2. **Uso de proxychains con TOR**
3. **Búsqueda con Google Dorks**
4. **Registro y uso de Shodan**
5. **Análisis de metadatos con metagoofil y exiftool**
6. **Búsqueda en archivos PDF e imágenes**
7. **Investigación en redes sociales**
8. **Uso de recon-ng**
9. **Análisis con FOCA**
10. **Automatización de búsqueda DNS**
11. **Transferencia de zona**
12. **Búsqueda inversa de IPs**
13. **Uso de Spiderfoot**

### Actividades Específicas
- Instalación y prueba del navegador TOR
- Acceso a The New York Times vía .onion
- Prueba de herramientas de recuperación de imágenes pixeladas
- Investigación de redes de la Xunta de Galicia mediante expresiones regulares
- Uso de sherlock con nombres de usuario personales
