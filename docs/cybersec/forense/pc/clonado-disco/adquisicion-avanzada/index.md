# Laboratorio Práctico: Adquisición Avanzada de Discos - Windows y GNU/Linux

## **Enunciado del Laboratorio**

### **Objetivo General**
Realizar adquisiciones forenses avanzadas de discos en diferentes escenarios, combinando técnicas de adquisición en modo Live, desde Windows, y acceso cruzado a evidencias entre sistemas operativos.

### **Contexto del Caso**
Acaban de entregarte un disco de una máquina sospeitosa Windows 11. El disco está en el cartafol del módulo.

**Importante:** Recuerda custodiar la prueba haciendo las mínimas modificaciones posibles.

### **Requisitos Previos**
- Disco de máquina sospechosa Windows 11
- Máquina virtual Windows 11 para laboratorio
- Distribución Live de GNU/Linux
- Herramientas: FTK Imager, Arsenal Recon Image Mounter
- Máquina Ubuntu Desktop del laboratorio anterior

---

## **Parte 1: Adquisición en Modo Live desde GNU/Linux**

### **1.1. Preparación del Entorno**

**A. Añadir dos discos de 100GB a la máquina Windows sospechosa:**

```bash
# En VirtualBox (host)
cd "~/VirtualBox VMs/Máquina sospeitosa Windows 11/"

# Crear discos de evidencia
vboxmanage createmedium disk --filename disco_evidencia1.vdi --size 102400 --format VDI
vboxmanage createmedium disk --filename disco_evidencia2.vdi --size 102400 --format VDI

# Conectar discos a la máquina Windows sospechosa
vboxmanage storageattach "Máquina sospeitosa Windows 11" \
    --storagectl "SATA Controller" \
    --port 1 \
    --device 0 \
    --type hdd \
    --medium disco_evidencia1.vdi

vboxmanage storageattach "Máquina sospeitosa Windows 11" \
    --storagectl "SATA Controller" \
    --port 2 \
    --device 0 \
    --type hdd \
    --medium disco_evidencia2.vdi

# Verificar configuración
vboxmanage showvminfo "Máquina sospeitosa Windows 11" | grep -A10 "Storage"
```

**B. Preparar imagen LIVE de GNU/Linux:**

```bash
# Opciones recomendadas:
# 1. Kali Linux Live: https://www.kali.org/get-kali/#kali-live
# 2. Caine Linux: https://www.caine-live.net/
# 3. Ubuntu Live: https://ubuntu.com/download/desktop

# Descargar Kali Linux Live (ejemplo)
wget https://cdimage.kali.org/kali-2023.4/kali-linux-2023.4-live-amd64.iso

# Configurar arranque desde Live ISO en VirtualBox
vboxmanage storageattach "Máquina sospeitosa Windows 11" \
    --storagectl "IDE Controller" \
    --port 0 \
    --device 0 \
    --type dvddrive \
    --medium kali-linux-2023.4-live-amd64.iso

# Establecer arranque desde DVD
vboxmanage modifyvm "Máquina sospeitosa Windows 11" --boot1 dvd --boot2 disk --boot3 none --boot4 none
```

### **1.2. Arranque en Modo Live y Configuración**

**A. Iniciar máquina desde Live ISO:**

1. Iniciar "Máquina sospeitosa Windows 11"
2. Seleccionar "Live boot" o "Try without installing"
3. Idioma: Español/Inglés
4. Teclado: Español

**B. Preparar entorno en Live:**

```bash
# Abrir terminal (Ctrl+Alt+T)

# 1. Identificar discos
sudo fdisk -l

# Resultado esperado:
# /dev/sda: Disco original Windows 11 (sospechoso) - ~128GB
# /dev/sdb: Disco evidencia 1 - 100GB
# /dev/sdc: Disco evidencia 2 - 100GB

# 2. Preparar disco de evidencia 1 para almacenar imagen
sudo parted /dev/sdb mklabel gpt
sudo parted /dev/sdb mkpart primary ext4 0% 100%
sudo mkfs.ext4 /dev/sdb1

# 3. Crear punto de montaje y montar
sudo mkdir -p /mnt/evidencias
sudo mount /dev/sdb1 /mnt/evidencias

# 4. Verificar espacio
df -h /mnt/evidencias
```

### **1.3. Adquisición en Formato RAW**

**A. Instalar herramientas forenses (en Kali ya están preinstaladas):**

```bash
# En otras distribuciones puede ser necesario:
sudo apt update
sudo apt install dc3dd hashdeep sleuthkit -y

# Verificar herramientas
dc3dd --version
```

**B. Realizar adquisición RAW del disco sospechoso:**

```bash
# Identificar disco Windows sospechoso (normalmente /dev/sda)
sudo fdisk -l /dev/sda

# Realizar adquisición con dc3dd
sudo dc3dd if=/dev/sda \
    of=/mnt/evidencias/CASOB-Evidencia01-MaquinaSospechosa-W11.raw \
    log=/mnt/evidencias/CASOB-Evidencia01.log \
    verb=on \
    hash=sha256 \
    hash=sha512 \
    hof=/mnt/evidencias/CASOB-Evidencia01.hashes

# Parámetros explicados:
# if=/dev/sda: Disco Windows sospechoso
# of=...: Imagen RAW de salida
# log=...: Registro detallado del proceso
# verb=on: Mostrar progreso
# hash=sha256/sha512: Calcular hashes durante copia
# hof=...: Archivo con hashes calculados
```

**C. Verificación del proceso:**

```bash
# 1. Verificar archivos creados
ls -lh /mnt/evidencias/CASOB-Evidencia01*

# 2. Verificar hashes
cat /mnt/evidencias/CASOB-Evidencia01.hashes

# 3. Comparar hash del dispositivo original
sudo dc3dd if=/dev/sda hash=sha256 verb=on | grep "input results for"

# 4. Documentar proceso
cat > /mnt/evidencias/CASOB-Evidencia01-metadata.txt << EOF
ADQUISICIÓN FORENSE - CASO B
============================
Fecha: $(date)
Sistema: Windows 11 sospechoso
Herramienta: dc3dd
Operador: $(whoami)
Dispositivo origen: /dev/sda
Imagen destino: CASOB-Evidencia01-MaquinaSospechosa-W11.raw

HASHES:
$(cat /mnt/evidencias/CASOB-Evidencia01.hashes)

TAMAÑO IMAGEN: $(du -h /mnt/evidencias/CASOB-Evidencia01-MaquinaSospechosa-W11.raw | cut -f1)
TIEMPO ADQUISICIÓN: Registrado en log
INTEGRIDAD: VERIFICADA

FIRMA: _________________________
EOF
```

### **1.4. Clonado Disco a Disco**

**A. Preparar segundo disco de evidencia:**

```bash
# 1. Limpiar disco evidencia 2
sudo dd if=/dev/zero of=/dev/sdc bs=1M count=100

# 2. Verificar que está vacío
sudo hexdump -C /dev/sdc | head -20

# 3. Realizar clonado disco a disco
sudo dc3dd if=/dev/sda of=/dev/sdc \
    log=/mnt/evidencias/CASOB-DiscoaDisco.log \
    verb=on \
    hash=sha256 \
    hashlog=/mnt/evidencias/CASOB-DiscoaDisco.hashes

# 4. Verificar progreso (mostrará porcentaje completo)
```

**B. Verificación del clonado:**

```bash
# 1. Calcular hashes del disco clonado
sudo dc3dd if=/dev/sdc hash=sha256 verb=on | grep "input results for" > /mnt/evidencias/CASOB-Clon-verificacion.txt

# 2. Comparar con hashes originales
echo "=== COMPARACIÓN HASHES ==="
echo "Disco original (/dev/sda):"
sudo sha256sum /dev/sda
echo ""
echo "Disco clonado (/dev/sdc):"
sudo sha256sum /dev/sdc
echo ""

# 3. Verificar si coinciden
if [ "$(sudo sha256sum /dev/sda | cut -d' ' -f1)" = "$(sudo sha256sum /dev/sdc | cut -d' ' -f1)" ]; then
    echo "✓ CLONADO EXITOSO: Hashes coinciden"
else
    echo "✗ ERROR: Hashes NO coinciden"
fi

# 4. Documentar resultados
cat > /mnt/evidencias/CASOB-Clonado-Conclusion.txt << EOF
CONCLUSIÓN CLONADO DISCO A DISCO
=================================
Fecha verificación: $(date)

HASH SHA-256 ORIGINAL (/dev/sda):
$(sudo sha256sum /dev/sda)

HASH SHA-256 CLON (/dev/sdc):
$(sudo sha256sum /dev/sdc)

RESULTADO: $([ "$(sudo sha256sum /dev/sda | cut -d' ' -f1)" = "$(sudo sha256sum /dev/sdc | cut -d' ' -f1)" ] && echo "COINCIDEN - Clonado exitoso" || echo "NO COINCIDEN - Error en clonado")

ANÁLISIS:
- Un clonado exitoso debe producir hashes idénticos
- Cualquier diferencia indica error en el proceso
- Hashes idénticos garantizan copia bit-a-bit exacta

FIRMA VERIFICADOR: _________________________
EOF
```

### **1.5. Ejercicios de Acceso - Problemas Encontrados**

**A. Intentar montar la imagen RAW:**

```bash
# 1. Intentar montar imagen RAW directamente
sudo mount -o ro /mnt/evidencias/CASOB-Evidencia01-MaquinaSospechosa-W11.raw /mnt/temp

# 2. Error esperado: "wrong fs type, bad option, bad superblock"

# 3. Intentar con loop device
sudo losetup -f -P -r /mnt/evidencias/CASOB-Evidencia01-MaquinaSospechosa-W11.raw
sudo losetup -a

# 4. Identificar particiones dentro del loop
sudo fdisk -l /dev/loop0

# 5. Intentar montar partición Windows (normalmente NTFS)
sudo mount -t ntfs-3g -o ro /dev/loop0p2 /mnt/temp 2>&1

# Documentar error encontrado
cat > /mnt/evidencias/CASOB-Problema-Montaje.txt << EOF
PROBLEMA ENCONTRADO AL MONTAR IMAGEN WINDOWS 11
===============================================
Fecha: $(date)

Comando ejecutado:
sudo mount -t ntfs-3g -o ro /dev/loop0p2 /mnt/temp

Error obtenido:
$(sudo mount -t ntfs-3g -o ro /dev/loop0p2 /mnt/temp 2>&1)

Posibles causas:
1. Sistema de archivos NTFS corrupto
2. BitLocker habilitado (cifrado de disco)
3. Problemas con driver ntfs-3g
4. Imagen dañada durante adquisición

Verificación adicional:
- Hash de imagen verificado: OK
- Tamaño de imagen correcto: OK
- Particiones detectadas: OK

Conclusión preliminar:
Es probable que el disco Windows 11 esté cifrado con BitLocker.
Se requiere clave de recuperación o contraseña para montar.

Acciones recomendadas:
1. Buscar clave de recuperación de BitLocker
2. Utilizar herramientas específicas para discos cifrados
3. Intentar montar desde Windows con credenciales adecuadas

FIRMA ANALISTA: _________________________
EOF
```

**B. Verificar cifrado BitLocker:**

```bash
# Instalar herramientas para detectar BitLocker
sudo apt install dislocker -y

# Intentar detectar BitLocker
sudo dislocker -V /dev/loop0p2

# Verificar si hay metadatos de BitLocker
sudo strings /dev/loop0p2 | grep -i "bitlocker\|fve" | head -10
```

---

## **Parte 2: Adquisición desde Windows con FTK Imager**

### **2.1. Preparación del Entorno Windows**

**A. Crear clon Windows 11 para laboratorio:**

```powershell
# En PowerShell con permisos de administrador

# 1. Importar módulo Hyper-V (si se usa)
Import-Module Hyper-V

# 2. Crear máquina virtual (ejemplo Hyper-V)
New-VM -Name "Windows 11 - LabForense" -MemoryStartupBytes 4GB -Generation 2 -SwitchName "Default Switch"

# 3. Crear disco del sistema
New-VHD -Path "C:\VMs\Windows11-LabForense\disk.vhdx" -SizeBytes 64GB -Dynamic

# 4. Conectar disco a VM
Add-VMHardDiskDrive -VMName "Windows 11 - LabForense" -Path "C:\VMs\Windows11-LabForense\disk.vhdx"

# 5. Instalar Windows 11 desde ISO
Set-VMDvdDrive -VMName "Windows 11 - LabForense" -Path "C:\ISOs\Windows11.iso"

# 6. Iniciar e instalar
Start-VM -Name "Windows 11 - LabForense"
```

**Para VirtualBox:**
```bash
# Clonar máquina Windows 11 existente
vboxmanage clonevm "Windows 11 Original" \
    --name "Windows 11 - LabForense" \
    --register \
    --mode all

# Configurar para laboratorio
vboxmanage modifyvm "Windows 11 - LabForense" \
    --memory 4096 \
    --cpus 2 \
    --vram 128
```

**B. Añadir disco de 100GB para evidencias:**

```bash
# En VirtualBox host
cd "~/VirtualBox VMs/Windows 11 - LabForense/"

# Crear disco de evidencias
vboxmanage createmedium disk \
    --filename disco_evidencias_windows.vdi \
    --size 102400 \
    --format VDI

# Conectar a la máquina
vboxmanage storageattach "Windows 11 - LabForense" \
    --storagectl "SATA Controller" \
    --port 1 \
    --device 0 \
    --type hdd \
    --medium disco_evidencias_windows.vdi
```

**C. Configurar dentro de Windows:**

1. Iniciar "Windows 11 - LabForense"
2. Abrir "Administración de discos" (Win + X → Administración de discos)
3. Inicializar nuevo disco (GPT)
4. Crear partición NTFS de 100GB
5. Asignar letra de unidad (ej: E:)

### **2.2. Instalación de FTK Imager**

**A. Descarga e instalación:**

```powershell
# Desde PowerShell en la máquina Windows Lab

# 1. Crear directorio para herramientas
mkdir C:\Tools\Forensic
cd C:\Tools\Forensic

# 2. Descargar FTK Imager (versión portable recomendada)
# Opción 1: Desde página oficial (requiere registro)
# Opción 2: Usar versión de evaluación

# 3. Ejemplo con wget (si está disponible)
wget https://downloads.accessdata.com/FTKImager/FTKImager_4.7.1.exe -OutFile FTKImager.exe

# 4. Instalar
.\FTKImager.exe /SILENT /NORESTART

# 5. Alternativa: Usar versión portable
wget https://example.com/FTKImagerPortable.zip -OutFile FTKImagerPortable.zip
Expand-Archive FTKImagerPortable.zip -DestinationPath C:\Tools\Forensic\FTKImager
```

**B. Verificar instalación:**

```powershell
# Comprobar que FTK Imager funciona
cd "C:\Program Files\AccessData\FTK Imager"
.\FTKImager.exe --help

# O abrir interfaz gráfica
Start-Process "C:\Program Files\AccessData\FTK Imager\FTKImager.exe"
```

### **2.3. Conectar Disco Sospechoso**

**A. En VirtualBox host:**

```bash
# 1. Desconectar disco de máquina sospechosa (si está conectado)
vboxmanage storageattach "Máquina sospeitosa Windows 11" \
    --storagectl "SATA Controller" \
    --port 0 \
    --device 0 \
    --type hdd \
    --medium none

# 2. Conectar a máquina Lab Forense
vboxmanage storageattach "Windows 11 - LabForense" \
    --storagectl "SATA Controller" \
    --port 2 \
    --device 0 \
    --type hdd \
    --medium "~/VirtualBox VMs/Máquina sospeitosa Windows 11/Windows11Sospechoso.vdi"

# 3. Verificar
vboxmanage showvminfo "Windows 11 - LabForense" | grep -A5 "Storage"
```

**B. Dentro de Windows Lab Forense:**

1. No hacer clic en notificaciones de nuevo hardware
2. Abrir "Administración de discos"
3. **No inicializar** el nuevo disco
4. Anotar número de disco (ej: Disco 2)

### **2.4. Adquisición con FTK Imager en Formato EnCase**

**A. Proceso paso a paso en FTK Imager:**

1. **Abrir FTK Imager** como Administrador

2. **Seleccionar origen:**
   - File → Create Disk Image
   - Seleccionar "Physical Drive"
   - Elegir disco sospechoso (normalmente PhysicalDrive1)
   - Click en "Finish"

3. **Configurar destino:**
   - Destination: "Image destination folder"
   - Ruta: `E:\CASOB\` (disco de evidencias)
   - Image Filename: `CASOB-Evidencia02-MaquinaSospechosa-W11`

4. **Configurar formato EnCase:**
   - Image Type: "EnCase Evidence File (L01)"
   - Compression: "Fast" (9 - mejor relación tiempo/compresión)
   - Segment Size: 650MB (compatible con FAT32 si es necesario)

5. **Información del caso:**
   - Case Number: CASOB
   - Evidence Number: 02
   - Unique Description: "Máquina sospechosa Windows 11 - Adquisición FTK Imager"
   - Examiner: Tu nombre
   - Notes: "Adquisición completa formato EnCase"

6. **Verificación:**
   - Marcar "Verify images after they are created"
   - Marcar "Create directory listings of all files in the image"

7. **Iniciar adquisición:**
   - Click en "Start"
   - Observar progreso
   - Tiempo estimado: 30-60 minutos para 128GB

**B. Comandos alternativos (línea de comandos):**

```powershell
# FTK Imager también tiene interfaz de línea de comandos
cd "C:\Program Files\AccessData\FTK Imager"

# Ejemplo de adquisición por CLI
.\FTKImager.exe --diskimage --source \\.\PhysicalDrive1 `
    --dest E:\CASOB\ `
    --filename CASOB-Evidencia02-MaquinaSospechosa-W11 `
    --encase --compress 9 `
    --frag 650 `
    --case CASOB --evid 02 `
    --desc "Máquina Windows 11 sospechosa" `
    --examiner "$env:USERNAME" `
    --verify
```

**C. Verificación post-adquisición:**

```powershell
# 1. Verificar archivos creados
dir E:\CASOB\CASOB-Evidencia02*

# Debería mostrar:
# CASOB-Evidencia02-MaquinaSospechosa-W11.E01
# CASOB-Evidencia02-MaquinaSospechosa-W11.E02
# ...
# CASOB-Evidencia02-MaquinaSospechosa-W11.txt (metadata)

# 2. Verificar metadata
type E:\CASOB\CASOB-Evidencia02-MaquinaSospechosa-W11.txt

# 3. Verificar hashes en el archivo de log
findstr "MD5\|SHA1" E:\CASOB\CASOB-Evidencia02-MaquinaSospechosa-W11.txt

# 4. Crear documento de verificación
@"
ADQUISICIÓN FTK IMAGER - CASO B
===============================
Fecha: $(Get-Date)
Herramienta: FTK Imager 4.7.1
Operador: $env:USERNAME
Disco origen: \\.\PhysicalDrive1
Formato: EnCase L01
Compresión: 9 (Fast)
Segmentación: 650MB

ARCHIVOS GENERADOS:
$(dir E:\CASOB\CASOB-Evidencia02* | ForEach-Object { "  $($_.Name) - $($_.Length/1MB) MB" })

VERIFICACIÓN: $(if (Test-Path "E:\CASOB\CASOB-Evidencia02-MaquinaSospechosa-W11.txt") {"COMPLETADA"} else {"PENDIENTE"})

HASHES:
$(findstr "MD5 hash\|SHA1 hash" E:\CASOB\CASOB-Evidencia02-MaquinaSospechosa-W11.txt)

FIRMA: _________________________
"@ | Out-File -FilePath "E:\CASOB\CASOB-Verificacion-FTK.txt" -Encoding UTF8
```

---

## **Parte 3: Acceso desde Windows a Evidencias Linux**

### **3.1. Conectar Disco de Evidencias Linux**

**A. En VirtualBox host:**

```bash
# 1. Identificar disco de evidencias de Ubuntu
cd "~/VirtualBox VMs/UbuDesk-Laboratorio Forense/"
ls -la *.vdi

# 2. Conectar a máquina Windows Lab
vboxmanage storageattach "Windows 11 - LabForense" \
    --storagectl "SATA Controller" \
    --port 3 \
    --device 0 \
    --type hdd \
    --medium disco_evidencias.vdi

# 3. Alternativa: Conectar solo la imagen específica
vboxmanage createmedium disk \
    --filename "evidencia_linux.vdi" \
    --format VDI \
    --variant Fixed \
    --property location="/media/disco-evidencias/CasoA/CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd"
```

**B. Preparar disco en Windows:**

1. Iniciar "Windows 11 - LabForense"
2. Abrir "Administración de discos"
3. El disco Linux aparecerá como "No inicializado"
4. **No inicializar** - vamos a acceder mediante FTK Imager

### **3.2. Acceso a Imágenes RAW Linux con FTK Imager**

**A. Abrir imagen RAW (dd):**

1. **Abrir FTK Imager**

2. **Cargar imagen RAW:**
   - File → Add Evidence Item
   - Seleccionar "Image File"
   - Navegar a la ubicación del disco conectado
   - Seleccionar `CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd`
   - Click en "Finish"

3. **Configurar tipo de imagen:**
   - Si FTK no detecta automáticamente:
   - Select Image Type: "Raw (dd)"
   - Si pregunta por offset: 0 (cero)

4. **Explorar contenido:**
   - En el panel izquierdo, expandir la imagen
   - Ver particiones detectadas
   - Navegar por sistema de archivos ext4

5. **Extraer archivos específicos:**
   - Buscar archivos creados en el ejercicio anterior:
     - `/home/usuario_sospechoso/proyecto_confidencial.txt`
     - `/home/usuario_sospechoso/.bash_history`
   - Click derecho → Export Files

**B. Verificar acceso:**

```powershell
# Script para verificar acceso a imágenes Linux
$imagenes = @(
    "CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd",
    "CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd"
)

foreach ($img in $imagenes) {
    Write-Host "=== Verificando: $img ==="
    
    if (Test-Path "G:\$img") {
        $size = (Get-Item "G:\$img").Length / 1GB
        Write-Host "  Encontrada - Tamaño: $size GB"
        
        # Intentar obtener información básica
        Write-Host "  Probando acceso con FTK Imager CLI..."
        & "C:\Program Files\AccessData\FTK Imager\FTKImager.exe" --info "G:\$img" 2>&1 | Select-String -Pattern "Partition\|Filesystem"
    } else {
        Write-Host "  NO ENCONTRADA"
    }
    Write-Host ""
}
```

### **3.3. Acceso a Imágenes EnCase Linux**

**A. Abrir imagen E01 de Linux:**

1. **En FTK Imager:**
   - File → Add Evidence Item
   - Seleccionar "Image File"
   - Navegar a `CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01`
   - FTK detectará automáticamente formato EnCase

2. **Explorar diferencias vs RAW:**
   - Comparar velocidad de acceso
   - Ver metadatos incluidos
   - Comprobar compresión

3. **Extraer y comparar archivos:**
   - Exportar mismos archivos que en RAW
   - Comparar hashes
   - Verificar integridad

**B. Documentar proceso:**

```powershell
# Crear informe de acceso
@"
INFORME ACCESO EVIDENCIAS LINUX DESDE WINDOWS
=============================================
Fecha: $(Get-Date)
Sistema: Windows 11 - LabForense
Herramienta: FTK Imager 4.7.1

1. IMÁGENES RAW (dd):
$(foreach ($img in @("Evidencia01", "Evidencia02")) {
    $path = "G:\CasoA-$img-Maquina-Sospeitosa-Linux.dd"
    if (Test-Path $path) {
        $size = (Get-Item $path).Length / 1GB
        "   - $img.dd: ACCESIBLE ($size GB)"
    } else {
        "   - $img.dd: NO ACCESIBLE"
    }
})

2. IMAGEN ENCASE (E01):
$(if (Test-Path "G:\CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01") {
    $size = (Get-ChildItem "G:\CasoA-Evidencia04*" | Measure-Object Length -Sum).Sum / 1GB
    "   - Evidencia04.E01: ACCESIBLE ($size GB comprimido)"
    "   - Segmentos: $(@(Get-ChildItem "G:\CasoA-Evidencia04*.E*").Count)"
} else {
    "   - Evidencia04.E01: NO ACCESIBLE"
})

3. OBSERVACIONES:
   - FTK Imager maneja bien ambos formatos
   - Formato E01 ofrece mejor compresión
   - RAW permite acceso más directo
   - Ambos mantienen integridad forense

4. ARCHIVOS VERIFICADOS (extraídos de ambas):
$(foreach ($file in @("proyecto_confidencial.txt", ".bash_history")) {
    "   - /home/usuario_sospechoso/$file: EXTRACTO Y VERIFICADO"
})

FIRMA ANALISTA: _________________________
"@ | Out-File -FilePath "G:\CasoA\Informe-Acceso-Windows.txt" -Encoding UTF8
```

---

## **Parte 4: Acceso Complejo - Imágenes EnCase Windows**

### **4.1. Acceso con Arsenal Recon Image Mounter**

**A. Instalación de Arsenal Recon Image Mounter:**

```powershell
# 1. Descargar desde https://arsenalrecon.com/downloads/
# 2. Instalar con permisos de administrador

# 3. Verificar instalación
Get-Service | Where-Object {$_.Name -like "*Arsenal*"}

# 4. Alternativa línea de comandos
cd "C:\Program Files\Arsenal Recon\Image Mounter"
.\armount.exe --help
```

**B. Montar imagen EnCase Windows:**

1. **Abrir Arsenal Image Mounter**

2. **Montar imagen:**
   - Click en "Mount Image"
   - Seleccionar `E:\CASOB\CASOB-Evidencia02-MaquinaSospechosa-W11.E01`
   - Opciones:
     - Read-only: Sí
     - Use write cache: No
     - Drive letter: Automático
   - Click en "Mount"

3. **Acceder a unidad montada:**
   - Abrir "Este equipo"
   - Nueva unidad aparecerá (ej: F:)
   - Intentar acceder a archivos

4. **Problema esperado:**
   - Unidad mostrará como "Acceso denegado"
   - BitLocker solicitará clave de recuperación

**C. Documentar problema:**

```powershell
# Registrar error de acceso
@"
ERROR ACCESO IMAGEN WINDOWS 11 ENCASE
=====================================
Fecha intento: $(Get-Date)
Imagen: CASOB-Evidencia02-MaquinaSospechosa-W11.E01
Herramienta: Arsenal Recon Image Mounter 1.6

RESULTADO: ACCESO DENEGADO

MENSAJE SISTEMA:
- "F:\ no es accesible. Acceso denegado."
- "Unidad cifrada con BitLocker"

ANÁLISIS:
1. La imagen se montó correctamente
2. El sistema detecta cifrado BitLocker
3. Se requiere clave de recuperación o contraseña

PASOS SIGUIENTES:
1. Buscar clave de recuperación de BitLocker
2. Intentar con diferentes métodos de montaje
3. Considerar herramientas de análisis sin montar

EVIDENCIA DE CIFRADO:
- Presencia de metadatos BitLocker en imagen
- Comportamiento típico de Windows 11 con cifrado activado

FIRMA: _________________________
"@ | Out-File -FilePath "E:\CASOB\Error-Acceso-BitLocker.txt" -Encoding UTF8
```

### **4.2. Investigación: Clave de Recuperación BitLocker**

**A. Lugares donde buscar clave:**

1. **Cuenta Microsoft del usuario:**
   - https://account.microsoft.com/devices/recoverykey
   - Iniciar sesión con credenciales del usuario sospechoso

2. **Archivo de texto/PDF guardado:**
   - Buscar en documentos del usuario
   - Buscar en correo electrónico
   - Buscar en nube (OneDrive, Google Drive)

3. **Active Directory (en entornos corporativos):**
   - Consultar con administrador de sistemas
   - Buscar en atributos del objeto equipo

4. **Backup de sistema:**
   - Copias de seguridad locales
   - Unidades USB de respaldo

**B. Comandos para detectar BitLocker:**

```powershell
# 1. Verificar estado BitLocker en imagen montada
manage-bde -status F:

# 2. Buscar archivos de recuperación en imagen
# Primero necesitamos explorar la imagen sin montar

# 3. Usar strings para buscar patrones
cd "C:\Program Files\AccessData\FTK Imager"
.\FTKImager.exe --exportstrings "E:\CASOB\CASOB-Evidencia02-MaquinaSospechosa-W11.E01" "E:\CASOB\strings.txt"

# 4. Buscar posibles claves en strings
Select-String -Path "E:\CASOB\strings.txt" -Pattern "[0-9]{6}-[0-9]{6}-[0-9]{6}-[0-9]{6}-[0-9]{6}-[0-9]{6}-[0-9]{6}-[0-9]{6}" | Out-File "E:\CASOB\posibles-claves.txt"

# 5. Buscar documentos con "bitlocker" o "recovery"
Select-String -Path "E:\CASOB\strings.txt" -Pattern "bitlocker|recovery|recuperación" -CaseSensitive:$false | Out-File "E:\CASOB\referencias-bitlocker.txt"
```

**C. Plantilla para hablar con el profesor:**

```powershell
# Crear informe para discusión con profesor
@"
INFORME INVESTIGACIÓN BITLOCKER - CASO B
========================================
ESTUDIANTE: [Tu Nombre]
FECHA: $(Get-Date)
CASO: Máquina sospechosa Windows 11

1. SITUACIÓN ACTUAL:
   - Imagen EnCase adquirida exitosamente
   - Intento de montaje con Arsenal Image Mounter
   - Error: "Acceso denegado" - BitLocker detectado

2. INVESTIGACIÓN REALIZADA:
   a) Búsqueda de clave en strings de la imagen
      - Resultado: $(if (Test-Path "E:\CASOB\posibles-claves.txt") {"Patrones encontrados"} else {"No encontrados"})
   
   b) Análisis de referencias a BitLocker
      - Resultado: $(if (Test-Path "E:\CASOB\referencias-bitlocker.txt") {"Referencias encontradas"} else {"No encontradas"})
   
   c) Verificación estado cifrado
      - Herramienta: manage-bde
      - Resultado: Necesita montaje completo

3. HIPÓTESIS:
   - Windows 11 tenía BitLocker activado por defecto
   - La clave puede estar en:
     * Cuenta Microsoft del usuario
     * Documentos guardados en la máquina
     * Correo electrónico del usuario
     * Active Directory (si era equipo corporativo)

4. PREGUNTAS PARA EL PROFESOR:
   1. ¿Tenemos acceso a credenciales del usuario para buscar en su cuenta Microsoft?
   2. ¿Hay información sobre políticas de backup de claves en la organización?
   3. ¿Podemos intentar recuperación por fuerza bruta? (tiempo/recursos)
   4. ¿Existen herramientas especializadas para análisis de discos BitLocker sin clave?

5. RECOMENDACIONES:
   - Priorizar búsqueda de clave en documentos del usuario
   - Considerar análisis de memoria RAM si disponible
   - Explorar opciones de elusión (si aplicable legalmente)
   - Documentar todos los intentos para cadena de custodia

6. EVIDENCIAS ADJUNTAS:
   [ ] Error-Acceso-BitLocker.txt
   [ ] posibles-claves.txt (si existe)
   [ ] referencias-bitlocker.txt (si existe)
   [ ] Logs de FTK Imager

FIRMA ESTUDIANTE: _________________________
"@ | Out-File -FilePath "E:\CASOB\Consulta-Profesor-BitLocker.txt" -Encoding UTF8

# Mostrar en pantalla
Get-Content "E:\CASOB\Consulta-Profesor-BitLocker.txt"
```

---

## **Parte 5: Acceso desde Ubuntu Desktop a Imágenes EnCase**

### **5.1. Preparar Entorno Ubuntu**

**A. Conectar disco con evidencias:**

```bash
# En VirtualBox host
# Conectar disco de evidencias a máquina Ubuntu

vboxmanage storageattach "UbuDesk-Laboratorio Forense" \
    --storagectl "SATA Controller" \
    --port 2 \
    --device 0 \
    --type hdd \
    --medium "disco_evidencias_windows.vdi"  # El que usamos en Windows
```

**B. En Ubuntu Desktop:**

```bash
# 1. Identificar disco nuevo
sudo fdisk -l

# 2. Montar disco Windows (NTFS)
sudo mkdir -p /mnt/evidencias_windows
sudo mount -t ntfs-3g -o ro /dev/sdb1 /mnt/evidencias_windows

# 3. Verificar contenido
ls -la /mnt/evidencias_windows/CASOB/
```

### **5.2. Acceso a Imagen EnCase Linux desde Ubuntu**

**A. Instalar herramientas para formato E01:**

```bash
# 1. Instalar ewf-tools para manejar formato EnCase
sudo apt update
sudo apt install ewf-tools -y

# 2. Verificar instalación
ewfinfo --version
```

**B. Analizar imagen E01 de Linux:**

```bash
# 1. Verificar imagen E01
cd /mnt/evidencias_windows/CASOB/
ewfinfo CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01

# 2. Montar imagen E01
sudo mkdir -p /mnt/ecase_linux

# Crear dispositivo loop para E01
sudo losetup -f -P -r CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01
sudo losetup -a  # Anotar dispositivo loop (ej: /dev/loop1)

# 3. Montar partición
sudo mount -o ro /dev/loop1p1 /mnt/ecase_linux

# 4. Explorar
ls -la /mnt/ecase_linux/
cd /mnt/ecase_linux/home/usuario_sospechoso/
cat proyecto_confidencial.txt
cat .bash_history
```

**C. Comparar con imagen RAW original:**

```bash
# 1. Montar también imagen RAW para comparar
sudo mkdir -p /mnt/raw_linux
sudo mount -o ro,loop /mnt/evidencias_windows/CasoA/CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd /mnt/raw_linux

# 2. Comparar hashes de archivos específicos
echo "=== COMPARACIÓN RAW vs E01 ==="
echo ""
echo "Archivo: proyecto_confidencial.txt"
echo "RAW:"
sha256sum /mnt/raw_linux/home/usuario_sospechoso/proyecto_confidencial.txt
echo "E01:"
sha256sum /mnt/ecase_linux/home/usuario_sospechoso/proyecto_confidencial.txt
echo ""

echo "Archivo: .bash_history"
echo "RAW:"
sha256sum /mnt/raw_linux/home/usuario_sospechoso/.bash_history
echo "E01:"
sha256sum /mnt/ecase_linux/home/usuario_sospechoso/.bash_history
```

**D. Documentar proceso:**

```bash
# Crear informe de acceso desde Ubuntu
cat > /mnt/evidencias_windows/CASOB/Informe-Acceso-Ubuntu.txt << EOF
INFORME ACCESO E01 DESDE UBUNTU
===============================
Fecha: $(date)
Sistema: UbuDesk - Lab Forense
Herramientas: ewf-tools, mount

1. IMAGEN ANALIZADA:
   - Nombre: CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01
   - Formato: EnCase E01
   - Origen: Disco de evidencias Windows

2. PROCESO:
   a) Montaje E01:
      - Comando: losetup + mount
      - Dispositivo: /dev/loop1
      - Punto montaje: /mnt/ecase_linux
   
   b) Verificación integridad:
      - ewfinfo: OK
      - Acceso archivos: OK
   
   c) Comparación con RAW:
      - Hashes archivos: COINCIDEN
      - Estructura: IDÉNTICA

3. ARCHIVOS VERIFICADOS:
   - /home/usuario_sospechoso/proyecto_confidencial.txt
     Hash RAW: $(sha256sum /mnt/raw_linux/home/usuario_sospechoso/proyecto_confidencial.txt | cut -d' ' -f1)
     Hash E01: $(sha256sum /mnt/ecase_linux/home/usuario_sospechoso/proyecto_confidencial.txt | cut -d' ' -f1)
     Resultado: $(if [ "$(sha256sum /mnt/raw_linux/home/usuario_sospechoso/proyecto_confidencial.txt | cut -d' ' -f1)" = "$(sha256sum /mnt/ecase_linux/home/usuario_sospechoso/proyecto_confidencial.txt | cut -d' ' -f1)" ]; then echo "COINCIDE ✓"; else echo "DIFIERE ✗"; fi)
   
   - /home/usuario_sospechoso/.bash_history
     Hash RAW: $(sha256sum /mnt/raw_linux/home/usuario_sospechoso/.bash_history | cut -d' ' -f1)
     Hash E01: $(sha256sum /mnt/ecase_linux/home/usuario_sospechoso/.bash_history | cut -d' ' -f1)
     Resultado: $(if [ "$(sha256sum /mnt/raw_linux/home/usuario_sospechoso/.bash_history | cut -d' ' -f1)" = "$(sha256sum /mnt/ecase_linux/home/usuario_sospechoso/.bash_history | cut -d' ' -f1)" ]; then echo "COINCIDE ✓"; else echo "DIFIERE ✗"; fi)

4. CONCLUSIONES:
   - Formato E01 accesible desde GNU/Linux con ewf-tools
   - Integridad verificada mediante hashes
   - Compresión funciona correctamente
   - Metadatos EnCase preservados

5. LIMITACIONES:
   - ewf-tools solo línea de comandos
   - Necesario proceso manual de montaje
   - Menos integrado que en Windows

FIRMA ANALISTA: _________________________
EOF

# Mostrar informe
cat /mnt/evidencias_windows/CASOB/Informe-Acceso-Ubuntu.txt
```

### **5.3. Limpieza y Desmontaje**

```bash
# 1. Desmontar todo
sudo umount /mnt/ecase_linux
sudo umount /mnt/raw_linux
sudo umount /mnt/evidencias_windows

# 2. Liberar dispositivos loop
sudo losetup -d /dev/loop1
sudo losetup -a  # Verificar que estén liberados

# 3. Eliminar puntos de montaje
sudo rmdir /mnt/ecase_linux /mnt/raw_linux /mnt/evidencias_windows
```

---

## **Solución de Problemas y Preguntas Frecuentes**

### **Problema 1: ewf-tools no reconoce imagen E01**
```bash
# Verificar que la imagen no esté corrupta
ewfverify CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01

# Si falla, intentar reparar
ewfacquire -t raw -f files -u -i CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01 -o imagen_reparada.dd
```

### **Problema 2: BitLocker en Ubuntu**
```bash
# Instalar herramientas para BitLocker
sudo apt install dislocker -y

# Intentar montar disco BitLocker (si tenemos clave)
sudo mkdir /mnt/bitlocker /mnt/bitlocker_mount
sudo dislocker -V /dev/sda2 -p123456-123456-123456-123456-123456-123456-123456-123456 -- /mnt/bitlocker
sudo mount -o loop /mnt/bitlocker/dislocker-file /mnt/bitlocker_mount
```

### **Problema 3: FTK Imager no detecta disco físico**
```powershell
# Ejecutar como Administrador
# Verificar permisos
Get-Disk | Format-List Number, Size, OperationalStatus

# Si el disco no aparece, verificar en Administración de discos
diskmgmt.msc

# Forzar rescan
Rescan-Disk
```

### **Problema 4: Arsenal Image Mounter no monta E01**
```powershell
# Verificar que el servicio esté corriendo
Get-Service ArsenalImageMounter

# Reiniciar servicio
Restart-Service ArsenalImageMounter

# Alternativa: Usar FTK Imager para montar
cd "C:\Program Files\AccessData\FTK Imager"
.\FTKImager.exe /m /e01 "E:\CASOB\CASOB-Evidencia02-MaquinaSospechosa-W11.E01"
```

---

## **Evaluación del Laboratorio**

### **Rúbrica de Evaluación**

| **Criterio** | **Puntos** | **Evidencia Requerida** |
|--------------|------------|------------------------|
| Adquisición RAW en modo Live | 15 | Imagen .raw + hashes verificados |
| Clonado disco a disco | 10 | Hashes coincidentes documentados |
| Adquisición EnCase desde Windows | 20 | Archivos .E01 + metadata |
| Acceso a imágenes RAW Linux desde Windows | 15 | Captura FTK Imager mostrando contenido |
| Acceso a imágenes E01 Linux desde Windows | 10 | Captura FTK Imager mostrando E01 |
| Investigación clave BitLocker | 10 | Documento consulta profesor |
| Acceso E01 Linux desde Ubuntu | 10 | Hashes comparativos RAW vs E01 |
| Documentación completa | 10 | Informes generados en cada parte |

### **Puntos Extra:**
- Automatización con scripts: +5
- Solución creativa a problema BitLocker: +5
- Comparativa detallada formatos: +5

**Total máximo:** 100 puntos + 15 extra

---

## **Conclusión y Aprendizajes**

Este laboratorio avanzado ha cubierto:

1. **Adquisición multiplataforma:** Live Linux, Windows nativo
2. **Formatos diversos:** RAW, EnCase, disco a disco
3. **Acceso cruzado:** Windows → Linux, Linux → Windows
4. **Problemas reales:** BitLocker, sistemas de archivos diferentes
5. **Herramientas profesionales:** FTK Imager, Arsenal Recon, ewf-tools

**Aprendizajes clave:**
- La elección de formato depende del caso y herramientas disponibles
- BitLocker es un desafío común en forense Windows moderno
- La interoperabilidad entre sistemas requiere conocimiento de herramientas específicas
- La documentación es crucial para la cadena de custodia

**Para investigación adicional:**
1. Técnicas de elusión de BitLocker (legalmente aplicables)
2. Análisis de memoria para recuperación de claves
3. Herramientas de análisis sin montaje (strings, carving)
4. Automatización completa del proceso forense
