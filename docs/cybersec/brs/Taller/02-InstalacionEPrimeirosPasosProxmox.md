# Proxmox Virtual Environment
Tamén coñecido como ***Proxmox VE***, é un entorno de virtualización de servidores de código aberto. 
É unha distribución GNU/Linux baseada en Debian que **permite o despregamento e a xestión de máquinas virtuais e contedores**.

- Documentación oficial de Proxmox: [https://pve.proxmox.com/pve-docs/index.html](https://pve.proxmox.com/pve-docs/index.html)

A xestión de Proxmox VE é sinxela a través da **interface de administración accesibe cun navegador web**, puidendo conectarse a calquera nodo para xestionar todo o clúster. **Cada nodo pode xestionar todo o clúster; non é necesario un nodo de xestión dedicado**. 

## Virtualización con Proxmox VE
A versión actual de Proxmox VE permítenos xestionar os seguintes recursos virtualizados:

- Máquinas virtuais: isto conséguese mediante a virtualización de hardware co hipervisor KVM.
- Contedores: tamén permite xestionar contedores do sistema LXC.

## Outras características
- Consola web para xestionar recursos virtualizados.
- Acceso seguro a tódalas máquinas virtuais e contedores mediante cifrado SSL (https)
- Interface rápida baseada en buscas, capaz de manexar centos e probablemente miles de máquinas virtuais.
- Ferramentas de liña de comandos para xestionar recursos virtualizados.
- API REST que nos permite xestionar recursos virtualizados dende un programa deseñado a medida.
- Permite a creación dun clúster de servidores Proxmox.
  - Se temos un clúster de servidores Proxmox configurado, teremos alta dispoñibilidade e capacidades de migración en quente.
- Permite o uso de moitos tipos de medios de almacenamento.
- Permite configura-la rede que usarán as máquinas virtuais e os contedores.
- É un programa de código aberto.
- Hai unha gran comunidade de apoio.

## Escenario do noso clúster Proxmox VE
Para aproveita-lo potencial de Proxmox necesitamos instalar un clúster de servidores. 
Neste caso temos 3 servidores onde se virtualizarán nosos recursos. 
A configuración de redes necesaria para o clúster require de 3/4 redes:

- Rede de máquinas virtuais cara á LAN (**negra**)
- Rede de administración Proxmox: *management / cluster Corosync* (**verde**)
- Rede do clúster CEPH (**vermella**); subdividida á súa vez nunha pública (lectura/escritura das máquinas virtuais nos *storage*) e outra do clúster (replicación interna entre OSDs, rebalanceo, recuperación)

![Escenario ideal do clúster Proxmox](imaxes/clusterProxmox.png)

Idealmente sería necesario ter un **sistema de almacenamento compartido** para que os datos dos nosos recursos virtualizados foran compartidos entre os distintos nodos do clúster. O almacenamento que van a utilizar nosas máquinas virtuais ou contedores podería proporcionarse de distintos xeitos:

- **DAS (Direct-Attached Storage)**: os dispositivos de almacenamento están aloxados no propio servidor Proxmox VE.
- **NAS (Network Attached Storage)**: tense un servidor de almacenamento que nos permite compartir sistemas de ficheiros (por exemplo, NFS).
- **SAN (Storage Area Network)**: o servidor de almacenamento permite compartir dispositivos de almacenamento (de bloque) (por exemplo, iSCSI).

Neste caso **utilizarase almacenamento DAS, xa que non contaremos cun servidor de almacenamento compartido**, é dicir, cada servidor terá que ter suficiente almacenamento local para tódolos recursos virtualizados.

Por seguridade soen usarse redes diferenciadas: 

- Para que os recursos de almacenamento non estean dispoñibles de forma directa dende a rede de usuarios/as.
  - a **rede de acceso ás máquinas** (negra)
  - a **rede de almacenamento** (vermella)
- O recomendable é ter unha rede illada das outrs, que inter conecte entre si os nodos do clúster.
  - a **rede para a xestión interna do clúster** (verde)

No noso caso teremos **os servidores Proxmox VE conectados á rede do noso taller/aula e as máquinas virtuais e contedores creados tamén conectadas a esta mesma rede**, polo que serán accesibles sen problemas. 

**Nota:** no esquema debuxado aparece un servidor de almacenamento, pero en realidade non se ofrecerá almacenamento NAS ou SAN, xa que non contamos cun sistema de almacenamento compartido para que os datos dos nosos recursos virtualizados fosen compartidos entre os distintos nodos do clúster. Tamén aparecen 3 redes pero só disporemos de dúas, a de acceso ás máquinas e a de xestión interna do clúster. 

- [ ] **¿¿ver se é mellor usar esa rede separada para almacenamento ou xestión interna???**

## Acceso á GUI de Proxmox VE
Unha vez instalado Proxmox VE no servidor, para acceder á GUI (Interface Gráfica de Usuario/a), basta abrir nun navegador o IP correspondente da máquina onde fixemo-la instalación, e que podemos ver na consola da mesma cando arranca a máquina:

![Consola de inicio de sesión no servidor Proxmox](imaxes/consolaLoginProxmox.png)

Pódese acceder á interface web a través de ***https://dirección-ip-servidor:8006*** (o inicio de sesión predeterminado é: root e o contrasinal especifícase durante o proceso de instalación).

Ó acceder ó URL indicado mediante HTTPS, como o certificado que se está a usar está asinado por unha autoridade de certificación na que o noso navegador non confía haberá que acepta-lo certificado para acceder á aplicación. 

> **Nota:** máis adiante, nun entorno de produción, podemos configurar os nosos propios certificados para o acceso HTTPS.

Tras isto xa se accede á xanela de autenticación:

![Acceso polo GUI para inicio de sesión no servidor Proxmox](imaxes/autenticacionGUIproxmox.png)

O nome de usuario/a que especificamos é **root** e o contrasinal é o que definimos durante a instalación. 

O **dominio (Realm)** será a autenticación estándar de Linux PAM, xa que a conta **root** é unha conta de usuario/a do sistema en Proxmox.

## Vista xeral de Proxmox VE
Unha vez dentro da interface gráfica de usuario/a, vese un panel de control dividido en catro partes:

### Cabeceira

![Cabeceira](imaxes/cabeceiraInterfaceProxmox.png)

Na parte superior esquerda, xunto ó logotipo de Proxmox está a **versión actual de Proxmox VE**. Na **barra de busca** ó seu carón, pódense buscar obxectos específicos (VM, contedores, nodos, etc.). Ás veces, isto é máis rápido que seleccionar un obxecto na árbore de recursos.

Á dereita, hai varios botóns:

* **Documentación / Axuda**: amosa a documentación de Proxmox VE.
* **Crear VM**: abre o asistente para crear unha máquina virtual.
* **Crear CT**: abre o asistente para crear contedores.
* **Usuario/a** identificado na sesión: permite modifica-la configuración do/a usuario/a que iniciou sesión; útil tamén para personaliza-lo *dashboard* coa información a amosar do almacenamento no sumario dos recursos do datacenter.

### Árbore de recursos

![Árbore de recursos](imaxes/arboreRecursosInterfaceProxmox.png)

Nesta área ó lado esquerdo da pantalla, vense os obxectos dispoñibles. Podemos ver os recursos de diferentes xeitos:

* **Vista de *server***: amosa tódolos obxectos, agrupados por nodos (servidores do clúster). Esta é a vista predeterminada.
* **Vista de *pool***: amosa as máquinas virtuais e os contedores, agrupados por agrupacións de recursos.
* **Vista de *folder***: amosa tódolos obxectos, agrupados por tipo.
* **Vista de *tag***: amosa as máquinas virtuais e os contedores agrupados segundo as súas etiquetas (poden categorizarse mediante etiquetas personalizadas).

Se observamos a **Vista de servidor**, vemos unha clasificación dos obxectos dispoñibles:

- O obxecto principal é o **Datacenter**, que representa o clúster Proxmox VE que estamos a xestionar. Consta de:
  * **Nodos**: servidores que forman parte do clúster.
  * **Máquinas virtuais**.
  * **Contedores Linux**.
  * **Almacenamento**: diferentes fontes de almacenamento que están dispoñibles.
  * **Pools**: póodense agrupa-los diferentes obxectos en *pools* para facilita-la súa xestión.

### Panel central

![Panel central](imaxes/panelCentralInterfaceProxmox.png)

Na parte central da interface de usuario/a, un cadro de mando (*dashboard*) permite ver diferentes aspectos do recurso ou característica seleccionado, como son as opcións de configuración e o seu estado.

### Panel de log

![Panel de Logs](imaxes/panelLogInterfaceProxmox.png)

Na parte inferior, podemos ver as tarefas e os *logs* das tarefas recentemente realizadas, puidendo facer dobre clic sobre elas para obter máis detalles ou abortar unha tarefa en execución.


## Introdución ó clúster Proxmox VE

Ó instalar Proxmox VE, créase un clúster de servidores onde se executarán as máquinas virtuais, xestionarase o almacenamento, etc. Obviamente, durante a instalación inicial, o clúster só ten un servidor.

Polo tanto, a estrutura do noso clúster consta de:

* *Datacenter*: isto representa o clúster. O ***datacenter*** está composto por **nodos**.
* *Nodos*: estes representan cada servidor que forma parte do clúster.

### Centro de datos
Cando se selecciona o **Datacenter** na *Server View*, as opcións do clúster aparecen no panel lateral.

![Menú de datacenter](imaxes/menuDatacenterInterfaceProxmoxDatacenter.png)

Algunhas desas opcións:

* **Busca**: para realizar buscas en todo o clúster: nodos, máquinas virtuais, contedores, almacenamento, etc.
* **Resumo**: descrición xeral do estado e o uso de recursos do clúster.
* **Clúster**: ofrece a funcionalidade e a información necesarias para crear ou unirse a un clúster. Cun só nodo,a funcionalidade do clúster aínda non está dispoñible.
* **CEPH**: o sistema de almacenamento distribuído usado por Proxmox coma un *pool* para as máquinas virtuais.
* **Opcións**: configuración xeral do clúster.
* **Almacenamento**: para xestiona-lo almacenamento do clúster.
* **Copia de seguridade**: ofrece a capacidade de crear copias de seguridade dos nosos recursos do clúster.
* **Replicación**: cando temos máis de dous nodos, podemos xestionar tarefas de replicación de máquinas e contedores nesta sección.
* **Permisos**: para xestionar usuarios/as, grupos, permisos, roles, etc., a nivel de clúster.
* **HA**: se temos máis dun nodo, podemos xestiona-los recursos que estarán en alta dispoñibilidade.
* ...

### Nodos

Cando se selecciona un nodo específico no clúster, as opcións para ese nodo aparecen na barra lateral. 
![Menú de nodo](imaxes/menuNodoInterfaceProxmoxServer.png)

Algunhas desas opcións:

* **Busca**: para realizar buscas no node.
* **Resumo**: descrición xeral do nodo e do seu uso de recursos.
* **Notas**: pódense escribir comentarios usando Markdown.
* **Shell**: para acceder ó shell do nodo.
* **Sistema**: configura varios aspectos do node: rede, DNS, certificados, resolución estática, rexistros, etc.
* **Actualizacións**: para xestionar repositorios de paquetes e realizar actualizacións do nodo.
* **Firewall**: para configurar o tornalumes do nodo.
* **Discos**: ofrece información sobre os discos do node.
* ...

#### Almacenamento do nodo

En Proxmox, despois da instalación, aparecen normalmente **dous almacenamentos por defecto** na interface web: **`local`** e **`local-lvm`**. Cada un ten un propósito distinto:

![Almacenamentos por defecto do nodo](imaxes/almacenamentosLocalNodosDatacenter.png)

- **1. `local`**
É un almacenamento baseado no sistema de ficheiros (**filesystem storage**) que basicamente é un directorio do sistema.

Dado que é una almacenamento de tipo `Directory`, por defecto, `local` úsase para gardar:

  * *Backups (ficheiros de copia de seguridade)*
  * *Imaxes ISOs de instalación*
  * *Plantillas de contedores (CT templates)*
  * *Snippets / scripts*

>***Nota:*** para o que non se adoita usar é para gardar discos de máquinas virtuais.

Ó ser de tipo `Directory`, esa información gárdase nun **directorio do nodo**, normalmente montado en:

```
/var/lib/vz
```
![Almacenamento local](imaxes/directorioLocal-var-lib-vz.png)

- **2. `local-lvm`**
É un almacenamento baseado en ***volumes thin (LVM-Thin)*** que resultan moi eficientes pola súa rapidez e porque permiten *aprovisionamento delgado (thin provisioning)*.

Sen embargo o comportamento é distinto entre `local` e `local-lvm`, e por iso non se ve un directorio equivalente a `/var/lib/vz` para o segundo.

Proxmox crea `local-lvm` durante a instalación coma un ***volume thin***, é dicir, non usa un directorio no sistema de ficheiros senón que garda os discos das máquinas virtuais dentro dun *Volume Group (VG)* de **LVM**, normalmente chamado `pve` e dentro dese *VG* crea un *Thin Pool* chamado `data` (é o que aparece como `local-lvm`) na interface de Proxmox.

>  O volume *thin LVM* chamado `/dev/pve/data` non aparece como un directorio no sistema de ficheiros, pero si existe como *thin pool* dentro do *Volume Group* `pve`.
> Proxmox configura por defecto nunha instalación típica con disco único:
> - Volume Group (VG): `pve`
> - Logical Volumes (LV)

> | LV          	| Tipo	    | Función |
> |---------------|-----------|---------|
> | /dev/pve/root	| ext4/xfs	| Sistema de ficheiros para o host (montado en `/`) |
> | /dev/pve/swap	| swap     	| Memoria swap |
> | /dev/pve/data	| thin pool	| *Storage `local-lvm`* para discos de VMs (ese *LV* chamado `data` é o que aparece na GUI como `local-lvm`) |

Así que os discos das máquinas virtuais (ficheiros `.raw`, `.qcow2`, etc.) non existen como ficheiros normais: son volumes lóxicos dentro do *pool LVM*; para ve-lo seu contido úsase o comando:

```
lvs -a
```
O atributo `twi-aotz--` indica que é un thin pool.
E os discos das VMs aparecerán como volumes *thin* dentro dese pool: cada `vm-XXX-disk-Y` é un disco dunha máquina virtual.

![Almacenamento lvm-local](imaxes/directorioLvm-local.png)

Normalmente `local-lvm` úsase para gardar:

* **Discos de máquinas virtuais** nun único host
* Discos de LXC -se así o configuras- para os contedores Linux.
>***Nota:*** non permite gardar ISOs nin backups, nin se pode explorar como un directorio estándar (non é un *FS*)

Cando creamos unha máquina virtual ou un contedor, os seus ficheiros de disco almacénanse nun volume lóxico LVM dentro dun grupo de volumes con *thin provisioning*. Polo tanto, **o volume lóxico creado non ocupa todo o espazo dispoñible dende o principio**; medra a medida que creamos e modificamos ficheiros. Esta é unha forma moi eficiente e rápida de optimiza-a utilización do almacenamento.

![Os discos das máquinas virtuais almacénanse no almacén local-lvm](imaxes/discoMVenlocal-lvm.png)


- **OLLO!!! hai que crear un `Virtual Disk` en `RAID0` para cada disco grande** (ou se a controladora do noso servidor o permite, activa-lo *modo HBA/Non-RAID*, para que cada disco de almacenamento dos datos apareza como `/dev/sdX` en Proxmox: **NECESARIO  para Ceph**.
  - [ OK ]  Ruta no iDRAC: `Storage -> Virtual Disks` ->  Crear un Virtual Disk RAID0 para cada disco grande

![Discos dispoñible no nodo](imaxes/discosLocalNodo.png)


#### Redes do nodo
Por defecto, ó instalar Proxmox VE, temos configurada unha rede pública:

- `eno8303`: é a interface física do nodo.
- `vmbr0`: é unha interface virtual tipo *bridge* á que está conectada o nodo. Nesta *bridge* conectaranse por defecto as máquinas virtuais e contedores que imos crear, que tomarán direccionamiento do servidor DHCP da nosa infraestrutura e que tomarán unha dirección IP co mesmo direccionamiento que o nodo, polo que serán accesibles desde calquera equipo da rede local da aula.

![Discos dispoñible no nodo -> system -> network](imaxes/interfacesRedeNodo.png)




Polo xeral `vmbr0` corresponderase á rede local á que se conectou Proxmox durante a instalación; no noso caso, a rede que temos configurada terá direccionamiento 192.168.7.0/24 e a porta de acceso é a 192.168.7.254.

Evidentemente, poderemos crear máis redes, pero será máis adiante cando vexamo-la súa creación e configuración.


> ***Nota:*** os nomes das interfaces de rede derivan da "localización do hardware" tal e como a ve o sistema.

> - `eno8303` e `eno8304`: NICs integradas (onboard) do servidor (`en` -> Ethernet, `o` -> Onboard -na placa base-, `8303` -> Identificador único da interface, normalmente derivado da localización no bus PCI).
> - `ens6f0np0` e `ens6f1np1`: tarxeta PCIe con varios portos (`en` -> Ethernet, `s6` -> PCIe slot 6, `f1` -> función PCIe 0, `np0` -> porto físico 0).
> - `vmbr0`: interface virtual tipo *bridge* (non é hardware) creado por Proxmox para dar acceso das máquinas virtuais ó exterior (normalmente engadindo no seu interior unha NIC física, como p.e. `eno8303`).
Non hai hardware; é unha ponte creada por Proxmox.
> - `bond0`: *bonding* virtual (non é hardware) usado para combinar dúas ou máis NICs físicas por redundancia o para ter maior ancho de banda.

> ***Nota:*** O **porto iDRAC** é unha interface independente do sistema operativo, é un módulo de xestión ***out-of-band***, separado do SO, polo que non depende de Linux nin de Proxmox e non aparece como interface de rede no sistema operativo (non sairía no comando `ip a`).

> - Ten o seu propio microcontrolador, firmware e pila de rede.
> - Non forma parte de ningunha interface de rede tipo `eno...`, `bond...`,...
