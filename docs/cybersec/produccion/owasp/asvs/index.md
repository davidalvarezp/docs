# OWASP Application Security Verification Standard (ASVS)

## Introducción al OWASP ASVS

### **¿Qué es el ASVS?**
El **OWASP Application Security Verification Standard (ASVS)** es un estándar de seguridad de aplicaciones que proporciona una base para pruebas de seguridad, herramientas de evaluación y servicios de verificación. Esencialmente, es una **lista de requisitos de seguridad** que las aplicaciones deben cumplir.

### **Propósito y Objetivos**
- **Establecer un estándar medible** para la seguridad de aplicaciones
- **Proporcionar guías** para desarrolladores, arquitectos, pentesters y auditores
- **Reducir inconsistencias** en evaluaciones de seguridad
- **Mejorar la calidad** del software seguro

### **Audiencia Objetivo**
1. **Desarrolladores:** Para entender requisitos de seguridad
2. **Arquitectos de Software:** Para diseñar aplicaciones seguras
3. **Evaluadores de Seguridad:** Para realizar pruebas consistentes
4. **Organizaciones:** Para establecer políticas de seguridad
5. **Clientes:** Para verificar la seguridad de proveedores

## Estructura del ASVS

### **Niveles de Verificación**

#### **Nivel 1: Básico (Opportunistic)**
- **Objetivo:** Protección básica contra vulnerabilidades conocidas
- **Para:** Aplicaciones con pocos requerimientos de seguridad
- **Enfoque:** OWASP Top 10, controles esenciales
- **Ejemplos:** Aplicaciones internas, baja exposición

#### **Nivel 2: Standard (Standard)**
- **Objetivo:** Protección estándar para la mayoría de aplicaciones
- **Para:** Aplicaciones que manejan datos sensibles
- **Enfoque:** Protección contra atacantes con habilidades básicas
- **Ejemplos:** E-commerce, aplicaciones corporativas

#### **Nivel 3: Avanzado (Advanced)**
- **Objetivo:** Protección máxima para aplicaciones críticas
- **Para:** Aplicaciones con los más altos requerimientos de seguridad
- **Enfoque:** Protección contra atacantes avanzados
- **Ejemplos:** Banca online, salud, gobierno, infraestructura crítica

### **Categorías del ASVS**

| **Categoría** | **Descripción** | **Ejemplos de Controles** |
|---------------|-----------------|---------------------------|
| **V1: Arquitectura, Diseño y Modelado de Amenazas** | Requisitos de diseño seguro | Modelado de amenazas, segregación, minimización |
| **V2: Autenticación** | Verificación de identidad | MFA, gestión de sesiones, gestión de credenciales |
| **V3: Gestión de Sesiones** | Control de sesiones de usuario | Generación de tokens, timeout, renovación |
| **V4: Control de Acceso** | Autorización y permisos | RBAC, verificaciones de autorización |
| **V5: Validación, Sanitización y Codificación** | Protección contra inyecciones | Input validation, output encoding, sanitización |
| **V6: Criptografía** | Protección de datos | Algoritmos seguros, gestión de claves, TLS |
| **V7: Manejo de Errores y Logging** | Registro y manejo seguro | Logging seguro, manejo de errores, no disclosure |
| **V8: Protección de Datos** | Protección de información sensible | Encriptación, máscara, retención, destrucción |
| **V9: Comunicaciones** | Seguridad en comunicaciones | TLS, certificados, headers de seguridad |
| **V10: APIs** | Seguridad en APIs | Rate limiting, validación, autenticación API |
| **V11: Configuración** | Configuración segura | Hardening, gestión de secretos, headers HTTP |
| **V12: Operaciones** | Seguridad operacional | Backup, monitorización, respuesta a incidentes |
| **V13: SDLC** | Seguridad en ciclo de vida | Code review, SAST, DAST, threat modeling |

## Guía Detallada por Categoría

### **V1: Arquitectura, Diseño y Modelado de Amenazas**

#### **Requisitos Clave (Nivel 2)**
```yaml
V1.1.2:
  descripcion: "La aplicación tiene un modelo de amenazas documentado"
  implementacion: |
    - Realizar threat modeling periódicamente
    - Documentar activos, amenazas y contramedidas
    - Actualizar con cada cambio significativo

V1.2.2:
  descripcion: "Segregación entre componentes de diferente nivel de confianza"
  implementacion: |
    - Separar frontend, backend, bases de datos
    - Usar diferentes cuentas de servicio
    - Implementar network segmentation

V1.4.2:
  descripcion: "Principio de mínimo privilegio"
  implementacion: |
    - Cada componente solo acceso necesario
    - Usar cuentas de servicio específicas
    - Revisar permisos regularmente
```

#### **Implementación Práctica**
```python
# Ejemplo: Arquitectura con segregación
class ArquitecturaSegura:
    def __init__(self):
        self.components = {
            'frontend': {
                'trust_level': 'low',
                'access': ['presentation']
            },
            'backend': {
                'trust_level': 'medium',
                'access': ['business_logic', 'database']
            },
            'database': {
                'trust_level': 'high',
                'access': ['data_storage']
            }
        }
    
    def validate_access(self, component, resource):
        """Verificar acceso según modelo de amenazas"""
        if component not in self.components:
            return False
        
        if resource not in self.components[component]['access']:
            raise SecurityViolation(
                f"Componente {component} no tiene acceso a {resource}"
            )
        return True

# Threat Modeling Tool básico
class ThreatModel:
    def __init__(self):
        self.threats = []
        self.mitigations = {}
    
    def add_threat(self, component, threat, impact, likelihood):
        self.threats.append({
            'component': component,
            'threat': threat,
            'impact': impact,
            'likelihood': likelihood,
            'risk': impact * likelihood
        })
    
    def prioritize_threats(self):
        return sorted(self.threats, key=lambda x: x['risk'], reverse=True)
    
    def generate_report(self):
        report = "# Threat Model Report\n\n"
        for threat in self.prioritize_threats():
            report += f"## {threat['component']}: {threat['threat']}\n"
            report += f"- Risk: {threat['risk']}\n"
            report += f"- Mitigation: {self.mitigations.get(threat['threat'], 'Pending')}\n\n"
        return report
```

### **V2: Autenticación**

#### **Requisitos Clave (Nivel 2)**
```yaml
V2.1.2:
  descripcion: "Verificar que todas las páginas y recursos requieran autenticación"
  implementacion: |
    - Default deny para recursos no autenticados
    - Lista blanca de recursos públicos
    - Verificar en middleware/firewall

V2.2.2:
  descripcion: "Implementar MFA para acceso privilegiado"
  implementacion: |
    - Requerir MFA para administradores
    - Soporte TOTP, FIDO2, SMS backup
    - Registro y recuperación segura

V2.3.2:
  descripcion: "Gestión segura de credenciales"
  implementacion: |
    - Almacenar con bcrypt/Argon2
    - Política de contraseñas fuertes
    - No exponer en logs o respuestas
```

#### **Implementación Práctica**
```python
# Sistema de autenticación seguro
import bcrypt
import pyotp
from datetime import datetime, timedelta
import hashlib
import secrets

class SecureAuthentication:
    def __init__(self):
        self.failed_attempts = {}
        self.lockout_threshold = 5
        self.lockout_duration = timedelta(minutes=15)
    
    def hash_password(self, password):
        """Hash seguro con bcrypt"""
        salt = bcrypt.gensalt(rounds=12)
        return bcrypt.hashpw(password.encode(), salt)
    
    def verify_password(self, password, hashed):
        """Verificar contraseña"""
        return bcrypt.checkpw(password.encode(), hashed)
    
    def validate_password_policy(self, password):
        """Política de contraseñas ASVS compliant"""
        if len(password) < 12:
            return False, "Password must be at least 12 characters"
        
        checks = {
            'uppercase': any(c.isupper() for c in password),
            'lowercase': any(c.islower() for c in password),
            'digit': any(c.isdigit() for c in password),
            'special': any(not c.isalnum() for c in password)
        }
        
        if not all(checks.values()):
            return False, "Password must include uppercase, lowercase, digit and special character"
        
        # Rechazar contraseñas comunes
        common_passwords = {'password123', '12345678', 'qwerty123'}
        if password in common_passwords:
            return False, "Password is too common"
        
        return True, "Password meets policy"
    
    def setup_mfa(self, user_id):
        """Configurar MFA TOTP"""
        secret = pyotp.random_base32()
        totp = pyotp.TOTP(secret)
        
        # Generar QR code para app authenticator
        provisioning_uri = totp.provisioning_uri(
            name=user_id,
            issuer_name="SecureApp"
        )
        
        return {
            'secret': secret,
            'provisioning_uri': provisioning_uri,
            'backup_codes': self.generate_backup_codes()
        }
    
    def generate_backup_codes(self):
        """Generar códigos de backup para MFA"""
        return [secrets.token_hex(4).upper() for _ in range(10)]
    
    def verify_mfa(self, secret, token):
        """Verificar token MFA"""
        totp = pyotp.TOTP(secret)
        return totp.verify(token, valid_window=1)  # Allow 30s drift
    
    def track_failed_attempt(self, username, ip_address):
        """Seguimiento de intentos fallidos"""
        key = f"{username}:{ip_address}"
        
        if key not in self.failed_attempts:
            self.failed_attempts[key] = []
        
        self.failed_attempts[key].append(datetime.now())
        
        # Limpiar intentos antiguos
        cutoff = datetime.now() - timedelta(minutes=5)
        self.failed_attempts[key] = [
            t for t in self.failed_attempts[key] if t > cutoff
        ]
        
        # Verificar si excede límite
        if len(self.failed_attempts[key]) >= self.lockout_threshold:
            return False, "Account temporarily locked"
        
        return True, "Continue authentication"

# Middleware de autenticación para API
class AuthMiddleware:
    def __init__(self, app):
        self.app = app
    
    def __call__(self, environ, start_response):
        # Verificar autenticación para todas las rutas
        path = environ.get('PATH_INFO', '')
        
        # Lista blanca de rutas públicas
        public_paths = ['/login', '/register', '/health', '/public/']
        
        if not any(path.startswith(p) for p in public_paths):
            # Verificar token de autenticación
            auth_header = environ.get('HTTP_AUTHORIZATION', '')
            
            if not auth_header.startswith('Bearer '):
                start_response('401 Unauthorized', [
                    ('WWW-Authenticate', 'Bearer realm="SecureAPI"')
                ])
                return [b'Authentication required']
            
            token = auth_header[7:]
            if not self.validate_token(token):
                start_response('403 Forbidden', [])
                return [b'Invalid token']
        
        return self.app(environ, start_response)
    
    def validate_token(self, token):
        """Validar JWT token"""
        try:
            # Verificar firma, expiración, issuer
            import jwt
            payload = jwt.decode(
                token,
                settings.SECRET_KEY,
                algorithms=['HS256'],
                options={'verify_exp': True}
            )
            
            # Verificar claims adicionales
            required_claims = ['sub', 'exp', 'iat', 'iss']
            if not all(claim in payload for claim in required_claims):
                return False
            
            return True
        except jwt.InvalidTokenError:
            return False
```

### **V3: Gestión de Sesiones**

#### **Requisitos Clave (Nivel 2)**
```yaml
V3.1.2:
  descripcion: "Generar identificadores de sesión seguros"
  implementacion: |
    - Usar CSPRNG para session IDs
    - Longitud mínima 128 bits
    - Entropía suficiente

V3.2.2:
  descripcion: "Invalidación de sesión en logout"
  implementacion: |
    - Destruir sesión server-side
    - Limpiar cookies cliente
    - Invalidar tokens asociados

V3.3.2:
  descripcion: "Timeout de sesión configurable"
  implementacion: |
    - Inactividad: 15-30 minutos
    - Absoluto: 4-8 horas
    - Renovación con actividad
```

#### **Implementación Práctica**
```python
# Gestor de sesiones seguro
import os
import json
import base64
import hmac
import hashlib
from datetime import datetime, timedelta
from cryptography.fernet import Fernet
import secrets

class SecureSessionManager:
    def __init__(self):
        self.session_store = {}  # En producción usar Redis/Memcached
        self.session_key = Fernet.generate_key()
        self.cipher = Fernet(self.session_key)
        
        # Configuración ASVS compliant
        self.config = {
            'session_id_length': 32,  # 256 bits
            'inactive_timeout': timedelta(minutes=15),
            'absolute_timeout': timedelta(hours=4),
            'renewal_threshold': timedelta(minutes=10)
        }
    
    def create_session(self, user_id, user_agent, ip_address):
        """Crear nueva sesión segura"""
        # Generar session ID criptográficamente seguro
        session_id = secrets.token_urlsafe(self.config['session_id_length'])
        
        # Crear datos de sesión
        session_data = {
            'user_id': user_id,
            'created_at': datetime.now().isoformat(),
            'last_activity': datetime.now().isoformat(),
            'user_agent': user_agent,
            'ip_address': ip_address,
            'csrf_token': secrets.token_urlsafe(32)
        }
        
        # Almacenar sesión
        self.session_store[session_id] = session_data
        
        # Crear cookie segura
        cookie_value = self._encrypt_session_data(session_id, session_data)
        
        return {
            'session_id': session_id,
            'cookie': cookie_value,
            'expires': datetime.now() + self.config['absolute_timeout']
        }
    
    def validate_session(self, session_id, cookie_value, user_agent, ip_address):
        """Validar sesión existente"""
        if session_id not in self.session_store:
            return False, "Session not found"
        
        session_data = self.session_store[session_id]
        
        # Verificar integridad de la cookie
        if not self._verify_cookie(session_id, session_data, cookie_value):
            return False, "Cookie tampered"
        
        # Verificar timeout por inactividad
        last_activity = datetime.fromisoformat(session_data['last_activity'])
        inactive_period = datetime.now() - last_activity
        
        if inactive_period > self.config['inactive_timeout']:
            self.destroy_session(session_id)
            return False, "Session expired due to inactivity"
        
        # Verificar timeout absoluto
        created_at = datetime.fromisoformat(session_data['created_at'])
        absolute_period = datetime.now() - created_at
        
        if absolute_period > self.config['absolute_timeout']:
            self.destroy_session(session_id)
            return False, "Session expired"
        
        # Verificar consistencia de user agent e IP
        if session_data['user_agent'] != user_agent:
            # Log suspicious activity
            self.log_suspicious_activity(session_id, "User-Agent mismatch")
            # Podría requerir re-autenticación
        
        if session_data['ip_address'] != ip_address:
            self.log_suspicious_activity(session_id, "IP address changed")
            # Invalidar sesión por cambio de IP (opcional)
            # self.destroy_session(session_id)
            # return False, "IP address changed"
        
        # Renovar sesión si está cerca de expirar
        if inactive_period > self.config['renewal_threshold']:
            session_data['last_activity'] = datetime.now().isoformat()
            self.session_store[session_id] = session_data
        
        return True, session_data
    
    def destroy_session(self, session_id):
        """Destruir sesión completamente"""
        if session_id in self.session_store:
            # Invalidar server-side
            del self.session_store[session_id]
            
            # Invalidar tokens asociados
            self._invalidate_related_tokens(session_id)
            
            # Log logout
            self._log_session_destruction(session_id)
    
    def rotate_session(self, old_session_id):
        """Rotar ID de sesión (prevención de fixation)"""
        if old_session_id not in self.session_store:
            return None
        
        session_data = self.session_store[old_session_id]
        
        # Crear nueva sesión
        new_session = self.create_session(
            session_data['user_id'],
            session_data['user_agent'],
            session_data['ip_address']
        )
        
        # Invalidar sesión anterior
        self.destroy_session(old_session_id)
        
        return new_session
    
    def _encrypt_session_data(self, session_id, session_data):
        """Encriptar datos de sesión para cookie"""
        data_to_encrypt = {
            'session_id': session_id,
            'hmac': self._calculate_hmac(session_id, session_data),
            'timestamp': datetime.now().isoformat()
        }
        
        encrypted = self.cipher.encrypt(
            json.dumps(data_to_encrypt).encode()
        )
        
        return base64.urlsafe_b64encode(encrypted).decode()
    
    def _calculate_hmac(self, session_id, session_data):
        """Calcular HMAC para verificar integridad"""
        message = f"{session_id}:{session_data['user_id']}:{session_data['created_at']}"
        return hmac.new(
            self.session_key,
            message.encode(),
            hashlib.sha256
        ).hexdigest()
    
    def _verify_cookie(self, session_id, session_data, cookie_value):
        """Verificar integridad de la cookie"""
        try:
            decrypted = self.cipher.decrypt(
                base64.urlsafe_b64decode(cookie_value.encode())
            )
            cookie_data = json.loads(decrypted)
            
            expected_hmac = self._calculate_hmac(session_id, session_data)
            return hmac.compare_digest(cookie_data['hmac'], expected_hmac)
        except:
            return False
    
    def _log_session_destruction(self, session_id):
        """Registrar destrucción de sesión"""
        log_entry = {
            'event': 'session_destroyed',
            'session_id': session_id,
            'timestamp': datetime.now().isoformat(),
            'reason': 'user_logout'  # o 'timeout', 'security'
        }
        # Enviar a sistema de logging
        print(f"[SECURITY] {json.dumps(log_entry)}")
    
    def log_suspicious_activity(self, session_id, reason):
        """Registrar actividad sospechosa"""
        log_entry = {
            'event': 'suspicious_activity',
            'session_id': session_id,
            'reason': reason,
            'timestamp': datetime.now().isoformat(),
            'severity': 'medium'
        }
        # Enviar a SIEM/SOC
        print(f"[SUSPICIOUS] {json.dumps(log_entry)}")

# Uso en aplicación web
session_manager = SecureSessionManager()

@app.route('/login', methods=['POST'])
def login():
    # Autenticar usuario
    user = authenticate(request.form['username'], request.form['password'])
    
    # Crear sesión
    session_info = session_manager.create_session(
        user_id=user.id,
        user_agent=request.headers.get('User-Agent'),
        ip_address=request.remote_addr
    )
    
    # Configurar cookie segura
    response = make_response(redirect('/dashboard'))
    response.set_cookie(
        'session_id',
        session_info['cookie'],
        expires=session_info['expires'],
        httponly=True,
        secure=True,
        samesite='Strict'
    )
    
    return response

@app.before_request
def validate_session_middleware():
    """Middleware para validar sesión en cada request"""
    if request.endpoint in ['login', 'static', 'health']:
        return
    
    session_id = request.cookies.get('session_id')
    cookie_value = request.cookies.get('session_cookie')
    
    if not session_id or not cookie_value:
        return redirect('/login')
    
    valid, session_data = session_manager.validate_session(
        session_id,
        cookie_value,
        request.headers.get('User-Agent'),
        request.remote_addr
    )
    
    if not valid:
        # Limpiar cookies inválidas
        response = make_response(redirect('/login'))
        response.delete_cookie('session_id')
        response.delete_cookie('session_cookie')
        return response
    
    # Adjuntar datos de sesión al request
    request.session = session_data
```

### **V4: Control de Acceso**

#### **Requisitos Clave (Nivel 2)**
```yaml
V4.1.2:
  descripcion: "Implementar control de acceso en todas las funcionalidades"
  implementacion: |
    - Default deny
    - Verificar autorización en cada request
    - Centralizar lógica de autorización

V4.2.2:
  descripcion: "Enforcement de ownership"
  implementacion: |
    - Verificar que usuario es dueño del recurso
    - No confiar en IDs del cliente
    - Implementar access control lists

V4.3.2:
  descripcion: "Control de acceso basado en roles (RBAC)"
  implementacion: |
    - Roles bien definidos
    - Mínimo privilegio
    - Separación de duties
```

#### **Implementación Práctica**
```python
# Sistema RBAC avanzado
from enum import Enum
from functools import wraps
from typing import List, Set
import re

class Permission(Enum):
    """Permisos específicos del sistema"""
    USER_READ = "user:read"
    USER_WRITE = "user:write"
    USER_DELETE = "user:delete"
    
    PRODUCT_READ = "product:read"
    PRODUCT_WRITE = "product:write"
    PRODUCT_DELETE = "product:delete"
    
    ORDER_READ = "order:read"
    ORDER_WRITE = "order:write"
    ORDER_DELETE = "order:delete"
    
    ADMIN_PANEL = "admin:access"
    SYSTEM_CONFIG = "system:configure"

class Role(Enum):
    """Roles predefinidos con permisos"""
    GUEST = "guest"
    CUSTOMER = "customer"
    EMPLOYEE = "employee"
    MANAGER = "manager"
    ADMIN = "admin"
    SUPER_ADMIN = "super_admin"

class RBACSystem:
    def __init__(self):
        # Definir mapeo roles → permisos
        self.role_permissions = {
            Role.GUEST: {
                Permission.PRODUCT_READ,
                Permission.USER_READ
            },
            Role.CUSTOMER: {
                Permission.PRODUCT_READ,
                Permission.USER_READ,
                Permission.USER_WRITE,
                Permission.ORDER_READ,
                Permission.ORDER_WRITE
            },
            Role.EMPLOYEE: {
                Permission.PRODUCT_READ,
                Permission.PRODUCT_WRITE,
                Permission.USER_READ,
                Permission.ORDER_READ,
                Permission.ORDER_WRITE
            },
            Role.MANAGER: {
                Permission.PRODUCT_READ,
                Permission.PRODUCT_WRITE,
                Permission.PRODUCT_DELETE,
                Permission.USER_READ,
                Permission.USER_WRITE,
                Permission.ORDER_READ,
                Permission.ORDER_WRITE,
                Permission.ORDER_DELETE,
                Permission.ADMIN_PANEL
            },
            Role.ADMIN: {
                *[p for p in Permission],
                Permission.SYSTEM_CONFIG
            },
            Role.SUPER_ADMIN: {
                *[p for p in Permission],
                Permission.SYSTEM_CONFIG
            }
        }
        
        # Roles jerárquicos (herencia)
        self.role_hierarchy = {
            Role.SUPER_ADMIN: {Role.ADMIN, Role.MANAGER, Role.EMPLOYEE, Role.CUSTOMER, Role.GUEST},
            Role.ADMIN: {Role.MANAGER, Role.EMPLOYEE, Role.CUSTOMER, Role.GUEST},
            Role.MANAGER: {Role.EMPLOYEE, Role.CUSTOMER, Role.GUEST},
            Role.EMPLOYEE: {Role.CUSTOMER, Role.GUEST},
            Role.CUSTOMER: {Role.GUEST}
        }
        
        # Políticas de acceso
        self.access_policies = []
    
    def has_permission(self, role: Role, permission: Permission) -> bool:
        """Verificar si rol tiene permiso (incluyendo herencia)"""
        # Verificar permiso directo
        if permission in self.role_permissions.get(role, set()):
            return True
        
        # Verificar herencia jerárquica
        for parent_role in self.role_hierarchy.get(role, set()):
            if self.has_permission(parent_role, permission):
                return True
        
        return False
    
    def add_policy(self, resource_pattern: str, action: str, roles: List[Role]):
        """Añadir política de acceso basada en recursos"""
        self.access_policies.append({
            'pattern': re.compile(resource_pattern),
            'action': action,
            'roles': set(roles)
        })
    
    def check_access(self, user_roles: List[Role], resource: str, action: str) -> bool:
        """Verificar acceso basado en políticas"""
        user_role_set = set(user_roles)
        
        for policy in self.access_policies:
            if policy['pattern'].match(resource) and policy['action'] == action:
                # Verificar si algún rol del usuario está en la política
                if user_role_set.intersection(policy['roles']):
                    return True
        
        # Default deny
        return False
    
    def ownership_check(self, user_id: str, resource_owner_id: str) -> bool:
        """Verificar ownership de recurso"""
        return user_id == resource_owner_id
    
    def get_allowed_actions(self, user_roles: List[Role], resource: str) -> Set[str]:
        """Obtener todas las acciones permitidas para un recurso"""
        allowed_actions = set()
        
        for policy in self.access_policies:
            if policy['pattern'].match(resource):
                # Verificar si algún rol del usuario está en la política
                if set(user_roles).intersection(policy['roles']):
                    allowed_actions.add(policy['action'])
        
        return allowed_actions

# Decoradores para control de acceso
def require_permission(permission: Permission):
    """Decorador para verificar permiso"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Obtener usuario del contexto (ej: Flask g.user)
            user = get_current_user()
            
            if not user:
                return {"error": "Authentication required"}, 401
            
            # Verificar permiso
            rbac = get_rbac_system()
            user_roles = user.get('roles', [])
            
            for role in user_roles:
                if rbac.has_permission(Role(role), permission):
                    return func(*args, **kwargs)
            
            return {"error": "Insufficient permissions"}, 403
        return wrapper
    return decorator

def require_ownership(resource_param: str):
    """Decorador para verificar ownership"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            user = get_current_user()
            resource_id = kwargs.get(resource_param)
            
            if not user:
                return {"error": "Authentication required"}, 401
            
            # Obtener dueño del recurso
            resource_owner = get_resource_owner(resource_id)
            
            # Verificar ownership
            if not resource_owner or resource_owner != user['id']:
                return {"error": "Access denied"}, 403
            
            return func(*args, **kwargs)
        return wrapper
    return decorator

# Middleware de autorización
class AuthorizationMiddleware:
    def __init__(self, app, rbac_system):
        self.app = app
        self.rbac = rbac_system
        
        # Mapear rutas a permisos requeridos
        self.route_permissions = {
            ('GET', r'/api/users/(\d+)'): Permission.USER_READ,
            ('PUT', r'/api/users/(\d+)'): Permission.USER_WRITE,
            ('DELETE', r'/api/users/(\d+)'): Permission.USER_DELETE,
            ('GET', r'/api/products'): Permission.PRODUCT_READ,
            ('POST', r'/api/products'): Permission.PRODUCT_WRITE,
            ('GET', r'/api/admin/.*'): Permission.ADMIN_PANEL,
        }
    
    def __call__(self, environ, start_response):
        method = environ.get('REQUEST_METHOD')
        path = environ.get('PATH_INFO')
        
        # Verificar si la ruta requiere autorización
        required_permission = None
        for (route_method, pattern), permission in self.route_permissions.items():
            if method == route_method and re.match(pattern, path):
                required_permission = permission
                break
        
        if required_permission:
            # Obtener usuario autenticado (ej: de sesión)
            user = self.get_user_from_session(environ)
            
            if not user:
                start_response('401 Unauthorized', [])
                return [b'Authentication required']
            
            # Verificar permisos
            user_roles = [Role(r) for r in user.get('roles', [])]
            has_access = any(
                self.rbac.has_permission(role, required_permission)
                for role in user_roles
            )
            
            if not has_access:
                start_response('403 Forbidden', [])
                return [b'Insufficient permissions']
        
        return self.app(environ, start_response)
    
    def get_user_from_session(self, environ):
        """Obtener usuario de la sesión"""
        # Implementación específica del framework
        pass

# Ejemplo de uso en endpoints
@app.route('/api/users/<user_id>', methods=['GET'])
@require_permission(Permission.USER_READ)
def get_user(user_id):
    """Obtener información de usuario"""
    user_data = get_user_from_db(user_id)
    
    # Verificar ownership o permisos especiales
    current_user = get_current_user()
    if user_id != current_user['id']:
        # Solo administradores pueden ver otros usuarios
        if not has_permission(Permission.ADMIN_PANEL):
            return {"error": "Access denied"}, 403
    
    return jsonify(user_data)

@app.route('/api/users/<user_id>/orders', methods=['GET'])
@require_ownership('user_id')
def get_user_orders(user_id):
    """Obtener órdenes del usuario (solo dueño o admin)"""
    orders = get_orders_for_user(user_id)
    return jsonify(orders)

# Política de acceso basada en atributos (ABAC)
class AttributeBasedAccessControl:
    def __init__(self):
        self.policies = []
    
    def add_policy(self, conditions):
        """Añadir política basada en atributos"""
        self.policies.append(conditions)
    
    def evaluate(self, user_attrs, resource_attrs, action, environment):
        """Evaluar acceso basado en atributos"""
        context = {
            'user': user_attrs,
            'resource': resource_attrs,
            'action': action,
            'environment': environment
        }
        
        for policy in self.policies:
            if self._evaluate_conditions(policy, context):
                return True
        
        return False
    
    def _evaluate_conditions(self, conditions, context):
        """Evaluar condiciones de política"""
        # Implementar motor de reglas
        # Ejemplo: user.department == resource.department AND time.hour < 18
        try:
            return eval(conditions, {}, context)
        except:
            return False

# Ejemplo ABAC
abac = AttributeBasedAccessControl()
abac.add_policy(
    "user.get('department') == resource.get('department') and "
    "environment.get('time').hour < 18"
)

# Verificar acceso
has_access = abac.evaluate(
    user_attrs={'role': 'employee', 'department': 'sales'},
    resource_attrs={'owner': 'sales', 'sensitivity': 'internal'},
    action='read',
    environment={'time': datetime.now(), 'location': 'office'}
)
```

### **V5: Validación, Sanitización y Codificación**

#### **Requisitos Clave (Nivel 2)**
```yaml
V5.1.2:
  descripcion: "Validación de entrada en servidor"
  implementacion: |
    - Validar tipo, longitud, formato, rango
    - Rechazar entrada maliciosa
    - Usar allow lists

V5.2.2:
  descripcion: "Codificación de salida"
  implementacion: |
    - HTML Entity Encoding para HTML
    - JavaScript Encoding para JS
    - CSS Encoding para CSS
    - URL Encoding para URLs

V5.3.2:
  descripcion: "Protección contra inyecciones"
  implementacion: |
    - Prepared statements para SQL
    - Parameterized queries
    - ORM con protección
```

#### **Implementación Práctica**
```python
# Sistema completo de validación y sanitización
import re
import html
import json
from urllib.parse import quote, unquote
from datetime import datetime
import bleach
import jsonschema
from email_validator import validate_email, EmailNotValidError

class InputValidator:
    """Validador de entrada centralizado"""
    
    def __init__(self):
        self.schemas = {}
        self.load_default_schemas()
    
    def load_default_schemas(self):
        """Cargar esquemas de validación comunes"""
        # Esquema para usuario
        self.schemas['user'] = {
            'type': 'object',
            'required': ['username', 'email', 'password'],
            'properties': {
                'username': {
                    'type': 'string',
                    'pattern': '^[a-zA-Z0-9_]{3,30}$',
                    'description': '3-30 caracteres alfanuméricos'
                },
                'email': {
                    'type': 'string',
                    'format': 'email',
                    'maxLength': 254
                },
                'password': {
                    'type': 'string',
                    'minLength': 12,
                    'pattern': '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!
