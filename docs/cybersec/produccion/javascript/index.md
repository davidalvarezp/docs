# JavaScript Fundamentos: Guía Completa desde Cero

## Introducción a JavaScript

### **¿Qué es JavaScript?**
JavaScript es un **lenguaje de programación interpretado, de alto nivel y multiparadigma** que se ejecuta en el navegador y en el servidor (Node.js). Creado por Brendan Eich en 1995, ha evolucionado hasta convertirse en uno de los lenguajes más populares del mundo.

### **Características Principales**
- **Interpretado:** No necesita compilación
- **Tipado dinámico:** Las variables no tienen tipo fijo
- **Orientado a objetos basado en prototipos**
- **Funciones de primera clase:** Las funciones son objetos
- **Asíncrono:** Manejo de operaciones no bloqueantes
- **Multiplataforma:** Navegador, servidor, apps móviles, IoT

### **Entorno de Ejecución**
```javascript
// Navegador
console.log('Hola desde el navegador');

// Node.js
// Ejecutar: node archivo.js

// Deno
// Ejecutar: deno run archivo.js

// Bun
// Ejecutar: bun run archivo.js
```

## 01 - Variables

### **Declaración de Variables**

#### **`var` (ES5 y anteriores)**
```javascript
// var tiene function scope
var nombre = "Juan";
var edad = 30;

// Hoisting: la declaración se eleva
console.log(ciudad); // undefined
var ciudad = "Madrid";

// Re-declaración permitida
var x = 10;
var x = 20; // ✅ Permitido

// Problema común con var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 3, 3, 3
}
```

#### **`let` (ES6+)**
```javascript
// let tiene block scope
let contador = 0;
let esActivo = true;

// No hoisting (Error Temporal Dead Zone)
// console.log(temp); // ❌ ReferenceError
let temp = 100;

// Re-declaración NO permitida en mismo scope
let y = 10;
// let y = 20; // ❌ SyntaxError

// Comportamiento correcto en loops
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); // 0, 1, 2
}
```

#### **`const` (ES6+)**
```javascript
// const tiene block scope y es inmutable (la referencia)
const PI = 3.14159;
const URL_API = "https://api.ejemplo.com";

// Debe inicializarse al declarar
// const SIN_VALOR; // ❌ SyntaxError

// No se puede reasignar
const MAX_USUARIOS = 100;
// MAX_USUARIOS = 200; // ❌ TypeError

// Pero los objetos y arrays son mutables
const usuario = { nombre: "Ana", edad: 25 };
usuario.edad = 26; // ✅ Permitido
// usuario = {}; // ❌ Error (reasignación)

const colores = ["rojo", "verde"];
colores.push("azul"); // ✅ Permitido
```

### **Patrones de Nombrar Variables**
```javascript
// Camel Case (recomendado para variables/funciones)
let nombreUsuario = "Carlos";
let esUsuarioActivo = true;
let precioTotalProducto = 99.99;

// Pascal Case (para clases/constructores)
class UsuarioAutenticado {}
function ConfiguracionServidor() {}

// Snake Case (común en constantes)
const MAXIMO_INTENTOS = 3;
const API_KEY_SECRET = "abc123";

// UPPER_CASE (constantes globales)
const CONFIG = {
    API_URL: "https://api.ejemplo.com",
    TIMEOUT: 5000
};
```

### **Variables Globales vs Locales**
```javascript
// Variable global (mal práctica)
var globalVar = "Soy global";

function ejemploScope() {
    // Variable local a la función
    let localVar = "Soy local";
    
    // Accede a global
    console.log(globalVar); // ✅
    
    // Variable con mismo nombre (shadowing)
    let globalVar = "Shadowing"; // Oculta la global
    console.log(globalVar); // "Shadowing"
}

// Fuera de la función
console.log(localVar); // ❌ ReferenceError
```

### **Destructuring Assignment (ES6+)**
```javascript
// Arrays
const [primero, segundo] = [10, 20, 30];
console.log(primero); // 10

// Con valores por defecto
const [a = 1, b = 2] = [100];
console.log(b); // 2

// Saltar elementos
const [x, , z] = [1, 2, 3];
console.log(z); // 3

// Objects
const persona = { nombre: "Luis", edad: 30, ciudad: "Barcelona" };
const { nombre, edad } = persona;
console.log(nombre); // "Luis"

// Renombrar variables
const { nombre: nombreCompleto } = persona;

// Valores por defecto en objetos
const { pais = "España" } = persona;
```

### **Variables Dinámicas**
```javascript
// Variables computadas
let contador = 0;
let nombreVariable = `usuario_${contador}`;

// Uso con bracket notation
const usuario = {
    nombre: "Maria",
    edad: 28
};

const propiedad = "nombre";
console.log(usuario[propiedad]); // "Maria"

// Variables en template literals
const saludo = `Hola ${usuario.nombre}, tienes ${usuario.edad} años`;
```

## 02 - Tipos de Datos

### **Tipos Primitivos**
```javascript
// String
let texto = "Hola Mundo";
let textoComillas = 'Puede usar comillas simples';
let textoBackticks = `Template literals ${texto}`;

// Number
let entero = 42;
let decimal = 3.14;
let cientifico = 5e3; // 5000
let infinito = Infinity;
let noNumero = NaN; // Not a Number

// BigInt (ES2020)
let grande = 9007199254740991n;
let masGrande = BigInt("123456789012345678901234567890");

// Boolean
let verdadero = true;
let falso = false;

// Null
let nulo = null; // Valor intencionalmente vacío

// Undefined
let indefinido; // Variable declarada sin valor
let noDefinido = undefined;

// Symbol (ES6)
let simbolo1 = Symbol("descripcion");
let simbolo2 = Symbol("descripcion");
console.log(simbolo1 === simbolo2); // false (únicos)

// Symbol global
let simboloGlobal = Symbol.for("clave");
let mismoSimbolo = Symbol.for("clave");
console.log(simboloGlobal === mismoSimbolo); // true
```

### **Tipos de Referencia (Objetos)**
```javascript
// Object
let objeto = { clave: "valor" };

// Array
let array = [1, 2, 3];

// Function
function suma(a, b) { return a + b; }

// Date
let fecha = new Date();

// RegExp
let regex = /patron/gi;

// Map, Set, WeakMap, WeakSet
let mapa = new Map();
let conjunto = new Set();
```

### **Type Checking**
```javascript
// typeof (para primitivos)
typeof "texto"        // "string"
typeof 42            // "number"
typeof 42n           // "bigint"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof Symbol()      // "symbol"
typeof null          // "object" (¡bug histórico!)
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"

// instanceof (para objetos)
[] instanceof Array           // true
{} instanceof Object          // true
new Date() instanceof Date    // true

// Array.isArray()
Array.isArray([])             // true
Array.isArray({})             // false

// Object.prototype.toString.call()
Object.prototype.toString.call([])    // "[object Array]"
Object.prototype.toString.call(null)  // "[object Null]"
```

### **Type Coercion (Conversión Automática)**
```javascript
// Implicit Coercion
console.log(5 + "5");      // "55" (number → string)
console.log("5" - 3);      // 2 (string → number)
console.log(true + 1);     // 2 (boolean → number)
console.log(null + 1);     // 1 (null → 0)
console.log(undefined + 1) // NaN

// Truthy y Falsy Values
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: todo lo demás

if ("") console.log("truthy"); else console.log("falsy"); // falsy
if ([]) console.log("truthy"); else console.log("falsy"); // truthy
if ({}) console.log("truthy"); else console.log("falsy"); // truthy
```

### **Type Conversion Explícita**
```javascript
// String Conversion
String(123)          // "123"
String(true)         // "true"
String(null)         // "null"
(123).toString()     // "123"

// Number Conversion
Number("123")        // 123
Number("123abc")     // NaN
Number(true)         // 1
Number(false)        // 0
Number(null)         // 0
Number(undefined)    // NaN
parseInt("123px")    // 123
parseFloat("3.14cm") // 3.14

// Boolean Conversion
Boolean(1)           // true
Boolean(0)           // false
Boolean("")          // false
Boolean("texto")     // true
Boolean([])          // true
Boolean({})          // true
!!"texto"            // true (doble negación)

// BigInt Conversion
BigInt(123)          // 123n
BigInt("123")        // 123n
```

### **Valores Especiales**
```javascript
// NaN (Not a Number)
console.log(typeof NaN);           // "number"
console.log(NaN === NaN);          // false
console.log(isNaN(NaN));           // true
console.log(isNaN("texto"));       // true
console.log(Number.isNaN(NaN));    // true (ES6)
console.log(Number.isNaN("texto")); // false

// Infinity
console.log(1 / 0);                // Infinity
console.log(-1 / 0);               // -Infinity
console.log(Infinity > 1000);      // true
console.log(isFinite(Infinity));   // false
console.log(Number.isFinite(Infinity)); // false

// null vs undefined
let vacio = null;      // Asignación intencional
let noDefinido;        // No se ha asignado valor

console.log(typeof null);      // "object" (bug)
console.log(typeof undefined); // "undefined"
console.log(null == undefined); // true
console.log(null === undefined); // false
```

## 04 - Operadores

### **Operadores Aritméticos**
```javascript
// Básicos
let suma = 10 + 5;        // 15
let resta = 10 - 5;       // 5
let multiplicacion = 10 * 5; // 50
let division = 10 / 5;    // 2
let modulo = 10 % 3;      // 1 (resto)
let exponente = 2 ** 3;   // 8 (ES2016)

// Incremento/Decremento
let contador = 0;
contador++;      // Post-incremento: 0 → 1
++contador;      // Pre-incremento: 1 → 2
contador--;      // Post-decremento: 2 → 1
--contador;      // Pre-decremento: 1 → 0

// Diferencia entre pre y post
let a = 5;
let b = a++;    // b = 5, a = 6
let c = ++a;    // c = 7, a = 7

// Unarios
let positivo = +"10";     // 10 (conversión a número)
let negativo = -10;       // -10
```

### **Operadores de Asignación**
```javascript
let x = 10;

// Asignación básica
x = 20;

// Asignación con operación
x += 5;     // x = x + 5 → 25
x -= 3;     // x = x - 3 → 22
x *= 2;     // x = x * 2 → 44
x /= 4;     // x = x / 4 → 11
x %= 3;     // x = x % 3 → 2
x **= 3;    // x = x ** 3 → 8

// Asignación lógica
let y = true;
y &&= false;    // y = y && false → false
y ||= true;     // y = y || true → true

// Nullish coalescing assignment (ES2021)
let z = null;
z ??= 10;       // z = null ?? 10 → 10
z ??= 20;       // z = 10 ?? 20 → 10 (no cambia)
```

### **Operadores de Comparación**
```javascript
// Igualdad (==) vs Igualdad estricta (===)
console.log(5 == "5");    // true (coerción)
console.log(5 === "5");   // false (tipos diferentes)

// Desigualdad (!=) vs Desigualdad estricta (!==)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true

// Comparación de valores
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 >= 5);      // true
console.log(5 <= 4);      // false

// Comparación con strings
console.log("a" < "b");   // true (orden alfabético)
console.log("10" < "2");  // true (comparación lexicográfica)
console.log("10" < 2);    // false ("10" → 10, 10 < 2)

// Valores especiales
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

### **Operadores Lógicos**
```javascript
// AND (&&) - Devuelve primer valor falsy o último truthy
console.log(true && false);      // false
console.log(0 && "texto");       // 0
console.log("texto" && 123);     // 123

// OR (||) - Devuelve primer valor truthy o último falsy
console.log(false || true);      // true
console.log(null || "texto");    // "texto"
console.log("texto" || 123);     // "texto"

// NOT (!) - Invierte el valor booleano
console.log(!true);              // false
console.log(!0);                 // true
console.log(!!"texto");          // true (doble negación)

// Nullish Coalescing (??) - ES2020
console.log(null ?? "default");     // "default"
console.log(undefined ?? "fallback"); // "fallback"
console.log(0 ?? "default");        // 0 (solo null/undefined)
console.log("" ?? "default");       // ""
```

### **Operador Ternario**
```javascript
// Sintaxis: condición ? valorSiTrue : valorSiFalse
let edad = 18;
let puedeVotar = edad >= 18 ? "Sí puede" : "No puede";

// Ternarios múltiples (no recomendado para más de 2 niveles)
let puntuacion = 85;
let nota = puntuacion >= 90 ? "A" :
           puntuacion >= 80 ? "B" :
           puntuacion >= 70 ? "C" :
           puntuacion >= 60 ? "D" : "F";

// Uso con funciones
function getSaludo(hora) {
    return hora < 12 ? "Buenos días" :
           hora < 20 ? "Buenas tardes" : "Buenas noches";
}

// Asignación condicional
let usuario = null;
let nombre = usuario ? usuario.nombre : "Invitado";
let nombreModerno = usuario?.nombre ?? "Invitado"; // ES2020
```

### **Operadores Bitwise**
```javascript
// Operaciones a nivel de bits
let a = 5;      // 0101
let b = 3;      // 0011

console.log(a & b);   // 0001 → 1 (AND)
console.log(a | b);   // 0111 → 7 (OR)
console.log(a ^ b);   // 0110 → 6 (XOR)
console.log(~a);      // 1010 → -6 (NOT) (complemento a 2)
console.log(a << 1);  // 1010 → 10 (left shift)
console.log(a >> 1);  // 0010 → 2 (right shift con signo)
console.log(a >>> 1); // 0010 → 2 (right shift sin signo)

// Uso práctico: flags/permissions
const PERMISOS = {
    LECTURA:   0b001,  // 1
    ESCRITURA: 0b010,  // 2
    EJECUCION: 0b100   // 4
};

let permisosUsuario = PERMISOS.LECTURA | PERMISOS.ESCRITURA; // 3 (011)

// Verificar permisos
if (permisosUsuario & PERMISOS.LECTURA) {
    console.log("Tiene permiso de lectura");
}
```

### **Operadores Especiales**
```javascript
// Spread Operator (...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 }; // { x: 1, y: 2, z: 3 }

// Rest Parameter (...)
function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10

// Optional Chaining (?.)
let usuario = { perfil: { nombre: "Ana" } };
console.log(usuario.perfil?.nombre);      // "Ana"
console.log(usuario.direccion?.ciudad);   // undefined (no error)

// Comma Operator
let x = (1, 2, 3); // x = 3 (evalúa todo, devuelve último)
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j);
}

// typeof
console.log(typeof 42);           // "number"
console.log(typeof "texto");      // "string"
console.log(typeof {});           // "object"

// delete
let objeto = { x: 1, y: 2 };
delete objeto.x;                  // elimina propiedad x
console.log(objeto);              // { y: 2 }

// in
console.log("y" in objeto);       // true
console.log("toString" in objeto); // true (heredado)

// instanceof
console.log([] instanceof Array);    // true
console.log({} instanceof Object);   // true
```

### **Precedencia de Operadores**
```javascript
// De mayor a menor precedencia
// 1. () (paréntesis)
// 2. ! ++ -- (unarios)
// 3. ** (exponenciación)
// 4. * / % (multiplicación/división)
// 5. + - (suma/resta)
// 6. < <= > >= (comparación)
// 7. == != === !== (igualdad)
// 8. && (AND lógico)
// 9. || (OR lógico)
// 10. ?? (nullish coalescing)
// 11. ? : (ternario)
// 12. = += -= etc. (asignación)
// 13. , (coma)

// Ejemplo de precedencia
let resultado = 2 + 3 * 4;      // 14 (no 20)
let otro = (2 + 3) * 4;         // 20

// Asociatividad
let a = 2 ** 3 ** 2;           // 512 (2^(3^2)) derecha a izquierda
let b = (2 ** 3) ** 2;         // 64 ((2^3)^2)
```

## 06 - Strings

### **Creación de Strings**
```javascript
// Tres formas de crear strings
let str1 = "Comillas dobles";
let str2 = 'Comillas simples';
let str3 = `Template literals`;

// Caracteres especiales
let especial = "Primera línea\nSegunda línea\tTabulación";
let unicode = "café"; // é = \u00E9
let emoji = "👍 JavaScript";

// String constructor
let strObj = new String("Objeto String");
let strPrim = String(123); // "123"

// Longitud
console.log("JavaScript".length); // 10
```

### **Template Literals (ES6)**
```javascript
// Interpolación de variables
let nombre = "Carlos";
let edad = 30;
let saludo = `Hola ${nombre}, tienes ${edad} años`;

// Expresiones
let precio = 99.99;
let iva = 0.21;
let total = `Total: ${precio * (1 + iva)}€`;

// Multilínea
let carta = `
Estimado ${nombre},

Gracias por su compra.
Total a pagar: ${total}€

Atentamente,
El equipo
`;

// Tagged templates
function etiqueta(strings, ...valores) {
    console.log(strings); // ["Hola ", ", tienes ", " años"]
    console.log(valores); // ["Carlos", 30]
    return strings[0] + valores[0].toUpperCase() + strings[1] + valores[1];
}
let resultado = etiqueta`Hola ${nombre}, tienes ${edad} años`;
```

### **Métodos de Strings**
```javascript
let texto = "JavaScript es increíble";

// Acceso a caracteres
console.log(texto[0]);          // "J"
console.log(texto.charAt(0));   // "J"
console.log(texto.charCodeAt(0)); // 74 (código Unicode)

// Búsqueda
console.log(texto.indexOf("Script"));   // 4
console.log(texto.lastIndexOf("a"));    // 3
console.log(texto.includes("es"));      // true
console.log(texto.startsWith("Java"));  // true
console.log(texto.endsWith("ble"));     // true
console.log(texto.search(/script/i));   // 4

// Extracción
console.log(texto.slice(0, 10));        // "JavaScript"
console.log(texto.substring(0, 10));    // "JavaScript"
console.log(texto.substr(4, 6));        // "Script"
console.log(texto.split(" "));          // ["JavaScript", "es", "increíble"]

// Modificación
console.log(texto.toLowerCase());       // "javascript es increíble"
console.log(texto.toUpperCase());       // "JAVASCRIPT ES INCREÍBLE"
console.log(texto.replace("increíble", "genial"));
console.log(texto.replaceAll("e", "E")); // "JavaScript Es incrEíblE"
console.log("  texto  ".trim());        // "texto"
console.log("  texto  ".trimStart());   // "texto  "
console.log("  texto  ".trimEnd());     // "  texto"

// Repetición y relleno
console.log("ha".repeat(3));            // "hahaha"
console.log("5".padStart(3, "0"));      // "005"
console.log("5".padEnd(3, "0"));        // "500"

// Unicode
console.log("👍".codePointAt(0));       // 128077
console.log(String.fromCodePoint(128077)); // "👍"
```

### **Comparación de Strings**
```javascript
// Comparación básica
console.log("a" < "b");          // true
console.log("A" < "a");          // true (Unicode: A=65, a=97)
console.log("10" < "2");         // true (comparación lexicográfica)

// Locale-aware comparison
console.log("ä".localeCompare("z", "de")); // -1 (en alemán ä viene antes)
console.log("ä".localeCompare("z", "sv")); // 1 (en sueco ä viene después)

// Case-insensitive comparison
let str1 = "JavaScript";
let str2 = "javascript";
console.log(str1.toLowerCase() === str2.toLowerCase()); // true
console.log(str1.localeCompare(str2, undefined, { sensitivity: 'base' })); // 0
```

### **Expresiones Regulares con Strings**
```javascript
let texto = "El precio es 99.99€ con IVA 21%";

// match
let numeros = texto.match(/\d+/g); // ["99", "99", "21"]
let primerNumero = texto.match(/\d+/); // ["99"]

// replace con regex
let sinNumeros = texto.replace(/\d+/g, "X");
let formato = texto.replace(/(\d+)\.(\d+)€/, "$$$1,$2");

// split con regex
let palabras = texto.split(/\s+/);

// test
let tieneNumero = /\d+/.test(texto); // true

// exec (iterativo)
let regex = /\d+/g;
let resultado;
while ((resultado = regex.exec(texto)) !== null) {
    console.log(`Encontrado: ${resultado[0]} en posición ${resultado.index}`);
}
```

### **Iteración sobre Strings**
```javascript
let texto = "Hola";

// for...of (recomendado)
for (let caracter of texto) {
    console.log(caracter); // H, o, l, a
}

// for clásico
for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}

// Array.from
let caracteres = Array.from(texto); // ["H", "o", "l", "a"]

// spread operator
let letras = [...texto]; // ["H", "o", "l", "a"]

// forEach (convirtiendo a array)
[...texto].forEach((caracter, index) => {
    console.log(`${index}: ${caracter}`);
});
```

### **String Builder Pattern**
```javascript
// Concatenación ineficiente (crea nuevos strings)
let resultado = "";
for (let i = 0; i < 1000; i++) {
    resultado += i + ","; // Crea nuevo string cada iteración
}

// Usar array (más eficiente)
let partes = [];
for (let i = 0; i < 1000; i++) {
    partes.push(i);
}
let resultadoEficiente = partes.join(",");

// Template literals para concatenación compleja
let usuario = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
let mensaje = `
Usuario: ${usuario.nombre}
Edad: ${usuario.edad}
Ciudad: ${usuario.ciudad}
`;

// String.raw para strings crudos
let ruta = String.raw`C:\Users\Nombre\Documentos\archivo.txt`;
let regex = new RegExp(String.raw`\d+\.\d+`);
```

### **Validación y Sanitización**
```javascript
// Validación básica
function esStringValido(str) {
    return typeof str === 'string' && str.trim().length > 0;
}

// Sanitización
function sanitizarInput(input) {
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .substring(0, 255);   // Limit length
}

// Validación de email
function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validación de contraseña
function esContraseñaSegura(contraseña) {
    return contraseña.length >= 8 &&
           /[A-Z]/.test(contraseña) &&
           /[a-z]/.test(contraseña) &&
           /\d/.test(contraseña) &&
           /[^A-Za-z0-9]/.test(contraseña);
}

// Escape de HTML
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
```

### **Strings Internacionalización**
```javascript
// Collation (ordenación)
let palabras = ["ä", "z", "a"];
palabras.sort((a, b) => a.localeCompare(b, 'de'));
// ["a", "ä", "z"] en alemán

// Normalización Unicode
let texto1 = "café";
let texto2 = "cafe\u0301"; // e + acento agudo
console.log(texto1 === texto2); // false
console.log(texto1.normalize() === texto2.normalize()); // true

// Pluralización
function pluralizar(cantidad, singular, plural) {
    return cantidad === 1 ? singular : plural;
}
console.log(`Tienes ${5} ${pluralizar(5, 'mensaje', 'mensajes')}`);

// Formateo de números
let numero = 1234567.89;
console.log(new Intl.NumberFormat('es-ES').format(numero)); // "1.234.567,89"
console.log(new Intl.NumberFormat('en-US').format(numero)); // "1,234,567.89"
```

## 08 - Condicionales

### **if / else / else if**
```javascript
// Sintaxis básica
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// else if
let nota = 85;

if (nota >= 90) {
    console.log("Calificación: A");
} else if (nota >= 80) {
    console.log("Calificación: B");
} else if (nota >= 70) {
    console.log("Calificación: C");
} else {
    console.log("Calificación: D o F");
}

// Condiciones múltiples
let esMiembro = true;
let tieneCupon = false;

if (esMiembro && !tieneCupon) {
    console.log("10% de descuento para miembros");
} else if (esMiembro && tieneCupon) {
    console.log("25% de descuento con cupón de miembro");
} else if (!esMiembro && tieneCupon) {
    console.log("15% de descuento con cupón");
} else {
    console.log("Precio normal");
}
```

### **switch**
```javascript
// Sintaxis básica
let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    default:
        nombreDia = "Fin de semana";
}

// Múltiples casos
let mes = 2;
let estacion;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes inválido";
}

// Switch con expresiones
let puntuacion = 85;
let calificacion;

switch (true) {
    case puntuacion >= 90:
        calificacion = "A";
        break;
    case puntuacion >= 80:
        calificacion = "B";
        break;
    case puntuacion >= 70:
        calificacion = "C";
        break;
    default:
        calificacion = "D";
}
```

### **Operador Ternario**
```javascript
// Sintaxis: condición ? valorSiTrue : valorSiFalse
let edad = 20;
let puedeBeber = edad >= 18 ? "Sí" : "No";

// Ternarios anidados (no más de 2 niveles recomendado)
let hora = 14;
let saludo = hora < 12 ? "Buenos días" :
             hora < 20 ? "Buenas tardes" : "Buenas noches";

// Uso con funciones
function obtenerCategoria(edad) {
    return edad < 13 ? "Niño" :
           edad < 18 ? "Adolescente" :
           edad < 65 ? "Adulto" : "Adulto mayor";
}

// Asignación condicional
let usuario = null;
let nombre = usuario ? usuario.nombre : "Invitado";

// ES2020: Nullish Coalescing Operator
let nombreSeguro = usuario?.nombre ?? "Invitado";
```

### **Truthy y Falsy Values**
```javascript
// Valores Falsy (se evalúan como false)
false
0
-0
0n (BigInt zero)
"", '', `` (strings vacíos)
null
undefined
NaN

// Valores Truthy (se evalúan como true)
true
1, -1, 3.14 (cualquier número no cero)
"texto", "0", "false" (strings no vacíos)
[], {} (arrays y objetos vacíos)
function() {}
Symbol()

// Ejemplos prácticos
let nombre = "";
if (nombre) {
    console.log("Hola " + nombre);
} else {
    console.log("Nombre no proporcionado");
}

let lista = [];
if (lista.length) { // Mejor que if (lista)
    console.log("La lista tiene elementos");
}

let config = {};
if (config && config.apiUrl) { // Antes de Optional Chaining
    console.log(config.apiUrl);
}
```

### **Short-circuit Evaluation**
```javascript
// AND (&&) - Devuelve primer falsy o último truthy
let usuario = { nombre: "Ana" };
let nombre = usuario && usuario.nombre; // "Ana"

// Uso común para ejecución condicional
usuario && usuario.registrarAcceso();

// OR (||) - Devuelve primer truthy o último falsy
let puerto = process.env.PORT || 3000;
let nombreDisplay = nombreUsuario || "Invitado";

// Nullish Coalescing (??) - Solo para null/undefined
let valor = null;
let resultado = valor ?? "default"; // "default"
let cero = 0 ?? "default"; // 0 (no "default")

// Ejemplo completo
function configurarAPI(config) {
    const url = config.url ?? "https://api.default.com";
    const timeout = config.timeout || 5000; // 0 sería reemplazado
    const retries = config.retries ?? 3;
    
    return { url, timeout, retries };
}
```

### **Optional Chaining (ES2020)**
```javascript
// Acceso seguro a propiedades anidadas
let usuario = {
    perfil: {
        nombre: "Carlos",
        direccion: {
            ciudad: "Madrid"
        }
    }
};

// Sin optional chaining
let ciudad = usuario && 
             usuario.perfil && 
             usuario.perfil.direccion && 
             usuario.perfil.direccion.ciudad;

// Con optional chaining
let ciudadSegura = usuario?.perfil?.direccion?.ciudad;

// Con arrays
let primerAmigo = usuario?.amigos?.[0]?.nombre;

// Con funciones
let resultado = usuario?.registrar?.();

// Combinado con nullish coalescing
let nombre = usuario?.perfil?.nombre ?? "Invitado";
```

### **Pattern Matching (propuesta ES)**
```javascript
// Actualmente podemos simular con switch u objetos
function manejarEstado(estado) {
    const acciones = {
        'cargando': () => mostrarSpinner(),
        'exito': (data) => mostrarData(data),
        'error': (error) => mostrarError(error),
        'default': () => console.log('Estado desconocido')
    };
    
    return (acciones[estado] || acciones.default)();
}

// Usando Map para más flexibilidad
const manejadores = new Map([
    [/^cargando/, () => console.log("Cargando...")],
    [/^exito/, (data) => console.log("Éxito:", data)],
    [/^error_\d+/, (codigo) => console.log("Error código:", codigo)]
]);

function procesarEstado(estado, datos) {
    for (let [patron, manejador] of manejadores) {
        if (patron.test(estado)) {
            return manejador(datos);
        }
    }
    console.log("Estado no manejado:", estado);
}
```

### **Guard Clauses**
```javascript
// Anti-pattern: Nested ifs
function procesarPedido(pedido) {
    if (pedido) {
        if (pedido.items && pedido.items.length > 0) {
            if (pedido.cliente && pedido.cliente.activo) {
                // Lógica principal aquí
                return "Pedido procesado";
            } else {
                return "Cliente inactivo";
            }
        } else {
            return "Pedido vacío";
        }
    } else {
        return "Pedido inválido";
    }
}

// Mejor: Guard Clauses (return early)
function procesarPedidoMejor(pedido) {
    // Validaciones tempranas
    if (!pedido) return "Pedido inválido";
    if (!pedido.items || pedido.items.length === 0) return "Pedido vacío";
    if (!pedido.cliente?.activo) return "Cliente inactivo";
    
    // Lógica principal (sin anidación)
    const total = calcularTotal(pedido);
    const impuesto = calcularImpuesto(total);
    
    return { total, impuesto };
}

// Ejemplo más complejo
function autenticarUsuario(usuario, contraseña) {
    // Guard clauses
    if (!usuario || !contraseña) {
        throw new Error("Credenciales requeridas");
    }
    
    if (contraseña.length < 8) {
        throw new Error("Contraseña muy corta");
    }
    
    if (usuario.includes("@") && !validarEmail(usuario)) {
        throw new Error("Email inválido");
    }
    
    // Lógica de autenticación
    const usuarioDB = buscarUsuario(usuario);
    
    if (!usuarioDB) {
        throw new Error("Usuario no encontrado");
    }
    
    if (!verificarContraseña(contraseña, usuarioDB.hash)) {
        throw new Error("Contraseña incorrecta");
    }
    
    if (usuarioDB.bloqueado) {
        throw new Error("Cuenta bloqueada");
    }
    
    // Todo OK
    return generarToken(usuarioDB);
}
```

### **Validación Avanzada con Operadores**
```javascript
// Validación de entrada
function validarFormulario(datos) {
    // Usando operadores lógicos para validaciones complejas
    const esValido = (
        datos.nombre?.trim().length >= 2 &&
        datos.email?.includes("@") &&
        datos.edad >= 18 &&
        datos.edad <= 120 &&
        (datos.pais === "ES" || datos.pais === "PT") &&
        (!datos.telefono || /^\d{9}$/.test(datos.telefono))
    );
    
    return esValido;
}

// Validación con mensajes específicos
function obtenerErrores(datos) {
    const errores = [];
    
    !datos.nombre?.trim() && errores.push("Nombre requerido");
    datos.nombre?.trim().length < 2 && errores.push("Nombre muy corto");
    !datos.email?.includes("@") && errores.push("Email inválido");
    datos.edad < 18 && errores.push("Debe ser mayor de edad");
    datos.edad > 120 && errores.push("Edad inválida");
    
    return errores.length === 0 ? null : errores;
}

// Pattern matching con objetos
const validadores = {
    nombre: (valor) => valor?.trim().length >= 2 || "Nombre muy corto",
    email: (valor) => /.+@.+\..+/.test(valor) || "Email inválido",
    edad: (valor) => (valor >= 18 && valor <= 120) || "Edad inválida"
};

function validarConEsquema(datos, esquema) {
    const errores = {};
    
    for (const [campo, validador] of Object.entries(esquema)) {
        const resultado = validador(datos[campo]);
        if (resultado !== true) {
            errores[campo] = resultado;
        }
    }
    
    return Object.keys(errores).length === 0 ? null : errores;
}
```

## 10 - Arrays

### **Creación de Arrays**
```javascript
// Literal (recomendado)
let frutas = ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "texto", true, null, {}];

// Constructor
let arr1 = new Array();        // []
let arr2 = new Array(5);       // [empty × 5]
let arr3 = new Array(1, 2, 3); // [1, 2, 3]

// Array.from() (ES6)
let fromString = Array.from("Hola"); // ["H", "o", "l", "a"]
let fromSet = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]
let fromArrayLike = Array.from({length: 5}, (_, i) => i * 2); // [0, 2, 4, 6, 8]

// Array.of() (ES6)
let ofArray = Array.of(7);       // [7] (no como new Array(7))
let ofMulti = Array.of(1, 2, 3); // [1, 2, 3]

// Spread operator
let original = [1, 2, 3];
let copia = [...original]; // [1, 2, 3]
let combinado = [...original, 4, 5]; // [1, 2, 3, 4, 5]
```

### **Acceso y Modificación**
```javascript
let frutas = ["manzana", "banana", "naranja"];

// Acceso por índice
console.log(frutas[0]); // "manzana"
console.log(frutas[frutas.length - 1]); // "naranja" (último)

// Modificación
frutas[1] = "pera"; // ["manzana", "pera", "naranja"]

// Índices negativos (con at(), ES2022)
console.log(frutas.at(-1)); // "naranja"
console.log(frutas.at(-2)); // "pera"

// Propiedad length
frutas.length = 2; // ["manzana", "pera"] (trunca)
frutas.length = 5; // ["manzana", "pera", empty × 3]
console.log(frutas[3]); // undefined

// in operator
console.log(0 in frutas); // true
console.log(3 in frutas); // false (índice vacío)
```

### **Métodos de Arrays**

#### **Añadir/Remover Elementos**
```javascript
let numeros = [1, 2, 3];

// push - añade al final
numeros.push(4); // [1, 2, 3, 4]
let nuevaLongitud = numeros.push(5, 6); // 6

// pop - remueve del final
let ultimo = numeros.pop(); // 6, array: [1, 2, 3, 4, 5]

// unshift - añade al inicio
numeros.unshift(0); // [0, 1, 2, 3, 4, 5]

// shift - remueve del inicio
let primero = numeros.shift(); // 0, array: [1, 2, 3, 4, 5]

// splice - modifica en cualquier posición
let removidos = numeros.splice(1, 2); // [2, 3], array: [1, 4, 5]
numeros.splice(1, 0, 2, 3); // Inserta: [1, 2, 3, 4, 5]

// slice - copia una porción
let subArray = numeros.slice(1, 4); // [2, 3, 4] (no modifica original)

// concat - combina arrays
let combinado = numeros.concat([6, 7]); // [1, 2, 3, 4, 5, 6, 7]
```

#### **Búsqueda**
```javascript
let personas = [
    {id: 1, nombre: "Ana", edad: 25},
    {id: 2, nombre: "Luis", edad: 30},
    {id: 3, nombre: "Ana", edad: 28}
];

// indexOf - busca valor primitivo
let indices = [1, 2, 3, 2, 1];
console.log(indices.indexOf(2)); // 1
console.log(indices.indexOf(2, 2)); // 3 (busca desde índice 2)

// lastIndexOf
console.log(indices.lastIndexOf(1)); // 4

// find - busca con función
let ana = personas.find(p => p.nombre === "Ana"); // {id: 1, nombre: "Ana", edad: 25}

// findIndex
let indiceAna = personas.findIndex(p => p.nombre === "Ana"); // 0

// findLast / findLastIndex (ES2023)
let ultimaAna = personas.findLast(p => p.nombre === "Ana"); // {id: 3, nombre: "Ana", edad: 28}

// includes
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(2, 2)); // false (busca desde índice 2)
```

#### **Transformación**
```javascript
let numeros = [1, 2, 3, 4, 5];

// map - transforma cada elemento
let cuadrados = numeros.map(n => n * n); // [1, 4, 9, 16, 25]

// filter - filtra elementos
let pares = numeros.filter(n => n % 2 === 0); // [2, 4]

// reduce - reduce a un valor
let suma = numeros.reduce((total, num) => total + num, 0); // 15

// reduceRight - reduce de derecha a izquierda
let concatenado = ["a", "b", "c"].reduceRight((acc, val) => acc + val); // "cba"

// flat - aplana arrays anidados
let anidado = [1, [2, [3, [4]]]];
console.log(anidado.flat()); // [1, 2, [3, [4]]]
console.log(anidado.flat(2)); // [1, 2, 3, [4]]
console.log(anidado.flat(Infinity)); // [1, 2, 3, 4]

// flatMap - map + flat
let frases = ["Hola mundo", "JavaScript es genial"];
let palabras = frases.flatMap(frase => frase.split(" ")); // ["Hola", "mundo", "JavaScript", "es", "genial"]
```

#### **Ordenación**
```javascript
let numeros = [40, 1, 5, 200];

// sort - ordena in-place
numeros.sort(); // [1, 200, 40, 5] (orden lexicográfico)
numeros.sort((a, b) => a - b); // [1, 5, 40, 200] (numérico)

// reverse - invierte orden
numeros.reverse(); // [200, 40, 5, 1]

// Ordenación compleja
let personas = [
    {nombre: "Ana", edad: 25},
    {nombre: "Luis", edad: 30},
    {nombre: "Carlos", edad: 25}
];

personas.sort((a, b) => {
    // Primero por edad, luego por nombre
    if (a.edad !== b.edad) {
        return a.edad - b.edad;
    }
    return a.nombre.localeCompare(b.nombre);
});
```

#### **Iteración**
```javascript
let colores = ["rojo", "verde", "azul"];

// forEach - ejecuta función para cada elemento
colores.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});

// every - todos cumplen condición
let todosStrings = colores.every(color => typeof color === "string"); // true

// some - alguno cumple condición
let tieneRojo = colores.some(color => color === "rojo"); // true

// keys - iterador de índices
for (let index of colores.keys()) {
    console.log(index); // 0, 1, 2
}

// values - iterador de valores
for (let color of colores.values()) {
    console.log(color); // "rojo", "verde", "azul"
}

// entries - iterador de pares [índice, valor]
for (let [index, color] of colores.entries()) {
    console.log(`${index}: ${color}`);
}
```

### **Arrays Multidimensionales**
```javascript
// Matriz 2D
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Acceso
console.log(matriz[0][1]); // 2
console.log(matriz[2][0]); // 7

// Iteración
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
    }
}

// Usando forEach
matriz.forEach((fila, i) => {
    fila.forEach((valor, j) => {
        console.log(`matriz[${i}][${j}] = ${valor}`);
    });
});

// Matriz 3D
let cubo = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

console.log(cubo[1][0][1]); // 6
```

### **Métodos Avanzados (ES2023+)**
```javascript
// toReversed, toSorted, toSpliced, with (métodos inmutables)
let original = [3, 1, 4, 1, 5];

let ordenado = original.toSorted(); // [1, 1, 3, 4, 5] (original sin cambiar)
let invertido = original.toReversed(); // [5, 1, 4, 1, 3]

// with - reemplaza elemento en índice específico (inmutable)
let modificado = original.with(2, 9); // [3, 1, 9, 1, 5]
let ultimoCambiado = original.with(-1, 9); // [3, 1, 4, 1, 9]

// toSpliced - splice inmutable
let sinPrimeros = original.toSpliced(0, 2); // [4, 1, 5]
let conInsertados = original.toSpliced(2, 0, 9, 9); // [3, 1, 9, 9, 4, 1, 5]

// findLast y findLastIndex
let ultimoMayor = original.findLast(n => n > 3); // 5
let indiceUltimo = original.findLastIndex(n => n > 3); // 4
```

### **Performance y Optimización**
```javascript
// Crear arrays grandes eficientemente
// MAL: push en loop
let arrayLento = [];
for (let i = 0; i < 1000000; i++) {
    arrayLento.push(i); // Reasigna memoria frecuentemente
}

// MEJOR: pre-asignar tamaño
let arrayRapido = new Array(1000000);
for (let i = 0; i < 1000000; i++) {
    arrayRapido[i] = i;
}

// MEJOR: Array.from con función generadora
let arrayOptimizado = Array.from({length: 1000000}, (_, i) => i);

// Typed Arrays para datos numéricos
let buffer = new ArrayBuffer(16); // 16 bytes
let int32View = new Int32Array(buffer); // 4 elementos de 4 bytes cada uno

// Benchmarking
function benchmark() {
    const size = 1000000;
    
    console.time('push');
    let arr1 = [];
    for (let i = 0; i < size; i++) arr1.push(i);
    console.timeEnd('push');
    
    console.time('pre-allocated');
    let arr2 = new Array(size);
    for (let i = 0; i < size; i++) arr2[i] = i;
    console.timeEnd('pre-allocated');
    
    console.time('Array.from');
    let arr3 = Array.from({length: size}, (_, i) => i);
    console.timeEnd('Array.from');
}
```

## 11 - Sets

### **Concepto y Creación**
```javascript
// Set - colección de valores únicos
let miSet = new Set();

// Desde array (elimina duplicados)
let numeros = new Set([1, 2, 3, 2, 1]); // {1, 2, 3}
let palabras = new Set(["hola", "mundo", "hola"]); // {"hola", "mundo"}

// Valores únicos (incluyendo objetos diferentes)
let obj1 = {x: 1};
let obj2 = {x: 1};
let setObjetos = new Set([obj1, obj2, obj1]); // {obj1, obj2} (obj1 aparece una vez)

// Tipos mixtos
let mixto = new Set([1, "1", true, null, undefined, NaN, NaN]); // NaN se considera único
```

### **Métodos Básicos**
```javascript
let set = new Set();

// add - añade valor (devuelve el Set)
set.add(1); // Set {1}
set.add(2).add(3).add(2); // Set {1, 2, 3} (el 2 duplicado no se añade)

// has - verifica existencia
console.log(set.has(2)); // true
console.log(set.has(4)); // false

// delete - elimina valor
set.delete(2); // true (eliminó el 2)
set.delete(4); // false (no existía)

// clear - elimina todos
set.clear(); // Set {}

// size - número de elementos
set = new Set([1, 2, 3, 4, 5]);
console.log(set.size); // 5
```

### **Iteración**
```javascript
let set = new Set(["rojo", "verde", "azul"]);

// for...of
for (let color of set) {
    console.log(color);
}

// forEach
set.forEach((valor, valorAgain, setCompleto) => {
    console.log(valor); // Set usa el mismo valor para clave y valor
});

// Iteradores
let valores = set.values(); // Iterator
console.log(valores.next().value); // "rojo"

let entradas = set.entries(); // Iterator de [valor, valor]
for (let entrada of entradas) {
    console.log(entrada); // ["rojo", "rojo"], ["verde", "verde"], etc.
}

// Convertir a Array
let arrayDesdeSet = Array.from(set); // ["rojo", "verde", "azul"]
let spreadArray = [...set]; // ["rojo", "verde", "azul"]
```

### **Operaciones de Conjuntos**
```javascript
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

// Unión
let union = new Set([...setA, ...setB]); // {1, 2, 3, 4, 5, 6}

// Intersección
let interseccion = new Set([...setA].filter(x => setB.has(x))); // {3, 4}

// Diferencia (A - B)
let diferencia = new Set([...setA].filter(x => !setB.has(x))); // {1, 2}

// Diferencia simétrica
let diferenciaSimetrica = new Set(
    [...setA].filter(x => !setB.has(x))
    .concat([...setB].filter(x => !setA.has(x)))
); // {1, 2, 5, 6}

// Subconjunto
function esSubconjunto(subconjunto, conjunto) {
    return [...subconjunto].every(x => conjunto.has(x));
}

let setC = new Set([1, 2]);
console.log(esSubconjunto(setC, setA)); // true
console.log(esSubconjunto(setB, setA)); // false
```

### **Casos de Uso Comunes**
```javascript
// 1. Eliminar duplicados de array
function eliminarDuplicados(array) {
    return [...new Set(array)];
}
console.log(eliminarDuplicados([1, 2, 2, 3, 3, 3])); // [1, 2, 3]

// 2. Seguimiento de elementos únicos
class Carrito {
    constructor() {
        this.productos = new Set();
    }
    
    agregar(producto) {
        if (this.productos.has(producto.id)) {
            throw new Error("Producto ya en el carrito");
        }
        this.productos.add(producto.id);
    }
    
    eliminar(id) {
        return this.productos.delete(id);
    }
    
    tieneProducto(id) {
        return this.productos.has(id);
    }
}

// 3. Valores únicos en propiedades de objetos
let usuarios = [
    {id: 1, nombre: "Ana", ciudad: "Madrid"},
    {id: 2, nombre: "Luis", ciudad: "Barcelona"},
    {id: 3, nombre: "Ana", ciudad: "Madrid"}
];

let ciudadesUnicas = new Set(usuarios.map(u => u.ciudad)); // {"Madrid", "Barcelona"}
let nombresUnicos = [...new Set(usuarios.map(u => u.nombre))]; // ["Ana", "Luis"]

// 4. Conjunto de tags/etiquetas
class SistemaTags {
    constructor() {
        this.tags = new Set();
    }
    
    agregarTags(...nuevosTags) {
        nuevosTags.forEach(tag => this.tags.add(tag.toLowerCase()));
    }
    
    tieneTodos(tagsRequeridos) {
        return tagsRequeridos.every(tag => this.tags.has(tag));
    }
    
    tieneAlguno(tagsRequeridos) {
        return tagsRequeridos.some(tag => this.tags.has(tag));
    }
    
    interseccion(otroSistema) {
        return new Set([...this.tags].filter(tag => otroSistema.tags.has(tag)));
    }
}
```

### **WeakSet**
```javascript
// WeakSet - solo almacena objetos (referencias débiles)
let weakSet = new WeakSet();

let obj1 = {id: 1};
let obj2 = {id: 2};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

// Los objetos se eliminan automáticamente cuando no hay otras referencias
obj1 = null; // obj1 será eliminado del WeakSet en el próximo GC

// Diferencias con Set normal:
// 1. Solo almacena objetos
// 2. No es iterable
// 3. No tiene .size, .clear(), .keys(), .values(), .entries()
// 4. Las referencias son débiles (no evitan garbage collection)

// Caso de uso: evitar referencia circular
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.referencias = new WeakSet(); // No evita GC
    }
    
    agregarReferencia(nodo) {
        this.referencias.add(nodo);
    }
    
    tieneReferencia(nodo) {
        return this.referencias.has(nodo);
    }
}
```

### **Performance Comparativa**
```javascript
// Benchmark: Set vs Array para búsqueda
function benchmarkBusqueda() {
    const size = 100000;
    
    // Array
    let array = [];
    for (let i = 0; i < size; i++) array.push(i);
    
    // Set
    let set = new Set(array);
    
    const busquedas = 10000;
    
    // Búsqueda en Array (O(n) promedio)
    console.time('Array.includes');
    for (let i = 0; i < busquedas; i++) {
        array.includes(Math.floor(Math.random() * size * 2));
    }
    console.timeEnd('Array.includes');
    
    // Búsqueda en Set (O(1) promedio)
    console.time('Set.has');
    for (let i = 0; i < busquedas; i++) {
        set.has(Math.floor(Math.random() * size * 2));
    }
    console.timeEnd('Set.has');
}

// Resultado: Set es mucho más rápido para búsquedas
```

## 12 - Maps

### **Concepto y Creación**
```javascript
// Map - colección de pares clave-valor
let mapa = new Map();

// Desde array de arrays
let mapaDesdeArray = new Map([
    ["nombre", "Ana"],
    ["edad", 25],
    ["ciudad", "Madrid"]
]);

// Claves pueden ser de cualquier tipo
let mapaComplejo = new Map();
mapaComplejo.set(1, "número");
mapaComplejo.set("1", "string");
mapaComplejo.set(true, "booleano");
mapaComplejo.set({id: 1}, "objeto");
mapaComplejo.set([1, 2], "array");

// Comparación con objetos
let obj = {};
let mapa2 = new Map();

// Objetos solo aceptan strings o symbols como keys
obj[1] = "uno"; // La clave se convierte a string "1"
obj[{x: 1}] = "objeto"; // La clave se convierte a "[object Object]"

// Map mantiene el tipo de clave
mapa2.set(1, "uno");
mapa2.set({x: 1}, "objeto");
```

### **Métodos Básicos**
```javascript
let mapa = new Map();

// set - añade o actualiza clave-valor
mapa.set("nombre", "Carlos");
mapa.set("edad", 30);
mapa.set("edad", 31); // Actualiza valor existente

// get - obtiene valor por clave
console.log(mapa.get("nombre")); // "Carlos"
console.log(mapa.get("noExiste")); // undefined

// has - verifica existencia de clave
console.log(mapa.has("nombre")); // true
console.log(mapa.has("ciudad")); // false

// delete - elimina por clave
mapa.delete("edad"); // true

// clear - elimina todos
// mapa.clear();

// size - número de elementos
console.log(mapa.size); // 1
```

### **Iteración**
```javascript
let mapa = new Map([
    ["JavaScript", 95],
    ["Python", 90],
    ["Java", 85],
    ["C++", 80]
]);

// for...of (devuelve [clave, valor])
for (let [lenguaje, puntaje] of mapa) {
    console.log(`${lenguaje}: ${puntaje}`);
}

// forEach
mapa.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});

// Iteradores específicos
let claves = mapa.keys(); // Iterator de claves
let valores = mapa.values(); // Iterator de valores
let entradas = mapa.entries(); // Iterator de [clave, valor]

// Convertir a Array/Objeto
let arrayDeEntradas = Array.from(mapa); // [["JavaScript", 95], ...]
let arrayDeClaves = [...mapa.keys()]; // ["JavaScript", "Python", ...]
let arrayDeValores = [...mapa.values()]; // [95, 90, ...]

// Objeto desde Map
let objeto = Object.fromEntries(mapa); // {JavaScript: 95, Python: 90, ...}
```

### **Casos de Uso Avanzados**
```javascript
// 1. Cache de resultados
class Cache {
    constructor() {
        this.cache = new Map();
    }
    
    getOrCompute(clave, computar) {
        if (this.cache.has(clave)) {
            console.log("Cache hit!");
            return this.cache.get(clave);
        }
        
        console.log("Cache miss, computando...");
        const resultado = computar();
        this.cache.set(clave, resultado);
        return resultado;
    }
    
    invalidar(clave) {
        this.cache.delete(clave);
    }
    
    limpiar() {
        this.cache.clear();
    }
}

// 2. Contador de frecuencias
function contarFrecuencias(array) {
    const frecuencias = new Map();
    
    for (const elemento of array) {
        frecuencias.set(elemento, (frecuencias.get(elemento) || 0) + 1);
    }
    
    return frecuencias;
}

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const frecuencias = contarFrecuencias(palabras);

// 3. Mapeo de objetos complejos
class SistemaPermisos {
    constructor() {
        this.permisos = new Map(); // Usuario → Set de permisos
    }
    
    conceder(usuario, ...permisos) {
        if (!this.permisos.has(usuario)) {
            this.permisos.set(usuario, new Set());
        }
        
        const setPermisos = this.permisos.get(usuario);
        permisos.forEach(permiso => setPermisos.add(permiso));
    }
    
    tienePermiso(usuario, permiso) {
        return this.permisos.get(usuario)?.has(permiso) || false;
    }
    
    listarUsuariosConPermiso(permiso) {
        const usuarios = [];
        for (let [usuario, permisos] of this.permisos) {
            if (permisos.has(permiso)) {
                usuarios.push(usuario);
            }
        }
        return usuarios;
    }
}
```

### **WeakMap**
```javascript
// WeakMap - similar a Map pero con referencias débiles en las claves
let weakMap = new WeakMap();

let obj1 = {id: 1};
let obj2 = {id: 2};

// Solo objetos como claves
weakMap.set(obj1, "datos privados");
weakMap.set(obj2, "más datos");

console.log(weakMap.get(obj1)); // "datos privados"

// Cuando el objeto clave se pierde, la entrada se elimina automáticamente
obj1 = null; // La entrada se eliminará en el próximo GC

// Características:
// 1. Solo objetos como claves
// 2. No es iterable
// 3. No tiene .size, .clear(), .keys(), .values(), .entries()
// 4. Las claves son referencias débiles

// Caso de uso: Datos privados
const datosPrivados = new WeakMap();

class Usuario {
    constructor(nombre, email) {
        datosPrivados.set(this, {
            nombre: nombre,
            email: email,
            token: Math.random().toString(36).substring(2)
        });
    }
    
    get nombre() {
        return datosPrivados.get(this).nombre;
    }
    
    get email() {
        return datosPrivados.get(this).email;
    }
    
    // El token es realmente privado, no accesible desde fuera
}

let usuario = new Usuario("Ana", "ana@email.com");
console.log(usuario.nombre); // "Ana"
console.log(usuario.token); // undefined (error si intentamos acceder)
```

### **Comparación: Map vs Object**
```javascript
// Cuando usar Map:
// 1. Claves que no son strings/symbols
// 2. Necesitas mantener el orden de inserción
// 3. Necesitas conocer el tamaño fácilmente (.size)
// 4. Alto rendimiento en adición/eliminación frecuente
// 5. Quieres iterar fácilmente

// Cuando usar Object:
// 1. Claves simples (strings/symbols)
// 2. Necesitas trabajar con JSON
// 3. Métodos específicos de objeto (hasOwnProperty, etc.)
// 4. Cuando la sintaxis literal es más conveniente

// Benchmark: Map vs Object
function benchmark() {
    const size = 100000;
    
    // Object
    console.time('Object insert');
    let obj = {};
    for (let i = 0; i < size; i++) {
        obj[i] = i;
    }
    console.timeEnd('Object insert');
    
    // Map
    console.time('Map insert');
    let mapa = new Map();
    for (let i = 0; i < size; i++) {
        mapa.set(i, i);
    }
    console.timeEnd('Map insert');
    
    // Iteración
    console.time('Object iterate');
    for (let key in obj) {
        let val = obj[key];
    }
    console.timeEnd('Object iterate');
    
    console.time('Map iterate');
    for (let [key, val] of mapa) {}
    console.timeEnd('Map iterate');
}

// Map generalmente es más rápido para operaciones frecuentes
```

### **Métodos Avanzados y Utilidades**
```javascript
// Map con valores por defecto
class DefaultMap extends Map {
    constructor(defaultValue, entries) {
        super(entries);
        this.defaultValue = defaultValue;
    }
    
    get(key) {
        return super.has(key) ? super.get(key) : this.defaultValue;
    }
}

// Uso
let contadores = new DefaultMap(0);
["a", "b", "a", "c", "b"].forEach(letra => {
    contadores.set(letra, contadores.get(letra) + 1);
});

// Map bidireccional
class BiMap {
    constructor(entries = []) {
        this.forward = new Map(entries);
        this.reverse = new Map(entries.map(([k, v]) => [v, k]));
    }
    
    set(key, value) {
        this.forward.set(key, value);
        this.reverse.set(value, key);
        return this;
    }
    
    get(key) {
        return this.forward.get(key);
    }
    
    getKey(value) {
        return this.reverse.get(value);
    }
    
    has(key) {
        return this.forward.has(key);
    }
    
    hasValue(value) {
        return this.reverse.has(value);
    }
    
    delete(key) {
        const value = this.forward.get(key);
        this.forward.delete(key);
        this.reverse.delete(value);
        return true;
    }
}

// Uso
let biMap = new BiMap([["es", "España"], ["fr", "Francia"]]);
console.log(biMap.get("es")); // "España"
console.log(biMap.getKey("Francia")); // "fr"
```

## 14 - Loops

### **for Loop Tradicional**
```javascript
// Sintaxis básica
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Múltiples variables
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`${i} - ${j}`);
    // 0 - 10, 1 - 9, 2 - 8, 3 - 7, 4 - 6
}

// Loop infinito (con break)
for (let i = 0; ; i++) {
    if (i >= 5) break;
    console.log(i);
}

// Saltando iteraciones
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue; // Salta números pares
    console.log(i); // 1, 3, 5, 7, 9
}

// Loop descendente
for (let i = 10; i > 0; i--) {
    console.log(i); // 10, 9, 8, ..., 1
}
```

### **for...of Loop (ES6)**
```javascript
// Arrays
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(numero); // 1, 2, 3, 4, 5
}

// Strings
let texto = "Hola";
for (let letra of texto) {
    console.log(letra); // H, o, l, a
}

// Maps
let mapa = new Map([["a", 1], ["b", 2]]);
for (let [clave, valor] of mapa) {
    console.log(`${clave}: ${valor}`); // a: 1, b: 2
}

// Sets
let conjunto = new Set([1, 2, 3]);
for (let valor of conjunto) {
    console.log(valor); // 1, 2, 3
}

// Arguments object
function sumarTodos() {
    let suma = 0;
    for (let num of arguments) {
        suma += num;
    }
    return suma;
}
console.log(sumarTodos(1, 2, 3)); // 6

// Iterables personalizados
let objetoIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (let valor of objetoIterable) {
    console.log(valor); // 1, 2, 3
}
```

### **for...in Loop**
```javascript
// Iterar sobre propiedades enumerables de un objeto
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
    // nombre: Ana, edad: 25, ciudad: Madrid
}

// Incluye propiedades heredadas (usar hasOwnProperty)
function Animal() {
    this.esVivo = true;
}
Animal.prototype.respirar = function() {};

let perro = new Animal();
perro.nombre = "Fido";

for (let prop in perro) {
    console.log(prop); // esVivo, nombre, respirar
}

for (let prop in perro) {
    if (perro.hasOwnProperty(prop)) {
        console.log(prop); // esVivo, nombre (no respirar)
    }
}

// No usar con arrays (usa for...of)
let array = [10, 20, 30];
array.propiedadExtra = "extra";

for (let index in array) {
    console.log(index); // 0, 1, 2, "propiedadExtra" 😕
}

for (let valor of array) {
    console.log(valor); // 10, 20, 30 ✅
}
```

### **while y do...while**
```javascript
// while - verifica condición al inicio
let contador = 0;
while (contador < 5) {
    console.log(contador); // 0, 1, 2, 3, 4
    contador++;
}

// do...while - ejecuta al menos una vez
let intentos = 0;
do {
    console.log(`Intento ${intentos + 1}`);
    intentos++;
} while (intentos < 3 && Math.random() > 0.5);

// Loop infinito controlado
let ejecutar = true;
while (ejecutar) {
    // Hacer algo...
    if (condicionDeSalida) {
        ejecutar = false;
    }
}

// Validación de entrada
let entrada;
do {
    entrada = prompt("Ingresa un número mayor a 10:");
} while (entrada <= 10 || isNaN(entrada));
```

### **Métodos de Iteración de Arrays**
```javascript
let numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach((numero, index, array) => {
    console.log(`numeros[${index}] = ${numero}`);
});

// map - transforma cada elemento
let cuadrados = numeros.map(n => n * n); // [1, 4, 9, 16, 25]

// filter - filtra elementos
let pares = numeros.filter(n => n % 2 === 0); // [2, 4]

// reduce - reduce a un valor
let suma = numeros.reduce((total, num) => total + num, 0); // 15

// every - todos cumplen condición
let todosPositivos = numeros.every(n => n > 0); // true

// some - alguno cumple condición
let hayMayorQueTres = numeros.some(n => n > 3); // true

// find - encuentra primer elemento que cumple
let primerMayorQueTres = numeros.find(n => n > 3); // 4

// findIndex - encuentra índice
let indice = numeros.findIndex(n => n > 3); // 3
```

### **break, continue y labels**
```javascript
// break - sale del loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue - salta a siguiente iteración
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i); // 1, 3, 5, 7, 9
}

// Labels - para loops anidados
outerLoop: for (let i = 0; i < 3; i++) {
    console.log(`Iteración exterior: ${i}`);
    
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Sale de ambos loops
        }
        console.log(`  Iteración interior: ${j}`);
    }
}

// Ejemplo práctico con labels
busqueda: for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === objetivo) {
            console.log(`Encontrado en [${i}][${j}]`);
            break busqueda;
        }
    }
}
```

### **Generadores y Iteradores**
```javascript
// Función generadora
function* generadorNumeros() {
    yield 1;
    yield 2;
    yield 3;
}

// Usar en for...of
for (let numero of generadorNumeros()) {
    console.log(numero); // 1, 2, 3
}

// Generador infinito
function* contadorInfinito() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

// Usar con límite
let limite = 5;
let contador = 0;
for (let numero of contadorInfinito()) {
    console.log(numero);
    contador++;
    if (contador >= limite) break;
}

// Iterador manual
let iterable = {
    [Symbol.iterator]() {
        let paso = 0;
        return {
            next() {
                paso++;
                if (paso <= 3) {
                    return { value: paso, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

for (let valor of iterable) {
    console.log(valor); // 1, 2, 3
}
```

### **Performance y Optimización**
```javascript
// Benchmark diferentes tipos de loops
function benchmarkLoops() {
    const size = 1000000;
    const array = Array.from({length: size}, (_, i) => i);
    
    // for tradicional
    console.time('for');
    let suma1 = 0;
    for (let i = 0; i < array.length; i++) {
        suma1 += array[i];
    }
    console.timeEnd('for');
    
    // for optimizado (cache de length)
    console.time('for optimized');
    let suma2 = 0;
    for (let i = 0, len = array.length; i < len; i++) {
        suma2 += array[i];
    }
    console.timeEnd('for optimized');
    
    // for...of
    console.time('for...of');
    let suma3 = 0;
    for (let num of array) {
        suma3 += num;
    }
    console.timeEnd('for...of');
    
    // forEach
    console.time('forEach');
    let suma4 = 0;
    array.forEach(num => {
        suma4 += num;
    });
    console.timeEnd('forEach');
    
    // reduce
    console.time('reduce');
    let suma5 = array.reduce((acc, num) => acc + num, 0);
    console.timeEnd('reduce');
    
    console.log('Sumas iguales:', suma1 === suma2 && suma2 === suma3);
}

// Consejos de performance:
// 1. for tradicional es generalmente más rápido para arrays grandes
// 2. Cachear .length en loops for
// 3. Evitar .forEach para operaciones matemáticas intensivas
// 4. Usar iteradores nativos (for...of) para legibilidad
// 5. Considerar typed arrays para cálculos numéricos intensivos
```

### **Loop Patterns Avanzados**
```javascript
// 1. Pipeline de procesamiento
function procesarDatos(datos) {
    return datos
        .filter(item => item.activo)              // Filtrar activos
        .map(item => ({                           // Transformar
            ...item,
            nombre: item.nombre.toUpperCase(),
            fecha: new Date(item.fecha)
        }))
        .sort((a, b) => b.fecha - a.fecha)       // Ordenar por fecha
        .slice(0, 10);                           // Tomar primeros 10
}

// 2. Loop asíncrono en serie
async function procesarEnSerie(items, procesarItem) {
    const resultados = [];
    
    for (let item of items) {
        const resultado = await procesarItem(item);
        resultados.push(resultado);
    }
    
    return resultados;
}

// 3. Loop asíncrono en paralelo
async function procesarEnParalelo(items, procesarItem) {
    const promesas = items.map(item => procesarItem(item));
    return Promise.all(promesas);
}

// 4. Throttling/Debouncing en loops
function throttle(fn, delay) {
    let ultimaEjecucion = 0;
    return function(...args) {
        const ahora = Date.now();
        if (ahora - ultimaEjecucion >= delay) {
            ultimaEjecucion = ahora;
            fn.apply(this, args);
        }
    };
}

// 5. Paginación con generator
function* paginador(totalItems, itemsPorPagina) {
    let pagina = 0;
    while (pagina * itemsPorPagina < totalItems) {
        yield {
            pagina: pagina + 1,
            inicio: pagina * itemsPorPagina,
            fin: Math.min((pagina + 1) * itemsPorPagina, totalItems)
        };
        pagina++;
    }
}

// Uso
for (let pagina of paginador(100, 10)) {
    console.log(`Página ${pagina.pagina}: items ${pagina.inicio}-${pagina.fin}`);
}
```

## 16 - Funciones

### **Declaración de Funciones**
```javascript
// 1. Function Declaration (hoisted)
function suma(a, b) {
    return a + b;
}

// 2. Function Expression
const resta = function(a, b) {
    return a - b;
};

// 3. Arrow Function (ES6)
const multiplicacion = (a, b) => a * b;

// 4. Constructor Function (poco usado)
const Division = new Function('a', 'b', 'return a / b');

// 5. Método en objeto
const calculadora = {
    suma: function(a, b) { return a + b; },
    resta(a, b) { return a - b; } // Método abreviado
};

// 6. Getter/Setter
const persona = {
    _nombre: '',
    get nombre() { return this._nombre; },
    set nombre(valor) { this._nombre = valor.toUpperCase(); }
};
```

### **Parámetros y Argumentos**
```javascript
// Parámetros por defecto (ES6)
function saludar(nombre = "Invitado", saludo = "Hola") {
    return `${saludo}, ${nombre}!`;
}

// Parámetros rest (...)
function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10

// Argumentos nombrados con objetos
function crearUsuario({ nombre, edad, email = "sin@email.com" }) {
    return { nombre, edad, email };
}
crearUsuario({ nombre: "Ana", edad: 25 });

// Argumentos dinámicos
function configurar(opciones) {
    const defaults = { modo: "produccion", debug: false, timeout: 5000 };
    return { ...defaults, ...opciones };
}

// arguments object (solo en funciones tradicionales)
function listarArgumentos() {
    return Array.from(arguments).join(", ");
}
console.log(listarArgumentos(1, 2, 3)); // "1, 2, 3"
```

### **Scope y Closures**
```javascript
// Scope global
let globalVar = "global";

function pruebaScope() {
    // Scope de función
    let funcionVar = "funcion";
    
    if (true) {
        // Scope de bloque
        let bloqueVar = "bloque";
        console.log(globalVar); // "global" ✅
        console.log(funcionVar); // "funcion" ✅
    }
    
    // console.log(bloqueVar); // ❌ ReferenceError
}

// Closure
function crearContador() {
    let cuenta = 0; // Variable privada
    
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        obtener: () => cuenta
    };
}

const contador = crearContador();
console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.obtener()); // 2
// contador.cuenta no es accesible directamente

// IIFE (Immediately Invoked Function Expression)
const modulo = (function() {
    let estado = "privado";
    
    return {
        getEstado: () => estado,
        setEstado: (nuevoEstado) => estado = nuevoEstado
    };
})();
```

### **Arrow Functions vs Funciones Tradicionales**
```javascript
// Diferencias clave:
// 1. Sintaxis
function tradicional(a, b) { return a + b; }
const arrow = (a, b) => a + b;

// 2. this binding
const objeto = {
    valor: 42,
    tradicional: function() {
        console.log(this.valor); // 42 (this = objeto)
    },
    arrow: () => {
        console.log(this.valor); // undefined (this = contexto padre)
    }
};

// 3. arguments object
function conArguments() {
    console.log(arguments); // [1, 2, 3]
}
const sinArguments = () => {
    // console.log(arguments); // ❌ ReferenceError
    console.log(...arguments); // Usar parámetros rest
};

// 4. Constructor
function PuedeSerConstructor() {}
new PuedeSerConstructor(); // ✅

const NoPuedeSerConstructor = () => {};
// new NoPuedeSerConstructor(); // ❌ TypeError

// 5. Prototype
console.log(PuedeSerConstructor.prototype); // {}
console.log(NoPuedeSerConstructor.prototype); // undefined
```

### **Funciones de Orden Superior**
```javascript
// Funciones que reciben o devuelven funciones
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const doble = crearMultiplicador(2);
const triple = crearMultiplicador(3);
console.log(doble(5)); // 10
console.log(triple(5)); // 15

// Funciones como parámetros (callbacks)
function procesarArray(array, callback) {
    const resultados = [];
    for (let elemento of array) {
        resultados.push(callback(elemento));
    }
    return resultados;
}

const numeros = [1, 2, 3, 4];
const cuadrados = procesarArray(numeros, n => n * n); // [1, 4, 9, 16]

// Composición de funciones
const componer = (f, g) => x => f(g(x));
const sumarUno = x => x + 1;
const multiplicarPorDos = x => x * 2;
const sumarYMultiplicar = componer(multiplicarPorDos, sumarUno);
console.log(sumarYMultiplicar(5)); // 12 (5+1=6, 6*2=12)
```

### **Funciones Recursivas**
```javascript
// Factorial recursivo
function factorial(n) {
    if (n <= 1) return 1; // Caso base
    return n * factorial(n - 1); // Caso recursivo
}
console.log(factorial(5)); // 120

// Fibonacci con memoization
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
console.log(factorial(50)); // 12586269025 (rápido con memo)

// Recursión en estructuras anidadas
function aplanarArray(array) {
    const resultado = [];
    
    function recursivo(arr) {
        for (let elemento of arr) {
            if (Array.isArray(elemento)) {
                recursivo(elemento);
            } else {
                resultado.push(elemento);
            }
        }
    }
    
    recursivo(array);
    return resultado;
}

console.log(aplanarArray([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5]

// Tail Call Optimization (solo en modo estricto)
"use strict";
function factorialTail(n, acumulador = 1) {
    if (n <= 1) return acumulador;
    return factorialTail(n - 1, n * acumulador); // Tail call
}
```

### **Funciones Generadoras**
```javascript
// Función generadora básica
function* generadorSimple() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generadorSimple();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generador infinito
function* contadorInfinito() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

// Delegación de yield
function* generador1() {
    yield 1;
    yield 2;
}

function* generador2() {
    yield* generador1(); // Delega a otro generador
    yield 3;
    yield 4;
}

// Generador asíncrono
async function* generadorAsincrono() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

(async () => {
    for await (let valor of generadorAsincrono()) {
        console.log(valor); // 1, 2, 3
    }
})();
```

### **Funciones Asíncronas**
```javascript
// async/await
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://api.ejemplo.com/datos');
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Propagar el error
    }
}

// Múltiples await en paralelo
async function obtenerTodoParalelo() {
    const [usuario, productos, carrito] = await Promise.all([
        fetch('/api/usuario'),
        fetch('/api/productos'),
        fetch('/api/carrito')
    ]);
    
    return {
        usuario: await usuario.json(),
        productos: await productos.json(),
        carrito: await carrito.json()
    };
}

// Async generator
async function* paginarAPI(url) {
    let pagina = 1;
    let hayMas = true;
    
    while (hayMas) {
        const respuesta = await fetch(`${url}?page=${pagina}`);
        const datos = await respuesta.json();
        
        yield datos.items;
        
        hayMas = datos.hayMas;
        pagina++;
    }
}

// Manejo de errores en async/await
async function procesoConErrores() {
    try {
        const resultado1 = await paso1();
        const resultado2 = await paso2(resultado1);
        return await paso3(resultado2);
    } catch (error) {
        if (error instanceof TypeError) {
            // Manejar error específico
            console.error('Error de tipo:', error);
        } else if (error.status === 404) {
            console.error('Recurso no encontrado');
        } else {
            console.error('Error desconocido:', error);
            throw error; // Re-lanzar
        }
    } finally {
        console.log('Proceso completado (con o sin error)');
    }
}
```

### **Funciones Currying y Partial Application**
```javascript
// Currying: transformar función de múltiples parámetros en cadena de funciones de un parámetro
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

// Ejemplo
function sumaTres(a, b, c) {
    return a + b + c;
}

const sumaCurried = curry(sumaTres);
console.log(sumaCurried(1)(2)(3)); // 6
console.log(sumaCurried(1, 2)(3)); // 6
console.log(sumaCurried(1)(2, 3)); // 6

// Partial Application (bind)
function multiplicar(a, b) {
    return a * b;
}

const doble = multiplicar.bind(null, 2);
console.log(doble(5)); // 10

const triple = multiplicar.bind(null, 3);
console.log(triple(5)); // 15

// Implementación manual
function partial(fn, ...argsFijos) {
    return function(...argsRestantes) {
        return fn(...argsFijos, ...argsRestantes);
    };
}

const saludar = (saludo, nombre) => `${saludo}, ${nombre}!`;
const saludarHola = partial(saludar, "Hola");
console.log(saludarHola("Mundo")); // "Hola, Mundo!"
```

### **Funciones Puras y Side Effects**
```javascript
// Función pura: mismo input → mismo output, sin side effects
function puraSuma(a, b) {
    return a + b; // No modifica nada externo
}

// Función impura: tiene side effects
let contador = 0;
function impuraIncrementar() {
    contador++; // Modifica variable externa
    return contador;
}

// Otros side effects comunes:
function conSideEffects() {
    console.log('Hola'); // I/O
    Math.random(); // Entrada externa
    fecha.setHours(12); // Modifica argumento
    // Modificar variables globales
    // Llamar a otras funciones impuras
}

// Beneficios de funciones puras:
// 1. Predictibilidad
// 2. Testeabilidad
// 3. Cacheability
// 4. Paralelización

// Memoization automática
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const clave = JSON.stringify(args);
        
        if (cache.has(clave)) {
            console.log('Cache hit!');
            return cache.get(clave);
        }
        
        console.log('Calculando...');
        const resultado = fn(...args);
        cache.set(clave, resultado);
        return resultado;
    };
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Calculando... 120
console.log(memoizedFactorial(5)); // Cache hit! 120
```

### **Decoradores de Funciones (ES Proposal)**
```javascript
// Decorador simple
function decoradorLog(fn) {
    return function(...args) {
        console.log(`Llamando ${fn.name} con:`, args);
        const resultado = fn.apply(this, args);
        console.log(`Resultado:`, resultado);
        return resultado;
    };
}

// Uso
const sumaDecorada = decoradorLog(suma);
sumaDecorada(2, 3); // Logs entrada y salida

// Decorador con parámetros
function retry(maxIntentos, delay = 1000) {
    return function(target, propertyKey, descriptor) {
        const original = descriptor.value;
        
        descriptor.value = async function(...args) {
            let ultimoError;
            
            for (let intento = 1; intento <= maxIntentos; intento++) {
                try {
                    console.log(`Intento ${intento} de ${maxIntentos}`);
                    return await original.apply(this, args);
                } catch (error) {
                    ultimoError = error;
                    console.error(`Intento ${intento} falló:`, error.message);
                    
                    if (intento < maxIntentos) {
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }
                }
            }
            
            throw ultimoError;
        };
        
        return descriptor;
    };
}

// Ejemplo de uso (requiere soporte experimental)
class API {
    @retry(3, 1000)
    async obtenerDatos() {
        // Lógica que puede fallar
    }
}
```

## 18 - Objetos

### **Creación de Objetos**
```javascript
// 1. Object literal (más común)
const persona = {
    nombre: "Ana",
    edad: 25,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

// 2. Constructor Object
const auto = new Object();
auto.marca = "Toyota";
auto.modelo = "Corolla";

// 3. Object.create() (herencia prototípica)
const prototipo = { tipo: "animal" };
const perro = Object.create(prototipo);
perro.nombre = "Fido";

// 4. Función constructora
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto1 = new Producto("Laptop", 999);

// 5. Clases (ES6)
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
const usuario1 = new Usuario("Carlos", "carlos@email.com");
```

### **Acceso y Modificación de Propiedades**
```javascript
const libro = {
    titulo: "El Quijote",
    autor: "Cervantes",
    año: 1605
};

// Acceso con dot notation
console.log(libro.titulo); // "El Quijote"

// Acceso con bracket notation (para propiedades dinámicas)
const propiedad = "autor";
console.log(libro[propiedad]); // "Cervantes"

// Acceso a propiedades con espacios
const objetoRaro = {
    "nombre completo": "Juan Pérez",
    "edad actual": 30
};
console.log(objetoRaro["nombre completo"]); // "Juan Pérez"

// Asignación/actualización
libro.paginas = 500;
libro["editorial"] = "Alfaguara";

// Eliminación
delete libro.año;

// Verificación de existencia
console.log("titulo" in libro); // true
console.log(libro.hasOwnProperty("autor")); // true
console.log("toString" in libro); // true (heredada)
console.log(libro.hasOwnProperty("toString")); // false
```

### **Métodos de Objeto**
```javascript
const cuenta = {
    saldo: 1000,
    titular: "Ana",
    
    // Método
    depositar(cantidad) {
        this.saldo += cantidad;
        return this.saldo;
    },
    
    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            return cantidad;
        }
        throw new Error("Saldo insuficiente");
    },
    
    // Getter
    get saldoFormateado() {
        return `${this.saldo}€`;
    },
    
    // Setter con validación
    set nuevoSaldo(valor) {
        if (valor < 0) {
            throw new Error("El saldo no puede ser negativo");
        }
        this.saldo = valor;
    }
};

// Uso de getter/setter
console.log(cuenta.saldoFormateado); // "1000€" (sin paréntesis)
cuenta.nuevoSaldo = 1500;

// Métodos de instancia vs estáticos
class Matematica {
    // Método de instancia
    sumar(a, b) {
        return a + b;
    }
    
    // Método estático
    static PI = 3.14159;
    
    static max(...numeros) {
        return Math.max(...numeros);
    }
}

// Llamada a método estático
console.log(Matematica.PI); // 3.14159
console.log(Matematica.max(1, 5, 3)); // 5
```

### **Prototipos y Herencia**
```javascript
// Herencia prototípica
function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.hablar = function() {
    console.log(`${this.nombre} hace un sonido.`);
};

function Perro(nombre) {
    Animal.call(this, nombre); // Llamar constructor padre
}

// Establecer herencia
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.hablar = function() {
    console.log(`${this.nombre} ladra.`);
};

const miPerro = new Perro("Fido");
miPerro.hablar(); // "Fido ladra."

// Herencia con clases (ES6)
class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
    
    arrancar() {
        return "Vehículo arrancado";
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca); // Llamar constructor padre
        this.modelo = modelo;
    }
    
    // Sobrescribir método
    arrancar() {
        return `${super.arrancar()}. Modelo: ${this.modelo}`;
    }
    
    // Método específico
    acelerar() {
        return "Acelerando...";
    }
}

const miCoche = new Coche("Toyota", "Corolla");
console.log(miCoche.arrancar()); // "Vehículo arrancado. Modelo: Corolla"
```

### **Object Methods Estáticos**
```javascript
const usuario = { nombre: "Ana", edad: 25, ciudad: "Madrid" };

// Object.keys() - array de propiedades propias enumerables
console.log(Object.keys(usuario)); // ["nombre", "edad", "ciudad"]

// Object.values() - array de valores
console.log(Object.values(usuario)); // ["Ana", 25, "Madrid"]

// Object.entries() - array de pares [clave, valor]
console.log(Object.entries(usuario)); // [["nombre", "Ana"], ["edad", 25], ["ciudad", "Madrid"]]

// Object.assign() - copia propiedades
const copia = Object.assign({}, usuario, { pais: "España" });

// Object.create() - crea con prototipo específico
const prototipo = { saludar() { return "Hola"; } };
const nuevoObj = Object.create(prototipo);
nuevoObj.nombre = "Luis";

// Object.defineProperty() - define propiedad con atributos
Object.defineProperty(usuario, 'id', {
    value: 1,
    writable: false, // no se puede modificar
    enumerable: true, // aparece en Object.keys()
    configurable: false // no se puede eliminar
});

// Object.getOwnPropertyDescriptor() - obtiene atributos
const descriptor = Object.getOwnPropertyDescriptor(usuario, 'nombre');

// Object.freeze() - hace objeto inmutable
Object.freeze(usuario);
// usuario.edad = 30; // ❌ Error en modo estricto, silencioso en modo normal

// Object.seal() - sella objeto (no se pueden añadir/eliminar propiedades)
Object.seal(usuario);
// usuario.profesion = "Ingeniera"; // ❌ No se puede añadir
// usuario.edad = 30; // ✅ Se puede modificar

// Object.preventExtensions() - previene añadir propiedades
Object.preventExtensions(usuario);
// delete usuario.ciudad; // ✅ Se puede eliminar
// usuario.pais = "España"; // ❌ No se puede añadir
```

### **Getters y Setters**
```javascript
class Rectangulo {
    constructor(ancho, alto) {
        this._ancho = ancho;
        this._alto = alto;
    }
    
    // Getter para área (propiedad calculada)
    get area() {
        return this._ancho * this._alto;
    }
    
    // Setter con validación
    set ancho(valor) {
        if (valor <= 0) {
            throw new Error("El ancho debe ser positivo");
        }
        this._ancho = valor;
    }
    
    set alto(valor) {
        if (valor <= 0) {
            throw new Error("El alto debe ser positivo");
        }
        this._alto = valor;
    }
    
    // Getter para perímetro
    get perimetro() {
        return 2 * (this._ancho + this._alto);
    }
}

const rect = new Rectangulo(10, 5);
console.log(rect.area); // 50 (sin paréntesis)
console.log(rect.perimetro); // 30

rect.ancho = 15; // Usa setter
// rect.ancho = -5; // ❌ Error

// Getters/Setters en objetos literales
const circulo = {
    _radio: 1,
    
    get radio() {
        return this._radio;
    },
    
    set radio(valor) {
        if (valor <= 0) {
            throw new Error("El radio debe ser positivo");
        }
        this._radio = valor;
    },
    
    get area() {
        return Math.PI * this._radio ** 2;
    },
    
    get circunferencia() {
        return 2 * Math.PI * this._radio;
    }
};

circulo.radio = 5;
console.log(circulo.area); // 78.53981633974483
```

### **Symbols como Propiedades**
```javascript
// Symbols son únicos y útiles para propiedades "privadas"
const idSymbol = Symbol('id');
const nombreSymbol = Symbol('nombre');

const usuario = {
    [idSymbol]: 123, // Propiedad con Symbol como clave
    [nombreSymbol]: "Ana",
    nombrePublico: "Ana Pública"
};

// Acceso a propiedades con Symbol
console.log(usuario[nombreSymbol]); // "Ana"
console.log(usuario.nombrePublico); // "Ana Pública"

// Los Symbols no aparecen en iteraciones normales
console.log(Object.keys(usuario)); // ["nombrePublico"]
console.log(Object.getOwnPropertySymbols(usuario)); // [Symbol(id), Symbol(nombre)]

// Symbol.for() - Symbols globales
const sym1 = Symbol.for('clave');
const sym2 = Symbol.for('clave');
console.log(sym1 === sym2); // true

// Symbol.iterator - para hacer objetos iterables
const objetoIterable = {
    datos: [1, 2, 3],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.datos.length) {
                    return { value: this.datos[index++], done: false };
                }
                return { done: true };
            }
        };
    }
};

for (let valor of objetoIterable) {
    console.log(valor); // 1, 2, 3
}
```

### **Proxy Objects**
```javascript
// Proxy - intercepta operaciones en objetos
const usuario = {
    nombre: "Ana",
    edad: 25
};

const proxyUsuario = new Proxy(usuario, {
    // Intercepta acceso a propiedades
    get(target, propiedad) {
        console.log(`Accediendo a propiedad: ${propiedad}`);
        
        if (propiedad === 'edad') {
            return `La edad es ${target[propiedad]}`;
        }
        
        return target[propiedad] || `Propiedad "${propiedad}" no existe`;
    },
    
    // Intercepta asignación
    set(target, propiedad, valor) {
        console.log(`Estableciendo ${propiedad} = ${valor}`);
        
        if (propiedad === 'edad' && (typeof valor !== 'number' || valor < 0)) {
            throw new Error("Edad inválida");
        }
        
        target[propiedad] = valor;
        return true; // Indica éxito
    },
    
    // Intercepta verificación de existencia
    has(target, propiedad) {
        return propiedad.startsWith('_') ? false : propiedad in target;
    },
    
    // Intercepta eliminación
    deleteProperty(target, propiedad) {
        if (propiedad.startsWith('_')) {
            throw new Error("No se pueden eliminar propiedades privadas");
        }
        delete target[propiedad];
        return true;
    }
});

console.log(proxyUsuario.nombre); // "Ana" (con log)
proxyUsuario.edad = 30; // Log y validación
// proxyUsuario.edad = -5; // ❌ Error
console.log('nombre' in proxyUsuario); // true
```

### **Patrones de Diseño con Objetos**
```javascript
// 1. Factory Pattern
function crearUsuario(nombre, tipo) {
    const usuario = { nombre };
    
    if (tipo === 'admin') {
        usuario.permisos = ['crear', 'leer', 'actualizar', 'eliminar'];
        usuario.esAdmin = true;
    } else if (tipo === 'usuario') {
        usuario.permisos = ['leer'];
        usuario.esAdmin = false;
    }
    
    return usuario;
}

// 2. Singleton Pattern
const Configuracion = (function() {
    let instancia;
    
    function crearInstancia() {
        return {
            apiUrl: 'https://api.ejemplo.com',
            timeout: 5000,
            modo: 'produccion'
        };
    }
    
    return {
        getInstance: function() {
            if (!instancia) {
                instancia = crearInstancia();
            }
            return instancia;
        }
    };
})();

const config1 = Configuracion.getInstance();
const config2 = Configuracion.getInstance();
console.log(config1 === config2); // true (misma instancia)

// 3. Observer Pattern
class Observable {
    constructor() {
        this.observadores = [];
    }
    
    suscribir(observador) {
        this.observadores.push(observador);
    }
    
    desuscribir(observador) {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }
    
    notificar(datos) {
        this.observadores.forEach(observador => observador.actualizar(datos));
    }
}

class Observador {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    actualizar(datos) {
        console.log(`${this.nombre} recibió:`, datos);
    }
}
```

### **Serialización y Deserialización**
```javascript
const usuario = {
    nombre: "Ana",
    edad: 25,
    fechaNacimiento: new Date(),
    amigos: ["Luis", "Carlos"],
    direccion: {
        calle: "Principal 123",
        ciudad: "Madrid"
    }
};

// JSON.stringify() - objeto a JSON string
const jsonString = JSON.stringify(usuario);
console.log(jsonString);
// {"nombre":"Ana","edad":25,"fechaNacimiento":"2024-01-15T10:30:00.000Z",...}

// JSON.parse() - JSON string a objeto
const objetoDesdeJSON = JSON.parse(jsonString);

// Personalizar serialización con toJSON()
const producto = {
    nombre: "Laptop",
    precio: 999,
    disponible: true,
    
    toJSON() {
        return {
            nombre: this.nombre,
            precio: this.precio,
            disponible: this.disponible ? "Sí" : "No"
        };
    }
};

console.log(JSON.stringify(producto));
// {"nombre":"Laptop","precio":999,"disponible":"Sí"}

// Reviver function en JSON.parse()
const jsonConFecha = '{"nombre":"Ana","fecha":"2024-01-15"}';
const objetoConFecha = JSON.parse(jsonConFecha, (clave, valor) => {
    if (clave === 'fecha') {
        return new Date(valor);
    }
    return valor;
});

// Clonación profunda con JSON (solo para objetos serializables)
function clonarProfundo(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

// Clonación profunda manual (más robusta)
function clonarProfundoCompleto(objeto, cache = new WeakMap()) {
    // Casos base
    if (objeto === null || typeof objeto !== 'object') {
        return objeto;
    }
    
    // Evitar circular references
    if (cache.has(objeto)) {
        return cache.get(objeto);
    }
    
    // Clonar según tipo
    let clon;
    
    if (objeto instanceof Date) {
        clon = new Date(objeto.getTime());
    } else if (objeto instanceof Map) {
        clon = new Map();
        cache.set(objeto, clon);
        objeto.forEach((valor, clave) => {
            clon.set(clave, clonarProfundoCompleto(valor, cache));
        });
    } else if (objeto instanceof Set) {
        clon = new Set();
        cache.set(objeto, clon);
        objeto.forEach(valor => {
            clon.add(clonarProfundoCompleto(valor, cache));
        });
    } else if (Array.isArray(objeto)) {
        clon = [];
        cache.set(objeto, clon);
        objeto.forEach((valor, index) => {
            clon[index] = clonarProfundoCompleto(valor, cache);
        });
    } else {
        clon = Object.create(Object.getPrototypeOf(objeto));
        cache.set(objeto, clon);
        Object.getOwnPropertyNames(objeto).forEach(propiedad => {
            clon[propiedad] = clonarProfundoCompleto(objeto[propiedad], cache);
        });
    }
    
    return clon;
}
```

### **Performance y Optimización**
```javascript
// 1. Shape de objetos y hidden classes
// JavaScript optimiza acceso basado en "shape" del objeto
function crearObjetoOptimo() {
    // Siempre crear propiedades en mismo orden
    return { a: 1, b: 2, c: 3 };
}

function crearObjetoSuboptimo() {
    // Diferentes órdenes crean diferentes hidden classes
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2, a: 1 }; // Diferente shape
    return [obj1, obj2];
}

// 2. Preferir arrays para datos homogéneos
const datosOptimos = [1, 2, 3, 4, 5]; // Todos números
const datosSuboptimos = [1, "dos", true, null]; // Mezcla de tipos

// 3. Object pooling para objetos frecuentemente creados/eliminados
class ObjectPool {
    constructor(crearObjeto) {
        this.crearObjeto = crearObjeto;
        this.pool = [];
    }
    
    obtener() {
        return this.pool.length > 0 ? this.pool.pop() : this.crearObjeto();
    }
    
    liberar(objeto) {
        // Resetear objeto
        Object.keys(objeto).forEach(key => delete objeto[key]);
        this.pool.push(objeto);
    }
}

// 4. Benchmarking de operaciones de objetos
function benchmark() {
    const size = 100000;
    
    // Creación de objetos
    console.time('Crear objetos');
    for (let i = 0; i < size; i++) {
        const obj = { a: i, b: i * 2, c: i * 3 };
    }
    console.timeEnd('Crear objetos');
    
    // Acceso a propiedades
    const obj = { a: 1, b: 2, c: 3 };
    console.time('Acceso dot notation');
    for (let i = 0; i < size; i++) {
        const valor = obj.a;
    }
    console.timeEnd('Acceso dot notation');
    
    console.time('Acceso bracket notation');
    const propiedad = 'a';
    for (let i = 0; i < size; i++) {
        const valor = obj[propiedad];
    }
    console.timeEnd('Acceso bracket notation');
}
```
