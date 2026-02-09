# Puesta en Producción Segura

## Introducción a la Puesta en Producción Segura

### **¿Qué es la Puesta en Producción Segura?**
La puesta en producción segura es el proceso de desplegar aplicaciones, servicios y sistemas en entornos productivos garantizando que se implementan **mecanismos de seguridad adecuados** desde el primer momento. No es simplemente "hacer que funcione", sino hacer que funcione **de forma segura, robusta y mantenible**.

### **Principios Fundamentales**

#### **1. Security by Design**
La seguridad debe integrarse desde la fase de diseño, no añadirse como parche posterior. Este principio implica:
- **Análisis de riesgos temprano:** Identificar amenazas antes del desarrollo
- **Arquitectura segura:** Diseñar sistemas con seguridad incorporada
- **Principio de mínimo privilegio:** Cada componente solo tiene los permisos necesarios

#### **2. Defense in Depth**
Implementar múltiples capas de seguridad para que si una falla, otras proporcionen protección:
- **Perímetro:** Firewalls, WAFs
- **Red:** Segmentación, ACLs
- **Host:** Hardening, parches
- **Aplicación:** Validación inputs, autenticación
- **Datos:** Cifrado, backups

#### **3. Least Privilege**
Cada usuario, proceso o sistema debe operar con los **mínimos privilegios necesarios** para realizar su función:
```bash
# Ejemplo: Usuario para servicio web
sudo useradd -r -s /bin/false www-service
sudo chown -R www-service:www-service /var/www/html
```

#### **4. Fail Securely**
Los sistemas deben fallar de manera segura:
- **Default deny:** Por defecto, denegar acceso
- **Error handling:** Mensajes de error sin información sensible
- **Graceful degradation:** Funcionalidad reducida pero segura

## Ciclo de Vida del Desarrollo Seguro (SDLC)

### **Fases del SDLC Seguro**

#### **1. Planificación y Requisitos**
- **Análisis de riesgos:** Identificar activos, amenazas y vulnerabilidades
- **Requisitos de seguridad:** Definir controles necesarios
- **Compliance:** Requisitos legales y normativos (GDPR, ISO 27001, PCI-DSS)

**Checklist de requisitos:**
- [ ] Autenticación multifactor
- [ ] Cifrado de datos en tránsito y en reposo
- [ ] Logging y monitoreo
- [ ] Gestión de secretos
- [ ] Plan de respuesta a incidentes

#### **2. Diseño Seguro**
- **Arquitectura de seguridad:** Diagramas de flujo de datos
- **Modelado de amenazas:** STRIDE, DREAD
- **Selección de tecnologías:** Frameworks y librerías seguras

**Ejemplo de modelo de amenazas STRIDE:**

| Amenaza | Ejemplo | Mitigación |
|---------|---------|------------|
| **S**poofing | Suplantación de identidad | Autenticación fuerte |
| **T**ampering | Modificación de datos | Firmas digitales |
| **R**epudiation | Negación de acciones | Logs auditables |
| **I**nformation Disclosure | Fuga de información | Cifrado |
| **D**enial of Service | Ataque DoS | Rate limiting |
| **E**levation of Privilege | Escalada de privilegios | Control de acceso |

#### **3. Implementación Segura**
- **Coding standards:** OWASP Top 10, SANS Top 25
- **Revisiones de código:** Pair programming, code reviews
- **Análisis estático (SAST):** SonarQube, Checkmarx

**Código inseguro vs seguro:**

```javascript
// INSECURO: SQL Injection vulnerable
app.post('/login', (req, res) => {
  const query = `SELECT * FROM users WHERE username='${req.body.username}'`;
  // ...
});

// SEGURO: Prepared statements
app.post('/login', (req, res) => {
  const query = 'SELECT * FROM users WHERE username=?';
  db.execute(query, [req.body.username]);
});
```

#### **4. Pruebas de Seguridad**
- **Pruebas dinámicas (DAST):** OWASP ZAP, Burp Suite
- **Análisis de dependencias (SCA):** OWASP Dependency Check
- **Penetration testing:** Pruebas manuales y automáticas

**Checklist de pruebas:**
```bash
# Ejemplo de escaneo con OWASP ZAP
zap-baseline.py -t https://tu-app.com -r report.html

# Escaneo de dependencias
dependency-check --project "MiApp" --scan ./src --format HTML
```

#### **5. Despliegue Seguro**
- **Infraestructura como código:** Terraform, Ansible con seguridad
- **Pipeline CI/CD seguro:** Integración de pruebas de seguridad
- **Despliegue gradual:** Canary deployments, blue-green

#### **6. Operaciones y Mantenimiento**
- **Monitoreo continuo:** SIEM, detección de anomalías
- **Gestión de vulnerabilidades:** Parcheo regular
- **Respuesta a incidentes:** Plan definido y probado

## Infraestructura como Código (IaC) Segura

### **Principios de IaC Segura**

#### **1. Versionado y Control de Cambios**
- Todo el código de infraestructura en repositorios Git
- Revisiones de código para cambios de infraestructura
- Historial completo de cambios

**Estructura recomendada:**
```
infra/
├── terraform/
│   ├── modules/
│   ├── environments/
│   │   ├── dev/
│   │   ├── staging/
│   │   └── prod/
│   └── policies/  # Sentinel/OPA policies
├── ansible/
│   ├── playbooks/
│   └── roles/
└── scripts/
```

#### **2. Políticas de Seguridad como Código**
- **Sentinel (Terraform):** Políticas para infraestructura
- **OPA (Open Policy Agent):** Políticas generales
- **Checkov, Terrascan:** Análisis estático de IaC

**Ejemplo de política Sentinel:**
```python
import "tfplan/v2" as tfplan

# Política: No permitir buckets S3 públicos
aws_s3_bucket_public_blocks = filter tfplan.resource_changes as _, rc {
    rc.type is "aws_s3_bucket_public_access_block" and
    rc.change.actions contains "create"
} {
    bucket: rc.change.after.bucket
}

main = rule {
    all aws_s3_bucket_public_blocks as blocks {
        blocks.block_public_acls is true and
        blocks.block_public_policy is true and
        blocks.ignore_public_acls is true and
        blocks.restrict_public_buckets is true
    }
}
```

#### **3. Secret Management**
- **Nunca** secrets en código o repositorios
- Uso de herramientas como HashiCorp Vault, AWS Secrets Manager
- Rotación automática de credenciales

**Ejemplo con Terraform y Vault:**
```hcl
data "vault_generic_secret" "db_credentials" {
  path = "secret/database/prod"
}

resource "aws_db_instance" "database" {
  username = data.vault_generic_secret.db_credentials.data["username"]
  password = data.vault_generic_secret.db_credentials.data["password"]
  # ... otras configuraciones
}
```

### **Hardening de Infraestructura**

#### **Servidores Linux**
```bash
# Ejemplo de hardening con Ansible
- name: Harden Linux server
  hosts: all
  become: yes
  tasks:
    - name: Update all packages
      apt:
        update_cache: yes
        upgrade: 'dist'
    
    - name: Configure SSH hardening
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: "{{ item.regexp }}"
        line: "{{ item.line }}"
      with_items:
        - { regexp: '^#?PermitRootLogin', line: 'PermitRootLogin no' }
        - { regexp: '^#?PasswordAuthentication', line: 'PasswordAuthentication no' }
        - { regexp: '^#?ClientAliveInterval', line: 'ClientAliveInterval 300' }
    
    - name: Configure firewall
      ufw:
        state: enabled
        policy: deny
        direction: incoming
    
    - name: Install and configure fail2ban
      apt:
        name: fail2ban
        state: present
```

#### **Contenedores Docker**
```dockerfile
# Dockerfile seguro
FROM alpine:3.18

# Usuario no root
RUN addgroup -g 1000 -S appgroup && \
    adduser -u 1000 -S appuser -G appgroup

# Instalar solo lo necesario
RUN apk add --no-cache python3 py3-pip

# Copiar requirements primero (mejora caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar aplicación
COPY --chown=appuser:appgroup app.py .

# Cambiar a usuario no root
USER appuser

# Puerto no privilegiado
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/health || exit 1

CMD ["python3", "app.py"]
```

#### **Orquestación Kubernetes**
```yaml
# Deployment seguro en Kubernetes
apiVersion: apps/v1
kind: Deployment
metadata:
  name: secure-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: secure-app
  template:
    metadata:
      labels:
        app: secure-app
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 2000
      containers:
      - name: app
        image: myapp:latest
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop:
            - ALL
          readOnlyRootFilesystem: true
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
---
# NetworkPolicy restrictiva
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: app-network-policy
spec:
  podSelector:
    matchLabels:
      app: secure-app
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
    ports:
    - protocol: TCP
      port: 8080
  egress:
  - to:
    - podSelector:
        matchLabels:
          role: database
    ports:
    - protocol: TCP
      port: 5432
```

## Pipeline CI/CD Seguro

### **Arquitectura de Pipeline Seguro**

```
[Develop] → [Commit] → [SAST/SCA] → [Build] → [DAST] → [Deploy] → [Runtime Protection]
    ↑           ↓          ↓           ↓         ↓         ↓            ↓
    └─────────[Git]──[Security Gates]───────────[IaC Scan]──────────[WAF/RASP]────┘
```

### **Etapas de Seguridad en CI/CD**

#### **1. Pre-commit Hooks**
```bash
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
      - id: check-yaml
      - id: end-of-file-fixer
      - id: trailing-whitespace
  
  - repo: https://github.com/terraform-docs/terraform-docs
    rev: v0.16.0
    hooks:
      - id: terraform-docs-go
  
  - repo: https://github.com/terraform-linters/tflint
    rev: v0.47.0
    hooks:
      - id: tflint
```

#### **2. Integración Continua (CI)**
```yaml
# .gitlab-ci.yml
stages:
  - security-scan
  - build
  - test
  - deploy

sast:
  stage: security-scan
  image: 
    name: "gcr.io/company/sast-scanner:latest"
  script:
    - /scanner/run-sast.sh
  artifacts:
    reports:
      sast: gl-sast-report.json

dependency_scanning:
  stage: security-scan
  script:
    - dependency-check --format HTML --out report.html
  artifacts:
    paths:
      - report.html

container_scanning:
  stage: security-scan
  script:
    - trivy image --exit-code 1 --severity HIGH,CRITICAL $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
```

#### **3. Entrega Continua (CD)**
```yaml
# GitHub Actions workflow
name: Secure Deployment

on:
  push:
    branches: [ main ]

jobs:
  security-checks:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Run SAST
      uses: github/codeql-action/init@v2
      with:
        languages: javascript, python
    
    - name: Run SCA
      uses: actions/dependency-review-action@v3
    
    - name: Run IaC Scan
      uses: bridgecrewio/checkov-action@master
      with:
        directory: terraform/
        framework: terraform

  deploy:
    needs: security-checks
    runs-on: ubuntu-latest
    environment: production
    steps:
    - name: Deploy to Production
      if: github.ref == 'refs/heads/main'
      run: |
        # Despliegue seguro con aprobación
        echo "Deploying version ${{ github.sha }}"
        ./deploy-prod.sh
```

### **Security Gates (Puertas de Seguridad)**

#### **Definición de Gates**
```yaml
# security-gates.yaml
gates:
  sast:
    max_critical: 0
    max_high: 2
    max_medium: 10
  
  sca:
    banned_licenses:
      - GPL-3.0
      - AGPL-3.0
    max_cve_critical: 0
    max_cve_high: 1
  
  secrets:
    max_found: 0
  
  iac:
    max_critical: 0
    max_high: 0
```

#### **Implementación en Jenkins**
```groovy
// Jenkinsfile
pipeline {
    agent any
    
    stages {
        stage('Security Scan') {
            steps {
                script {
                    def scanResults = sh(script: './run-security-scans.sh', returnStdout: true)
                    def violations = parseSecurityResults(scanResults)
                    
                    // Puertas de seguridad
                    if (violations.critical > 0) {
                        error("Critical security violations found. Build blocked.")
                    }
                    if (violations.high > securityGates.max_high) {
                        input "High severity issues found. Continue deployment?"
                    }
                }
            }
        }
    }
}
```

## Configuración Segura de Servicios

### **Bases de Datos**

#### **PostgreSQL Hardening**
```sql
-- postgresql.conf seguro
ALTER SYSTEM SET listen_addresses = 'localhost';
ALTER SYSTEM SET ssl = on;
ALTER SYSTEM SET ssl_cert_file = '/path/to/server.crt';
ALTER SYSTEM SET ssl_key_file = '/path/to/server.key';

-- pg_hba.conf seguro
# TYPE  DATABASE        USER            ADDRESS                 METHOD
local   all             all                                     peer
host    all             all             127.0.0.1/32            scram-sha-256
hostssl productiondb    appuser         10.0.0.0/8              scram-sha-256

-- Configuración de usuarios
CREATE ROLE appuser WITH LOGIN PASSWORD 'secure_password';
GRANT CONNECT ON DATABASE productiondb TO appuser;
GRANT USAGE ON SCHEMA public TO appuser;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO appuser;

-- Configuración de auditoría
CREATE EXTENSION pgaudit;
ALTER SYSTEM SET pgaudit.log = 'ddl, write, role';
ALTER SYSTEM SET pgaudit.log_relation = on;
```

#### **Redis Hardening**
```bash
# redis.conf seguro
bind 127.0.0.1
protected-mode yes
port 6379
requirepass "complex_password_here"
rename-command FLUSHDB ""
rename-command FLUSHALL ""
rename-command CONFIG ""
maxmemory 1gb
maxmemory-policy allkeys-lru
timeout 300
tcp-keepalive 60
```

### **Servicios Web**

#### **Nginx Configuración Segura**
```nginx
# nginx.conf
server {
    listen 443 ssl http2;
    server_name example.com;
    
    # SSL/TLS configuración
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;
    
    # Headers de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self';" always;
    
    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://backend;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    # Directorios restringidos
    location ~ /\. {
        deny all;
    }
    
    location ~* \.(log|sql|bak|old)$ {
        deny all;
    }
}
```

#### **Apache Hardening**
```apache
# apache2.conf seguro
ServerTokens Prod
ServerSignature Off
TraceEnable Off
FileETag None

<Directory />
    Options -Indexes -Includes -ExecCGI
    AllowOverride None
    Require all denied
</Directory>

<Directory /var/www/html>
    Options -Indexes +FollowSymLinks
    AllowOverride None
    Require all granted
    
    # Headers de seguridad
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-XSS-Protection "1; mode=block"
</Directory>

# Configuración SSL
SSLCipherSuite HIGH:!aNULL:!MD5:!RC4:!3DES
SSLProtocol All -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
SSLHonorCipherOrder on
SSLCompression off
```

## Monitoreo y Logging Seguro

### **Centralización de Logs**

#### **Arquitectura ELK Segura**
```yaml
# docker-compose.yml para ELK Stack seguro
version: '3.8'

services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.10.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=true
      - ELASTIC_PASSWORD=${ELASTIC_PASSWORD}
      - xpack.security.transport.ssl.enabled=true
    volumes:
      - elasticsearch-data:/usr/share/elasticsearch/data
    networks:
      - elk
    ports:
      - "9200:9200"

  logstash:
    image: docker.elastic.co/logstash/logstash:8.10.0
    volumes:
      - ./logstash/pipeline:/usr/share/logstash/pipeline
      - ./logstash/config/logstash.yml:/usr/share/logstash/config/logstash.yml
    environment:
      - LS_JAVA_OPTS=-Xmx256m -Xms256m
      - ELASTIC_PASSWORD=${ELASTIC_PASSWORD}
    networks:
      - elk
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:8.10.0
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
      - ELASTICSEARCH_USERNAME=kibana_system
      - ELASTICSEARCH_PASSWORD=${KIBANA_PASSWORD}
    networks:
      - elk
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch

networks:
  elk:
    driver: bridge

volumes:
  elasticsearch-data:
    driver: local
```

#### **Configuración de Logstash**
```ruby
# pipeline/logstash.conf
input {
  beats {
    port => 5044
    ssl => true
    ssl_certificate => "/usr/share/logstash/config/certs/logstash.crt"
    ssl_key => "/usr/share/logstash/config/certs/logstash.key"
  }
}

filter {
  # Parseo de logs de aplicaciones
  grok {
    match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:loglevel} %{GREEDYDATA:message}" }
  }
  
  # Anonimización de datos sensibles
  mutate {
    gsub => [
      "message", "(?i)(password|token|key)[=:]\s*\S+", "[REDACTED]",
      "message", "\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b", "[CREDIT_CARD_REDACTED]"
    ]
  }
  
  # GeoIP para IPs
  geoip {
    source => "clientip"
    target => "geoip"
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    user => "logstash_internal"
    password => "${ELASTIC_PASSWORD}"
    index => "logs-%{+YYYY.MM.dd}"
    ssl => true
    ssl_certificate_verification => true
    cacert => "/usr/share/logstash/config/certs/ca.crt"
  }
}
```

### **Alertas de Seguridad**

#### **Reglas de Detección**
```yaml
# reglas-seguridad.yaml
rules:
  - name: "Multiple failed logins"
    type: frequency
    index: "logs-*"
    timeframe:
      minutes: 5
    conditions:
      - field: "event.action"
        value: "login_failed"
        operator: equals
      - field: "source.ip"
        cardinality:
          value: 10
          operator: greater_than
    actions:
      - type: "email"
        recipients: ["soc@empresa.com"]
        subject: "Posible ataque de fuerza bruta detectado"
  
  - name: "Sensitive data exposure"
    type: new_value
    index: "logs-*"
    conditions:
      - field: "message"
        regex: "(?i)(password|token|key|secret).*exposed"
    actions:
      - type: "slack"
        channel: "#security-alerts"
        message: "Posible exposición de datos sensibles"
  
  - name: "Unauthorized access attempt"
    type: query
    index: "logs-*"
    query: |
      event.action: "access_denied" AND 
      user.name: "admin" AND 
      NOT source.ip: 10.0.0.0/8
    timeframe:
      minutes: 1
    actions:
      - type: "pagerduty"
        severity: "critical"
```

## Gestión de Secretos

### **HashiCorp Vault**

#### **Configuración Inicial**
```hcl
# config.hcl
storage "raft" {
  path    = "./vault/data"
  node_id = "node1"
}

listener "tcp" {
  address     = "127.0.0.1:8200"
  tls_cert_file = "/etc/vault/certs/server.crt"
  tls_key_file  = "/etc/vault/certs/server.key"
}

api_addr = "https://127.0.0.1:8200"
cluster_addr = "https://127.0.0.1:8201"
ui = true
```

#### **Políticas de Acceso**
```hcl
# políticas/vault-policies.hcl
path "secret/data/database/*" {
  capabilities = ["read", "list"]
}

path "secret/data/api/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

path "secret/metadata/*" {
  capabilities = ["list"]
}

path "auth/token/renew-self" {
  capabilities = ["update"]
}

path "auth/token/lookup-self" {
  capabilities = ["read"]
}
```

#### **Integración con Aplicaciones**
```python
# app_with_vault.py
import hvac
import os

class VaultClient:
    def __init__(self):
        self.client = hvac.Client(
            url=os.getenv('VAULT_ADDR'),
            token=os.getenv('VAULT_TOKEN'),
            verify=os.getenv('VAULT_SSL_VERIFY', True)
        )
    
    def get_database_credentials(self):
        """Obtener credenciales de base de datos"""
        secret = self.client.secrets.kv.v2.read_secret_version(
            path='database/prod',
            mount_point='secret'
        )
        return secret['data']['data']
    
    def get_api_key(self, service):
        """Obtener API key para servicio específico"""
        secret = self.client.secrets.kv.v2.read_secret_version(
            path=f'api/{service}',
            mount_point='secret'
        )
        return secret['data']['data']['api_key']

# Uso en la aplicación
vault = VaultClient()
db_creds = vault.get_database_credentials()

# Configurar conexión a BD
db_config = {
    'host': db_creds['host'],
    'port': db_creds['port'],
    'database': db_creds['database'],
    'user': db_creds['username'],
    'password': db_creds['password']
}
```

### **AWS Secrets Manager**

#### **Gestión de Secretos**
```python
# secrets_manager_example.py
import boto3
import json
from botocore.exceptions import ClientError

class AWSSecretsManager:
    def __init__(self, region_name='eu-west-1'):
        self.client = boto3.client(
            'secretsmanager',
            region_name=region_name
        )
    
    def get_secret(self, secret_name):
        """Obtener secreto de Secrets Manager"""
        try:
            response = self.client.get_secret_value(
                SecretId=secret_name
            )
            
            if 'SecretString' in response:
                secret = response['SecretString']
                return json.loads(secret)
            else:
                decoded_binary_secret = base64.b64decode(
                    response['SecretBinary']
                )
                return json.loads(decoded_binary_secret)
                
        except ClientError as e:
            if e.response['Error']['Code'] == 'ResourceNotFoundException':
                print(f"Secret {secret_name} not found.")
            elif e.response['Error']['Code'] == 'InvalidRequestException':
                print(f"Invalid request for secret {secret_name}.")
            elif e.response['Error']['Code'] == 'InvalidParameterException':
                print(f"Invalid parameter for secret {secret_name}.")
            raise e
    
    def create_secret(self, secret_name, secret_value):
        """Crear nuevo secreto"""
        response = self.client.create_secret(
            Name=secret_name,
            SecretString=json.dumps(secret_value),
            Description=f'Secret for {secret_name}',
            Tags=[
                {'Key': 'Environment', 'Value': 'Production'},
                {'Key': 'ManagedBy', 'Value': 'IaC'}
            ]
        )
        return response
    
    def rotate_secret(self, secret_name):
        """Rotar secreto automáticamente"""
        response = self.client.rotate_secret(
            SecretId=secret_name,
            RotationRules={
                'AutomaticallyAfterDays': 30
            }
        )
        return response

# Ejemplo de uso
secrets_manager = AWSSecretsManager()

# Obtener secreto de base de datos
db_secret = secrets_manager.get_secret('prod/database/credentials')

# Obtener API keys
api_keys = secrets_manager.get_secret('prod/api/keys')
```

## Cumplimiento Normativo y Auditoría

### **Frameworks de Cumplimiento**

#### **ISO 27001 Controls Mapping**
```yaml
# iso27001-mapping.yaml
controls:
  - id: "A.5.1.1"
    name: "Policies for information security"
    implementation:
      - "Security policy documented"
      - "Regular policy reviews"
      - "Employee awareness training"
  
  - id: "A.8.2.1"
    name: "Information classification"
    implementation:
      - "Data classification policy"
      - "Labeling of sensitive information"
      - "Access controls based on classification"
  
  - id: "A.9.1.1"
    name: "Access control policy"
    implementation:
      - "RBAC implementation"
      - "Principle of least privilege"
      - "Regular access reviews"
  
  - id: "A.12.6.1"
    name: "Management of technical vulnerabilities"
    implementation:
      - "Vulnerability scanning program"
      - "Patch management process"
      - "CVE monitoring"
```

#### **GDPR Compliance**
```python
# gdpr_compliance.py
class GDPRCompliance:
    def __init__(self):
        self.data_subjects = {}
        self.processing_activities = []
    
    def record_processing_activity(self, activity):
        """Registrar actividad de procesamiento (Artículo 30)"""
        self.processing_activities.append({
            'name': activity['name'],
            'purpose': activity['purpose'],
            'data_categories': activity['data_categories'],
            'recipients': activity['recipients'],
            'retention_period': activity['retention_period'],
            'security_measures': activity['security_measures'],
            'timestamp': datetime.now()
        })
    
    def handle_data_subject_request(self, request):
        """Manejar solicitudes de interesados (Artículos 15-22)"""
        if request['type'] == 'access':
            return self.provide_data_access(request['subject_id'])
        elif request['type'] == 'deletion':
            return self.delete_subject_data(request['subject_id'])
        elif request['type'] == 'rectification':
            return self.rectify_subject_data(
                request['subject_id'],
                request['corrections']
            )
    
    def conduct_dpia(self, processing_activity):
        """Realizar DPIA (Data Protection Impact Assessment)"""
        risk_assessment = {
            'high_risk_factors': [],
            'mitigation_measures': [],
            'residual_risk': None
        }
        
        # Evaluar riesgos
        if processing_activity['sensitive_data']:
            risk_assessment['high_risk_factors'].append(
                'Processing of special category data'
            )
        
        if processing_activity['automated_decision_making']:
            risk_assessment['high_risk_factors'].append(
                'Automated decision making with legal effect'
            )
        
        # Proponer medidas de mitigación
        if risk_assessment['high_risk_factors']:
            risk_assessment['mitigation_measures'] = [
                'Data minimization',
                'Pseudonymization',
                'Regular security audits',
                'DPO consultation required'
            ]
        
        return risk_assessment
```

### **Auditoría Automatizada**

#### **Script de Auditoría**
```bash
#!/bin/bash
# audit-security.sh

# Configuración
AUDIT_DIR="/var/log/security-audit"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
REPORT_FILE="${AUDIT_DIR}/audit_report_${TIMESTAMP}.html"

# Función para generar informe
generate_report() {
    echo "<html><head><title>Security Audit Report</title></head><body>" > $REPORT_FILE
    echo "<h1>Security Audit Report - $(date)</h1>" >> $REPORT_FILE
    
    # 1. Auditoría de usuarios
    echo "<h2>1. User Account Audit</h2>" >> $REPORT_FILE
    echo "<pre>" >> $REPORT_FILE
    awk -F: '$3 == 0 {print $1}' /etc/passwd >> $REPORT_FILE
    echo "</pre>" >> $REPORT_FILE
    
    # 2. Auditoría de permisos
    echo "<h2>2. File Permissions Audit</h2>" >> $REPORT_FILE
    echo "<pre>" >> $REPORT_FILE
    find / -type f -perm /6000 -ls 2>/dev/null >> $REPORT_FILE
    echo "</pre>" >> $REPORT_FILE
    
    # 3. Auditoría de servicios
    echo "<h2>3. Service Audit</h2>" >> $REPORT_FILE
    echo "<pre>" >> $REPORT_FILE
    systemctl list-unit-files --type=service --state=enabled >> $REPORT_FILE
    echo "</pre>" >> $REPORT_FILE
    
    # 4. Auditoría de red
    echo "<h2>4. Network Configuration Audit</h2>" >> $REPORT_FILE
    echo "<pre>" >> $REPORT_FILE
    netstat -tulpn >> $REPORT_FILE
    echo "</pre>" >> $REPORT_FILE
    
    # 5. Auditoría de logs
    echo "<h2>5. Log Audit</h2>" >> $REPORT_FILE
    echo "<pre>" >> $REPORT_FILE
    tail -100 /var/log/auth.log >> $REPORT_FILE
    echo "</pre>" >> $REPORT_FILE
    
    echo "</body></html>" >> $REPORT_FILE
}

# Ejecutar auditoría
main() {
    mkdir -p $AUDIT_DIR
    
    echo "Iniciando auditoría de seguridad..."
    
    # Generar informe
    generate_report
    
    # Análisis automático
    echo "Analizando resultados..."
    
    # Buscar problemas comunes
    CRITICAL_ISSUES=0
    
    # Verificar si hay cuentas root adicionales
    ROOT_COUNT=$(awk -F: '$3 == 0 {print $1}' /etc/passwd | wc -l)
    if [ $ROOT_COUNT -gt 1 ]; then
        echo "CRÍTICO: Múltiples cuentas UID 0 encontradas"
        CRITICAL_ISSUES=$((CRITICAL_ISSUES + 1))
    fi
    
    # Verificar archivos SUID/SGID peligrosos
    DANGEROUS_SUID=$(find / -type f -perm /6000 -ls 2>/dev/null | grep -E "(bash|sh|python|perl)" | wc -l)
    if [ $DANGEROUS_SUID -gt 0 ]; then
        echo "CRÍTICO: Archivos SUID/SGID peligrosos encontrados"
        CRITICAL_ISSUES=$((CRITICAL_ISSUES + 1))
    fi
    
    # Resumen
    echo "Auditoría completada. Reporte generado en: $REPORT_FILE"
    echo "Problemas críticos encontrados: $CRITICAL_ISSUES"
    
    if [ $CRITICAL_ISSUES -gt 0 ]; then
        exit 1
    else
        exit 0
    fi
}

main "$@"
```

## Herramientas Recomendadas

### **Análisis de Seguridad**

| Categoría | Herramienta | Descripción | Enlace |
|-----------|-------------|-------------|---------|
| **SAST** | SonarQube | Análisis estático de código | [sonarqube.org](https://www.sonarqube.org/) |
| **SCA** | OWASP Dependency-Check | Análisis de dependencias | [owasp.org](https://owasp.org/www-project-dependency-check/) |
| **DAST** | OWASP ZAP | Pruebas de seguridad dinámicas | [zaproxy.org](https://www.zaproxy.org/) |
| **IaC Scan** | Checkov | Análisis de infraestructura como código | [checkov.io](https://www.checkov.io/) |
| **Container Scan** | Trivy | Escaneo de contenedores | [aquasec.com](https://aquasecurity.github.io/trivy/) |

### **Gestión de Secretos**

| Herramienta | Tipo | Características | 
|-------------|------|-----------------|
| **HashiCorp Vault** | On-prem/Cloud | Secrets dinámicos, encryption as a service |
| **AWS Secrets Manager** | Cloud (AWS) | Integración nativa AWS, rotación automática |
| **Azure Key Vault** | Cloud (Azure) | Integración Azure, HSM support |
| **Google Secret Manager** | Cloud (GCP) | Integración GCP, versioning |

### **Monitoreo y SIEM**

| Herramienta | Tipo | Características |
|-------------|------|-----------------|
| **ELK Stack** | Open Source | Elasticsearch, Logstash, Kibana |
| **Splunk** | Commercial | SIEM completo, machine learning |
| **Wazuh** | Open Source | HIDS, log analysis, compliance |
| **Graylog** | Open Source | Centralized log management |

## Checklist de Puesta en Producción Segura

### **Pre-Despliegue**
- [ ] **Código**
  - [ ] Revisión de código completada
  - [ ] SAST sin vulnerabilidades críticas
  - [ ] SCA sin dependencias vulnerables
  - [ ] Secrets escaneados y no expuestos
  
- [ ] **Infraestructura**
  - [ ] IaC escaneada (Checkov/Terrascan)
  - [ ] Configuración de hardening aplicada
  - [ ] Network policies definidas
  - [ ] Backup configurado

- [ ] **Configuración**
  - [ ] Variables de entorno gestionadas como secretos
  - [ ] Configuración de logging adecuada
  - [ ] Monitoreo y alertas configurados
  - [ ] Certificados SSL/TLS válidos

### **Durante Despliegue**
- [ ] **Pipeline**
  - [ ] Security gates implementadas
  - [ ] Aprobaciones requeridas para producción
  - [ ] Rollback plan probado
  - [ ] Zero-downtime deployment

- [ ] **Verificación**
  - [ ] Health checks pasando
  - [ ] Smoke tests completados
  - [ ] Security tests post-despliegue
  - [ ] Performance within SLA

### **Post-Despliegue**
- [ ] **Monitoreo**
  - [ ] Logs siendo recolectados
  - [ ] Métricas siendo monitorizadas
  - [ ] Alertas configuradas y probadas
  - [ ] Dashboard operacional disponible

- [ ] **Mantenimiento**
  - [ ] Plan de parcheo definido
  - [ ] Rotación de secretos programada
  - [ ] Backups verificados
  - [ ] Revisiones de seguridad programadas

## Conclusión y Mejores Prácticas

### **Lecciones Aprendidas**

1. **Automatiza todo:** La seguridad manual es inconsistente y propensa a errores
2. **Shift Left:** Integra seguridad desde las primeras fases del desarrollo
3. **Principio de mínimo privilegio:** Nunca otorgues más permisos de los necesarios
4. **Defensa en profundidad:** Múltiples capas de seguridad son mejores que una
5. **Monitoriza activamente:** No puedes proteger lo que no puedes ver
6. **Planifica para el fracaso:** Asume que algo saldrá mal y prepárate

### **Recursos para Continuar Aprendiendo**

#### **Documentación Oficial**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks/)

#### **Comunidades**
- [OWASP Local Chapters](https://owasp.org/chapters/)
- [DevSecOps Community](https://devsecops.org/)
- [Kubernetes Security SIG](https://github.com/kubernetes/community/tree/master/sig-security)

#### **Certificaciones**
- **OSCP** (Offensive Security Certified Professional)
- **CISSP** (Certified Information Systems Security Professional)
- **CSSLP** (Certified Secure Software Lifecycle Professional)
- **AWS/Azure/GCP Security Specialties**

### **Recordatorios Finales**

1. **La seguridad es un proceso, no un producto:** Requiere mantenimiento continuo
2. **La usabilidad es importante:** Si es muy difícil de usar, la gente buscará alternativas inseguras
3. **Mantente actualizado:** Nuevas vulnerabilidades aparecen constantemente
4. **Comparte conocimiento:** La seguridad mejora cuando compartimos lo que aprendemos
5. **Piensa como un atacante:** Entiende cómo podrían atacar tu sistema para mejor protegerlo

**Recuerda:** La puesta en producción segura no es solo tarea del equipo de seguridad. Es responsabilidad de **todos** los involucrados en el desarrollo, operación y mantenimiento de sistemas.
