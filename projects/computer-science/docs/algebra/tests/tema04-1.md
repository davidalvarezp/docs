---
title: Test Tema 4 - Sistemas de ecuaciones lineales y eliminación de Gauss
---

# Test Tema 4: Sistemas de ecuaciones lineales y eliminación de Gauss

Este test está basado en las 15 preguntas del cuestionario del tema. Tiene **una sola respuesta correcta por pregunta**. Selecciona tus respuestas y pulsa **Comprobar respuestas** para conocer tu nota, ver la explicación rápida de cada pregunta y consultar al final las soluciones explicadas paso a paso.

!!! tip "Cómo estudiar"
    Haz primero el test sin mirar las soluciones. Al corregirlo, lee la **explicación rápida** de cada pregunta y, si necesitas profundizar, despliega la **explicación detallada paso a paso** al final de la página.

<div id="quiz-tema4" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Un sistema de ecuaciones lineales puede tener exactamente una solución (compatible determinado), infinitas soluciones (compatible indeterminado) o ninguna solución (incompatible).">
      <legend>1. ¿Cuál de las siguientes afirmaciones es correcta sobre un sistema de ecuaciones lineales?</legend>
      <label><input type="radio" name="q1" value="a"> A. Un sistema de ecuaciones lineales siempre tiene una solución única.</label>
      <label><input type="radio" name="q1" value="b"> B. Un sistema de ecuaciones lineales puede tener una solución única, ninguna solución o infinitas soluciones.</label>
      <label><input type="radio" name="q1" value="c"> C. Un sistema de ecuaciones lineales siempre tiene infinitas soluciones.</label>
      <label><input type="radio" name="q1" value="d"> D. Un sistema de ecuaciones lineales nunca tiene solución.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Si la matriz de coeficientes A es invertible (cuadrada con det(A) ≠ 0), el sistema Ax = b admite la solución única x = A⁻¹b.">
      <legend>2. ¿Qué implica que la matriz de coeficientes de un sistema de ecuaciones lineales sea invertible?</legend>
      <label><input type="radio" name="q2" value="a"> A. Que el sistema tiene infinitas soluciones.</label>
      <label><input type="radio" name="q2" value="b"> B. Que el sistema no tiene solución.</label>
      <label><input type="radio" name="q2" value="c"> C. Que el sistema tiene una solución única.</label>
      <label><input type="radio" name="q2" value="d"> D. Que la matriz de coeficientes es singular.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La representación matricial canónica es A · x = b, donde A es la matriz de coeficientes, x es el vector columna de incógnitas y b es el vector de términos independientes.">
      <legend>3. ¿Cuál es la representación matricial de un sistema de ecuaciones lineales?</legend>
      <label><input type="radio" name="q3" value="a"> A. A · x = b, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes.</label>
      <label><input type="radio" name="q3" value="b"> B. A + x = b, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes.</label>
      <label><input type="radio" name="q3" value="c"> C. A · x = 0, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes.</label>
      <label><input type="radio" name="q3" value="d"> D. A · x + b = 0, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Una matriz cuadrada es singular si su determinante es cero, lo cual impide la existencia de su matriz inversa (no tiene inversa).">
      <legend>4. ¿Qué significa que una matriz sea singular?</legend>
      <label><input type="radio" name="q4" value="a"> A. La matriz tiene un determinante distinto de cero.</label>
      <label><input type="radio" name="q4" value="b"> B. La matriz es simétrica.</label>
      <label><input type="radio" name="q4" value="c"> C. La matriz no tiene inversa.</label>
      <label><input type="radio" name="q4" value="d"> D. La matriz tiene filas linealmente independientes.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El rango de una matriz representa el número máximo de filas (o columnas) linealmente independientes que la componen.">
      <legend>5. ¿Cuál de las siguientes afirmaciones es cierta sobre el rango de una matriz?</legend>
      <label><input type="radio" name="q5" value="a"> A. El rango de una matriz es siempre igual al número de columnas.</label>
      <label><input type="radio" name="q5" value="b"> B. El rango de una matriz es el número máximo de filas linealmente independientes.</label>
      <label><input type="radio" name="q5" value="c"> C. El rango de una matriz es siempre igual al número de filas.</label>
      <label><input type="radio" name="q5" value="d"> D. El rango de una matriz no tiene relación con las filas linealmente independientes.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Gauss transforma la matriz en una estructura triangular superior (o escalonada) mediante operaciones elementales por filas para despejar las incógnitas de abajo a arriba.">
      <legend>6. ¿Cuál es el objetivo principal del método de eliminación de Gauss?</legend>
      <label><input type="radio" name="q6" value="a"> A. Convertir una matriz en una matriz diagonal.</label>
      <label><input type="radio" name="q6" value="b"> B. Convertir una matriz en una matriz triangular superior para resolver el sistema de ecuaciones de manera recursiva.</label>
      <label><input type="radio" name="q6" value="c"> C. Encontrar el determinante de la matriz.</label>
      <label><input type="radio" name="q6" value="d"> D. Calcular la inversa de la matriz.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Busca evitar errores de redondeo numérico eligiendo el pivote de mayor magnitud absoluta (escalado) en la columna actual e intercambiando filas si es necesario.">
      <legend>7. ¿Qué significa el término «pivotaje parcial escalado» en el contexto de la eliminación de Gauss?</legend>
      <label><input type="radio" name="q7" value="a"> A. Seleccionar el pivote más pequeño y situarlo en la primera fila.</label>
      <label><input type="radio" name="q7" value="b"> B. Seleccionar el pivote más grande y situarlo en la primera fila, después dividir la fila por el elemento y restar las filas para hacer 0 los elementos inferiores.</label>
      <label><input type="radio" name="q7" value="c"> C. Seleccionar cualquier pivote y situarlo en la última fila.</label>
      <label><input type="radio" name="q7" value="d"> D. Ignorar el pivote y proceder con la eliminación.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Al terminar la fase de eliminación de Gauss en un sistema cuadrado, la matriz de coeficientes resultante adopta una estructura escalonada o triangular superior.">
      <legend>8. ¿Cuál de las siguientes propiedades es cierta sobre un sistema de ecuaciones lineales después de aplicar la eliminación de Gauss?</legend>
      <label><input type="radio" name="q8" value="a"> A. El sistema siempre se convierte en un sistema inconsistente.</label>
      <label><input type="radio" name="q8" value="b"> B. El sistema siempre se convierte en un sistema homogéneo.</label>
      <label><input type="radio" name="q8" value="c"> C. El sistema se convierte en uno con una matriz triangular superior.</label>
      <label><input type="radio" name="q8" value="d"> D. El sistema se convierte en uno con una matriz diagonal.</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La combinación lineal por filas (Fi ← Fi - kFj) sustituye una fila para anular los coeficientes por debajo del pivote sin alterar el conjunto de soluciones del sistema.">
      <legend>9. ¿Cuál es el propósito de restar una fila de otra multiplicada por un coeficiente durante la eliminación de Gauss?</legend>
      <label><input type="radio" name="q9" value="a"> A. Intercambiar las filas.</label>
      <label><input type="radio" name="q9" value="b"> B. Hacer que uno de los elementos de la fila inferior sea cero para formar una matriz triangular superior.</label>
      <label><input type="radio" name="q9" value="c"> C. Multiplicar las filas por un escalar.</label>
      <label><input type="radio" name="q9" value="d"> D. Dividir la fila por un coeficiente.</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La matriz ampliada [A | b] concatena la matriz de coeficientes A con la columna b de términos independientes para aplicarles las mismas operaciones de fila simultáneamente.">
      <legend>10. ¿Qué es una matriz ampliada en el contexto de la eliminación de Gauss?</legend>
      <label><input type="radio" name="q10" value="a"> A. Una matriz que incluye tanto los coeficientes del sistema de ecuaciones como los términos independientes en una sola matriz.</label>
      <label><input type="radio" name="q10" value="b"> B. Una matriz con filas adicionales añadidas al final.</label>
      <label><input type="radio" name="q10" value="c"> C. Una matriz con columnas adicionales añadidas al final.</label>
      <label><input type="radio" name="q10" value="d"> D. Una matriz que se utiliza solo para encontrar la inversa de la matriz original.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un sistema es compatible cuando tiene al menos una solución y determinado cuando dicha solución es única (un único punto de intersección).">
      <legend>11. ¿Cuál de las siguientes afirmaciones describe un sistema compatible determinado?</legend>
      <label><input type="radio" name="q11" value="a"> A. Un sistema con una única solución.</label>
      <label><input type="radio" name="q11" value="b"> B. Un sistema sin soluciones.</label>
      <label><input type="radio" name="q11" value="c"> C. Un sistema con infinitas soluciones.</label>
      <label><input type="radio" name="q11" value="d"> D. Un sistema que no se puede resolver.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Un sistema es compatible indeterminado cuando tiene infinitas soluciones, lo que ocurre geométricamente cuando las ecuaciones describen planos/líneas coincidentes.">
      <legend>12. ¿Qué caracteriza a un sistema compatible indeterminado?</legend>
      <label><input type="radio" name="q12" value="a"> A. Tiene una única solución.</label>
      <label><input type="radio" name="q12" value="b"> B. No tiene soluciones.</label>
      <label><input type="radio" name="q12" value="c"> C. Tiene infinitas soluciones.</label>
      <label><input type="radio" name="q12" value="d"> D. Su solución depende de un parámetro arbitrario.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Un sistema de ecuaciones es incompatible cuando carece de solución alguna (conjunto de soluciones vacío), habitualmente debido a ecuaciones contradictorias.">
      <legend>13. ¿Qué significa que un sistema de ecuaciones es incompatible?</legend>
      <label><input type="radio" name="q13" value="a"> A. El sistema tiene una única solución.</label>
      <label><input type="radio" name="q13" value="b"> B. El sistema no tiene ninguna solución.</label>
      <label><input type="radio" name="q13" value="c"> C. El sistema tiene infinitas soluciones.</label>
      <label><input type="radio" name="q13" value="d"> D. El sistema se puede resolver fácilmente.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Una igualdad del tipo 0 = 2 es una inconsistencia lógica (imposible). Su presencia al escalonar la matriz demuestra que el sistema es incompatible.">
      <legend>14. ¿Qué indica una ecuación como 0=2 en un sistema de ecuaciones lineales?</legend>
      <label><input type="radio" name="q14" value="a"> A. El sistema tiene una única solución.</label>
      <label><input type="radio" name="q14" value="b"> B. El sistema tiene infinitas soluciones.</label>
      <label><input type="radio" name="q14" value="c"> C. El sistema es incompatible.</label>
      <label><input type="radio" name="q14" value="d"> D. El sistema es trivialmente cierto.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Por el teorema de Rouché-Capelli, un sistema es compatible determinado cuando el rango de la matriz A coincide con el número de incógnitas n (rango(A) = rango([A|b]) = n).">
      <legend>15. ¿Cuál es la forma matricial de un sistema compatible determinado?</legend>
      <label><input type="radio" name="q15" value="a"> A. Una matriz con un rango menor que el número de incógnitas.</label>
      <label><input type="radio" name="q15" value="b"> B. Una matriz con un rango igual al número de incógnitas.</label>
      <label><input type="radio" name="q15" value="c"> C. Una matriz con un rango mayor que el número de incógnitas.</label>
      <label><input type="radio" name="q15" value="d"> D. Una matriz cuadrada singular.</label>
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
<summary>1. Respuesta correcta: B — Posibles soluciones de un sistema lineal</summary>

Un sistema de ecuaciones lineales solo puede presentar tres tipos de comportamiento geométrico y algebraico:
1. **Solución única:** Las rectas, planos o hiperplanos se cortan en un único punto (Sistema Compatible Determinado).
2. **Infinitas soluciones:** Las ecuaciones son dependientes y comparten un espacio de intersección continuo (Sistema Compatible Indeterminado).
3. **Ninguna solución:** Las rectas o planos son paralelos y no se intersecan en ningún punto (Sistema Incompatible).

**Para el examen:** Nunca existe un sistema lineal con exactamente 2, 3 o un número finito mayor que 1 de soluciones. O tiene 0, o 1, o $\infty$.
</details>

<details class="solution">
<summary>2. Respuesta correcta: C — Matriz de coeficientes invertible</summary>

Dado un sistema escrito en forma matricial:
\[
A x = b
\]
Si la matriz de coeficientes $A$ es **invertible** (lo que exige que $A$ sea cuadrada de orden $n \times n$ y que $\det(A) \neq 0$), podemos multiplicar por $A^{-1}$ a la izquierda en ambos miembros:
\[
A^{-1} (A x) = A^{-1} b \implies I x = A^{-1} b \implies x = A^{-1} b
\]
Como la inversa $A^{-1}$ es única, el vector de incógnitas $x$ queda determinado de forma única.

**Para el examen:** Matriz invertible $\iff \det(A) \neq 0 \iff \text{rango}(A) = n \iff$ Solución única (SCD).
</details>

<details class="solution">
<summary>3. Respuesta correcta: A — Forma matricial A · x = b</summary>

Cualquier sistema de $m$ ecuaciones lineales con $n$ incógnitas de la forma:
\[
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m
\end{cases}
\]
Se expresa mediante la ecuación matricial $A x = b$, donde:
- $A$ es la matriz de coeficientes de tamaño $m \times n$.
- $x$ es el vector columna de incógnitas de tamaño $n \times 1$.
- $b$ es el vector columna de términos independientes de tamaño $m \times 1$.
</details>

<details class="solution">
<summary>4. Respuesta correcta: C — Matriz singular</summary>

Por definición, una matriz cuadrada $A$ es **singular** cuando su determinante es nulo:
\[
\det(A) = 0
\]
Al ser el determinante igual a cero, sus filas (o columnas) son linealmente dependientes. En consecuencia, la matriz **no admite inversa** ($A^{-1}$ no existe).

**Para el examen:**
- Singular = Sin inversa ($\det = 0$).
- Regular (o No singular) = Con inversa ($\det \neq 0$).
</details>

<details class="solution">
<summary>5. Respuesta correcta: B — Definición de rango</summary>

El **rango** de una matriz $A$ es el número máximo de filas linealmente independientes que contiene (lo cual coincide exactamente con el número máximo de columnas linealmente independientes).

- Si una matriz de tamaño $m \times n$ se reduce a forma escalonada mediante operaciones elementales de fila, el rango es igual al número de **filas no nulas** (o número de pivotes).
- El rango está acotado por $\text{rango}(A) \le \min(m, n)$.
</details>

<details class="solution">
<summary>6. Respuesta correcta: B — Objetivo de la eliminación de Gauss</summary>

El método de eliminación de Gauss realiza transformaciones elementales por filas sobre la matriz ampliada $[A \mid b]$ con el objetivo de convertir la matriz de coeficientes $A$ en una **matriz triangular superior** (o forma escalonada).

Una vez escalonada la matriz, el sistema se resuelve fácilmente de abajo hacia arriba mediante el procedimiento de **sustitución regresiva**.

**Diferencia clave:**
- **Eliminación de Gauss:** Lleva la matriz a forma triangular superior / escalonada.
- **Gauss-Jordan:** Continúa el proceso hasta obtener la matriz diagonal / escalonada reducida por filas.
</details>

<details class="solution">
<summary>7. Respuesta correcta: B — Pivotaje parcial escalado</summary>

En el **pivotaje parcial escalado**:
1. Para cada fila $i$, se calcula un factor de escala $s_i = \max_j |a_{ij}|$.
2. En la columna $k$ del paso actual de eliminación, se compara la magnitud relativa de los elementos respecto a su escala: $\frac{|a_{ik}|}{s_i}$.
3. Se selecciona como pivote la fila que maximiza dicho cociente y se intercambia con la fila actual si es necesario.

Este procedimiento previene la propagación de errores de redondeo cuando se trabaja con aritmética de punto flotante en computadoras.
</details>

<details class="solution">
<summary>8. Respuesta correcta: C — Matriz resultante tras aplicar Gauss</summary>

Al finalizar las operaciones de eliminación hacia adelante en el método de Gauss sobre un sistema de matriz cuadrada $n \times n$, los elementos situados por debajo de la diagonal principal se convierten en ceros ($a_{ij} = 0$ para todo $i > j$).

Esto produce una **matriz triangular superior**, lo que simplifica el cálculo de las soluciones comenzando por la última variable $x_n$.
</details>

<details class="solution">
<summary>9. Respuesta correcta: B — Operaciones elementales de fila</summary>

En la eliminación de Gauss se utiliza la tercera operación elemental por filas:
\[
F_i \leftarrow F_i - k \cdot F_j
\]
Donde $k = \frac{a_{ik}}{a_{jk}}$ es el multiplicador calculado a partir del pivote $a_{jk}$.

El propósito exclusivo de esta combinación lineal es **anular el coeficiente** $a_{ik}$ ubicado en la posición por debajo del pivote actual, avanzando progresivamente en la construcción de la forma triangular superior.
</details>

<details class="solution">
<summary>10. Respuesta correcta: A — Matriz ampliada</summary>

La **matriz ampliada** (denotada como $[A \mid b]$ o $A^*$) se forma adjuntando la columna de términos independientes $b$ a la derecha de la matriz de coeficientes $A$:
\[
[A \mid b] = \left( \begin{array}{ccc|c}
a_{11} & \dots & a_{1n} & b_1 \\
a_{21} & \dots & a_{2n} & b_2 \\
\vdots & \ddots & \vdots & \vdots \\
a_{m1} & \dots & a_{mn} & b_m
\end{array} \right)
\]
Cualquier operación elemental realizada en la fila de $A$ debe aplicarse simultáneamente al término independiente correspondiente en $b$.
</details>

<details class="solution">
<summary>11. Respuesta correcta: A — Sistema Compatible Determinado (SCD)</summary>

Un sistema es:
- **Compatible:** Posee al menos una solución.
- **Determinado:** Dicha solución es única.

Por tanto, un **Sistema Compatible Determinado (SCD)** es aquel que tiene una **única solución**. Geométricamente representa el punto exacto en el espacio donde todas las ecuaciones lineales se intersecan simultáneamente.
</details>

<details class="solution">
<summary>12. Respuesta correcta: C — Sistema Compatible Indeterminado (SCI)</summary>

Un **Sistema Compatible Indeterminado (SCI)** se caracteriza por tener **infinitas soluciones**.

Esto ocurre algebraicamente cuando el sistema posee menos ecuaciones independientes que incógnitas (al menos una variable libre o parámetro indeterminado, ej. $x_3 = \lambda$).
</details>

<details class="solution">
<summary>13. Respuesta correcta: B — Sistema Incompatible (SI)</summary>

Un **Sistema Incompatible (SI)** es aquel que **no tiene ninguna solución**.

Geométricamente representa ecuaciones inconsistentes entre sí (por ejemplo, dos rectas o planos paralelos no coincidentes). Algebraicamente conduce a absurdos del tipo $0 = c$ (con $c \neq 0$).
</details>

<details class="solution">
<summary>14. Respuesta correcta: C — Contradicción 0 = 2</summary>

Si durante el proceso de eliminación por filas se obtiene una fila de la matriz ampliada con todos los coeficientes de las variables nulos y un término independiente distinto de cero:
\[
[0 \quad 0 \quad \dots \quad 0 \mid c] \quad \text{con } c \neq 0
\]
Esta fila equivale a la ecuación $0 \cdot x_1 + 0 \cdot x_2 + \dots + 0 \cdot x_n = c \implies 0 = c$.

Dado que esta condición es una imposibilidad matemática (contradicción), demuestra que el **sistema es incompatible** (sin solución).
</details>

<details class="solution">
<summary>15. Respuesta correcta: B — Criterio de Rouché-Capelli para SCD</summary>

De acuerdo con el **Teorema de Rouché-Capelli**:
- Un sistema $A x = b$ con $n$ incógnitas es compatible si y solo si $\text{rango}(A) = \text{rango}([A \mid b])$.
- Será **compatible determinado** (solución única) si y solo si este rango común es exactamente igual al **número de incógnitas** $n$:
\[
\text{rango}(A) = \text{rango}([A \mid b]) = n
\]
</details>

---

## Chuleta final: lo imprescindible para aprobar

### 1. Clasificación de sistemas (Teorema de Rouché-Capelli)

Dado un sistema de $m$ ecuaciones con $n$ incógnitas $[A \mid b]$:

| Tipo de Sistema | Condición de Rangos | Número de Soluciones |
|---|---|---|
| **Compatible Determinado (SCD)** | $\text{rango}(A) = \text{rango}([A \mid b]) = n$ | Solución **única** |
| **Compatible Indeterminado (SCI)** | $\text{rango}(A) = \text{rango}([A \mid b]) = r < n$ | **Infinitas** soluciones ($n - r$ parámetros libres) |
| **Incompatible (SI)** | $\text{rango}(A) \neq \text{rango}([A \mid b])$ | **Sin solución** |

### 2. Conceptos clave de la eliminación de Gauss

- **Matriz Ampliada $[A \mid b]$:** Junta coeficientes y términos independientes en una sola estructura.
- **Operaciones Elementales:**
  1. Intercambiar dos filas ($F_i \leftrightarrow F_j$).
  2. Multiplicar una fila por un escalar no nulo ($F_i \leftarrow k \cdot F_i$).
  3. Sumar a una fila otra multiplicada por un escalar ($F_i \leftarrow F_i + k \cdot F_j$).
- **Fase de Eliminación:** Anula los elementos por debajo de cada pivote para obtener una **matriz triangular superior**.
- **Sustitución Regresiva:** Despeja las variables comenzando desde la última fila hacia la primera.
- **Inconsistencia:** Una fila del tipo $[0 \quad 0 \quad \dots \quad 0 \mid c]$ con $c \neq 0$ representa $0 = c$, lo cual señala inmediatamente un **Sistema Incompatible**.

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