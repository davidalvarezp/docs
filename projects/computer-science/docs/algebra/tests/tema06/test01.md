# Test Tema 6 — Teoría de números, congruencias y criptografía

Practica las 15 preguntas del test. Marca una respuesta por pregunta y pulsa **Corregir test** para ver la nota, las respuestas correctas y explicaciones paso a paso.

!!! info "Puntuación"
    Las preguntas 1–5 y 11–15 valen **0,70 puntos**; las preguntas 6–10 valen **0,60 puntos**. Total: **10 puntos**.

<div id="test-tema-6" class="quiz-container">
  <div class="quiz-toolbar">
    <button type="button" id="corregir-t6" class="md-button md-button--primary">Corregir test</button>
    <button type="button" id="reiniciar-t6" class="md-button">Reiniciar</button>
    <span id="resultado-t6" class="quiz-result" aria-live="polite">15 preguntas · 10 puntos</span>
  </div>
  <div id="preguntas-t6"></div>
  <div id="resumen-t6" class="quiz-summary" aria-live="polite"></div>
</div>

<style>
.quiz-container { margin: 1.2rem 0 2rem; }
.quiz-question { border: 1px solid var(--md-default-fg-color--lightest); border-radius: .5rem; padding: 1rem 1.1rem; margin: 1rem 0; }
.quiz-question h3 { margin-top: 0; font-size: 1.05rem; }
.quiz-options { display: grid; gap: .45rem; }
.quiz-option { display: flex; align-items: flex-start; gap: .55rem; padding: .55rem .65rem; border-radius: .35rem; cursor: pointer; }
.quiz-option:hover { background: var(--md-code-bg-color); }
.quiz-option input { margin-top: .25rem; }
.quiz-feedback { display: none; margin-top: .8rem; padding: .75rem .9rem; border-radius: .35rem; }
.quiz-feedback.correct { display: block; background: rgba(46, 125, 50, .10); border-left: 4px solid #2e7d32; }
.quiz-feedback.incorrect { display: block; background: rgba(198, 40, 40, .09); border-left: 4px solid #c62828; }
.quiz-option.is-correct { background: rgba(46, 125, 50, .10); }
.quiz-option.is-wrong { background: rgba(198, 40, 40, .09); }
.quiz-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: .65rem; margin: 1rem 0; }
.quiz-result { font-weight: 600; margin-left: .3rem; }
.quiz-summary { margin-top: 1rem; font-weight: 600; }
.quiz-explanation { font-weight: normal; margin-top: .35rem; }
</style>

<script>
(function () {
  const questions = [
    {
      q: "¿Cuál es el objetivo principal del algoritmo de Euclides?",
      o: ["Encontrar el mínimo común múltiplo de dos números.", "Encontrar el máximo común divisor de dos números.", "Factorizar un número en sus factores primos.", "Resolver ecuaciones lineales."],
      a: 1, p: 0.7,
      e: "El algoritmo de Euclides calcula el máximo común divisor (MCD) de dos enteros de forma eficiente. Se basa en que mcd(a,b)=mcd(b, resto de dividir a entre b). Se repite hasta que el resto sea cero; el último resto no nulo es el MCD."
    },
    {
      q: "¿Qué relación existe entre el algoritmo de Euclides y la identidad de Bézout?",
      o: ["No hay relación entre ellos.", "El algoritmo de Euclides se utiliza para probar la identidad de Bézout.", "La identidad de Bézout es una consecuencia del algoritmo de Euclides.", "El algoritmo de Euclides es una consecuencia de la identidad de Bézout."],
      a: 2, p: 0.7,
      e: "La identidad de Bézout afirma que existen enteros x e y tales que ax+by=mcd(a,b). El algoritmo extendido de Euclides permite encontrar esos coeficientes deshaciendo las divisiones realizadas. Por eso la identidad es una consecuencia constructiva del algoritmo."
    },
    {
      q: "¿Cuál de las siguientes afirmaciones es cierta sobre el máximo común divisor (MCD)?",
      o: ["El MCD de dos números es siempre uno de los números originales.", "El MCD de dos números es el producto de los dos números.", "El MCD de dos números puede expresarse como una combinación lineal de esos números.", "El MCD de dos números es siempre menor que ambos números."],
      a: 2, p: 0.7,
      e: "Por Bézout, el MCD puede escribirse como ax+by para ciertos enteros x e y. Por ejemplo, mcd(12,8)=4 y 4=1·12−1·8. La opción D tampoco es siempre cierta: si los dos números son iguales, el MCD es igual a ambos."
    },
    {
      q: "¿Cómo se determina el MCD de dos números usando el algoritmo de Euclides?",
      o: ["Sumando los dos números y dividiendo el resultado por dos.", "Dividiendo repetidamente el mayor número por el menor y tomando el residuo hasta que el residuo sea cero.", "Restando el menor número del mayor repetidamente hasta que el resultado sea cero.", "Multiplicando los dos números y dividiendo por su suma."],
      a: 1, p: 0.7,
      e: "Se realizan divisiones sucesivas. Ejemplo: 48=1·30+18; 30=1·18+12; 18=1·12+6; 12=2·6+0. El último resto no nulo es 6, así que mcd(48,30)=6."
    },
    {
      q: "¿Qué establece el Teorema Fundamental de la Aritmética?",
      o: ["Todo número entero positivo mayor que uno puede ser expresado de forma única como un producto de factores primos.", "Todo número entero positivo mayor que uno puede ser expresado de forma única como una suma de números primos.", "Todo número entero positivo puede ser descompuesto en números racionales.", "Todo número entero positivo mayor que uno tiene al menos un divisor primo."],
      a: 0, p: 0.7,
      e: "Todo entero mayor que 1 se puede escribir como producto de números primos, y esa factorización es única salvo el orden de los factores. Por ejemplo, 60=2²·3·5."
    },
    {
      q: "¿Cuál es la forma general de una congruencia lineal?",
      o: ["ax+b ≡ 0 (mod n)", "ax ≡ b (mod n)", "a+bx ≡ 0 (mod n)", "a+b+x ≡ 0 (mod n)"],
      a: 1, p: 0.6,
      e: "La forma general de una congruencia lineal con incógnita x es ax≡b (mod n). Significa que n divide a ax−b, o, equivalentemente, que ax y b dejan el mismo resto al dividirlos entre n."
    },
    {
      q: "¿Qué establece el pequeño teorema de Fermat?",
      o: ["Si p es primo, entonces pᵃ ≡ 1 (mod a).", "Si p es primo y a no es divisible por p, entonces aᵖ⁻¹ ≡ 1 (mod p).", "Si p es primo y a no es divisible por p, entonces aᵖ ≡ 1 (mod p).", "Si p es primo y a es divisible por p, entonces aᵖ⁻¹ ≡ 1 (mod p)."],
      a: 1, p: 0.6,
      e: "El pequeño teorema de Fermat dice que si p es primo y p no divide a, entonces a^(p−1)≡1 (mod p). Una formulación equivalente válida para cualquier entero a es a^p≡a (mod p)."
    },
    {
      q: "¿Cómo se aplica el pequeño teorema de Fermat en criptografía?",
      o: ["Para encriptar mensajes mediante el uso de claves simétricas.", "Para determinar el máximo común divisor de dos números.", "Para simplificar cálculos modulares en criptografía de clave pública.", "Para generar números aleatorios seguros."],
      a: 2, p: 0.6,
      e: "El teorema permite reducir exponentes en operaciones módulo un primo, lo que simplifica cálculos de aritmética modular usados en algunos sistemas de clave pública y en demostraciones relacionadas. No es por sí mismo un algoritmo de cifrado ni un generador de aleatoriedad."
    },
    {
      q: "¿Cuál es el resultado de aplicar el Pequeño Teorema de Fermat a a=3 y p=7?",
      o: ["3⁶ ≡ 1 (mod 7)", "3⁷ ≡ 1 (mod 7)", "3⁷ ≡ 3 (mod 7)", "3⁶ ≡ 0 (mod 7)"],
      a: 0, p: 0.6,
      e: "Como 7 es primo y 3 no es divisible por 7, Fermat asegura que 3^(7−1)=3⁶≡1 (mod 7). De hecho, 3⁶=729 y 729=7·104+1."
    },
    {
      q: "¿Cuál es la aplicación del teorema chino del resto en sistemas de congruencias lineales?",
      o: ["Resolver sistemas de ecuaciones lineales homogéneas.", "Encontrar una solución única a sistemas de congruencias lineales con módulos coprimos.", "Factorizar números enteros en sus factores primos.", "Calcular la inversa de una matriz."],
      a: 1, p: 0.6,
      e: "Si los módulos son coprimos dos a dos, el teorema chino del resto garantiza una solución única módulo el producto de los módulos. Por ejemplo, un sistema de congruencias módulo 3 y módulo 5 determina una única clase de restos módulo 15."
    },
    {
      q: "¿Qué es la criptografía?",
      o: ["La ciencia de ocultar mensajes en medios visibles.", "El estudio de los principios y técnicas utilizados para proteger la información.", "El proceso de compresión de datos para almacenamiento eficiente.", "La técnica de analizar el rendimiento de sistemas de comunicación."],
      a: 1, p: 0.7,
      e: "La criptografía estudia técnicas matemáticas para proteger información: confidencialidad, integridad, autenticación y, en ciertos contextos, no repudio. No debe confundirse con la esteganografía, que oculta la existencia del mensaje."
    },
    {
      q: "¿Cuál es la base de la seguridad del algoritmo Diffie-Hellman?",
      o: ["La dificultad de factorizar números grandes.", "La dificultad de calcular logaritmos discretos.", "La dificultad de encontrar raíces cuadradas.", "La dificultad de sumar grandes cantidades de números."],
      a: 1, p: 0.7,
      e: "Diffie-Hellman clásico se basa en la dificultad del problema del logaritmo discreto en ciertos grupos: es fácil calcular g^a módulo p, pero se considera difícil recuperar a a partir de g^a módulo p cuando se eligen parámetros adecuados. No se basa en factorizar, que es la idea asociada habitualmente a RSA."
    },
    {
      q: "¿Cuál de las siguientes afirmaciones describe correctamente el algoritmo RSA?",
      o: ["RSA se basa en la dificultad de resolver el problema del camino más corto en un grafo.", "RSA se basa en la dificultad de calcular logaritmos discretos.", "RSA se basa en la dificultad de factorizar números enteros grandes.", "RSA se basa en la dificultad de encontrar números primos."],
      a: 2, p: 0.7,
      e: "RSA utiliza un módulo n=pq, producto de dos primos grandes. Conocer n no permite, en general, recuperar fácilmente sus factores primos. La seguridad práctica depende también del tamaño de clave, el relleno criptográfico correcto y la implementación."
    },
    {
      q: "En el algoritmo Diffie-Hellman, ¿qué se intercambia entre las partes para establecer una clave compartida?",
      o: ["Los números secretos elegidos por cada parte.", "Los números primos utilizados en los cálculos.", "Los valores públicos calculados por cada parte.", "Los mensajes cifrados con la clave compartida."],
      a: 2, p: 0.7,
      e: "Cada participante conserva en secreto su exponente privado y envía el valor público calculado (por ejemplo, g^a mod p). Al combinar el valor público recibido con su propio secreto, ambos calculan el mismo secreto compartido. Los secretos privados nunca se envían."
    },
    {
      q: "¿Cuál es uno de los principales usos del algoritmo RSA?",
      o: ["La generación de números aleatorios.", "La compresión de datos.", "La protección de contraseñas y la autenticación de identidad.", "El análisis de grandes volúmenes de datos."],
      a: 2, p: 0.7,
      e: "RSA se ha utilizado para cifrado de clave pública y firmas digitales, que ayudan a establecer confidencialidad o verificar autenticidad e integridad. Matiz importante: no se deben almacenar contraseñas cifrándolas con RSA; se guardan mediante funciones de derivación de contraseñas con sal, como Argon2id, scrypt o bcrypt."
    }
  ];

  const root = document.getElementById("preguntas-t6");
  const result = document.getElementById("resultado-t6");
  const summary = document.getElementById("resumen-t6");
  const letters = ["A", "B", "C", "D"];

  function render() {
    root.innerHTML = "";
    summary.innerHTML = "";
    result.textContent = "15 preguntas · 10 puntos";
    questions.forEach((q, i) => {
      const section = document.createElement("section");
      section.className = "quiz-question";
      const heading = document.createElement("h3");
      heading.textContent = `Pregunta ${i + 1} · ${q.p.toFixed(2).replace(".", ",")} puntos`;
      const prompt = document.createElement("p");
      prompt.textContent = q.q;
      const options = document.createElement("div");
      options.className = "quiz-options";
      q.o.forEach((option, j) => {
        const label = document.createElement("label");
        label.className = "quiz-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `t6-p${i}`;
        input.value = j;
        const text = document.createElement("span");
        text.textContent = `${letters[j]}. ${option}`;
        label.append(input, text);
        options.append(label);
      });
      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      feedback.id = `t6-feedback-${i}`;
      section.append(heading, prompt, options, feedback);
      root.append(section);
    });
  }

  function grade() {
    let earned = 0, total = 0, correct = 0;
    questions.forEach((q, i) => {
      total += q.p;
      const section = root.children[i];
      const selected = section.querySelector(`input[name="t6-p${i}"]:checked`);
      const feedback = document.getElementById(`t6-feedback-${i}`);
      const labels = section.querySelectorAll(".quiz-option");
      labels.forEach((label, j) => {
        label.classList.remove("is-correct", "is-wrong");
        if (j === q.a) label.classList.add("is-correct");
      });
      const isCorrect = selected && Number(selected.value) === q.a;
      if (isCorrect) {
        earned += q.p; correct++;
        feedback.className = "quiz-feedback correct";
        feedback.innerHTML = `<strong>¡Correcto!</strong> Respuesta ${letters[q.a]}. <div class="quiz-explanation">${q.e}</div>`;
      } else {
        if (selected) labels[Number(selected.value)].classList.add("is-wrong");
        feedback.className = "quiz-feedback incorrect";
        feedback.innerHTML = `<strong>${selected ? "No es correcto." : "Sin responder."}</strong> La respuesta esperada es ${letters[q.a]}. <div class="quiz-explanation">${q.e}</div>`;
      }
    });
    result.textContent = `${earned.toFixed(2).replace(".", ",")} / ${total.toFixed(2).replace(".", ",")} puntos · ${correct}/15 correctas`;
    summary.textContent = `Resultado: ${(earned / total * 100).toFixed(1).replace(".", ",")} %`;
    summary.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  document.getElementById("corregir-t6").addEventListener("click", grade);
  document.getElementById("reiniciar-t6").addEventListener("click", render);
  render();
})();
</script>

---

## Chuleta final — Teoría de números y criptografía

### 1. Máximo común divisor (MCD) y algoritmo de Euclides

El **MCD** de dos enteros es el mayor entero positivo que divide a ambos.

Algoritmo de Euclides:

\[
a=bq+r \quad\Longrightarrow\quad \operatorname{mcd}(a,b)=\operatorname{mcd}(b,r)
\]

Se repite hasta obtener resto cero. El último resto no nulo es el MCD.

**Ejemplo:**

\[
\begin{aligned}
48&=1\cdot30+18\\
30&=1\cdot18+12\\
18&=1\cdot12+6\\
12&=2\cdot6+0
\end{aligned}
\]

Por tanto, \(\operatorname{mcd}(48,30)=6\).

### 2. Identidad de Bézout

Para enteros \(a,b\), no ambos cero, existen enteros \(x,y\) tales que:

\[
ax+by=\operatorname{mcd}(a,b)
\]

El **algoritmo extendido de Euclides** permite encontrar esos coeficientes. Si el MCD es 1, los números son coprimos.

### 3. Teorema Fundamental de la Aritmética

Todo entero mayor que 1 se descompone de forma única (salvo el orden) como producto de primos.

Ejemplo:

\[
360=2^3\cdot3^2\cdot5
\]

### 4. Congruencias

\[
a\equiv b\pmod n
\]

Significa que \(a\) y \(b\) tienen el mismo resto al dividir entre \(n\), o que \(n\mid(a-b)\).

Una congruencia lineal tiene la forma:

\[
ax\equiv b\pmod n
\]

Tiene solución si y solo si \(\operatorname{mcd}(a,n)\) divide a \(b\). Si \(a\) y \(n\) son coprimos, existe una solución única módulo \(n\).

### 5. Pequeño teorema de Fermat

Si \(p\) es primo y \(p\nmid a\):

\[
a^{p-1}\equiv1\pmod p
\]

Forma equivalente, válida para todo entero \(a\):

\[
a^p\equiv a\pmod p
\]

**Ejemplo:** con \(a=3\) y \(p=7\):

\[
3^6=729=7\cdot104+1
\quad\Longrightarrow\quad
3^6\equiv1\pmod7
\]

Sirve para simplificar potencias en aritmética modular.

### 6. Teorema chino del resto (TCR)

Si los módulos \(n_1,\ldots,n_k\) son coprimos dos a dos, el sistema

\[
\begin{cases}
x\equiv a_1\pmod{n_1}\\
x\equiv a_2\pmod{n_2}\\
\vdots\\
x\equiv a_k\pmod{n_k}
\end{cases}
\]

tiene una solución única módulo \(N=n_1n_2\cdots n_k\).

### 7. Criptografía

La **criptografía** utiliza técnicas matemáticas para proteger información: confidencialidad, integridad y autenticación.

| Sistema | Idea matemática principal | Uso |
|---|---|---|
| Diffie-Hellman | Dificultad del logaritmo discreto | Acordar una clave compartida |
| RSA | Dificultad de factorizar el módulo compuesto | Cifrado y firmas digitales |

**Diffie-Hellman, idea básica:**

1. Se acuerdan parámetros públicos \(p\) y \(g\).
2. Cada parte elige un exponente privado (secreto).
3. Calcula y comparte un valor público.
4. Cada parte combina el valor público recibido con su propio secreto y obtiene la misma clave compartida.

Nunca se intercambian los exponentes privados.

**RSA, idea básica:**

1. Se eligen dos primos grandes \(p\) y \(q\).
2. Se calcula \(n=pq\).
3. Se construyen una clave pública y una privada relacionadas matemáticamente.
4. Se usa para operaciones de clave pública, como cifrado o firmas digitales.

!!! warning "No confundas"
    - **Diffie-Hellman:** logaritmo discreto.
    - **RSA:** factorización de enteros grandes.
    - **MCD:** máximo común divisor; **mcm:** mínimo común múltiplo.
    - **Bézout:** expresa el MCD como combinación lineal.
    - El pequeño teorema de Fermat requiere que el módulo sea primo en la formulación \(a^{p-1}\equiv1\pmod p\) y que \(a\) no sea múltiplo de \(p\).
    - RSA puede utilizarse para firmas y cifrado, pero no es la técnica adecuada para almacenar contraseñas: para ello se usan funciones específicas de derivación de contraseñas, como Argon2id, scrypt o bcrypt.
