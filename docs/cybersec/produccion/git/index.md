# Git: Control de Versiones Profesional

## Introducción a Git

### **¿Qué es Git?**
Git es un **sistema de control de versiones distribuido** creado por Linus Torvalds en 2005. Es la herramienta estándar para el control de versiones en el desarrollo de software moderno, permitiendo a equipos colaborar de manera eficiente y mantener un historial completo de cambios.

### **Conceptos Fundamentales**

#### **Repositorio (Repo)**
Un repositorio es una colección de archivos y el historial completo de sus cambios. Existen dos tipos:
- **Repositorio local:** En tu máquina
- **Repositorio remoto:** En un servidor (GitHub, GitLab, Bitbucket)

#### **Commit**
Un commit es una **instantánea** de tu proyecto en un momento específico. Cada commit tiene:
- **Hash único:** Identificador de 40 caracteres (ej: `a1b2c3d4...`)
- **Mensaje:** Descripción de los cambios
- **Autor:** Quien hizo el cambio
- **Fecha:** Cuándo se hizo
- **Referencia al commit anterior**

#### **Áreas de Git**
Git tiene tres áreas principales:
1. **Working Directory:** Archivos en tu sistema de archivos
2. **Staging Area (Index):** Archivos preparados para commit
3. **Repository:** Base de datos con todos los commits

```
┌─────────────────┐    add    ┌─────────────┐    commit    ┌─────────────┐
│ Working         │ ─────────> │ Staging     │ ───────────> │ Repository  │
│ Directory       │            │ Area        │              │             │
└─────────────────┘            └─────────────┘              └─────────────┘
```

### **Flujo de Trabajo Básico**
```bash
# 1. Clonar repositorio existente
git clone https://github.com/usuario/proyecto.git

# 2. Crear nueva rama para feature
git checkout -b feature/nueva-funcionalidad

# 3. Hacer cambios y añadirlos al staging
git add archivo1.js archivo2.py

# 4. Confirmar cambios con mensaje descriptivo
git commit -m "Agrega nueva funcionalidad X"

# 5. Subir cambios al repositorio remoto
git push origin feature/nueva-funcionalidad
```

## Comandos Esenciales de Git

### **1. `git commit` - Confirmar Cambios**

#### **Concepto**
Un commit es la unidad fundamental en Git. Representa un conjunto de cambios lógicamente relacionados que se guardan permanentemente en el historial.

#### **Uso Básico**
```bash
# Commit con mensaje simple
git commit -m "Mensaje descriptivo del cambio"

# Commit abriendo editor para mensaje largo
git commit

# Añadir todos los cambios y commit en un paso
git commit -am "Mensaje descriptivo"

# Modificar el commit más reciente
git commit --amend
```

#### **Ejemplos Prácticos**
```bash
# Ejemplo 1: Commit básico con buenas prácticas
git add archivos-modificados.txt
git commit -m "fix: corrige error de validación en formulario

- Valida correo electrónico correctamente
- Agrega mensajes de error más claros
- Actualiza tests relacionados

Closes #123"

# Ejemplo 2: Commit amend para corrección
git commit -m "Agrega función de login"
# Oops, olvidé un archivo
git add archivo-olvidado.js
git commit --amend --no-edit

# Ejemplo 3: Commit con firma GPG
git commit -S -m "Feature: añade autenticación OAuth"
```

#### **Convenciones de Mensajes (Conventional Commits)**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Tipos comunes:**
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (sin afectar código)
- `refactor:` Reestructuración de código
- `test:` Añade o modifica tests
- `chore:` Tareas de mantenimiento

**Ejemplo completo:**
```bash
git commit -m "feat(auth): implementa autenticación con Google

- Añade botón de login con Google
- Implementa callback handling
- Guarda tokens de forma segura

BREAKING CHANGE: Se requiere nueva variable de entorno GOOGLE_CLIENT_ID"
```

#### **Parámetros Avanzados**
```bash
# Commit vacío (útil para triggers CI/CD)
git commit --allow-empty -m "trigger: inicia pipeline de despliegue"

# Commit saltando hooks
git commit --no-verify -m "Commit rápido sin validaciones"

# Commit con fecha específica
git commit --date="2024-01-15T10:30:00" -m "Backdate commit"

# Commit firmando con clave específica
git commit -S --gpg-sign=key-id -m "Commit firmado"
```

### **2. `git branch` - Gestión de Ramas**

#### **Concepto**
Una rama es un **puntero móvil** a un commit específico. Permite desarrollar funcionalidades de forma aislada sin afectar la rama principal.

#### **Uso Básico**
```bash
# Listar ramas locales
git branch

# Listar ramas locales y remotas
git branch -a

# Crear nueva rama
git branch nombre-rama

# Eliminar rama (solo si está mergeada)
git branch -d nombre-rama

# Eliminar rama forzadamente
git branch -D nombre-rama
```

#### **Ejemplos Prácticos**
```bash
# Ejemplo 1: Flujo de trabajo con ramas
# Crear rama para nueva feature
git branch feature/nueva-api
git checkout feature/nueva-api

# Equivalente en un paso
git checkout -b feature/nueva-api

# Trabajar en la feature...
git add .
git commit -m "Implementa endpoint /api/v1/users"

# Listar ramas con información adicional
git branch -vv
# Muestra:
# * feature/nueva-api a1b2c3d [origin/main] Implementa endpoint

# Ejemplo 2: Ramas remotas
# Traer todas las ramas remotas
git fetch --all

# Crear rama local desde rama remota
git checkout -b hotfix origin/hotfix

# Configurar rama upstream
git branch -u origin/feature/nueva-api
```

#### **Workflows Avanzados con Ramas**

**Git Flow:**
```bash
# Rama principal de desarrollo
git branch develop
git checkout develop

# Rama para release
git checkout -b release/1.2.0

# Rama para hotfix desde main
git checkout -b hotfix/critical-bug main
```

**GitHub Flow (más simple):**
```bash
# Todo desde main
git checkout main
git pull origin main
git checkout -b feature-branch

# Desarrollo...
git commit -m "Agrega feature"
git push origin feature-branch
# Crear Pull Request en GitHub
```

#### **Parámetros Avanzados**
```bash
# Crear rama desde commit específico
git branch nueva-rama a1b2c3d4

# Renombrar rama actual
git branch -m nuevo-nombre

# Mover rama a commit diferente
git branch -f nombre-rama nuevo-commit

# Listar ramas mergeadas/no mergeadas
git branch --merged    # Ramas mergeadas con la actual
git branch --no-merged # Ramas no mergeadas

# Crear rama con tracking automático
git checkout -b feature/x --track origin/develop

# Ver última modificación por rama
git for-each-ref --sort=-committerdate refs/heads/ --format='%(refname:short) %(committerdate:relative)'
```

### **3. `git checkout` - Navegación entre Estados**

#### **Concepto**
`git checkout` permite **moverse entre ramas, commits y archivos**, restaurando el estado del working directory.

#### **Uso Básico**
```bash
# Cambiar a rama existente
git checkout nombre-rama

# Crear y cambiar a nueva rama
git checkout -b nueva-rama

# Restaurar archivo del último commit
git checkout -- archivo.txt

# Ver estado en commit específico (detached HEAD)
git checkout a1b2c3d4
```

#### **Ejemplos Prácticos**
```bash
# Ejemplo 1: Trabajo con archivos
# Descartar cambios no staged
git checkout -- archivo-daniado.js

# Descartar cambios staged (dos pasos)
git reset HEAD archivo-modificado.py
git checkout -- archivo-modificado.py

# Restaurar archivo desde rama específica
git checkout otra-rama -- config/database.yml

# Ejemplo 2: Trabajo con commits
# Ver proyecto en estado pasado
git checkout HEAD~3  # 3 commits atrás

# Volver a rama después de detached HEAD
git checkout main

# Crear rama desde detached HEAD
git checkout -b nueva-rama-desde-commit

# Ejemplo 3: Trabajo con paths
# Cambiar múltiples archivos
git checkout develop -- src/**/*.js tests/**/*.js
```

#### **Detached HEAD y Recuperación**
```bash
# Situación: Trabajando en detached HEAD
git checkout a1b2c3d4
# Hacer algunos cambios...
git add .
git commit -m "Cambios en estado antiguo"

# Recuperación opción 1: Crear rama
git branch salvacion-commits
git checkout main

# Recuperación opción 2: Reflog
git reflog
# Encontrar commit: a1b2c3d4 HEAD@{2}: commit: Cambios en estado antiguo
git checkout -b rescate a1b2c3d4
```

#### **Parámetros Avanzados**
```bash
# Checkout forzado (descarta cambios locales)
git checkout -f nombre-rama

# Checkout con merge (preserva cambios locales)
git checkout -m otra-rama

# Checkout de archivo ignorando index
git checkout --ours archivo-conflicto.js
git checkout --theirs archivo-conflicto.js

# Checkout de todo el árbol desde commit
git checkout a1b2c3d4 -- .

# Checkout interactivo por hunk
git checkout -p archivo-modificado
# Para cada hunk: y/n/q etc.
```

### **4. `git cherry-pick` - Aplicar Commits Selectivos**

#### **Concepto**
`git cherry-pick` **aplica un commit específico de otra rama** a tu rama actual, creando un nuevo commit con los mismos cambios.

#### **Uso Básico**
```bash
# Aplicar un commit específico
git cherry-pick a1b2c3d4

# Aplicar rango de commits
git cherry-pick inicio..fin

# Aplicar sin hacer commit automático
git cherry-pick -n a1b2c3d4
```

#### **Ejemplos Prácticos**
```bash
# Ejemplo 1: Portar fix a múltiples ramas
# En main: se hizo fix crítico
git log --oneline
# a1b2c3d4 fix: corrige vulnerabilidad XSS

# Portar a rama de release
git checkout release/1.0
git cherry-pick a1b2c3d4

# Ejemplo 2: Múltiples commits
# Seleccionar commits específicos
git cherry-pick a1b2c3d4 b2c3d4e5 c3d4e5f6

# Ejemplo 3: Con conflictos
git cherry-pick conflictico-commit
# Si hay conflictos, resolver y:
git add archivos-resueltos
git cherry-pick --continue

# O abortar si es necesario
git cherry-pick --abort
```

#### **Casos de Uso Avanzados**
```bash
# Portar feature sin todo el historial
git cherry-pick -x feature-start..feature-end

# Editando mensaje del commit
git cherry-pick -e a1b2c3d4

# Sin commit automático (útil para múltiples picks)
git cherry-pick -n a1b2c3d4 b2c3d4e5
# Revisar cambios...
git commit -m "Port fixes de seguridad"

# Con firma
git cherry-pick -S a1b2c3d4
```

#### **Parámetros Avanzados**
```bash
# Cherry-pick manteniendo autor original
git cherry-pick -x a1b2c3d4
# Añade: (cherry picked from commit a1b2c3d4)

# Con estrategia de merge específica
git cherry-pick -X theirs a1b2c3d4

# Saltando commits que ya están aplicados
git cherry-pick --ff a1b2c3d4..b2c3d4e5

# Cherry-pick desde PR (GitHub)
# Obtener commits de PR
git fetch origin pull/123/head:pr-123
git cherry-pick pr-123~2..pr-123
```

### **5. `git reset` - Reiniciar el Estado**

#### **Concepto**
`git reset` **mueve la rama actual a un commit diferente**, con diferentes niveles de afectación al working directory.

#### **Tres Modos Principales**
```bash
# Soft: solo mueve HEAD, deja staging y working intactos
git reset --soft HEAD~1

# Mixed (default): mueve HEAD y staging, deja working intacto
git reset HEAD~1
git reset --mixed HEAD~1

# Hard: mueve HEAD, staging y working (¡PELIGROSO!)
git reset --hard HEAD~1
```

#### **Ejemplos Prácticos**
```bash
# Ejemplo 1: Deshacer commit sin perder cambios
git reset --soft HEAD~1
# Los cambios quedan en staging

git reset HEAD~1
# Los cambios quedan en working directory

# Ejemplo 2: Deshacer múltiples commits
git reset --hard HEAD~3
# ¡Cuidado! Pierdes 3 commits completamente

# Ejemplo 3: Limpiar staging area
git reset HEAD archivo.txt  # Quita del staging
git reset HEAD .            # Quita todos

# Ejemplo 4: Reset a commit específico
git reset --hard a1b2c3d4
git reset --soft origin/main
```

#### **Uso Avanzado con Paths**
```bash
# Reset parcial de archivos
git reset HEAD~1 -- archivo1.js archivo2.py

# Reset manteniendo cambios en working
git reset --keep HEAD~1

# Reset interactivo
git reset -p HEAD~1
# Seleccionar hunks para reset
```

#### **Recuperación después de Reset Hard**
```bash
# ¡Acabas de hacer reset --hard y perdiste commits!
git reflog
# Buscar el commit perdido
# Ejemplo: a1b2c3d4 HEAD@{1}: commit: Feature importante

# Recuperar
git checkout -b recuperacion a1b2c3d4
# O
git reset --hard a1b2c3d4
```

#### **Parámetros Avanzados**
```bash
# Reset con merge (para unmerged paths)
git reset --merge HEAD~1

# Reset manteniendo cambios no commitados
git reset --keep HEAD~1

# Reset específico de archivo desde commit
git reset HEAD~2 -- config/database.yml

# Ver qué haría reset sin hacerlo
git reset --dry-run HEAD~1
```

### **6. `git revert` - Revertir Commits de Forma Segura**

#### **Concepto**
`git revert` **crea un nuevo commit** que deshace los cambios de un commit anterior. Es la forma **segura** de deshacer cambios en historial compartido.

#### **Uso Básico**
```bash
# Revertir un commit específico
git revert a1b2c3d4

# Revertir el último commit
git revert HEAD

# Revertir múltiples commits
git revert inicio..fin
```

#### **Ejemplos Prácticos**
```bash
# Ejemplo 1: Revertir commit problemático
# Commit que introdujo bug
git log --oneline
# a1b2c3d4 feat: añade función experimental

git revert a1b2c3d4
# Abre editor para mensaje (por defecto: "Revert 'feat: añade...'")

# Ejemplo 2: Revertir sin abrir editor
git revert --no-edit a1b2c3d4

# Ejemplo 3: Revertir merge commit
git revert -m 1 merge-commit-hash
# -m 1: mantiene rama principal
# -m 2: mantiene rama mergeada

# Ejemplo 4: Revertir rango
git revert HEAD~3..HEAD
# Revierte últimos 3 commits
```

#### **Manejo de Conflictos**
```bash
# Si hay conflictos al revertir
git revert conflictico-commit
# Resolver conflictos manualmente
git add archivos-resueltos
git revert --continue

# O abortar
git revert --abort

# Omitir commit si ya fue revertido
git revert --skip
```

#### **Parámetros Avanzados**
```bash
# Revertir con estrategia específica
git revert -X theirs a1b2c3d4
git revert -X ours a1b2c3d4

# Revertir sin commit automático
git revert -n a1b2c3d4
# Revisar cambios...
git commit -m "Revert: razón específica"

# Revertir y firmar commit
git revert -S a1b2c3d4

# Revertir con GPG signing
git revert --gpg-sign a1b2c3d4
```

### **7. `git rebase` - Reorganizar Historial**

#### **Concepto**
`git rebase` **re-aplica commits** sobre una base diferente, permitiendo reescribir historial de forma limpia.

#### **Uso Básico**
```bash
# Rebase interactivo (últimos 3 commits)
git rebase -i HEAD~3

# Rebase sobre rama actualizada
git rebase main

# Continuar rebase después de conflicto
git rebase --continue
```

#### **Ejemplos Prácticos**
```bash
# Ejemplo 1: Actualizar feature branch
git checkout feature/nueva-api
git rebase main
# Resolver conflictos si los hay
git add .
git rebase --continue

# Ejemplo 2: Rebase interactivo
git rebase -i HEAD~5
# Editor se abre con:
# pick a1b2c3d4 feat: añade endpoint
# pick b2c3d4e5 fix: corrige bug
# pick c3d4e5f6 docs: actualiza README

# Cambiar a:
# pick a1b2c3d4 feat: añade endpoint
# fixup b2c3d4e5 fix: corrige bug  # Combina con anterior
# reword c3d4e5f6 docs: actualiza README  # Edita mensaje

# Ejemplo 3: Squash commits
git rebase -i HEAD~3
# Cambiar todos menos el primero a "squash"
```

#### **Comandos del Rebase Interactivo**
```
pick    = Usar commit
reword  = Usar commit, pero editar mensaje
edit    = Usar commit, pero parar para amend
squash  = Usar commit, pero combinar con anterior
fixup   = Como squash, pero descartar mensaje
drop    = Eliminar commit
exec    = Ejecutar comando shell
break   = Parar aquí (continuar con git rebase --continue)
```

#### **Parámetros Avanzados**
```bash
# Rebase preservando merges
git rebase -p main

# Rebase con estrategia de merge
git rebase -X theirs main

# Rebase sin auto-stash
git rebase --no-autostash main

# Rebase solo sobre commits específicos
git rebase --onto nueva-base vieja-base feature-branch

# Rebase manteniendo fechas originales
git rebase --committer-date-is-author-date main
```

#### **Rebase vs Merge**
```bash
# Merge: mantiene historial completo
git checkout main
git merge feature-branch
# Crea merge commit

# Rebase: historial lineal
git checkout feature-branch
git rebase main
git checkout main
git merge feature-branch
# Fast-forward (sin merge commit)
```

### **8. `git merge` - Combinar Ramas**

#### **Concepto**
`git merge` **integra cambios de una rama** en la rama actual, combinando historiales.

#### **Uso Básico**
```bash
# Merge desde rama actual
git merge otra-rama

# Merge con mensaje específico
git merge -m "Merge feature X" feature/x

# Abortar merge con conflictos
git merge --abort
```

#### **Ejemplos Prácticos**
```bash
# Ejemplo 1: Merge simple
git checkout main
git merge feature/nueva-api

# Ejemplo 2: Merge con squash
git merge --squash feature/muchos-commits
# Combina todos los commits en uno
git commit -m "Feature completa: nueva API"

# Ejemplo 3: Merge commit explícito (no fast-forward)
git merge --no-ff feature/x
# Siempre crea merge commit

# Ejemplo 4: Resolver conflictos
git merge conflictica-rama
# Si hay conflictos, editar archivos
git add archivos-resueltos
git commit  # Completa el merge
```

#### **Estrategias de Merge**
```bash
# Recursiva (default)
git merge -s recursive feature

# Ours (toma nuestra versión en conflictos)
git merge -s ours otra-rama

# Octopus (múltiples ramas)
git merge -s octopus rama1 rama2 rama3

# Resolve (más simple, para una rama)
git merge -s resolve feature
```

#### **Parámetros Avanzados**
```bash
# Verificar que se puede hacer merge
git merge --no-commit --no-ff otra-rama
# Si todo bien:
git merge --continue
# Si no:
git merge --abort

# Merge con verificación de GPG
git merge --verify-signatures otra-rama

# Merge editando mensaje
git merge -e otra-rama

# Merge con estrategia específica para archivos
git merge -X patience otra-rama
git merge -X diff-algorithm=histogram otra-rama

# Log después del merge
git log --oneline --graph --all
```

## Git Avanzado: Más Allá de los Comandos Básicos

### **Conceptos Avanzados**

#### **El Árbol de Git**
Git almacena todo como objetos en un grafo dirigido acíclico (DAG):
- **Blobs:** Contenido de archivos
- **Trees:** Directorios (referencias a blobs y otros trees)
- **Commits:** Instantáneas con autor, mensaje, y referencia a tree padre
- **Tags:** Referencias permanentes a commits

```bash
# Ver objetos
git cat-file -p a1b2c3d4
git ls-tree HEAD
```

#### **Referencias (Refs)**
- **HEAD:** Commit actual
- **refs/heads/:** Ramas locales
- **refs/remotes/:** Ramas remotas
- **refs/tags/:** Tags

```bash
# Ver todas las refs
git show-ref

# Ver contenido de HEAD
cat .git/HEAD
```

#### **Stashing**
```bash
# Guardar cambios temporales
git stash push -m "WIP: trabajo en progreso"

# Listar stashes
git stash list

# Aplicar stash
git stash apply stash@{0}

# Crear rama desde stash
git stash branch nueva-rama stash@{1}

# Stash interactivo
git stash -p
```

### **Hooks de Git**
Scripts que se ejecutan automáticamente en eventos específicos.

#### **Ejemplos Útiles**
```bash
# .git/hooks/pre-commit
#!/bin/bash
# Ejecutar tests antes de commit
npm test

# .git/hooks/pre-push
#!/bin/bash
# Validar que todos los commits están firmados
for commit in $(git log @{u}.. --format="%H"); do
  if ! git verify-commit $commit 2>/dev/null; then
    echo "Commit $commit no está firmado"
    exit 1
  fi
done
```

### **Git Worktrees**
Trabajar con múltiples ramas simultáneamente.
```bash
# Crear nuevo worktree
git worktree add ../mi-proyecto-feature feature/nueva

# Listar worktrees
git worktree list

# Eliminar worktree
git worktree remove ../mi-proyecto-feature
```

### **Bisect: Encontrar Bugs Binariamente**
```bash
# Iniciar bisect
git bisect start
git bisect bad HEAD
git bisect good v1.0.0

# Probar commit actual
# Si hay bug:
git bisect bad
# Si no hay bug:
git bisect good

# Finalizar
git bisect reset
```

### **Submodules y Subtrees**
```bash
# Submodules (repositorios dentro de repositorios)
git submodule add https://github.com/lib/lib.git
git submodule update --init --recursive

# Subtrees (merge de repositorios)
git subtree add --prefix=vendor/lib https://github.com/lib/lib.git main --squash
git subtree pull --prefix=vendor/lib https://github.com/lib/lib.git main --squash
```

## Configuración Profesional de Git

### **Archivo .gitconfig**
```ini
[user]
    name = Tu Nombre
    email = tu.email@empresa.com
    signingkey = ABCD1234

[core]
    editor = nano
    autocrlf = input
    excludesfile = ~/.gitignore_global

[commit]
    gpgsign = true

[push]
    default = current

[pull]
    rebase = true

[merge]
    conflictstyle = diff3

[alias]
    st = status
    ci = commit
    br = branch
    co = checkout
    df = diff
    lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
    lol = log --graph --decorate --pretty=oneline --abbrev-commit --all
    unstage = reset HEAD --
    last = log -1 HEAD
    undo = reset --soft HEAD~1
```

### **Git Attributes**
```gitattributes
# .gitattributes
*.js    diff=javascript
*.py    diff=python
*.java  diff=java

# Diferencias específicas
*.sql   diff=sql

# Normalización de línea finales
*.txt   text
*.js    text eol=lf
*.bat   text eol=crlf

# Archivos binarios
*.png   binary
*.jpg   binary
*.pdf   binary

# Merge estrategias
database.yml merge=ours
```

### **Git Ignore Patterns**
```gitignore
# .gitignore profesional
# Dependencias
node_modules/
vendor/
*.gem

# Entornos
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*

# Sistemas operativos
.DS_Store
Thumbs.db

# IDEs
.vscode/
.idea/
*.swp
*.swo

# Build artifacts
dist/
build/
*.exe
*.dll
```

## Flujos de Trabajo (Workflows)

### **Git Flow**
```bash
# Inicializar
git flow init

# Feature
git flow feature start nueva-funcionalidad
git flow feature finish nueva-funcionalidad

# Release
git flow release start 1.2.0
git flow release finish 1.2.0

# Hotfix
git flow hotfix start critical-bug
git flow hotfix finish critical-bug
```

### **GitHub Flow**
```bash
# Siempre desde main
git checkout main
git pull origin main

# Feature branch
git checkout -b feature/descripcion
# Desarrollo...
git push origin feature/descripcion
# Crear Pull Request en GitHub

# Merge via PR (squash o merge)
```

### **GitLab Flow**
```bash
# Ramas environment-based
main
  └── staging
        └── production

# Merge requests con approval rules
git checkout -b feature
# Desarrollo...
git push origin feature
# Merge request con pipelines
```

## Seguridad en Git

### **Commits Firmados**
```bash
# Configurar GPG
gpg --gen-key
gpg --list-secret-keys --keyid-format LONG

# Configurar Git
git config --global user.signingkey ABCDEF1234567890
git config --global commit.gpgsign true

# Commit firmado
git commit -S -m "Mensaje firmado"

# Verificar firma
git log --show-signature
```

### **Branch Protection Rules**
```yaml
# GitHub .github/branch-protection.yml
branch_protection_rules:
  - pattern: "main"
    required_status_checks:
      strict: true
      contexts:
        - "ci/build"
        - "ci/test"
    required_pull_request_reviews:
      required_approving_review_count: 2
      dismiss_stale_reviews: true
    required_signatures: true
    enforce_admins: false
```

### **Secret Scanning**
```bash
# Pre-commit hook para secrets
# .git/hooks/pre-commit
#!/bin/bash
if git diff --cached --name-only | xargs grep -E "(password|token|secret|key)[=:]\s*\S+"; then
    echo "⚠️  Posible secreto detectado en cambios"
    exit 1
fi
```

## Performance y Optimización

### **Repositorios Grandes**
```bash
# Clone shallow
git clone --depth 1 https://github.com/proyecto/grande.git

# Partial clone
git clone --filter=blob:none https://github.com/proyecto/grande.git

# Sparse checkout
git sparse-checkout init --cone
git sparse-checkout set src/libs

# GC y mantenimiento
git gc --aggressive --prune=now
git repack -a -d --depth=250 --window=250
```

### **Búsqueda Eficiente**
```bash
# Buscar en código
git grep "palabra clave"

# Buscar en historial
git log -S "función eliminada" --oneline

# Buscar por autor
git log --author="nombre" --since="2024-01-01"

# Blame con contexto
git blame -L 10,20 archivo.js
```

## Herramientas y Extensiones

### **GUI Clients**
- **GitKraken:** Excelente visualización
- **SourceTree:** Gratis de Atlassian
- **GitHub Desktop:** Simple para GitHub
- **Git Tower:** Pago pero muy completo

### **CLI Enhancements**
```bash
# tig - navegador TUI
sudo apt install tig
tig

# diff-so-fancy - diffs bonitos
npm install -g diff-so-fancy
git config --global core.pager "diff-so-fancy | less --tabs=4 -RFX"

# git-extras - comandos adicionales
brew install git-extras
git summary
git effort
git ignore
```

### **Integraciones IDE**
- **VS Code:** GitLens extensión
- **IntelliJ:** Integración nativa excelente
- **Vim:** Fugitive.vim
- **Emacs:** Magit

## Resolución de Problemas Comunes

### **"Perdí mis cambios!"**
```bash
# Buscar en reflog
git reflog

# Buscar commits perdidos
git fsck --lost-found

# Buscar por mensaje
git log --all --grep="parte del mensaje"
```

### **Merge Conflict Complejo**
```bash
# Usar herramientas de merge
git mergetool

# Ver conflictos
git diff --name-only --diff-filter=U

# Abortar todo
git merge --abort
git rebase --abort

# Reset a estado seguro
git reset --hard ORIG_HEAD
```

### **Commit en Rama Equivocada**
```bash
# 1. Crear parche
git format-patch HEAD~1

# 2. Reset branch original
git reset --hard HEAD~1

# 3. Cambiar a branch correcta
git checkout branch-correcta

# 4. Aplicar parche
git am 0001-commit.patch
```

## Checklist de Buenas Prácticas

### **Antes de Cada Commit**
- [ ] `git status` ver estado
- [ ] `git diff --cached` ver qué se va a commit
- [ ] Tests pasan localmente
- [ ] Mensaje sigue convenciones
- [ ] No hay secrets en el código

### **Antes de Push**
- [ ] `git pull --rebase` actualizar local
- [ ] `git log --oneline origin/main..` ver qué se sube
- [ ] CI pasa localmente (si es posible)
- [ ] Review propio del código

### **Mantenimiento Regular**
- [ ] `git gc --auto` limpieza
- [ ] `git remote prune origin` limpiar ramas remotas
- [ ] Actualizar hooks de seguridad
- [ ] Review configuración global

## Conclusión

Git es una herramienta poderosa que, cuando se domina, transforma completamente el flujo de trabajo de desarrollo. La clave está en:

1. **Entender los conceptos fundamentales:** Commits, ramas, merging
2. **Practicar los comandos esenciales:** commit, branch, checkout, merge
3. **Aprender técnicas avanzadas:** rebase, cherry-pick, bisect
4. **Configurar tu entorno:** aliases, hooks, herramientas
5. **Seguir buenas prácticas:** mensajes claros, historial limpio

Recuerda: **Git no es solo un sistema de control de versiones, es una herramienta de colaboración.** Domina Git y dominarás el desarrollo de software moderno.

### **Recursos para Aprender Más**
- **Pro Git Book:** https://git-scm.com/book
- **Git Visualizer:** https://git-school.github.io/visualizing-git/
- **Oh Shit, Git!:** https://ohshitgit.com/
- **Git Flight Rules:** https://github.com/k88hudson/git-flight-rules

**"Git no es difícil, solo es diferente. Una vez que entiendas su modelo mental, todo tiene sentido."** - Scott Chacon, cofundador de GitHub
