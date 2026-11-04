---
title: Test Tema 6 - Teoría de números, congruencias y criptografía
---

# Test Tema 6: Teoría de números, congruencias y criptografía

Este test está basado en las 15 preguntas del cuestionario del tema. Tiene **una sola respuesta correcta por pregunta**. Selecciona tus respuestas y pulsa **Comprobar respuestas** para conocer tu nota, ver la explicación rápida de cada pregunta y consultar al final las soluciones explicadas paso a paso.

!!! tip "Cómo estudiar"
    Haz primero el test sin mirar las soluciones. Al corregirlo, lee la **explicación rápida** de cada pregunta y, si necesitas profundizar, despliega la **explicación detallada paso a paso** al final de la página.

<div id="quiz-tema6" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El algoritmo de Euclides es un procedimiento eficiente para calcular el Máximo Común Divisor (MCD) de dos números enteros mediante divisiones sucesivas.">
      <legend>1. ¿Cuál es el objetivo principal del algoritmo de Euclides?</legend>
      <label><input type="radio" name="q1" value="a"> A. Encontrar el mínimo común múltiplo de dos números.</label>
      <label><input type="radio" name="q1" value="b"> B. Encontrar el máximo común divisor de dos números.</label>
      <label><input type="radio" name="q1" value="c"> C. Factorizar un número en sus factores primos.</label>
      <label><input type="radio" name="q1" value="d"> D. Resolver ecuaciones lineales.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La Identidad de Bézout es una consecuencia constructiva del Algoritmo Extendido de Euclides, demostrando que el MCD puede expresarse como combinación lineal de los dos números.">
      <legend>2. ¿Qué relación existe entre el algoritmo de Euclides y la identidad de Bézout?</legend>
      <label><input type="radio" name="q2" value="a"> A. No hay relación entre ellos.</label>
      <label><input type="radio" name="q2" value="b"> B. El algoritmo de Euclides se utiliza para probar la identidad de Bézout.</label>
      <label><input type="radio" name="q2" value="c"> C. La identidad de Bézout es una consecuencia del algoritmo de Euclides.</label>
      <label><input type="radio" name="q2" value="d"> D. El algoritmo de Euclides es una consecuencia de la identidad de Bézout.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Según el Teorema de Bézout, existen enteros x e y tales que ax + by = mcd(a,b), expresando el MCD como combinación lineal entera.">
      <legend>3. ¿Cuál de las siguientes afirmaciones es cierta sobre el máximo común divisor (MCD)?</legend>
      <label><input type="radio" name="q3" value="a"> A. El MCD de dos números es siempre uno de los números originales.</label>
      <label><input type="radio" name="q3" value="b"> B. El MCD de dos números es el producto de los dos números.</label>
      <label><input type="radio" name="q3" value="c"> C. El MCD de dos números puede expresarse como una combinación lineal de esos números.</label>
      <label><input type="radio" name="q3" value="d"> D. El MCD de dos números es siempre menor que ambos números.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El algoritmo realiza divisiones enteras sucesivas a = bq + r sustituyendo el par (a,b) por (b,r) hasta obtener resto 0; el último resto no nulo es el MCD.">
      <legend>4. ¿Cómo se determina el MCD de dos números usando el algoritmo de Euclides?</legend>
      <label><input type="radio" name="q4" value="a"> A. Sumando los dos números y dividiendo el resultado por dos.</label>
      <label><input type="radio" name="q4" value="b"> B. Dividiendo repetidamente el mayor número por el menor y tomando el residuo hasta que el residuo sea cero.</label>
      <label><input type="radio" name="q4" value="c"> C. Restando el menor número del mayor repetidamente hasta que el resultado sea cero.</label>
      <label><input type="radio" name="q4" value="d"> D. Multiplicando los dos números y dividiendo por su suma.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El Teorema Fundamental de la Aritmética afirma que todo entero n > 1 se factoriza de manera única como producto de factores primos (salvo el orden).">
      <legend>5. ¿Qué establece el Teorema Fundamental de la Aritmética?</legend>
      <label><input type="radio" name="q5" value="a"> A. Todo número entero positivo mayor que uno puede ser expresado de forma única como un producto de factores primos.</label>
      <label><input type="radio" name="q5" value="b"> B. Todo número entero positivo mayor que uno puede ser expresado de forma única como una suma de números primos.</label>
      <label><input type="radio" name="q5" value="c"> C. Todo número entero positivo puede ser descompuesto en números racionales.</label>
      <label><input type="radio" name="q5" value="d"> D. Todo número entero positivo mayor que uno tiene al menos un divisor primo.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Una congruencia lineal es una ecuación en la aritmética modular de la forma ax ≡ b (mod n), buscando enteros x que satisfagan la relación.">
      <legend>6. ¿Cuál es la forma general de una congruencia lineal?</legend>
      <label><input type="radio" name="q6" value="a"> A. ax+b ≡ 0 (mod n)</label>
      <label><input type="radio" name="q6" value="b"> B. ax ≡ b (mod n)</label>
      <label><input type="radio" name="q6" value="c"> C. a+bx ≡ 0 (mod n)</label>
      <label><input type="radio" name="q6" value="d"> D. a+b+x ≡ 0 (mod n)</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El Pequeño Teorema de Fermat establece que si p es un número primo y a no es divisible por p, se cumple que a^(p-1) ≡ 1 (mod p).">
      <legend>7. ¿Qué establece el pequeño teorema de Fermat?</legend>
      <label><input type="radio" name="q7" value="a"> A. Si p es primo, entonces pᵃ ≡ 1 (mod a).</label>
      <label><input type="radio" name="q7" value="b"> B. Si p es primo y a no es divisible por p, entonces aᵖ⁻¹ ≡ 1 (mod p).</label>
      <label><input type="radio" name="q7" value="c"> C. Si p es primo y a no es divisible por p, entonces aᵖ ≡ 1 (mod p).</label>
      <label><input type="radio" name="q7" value="d"> D. Si p es primo y a es divisible por p, entonces aᵖ⁻¹ ≡ 1 (mod p).</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El teorema permite reducir grandes exponentes módulo p (usando la propiedad a^(p-1) ≡ 1), simplificando el cálculo de potencias en sistemas de clave pública.">
      <legend>8. ¿Cómo se aplica el pequeño teorema de Fermat en criptografía?</legend>
      <label><input type="radio" name="q8" value="a"> A. Para encriptar mensajes mediante el uso de claves simétricas.</label>
      <label><input type="radio" name="q8" value="b"> B. Para determinar el máximo común divisor de dos números.</label>
      <label><input type="radio" name="q8" value="c"> C. Para simplificar cálculos modulares en criptografía de clave pública.</label>
      <label><input type="radio" name="q8" value="d"> D. Para generar números aleatorios seguros.</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Como p=7 es primo y mcd(3,7)=1, por Fermat tenemos 3^(7-1) ≡ 3⁶ ≡ 1 (mod 7).">
      <legend>9. ¿Cuál es el resultado de aplicar el Pequeño Teorema de Fermat a a=3 y p=7?</legend>
      <label><input type="radio" name="q9" value="a"> A. 3⁶ ≡ 1 (mod 7)</label>
      <label><input type="radio" name="q9" value="b"> B. 3⁷ ≡ 1 (mod 7)</label>
      <label><input type="radio" name="q9" value="c"> C. 3⁷ ≡ 3 (mod 7)</label>
      <label><input type="radio" name="q9" value="d"> D. 3⁶ ≡ 0 (mod 7)</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Garantiza la existencia de una solución única módulo N = n₁·n₂···n_k para sistemas de congruencias con módulos coprimos dos a dos.">
      <legend>10. ¿Cuál es la aplicación del teorema chino del resto en sistemas de congruencias lineales?</legend>
      <label><input type="radio" name="q10" value="a"> A. Resolver sistemas de ecuaciones lineales homogéneas.</label>
      <label><input type="radio" name="q10" value="b"> B. Encontrar una solución única a sistemas de congruencias lineales con módulos coprimos.</label>
      <label><input type="radio" name="q10" value="c"> C. Factorizar números enteros en sus factores primos.</label>
      <label><input type="radio" name="q10" value="d"> D. Calcular la inversa de una matriz.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La criptografía es la disciplina científica que desarrolla principios y técnicas para proteger la información y asegurar confidencialidad e integridad.">
      <legend>11. ¿Qué es la criptografía?</legend>
      <label><input type="radio" name="q11" value="a"> A. La ciencia de ocultar mensajes en medios visibles.</label>
      <label><input type="radio" name="q11" value="b"> B. El estudio de los principios y técnicas utilizados para proteger la información.</label>
      <label><input type="radio" name="q11" value="c"> C. El proceso de compresión de datos para almacenamiento eficiente.</label>
      <label><input type="radio" name="q11" value="d"> D. La técnica de analizar el rendimiento de sistemas de comunicación.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La seguridad de Diffie-Hellman radica en la intractabilidad computacional de resolver el Problema del Logaritmo Discreto en grupos modulares finitos.">
      <legend>12. ¿Cuál es la base de la seguridad del algoritmo Diffie-Hellman?</legend>
      <label><input type="radio" name="q12" value="a"> A. La dificultad de factorizar números grandes.</label>
      <label><input type="radio" name="q12" value="b"> B. La dificultad de calcular logaritmos discretos.</label>
      <label><input type="radio" name="q12" value="c"> C. La dificultad de encontrar raíces cuadradas.</label>
      <label><input type="radio" name="q12" value="d"> D. La dificultad de sumar grandes cantidades de números.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La seguridad de RSA se fundamenta en la dificultad computacional de factorizar el producto n = p·q de dos enteros primos de gran tamaño.">
      <legend>13. ¿Cuál de las siguientes afirmaciones describe correctamente el algoritmo RSA?</legend>
      <label><input type="radio" name="q13" value="a"> A. RSA se basa en la dificultad de resolver el problema del camino más corto en un grafo.</label>
      <label><input type="radio" name="q13" value="b"> B. RSA se basa en la dificultad de calcular logaritmos discretos.</label>
      <label><input type="radio" name="q13" value="c"> C. RSA se basa en la dificultad de factorizar números enteros grandes.</label>
      <label><input type="radio" name="q13" value="d"> D. RSA se basa en la dificultad de encontrar números primos.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Las partes transmiten por canal público los valores exponenciados g^a mod p y g^b mod p sin revelar nunca sus exponentes secretos individuales.">
      <legend>14. En el algoritmo Diffie-Hellman, ¿qué se intercambia entre las partes para establecer una clave compartida?</legend>
      <label><input type="radio" name="q14" value="a"> A. Los números secretos elegidos por cada parte.</label>
      <label><input type="radio" name="q14" value="b"> B. Los números primos utilizados en los cálculos.</label>
      <label><input type="radio" name="q14" value="c"> C. Los valores públicos calculados por cada parte.</label>
      <label><input type="radio" name="q14" value="d"> D. Los mensajes cifrados con la clave compartida.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="RSA se emplea ampliamente en esquemas de cifrado asimétrico y firma digital para garantizar confidencialidad, autenticidad e integridad en comunicaciones.">
      <legend>15. ¿Cuál es uno de los principales usos del algoritmo RSA?</legend>
      <label><input type="radio" name="q15" value="a"> A. La generación de números aleatorios.</label>
      <label><input type="radio" name="q15" value="b"> B. La compresión de datos.</label>
      <label><input type="radio" name="q15" value="c"> C. La protección de contraseñas y la autenticación de identidad.</label>
      <label><input type="radio" name="q15" value="d"> D. El análisis de grandes volúmenes de datos.</label>
      <div class="question-feedback" id="feedback-q15">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <div class="quiz-actions">
      <button type="submit" class="md-button md-button--primary">Comprobar respuestas</button>
      <button type="button" id="quiz-reset" class="md-button">Reiniciar test</button>
    </div>
  </form>

  <section id="quiz-result" class="quiz-result" aria-live="polite" hidden>
    <h2>Resultado</h2>
    <p id="quiz-score"></p>
    <p id="quiz-message"></p>
    <p id="quiz-summary"></p>
  </section>
</div>

## Soluciones explicadas: aprende pregunta por pregunta

<details class="solution">
<summary>1. Respuesta correcta: B — Objetivo del algoritmo de Euclides</summary>

El **algoritmo de Euclides** es un método antiguo y extremadamente eficiente para calcular el **máximo común divisor (MCD)** de dos números enteros.

- Se apoya en la propiedad $\operatorname{mcd}(a, b) = \operatorname{mcd}(b, r)$, donde $r$ es el resto de la división entera $a / b$.
- Aplica divisiones de forma iterativa hasta alcanzar un resto igual a 0.
- El último resto no nulo obtenido es exactamente el $\operatorname{mcd}(a, b)$.
</details>

<details class="solution">
<summary>2. Respuesta correcta: C — Relación entre Euclides y Bézout</summary>

La **Identidad de Bézout** establece que para cualquier par de enteros $a$ y $b$ existen enteros $x, y \in \mathbb{Z}$ tales que:
\[
a x + b y = \operatorname{mcd}(a, b)
\]
El **Algoritmo Extendido de Euclides** no solo calcula el MCD, sino que invierte iterativamente los pasos del algoritmo clásico para despejar y calcular expresamente dichos coeficientes $x$ e $y$. Por ello, la identidad de Bézout es una consecuencia constructiva del algoritmo.
</details>

<details class="solution">
<summary>3. Respuesta correcta: C — Propiedades del MCD y combinación lineal</summary>

El máximo común divisor de dos números enteros $a$ y $b$ cumple que:
- Siempre puede expresarse como una combinación lineal entera de $a$ y $b$ ($ax + by = \operatorname{mcd}(a, b)$).
- **Aclaración sobre las falsas:** No tiene por qué ser uno de los números originales (ej. $\operatorname{mcd}(12, 8) = 4$). Tampoco es siempre menor que ambos números, ya que si $a = b$, entonces $\operatorname{mcd}(a, a) = a$.
</details>

<details class="solution">
<summary>4. Respuesta correcta: B — Proceso del algoritmo de Euclides</summary>

El algoritmo sigue este flujo iterativo:
1. Dividir el número mayor $a$ entre el menor $b$, obteniendo cociente $q$ y resto $r$: $a = b \cdot q + r$.
2. Si $r = 0$, el divisor $b$ es el MCD.
3. Si $r \neq 0$, se reemplaza $a \leftarrow b$ y $b \leftarrow r$, repitiendo la división hasta obtener resto 0.
</details>

<details class="solution">
<summary>5. Respuesta correcta: A — Teorema Fundamental de la Aritmética</summary>

El **Teorema Fundamental de la Aritmética** establece que todo número entero $n > 1$:
1. Se puede expresar como un producto de uno o varios números primos.
2. Dicha descomposición o factorización es **única**, salvo por el orden de los factores primos.

*Ejemplo:* $60 = 2^2 \cdot 3 \cdot 5$. No existe ningún otro grupo de números primos cuyo producto dé 60.
</details>

<details class="solution">
<summary>6. Respuesta correcta: B — Forma general de una congruencia lineal</summary>

Una **congruencia lineal** de una variable es una expresión con la forma:
\[
a x \equiv b \pmod n
\]
Donde $a, b \in \mathbb{Z}$ y $n \in \mathbb{Z}^+$ ($n > 1$). 
Resolverla consiste en hallar los enteros $x$ tales que $n$ divida exactamente a $(ax - b)$. Admite solución si y solo si $\operatorname{mcd}(a, n)$ divide a $b$.
</details>

<details class="solution">
<summary>7. Respuesta correcta: B — Pequeño Teorema de Fermat</summary>

El **Pequeño Teorema de Fermat** afirma que si $p$ es un número primo y $a$ es un entero no divisible por $p$ ($\operatorname{mcd}(a, p) = 1$), entonces:
\[
a^{p-1} \equiv 1 \pmod p
\]
*Forma alternativa universal:* $a^p \equiv a \pmod p$ para todo entero $a$.
</details>

<details class="solution">
<summary>8. Respuesta correcta: C — Aplicación criptográfica de Fermat</summary>

El Pequeño Teorema de Fermat permite trabajar con exponentes de enorme tamaño en aritmética modular:
- Al reducir un exponente $e$ módulo $(p-1)$, los cálculos numéricos se simplifican exponencialmente.
- Constituye un pilar clave en el desarrollo de algoritmos de clave pública, test de primalidad (como Fermat o Miller-Rabin) y cifrado asimétrico.
</details>

<details class="solution">
<summary>9. Respuesta correcta: A — Ejemplo del Pequeño Teorema de Fermat</summary>

Para $a = 3$ y $p = 7$:
- Dado que $p = 7$ es primo y 7 no divide a 3 ($\operatorname{mcd}(3,7) = 1$), aplicamos la fórmula $a^{p-1} \equiv 1 \pmod p$:
\[
3^{7-1} = 3^6 \equiv 1 \pmod 7
\]
*Comprobación:* $3^6 = 729$. Al dividir $729 / 7 = 104$ con resto $1$ ($729 = 7 \cdot 104 + 1$).
</details>

<details class="solution">
<summary>10. Respuesta correcta: B — Teorema Chino del Resto (TCR)</summary>

El **Teorema Chino del Resto** garantiza que si $n_1, n_2, \dots, n_k$ son enteros positivos coprimos dos a dos ($\operatorname{mcd}(n_i, n_j) = 1$), el sistema de congruencias:
\[
\begin{cases}
x \equiv a_1 \pmod{n_1} \\
x \equiv a_2 \pmod{n_2} \\
\vdots \\
x \equiv a_k \pmod{n_k}
\end{cases}
\]
Posee una **única solución** módulo el producto $N = n_1 \cdot n_2 \cdots n_k$.
</details>

<details class="solution">
<summary>11. Respuesta correcta: B — Definición de Criptografía</summary>

La **criptografía** es la rama de las matemáticas y la informática que estudia los métodos y técnicas diseñados para proteger la información y asegurar las comunicaciones.

Sus cuatro pilares fundamentales son:
- **Confidencialidad:** Garantizar que solo los destinatarios autorizados lean el mensaje.
- **Integridad:** Asegurar que el mensaje no haya sido modificado.
- **Autenticidad:** Confirmar la identidad del emisor.
- **No repudio:** Impedir que el emisor niegue haber enviado el mensaje.
</details>

<details class="solution">
<summary>12. Respuesta correcta: B — Base de seguridad de Diffie-Hellman</summary>

El protocolo de intercambio de claves **Diffie-Hellman** basa su seguridad en el **Problema del Logaritmo Discreto (PLD)**:
- Dado $y = g^x \pmod p$, es extremadamente rápido calcular $y$ conociendo $g, x, p$.
- Sin embargo, calcular el exponente privado $x$ a partir únicamente de $y, g, p$ es computacionalmente inviable para primos $p$ suficientemente grandes.
</details>

<details class="solution">
<summary>13. Respuesta correcta: C — Fundamento del algoritmo RSA</summary>

El algoritmo criptográfico asimétrico **RSA** debe su seguridad a la **dificultad de factorización de enteros grandes**:
- Es muy sencillo multiplicar dos primos grandes $p$ y $q$ para obtener $n = p \cdot q$.
- Pero es computacionalmente intratable obtener los factores primos originales $p$ y $q$ conociendo solo el módulo público $n$.
</details>

<details class="solution">
<summary>14. Respuesta correcta: C — Intercambio en Diffie-Hellman</summary>

En Diffie-Hellman:
1. Alice elige un secreto privado $a$ y transmite a Bob su **valor público** $A = g^a \pmod p$.
2. Bob elige un secreto privado $b$ y transmite a Alice su **valor público** $B = g^b \pmod p$.
3. Ambos calculan la clave compartida $K = B^a \pmod p = A^b \pmod p = g^{ab} \pmod p$.

**Clave:** Los secretos $a$ y $b$ jamás se transmiten por la red.
</details>

<details class="solution">
<summary>15. Respuesta correcta: C — Usos principales de RSA</summary>

RSA es un estándar global de **criptografía de clave pública** utilizado para:
- Autenticación de identidad mediante **firmas digitales**.
- Intercambio seguro de claves de cifrado simétrico y protección de datos en protocolos como TLS/SSL, HTTPS o SSH.

*(Nota: Para almacenar contraseñas en bases de datos no se utiliza cifrado asimétrico como RSA, sino funciones de hash criptográfico con sal como Argon2id, bcrypt o PBKDF2).*
</details>

---

## Chuleta final: lo imprescindible para aprobar

### 1. Teoría de números básica

- **Algoritmo de Euclides:** Calcula el $\operatorname{mcd}(a,b)$ mediante divisiones sucesivas hasta que el resto es 0.
- **Identidad de Bézout:** $\operatorname{mcd}(a,b) = ax + by$ para enteros $x, y$.
- **Teorema Fundamental de la Aritmética:** Todo entero $> 1$ se factoriza de forma única como producto de primos.

### 2. Aritmética modular y teoremas clave

- **Congruencia:** $a \equiv b \pmod n \iff n \mid (a - b)$.
- **Pequeño Teorema de Fermat:** Si $p$ es primo y $\operatorname{mcd}(a, p) = 1 \implies a^{p-1} \equiv 1 \pmod p$.
- **Teorema Chino del Resto:** Resuelve sistemas de congruencias de forma única módulo $N = \prod n_i$ si los módulos $n_i$ son coprimos dos a dos.

### 3. Criptografía moderna

| Algoritmo | Tipo de Clave | Fundamento Matemático | Uso Principal |
|---|---|---|---|
| **Diffie-Hellman** | Clave Pública / Privada | Dificultad del **Logaritmo Discreto** | Acuerdo/Intercambio seguro de clave compartida |
| **RSA** | Asimétrico (Pública / Privada) | Dificultad de **Factorización de primos grandes** ($n = p \cdot q$) | Cifrado asimétrico y Firmas Digitales |

<style>
.quiz-container {
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: .6rem;
  padding: 1rem;
  margin: 1rem 0 2rem;
}
.quiz-progress {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: .5rem;
  margin-bottom: 1rem;
  padding: .7rem 1rem;
  background: var(--md-code-bg-color);
  border-radius: .4rem;
}
.quiz-question {
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: .5rem;
  padding: 1rem;
  margin: 1rem 0;
  min-width: 0;
  transition: border-color .2s ease, background-color .2s ease;
}
.quiz-question legend {
  font-weight: 700;
  padding: 0 .25rem;
}
.quiz-question label {
  display: block;
  padding: .45rem .6rem;
  margin: .2rem 0;
  border-radius: .3rem;
  cursor: pointer;
  transition: background-color .15s ease;
}
.quiz-question label:hover {
  background: var(--md-code-bg-color);
}
.quiz-question input {
  margin-right: .5rem;
}
.quiz-question.is-correct {
  border: 2px solid #2e7d32;
}
.quiz-question.is-wrong {
  border: 2px solid #c62828;
}
.question-feedback {
  display: none;
  margin-top: .8rem;
  padding: .75rem;
  border-left: 4px solid var(--md-default-fg-color--lightest);
  background: var(--md-code-bg-color);
  border-radius: .3rem;
}
.is-correct .question-feedback {
  display: block;
  border-left-color: #2e7d32;
}
.is-wrong .question-feedback {
  display: block;
  border-left-color: #c62828;
}
.feedback-status {
  font-weight: 700;
  margin-bottom: .3rem;
}
.is-correct .feedback-status {
  color: #2e7d32;
}
.is-wrong .feedback-status {
  color: #c62828;
}
.feedback-exp {
  font-size: .92rem;
  line-height: 1.45;
  color: var(--md-default-fg-color);
}
.quiz-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
  margin-top: 1.2rem;
}
.quiz-result {
  margin-top: 1.2rem;
  padding: 1.2rem;
  border-radius: .5rem;
  background: var(--md-code-bg-color);
  border: 1px solid var(--md-default-fg-color--lightest);
}
.solution {
  margin: .6rem 0;
  padding: .65rem .9rem;
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: .4rem;
}
.solution summary {
  cursor: pointer;
  font-weight: 700;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quiz-form");
  if (!form || form.dataset.initialized === "true") return;
  form.dataset.initialized = "true";

  const questions = Array.from(document.querySelectorAll("#quiz-form .quiz-question"));
  const count = document.getElementById("quiz-count");
  const progressText = document.getElementById("quiz-progress-text");
  const result = document.getElementById("quiz-result");
  const scoreText = document.getElementById("quiz-score");
  const message = document.getElementById("quiz-message");
  const summary = document.getElementById("quiz-summary");
  const reset = document.getElementById("quiz-reset");

  function updateProgress() {
    const answered = questions.filter(q => {
      const input = q.querySelector("input");
      return form.querySelector('input[name="' + input.name + '"]:checked');
    }).length;
    count.textContent = answered + " de " + questions.length + " respondidas";
    progressText.textContent = answered === questions.length
      ? "¡Ya has respondido todas!"
      : "Te faltan " + (questions.length - answered) + " por responder.";
  }

  form.addEventListener("change", updateProgress);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let correct = 0;
    let unanswered = 0;

    questions.forEach(function (question, index) {
      const number = index + 1;
      const selected = form.querySelector('input[name="q' + number + '"]:checked');
      const answer = question.dataset.answer;
      const shortExp = question.dataset.shortExp || "";
      const statusEl = question.querySelector(".feedback-status");
      const expEl = question.querySelector(".feedback-exp");
      const labels = question.querySelectorAll("label");

      question.classList.remove("is-correct", "is-wrong");
      labels.forEach(label => { label.style.fontWeight = "normal"; });

      if (!selected) {
        unanswered++;
        question.classList.add("is-wrong");
        statusEl.textContent = "✗ Sin responder. Respuesta correcta: " + answer.toUpperCase();
      } else if (selected.value === answer) {
        correct++;
        question.classList.add("is-correct");
        statusEl.textContent = "✓ ¡Correcto!";
      } else {
        question.classList.add("is-wrong");
        statusEl.textContent = "✗ Incorrecto. Respuesta correcta: " + answer.toUpperCase();
      }

      expEl.textContent = shortExp;

      const correctLabel = Array.from(labels).find(label =>
        label.querySelector("input").value === answer
      );
      if (correctLabel) correctLabel.style.fontWeight = "700";
    });

    const percent = Math.round(correct / questions.length * 100);
    scoreText.textContent = correct + " de " + questions.length + " correctas (" + percent + "%).";
    message.textContent = percent >= 90 ? "¡Excelente! Dominas muy bien el tema." :
      percent >= 70 ? "¡Buen trabajo! Repasa los fallos para afianzar lo aprendido." :
      percent >= 50 ? "Vas por buen camino. Lee las explicaciones cortas y detalladas para afianzar." :
      "Te conviene repasar las explicaciones detalladas con calma y repetir el test.";
    summary.textContent = unanswered
      ? "Has dejado " + unanswered + " pregunta(s) sin responder."
      : "Has respondido todas las preguntas.";

    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise();
    }
  });

  reset.addEventListener("click", function () {
    form.reset();
    questions.forEach(function (question) {
      question.classList.remove("is-correct", "is-wrong");
      question.querySelectorAll("label").forEach(label => {
        label.style.fontWeight = "normal";
      });
      question.querySelector(".feedback-status").textContent = "";
      question.querySelector(".feedback-exp").textContent = "";
    });
    result.hidden = true;
    updateProgress();
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  updateProgress();
});
</script>