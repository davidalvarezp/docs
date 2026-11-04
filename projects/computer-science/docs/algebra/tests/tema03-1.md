---
title: Test Tema 3 - Recursión y matrices
---

# Test Tema 3: Recursión y matrices

Este test está basado en las 15 preguntas del cuestionario del tema. Tiene **una sola respuesta correcta por pregunta**. Selecciona tus respuestas y pulsa **Comprobar respuestas** para conocer tu nota, ver la explicación rápida de cada pregunta y consultar al final las soluciones explicadas paso a paso.

!!! tip "Cómo estudiar"
    Haz primero el test sin mirar las soluciones. Al corregirlo, lee la **explicación rápida** de cada pregunta y, si necesitas profundizar, despliega la **explicación detallada paso a paso** al final de la página.

<div id="quiz-tema3" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Una función recursiva es aquella que se define en términos de sí misma, llamándose a sí misma sobre subproblemas más pequeños hasta alcanzar un caso base.">
      <legend>1. ¿Qué son las funciones recursivas?</legend>
      <label><input type="radio" name="q1" value="a"> A. Funciones que siempre retornan el mismo valor.</label>
      <label><input type="radio" name="q1" value="b"> B. Funciones que se definen en función de sí mismas.</label>
      <label><input type="radio" name="q1" value="c"> C. Funciones que solo se utilizan en matemáticas.</label>
      <label><input type="radio" name="q1" value="d"> D. Funciones que no pueden llamarse a sí mismas.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Para sumar o restar dos matrices, estas deben ser de la misma dimensión (m × n), ya que la operación se realiza elemento a elemento en la misma posición.">
      <legend>2. Para poder realizar la suma de dos matrices, ¿qué condición se debe cumplir?</legend>
      <label><input type="radio" name="q2" value="a"> A. Que el número de columnas de la primera coincida con las filas de la segunda.</label>
      <label><input type="radio" name="q2" value="b"> B. Que ambas matrices sean cuadradas de orden n.</label>
      <label><input type="radio" name="q2" value="c"> C. Que ambas matrices tengan las mismas dimensiones (mismo número de filas y de columnas).</label>
      <label><input type="radio" name="q2" value="d"> D. Que una de las matrices sea la matriz identidad.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El producto de matrices no es conmutativo (A × B ≠ B × A en general). El orden de los factores altera el resultado e incluso puede hacer que el producto no sea realizable.">
      <legend>3. ¿Cuál es una propiedad fundamental del producto de matrices que lo diferencia del álgebra tradicional?</legend>
      <label><input type="radio" name="q3" value="a"> A. El producto de matrices no es conmutativo: normalmente, A × B no es igual a B × A.</label>
      <label><input type="radio" name="q3" value="b"> B. El orden de los factores no altera nunca el resultado.</label>
      <label><input type="radio" name="q3" value="c"> C. Solo se pueden multiplicar matrices que sean exactamente iguales.</label>
      <label><input type="radio" name="q3" value="d"> D. El elemento neutro del producto es la matriz cero.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Una matriz cuadrada es simétrica si coincide con su traspuesta (A = Aᵀ), lo que significa que aᵢⱼ = aⱼᵢ para todo par de índices respecto a la diagonal principal.">
      <legend>4. ¿Cómo se define una matriz simétrica?</legend>
      <label><input type="radio" name="q4" value="a"> A. Es una matriz donde solo los coeficientes de la diagonal son distintos de cero.</label>
      <label><input type="radio" name="q4" value="b"> B. Es una matriz diagonal cuyos elementos son todos iguales a uno.</label>
      <label><input type="radio" name="q4" value="c"> C. Es una matriz que tiene todos sus coeficientes superiores iguales a cero.</label>
      <label><input type="radio" name="q4" value="d"> D. Es una matriz cuadrada cuyos elementos son iguales a los situados en la posición reflejada respecto a la diagonal: aᵢⱼ = aⱼᵢ.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="La potencia A² se calcula realizando el producto matricial de A por sí misma (A × A), no elevando cada elemento individual al cuadrado.">
      <legend>5. ¿Cómo se calcula la potencia de una matriz cuadrada, por ejemplo A²?</legend>
      <label><input type="radio" name="q5" value="a"> A. Elevando cada coeficiente individual de la matriz al cuadrado.</label>
      <label><input type="radio" name="q5" value="b"> B. Multiplicando la matriz por su matriz transpuesta.</label>
      <label><input type="radio" name="q5" value="c"> C. Sumando la matriz consigo misma dos veces.</label>
      <label><input type="radio" name="q5" value="d"> D. Multiplicando la matriz por sí misma: A × A.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Una matriz B es la inversa de A (designada B = A⁻¹) si y solo si cumple la propiedad del elemento neutro matricial: A × B = B × A = I.">
      <legend>6. ¿Qué condición fundamental debe cumplirse para que una matriz B sea la inversa de una matriz A?</legend>
      <label><input type="radio" name="q6" value="a"> A. Que la suma de ambas matrices sea igual a la matriz cero.</label>
      <label><input type="radio" name="q6" value="b"> B. Que A × B y B × A den como resultado la matriz identidad.</label>
      <label><input type="radio" name="q6" value="c"> C. Que la matriz A sea rectangular con más filas que columnas.</label>
      <label><input type="radio" name="q6" value="d"> D. Que todos los elementos de la diagonal de B sean negativos.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La trasposición de una matriz A intercambia de forma sistemática sus filas por columnas, de modo que la fila i de A pasa a ser la columna i de Aᵀ.">
      <legend>7. ¿En qué consiste la operación de trasponer una matriz?</legend>
      <label><input type="radio" name="q7" value="a"> A. En multiplicar todos los coeficientes por un número negativo.</label>
      <label><input type="radio" name="q7" value="b"> B. En calcular el determinante y dividirlo por cada fila.</label>
      <label><input type="radio" name="q7" value="c"> C. En convertir las filas en columnas y las columnas en filas.</label>
      <label><input type="radio" name="q7" value="d"> D. En eliminar la última fila y la última columna.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="El determinante de una matriz cuadrada es una función que asigna a dicha matriz un único número escalar (real o complejo).">
      <legend>8. ¿Cuál es el resultado de calcular el determinante de una matriz?</legend>
      <label><input type="radio" name="q8" value="a"> A. Una nueva matriz del mismo orden.</label>
      <label><input type="radio" name="q8" value="b"> B. Siempre el número cero.</label>
      <label><input type="radio" name="q8" value="c"> C. Una matriz identidad si el determinante es positivo.</label>
      <label><input type="radio" name="q8" value="d"> D. Un número escalar (un único número).</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Debido a la no conmutatividad del producto matricial, la inversa del producto invierte el orden de los factores: (A × B)⁻¹ = B⁻¹ × A⁻¹..">
      <legend>9. Si A y B son matrices invertibles, ¿cuál es la inversa de su producto (A × B)⁻¹?</legend>
      <label><input type="radio" name="q9" value="a"> A. B⁻¹ × A⁻¹: las inversas aparecen en orden contrario.</label>
      <label><input type="radio" name="q9" value="b"> B. A⁻¹ × B⁻¹: las inversas mantienen el mismo orden.</label>
      <label><input type="radio" name="q9" value="c"> C. La inversa de un producto no se puede calcular.</label>
      <label><input type="radio" name="q9" value="d"> D. Es igual a la transpuesta de la suma de ambas matrices.</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Si una fila o columna de una matriz cuadrada es completamente nula (de ceros), al desarrollar el determinante por esa línea el resultado es invariablemente 0.">
      <legend>10. ¿Qué sucede con el determinante de una matriz si tiene una fila o una columna formada completamente por ceros?</legend>
      <label><input type="radio" name="q10" value="a"> A. El determinante es igual a uno.</label>
      <label><input type="radio" name="q10" value="b"> B. El determinante se vuelve infinito.</label>
      <label><input type="radio" name="q10" value="c"> C. El determinante es cero.</label>
      <label><input type="radio" name="q10" value="d"> D. El determinante coincide necesariamente con el primer elemento a₁₁.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Una matriz booleana (o matriz 0-1) es aquella cuyos elementos pertenecen estrictamente al conjunto binario {0, 1}.">
      <legend>11. ¿Qué define a una matriz booleana o matriz 0-1?</legend>
      <label><input type="radio" name="q11" value="a"> A. Una matriz cuyos elementos son números enteros del 0 al 9.</label>
      <label><input type="radio" name="q11" value="b"> B. Una matriz en la que todos los elementos son exclusivamente ceros o unos.</label>
      <label><input type="radio" name="q11" value="c"> C. Una matriz que solo contiene unos en su diagonal principal.</label>
      <label><input type="radio" name="q11" value="d"> D. Una matriz que resulta de dividir todos sus elementos por el determinante.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Las operaciones elementales booleanas de unión (∨) e intersección (∧) se aplican término a término en la misma posición, requiriendo matrices del mismo tamaño (m × n).">
      <legend>12. ¿Cuál es la condición necesaria para realizar la unión (disyunción) o intersección de dos matrices booleanas?</legend>
      <label><input type="radio" name="q12" value="a"> A. Que ambas matrices tengan las mismas dimensiones (m × n).</label>
      <label><input type="radio" name="q12" value="b"> B. Que las columnas de la primera coincidan con las filas de la segunda.</label>
      <label><input type="radio" name="q12" value="c"> C. Que al menos una sea la matriz identidad.</label>
      <label><input type="radio" name="q12" value="d"> D. Que ambas sean cuadradas.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La intersección booleana sigue la regla lógica del operador AND (∧): el valor resultante es 1 si y solo si ambos operandos son igual a 1.">
      <legend>13. En la intersección booleana de dos elementos, ¿cuándo es el resultado igual a 1?</legend>
      <label><input type="radio" name="q13" value="a"> A. Cuando al menos uno de los dos elementos es 1.</label>
      <label><input type="radio" name="q13" value="b"> B. Cuando ambos elementos son 0.</label>
      <label><input type="radio" name="q13" value="c"> C. Solo cuando ambos elementos son 1.</label>
      <label><input type="radio" name="q13" value="d"> D. Cuando la suma de los elementos es mayor que 1.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El producto booleano A ⊙ B sigue el esquema fila por columna habitual, pero sustituye las multiplicaciones por intersecciones AND (∧) y las sumas por uniones OR (∨).">
      <legend>14. ¿Cómo se realiza el producto booleano de dos matrices?</legend>
      <label><input type="radio" name="q14" value="a"> A. Sumando directamente los elementos correspondientes.</label>
      <label><input type="radio" name="q14" value="b"> B. Como el producto matricial habitual, pero usando AND (intersección) para combinar y OR (unión) para reunir los resultados.</label>
      <label><input type="radio" name="q14" value="c"> C. Multiplicando únicamente cada elemento por el que ocupa la misma posición.</label>
      <label><input type="radio" name="q14" value="d"> D. Calculando los determinantes y multiplicándolos.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Permiten modelar relaciones binarias, grafos de conectividad, tablas de caminos y operaciones de lógica digital de forma altamente eficiente en código.">
      <legend>15. ¿Por qué son importantes las matrices booleanas en computación?</legend>
      <label><input type="radio" name="q15" value="a"> A. Porque permiten realizar cálculos con decimales de alta precisión.</label>
      <label><input type="radio" name="q15" value="b"> B. Porque sus operaciones de unión e intersección sirven para representar relaciones y realizar operaciones lógicas usadas en programas y algoritmos.</label>
      <label><input type="radio" name="q15" value="c"> C. Porque son las únicas matrices que pueden invertirse mediante Gauss.</label>
      <label><input type="radio" name="q15" value="d"> D. Porque eliminan la necesidad de utilizar variables en programación.</label>
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
<summary>1. Respuesta correcta: B — Funciones que se definen en función de sí mismas</summary>

Una **función recursiva** es una función que se llama a sí misma para resolver un problema más pequeño.

**Ejemplo: el factorial.** El factorial de 4 es:
- \(4! = 4 \times 3 \times 2 \times 1 = 24\).
- Podemos definirlo así: `factorial(n) = n * factorial(n-1)`.
- Pero necesitamos un final: `factorial(1) = 1`.

La función va reduciendo el problema hasta llegar al **caso base**. Sin ese caso base, la función continuaría ejecutándose indefinidamente hasta causar un desbordamiento de memoria.

**Para el examen:** recursión = función que se llama a sí misma + condición de parada (caso base).
</details>

<details class="solution">
<summary>2. Respuesta correcta: C — Misma dimensión para sumar matrices</summary>

Para sumar dos matrices, sumamos los elementos que ocupan exactamente la misma posición. Por ello, ambas matrices deben tener **el mismo número de filas y el mismo número de columnas**.

Ejemplo:
\[
\begin{pmatrix}1&2\\3&4\end{pmatrix}
+
\begin{pmatrix}5&6\\7&8\end{pmatrix}
=
\begin{pmatrix}6&8\\10&12\end{pmatrix}
\]

El elemento de la posición (1,1) se suma con el de la posición (1,1), el (1,2) con el (1,2), etc.

**Ojo en el examen:** la suma de matrices no requiere que las matrices sean cuadradas, únicamente que tengan exactamente las mismas dimensiones (\(m \times n\)).
</details>

<details class="solution">
<summary>3. Respuesta correcta: A — El producto de matrices no es conmutativo</summary>

En la aritmética ordinaria, el orden de los factores no altera el producto (\(2 \times 3 = 3 \times 2\)). Sin embargo, en el álgebra matricial, por regla general:
\[
A \times B \ne B \times A
\]

Además, para que se pueda calcular \(A \times B\), el número de **columnas** de la primera matriz \(A\) debe ser igual al número de **filas** de la segunda matriz \(B\). Al cambiar el orden a \(B \times A\), es posible que la operación ni siquiera esté definida.

**Para el examen:** el producto de matrices no es conmutativo. El orden en el que escribes las matrices importa.
</details>

<details class="solution">
<summary>4. Respuesta correcta: D — Definición de matriz simétrica</summary>

Una **matriz simétrica** es una matriz cuadrada que no cambia al intercambiar sus filas por sus columnas. Es decir, coincide con su matriz traspuesta:
\[
A = A^T \quad \iff \quad a_{ij} = a_{ji}
\]

Esto implica que los elementos son simétricos respecto a la **diagonal principal**.

Ejemplo:
\[
A = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}
\]
Los elementos en las posiciones (1,2) y (2,1) son iguales a 2.

**Truco:** para que una matriz sea simétrica, primero debe ser obligatoriamente cuadrada.
</details>

<details class="solution">
<summary>5. Respuesta correcta: D — Potencia de una matriz</summary>

Calcular la potencia de una matriz cuadrada (por ejemplo, \(A^2\)) significa multiplicarla por sí misma mediante el **producto matricial**:
\[
A^2 = A \times A
\]

**Error común:** no se deben elevar al cuadrado los coeficientes individuales de la matriz. La operación requiere aplicar el procedimiento completo de producto matricial (fila por columna).

**Condición:** la matriz debe ser cuadrada para poder multiplicar \(A\) por sí misma.
</details>

<details class="solution">
<summary>6. Respuesta correcta: B — Definición de matriz inversa</summary>

La matriz inversa es el análogo del inverso multiplicativo de un número real (\(5 \cdot \frac{1}{5} = 1\)). En matrices, la **matriz identidad** \(I\) actúa como el número 1.

Si la matriz \(B\) es la inversa de \(A\) (se denota como \(A^{-1}\)), debe cumplirse:
\[
A \times B = B \times A = I
\]

**Para el examen:**
- Una matriz solo puede tener inversa si es **cuadrada** y su **determinante es distinto de cero** (\(\det(A) \neq 0\)).
- Si \(\det(A) = 0\), la matriz se llama *singular* o no invertible.
</details>

<details class="solution">
<summary>7. Respuesta correcta: C — Trasponer una matriz</summary>

La operación de **trasposición** consiste en intercambiar las filas por las columnas de una matriz. Se denota por \(A^T\).

Ejemplo:
\[
A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}
\implies
A^T = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}
\]

Si la matriz original \(A\) tiene dimensión \(m \times n\), su traspuesta \(A^T\) tendrá dimensión \(n \times m\).

**Para el examen:** la primera fila de \(A\) se convierte en la primera columna de \(A^T\), la segunda fila en la segunda columna, etc.
</details>

<details class="solution">
<summary>8. Respuesta correcta: D — El determinante es un número escalar</summary>

El **determinante** es un valor numérico único (un escalar) asociado a una matriz cuadrada.

Para una matriz de orden 2:
\[
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \implies \det(A) = ad - bc
\]

**Propiedad clave:** el determinante indica si la matriz es invertible. Si \(\det(A) \neq 0\), la matriz admite inversa. Si \(\det(A) = 0\), la matriz no tiene inversa.
</details>

<details class="solution">
<summary>9. Respuesta correcta: A — Inversa del producto de dos matrices</summary>

Al calcular la inversa del producto de dos matrices invertibles \(A\) y \(B\), el orden de los factores se invierte:
\[
(A \times B)^{-1} = B^{-1} \times A^{-1}
\]

**Demostración rápida:**
\[
(A \times B) \times (B^{-1} \times A^{-1}) = A \times (B \times B^{-1}) \times A^{-1} = A \times I \times A^{-1} = A \times A^{-1} = I
\]

**Truco:** la propiedad de "invertir el orden" también se aplica a la traspuesta de un producto: \((A \times B)^T = B^T \times A^T\).
</details>

<details class="solution">
<summary>10. Respuesta correcta: C — Fila o columna de ceros en un determinante</summary>

Si una matriz cuadrada tiene una fila entera o una columna entera compuesta por ceros, su determinante es automáticamente cero:
\[
\det(A) = 0
\]

Ejemplo:
\[
\begin{vmatrix} 1 & 2 \\ 0 & 0 \end{vmatrix} = 1\cdot 0 - 2\cdot 0 = 0
\]

**Para el examen:** una línea nula hace que las filas o columnas sean linealmente dependientes, lo cual anula el determinante e impide que la matriz tenga inversa.
</details>

<details class="solution">
<summary>11. Respuesta correcta: B — Matriz booleana o 0-1</summary>

Una **matriz booleana** (o matriz 0-1) es aquella cuyos elementos pertenecen únicamente al conjunto \(\{0, 1\}\).

Se utilizan para representar relaciones binarias y estructuras en ciencias de la computación:
- `0` representa falso, ausencia de conexión o sin relación.
- `1` representa verdadero, presencia de conexión o con relación.

**Ejemplo:** representan las matrices de adyacencia de grafos dirigidos o redes.
</details>

<details class="solution">
<summary>12. Respuesta correcta: A — Dimensiones en operaciones booleanas</summary>

Las operaciones de **unión** (disyunción, \(\lor\)) e **intersección** (conjunción, \(\land\)) entre matrices booleanas se evalúan elemento a elemento en cada posición \((i, j)\).

Por consiguiente, es estrictamente necesario que ambas matrices tengan exactamente el **mismo tamaño** (\(m \times n\)).

Ejemplo de unión elemento a elemento:
\[
\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \lor \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1\lor 1 & 0\lor 1 \\ 0\lor 0 & 1\lor 0 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
\]
</details>

<details class="solution">
<summary>13. Respuesta correcta: C — Intersección booleana (AND)</summary>

La intersección de dos matrices booleanas equivale a aplicar la operación lógica **AND** (\(\land\)) posición por posición:

| A | B | A \(\land\) B |
|:-:|:-:|:-------------:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

**Regla:** el resultado solo es 1 cuando **ambos** elementos comparados son igual a 1.
</details>

<details class="solution">
<summary>14. Respuesta correcta: B — Producto booleano de matrices</summary>

El **producto booleano** de dos matrices \(A\) (de tamaño \(m \times k\)) y \(B\) (de tamaño \(k \times n\)), denotado como \(A \odot B\), utiliza la misma estructura que el producto matricial ordinario, reemplazando:
- La multiplicación ordinaria por la intersección **AND** (\(\land\)).
- La suma ordinaria por la unión **OR** (\(\lor\)).

El elemento en la posición \((i, j)\) del resultado viene dado por:
\[
c_{ij} = (a_{i1} \land b_{1j}) \lor (a_{i2} \land b_{2j}) \lor \dots \lor (a_{ik} \land b_{kj})
\]

**Requisito:** el número de columnas de \(A\) debe ser igual al número de filas de \(B\).
</details>

<details class="solution">
<summary>15. Respuesta correcta: B — Aplicación de matrices booleanas en informática</summary>

Las matrices booleanas son fundamentales en informática porque permiten manipular estructuras lógicas avanzadas mediante álgebra binaria:
- Representación de **grafos** y redes de datos (matrices de adyacencia).
- Cálculo de **cierres transitivos** (algoritmo de Warshall).
- Consultas en **bases de datos relacionales** y operaciones de lógica digital.

**Para el examen:** la unión e intersección en matrices booleanas permiten realizar búsquedas y procesar conexiones de manera óptima a nivel de bits.
</details>

---

## Chuleta final: lo imprescindible para aprobar

### 1. Operaciones con matrices ordinarias

| Operación | Condición requerida | Propiedad clave |
|---|---|---|
| Suma / Resta | Mismo tamaño (\(m \times n\)) | Elemento a elemento. |
| Producto (\(A \times B\)) | Columnas de \(A\) = Filas de \(B\) | **No conmutativo** (\(A \times B \neq B \times A\)). |
| Matriz traspuesta (\(A^T\)) | Cualquier dimensión | Intercambia filas por columnas. |
| Matriz inversa (\(A^{-1}\)) | Cuadrada y \(\det(A) \neq 0\) | \(A \times A^{-1} = A^{-1} \times A = I\). |
| Inversa del producto | \(A\) y \(B\) invertibles | \((A \times B)^{-1} = B^{-1} \times A^{-1}\). |

### 2. Determinantes y matrices especiales

- **Matriz simétrica:** Cuadrada que cumple \(A = A^T\) (\(a_{ij} = a_{ji}\)).
- **Determinante:** Un único número escalar.
- **Línea de ceros:** Si una fila o columna es completa de ceros, \(\det(A) = 0\).

### 3. Operaciones con matrices booleanas (0-1)

- **Unión (\(A \lor B\)):** Aplica **OR** elemento a elemento (requiere mismo tamaño).
- **Intersección (\(A \land B\)):** Aplica **AND** elemento a elemento (da 1 solo si ambos son 1).
- **Producto booleano (\(A \odot B\)):** Esquema de producto matricial sustituyendo multiplicaciones por **AND** y sumas por **OR**.

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