# Xestión de máquinas virtuais
As máquinas virtuais teñen toda unha serie de opcións e configuracións, ademais están formadas por un conxunto de dispositivos hardware. Estes axustes pódense realizar durante a creación da máquina ou posteriormente unha vez creadas. Para ver detalladamente tódolos axustes que poden configurarse pódese consulta-lo [capitulo 10 da documentación oficial: Qemu/KVM Virtual Machines](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#chapter_virtual_machines). 

Hai múltiples opcións para xestiona-las nosas máquinas virtuais.

## Botón dereito sobre a máquina virtual
![Menú contextual de xestión](imaxes/menuContextualMV.png)]

- `Start`: inicia a execución dunha máquina virtual.
- `Pause`: pausa a execución da máquina virtual. Poderase reanuda-la execución coa opción `Resume`.
- `Hibernate`: garda o estado da máquina en memoria e párase. A próxima vez que iniciemo-la máquina recuperarase o seu anterior estado.
- `Shutdown`: remátase a execución da máquina de forma ordeada.
- `Stop`: remátase inmediatamente a execución da máquina.
- `Clone`: clona a máquina.
- `Convert to template`: crea unha plantilla a partir da máquina para crear novas máquinas.
- `Console`: permítenos acceder a unha consola para traballar coa máquina.

## Panel lateral
Se eliximos unha máquina virtual, aparécenos un panel lateral con máis opcións sobre a máquina:

![Panel lateral sobre MV](imaxes/panelLateralMV.png)

- `Sumary`: resumo e monitorización da máquina elixida.
- `Console`: permíte acceder a unha consola para traballar coa máquina.
- `Hardware`: permíte ver e cambia-la configuración hardware.
- `Cloud-init`: permite facer unha configuración automática da máquina.
- `Options`: permite modificar opcións da máquina virtual.
- `Task History`: amosa o historial de tarefas que se realizaron sobre a máquina.
- `Monitor`: permite interaccionar directamente con `KVM` (*Kernel-based Virtual Machine*) dende liña de comandos.
- `Backup`: permiten realizar unha copia de seguridade.
- `Replication`: permitre xestiona-las réplicas da máquina entre distintos nodos do clúster de Proxmox VE.
- `Snapshot`: permite crear un *snapshot* da máquina para recuperar posteriormente o seu estado. 
- `Firewall`: permite xestiona-lo tornalumes da máquina virtual.
- `Permisssions`: permite especifica-los distintos permisos que teñen os/as usuarios/as ou grupos sobre a máquina.

En `Hardware` e `Options` están algunhas das principais opcións.

### Hardware
No apartado `hardware` pódense ver e modifica-las características do hardware e dispositivos conectados á máquina virtual (RAM, CPU, BIOS, Display, ...). 

![Características hardware dunha máquina virtual](imaxes/caracteristicasHardwareVM.png)

Por suposto pódense engadir novos dispositivos ás nosas máquinas, e eliminalos:

![Dispositivos hardware dunha máquina virtual](imaxes/hardwareVMProxmox.png)

### Options
No apartado `Options` pódense modifica-los axustes da máquina virtual. O cambio dun parámetro pode requiri-lo reinicio da máquina virtual para que se faga efectivo. Algúns deses parámetros:

- `Name`: pódese cambia-lo nome da máquina.
- `Start at boot`: configura a máquina para que se inicie de forma automática ó iniciar Proxmox VE.
- `Start/Shutdown order`: se está elixida a opción anterior pódese programa-la orde de arranque da máquina.
- `OS Type`: permite modifica-lo tipo e versión do sistema operativo.
- `Boot Order`: configura a orde de arranque dos dispositivos de almacenamento da máquina.
- ...

![Opcións dunha máquina virtual](imaxes/optionsVMProxmox.png)


## Eliminar unha máquina virtual
Para eliminar unha máquina virtual temos que parala, e escoller a opción `Remove` do botón `More`:

![Eliminado dunha máquina virtual](imaxes/eliminarVMProxmox.png)

Para eliminala pedirásenos o identificador da máquina virtual para a confirmación.

## Instalar máquina virtual

### Engadir ISO a Proxmox
Antes de crear unha máquina virtual, necesitamos subi-las imaxes `ISO-9660` dos sistemas operativos dos que imos crea-las máquinas; para iso no almacenamento local, `local`, seleccionamo-la opción `ISO images` e subimo-los ficheiros que necesitemos.

- Tamén pódese indicar unha URL para descarga-la ISO, `Download from URL`, ou borrar unha determinada ISO, `Remove`.
- A lista de imaxes ISO subidas ó noso servidor Proxmox VE, tamén está visible.

![Subida de imaxes ISO a Proxmox](imaxes/isosSubidasProxmox.png)

### Dispositivos paravirtualizados
Ó crea-las máquinas virtuais, ademais das características básicas como a cantidade de RAM asignada, o espazo de almacenamento ou a CPU, débense selecciona-los diferentes dispositivos que van formar parte dela: 

- interface de rede
- controladores de disco duro
- interface gráfica
- ...

Nun sistema de virtualización completa como `QEMU/KVM` tódolos dispositivos están inicialmente emulados por software, de maneira que a máquina virtual interactúa cun dispositivo coma se o fixese cun físico equivalente. Desta maneira podemos atopar unha interface de rede emulando á clásica tarxeta de rede Realtek 8139 ou unha interface SATA para conectar cun disco duro virtual. Estes **dispositivos emulados** teñen a vantaxe de que poden utiliza-los controladores de dispositivos dos seus equivalentes físicos, polo que se adoitan utilizar dispositivos emulados moi comúns, que proporcionan compatibilidade coa maioría de sistemas operativos e fan moi sinxela a instalación dos mesmos dentro dunha máquina
virtual. Con todo, teñen un inconveniente e é que cando son dispositivos moi usados, teñen un rendemento pobre, aumentan o consumo de recursos da CPU e aumentan a latencia de E/S.

O **proxecto KVM** proporciona unha alternativa ó uso de dispositivos emulados, que se coñecen como **dispositivos paravirtualizados** e englóbanse baixo a denominación [virtIO](https://www.linux-kvm.org/page/Virtio). 

O nome de dispositivos paravirtualizados fai referencia á técnica que utilizan, máis próxima á paravirtualización, e que proporciona un rendemento moi próximo ó real, polo que é moi recomendable utilizar **dispositivos virtio** nos dispositivos de E/S que consomen máis recursos, por exemplo, a rede e o acceso a discos duros.

O único inconveniente que ten utilizar dispositivos virtio é que son específicos para KVM e non tódolos sistemas operativos recoñécenos por defecto. Evidentemente os sistemas linux si recoñecen os dispositivos virtio e nese caso sempre é recomendable usalos, pero outros sistemas operativos, por exemplo Windows, non inclúen inicialmente soporte virtio, se queremos usalos nese caso, será necesario instala-los controladores de dispositivos durante a instalación do sistema operativo da máquina virtual.

#### Engadir controladores Virtio para máis rendemento do hardware virtualizado cando o anfitrión é Linux (como ocorre na nosa instalación de Proxmox)

Windows non ten soporte nativo para  ***VirtIO***, pero o *proxecto Fedora* proporciona controladores de dispositivos de software libre para VirtIO en Windows; estes drivers pódense descargar dende:
![https://www.linux-kvm.org/page/virtio](https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers)

Unha vez descargado o ficheiro ISO, hai que colocalo no almacenamento local, `local`, seleccionando a opción `ISO images` e subindo o ficheiro, como xa fixemos anteriormente, coma calquera imaxe ISO.

![Controladores VirtIO subidos na ISO](imaxes/isoVirtioWindows.png)


### Instalación de Qemu-guest-agent nas máquinas virtuais
O programa `Qemu-guest-agent` é un demo que pódese instalar nas máquinas virtuais creadas en Proxmox para proporcionar unha comunicación entre Proxmox e a máquina virtual. Isto fai que a xestión do apagado da máquina virtual sexa máis óptima e ter información da máquina, por exemplo o ip que se configurou nas súas interfaces de rede.

#### Activación de Qemu-guest-agent

Para facer uso deste programa débese activar na configuración da máquina en cuestión:

- 1.- Engadir isto: 

`VM -> Hardware -> Add -> Serial Port -> Serial Port 0` con tipo: `Socket` (valor por defecto)

![Engadir porto serie](imaxes/quemuEngadirSerial.png)

- 2.- Activar isto: 

`VM -> Options -> QEMU Guest Agent = Enabled`

![Activación do axente Quemu](imaxes/quemuActivarAxente.png)

A información de IP non aparece ata o seguinte arranque.

#### Instalación de Qemu-guest-agent
Normalmente as **máquinas Linux** que se crean en Proxmox detectan que se están executando nesta contorna e durante a instalación instálase este servizo (por exemplo, nas máquinas Debian 11 realízase a instalación automaticamente). Se non se realiza a instalación de forma automática pódese instala-lo paquete. Por exemplo, en Debian/Ubuntu:

```bash
apt install qemu-guest-agent
```
De seguido pódese comprobar que o axente está executándose:

```bash
systemctl status qemu-guest-agent
```

Para o **sistema operativo Windows**, dende o CDROM onde se montan os drivers VirtIO:

1. Imos ó **Administrador de Dispositivos (Device Manager)**.
2. Buscamos "**PCI Simple Communications Controller**"
3. `Botón dereito-> Actualizar Controlador (Update Driver)` -> Seleccionar a iso montada en `DRIVE:\vioserial\windows>\amd64`. 

![Actualizar controladora Quemu para Windows](imaxes/quemuActualizarControladoraWindows.png)

A continuación, instálase o programa:

1. Co explorador de ficheiros posicionámonos na unidade do CDROM correspondente á ISO montada.
2. O instalador atópase no directorio `guest-agent`.
3. Executamos o instalador `qemu-ga-x86_64.msi (64-bit)`.

![Instalación do programa Quemu para Windows](imaxes/quemuInstalarWindows.png)

De seguido pódese comprobar que o servizo está en execución, buscándo `QEMU Guest Agent` en:

```powershell
services.msc
```

Verificar que aparece:

- Estado: `En execución`
- Tipo de inicio: `Automático`

![Axente Quemu correndo como servizo en Windows](imaxes/quemuServizoWindowsAxente.png)

#### Proba de funcionamento
Unha vez instalado o axente `Quemu` pódese obter información do IP que se asignase á máquina en Proxmox `VM -> Summary`:

![Información obtida de Quemu en Windows](imaxes/quemuFuncionandoWindows.png)

## Creación de máquinas virtuais Linux

> **Lembrar dar acceso dende Aulas ó ip asignado para poder actualiza-lo sistema!!!***

Unha vez subidas as **imaxes ISO** necesarias para os controladores virtuais e os sistemas operativos xa é posible crear unha máquina virtual cun sistema operativo Linux, escollendo a **opción de crear unha máquina virtual** e seguindo os pasos do asistente:

* **Identificamo-la máquina virtual**, especificando o nodo onde se creará a máquina, o seu ID e o seu nome.
* **Escollemo-lo sistema operativo**
* **Escollemo-la ISO** que usaremos para a instalación. Seleccionamo-la ISO do medio de almacenamento `local`. Tamén seleccionamo-lo tipo e a versión do sistema operativo.

![Asistente de creación dunha máquina virtual en Proxmox](imaxes/crearVM1.png)

* Configuración do sistema
  * Escollemo-la **tarxeta gráfica e o controlador SCSI VirtIO**, deixando os valores predeterminados.
  * Selección de **disco**. Seleccionamo-la configuración para o disco raíz da máquina que estamos a crear. Deixamos os valores *BUS/Device* e *Cache* nos seus valores predeterminados. Por agora, só podemos escoller un medio de almacenamento para o disco: `local-lvm`. Isto significa que o disco da máquina virtual almacenarase nun volume lóxico. Tamén especificaremo-lo tamaño do disco.
  * Selección da **CPU**. Un socket da CPU é unha ranura física na placa base dun PC onde se pode conectar unha CPU. Esta CPU pode conter un ou máis núcleos, que son unidades de procesamento independentes. Podemos escolle-lo número de sockets e núcleos para a CPU da nosa máquina virtual. Tamén podemos emular diferentes tipos de CPU; por agora, escolleremo-la opción predeterminada.
  * Configuración da **memoria**. Especificamo-la cantidade de memoria que terá a nosa máquina virtual (**en MiB, non en MB!**).
  * Configuración da **rede**. Inicialmente, a nosa máquina virtual estará conectada á ponte externa `vmbr0`, polo que obterá un enderezo IP do servidor DHCP da nosa rede local. Non configuraremos ningunha VLAN. Deixaremo-lo modelo da tarxeta (*VirtIO*) e o enderezo MAC coa súa configuración predeterminada.
* Comeza a instalación

![Asistente de creación dunha máquina virtual en Proxmox](imaxes/crearVM2.png)

* Unha vez creada a máquina virtual, iniciámola.
* E dende a consola, pódemse ve-lo monitor da máquina virtual para comeza-la instalación do sistema operativo.


## Creación de máquinas virtuais Windows
Para crear unha máquina virtual cun sistema operativo tipo Windows hai que ter en conta que **Windows non ten soporte nativo para dispositivos VirtIO**, polo tanto, hai que engadi-los controladores de dispositivos (*drivers*) necesarios para que Windows identifique os dispositivos VirtIO que definamos na máquina virtual.

Escoller unha imaxe ISO para instalar unha versión de Windows (previamente a imaxe debe estar subida).
Ó seleccionar-lo sistema operativo, escoller Microsoft Windows como sistema operativo e a versión que se vai instalar.
Configurat a CPU e a RAM para que teña recursos suficientes.
**Lembra que escollemos VirtIO SCSI como controlador de almacenamento**:

- Engadir un CD-ROM cos controladores VirtIO
Antes de inicia-la máquina, engadir un CD-ROM coa imaxe ISO do controlador VirtIO.
Ademais, temos que asegurarnos de que na orde de inicio, o CD-ROM onde montamos a ISO de Windows (p.e., IDE2) se coloque antes do CD-ROM cos controladores VirtIO.

### Comeza-la instalación
Arrancamos a máquina, accedemos á consola e comezamos a instalación ata chegar á pantalla onde temos que escoller o disco duro onde imos realizar a instalación.
O disco duro non se pode detectar porque Windows non pode recoñecer inicialmente o controlador VirtIO. Carguemos os controladores de dispositivo VirtIO necesarios do CD-ROM que montamos:

- Selecciona-la opción "Cargar controladores", premer en "Explorar" e escolle-lo cartafol da súa arquitectura (amd64) e a versión de Windows do CD-ROM que contén os controladores VirtIO.
- Agora poderase continuar coa instalación de Windows porque o disco duro xa foi detectado.

Para a configuración de rede tamén podemos escoller VirtIO para a interface de rede, xa que os controladores de dispositivo VirtIO que instalamos tamén inclúen compatibilidade de rede.
Unha vez creada a máquina virtual de Windows, decatámonos de que non temos unha conexión de rede porque Windows non ten os controladores para o controlador VirtIO. Para instalalo:

- Actualiza-lo controlador do dispositivo Ethernet Controller no Xestor de dispositivos e escolle-lo cartafol do CD-ROM onde montamos os controladores VirtIO: `NetKVM\<cartafol co nome da túa versión de Windows>\amd64`

...  seguir para adiante....


## Acceso ás máquinas virtuais desde o exterior
Unha vez que creamos as máquinas en Proxmox podemos acceder a elas utilizando a consola da GUI de Proxmox VE, pero é posible a elas acceder utilizando outros protocolos específicos de acceso remoto, que adoitan ser máis eficiente para o traballo coas máquinas.

### Acceso por ssh ás máquinas Linux
O protocolo máis habitual para traballar con máquinas Linux é ssh. Podemos instalar o servidor ssh durante a instalación do sistema operativo. Se non o fixemos, poderiamos instalalo en distribucións Debian/Ubuntu executando:

```bash
apt install ssh
```

Unha vez que sabemos o ip da máquina:

![Información da MV proporcionada polo axente](imaxes/axenteVM.png)

Dende o noso equipo podemos acceder a esta máquina por ssh indicando o nome de usuario/a e a ip:

```
$ ssh administradora@192.168.7.50
The authenticity of host '192.168.7.50 (192.168.7.50)' can't be established.
ED25519 key fingerprint is SHA256:kMUaetGtW+kLInOcTFyhuHGR4mO/pY+YEuTK8358hXE.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.7.50' (ED25519) to the list of known hosts.
administradora@192.168.7.50's password: 
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-41-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Lun 19 Xan 2026 19:29:31 UTC

  System load:  0.08               Processes:              100
  Usage of /:   30.1% of 14.66GB   Users logged in:        0
  Memory usage: 8%                 IPv4 address for ens18: 192.168.7.50
  Swap usage:   0%


Expanded Security Maintenance for Applications is not enabled.

É posíbel aplicar 285 actualizacións inmediatamente.
145 destas actualizacións son actualizacións de seguranza normais.
Para consultar estas actualizacións adicionais execute: apt list --upgradable

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


The list of available updates is more than a week old.
To check for new updates run: sudo apt update

Last login: Mon Nov 24 19:22:04 2025 from 192.168.7.81
administradora@ubuserver24probas:~$
```

### Acceso por RDP a unha máquina Windows
Normalmente para acceder ás máquinas Windows usamos o protocolo RDP (Remote Desktop Protocol). Para acceder necesitamos usar un cliente RDP. Por exemplo, en sistemas Linux podes usar Remmina, se o fas desde un sistema Windows podes usar "Conexión a Escritorio remoto".

No noso caso, para conectarnos dende un equipo Linux usaremo-lo **cliente Remmina**.

> Hai que indicar que as versións máis sinxelas como Windows 10 **Home** non teñen a posibilidade do acceso remoto, por tanto, mellor utilizar unha versión Windows 10 **Pro**.

O primeiro que temos que facer é configurar Windows para permitir o acceso remoto. Para iso eliximos `Inicio > Configuración > Sistema > Escritorio remoto` e activar `Habilitar escritorio remoto`.

![Configurar acceso remoto en Windows](imaxes/accesoEscritorioRemotoWindows.png)

A continuación, configuramo-lo cliente Remmina cunha nova conexión, indicando o ip da máquina, o/a usuario/a e o contrasinal e a resolución de pantalla, e xa podemos conectar para acceder á máquina:

![Conexión remota con Remmina](imaxes/conexionRemmina.png)




