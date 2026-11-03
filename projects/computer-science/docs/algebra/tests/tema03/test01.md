---
title: Test Tema 3 — Recursión y matrices
---

# Test Tema 3: Recursión y matrices

Practica los conceptos del tema con estas 15 preguntas tipo test. Selecciona **una sola respuesta** por pregunta y, al terminar, pulsa **Comprobar respuestas**. Verás tu nota, qué has acertado y qué has fallado.

!!! tip "Cómo estudiar"
    Intenta responder sin mirar las explicaciones. Después de corregir, lee la explicación de cada pregunta y vuelve a hacer el test.

<div id="test-tema-3" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-answered">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">Completa el test y comprueba tus respuestas.</span>
    <div class="quiz-progress-track"><div id="quiz-progress-bar"></div></div>
  </div>

  <form id="quiz-form">
    <fieldset class="quiz-question" data-answer="B">
      <legend>1. ¿Qué son las funciones recursivas?</legend>
      <label><input type="radio" name="q1" value="A"> A. Funciones que siempre retornan el mismo valor.</label>
      <label><input type="radio" name="q1" value="B"> B. Funciones que se definen en función de sí mismas.</label>
      <label><input type="radio" name="q1" value="C"> C. Funciones que solo se utilizan en matemáticas.</label>
      <label><input type="radio" name="q1" value="D"> D. Funciones que no pueden llamarse a sí mismas.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="C">
      <legend>2. Para poder realizar la suma de dos matrices, ¿qué condición se debe cumplir?</legend>
      <label><input type="radio" name="q2" value="A"> A. Que el número de columnas de la primera coincida con las filas de la segunda.</label>
      <label><input type="radio" name="q2" value="B"> B. Que ambas matrices sean cuadradas de orden n.</label>
      <label><input type="radio" name="q2" value="C"> C. Que ambas matrices tengan las mismas dimensiones (mismo número de filas y de columnas).</label>
      <label><input type="radio" name="q2" value="D"> D. Que una de las matrices sea la matriz identidad.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="A">
      <legend>3. ¿Cuál es una propiedad fundamental del producto de matrices que lo diferencia del álgebra tradicional?</legend>
      <label><input type="radio" name="q3" value="A"> A. El producto de matrices no es conmutativo: normalmente, A × B no es igual a B × A.</label>
      <label><input type="radio" name="q3" value="B"> B. El orden de los factores no altera nunca el resultado.</label>
      <label><input type="radio" name="q3" value="C"> C. Solo se pueden multiplicar matrices que sean exactamente iguales.</label>
      <label><input type="radio" name="q3" value="D"> D. El elemento neutro del producto es la matriz cero.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="D">
      <legend>4. ¿Cómo se define una matriz simétrica?</legend>
      <label><input type="radio" name="q4" value="A"> A. Es una matriz donde solo los coeficientes de la diagonal son distintos de cero.</label>
      <label><input type="radio" name="q4" value="B"> B. Es una matriz diagonal cuyos elementos son todos iguales a uno.</label>
      <label><input type="radio" name="q4" value="C"> C. Es una matriz que tiene todos sus coeficientes superiores iguales a cero.</label>
      <label><input type="radio" name="q4" value="D"> D. Es una matriz cuadrada cuyos elementos son iguales a los situados en la posición reflejada respecto a la diagonal: aᵢⱼ = aⱼᵢ.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="D">
      <legend>5. ¿Cómo se calcula la potencia de una matriz cuadrada, por ejemplo A²?</legend>
      <label><input type="radio" name="q5" value="A"> A. Elevando cada coeficiente individual de la matriz al cuadrado.</label>
      <label><input type="radio" name="q5" value="B"> B. Multiplicando la matriz por su matriz transpuesta.</label>
      <label><input type="radio" name="q5" value="C"> C. Sumando la matriz consigo misma dos veces.</label>
      <label><input type="radio" name="q5" value="D"> D. Multiplicando la matriz por sí misma: A × A.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="B">
      <legend>6. ¿Qué condición fundamental debe cumplirse para que una matriz B sea la inversa de una matriz A?</legend>
      <label><input type="radio" name="q6" value="A"> A. Que la suma de ambas matrices sea igual a la matriz cero.</label>
      <label><input type="radio" name="q6" value="B"> B. Que A × B y B × A den como resultado la matriz identidad.</label>
      <label><input type="radio" name="q6" value="C"> C. Que la matriz A sea rectangular con más filas que columnas.</label>
      <label><input type="radio" name="q6" value="D"> D. Que todos los elementos de la diagonal de B sean negativos.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="C">
      <legend>7. ¿En qué consiste la operación de trasponer una matriz?</legend>
      <label><input type="radio" name="q7" value="A"> A. En multiplicar todos los coeficientes por un número negativo.</label>
      <label><input type="radio" name="q7" value="B"> B. En calcular el determinante y dividirlo por cada fila.</label>
      <label><input type="radio" name="q7" value="C"> C. En convertir las filas en columnas y las columnas en filas.</label>
      <label><input type="radio" name="q7" value="D"> D. En eliminar la última fila y la última columna.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="D">
      <legend>8. ¿Cuál es el resultado de calcular el determinante de una matriz?</legend>
      <label><input type="radio" name="q8" value="A"> A. Una nueva matriz del mismo orden.</label>
      <label><input type="radio" name="q8" value="B"> B. Siempre el número cero.</label>
      <label><input type="radio" name="q8" value="C"> C. Una matriz identidad si el determinante es positivo.</label>
      <label><input type="radio" name="q8" value="D"> D. Un número escalar (un único número).</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="A">
      <legend>9. Si A y B son matrices invertibles, ¿cuál es la inversa de su producto (A × B)⁻¹?</legend>
      <label><input type="radio" name="q9" value="A"> A. B⁻¹ × A⁻¹: las inversas aparecen en orden contrario.</label>
      <label><input type="radio" name="q9" value="B"> B. A⁻¹ × B⁻¹: las inversas mantienen el mismo orden.</label>
      <label><input type="radio" name="q9" value="C"> C. La inversa de un producto no se puede calcular.</label>
      <label><input type="radio" name="q9" value="D"> D. Es igual a la transpuesta de la suma de ambas matrices.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="C">
      <legend>10. ¿Qué sucede con el determinante de una matriz si tiene una fila o una columna formada completamente por ceros?</legend>
      <label><input type="radio" name="q10" value="A"> A. El determinante es igual a uno.</label>
      <label><input type="radio" name="q10" value="B"> B. El determinante se vuelve infinito.</label>
      <label><input type="radio" name="q10" value="C"> C. El determinante es cero.</label>
      <label><input type="radio" name="q10" value="D"> D. El determinante coincide necesariamente con el primer elemento a₁₁.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="B">
      <legend>11. ¿Qué define a una matriz booleana o matriz 0-1?</legend>
      <label><input type="radio" name="q11" value="A"> A. Una matriz cuyos elementos son números enteros del 0 al 9.</label>
      <label><input type="radio" name="q11" value="B"> B. Una matriz en la que todos los elementos son exclusivamente ceros o unos.</label>
      <label><input type="radio" name="q11" value="C"> C. Una matriz que solo contiene unos en su diagonal principal.</label>
      <label><input type="radio" name="q11" value="D"> D. Una matriz que resulta de dividir todos sus elementos por el determinante.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="A">
      <legend>12. ¿Cuál es la condición necesaria para realizar la unión (disyunción) o intersección de dos matrices booleanas?</legend>
      <label><input type="radio" name="q12" value="A"> A. Que ambas matrices tengan las mismas dimensiones (m × n).</label>
      <label><input type="radio" name="q12" value="B"> B. Que las columnas de la primera coincidan con las filas de la segunda.</label>
      <label><input type="radio" name="q12" value="C"> C. Que al menos una sea la matriz identidad.</label>
      <label><input type="radio" name="q12" value="D"> D. Que ambas sean cuadradas.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="C">
      <legend>13. En la intersección booleana de dos elementos, ¿cuándo es el resultado igual a 1?</legend>
      <label><input type="radio" name="q13" value="A"> A. Cuando al menos uno de los dos elementos es 1.</label>
      <label><input type="radio" name="q13" value="B"> B. Cuando ambos elementos son 0.</label>
      <label><input type="radio" name="q13" value="C"> C. Solo cuando ambos elementos son 1.</label>
      <label><input type="radio" name="q13" value="D"> D. Cuando la suma de los elementos es mayor que 1.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="B">
      <legend>14. ¿Cómo se realiza el producto booleano de dos matrices?</legend>
      <label><input type="radio" name="q14" value="A"> A. Sumando directamente los elementos correspondientes.</label>
      <label><input type="radio" name="q14" value="B"> B. Como el producto matricial habitual, pero usando AND (intersección) para combinar y OR (unión) para reunir los resultados.</label>
      <label><input type="radio" name="q14" value="C"> C. Multiplicando únicamente cada elemento por el que ocupa la misma posición.</label>
      <label><input type="radio" name="q14" value="D"> D. Calculando los determinantes y multiplicándolos.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <fieldset class="quiz-question" data-answer="B">
      <legend>15. ¿Por qué son importantes las matrices booleanas en computación?</legend>
      <label><input type="radio" name="q15" value="A"> A. Porque permiten realizar cálculos con decimales de alta precisión.</label>
      <label><input type="radio" name="q15" value="B"> B. Porque sus operaciones de unión e intersección sirven para representar relaciones y realizar operaciones lógicas usadas en programas y algoritmos.</label>
      <label><input type="radio" name="q15" value="C"> C. Porque son las únicas matrices que pueden invertirse mediante Gauss.</label>
      <label><input type="radio" name="q15" value="D"> D. Porque eliminan la necesidad de utilizar variables en programación.</label>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>

    <div class="quiz-actions">
      <button type="button" id="quiz-check">Comprobar respuestas</button>
      <button type="button" id="quiz-reset" class="secondary">Reiniciar test</button>
    </div>
  </form>

  <section id="quiz-result" class="quiz-result" aria-live="polite" hidden></section>
</div>

## Soluciones explicadas: aprende el tema

Lee estas explicaciones después de hacer el test. Están pensadas para entender la idea, no solo para memorizar la letra correcta.

### 1. Funciones recursivas

<mark>Respuesta correcta: B. Funciones que se definen en función de sí mismas.</mark>

Una función recursiva es una función que se llama a sí misma para resolver un problema más pequeño.

**Ejemplo: el factorial.** El factorial de 4 es:

- 4! = 4 × 3 × 2 × 1 = 24.
- Podemos definirlo así: `factorial(n) = n × factorial(n-1)`.
- Pero necesitamos un final: `factorial(1) = 1`.

La función va reduciendo el problema hasta llegar al caso base. Sin ese caso base, podría llamarse una y otra vez sin terminar.

**Qué debes recordar:** recursión = una función se llama a sí misma + tiene una condición para detenerse.

### 2. Suma de matrices

<mark>Respuesta correcta: C. Las dos matrices deben tener las mismas dimensiones.</mark>

Para sumar matrices, sumamos los elementos que están en la misma posición. Por eso tienen que tener el mismo número de filas y de columnas.

Ejemplo:

\[
\begin{pmatrix}1&2\\3&4\end{pmatrix}
+
\begin{pmatrix}5&6\\7&8\end{pmatrix}
=
\begin{pmatrix}6&8\\10&12\end{pmatrix}
\]

La primera posición se suma con la primera, la segunda con la segunda, etc.

**Ojo con la palabra «rango»:** en matemáticas, el rango de una matriz es otro concepto. Lo que exige la suma es que tengan las mismas **dimensiones u orden** (mismo número de filas y columnas).

**Qué debes recordar:** para sumar o restar matrices, deben tener exactamente el mismo tamaño.

### 3. Producto de matrices: no es conmutativo

<mark>Respuesta correcta: A. Normalmente, A × B no es igual a B × A.</mark>

Con números normales, 2 × 3 es igual a 3 × 2. Pero con matrices, cambiar el orden puede cambiar el resultado.

Por ejemplo, aunque los dos productos existan, puede ocurrir que:

\[
A \times B \ne B \times A
\]

Además, a veces `A × B` se puede calcular y `B × A` ni siquiera está definido, porque las dimensiones no encajan.

**Qué debes recordar:** el producto de matrices no es conmutativo. El orden importa.

### 4. Matriz simétrica

<mark>Respuesta correcta: D. Los elementos coinciden respecto a la diagonal principal.</mark>

Una matriz simétrica es una matriz cuadrada que se ve igual al reflejarla sobre su diagonal principal.

Su condición es:

\[
a_{ij}=a_{ji}
\]

Esto significa que el elemento de la fila 1, columna 2 debe ser igual al de la fila 2, columna 1, y así sucesivamente.

Ejemplo:

\[
A=\begin{pmatrix}1&2\\2&3\end{pmatrix}
\]

Los dos elementos que están fuera de la diagonal son 2. Por eso es simétrica.

**Qué debes recordar:** simétrica = espejo respecto a la diagonal principal. Siempre es cuadrada.

### 5. Potencia de una matriz

<mark>Respuesta correcta: D. A² = A × A.</mark>

Elevar una matriz al cuadrado significa multiplicarla por sí misma, siguiendo las reglas del producto matricial.

\[
A^2=A\times A
\]

No significa elevar cada número por separado al cuadrado. Tampoco significa sumar la matriz consigo misma.

Para poder calcular `A²`, la matriz debe ser cuadrada, porque el número de columnas debe coincidir con el número de filas en el producto.

**Qué debes recordar:** potencia de matriz = producto matricial repetido.

### 6. Matriz inversa

<mark>Respuesta correcta: B. El producto por su inversa da la matriz identidad.</mark>

La matriz inversa es parecida al inverso de un número. Por ejemplo, el inverso de 5 es 1/5, porque `5 × 1/5 = 1`.

En matrices, el equivalente del número 1 es la **matriz identidad** (una matriz con unos en la diagonal principal y ceros en el resto).

Si B es la inversa de A:

\[
A B=B A=I
\]

No todas las matrices tienen inversa: debe ser cuadrada y tener determinante distinto de cero.

**Qué debes recordar:** matriz × matriz inversa = identidad. La inversa solo existe para matrices cuadradas invertibles.

### 7. Matriz traspuesta

<mark>Respuesta correcta: C. Las filas pasan a ser columnas y las columnas pasan a ser filas.</mark>

Trasponer una matriz es intercambiar filas por columnas. Se representa con una T: \(A^T\).

Ejemplo:

\[
A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}
\qquad
A^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}
\]

La primera fila (1, 2, 3) se convierte en la primera columna. La segunda fila (4, 5, 6) se convierte en la segunda columna.

**Qué debes recordar:** trasponer = cambiar filas por columnas. Una matriz de 2 × 3 pasa a ser de 3 × 2.

### 8. Determinante

<mark>Respuesta correcta: D. El determinante es un número escalar.</mark>

El determinante no es otra matriz: es un único número que se calcula a partir de una matriz cuadrada.

Por ejemplo, para una matriz 2 × 2:

\[
A=\begin{pmatrix}a&b\\c&d\end{pmatrix}
\qquad
\det(A)=ad-bc
\]

Ese resultado puede ser positivo, negativo o cero.

El determinante sirve, entre otras cosas, para saber si una matriz cuadrada tiene inversa: si el determinante es cero, no tiene inversa.

**Qué debes recordar:** determinante = un número, no una matriz.

### 9. Inversa de un producto

<mark>Respuesta correcta: A. (A × B)⁻¹ = B⁻¹ × A⁻¹.</mark>

Esta regla es muy importante: al invertir un producto de matrices, el orden se da la vuelta.

\[
(AB)^{-1}=B^{-1}A^{-1}
\]

¿Por qué? Porque el orden de las matrices importa. No podemos invertirlas manteniendo el mismo orden.

**Truco para el examen:** imagina que `AB` está escrito de izquierda a derecha. Al calcular la inversa, lee las inversas al revés: primero la de B y después la de A.

**Qué debes recordar:** la inversa de un producto invierte el orden.

### 10. Fila o columna de ceros y determinante

<mark>Respuesta correcta: C. El determinante es cero.</mark>

Si una matriz cuadrada tiene una fila completa de ceros o una columna completa de ceros, su determinante vale cero.

Ejemplo:

\[
A=\begin{pmatrix}1&2\\0&0\end{pmatrix}
\qquad
\det(A)=1\cdot0-2\cdot0=0
\]

No hay que confundirlo con tener simplemente algún elemento igual a cero: eso no obliga a que el determinante sea cero. Tiene que haber una fila o columna entera de ceros (o cumplirse otra condición que haga nulo el determinante).

**Qué debes recordar:** una fila completa o una columna completa de ceros ⇒ determinante cero.

### 11. Matriz booleana o 0-1

<mark>Respuesta correcta: B. Solo contiene ceros y unos.</mark>

Una matriz booleana es una matriz cuyos elementos solo pueden ser:

- `0`, que podemos interpretar como falso.
- `1`, que podemos interpretar como verdadero.

Ejemplo:

\[
\begin{pmatrix}1&0\\0&1\end{pmatrix}
\]

Estas matrices son útiles para representar relaciones, conexiones o respuestas de sí/no.

**Qué debes recordar:** matriz booleana = solo ceros y unos.

### 12. Unión e intersección de matrices booleanas

<mark>Respuesta correcta: A. Deben tener las mismas dimensiones.</mark>

La unión (OR, disyunción) y la intersección (AND, conjunción) se hacen elemento a elemento, comparando las posiciones correspondientes.

Por eso las dos matrices deben tener el mismo número de filas y columnas.

Ejemplo:

\[
\begin{pmatrix}1&0\\0&1\end{pmatrix}
\quad\text{y}\quad
\begin{pmatrix}1&1\\0&0\end{pmatrix}
\]

Podemos comparar el elemento de arriba a la izquierda con el de arriba a la izquierda, y así con todos.

**Qué debes recordar:** unión e intersección booleanas se hacen posición a posición; las matrices deben tener el mismo tamaño.

### 13. Intersección booleana (AND)

<mark>Respuesta correcta: C. Solo si los dos elementos son 1.</mark>

La intersección funciona como un «Y» lógico (AND). Para que el resultado sea 1, las dos condiciones tienen que ser verdaderas.

| Primer valor | Segundo valor | AND |
|---:|---:|---:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Piensa en esta frase: «Apruebo si estudio **y** hago el examen». Las dos cosas deben cumplirse.

**Qué debes recordar:** AND = 1 únicamente cuando ambos valores son 1.

### 14. Producto booleano de matrices

<mark>Respuesta correcta: B. Se usa AND para combinar y OR para reunir los resultados.</mark>

El producto booleano se parece al producto normal de matrices, pero cambia las operaciones:

- Donde el producto normal multiplica, usamos AND (intersección).
- Donde el producto normal suma, usamos OR (unión).

Para cada posición del resultado, combinamos los elementos de una fila con los de una columna mediante AND y reunimos los resultados mediante OR.

Ejemplo de la idea:

\[
(1\land0)\lor(1\land1)=0\lor1=1
\]

**Qué debes recordar:** producto booleano = AND dentro de cada pareja y OR para unir los resultados.

### 15. Importancia de las matrices booleanas en computación

<mark>Respuesta correcta: B. Sus operaciones lógicas ayudan a representar relaciones y a trabajar con algoritmos.</mark>

Los ordenadores trabajan constantemente con información que puede representarse como verdadero o falso, encendido o apagado, conectado o no conectado.

Las matrices booleanas permiten representar, por ejemplo, si existe una conexión entre dos ordenadores o si dos elementos están relacionados.

Sus operaciones AND y OR permiten combinar esa información de forma lógica.

**Qué debes recordar:** las matrices booleanas sirven para representar relaciones y aplicar operaciones lógicas en informática.

---

## Chuleta final para el examen

| Concepto | Lo que tienes que recordar |
|---|---|
| Recursión | Una función se llama a sí misma. Necesita un caso base. |
| Suma de matrices | Mismas filas y mismas columnas. |
| Producto de matrices | El orden importa: normalmente AB ≠ BA. |
| Matriz simétrica | \(a_{ij}=a_{ji}\); es cuadrada. |
| Potencia | \(A^2=A\times A\). |
| Matriz inversa | \(AA^{-1}=A^{-1}A=I\). |
| Traspuesta | Filas ↔ columnas. |
| Determinante | Es un número escalar. |
| Inversa de un producto | \((AB)^{-1}=B^{-1}A^{-1}\). |
| Fila o columna de ceros | Determinante igual a cero. |
| Matriz booleana | Solo contiene 0 y 1. |
| Unión (OR) | Da 1 si al menos uno es 1. |
| Intersección (AND) | Da 1 solo si ambos son 1. |
| Producto booleano | AND para combinar; OR para reunir. |

!!! success "Consejo para aprobar"
    Si dominas las diferencias entre suma y producto de matrices, sabes qué significa la inversa y la traspuesta, y recuerdas las reglas AND/OR de las matrices booleanas, tendrás cubiertas las ideas centrales de este test.

<style>
#test-tema-3 .quiz-container { margin: 1.2rem 0 2rem; }
#test-tema-3 .quiz-progress { padding: 1rem; border: 1px solid var(--md-default-fg-color--lightest); border-radius: .6rem; margin-bottom: 1rem; }
#test-tema-3 .quiz-progress-track { height: 8px; background: var(--md-default-fg-color--lightest); border-radius: 10px; overflow: hidden; margin-top: .65rem; }
#test-tema-3 #quiz-progress-bar { height: 100%; width: 0; background: var(--md-primary-fg-color); transition: width .2s; }
#test-tema-3 .quiz-question { border: 1px solid var(--md-default-fg-color--lightest); border-radius: .6rem; padding: 1rem; margin: 1rem 0; min-width: 0; }
#test-tema-3 .quiz-question legend { font-weight: 700; padding: 0 .25rem; }
#test-tema-3 .quiz-question label { display: block; padding: .45rem .6rem; margin: .25rem 0; border-radius: .35rem; cursor: pointer; }
#test-tema-3 .quiz-question label:hover { background: var(--md-default-fg-color--lightest); }
#test-tema-3 .quiz-question input { margin-right: .45rem; }
#test-tema-3 .quiz-question.correct { border: 2px solid #2e7d32; }
#test-tema-3 .quiz-question.incorrect { border: 2px solid #c62828; }
#test-tema-3 .quiz-question.correct label.selected { background: rgba(46,125,50,.12); }
#test-tema-3 .quiz-question.incorrect label.selected { background: rgba(198,40,40,.12); }
#test-tema-3 .question-feedback { margin: .55rem .25rem 0; font-weight: 700; }
#test-tema-3 .quiz-actions { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1.2rem 0; }
#test-tema-3 .quiz-actions button { border: 0; border-radius: .35rem; padding: .7rem 1rem; background: var(--md-primary-fg-color); color: var(--md-primary-bg-color); font: inherit; font-weight: 700; cursor: pointer; }
#test-tema-3 .quiz-actions button.secondary { background: var(--md-default-fg-color--lightest); color: var(--md-default-fg-color); }
#test-tema-3 .quiz-result { border: 1px solid var(--md-default-fg-color--lightest); border-radius: .6rem; padding: 1rem; margin-top: 1rem; }
#test-tema-3 .quiz-result strong { font-size: 1.2rem; }
</style>

<script>
(function () {
  const root = document.getElementById('test-tema-3');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';

  const form = root.querySelector('#quiz-form');
  const questions = Array.from(root.querySelectorAll('.quiz-question'));
  const result = root.querySelector('#quiz-result');
  const answeredText = root.querySelector('#quiz-answered');
  const progressText = root.querySelector('#quiz-progress-text');
  const progressBar = root.querySelector('#quiz-progress-bar');
  const checkButton = root.querySelector('#quiz-check');
  const resetButton = root.querySelector('#quiz-reset');
  let checked = false;

  function updateProgress() {
    const answered = questions.filter(q => q.querySelector('input:checked')).length;
    answeredText.textContent = answered + ' de ' + questions.length + ' respondidas';
    progressText.textContent = answered === questions.length
      ? '¡Ya has contestado todas! Puedes comprobar el test.'
      : 'Te faltan ' + (questions.length - answered) + ' por responder.';
    progressBar.style.width = (answered / questions.length * 100) + '%';
  }

  form.addEventListener('change', function () {
    updateProgress();
    if (checked) clearCorrection();
  });

  function clearCorrection() {
    checked = false;
    result.hidden = true;
    result.innerHTML = '';
    questions.forEach(q => {
      q.classList.remove('correct', 'incorrect');
      q.querySelector('.question-feedback').textContent = '';
      q.querySelectorAll('label').forEach(label => label.classList.remove('selected'));
    });
  }

  checkButton.addEventListener('click', function () {
    let score = 0;
    let unanswered = 0;

    questions.forEach((q, index) => {
      const correct = q.dataset.answer;
      const selected = q.querySelector('input:checked');
      const feedback = q.querySelector('.question-feedback');
      q.classList.remove('correct', 'incorrect');
      q.querySelectorAll('label').forEach(label => label.classList.remove('selected'));

      if (!selected) {
        unanswered++;
        q.classList.add('incorrect');
        feedback.textContent = 'Sin responder. La respuesta correcta es ' + correct + '.';
      } else {
        selected.closest('label').classList.add('selected');
        if (selected.value === correct) {
          score++;
          q.classList.add('correct');
          feedback.textContent = '✓ ¡Correcto!';
        } else {
          q.classList.add('incorrect');
          feedback.textContent = '✗ Incorrecto. La respuesta correcta es ' + correct + '.';
        }
      }
    });

    const percentage = Math.round(score / questions.length * 100);
    let message = percentage >= 90 ? '¡Excelente! Dominas muy bien este test.' :
                  percentage >= 70 ? '¡Buen trabajo! Repasa los errores para afianzar.' :
                  percentage >= 50 ? 'Vas avanzando. Lee las explicaciones y vuelve a intentarlo.' :
                  'Te conviene repasar las explicaciones y repetir el test.';
    result.innerHTML = '<strong>Resultado: ' + score + ' / ' + questions.length +
      ' (' + percentage + '%)</strong><p>' + message + '</p><p>' +
      unanswered + ' pregunta(s) sin responder.</p>';
    result.hidden = false;
    checked = true;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  resetButton.addEventListener('click', function () {
    form.reset();
    clearCorrection();
    updateProgress();
    root.querySelector('.quiz-progress').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  updateProgress();
})();
</script>
