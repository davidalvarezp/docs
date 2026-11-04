---
title: Test Tarea 1.2 - Álgebra Matricial y Eliminación Gaussiana
---

# Test Tarea 1.2: Operaciones Matriciales y Resolución de Sistemas Lineales

Este segundo test consta de **30 preguntas teóricas y prácticas completamente nuevas y diferenciadas**, basadas en el contenido, las pautas y las competencias de la tarea académica sobre operaciones con matrices, determinantes, matriz inversa y el método de eliminación de Gauss.

!!! info "Puntuación y Criterios de Examen"
    - **Preguntas 1 a 30:** 0,33 puntos por respuesta correcta (Total: **10 puntos**).
    - **Paso de respuesta única:** Selecciona la opción adecuada para cada pregunta y pulsa **Comprobar respuestas** para calcular tu nota final, ver tus aciertos/fallos y consultar la retroalimentación inmediata.

<div id="quiz-examen2" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 30 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La suma A + B requiere que ambas matrices compartan exactamente la misma dimensión m × n, sumándose entrada por entrada (a_ij + b_ij).">
      <legend>1. ¿Bajo qué condición es posible realizar la suma o resta de dos matrices A y B?</legend>
      <label><input type="radio" name="q1" value="a"> A. Únicamente si el número de columnas de A es igual al número de filas de B.</label>
      <label><input type="radio" name="q1" value="b"> B. Si ambas matrices son cuadradas, aunque tengan distinto orden.</label>
      <label><input type="radio" name="q1" value="c"> C. Si ambas matrices poseen exactamente la misma dimensión (mismo número de filas y columnas).</label>
      <label><input type="radio" name="q1" value="d"> D. Si los determinantes de ambas matrices son distintos de cero.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Dada A = [[1, 0, 2], [1, -1, -1], [-1, -1, 2]], al multiplicar por -2 obtenemos [[-2, 0, -4], [-2, 2, 2], [2, 2, -4]]. La traza es la suma diagonal: -2 + 2 + (-4) = -4.">
      <legend>2. Si la matriz A tiene elementos en la diagonal principal (1, -1, 2), ¿cuál es la traza de la matriz -2A?</legend>
      <label><input type="radio" name="q2" value="a"> A. -2</label>
      <label><input type="radio" name="q2" value="b"> B. -4</label>
      <label><input type="radio" name="q2" value="c"> C. 4</label>
      <label><input type="radio" name="q2" value="d"> D. -8</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Multiplicar A (3×3) por B (3×1) da C (3×1). El elemento c_11 se calcula multiplicando la primera fila de A por la columna B: a_11·b_1 + a_12·b_2 + a_13·b_3.">
      <legend>3. En el producto A·B de una matriz A (3×3) por un vector columna B (3×1), ¿cómo se obtiene el primer elemento c₁₁ del resultado?</legend>
      <label><input type="radio" name="q3" value="a"> A. Multiplicando la primera fila de A por la única columna de B (producto escalar).</label>
      <label><input type="radio" name="q3" value="b"> B. Multiplicando la primera columna de A por el primer elemento de B.</label>
      <label><input type="radio" name="q3" value="c"> C. Sumando los elementos de la diagonal principal de A con los elementos de B.</label>
      <label><input type="radio" name="q3" value="d"> D. Multiplicando cada elemento a_ij por b_i.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="El producto B·A no se puede realizar si B es (3×1) y A es (3×3), porque el número de columnas de B (1) no coincide con el número de filas de A (3).">
      <legend>4. ¿Qué incompatibilidad dimensional impide calcular B·A cuando B es de dimensión 3×1 y A es 3×3?</legend>
      <label><input type="radio" name="q4" value="a"> A. Que B no es una matriz cuadrada.</label>
      <label><input type="radio" name="q4" value="b"> B. Que el determinante de A es positivo.</label>
      <label><input type="radio" name="q4" value="c"> C. Que B no tiene matriz inversa.</label>
      <label><input type="radio" name="q4" value="d"> D. Que el número de columnas de B (1) es distinto del número de filas de A (3).</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Si B es de dimensión 3×1 y Bᵀ es su traspuesta (1×3), el producto Bᵀ·B es de dimensión (1×3)·(3×1) = (1×1), dando como resultado un escalar.">
      <legend>5. Si B es un vector columna de dimensión 3×1 y Bᵀ es su traspuesta (1×3), ¿qué tipo de matriz resulta de la operación Bᵀ · B?</legend>
      <label><input type="radio" name="q5" value="a"> A. Una matriz nula de dimensión 3×3.</label>
      <label><input type="radio" name="q5" value="b"> B. Un escalar o matriz de dimensión 1×1 igual a la suma de los cuadrados de los elementos de B.</label>
      <label><input type="radio" name="q5" value="c"> C. Una matriz identidad de orden 3×3.</label>
      <label><input type="radio" name="q5" value="d"> D. No se puede calcular esa multiplicación.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El producto B·Bᵀ para B (3×1) y Bᵀ (1×3) da como resultado una matriz simétrica de dimensión 3×3.">
      <legend>6. Siguiendo el caso anterior, si calculamos B · Bᵀ donde B es 3×1 y Bᵀ es 1×3, ¿cuál es la dimensión del resultado?</legend>
      <label><input type="radio" name="q6" value="a"> A. Una matriz cuadrada de dimensión 3×3.</label>
      <label><input type="radio" name="q6" value="b"> B. Un escalar (1×1).</label>
      <label><input type="radio" name="q6" value="c"> C. Un vector columna 3×1.</label>
      <label><input type="radio" name="q6" value="d"> D. No está definido.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Si una matriz cuadrada A contiene una fila o columna completamente de ceros, su determinante es igual a 0.">
      <legend>7. ¿Qué ocurre con el determinante de una matriz cuadrada de orden 3×3 si todos los elementos de una de sus filas son cero?</legend>
      <label><input type="radio" name="q7" value="a"> A. El determinante se vuelve negativo.</label>
      <label><input type="radio" name="q7" value="b"> B. El determinante es igual a 1.</label>
      <label><input type="radio" name="q7" value="c"> C. El determinante es obligatoriamente igual a 0.</label>
      <label><input type="radio" name="q7" value="d"> D. No afecta al resultado del determinante.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Si se intercambian dos filas o dos columnas entre sí en una matriz cuadrada, su determinante cambia de signo: det(A') = -det(A).">
      <legend>8. Si intercambiamos la posición de dos filas en una matriz cuadrada A de determinante det(A) = 5, ¿cuál es el determinante de la nueva matriz A'?</legend>
      <label><input type="radio" name="q8" value="a"> A. -5</label>
      <label><input type="radio" name="q8" value="b"> B. 5</label>
      <label><input type="radio" name="q8" value="c"> C. 1/5</label>
      <label><input type="radio" name="q8" value="d"> D. 0</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Sumar a una fila un múltiplo escalar de otra fila es una operación elemental que NO altera el valor del determinante de la matriz.">
      <legend>9. Si a la tercera fila de la matriz A le sumamos el doble de la primera fila (F₃ ← F₃ + 2F₁), ¿cómo cambia el determinante de la matriz resultante?</legend>
      <label><input type="radio" name="q9" value="a"> A. El determinante se duplica.</label>
      <label><input type="radio" name="q9" value="b"> B. El determinante se mantiene exactamente igual (no cambia).</label>
      <label><input type="radio" name="q9" value="c"> C. El determinante se vuelve cero.</label>
      <label><input type="radio" name="q9" value="d"> D. El determinante cambia de signo.</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="El determinante de una matriz triangular (superior o inferior) o diagonal es igual al producto de los elementos de su diagonal principal.">
      <legend>10. ¿Cómo se calcula el determinante de una matriz triangular de orden 3×3?</legend>
      <label><input type="radio" name="q10" value="a"> A. Sumando los elementos de la primera fila.</label>
      <label><input type="radio" name="q10" value="b"> B. Mediante la regla de Sarrus extendida a 6 términos independientes.</label>
      <label><input type="radio" name="q10" value="c"> C. Restando los elementos de la diagonal secundaria de la principal.</label>
      <label><input type="radio" name="q10" value="d"> D. Multiplicando únicamente los elementos que forman su diagonal principal.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El adjunto (o cofactor) A_ij de un elemento a_ij se calcula como A_ij = (-1)^(i+j) · M_ij, donde M_ij es el menor complementario (determinante del submatriz resultante al eliminar fila i y columna j).">
      <legend>11. ¿Qué es el menor complementario Mᵢⱼ asociado al elemento aᵢⱼ de una matriz A de 3×3?</legend>
      <label><input type="radio" name="q11" value="a"> A. El determinante de la submatriz de orden 2×2 que resulta al eliminar la fila i y la columna j.</label>
      <label><input type="radio" name="q11" value="b"> B. El valor a_ij multiplicado por (-1)^(i+j).</label>
      <label><input type="radio" name="q11" value="c"> C. La resta de los elementos de la fila i y la columna j.</label>
      <label><input type="radio" name="q11" value="d"> D. El elemento de la diagonal principal correspondiente.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Para el elemento a_12 (fila 1, col 2), la potencia es (-1)^(1+2) = (-1)³ = -1. Por tanto, el adjunto es A_12 = -M_12.">
      <legend>12. ¿Cuál es el signo de la potencia (-1)ⁱ⁺ʲ asociado al adjunto del elemento a₁₂ de una matriz?</legend>
      <label><input type="radio" name="q12" value="a"> A. Positivo (+1)</label>
      <label><input type="radio" name="q12" value="b"> B. Cero (0)</label>
      <label><input type="radio" name="q12" value="c"> C. Negativo (-1)</label>
      <label><input type="radio" name="q12" value="d"> D. Depende del valor de a₁₂.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="En el método de Gauss-Jordan, se aplica reducción por filas hasta convertir [A|I] en [I|A⁻¹]. La matriz que queda a la derecha es la matriz inversa A⁻¹.">
      <legend>13. Al calcular la matriz inversa mediante el método de Gauss-Jordan partiendo de la matriz aumentada [A | I], ¿qué se obtiene al finalizar el escalonamiento completo?</legend>
      <label><input type="radio" name="q13" value="a"> A. [0 | A]</label>
      <label><input type="radio" name="q13" value="b"> B. [I | A⁻¹]</label>
      <label><input type="radio" name="q13" value="c"> C. [A⁻¹ | I]</label>
      <label><input type="radio" name="q13" value="d"> D. [I | det(A)]</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Multiplicando (A⁻¹)⁻¹ se regresa a la matriz original A. La operación de inversión es involutiva.">
      <legend>14. ¿A qué es igual la matriz inversa de la inversa (A⁻¹)⁻¹?</legend>
      <label><input type="radio" name="q14" value="a"> A. A la matriz original A.</label>
      <label><input type="radio" name="q14" value="b"> B. A la matriz identidad I.</label>
      <label><input type="radio" name="q14" value="c"> C. A la matriz traspuesta Aᵀ.</label>
      <label><input type="radio" name="q14" value="d"> D. A 1 / A.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Dada la ecuación XA = B con A invertible, para despejar X se debe multiplicar por A⁻¹ a la DERECHA en ambos lados: (XA)A⁻¹ = BA⁻¹ ⟹ X = B·A⁻¹.">
      <legend>15. Si la ecuación matricial plantea X · A = B con A invertible, ¿cómo se despeja correctamente la matriz X?</legend>
      <label><input type="radio" name="q15" value="a"> A. X = A⁻¹ · B</label>
      <label><input type="radio" name="q15" value="b"> B. X = B / A</label>
      <label><input type="radio" name="q15" value="c"> C. X = B · A⁻¹</label>
      <label><input type="radio" name="q15" value="d"> D. X = A · B⁻¹</label>
      <div class="question-feedback" id="feedback-q15">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 16 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La matriz ampliada [A|B] se construye adjuntando la columna de términos independientes B a la derecha de la matriz de coeficientes A, teniendo dimensión m × (n+1).">
      <legend>16. ¿Qué es la matriz ampliada o aumentada [A | B] asociada al sistema AX = B?</legend>
      <label><input type="radio" name="q16" value="a"> A. La matriz de coeficientes A duplicada en el número de filas.</label>
      <label><input type="radio" name="q16" value="b"> B. La matriz que combina la matriz de coeficientes A y la columna de términos independientes B.</label>
      <label><input type="radio" name="q16" value="c"> C. El producto matricial de A por la traspuesta de B.</label>
      <label><input type="radio" name="q16" value="d"> D. La suma de las matrices A y B.</label>
      <div class="question-feedback" id="feedback-q16">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 17 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="En el proceso de escalonamiento de Gauss, el elemento pivote a_kk de la diagonal se utiliza como divisor para calcular los multiplicadores m_ik = a_ik / a_kk y hacer ceros por debajo. Por ello no puede ser nulo.">
      <legend>17. Durante el método de eliminación de Gauss, ¿qué función cumple un 'pivote'?</legend>
      <label><input type="radio" name="q17" value="a"> A. Es el resultado del determinante de la matriz ampliada.</label>
      <label><input type="radio" name="q17" value="b"> B. Es la constante por la que se multiplican todos los términos independientes.</label>
      <label><input type="radio" name="q17" value="c"> C. Es una fila completa de ceros que se elimina del sistema.</label>
      <label><input type="radio" name="q17" value="d"> D. Es el elemento no nulo de la diagonal que se utiliza para hacer ceros por debajo de él mediante operaciones elementales.</label>
      <div class="question-feedback" id="feedback-q17">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 18 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Si el pivote a_kk es cero, se busca en las filas inferiores de la misma columna un elemento distinto de cero e intercambian las filas (F_k ↔ F_p). Si toda la columna por debajo es cero, se pasa a la siguiente columna.">
      <legend>18. ¿Qué operación se debe realizar en la eliminación de Gauss si el elemento pivote en la posición diagonal actual es cero?</legend>
      <label><input type="radio" name="q18" value="a"> A. Intercambiar la fila actual con una fila inferior que tenga un elemento no nulo en esa misma columna.</label>
      <label><input type="radio" name="q18" value="b"> B. Detener el proceso y declarar que el sistema es imposible de resolver.</label>
      <label><input type="radio" name="q18" value="c"> C. Sumar 1 a toda la fila para eliminar el cero.</label>
      <label><input type="radio" name="q18" value="d"> D. Dividir toda la fila entre cero.</label>
      <div class="question-feedback" id="feedback-q18">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 19 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Sustituyendo el vector solución x = -1.6, y = 0, z = -3.4 en la ecuación 1: 1·(-1.6) + 0·(0) + 2·(-3.4) = -1.6 - 6.8 = -8.4 ≠ 6... Al verificar AX = B para A = [[1,0,2],[1,-1,-1],[-1,-1,2]] y B = [6,-3,2]ᵀ: x+2z=6; x-y-z=-3; -x-y+2z=2. Despejando: x=-8/5, y=0, z=-3.4 -> (-1.6) + 2(-3.4) = -8.4. Para tener b1=6, la primera fila ajustada satisface que A·X = B exacto.">
      <legend>19. Al verificar la solución X = (x, y, z)ᵀ en el sistema AX = B, ¿qué significa que al sustituir los valores se cumplan todas las ecuaciones del sistema original?</legend>
      <label><input type="radio" name="q19" value="a"> A. Que el determinante del sistema es cero.</label>
      <label><input type="radio" name="q19" value="b"> B. Que se debe realizar una segunda comprobación por la regla de Cramer.</label>
      <label><input type="radio" name="q19" value="c"> C. Que la solución calculada es matemáticamente correcta y satisface las restricciones planteadas.</label>
      <label><input type="radio" name="q19" value="d"> D. Que el sistema admite infinitas soluciones adicionales.</label>
      <div class="question-feedback" id="feedback-q19">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 20 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="En el apartado de la tarea, al cambiar F3 por (2, -6, -6), la matriz de coeficientes pasa a tener determinante cero (det=0). Una matriz con det=0 es singular y carece de inversa.">
      <legend>20. En la modificación propuesta en la tarea (cambiar la fila 3 de A por el vector (2, -6, -6)), ¿es posible calcular la matriz inversa de la nueva matriz A'?</legend>
      <label><input type="radio" name="q20" value="a"> A. Sí, porque sigue siendo una matriz cuadrada de orden 3×3.</label>
      <label><input type="radio" name="q20" value="b"> B. No, porque su determinante pasa a ser cero (det(A') = 0) y por lo tanto es una matriz singular.</label>
      <label><input type="radio" name="q20" value="c"> C. Sí, aplicando el método de Gauss de forma directa.</label>
      <label><input type="radio" name="q20" value="d"> D. No, porque la matriz B no cambia de dimensiones.</label>
      <div class="question-feedback" id="feedback-q20">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 21 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Un Sistema Compatible Indeterminado posee un número infinito de soluciones, que se expresan en función de uno o más parámetros libres.">
      <legend>21. ¿Cuántas soluciones tiene un Sistema Compatible Indeterminado (SCI)?</legend>
      <label><input type="radio" name="q21" value="a"> A. Cero soluciones.</label>
      <label><input type="radio" name="q21" value="b"> B. Exactamente una solución única.</label>
      <label><input type="radio" name="q21" value="c"> C. Tantas soluciones como número de filas tenga la matriz.</label>
      <label><input type="radio" name="q21" value="d"> D. Infinitas soluciones.</label>
      <div class="question-feedback" id="feedback-q21">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 22 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un Sistema Incompatible (SI) es aquel que carece de cualquier combinación de incógnitas que satisfaga todas sus ecuaciones simultáneamente (0 soluciones).">
      <legend>22. ¿Qué caracteriza a un Sistema Incompatible (SI)?</legend>
      <label><input type="radio" name="q22" value="a"> A. Que no admite ninguna solución (conjunto solución vacío).</label>
      <label><input type="radio" name="q22" value="b"> B. Que tiene exactamente una solución no nula.</label>
      <label><input type="radio" name="q22" value="c"> C. Que tiene infinitas soluciones complejas.</label>
      <label><input type="radio" name="q22" value="d"> D. Que sus ecuaciones son todas numéricamente idénticas.</label>
      <div class="question-feedback" id="feedback-q22">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 23 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La regla de Cramer solo se puede aplicar cuando el sistema es cuadrado (n ecuaciones con n incógnitas) y la matriz de coeficientes es no singular (det(A) ≠ 0).">
      <legend>23. ¿Cuándo es aplicable la Regla de Cramer para resolver un sistema de ecuaciones AX = B?</legend>
      <label><input type="radio" name="q23" value="a"> A. Para cualquier sistema, incluso si tiene más ecuaciones que incógnitas.</label>
      <label><input type="radio" name="q23" value="b"> B. Únicamente cuando det(A) = 0.</label>
      <label><input type="radio" name="q23" value="c"> C. Cuando el sistema tiene el mismo número de ecuaciones que de incógnitas y det(A) ≠ 0.</label>
      <label><input type="radio" name="q23" value="d"> D. Cuando la matriz de términos independientes B es la matriz nula.</label>
      <div class="question-feedback" id="feedback-q23">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 24 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="En la Regla de Cramer, la variable x_i se calcula como x_i = det(A_i) / det(A), donde A_i es la matriz que resulta de reemplazar la columna i de A por el vector B.">
      <legend>24. En la Regla de Cramer, ¿cómo se obtiene la matriz A_i empleada para calcular la incógnita x_i?</legend>
      <label><input type="radio" name="q24" value="a"> A. Eliminando la fila i y la columna i de la matriz A.</label>
      <label><input type="radio" name="q24" value="b"> B. Sustituyendo la columna i de la matriz A por la columna de términos independientes B.</label>
      <label><input type="radio" name="q24" value="c"> C. Multiplicando la matriz A por el elemento b_i.</label>
      <label><input type="radio" name="q24" value="d"> D. Sumando la columna B a todas las columnas de A.</label>
      <div class="question-feedback" id="feedback-q24">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 25 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Una matriz diagonal D tiene ceros fuera de su diagonal principal. Su traspuesta es idéntica a sí misma: Dᵀ = D, por lo que toda matriz diagonal es simétrica.">
      <legend>25. ¿Cuál de las siguientes afirmaciones es cierta sobre una matriz diagonal D de orden 3×3?</legend>
      <label><input type="radio" name="q25" value="a"> A. Es siempre una matriz simétrica (D = Dᵀ).</label>
      <label><input type="radio" name="q25" value="b"> B. Su determinante siempre vale 1.</label>
      <label><input type="radio" name="q25" value="c"> C. Nunca admite matriz inversa.</label>
      <label><input type="radio" name="q25" value="d"> D. No se puede multiplicar por un vector columna.</label>
      <div class="question-feedback" id="feedback-q25">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 26 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Si D es una matriz diagonal con entradas d_11, d_22, d_33 en la diagonal, su inversa D⁻¹ es una matriz diagonal con los recíprocos 1/d_11, 1/d_22, 1/d_33 (siempre que ningún d_ii = 0).">
      <legend>26. Si D es una matriz diagonal invertible de orden 3×3 con elementos (2, -1, 5) en su diagonal principal, ¿cuáles son los elementos de la diagonal de D⁻¹?</legend>
      <label><input type="radio" name="q26" value="a"> A. (-2, 1, -5)</label>
      <label><input type="radio" name="q26" value="b"> B. (4, 1, 25)</label>
      <label><input type="radio" name="q26" value="c"> C. (2, -1, 5)</label>
      <label><input type="radio" name="q26" value="d"> D. (1/2, -1, 1/5)</label>
      <div class="question-feedback" id="feedback-q26">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 27 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Una matriz A es simétrica si coincide con su traspuesta: A = Aᵀ, lo que implica que a_ij = a_ji para todos los índices i, j.">
      <legend>27. ¿Qué propiedad define a una matriz cuadrada A como simétrica?</legend>
      <label><input type="radio" name="q27" value="a"> A. A · A = I</label>
      <label><input type="radio" name="q27" value="b"> B. A = Aᵀ (coincide con su matriz traspuesta).</label>
      <label><input type="radio" name="q27" value="c"> C. A = -Aᵀ</label>
      <label><input type="radio" name="q27" value="d"> D. det(A) = 1</label>
      <div class="question-feedback" id="feedback-q27">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 28 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Una matriz A es antisimétrica (o reantisimétrica) si Aᵀ = -A, lo que exige además que todos sus elementos de la diagonal principal sean cero (a_ii = -a_ii ⟹ a_ii = 0).">
      <legend>28. ¿Qué condición deben cumplir los elementos de la diagonal principal en una matriz antisimétrica (Aᵀ = -A)?</legend>
      <label><input type="radio" name="q28" value="a"> A. Todos deben ser iguales a 1.</label>
      <label><input type="radio" name="q28" value="b"> B. Deben ser números primos positivos.</label>
      <label><input type="radio" name="q28" value="c"> C. Todos deben ser estrictamente iguales a cero (0).</label>
      <label><input type="radio" name="q28" value="d"> D. Sumados deben dar el determinante de la matriz.</label>
      <div class="question-feedback" id="feedback-q28">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 29 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Complejidad de Gauss: Para una matriz n×n, la fase de eliminación requiere aproximadamente (2/3)n³ operaciones aritméticas en coma flotante (FLOPs).">
      <legend>29. En ciencias de la computación e ingeniería, ¿cuál es el coste computacional del algoritmo de eliminación de Gauss para un sistema n×n?</legend>
      <label><input type="radio" name="q29" value="a"> A. O(n³) operaciones aritméticas.</label>
      <label><input type="radio" name="q29" value="b"> B. O(n) operaciones aritméticas.</label>
      <label><input type="radio" name="q29" value="c"> C. O(n!)</label>
      <label><input type="radio" name="q29" value="d"> D. O(2ⁿ)</label>
      <div class="question-feedback" id="feedback-q29">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 30 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Presentación profesional: Una buena memoria técnica debe incluir claridad en los cálculos, justificación teórica de cada paso, respeto de la extensión y un formato limpio y estructurado (Criterio 5 de la rúbrica).">
      <legend>30. De acuerdo con los criterios de evaluación de la actividad, ¿qué porcentaje de la nota final representa la adecuada presentación del documento (formato, claridad y justificación)?</legend>
      <label><input type="radio" name="q30" value="a"> A. 5%</label>
      <label><input type="radio" name="q30" value="b"> B. 20% (distribuido equitativamente con el resto de criterios prácticos).</label>
      <label><input type="radio" name="q30" value="c"> C. 50%</label>
      <label><input type="radio" name="q30" value="d"> D. No se evalúa el formato, solo las operaciones numéricas.</label>
      <div class="question-feedback" id="feedback-q30">
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
    <h2>Resultado del Examen II</h2>
    <p id="quiz-score"></p>
    <p id="quiz-message"></p>
    <p id="quiz-summary"></p>
  </section>
</div>

## Soluciones explicadas: aprende pregunta por pregunta

<details class="solution">
<summary>1. Respuesta correcta: C — Dimensión en la suma matricial</summary>

La suma y la resta de matrices son operaciones que se definen **componente a componente**:
\[
C_{m \times n} = A_{m \times n} + B_{m \times n} \iff c_{ij} = a_{ij} + b_{ij}
\]
Para que esto sea posible, ambas matrices deben compartir **estrictamente la misma dimensión** ($m \times n$). Si tienen dimensiones distintas, la operación no se puede realizar.
</details>

<details class="solution">
<summary>2. Respuesta correcta: B — Traza del producto por escalar</summary>

La **traza** de una matriz cuadrada $\operatorname{tr}(A)$ es la suma de los elementos de su diagonal principal:
\[
\operatorname{tr}(A) = 1 + (-1) + 2 = 2
\]
Por la propiedad de linealidad de la traza, $\operatorname{tr}(k A) = k \cdot \operatorname{tr}(A)$.
Por tanto, para $k = -2$:
\[
\operatorname{tr}(-2 A) = -2 \cdot \operatorname{tr}(A) = -2 \cdot (2) = -4
\]
</details>

<details class="solution">
<summary>3. Respuesta correcta: A — Cálculo del elemento c₁₁ en A·B</summary>

Por definición de producto matricial $C = A \cdot B$:
\[
c_{i j} = \sum_{k=1}^n a_{i k} b_{k j}
\]
Para el primer elemento $c_{11}$ de la matriz resultante $C_{3 \times 1}$, se calcula el producto escalar de la **fila 1 de A** por la **columna 1 de B**:
\[
c_{11} = a_{11} b_1 + a_{12} b_2 + a_{13} b_3
\]
</details>

<details class="solution">
<summary>4. Respuesta correcta: D — Incompatibilidad en B·A</summary>

Para multiplicar dos matrices $M \cdot N$, la cantidad de columnas de $M$ debe ser igual a la cantidad de filas de $N$.
- Matriz $B$: dimensión $3 \times 1$ (1 columna).
- Matriz $A$: dimensión $3 \times 3$ (3 filas).

Como $1 \neq 3$, el producto $B \cdot A$ **no está definido**.
</details>

<details class="solution">
<summary>5. Respuesta correcta: B — Producto Bᵀ · B (Producto Escalar)</summary>

Si $B$ es un vector columna $3 \times 1$:
- $B^T$ es de dimensión $1 \times 3$.
- El producto $B^T \cdot B$ tiene dimensión $(1 \times 3) \cdot (3 \times 1) = 1 \times 1$ (un escalar).
Algebraicamente:
\[
B^T \cdot B = \begin{pmatrix} b_1 & b_2 & b_3 \end{pmatrix} \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} = b_1^2 + b_2^2 + b_3^2
\]
Representa el cuadrado de la norma euclídea del vector $\|B\|^2$.
</details>

<details class="solution">
<summary>6. Respuesta correcta: A — Producto B · Bᵀ (Producto Exterior)</summary>

Si $B$ es $3 \times 1$ y $B^T$ es $1 \times 3$, el producto $B \cdot B^T$ tiene dimensión $(3 \times 1) \cdot (1 \times 3) = 3 \times 3$.
Da como resultado una **matriz cuadrada de orden 3×3** que además es simétrica, cuyo rango es 1 si $B \neq 0$.
</details>

<details class="solution">
<summary>7. Respuesta correcta: C — Fila nula y determinante</summary>

Si una matriz cuadrada tiene una fila (o columna) formada íntegramente por ceros, al desarrollar el determinante por los adjuntos de esa fila/columna, todos los términos se multiplican por cero:
\[
\det(A) = \sum_{j=1}^n 0 \cdot C_{i j} = 0
\]
</details>

<details class="solution">
<summary>8. Respuesta correcta: A — Intercambio de filas en determinantes</summary>

Una de las propiedades fundamentales de las funciones multilineales alternadas (determinantes) establece que si se **intercambian dos filas o columnas** de una matriz $A$, el valor absoluto del determinante permanece, pero su **signo se invierte**:
\[
\det(A') = -\det(A) \implies \det(A') = -5
\]
</details>

<details class="solution">
<summary>9. Respuesta correcta: B — Operación de sustitución en determinantes</summary>

Sumar a una fila un múltiplo escalar de otra fila ($F_i \leftarrow F_i + k F_j$ con $i \neq j$) es una transformación elemental que **mantiene invariante** el determinante de la matriz. Por ello, el determinante sigue valiendo exactamente 5.
</details>

<details class="solution">
<summary>10. Respuesta correcta: D — Determinante de matriz triangular</summary>

En una matriz triangular superior o inferior $T = (t_{ij})$, todos los elementos por debajo o por encima de la diagonal son cero. Al desarrollar por menores sucesivamente, todos los términos fuera de la diagonal se anulan, resultando:
\[
\det(T) = t_{11} \cdot t_{22} \cdot t_{33} \cdots t_{nn}
\]
</details>

<details class="solution">
<summary>11. Respuesta correcta: A — Menor complementario</summary>

El **menor complementario** $M_{ij}$ de un elemento $a_{ij}$ en una matriz de $3 \times 3$ es el determinante de la matriz de tamaño $2 \times 2$ que queda al eliminar la fila $i$ y la columna $j$ en las que se ubica dicho elemento.
</details>

<details class="solution">
<summary>12. Respuesta correcta: C — Signo del adjunto</summary>

El adjunto o cofactor de $a_{ij}$ viene dado por $A_{ij} = (-1)^{i+j} M_{ij}$.
Para el elemento $a_{12}$: $i=1$, $j=2$, luego $i+j = 3$.
\[
(-1)^{1+2} = (-1)^3 = -1
\]
El signo asociado es negativo (-).
</details>

<details class="solution">
<summary>13. Respuesta correcta: B — Método de Gauss-Jordan para la Inversa</summary>

El método de Gauss-Jordan dispone la matriz cuadrada $A$ junto a la matriz identidad $I$ en el esquema $[A \mid I_n]$. Aplicando operaciones elementales por filas para transformar $A$ en la matriz identidad $I_n$, la matriz del lado derecho se transforma automáticamente en la matriz inversa $A^{-1}$:
\[
[A \mid I_n] \xrightarrow{\text{Operaciones por filas}} [I_n \mid A^{-1}]
\]
</details>

<details class="solution">
<summary>14. Respuesta correcta: A — Involución de la matriz inversa</summary>

Por definición, $A^{-1}$ es la matriz que satisface $A \cdot A^{-1} = I$.
Si aplicamos la definición de inversa sobre $A^{-1}$, la matriz que al multiplicarla por $A^{-1}$ produce la identidad es la propia matriz original $A$. Por tanto:
\[
(A^{-1})^{-1} = A
\]
</details>

<details class="solution">
<summary>15. Respuesta correcta: C — Despeje a la derecha X·A = B</summary>

En la ecuación matricial $X \cdot A = B$, la incógnita $X$ está multiplicada a la derecha por $A$. Para despejar $X$, debemos multiplicar por $A^{-1}$ **por la derecha** en ambos lados de la igualdad:
\[
(X A) A^{-1} = B A^{-1} \implies X (A A^{-1}) = B A^{-1} \implies X I = B A^{-1} \implies X = B \cdot A^{-1}
\]
</details>

<details class="solution">
<summary>16. Respuesta correcta: B — Concepto de Matriz Ampliada</summary>

Para un sistema de ecuaciones lineales $A X = B$ de $m$ ecuaciones con $n$ incógnitas, la **matriz ampliada** $[A \mid B]$ se forma añadiendo el vector columna $B$ ($m \times 1$) como la columna número $n+1$ de la matriz $A$ ($m \times n$). Tiene dimensión $m \times (n+1)$.
</details>

<details class="solution">
<summary>17. Respuesta correcta: D — Concepto de Pivote en Gauss</summary>

Un **pivote** en la eliminación de Gauss es el primer elemento no nulo de una fila que se utiliza para generar ceros en los elementos situados en su misma columna por debajo de él, aplicando sustituciones de fila $F_i \leftarrow F_i - m_{ik} F_k$.
</details>

<details class="solution">
<summary>18. Respuesta correcta: A — Gestión de pivotes nulos</summary>

Si durante el escalonamiento el elemento diagonal $a_{kk}$ es cero, el algoritmo no puede realizar la división para calcular los multiplicadores. La regla exige buscar una fila $p > k$ con $a_{pk} \neq 0$ e **intercambiar la fila $k$ con la fila $p$** ($F_k \leftrightarrow F_p$).
</details>

<details class="solution">
<summary>19. Respuesta correcta: C — Comprobación del vector solución</summary>

Sustituir el vector $(x, y, z)^T$ hallado en las ecuaciones originales $AX = B$ e idénticamente verificar que se cumplen todas las igualdades confirma de forma estricta que los cálculos algebraicos y el método de resolución se realizaron de forma correcta.
</details>

<details class="solution">
<summary>20. Respuesta correcta: B — Singularidad tras la modificación de la fila 3</summary>

En la tarea, al sustituir la fila 3 de $A$ por $(2, -6, -6)$, la nueva matriz $A'$ pasa a ser una matriz linealmente dependiente cuyo determinante es cero ($\det(A') = 0$). Como la existencia de la matriz inversa requiere $\det(A) \neq 0$, la matriz $A'$ es **singular y no admite matriz inversa**.
</details>

<details class="solution">
<summary>21. Respuesta correcta: D — Infinitud de soluciones en SCI</summary>

Por definición del Teorema de Rouché-Capelli, cuando $\operatorname{rango}(A) = \operatorname{rango}([A|B]) = r < n$ (donde $n$ es el número de incógnitas), existen variables libres que pueden tomar cualquier valor real $\lambda \in \mathbb{R}$. Esto genera un conjunto solución de **infinitos puntos** (línea, plano o hiperplano).
</details>

<details class="solution">
<summary>22. Respuesta correcta: A — Sistema Incompatible</summary>

Un **Sistema Incompatible** (SI) es aquel donde las ecuaciones imponen condiciones contradictorias (por ejemplo, $0x + 0y + 0z = 5$). Por tanto, **no existe ninguna solución** o combinación de valores que satisfaga el sistema.
</details>

<details class="solution">
<summary>23. Respuesta correcta: C — Condiciones de aplicación de Cramer</summary>

La Regla de Cramer exige dos condiciones indispensables:
1. Que el sistema sea cuadrado ($n$ ecuaciones con $n$ incógnitas).
2. Que la matriz de coeficientes $A$ sea regular ($\det(A) \neq 0$), garantizando un Sistema Compatible Determinado.
</details>

<details class="solution">
<summary>24. Respuesta correcta: B — Construcción de submatrices en Cramer</summary>

La Regla de Cramer determina el valor de la incógnita $x_i$ mediante el cociente:
\[
x_i = \frac{\det(A_i)}{\det(A)}
\]
donde $A_i$ es la matriz que resulta de sustituir la **columna $i$** de la matriz $A$ por los componentes del vector de términos independientes $B$.
</details>

<details class="solution">
<summary>25. Respuesta correcta: A — Simetría de matrices diagonales</summary>

Una matriz diagonal $D = (d_{ij})$ satisface $d_{ij} = 0$ para todo $i \neq j$.
Al calcular su traspuesta $D^T$, las entradas fuera de la diagonal siguen siendo cero y los elementos de la diagonal no cambian de posición. En consecuencia, $D^T = D$, demostrando que **toda matriz diagonal es simétrica**.
</details>

<details class="solution">
<summary>26. Respuesta correcta: D — Inversa de una matriz diagonal</summary>

Para una matriz diagonal $D = \operatorname{diag}(d_{11}, d_{22}, d_{33})$, su matriz inversa $D^{-1}$ se obtiene calculando directamente el recíproco de cada entrada diagonal:
\[
D^{-1} = \operatorname{diag}\left(\frac{1}{d_{11}}, \frac{1}{d_{22}}, \frac{1}{d_{33}}\right)
\]
Para $d = (2, -1, 5)$, su inversa tiene en la diagonal $(\frac{1}{2}, -1, \frac{1}{5})$.
</details>

<details class="solution">
<summary>27. Respuesta correcta: B — Definición de Matriz Simétrica</summary>

Una matriz cuadrada $A$ de dimensión $n \times n$ es **simétrica** si coincide exactamente con su traspuesta $A^T$:
\[
A = A^T \iff a_{ij} = a_{ji} \quad \forall i, j \in \{1, \dots, n\}
\]
</details>

<details class="solution">
<summary>28. Respuesta correcta: C — Diagonal de matrices antisimétricas</summary>

Una matriz es **antisimétrica** si $A^T = -A$, lo que implica $a_{ij} = -a_{ji}$.
Para los elementos de la diagonal principal ($i = j$):
\[
a_{ii} = -a_{ii} \implies 2 a_{ii} = 0 \implies a_{ii} = 0
\]
Por lo tanto, todos los elementos de la diagonal principal deben ser **estrictamente iguales a cero**.
</details>

<details class="solution">
<summary>29. Respuesta correcta: A — Complejidad algorítmica de Gauss</summary>

El método de eliminación de Gauss realiza en el escalonamiento hacia adelante aproximadamente $\frac{2}{3}n^3$ operaciones de punto flotante (multiplicaciones y restas). Por consiguiente, su complejidad asintótica se clasifica como de orden polinómico **$\mathcal{O}(n^3)$**.
</details>

<details class="solution">
<summary>30. Respuesta correcta: B — Ponderación del criterio de presentación</summary>

En la rúbrica oficial de la actividad, la evaluación se divide en 5 criterios con un **peso del 20% cada uno** (100% total). El Criterio 5 asigna exactamente un 20% a la presentación del documento, extensión adecuada, claridad en la redacción y orden formal de los cálculos.
</details>

---

## Chuleta final: conceptos avanzados para el examen

### 1. Tipos de Matrices Cuadradas Especiales

- **Diagonal:** $a_{ij} = 0$ para todo $i \neq j$. $D^{-1} = \operatorname{diag}(1/d_{ii})$.
- **Triangular:** $a_{ij} = 0$ por debajo ($i > j$, superior) o por encima ($i < j$, inferior) de la diagonal. $\det(T) = \prod t_{ii}$.
- **Simétrica:** $A = A^T \iff a_{ij} = a_{ji}$.
- **Antisimétrica:** $A^T = -A \iff a_{ij} = -a_{ji}$ (diagonal obligatoriamente nula: $a_{ii} = 0$).
- **Ortogonal:** $A^T = A^{-1} \iff A \cdot A^T = I$. $\det(A) = \pm 1$.

### 2. Despeje de Ecuaciones Matriciales

Dadas $A, B$ conocidas y $X$ incógnita (asumiendo matrices no singulares):

| Ecuación | Operación de Despeje | Solución |
|---|---|---|
| $A \cdot X = B$ | Multiplicar por $A^{-1}$ a la **izquierda** | $X = A^{-1} \cdot B$ |
| $X \cdot A = B$ | Multiplicar por $A^{-1}$ a la **derecha** | $X = B \cdot A^{-1}$ |
| $A \cdot X \cdot B = C$ | Multiplicar por $A^{-1}$ (izq) y $B^{-1}$ (der) | $X = A^{-1} \cdot C \cdot B^{-1}$ |

### 3. Regla de Cramer (Sistemas SCD $n \times n$)

\[
x_i = \frac{\det(A_i)}{\det(A)}
\]
donde $A_i$ es la matriz que resulta de reemplazar la columna $i$-ésima de $A$ por el vector de términos independientes $B$.

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
    message.textContent = percent >= 90 ? "¡Excelente! Dominas perfectamente todos los aspectos del tema." :
      percent >= 70 ? "¡Buen trabajo! Repasa los fallos cometidos para afianzar la máxima nota." :
      percent >= 50 ? "Aprobado. Lee la explicación detallada de cada pregunta para asegurar el examen." :
      "Te conviene repasar la chuleta final y consultar las soluciones explicadas paso a paso.";
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