# Fontes de almacenamento en Proxmox VE

Proxmox VE permítenos usar diferentes **fontes de almacenamento** para aloxar o contido das **máquinas virtuais** e os discos dos **contedores**, e calquera disco adicional.

Cada tipo de almacenamento que se configure no clúster ten diferentes características.

## Tipos de almacenamento

Hai dous tipos de almacenamento que se poden configurar:

* **Sistemas de ficheiros**: estes permítennos acceder a un sistema de ficheiros.

* **Dispositivos de bloque**: este proporciona dispositivos de bloque, que posteriormente podemos formatar e usar. Un dispositivo de bloque é un dispositivo en bruto que se ofrece á máquina virtual para que o xestione completamente. Na máquina virtual, aparecerá coma un disco duro dispoñible para particionar, formatar, etc.

## Almacenamento compartido

Algunhas das fontes de almacenamento que podemos usar teñen a capacidade de compartir información entre diferentes nodos do clúster Proxmox VE.

Este tipo de almacenamento é moi **recomendable nun clúster de servidores Proxmox**. Se usamos este tipo de almacenamento, teremos acceso á funcionalidade de **migración en vivo para máquinas virtuais e contedores**, xa que o contido do disco compartirase entre os diferentes nodos do clúster. Sen esta funcionalidade, a migración de máquinas entre diferentes nodos do clúster requirirá copia-la imaxe do disco entre os nodos.


## Instantáneas (*snapshots*)

Algunhas fontes de almacenamento teñen a capacidade de tomar instantáneas. Isto permítenos garda-lo estado dun disco nun momento específico e, se é necesario, podemos volver a ese estado máis tarde, en calquera intre.

## Aprovisionamento lixeiro ou dinámico

Esta é a capacidade de definir un espazo de almacenamento que non ocupe dende o primeiro instante todo o espazo asignado ó mesmo, senón que vaia medrando a medida que se fai uso do mesmo. O rendemento é menor pero aforra moito espazo no almacenamento.

Tódalas fontes de almacenamento que permiten tomar instantáneas tamén ofrecen funcionalidade de aprovisionamento lixeiro. Se usamos esta funcionalidade, a información almacenada no almacenamento dunha máquina virtual consistirá nunha imaxe base e só se gardarán os cambios que se produzan nesa máquina.

Por exemplo, podemos crear unha máquina virtual cun disco duro de 32 GB e, despois de instala-lo sistema operativo convidado, o sistema de ficheiros raíz da máquina virtual contén 3 GB de datos. Nese caso, só se escriben 3 GB no almacenamento, aínda que a máquina virtual vexa un disco duro de 32 GB.

Deste xeito, teremos un aforro significativo no espazo de almacenamento e, sobre todo, o almacenamento realmente usado polas máquinas virtuais será o espazo usado por Proxmox; non hai reserva de almacenamento previa.

Resumo dos tipos de fontes de almacenamento descritos en [https://pve.proxmox.com/wiki/Storage](https://pve.proxmox.com/wiki/Storage):

| Nome | Tipo de almacenamento | Compartido | Instantáneas / aprovisionamento lixeiro |
|------|-----------------------|------------|-----------------------------------------|
| ZFS (local)* | sistema de ficheiros / dispositivo de bloques | No | Si |
| Directory | sistema de ficheiros | No | Si |
| BTRFS | sistema de ficheiros | No | Si |
| NFS | sistema de ficheiros | Si | Si |
| CIFS | sistema de ficheiros | Si | Si |
| Proxmox Backup | sistema de ficheiros / dispositivo de bloques | Si | n/a |
| CephFS | sistema de ficheiros | Si | Si |
| LVM | dispositivo de bloques | No | Si |
| LVM-thin | dispositivo de bloques | No | Si |
| iSCSI/kernel | dispositivo de bloques | Si | No |
| iSCSI/libiscsi | dispositivo de bloques | Si | No |
| Ceph/RBD | dispositivo de bloques | Si | Si |
| ZFS over iSCSI | dispositivo de bloques | Si | Si |

* *Con ZFS, as imaxes de disco para máquinas virtuais almacénanse en volumes ZFS (zvol), que proporcionan funcionalidade de dispositivo de bloques.*


## Cada fonte de almacenamento pode almacenar diferentes tipos de información

- **Imaxe de disco**: imaxes de disco para máquinas virtuais.
- **Contedores**: sistemas de ficheiros para contedores Linux.
- **Imaxe ISO**: imaxes ISO.
- **Modelo de contedor**: modelos de contedores.
- **Ficheiros de copia de seguridade VZDump**: ficheiros de copia de seguridade.
- ...

## Creación de almacenamento de tipo *Directory*

O almacenamento ***directory*** permítenos gardar información **nun nodo do clúster** de Proxmox VE, polo tanto, **non ten funcionalidade de datos compartidos**.

Na instalación dun nodo de Proxmox VE créase unha fonte de almacenamento de directorios chamada `local`. A información gardada nesta orixe almacénase no directorio `/var/lib/vz` e, por defecto, está configurada para almacena-lo seguinte:

- **Imaxe ISO**
- **Modelo de contedor**
- **Ficheiro de copia de seguridade de VZDump**
 
![Almacenamento local](imaxes/contidoStorageLocal.png)

Pódese modifica-la fonte de almacenamento para engadir outros novos tipos de datos:

- **Disk image**: imaxes de discos para as máquinas virtuais.
- **Containers**: sistema de ficheiros dos contedores Linux.

Seleccionando o almacenamento local dun nodo, pódense ve-los datos que se poden gardar:
 
![Tipos de datos almacenables nun Storage local](imaxes/datosGardablesStorageLocal.png)

Se accedemos ó nodo por ssh (ou dende a terminal do panel de control, opción `Shell`), podemos comproba-la estrutura de directorios existente:

```bash
ssh root@192.168.7.101
...
root@srvpve01:~# cd /var/lib/vz
root@srvpve01:/var/lib/vz# ls
dump  images  template
```

E incluso podemos, por exemplo, ve-las imaxes ISO gardadas:

```bash
root@srvpve01:/var/lib/vz# cd template/iso/
root@srvpve01:/var/lib/vz/template/iso# ls
debian-11.1.0-amd64-netinst.iso  ubuntu-24.04.1-desktop-amd64.iso  ubuntu-24.04.1-live-server-amd64.iso virtio-win-0.1.208.iso  Win10_21H1_Spanish_x64.iso
```

### Creación dunha nova fonte de almacenamento de tipo Directory

Como exemplo, crearemos outra fonte de almacenamento onde imos garda-las imaxes de disco das máquinas virtuais e os datos do sistema de ficheiro dos contedores.

Os discos de imaxes das máquinas virtuais pódense gardar en dous tipos de ficheiros de imaxes:

- `raw`: o formato `raw` é unha imaxe binaria sinxela da imaxe do disco. Ocúpase todo o espazo que se definise ó creala. O acceso é máis eficiente.
- `qcow2`: o formato `QEMU copy-on-write`, ó crearse, só ocupa o espazo que se estea usando cos datos, o ficheiro irá crecendo cando escribamos nel. Acepta *snapshots* e *aprovisionamento lixeiro*. É menos eficiente en canto ó acceso.
- `vmdk`: formato de arquivo aberto, creado por *VMware*.

Para crea-la nova fonte, eliximos `Datacenter->Storage->Add->Directory`.

![Engadir storage Directorio](imaxes/engadirStorages.png)

E no seguinte paso hai que indicar un nome (p.e. `imaxes_locais`), o directorio pai (o directorio que se indique crearase automaticamente), e o tipo de contidos que vai gardar, neste caso: `Disk image` e `Containers`.

![Definir contido dun storage Directorio](imaxes/engadirStorages2.png)

```
root@srvpve01:~# ls -ltr /mnt/disco1/
total 12
drwxr-xr-x 2 root root 4096 Jan 19 22:19 dump
drwxr-xr-x 2 root root 4096 Jan 19 22:19 private
drwxr-xr-x 2 root root 4096 Jan 19 22:19 images
root@srvpve01:~# ls -ltr /mnt/disco1/images/
total 0
root@srvpve01:~# 
```

>Nota: se creamo-la fonte de almacenamento de tipo `Directory` sobre o disco do sistema da máquina onde temos instalado Proxmox VE, a súa capacidade será a que ten este disco. En circunstancias reais, a fonte de tipo `Directory` deberiámola crear sobre un dispositivo de bloque (disco, RAID, ...) engadido ó nodo Proxmox VE.

#### Facer dispoñibles os discos de almacenamento grandes que temos instalados para PROXMOX
Antes de nada hai que comprobar que aparecen tódolos discos físicos conectándonos por SSH ó servidor Proxmox:

```bash
lsblk -f
fdisk -l
```

Se quixeramos que o espazo deses discos estivese dispoñible para usarse no servidor teriamaos antes que **particionalos, formatealos e montalos**.

Cos comandos anteriores buscamo-los discos sen particións ou con espazo libre.

- Normalmente serán `/dev/sdb`, `/dev/sdc`, `/dev/sdd` e `/dev/sde` (non `/dev/sda` que é o sistema).

**1. Particionamento dos discos**
Para particionar **discos maiores de 2TB** usaremos `gdisk` (`GPT`), xa que `fdisk` utiliza `MBR`, que non admite volumes maiores de 2 TB.

```bash
# Instalar parted se non está
apt install parted

# Crear táboa de particións GPT
parted /dev/sdX --script mklabel gpt

# Crear unha partición que use todo o disco
parted /dev/sdX --script mkpart primary 0% 100%
```

**2. Formatear particións**
Formatear con `ext4`:

```bash
# Formatear a partición (p.e.: /dev/sdb1)
mkfs.ext4 /dev/sdX1
```
Para mellor rendemento en proxmox, usar estas opcións:

```bash
mkfs.ext4 -O ^has_journal -E lazy_itable_init=0,lazy_journal_init=0 /dev/sdX1
```

**3. Crear Punto de Montaxe**
Crear directorio para montar:

```bash
# Directorio típico para storages en proxmox
mkdir -p /mnt/almacen1
```

Montar temporalmente para probar:

```bash
mount /dev/sdX1 /mnt/almacen1
```

Verificar que se montou:

```bash
df -h /mnt/almacen1
lsblk -f /dev/sdX1
```

**4. Configurar montaxe automática**
Obter o UUID da partición:

```bash
blkid /dev/sdX1
# Exemplo de saída:
# /dev/sdb1: UUID="a1b2c3d4-e5f6-7890-1234-567890abcdef" TYPE="ext4"
```

Editar `/etc/fstab` para montaxe automática:

```bash
nano /etc/fstab
```

Engadir esta liña ó final:

```fstab
# Storage Proxmox
UUID=a1b2c3d4-e5f6-7890-1234-567890abcdef /mnt/almacen1 ext4 defaults 0 2
```

Proba-la configuración de fstab:

```bash
# Montar tódolos volumes de fstab
mount -a

# Verificar
df -h
```

#### Crear *Storage Directory* en Proxmox
Unha vez dispoñibles os discos xa sería posible utilizalos en Proxmox como, por exemplo, un almacenamento de tipo ***Directory***. Para elo, dende a Web GUI:

- Ir a `Datacenter -> Storage -> Add -> Directory`
- Configurar:
   - `ID`: `storage_local1` (por exemplo)
   - `Directory`: `/mnt/almacen1`
   - `Content`: `Todos` (ou seleccionar: `Disk image`, `Container`, `ISO`, etc.)
   - `Nodes`: Todos os nodos (se é compartido)

Verificar na Web GUI que aparece o novo *storage* entrando en:

- `Datacenter -> Storage`
- `NodeName -> Storage -> storage_local1` 

#### Importante!: configurar permisos
Hai que asegurarse que se conte cos permisos correctos:

```bash
# Propietario/a root, grupo root
chown root:root /mnt/almacen1

# Permisos 755 (rwxr-xr-x)
chmod 755 /mnt/almacen1

# Crear subdirectorios para Proxmox
mkdir -p /mnt/almacen1/{template,iso,backup}
chmod 755 /mnt/almacen1/{template,iso,backup}
```

---

#### Creación dunha máquina virtual usando a nova fonte de almacenamento

Agora pódense crear máquinas virtuais cuxos discos virtuais se garden en ficheiros de imaxes na nova fonte de almacenamento `local-images`.

Durante o proceso de creación da imaxe, pódese elixi-la fonte de almacenamento onde imos garda-lo disco (no noso caso escolleriamo-la fonte `local-images`), e o tipo de ficheiro de imaxe (nós imos elixir `qcow2`):

![Disco dunnha máquina virtual gardado nun storage Directorio](imaxes/discoGardadoStorage.png)

Se creamos e configuramo-la máquina virtual con **ID 106**, ó acceder ó nodo pódese ver onde se creou o ficheiro de imaxe:

```bash
root@srvpve01:/var/lib/images/images/106# ls
vm-106-disk-0.qcow2
```

## Xestión dos discos das máquinas virtuais

Se escollemos un disco na sección Hardware dunha máquina virtual, veremos que temos varias operacións que podemos realizar nel:

- `Detach`: permítenos desconecta-lo disco da máquina. O ficheiro de imaxe ou o volume lóxico non se borra, senón que aparece como disco non usado.
- `Edit`: permítenos cambiar algúns parámetros do disco.
- `Resize Disk`: pódese aumenta-lo tamaño dun disco.
- `Move Disk`: pódese copia-lo contido de calquera disco a outra fonte de almacenamento dispoñible.


## Engadir novos discos a máquinas virtuais

Na sección Hardware de calquera máquina virtual, podemos engadir novos discos duros.

Ó engadir unha nova unidade, hai que escolle-la fonte de almacenamento onde se gardarán os seus datos e o tamaño da unidade.


