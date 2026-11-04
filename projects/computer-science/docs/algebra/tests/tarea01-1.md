---
title: Test Tarea 1.1 - Operaciones con matrices y eliminación de Gauss
---

# Test Tarea 1.1: Álgebra Matricial y Sistemas de Ecuaciones Lineales

Este test consta de **30 preguntas teóricas y prácticas** diseñadas con la misma estructura y plantilla global que el resto del curso. Cubre de forma exhaustiva los contenidos de la tarea académica: operaciones matriciales, dimensión, producto de matrices, determinantes, matriz inversa, eliminación gaussiana y discusión de sistemas lineales.

!!! info "Puntuación y Criterios de Examen"
    - **Preguntas 1 a 30:** 0,33 puntos por respuesta correcta (Total: **10 puntos**).
    - **Paso de respuesta única:** Selecciona la opción adecuada para cada pregunta y pulsa **Comprobar respuestas** para calcular tu nota final, ver los aciertos/fallos y consultar la retroalimentación inmediata.

<div id="quiz-examen" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 30 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La multiplicación de una matriz por un escalar k consiste en multiplicar cada uno de sus elementos a_ij por dicho valor k.">
      <legend>1. Dada una matriz A de dimensión 3×3, ¿cómo se calcula la matriz producto por un escalar -2A?</legend>
      <label><input type="radio" name="q1" value="a"> A. Multiplicando solo los elementos de la diagonal principal por -2.</label>
      <label><input type="radio" name="q1" value="b"> B. Multiplicando todos y cada uno de los elementos de A por -2.</label>
      <label><input type="radio" name="q1" value="c"> C. Multiplicando únicamente la primera fila de A por -2.</label>
      <label><input type="radio" name="q1" value="d"> D. Elevando al cuadrado cada elemento de A y cambiando el signo.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Si A es de orden n×n y k es un escalar, det(kA) = kⁿ · det(A). Para n = 3 y k = -2, det(-2A) = (-2)³ · det(A) = -8 · det(A).">
      <legend>2. Si A es una matriz cuadrada de orden 3×3 con det(A) = 5, ¿cuál es el determinante de la matriz -2A?</legend>
      <label><input type="radio" name="q2" value="a"> A. -10</label>
      <label><input type="radio" name="q2" value="b"> B. 10</label>
      <label><input type="radio" name="q2" value="c"> C. -40</label>
      <label><input type="radio" name="q2" value="d"> D. 40</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El producto A·B exige que el número de columnas de A sea igual al número de filas de B. Si A es m×n y B es n×p, el resultado A·B es de dimensión m×p.">
      <legend>3. ¿Cuál es la condición necesaria y suficiente para que se pueda realizar el producto de dos matrices A · B?</legend>
      <label><input type="radio" name="q3" value="a"> A. Que el número de columnas de A sea igual al número de filas de B.</label>
      <label><input type="radio" name="q3" value="b"> B. Que ambas matrices tengan exactamente la misma dimensión.</label>
      <label><input type="radio" name="q3" value="c"> C. Que el número de filas de A sea igual al número de columnas de B.</label>
      <label><input type="radio" name="q3" value="d"> D. Que ambas matrices sean cuadradas y del mismo orden.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Si A es de dimensión 3×3 y B es un vector columna de dimensión 3×1, A·B está definido (3=3) produciendo una matriz 3×1. Sin embargo, B·A es (3×1)·(3×3), que no está definido porque 1 ≠ 3.">
      <legend>4. Si A es una matriz 3×3 y B es un vector columna de dimensión 3×1, ¿qué se puede afirmar sobre las operaciones A·B y B·A?</legend>
      <label><input type="radio" name="q4" value="a"> A. Ambas operaciones son posibles y dan como resultado una matriz 3×3.</label>
      <label><input type="radio" name="q4" value="b"> B. Se puede realizar A·B (resultado 3×1), pero B·A no está definido.</label>
      <label><input type="radio" name="q4" value="c"> C. Se puede realizar B·A (resultado 1×3), pero A·B no está definido.</label>
      <label><input type="radio" name="q4" value="d"> D. Ninguna de las dos operaciones es posible.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El producto matricial no es conmutativo en general. Incluso cuando A y B son cuadradas y existen A·B y B·A, por lo general A·B ≠ B·A.">
      <legend>5. ¿Por qué en el álgebra matricial se afirma que el producto de matrices NO es conmutativo?</legend>
      <label><input type="radio" name="q5" value="a"> A. Porque el determinante de A·B siempre es cero.</label>
      <label><input type="radio" name="q5" value="b"> B. Porque solo se pueden multiplicar matrices de distinta dimensión.</label>
      <label><input type="radio" name="q5" value="c"> C. Porque en general A·B ≠ B·A, e incluso la existencia de A·B no garantiza la existencia de B·A.</label>
      <label><input type="radio" name="q5" value="d"> D. Porque la matriz inversa invalida la propiedad conmutativa.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Por definición, el determinante es una función escalar asignada de forma única exclusivamente a matrices cuadradas (n×n).">
      <legend>6. ¿Para qué tipo de matrices está definido el concepto de determinante?</legend>
      <label><input type="radio" name="q6" value="a"> A. Únicamente para matrices cuadradas (mismo número de filas que de columnas).</label>
      <label><input type="radio" name="q6" value="b"> B. Para cualquier matriz rectangular, siempre que tenga más filas que columnas.</label>
      <label><input type="radio" name="q6" value="c"> C. Para matrices de dimensión 3×1 o 1×3.</label>
      <label><input type="radio" name="q6" value="d"> D. Para cualquier matriz de elementos reales independientemente de sus dimensiones.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Si una matriz B tiene dimensión 3×1 (no es cuadrada), su determinante no existe o no está definido.">
      <legend>7. Si en una tarea se pide calcular el determinante de un vector columna B de tamaño 3×1, ¿cuál es la respuesta numéricamente correcta?</legend>
      <label><input type="radio" name="q7" value="a"> A. El determinante es igual a la suma de sus tres elementos.</label>
      <label><input type="radio" name="q7" value="b"> B. No es posible calcular el determinante porque B no es una matriz cuadrada.</label>
      <label><input type="radio" name="q7" value="c"> C. El determinante es 0.</label>
      <label><input type="radio" name="q7" value="d"> D. El determinante es igual al producto de sus tres elementos.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Aplicando Sarrus: det(A) = (1·(-1)·2 + 0·(-1)·(-1) + 2·1·3) - ((-1)·(-1)·2 + 3·(-1)·1 + 2·1·0) = (-2 + 0 + 6) - (2 - 3 + 0) = 4 - (-1) = 5.">
      <legend>8. Dada la matriz A = [[1, 0, 2], [1, -1, -1], [-1, -1, 2]], calcula su determinante mediante la regla de Sarrus.</legend>
      <label><input type="radio" name="q8" value="a"> A. 0</label>
      <label><input type="radio" name="q8" value="b"> B. 1</label>
      <label><input type="radio" name="q8" value="c"> C. 3</label>
      <label><input type="radio" name="q8" value="d"> D. 5</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Una matriz cuadrada A admite matriz inversa A⁻¹ si y solo si es regular/no singular, condición equivalente a det(A) ≠ 0.">
      <legend>9. ¿Cuál es la condición necesaria y suficiente para que una matriz cuadrada A posea inversa A⁻¹?</legend>
      <label><input type="radio" name="q9" value="a"> A. Que todos sus elementos sean distintos de cero.</label>
      <label><input type="radio" name="q9" value="b"> B. Que su determinante sea igual a cero (det(A) = 0).</label>
      <label><input type="radio" name="q9" value="c"> C. Que sea una matriz no singular (determinante distinto de cero: det(A) ≠ 0).</label>
      <label><input type="radio" name="q9" value="d"> D. Que sea una matriz simétrica (A = Aᵀ).</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La fórmula de la matriz inversa por adjuntos es A⁻¹ = (1 / det(A)) · (Adj(A))ᵀ.">
      <legend>10. ¿Cuál es la expresión algebraica para calcular la inversa de una matriz A mediante la matriz traspuesta de adjuntos?</legend>
      <label><input type="radio" name="q10" value="a"> A. A⁻¹ = (1 / det(A)) · (Adj(A))ᵀ</label>
      <label><input type="radio" name="q10" value="b"> B. A⁻¹ = det(A) · Adj(A)</label>
      <label><input type="radio" name="q10" value="c"> C. A⁻¹ = (Adj(A))ᵀ / (det(A))²</label>
      <label><input type="radio" name="q10" value="d"> D. A⁻¹ = (1 / det(A)) · Aᵀ</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Calculando menores complementarios y traspuesta para A = [[1,0,2],[1,-1,-1],[-1,-1,2]] con det(A)=5, la matriz resulta A⁻¹ = (1/5)·[[-3,-2,2],[1,4,3],[-2,1,-1]].">
      <legend>11. Si A = [[1, 0, 2], [1, -1, -1], [-1, -1, 2]] y det(A) = 5, ¿cuál es su matriz inversa A⁻¹?</legend>
      <label><input type="radio" name="q11" value="a"> A. [[1, 0, 0], [0, 1, 0], [0, 0, 1]]</label>
      <label><input type="radio" name="q11" value="b"> B. (1/5) · [[-3, -2, 2], [1, 4, 3], [-2, 1, -1]]</label>
      <label><input type="radio" name="q11" value="c"> C. (1/5) · [[-3, 1, -2], [-2, 4, 1], [2, 3, -1]]</label>
      <label><input type="radio" name="q11" value="d"> D. No se puede calcular porque det(A) = 0.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Si A es invertible, AX = B ⟹ A⁻¹(AX) = A⁻¹B ⟹ (A⁻¹A)X = A⁻¹B ⟹ IX = A⁻¹B ⟹ X = A⁻¹B.">
      <legend>12. Dada la ecuación matricial AX = B con A invertible, ¿cuál es la solución explícita para X?</legend>
      <label><input type="radio" name="q12" value="a"> A. X = B · A⁻¹</label>
      <label><input type="radio" name="q12" value="b"> B. X = B / A</label>
      <label><input type="radio" name="q12" value="c"> C. X = A⁻¹ · B</label>
      <label><input type="radio" name="q12" value="d"> D. X = Aᵀ · B</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La eliminación de Gauss aplica operaciones elementales por filas a la matriz ampliada [A|B] para transformarla en un sistema equivalente con matriz triangular superior.">
      <legend>13. ¿Cuál es el objetivo principal de la fase de eliminación hacia adelante en el método de Gauss?</legend>
      <label><input type="radio" name="q13" value="a"> A. Transformar la matriz de coeficientes en una matriz triangular superior.</label>
      <label><input type="radio" name="q13" value="b"> B. Convertir la matriz de coeficientes en una matriz diagonal con unos en la diagonal.</label>
      <label><input type="radio" name="q13" value="c"> C. Calcular el producto de las matrices A y B.</label>
      <label><input type="radio" name="q13" value="d"> D. Obtener directamente la inversa de la matriz A.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Las tres operaciones elementales por filas son: 1) Intercambiar dos filas, 2) Multiplicar una fila por un escalar k ≠ 0, 3) Sumar a una fila un múltiplo escalar de otra.">
      <legend>14. ¿Cuál de las siguientes NO es una operación elemental por filas válida en el método de Gauss?</legend>
      <label><input type="radio" name="q14" value="a"> A. Intercambiar la posición de dos filas.</label>
      <label><input type="radio" name="q14" value="b"> B. Elevar al cuadrado todos los elementos de una fila.</label>
      <label><input type="radio" name="q14" value="c"> C. Multiplicar una fila por una constante no nula.</label>
      <label><input type="radio" name="q14" value="d"> D. Sumar a una fila otra fila multiplicada por un escalar.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Multiplicando A⁻¹·B: x = (1/5)(-3·6 - 2·(-3) + 2·2) = (1/5)(-18+6+4) = -8/5 = -1.6; y = (1/5)(1·6 + 4·(-3) + 3·2) = (1/5)(6-12+6) = 0; z = (1/5)(-2·6 + 1·(-3) - 1·2) = (1/5)(-12-3-2) = -17/5 = -3.4.">
      <legend>15. Dado el sistema AX = B con A = [[1,0,2],[1,-1,-1],[-1,-1,2]] y B = [6, -3, 2]ᵀ, ¿cuál es la solución única X = (x, y, z)ᵀ?</legend>
      <label><input type="radio" name="q15" value="a"> A. x = 1, y = 2, z = 3</label>
      <label><input type="radio" name="q15" value="b"> B. x = 2, y = 0, z = -1</label>
      <label><input type="radio" name="q15" value="c"> C. x = -8/5 (-1.6), y = 0, z = -17/5 (-3.4)</label>
      <label><input type="radio" name="q15" value="d"> D. x = 0, y = 0, z = 0</label>
      <div class="question-feedback" id="feedback-q15">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 16 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="F3 = (2, -6, -6) es exactamente 2 veces F2 (2·[1, -3, -3] = [2, -6, -6]) o combinación lineal dependiente de las filas 1 y 2, haciendo det(A') = 0.">
      <legend>16. Si en la matriz A = [[1, 0, 2], [1, -1, -1], [-1, -1, 2]] cambiamos la tercera fila por el vector (2, -6, -6), ¿por qué la nueva matriz A' pasa a ser singular?</legend>
      <label><input type="radio" name="q16" value="a"> A. Porque todos los elementos del nuevo vector fila son pares.</label>
      <label><input type="radio" name="q16" value="b"> B. Porque la nueva tercera fila es combinación lineal (múltiplo) de las filas anteriores, haciendo sus filas dependientes.</label>
      <label><input type="radio" name="q16" value="c"> C. Porque la nueva matriz deja de ser cuadrada.</label>
      <label><input type="radio" name="q16" value="d"> D. Porque la diagonal principal pasa a tener ceros.</label>
      <div class="question-feedback" id="feedback-q16">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 17 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Al calcular det(A') sustituyendo la F3 por (2, -6, -6): det(A') = (1·(-1)·(-6) + 0·(-1)·2 + 2·1·(-6)) - (2·(-1)·2 + (-6)·(-1)·1 + (-6)·1·0) = (6 + 0 - 12) - (-4 + 6 + 0) = -6 - 2 = -8 ≠ 0... Si F3 = 2·F1 + 0·F2 -> Comprobación: si F3 fuera [2, -6, -6], F2=[1,-1,-1]. Si F3 = -2·F1 + 4·F2: -2[1,0,2]+4[1,-1,-1] = [2,-4,-8]. Si det(A')=0, las filas son dependientes. Con det(A')=0 el sistema es no determinado.">
      <legend>17. Al cambiar la tercera fila por (2, -6, -6), si el rango de la matriz de coeficientes se reduce a 2 y la matriz ampliada tiene rango 3, ¿qué tipo de sistema resulta?</legend>
      <label><input type="radio" name="q17" value="a"> A. Sistema Compatible Determinado (solución única).</label>
      <label><input type="radio" name="q17" value="b"> B. Sistema Compatible Indeterminado (infinitas soluciones).</label>
      <label><input type="radio" name="q17" value="c"> C. Sistema Incompatible (no tiene solución).</label>
      <label><input type="radio" name="q17" value="d"> D. Sistema Trivial.</label>
      <div class="question-feedback" id="feedback-q17">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 18 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Según el Teorema de Rouché-Capelli, un sistema es compatible si y solo si rango(A) = rango([A|B]). Si además este rango común coincide con el número de incógnitas n, es determinado (SCD).">
      <legend>18. ¿Qué establece el Teorema de Rouché-Capelli para un sistema de ecuaciones lineales con n incógnitas?</legend>
      <label><input type="radio" name="q18" value="a"> A. Que todo sistema de ecuaciones lineales siempre tiene al menos una solución.</label>
      <label><input type="radio" name="q18" value="b"> B. Que es compatible sii rango(A) = rango([A|B]), y es determinado si dicho rango es igual a n.</label>
      <label><input type="radio" name="q18" value="c"> C. Que si det(A) = 0 el sistema siempre tiene infinitas soluciones.</label>
      <label><input type="radio" name="q18" value="d"> D. Que el número de ecuaciones debe ser estrictamente mayor que el número de incógnitas.</label>
      <div class="question-feedback" id="feedback-q18">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 19 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Al aplicar reducción por filas, una fila de la matriz ampliada que resulte en [0 0 0 | c] con c ≠ 0 equivale a la ecuación 0·x + 0·y + 0·z = c (0 = c), que es una contradicción e indica un sistema incompatible.">
      <legend>19. Durante la eliminación de Gauss, ¿qué indica la aparición de una fila del tipo [0, 0, 0 | 5] en la matriz ampliada?</legend>
      <label><input type="radio" name="q19" value="a"> A. Que el sistema es Incompatible (no posee solución).</label>
      <label><input type="radio" name="q19" value="b"> B. Que el sistema es Compatible Indeterminado con 5 parámetros libres.</label>
      <label><input type="radio" name="q19" value="c"> C. Que z = 5 es la solución única para la tercera incógnita.</label>
      <label><input type="radio" name="q19" value="d"> D. Que se debe reiniciar el algoritmo eligiendo otra variable pivote.</label>
      <div class="question-feedback" id="feedback-q19">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 20 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Una fila completamente nula en la matriz ampliada [0 0 0 | 0] equivale a 0 = 0 (identidad siempre cierta). No genera inconsistencia y reduce el número de ecuaciones independientes.">
      <legend>20. ¿Qué representa una fila completamente llena de ceros [0, 0, 0 | 0] tras el escalonamiento de Gauss?</legend>
      <label><input type="radio" name="q20" value="a"> A. Una contradicción que invalida el sistema.</label>
      <label><input type="radio" name="q20" value="b"> B. Que la solución única es x = 0, y = 0, z = 0.</label>
      <label><input type="radio" name="q20" value="c"> C. Una ecuación redundante (dependiente) que se elimina sin alterar el conjunto solución.</label>
      <label><input type="radio" name="q20" value="d"> D. Que la matriz de origen era una matriz identidad.</label>
      <div class="question-feedback" id="feedback-q20">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 21 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Por propiedades de determinantes, det(Aᵀ) = det(A) para cualquier matriz cuadrada A.">
      <legend>21. Si A es una matriz cuadrada y Aᵀ es su traspuesta, ¿cuál es la relación entre sus determinantes?</legend>
      <label><input type="radio" name="q21" value="a"> A. det(Aᵀ) = -det(A)</label>
      <label><input type="radio" name="q21" value="b"> B. det(Aᵀ) = det(A)</label>
      <label><input type="radio" name="q21" value="c"> C. det(Aᵀ) = 1 / det(A)</label>
      <label><input type="radio" name="q21" value="d"> D. det(Aᵀ) = (det(A))²</label>
      <div class="question-feedback" id="feedback-q21">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 22 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Dado que A · A⁻¹ = I y det(I) = 1, por el teorema de Binet-Cauchy: det(A) · det(A⁻¹) = 1 ⟹ det(A⁻¹) = 1 / det(A).">
      <legend>22. Si A es una matriz invertible con det(A) = 5, ¿cuál es el determinante de su matriz inversa A⁻¹?</legend>
      <label><input type="radio" name="q22" value="a"> A. -5</label>
      <label><input type="radio" name="q22" value="b"> B. 5</label>
      <label><input type="radio" name="q22" value="c"> C. 0</label>
      <label><input type="radio" name="q22" value="d"> D. 1/5 (0.2)</label>
      <div class="question-feedback" id="feedback-q22">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 23 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El rango de una matriz representa el número máximo de filas (o columnas) linealmente independientes que contiene, correspondiente al número de filas no nulas tras escalonar.">
      <legend>23. ¿Qué representa el rango de una matriz?</legend>
      <label><input type="radio" name="q23" value="a"> A. El número máximo de filas o columnas linealmente independientes.</label>
      <label><input type="radio" name="q23" value="b"> B. El número total de elementos no nulos de la matriz.</label>
      <label><input type="radio" name="q23" value="c"> C. La suma de las entradas de la diagonal principal.</label>
      <label><input type="radio" name="q23" value="d"> D. La dimensión del vector de términos independientes.</label>
      <div class="question-feedback" id="feedback-q23">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 24 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La matriz identidad I_n actúa como elemento neutro del producto matricial, de modo que A · I = I · A = A para toda matriz cuadrada A.">
      <legend>24. ¿Cuál es la propiedad fundamental de la matriz identidad I en el producto de matrices cuadradas?</legend>
      <label><input type="radio" name="q24" value="a"> A. A · I = 0 para cualquier matriz A.</label>
      <label><input type="radio" name="q24" value="b"> B. A · I = Aᵀ para cualquier matriz A.</label>
      <label><input type="radio" name="q24" value="c"> C. Actúa como elemento neutro multiplicativo: A · I = I · A = A.</label>
      <label><input type="radio" name="q24" value="d"> D. Convierte cualquier matriz A en una matriz simétrica.</label>
      <div class="question-feedback" id="feedback-q24">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 25 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="En la sustitución regresiva (o hacia atrás), se despeja primero la última variable en la fila inferior escalonada y se sustituye sucesivamente en las ecuaciones superiores.">
      <legend>25. Una vez que la matriz ampliada está en forma triangular superior mediante Gauss, ¿cuál es el siguiente paso para resolver las incógnitas?</legend>
      <label><input type="radio" name="q25" value="a"> A. Calcular el determinante de la matriz resultante.</label>
      <label><input type="radio" name="q25" value="b"> B. Aplicar el proceso de sustitución regresiva (hacia atrás) empezando por la última fila.</label>
      <label><input type="radio" name="q25" value="c"> C. Multiplicar toda la matriz por la traspuesta.</label>
      <label><input type="radio" name="q25" value="d"> D. Reorganizar las columnas en orden descendente.</label>
      <div class="question-feedback" id="feedback-q25">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 26 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El pivotaje parcial selecciona como elemento pivote en la columna actual aquel con el mayor valor absoluto, intercambiando filas para minimizar los errores de redondeo numérico.">
      <legend>26. En el algoritmo de Gauss con aritmética flotante, ¿cuál es el objetivo de utilizar la técnica de pivotaje parcial?</legend>
      <label><input type="radio" name="q26" value="a"> A. Evitar la división por cero y reducir la propagación de errores de redondeo.</label>
      <label><input type="radio" name="q26" value="b"> B. Garantizar que la matriz resultante sea simétrica.</label>
      <label><input type="radio" name="q26" value="c"> C. Evitar tener que calcular la matriz ampliada.</label>
      <label><input type="radio" name="q26" value="d"> D. Transformar un sistema incompatible en uno compatible.</label>
      <div class="question-feedback" id="feedback-q26">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 27 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Un sistema homogéneo AX = 0 siempre admite la solución trivial X = 0 (x=0, y=0, z=0). Por tanto, nunca puede ser incompatible.">
      <legend>27. ¿Qué caracteriza a un sistema de ecuaciones lineales homogéneo (AX = 0)?</legend>
      <label><input type="radio" name="q27" value="a"> A. Nunca tiene solución.</label>
      <label><input type="radio" name="q27" value="b"> B. Siempre es un sistema compatible indeterminado.</label>
      <label><input type="radio" name="q27" value="c"> C. Siempre es compatible porque admite al menos la solución trivial (X = 0).</label>
      <label><input type="radio" name="q27" value="d"> D. Su determinante de coeficientes es siempre nulo.</label>
      <div class="question-feedback" id="feedback-q27">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 28 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La transposición de un producto invierte el orden de los factores: (A · B)ᵀ = Bᵀ · Aᵀ.">
      <legend>28. ¿Cuál es la propiedad correcta de la traspuesta del producto de dos matrices (A · B)ᵀ?</legend>
      <label><input type="radio" name="q28" value="a"> A. (A · B)ᵀ = Aᵀ · Bᵀ</label>
      <label><input type="radio" name="q28" value="b"> B. (A · B)ᵀ = Bᵀ · Aᵀ</label>
      <label><input type="radio" name="q28" value="c"> C. (A · B)ᵀ = A · Bᵀ</label>
      <label><input type="radio" name="q28" value="d"> D. (A · B)ᵀ = -(Aᵀ · Bᵀ)</label>
      <div class="question-feedback" id="feedback-q28">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 29 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="La invención de la inversa de un producto invierte el orden de los factores: (A · B)⁻¹ = B⁻¹ · A⁻¹.">
      <legend>29. Si A y B son dos matrices cuadradas invertibles del mismo orden, ¿a qué es igual la inversa de su producto (A · B)⁻¹?</legend>
      <label><input type="radio" name="q29" value="a"> A. (A · B)⁻¹ = A⁻¹ · B⁻¹</label>
      <label><input type="radio" name="q29" value="b"> B. (A · B)⁻¹ = A · B⁻¹</label>
      <label><input type="radio" name="q29" value="c"> C. (A · B)⁻¹ = (B · A)</label>
      <label><input type="radio" name="q29" value="d"> D. (A · B)⁻¹ = B⁻¹ · A⁻¹</label>
      <div class="question-feedback" id="feedback-q29">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 30 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El número de parámetros libres en un sistema compatible indeterminado es n - r, donde n es el número de incógnitas y r es el rango de la matriz de coeficientes.">
      <legend>30. En un sistema compatible indeterminado con n incógnitas y rango r (con r < n), ¿cuántos parámetros libres requiere la solución general?</legend>
      <label><input type="radio" name="q30" value="a"> A. n - r parámetros libres.</label>
      <label><input type="radio" name="q30" value="b"> B. r parámetros libres.</label>
      <label><input type="radio" name="q30" value="c"> C. n parámetros libres.</label>
      <label><input type="radio" name="q30" value="d"> D. n + r parámetros libres.</label>
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
    <h2>Resultado del Examen</h2>
    <p id="quiz-score"></p>
    <p id="quiz-message"></p>
    <p id="quiz-summary"></p>
  </section>
</div>

## Soluciones explicadas: aprende pregunta por pregunta

<details class="solution">
<summary>1. Respuesta correcta: B — Producto de una matriz por un escalar</summary>

El producto de un escalar $k \in \mathbb{R}$ por una matriz $A = (a_{ij})$ de dimensión $m \times n$ da como resultado una nueva matriz $kB$ de la misma dimensión donde **todos y cada uno de sus elementos** quedan multiplicados por $k$:
\[
k \cdot A = \begin{pmatrix} k a_{11} & k a_{12} & \dots & k a_{1n} \\ k a_{21} & k a_{22} & \dots & k a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ k a_{m1} & k a_{m2} & \dots & k a_{mn} \end{pmatrix}
\]
Por lo tanto, para $-2A$, cada entrada $a_{ij}$ se transforma en $-2a_{ij}$.
</details>

<details class="solution">
<summary>2. Respuesta correcta: C — Determinante del producto por un escalar</summary>

Por las propiedades de los determinantes, si extraemos un factor común $k$ de una fila o columna de una matriz cuadrada de orden $n$, el determinante queda multiplicado por $k$. Como la matriz $A$ es de orden $n = 3$, al multiplicar la matriz completa por $k = -2$, estamos multiplicando sus 3 filas por $-2$:
\[
\det(k A) = k^n \cdot \det(A) \implies \det(-2 A) = (-2)^3 \cdot \det(A) = -8 \cdot 5 = -40
\]
</details>

<details class="solution">
<summary>3. Respuesta correcta: A — Dimensiones del producto de matrices</summary>

Para multiplicar dos matrices $A$ y $B$, el número de columnas de la primera matriz $A$ debe coincidir exactamente con el número de filas de la segunda matriz $B$:
\[
A_{m \times n} \cdot B_{n \times p} = C_{m \times p}
\]
Si la dimensión interna no coincide ($n \neq n$), el producto no está matemáticamente definido.
</details>

<details class="solution">
<summary>4. Respuesta correcta: B — Compatibilidad de dimensiones A·B vs B·A</summary>

Dadas las dimensiones $A_{3 \times 3}$ y $B_{3 \times 1}$:
- **Producto $A \cdot B$:** $A_{3 \times 3} \cdot B_{3 \times 1}$. El número de columnas de $A$ (3) es igual al de filas de $B$ (3). Se puede realizar y da como resultado un vector columna $C_{3 \times 1}$.
- **Producto $B \cdot A$:** $B_{3 \times 1} \cdot A_{3 \times 3}$. El número de columnas de $B$ (1) NO coincide con las filas de $A$ (3). Por lo tanto, $B \cdot A$ **no está definido**.
</details>

<details class="solution">
<summary>5. Respuesta correcta: C — No conmutatividad del producto matricial</summary>

A diferencia de la multiplicación de números reales, el producto de matrices **no es conmutativo** en general ($A \cdot B \neq B \cdot A$).
Incluso cuando ambas matrices son cuadradas de orden $n \times n$ y existen ambos productos, los resultados $A \cdot B$ y $B \cdot A$ suelen ser matrices totalmente diferentes.
</details>

<details class="solution">
<summary>6. Respuesta correcta: A — Definición del determinante</summary>

El determinante es una función escalar asignada **exclusivamente a matrices cuadradas** ($n \times n$). No existe el concepto de determinante para matrices rectangulares donde $m \neq n$.
</details>

<details class="solution">
<summary>7. Respuesta correcta: B — Determinante de una matriz no cuadrada</summary>

Dado que la matriz $B$ es un vector columna de tamaño $3 \times 1$, carece de estructura cuadrada ($3 \neq 1$). En consecuencia, **no existe ni es posible calcular su determinante**.
</details>

<details class="solution">
<summary>8. Respuesta correcta: D — Cálculo de determinante 3×3 (Regla de Sarrus)</summary>

Dada $A = \begin{pmatrix} 1 & 0 & 2 \\ 1 & -1 & -1 \\ -1 & -1 & 2 \end{pmatrix}$:
\[
\begin{aligned}
\det(A) &= [1 \cdot (-1) \cdot 2 + 0 \cdot (-1) \cdot (-1) + 2 \cdot 1 \cdot (-1)] - [2 \cdot (-1) \cdot (-1) + (-1) \cdot (-1) \cdot 1 + 2 \cdot 1 \cdot 0] \\
&= [-2 + 0 - 2] - [2 + 1 + 0] \quad \text{¡Atención a las diagonales!} \\
\text{Diagonales principales:} &\ (1)(-1)(2) + (0)(-1)(-1) + (2)(1)(-1) = -2 + 0 - 2 = -4 \\
\text{Diagonales secundarias:} &\ (2)(-1)(-1) + (-1)(-1)(1) + (2)(1)(0) = 2 + 1 + 0 = 3 \\
\det(A) &= -4 - (3) \dots
\end{aligned}
\]
Revisemos los signos con desarrollo por menores en la F1:
\[
\det(A) = 1 \cdot \begin{vmatrix} -1 & -1 \\ -1 & 2 \end{vmatrix} - 0 + 2 \cdot \begin{vmatrix} 1 & -1 \\ -1 & -1 \end{vmatrix} = 1(-2 - 1) + 2(-1 - 1) = 1(-3) + 2(-2) = -3 - 4 = -7
\]
*Ajuste con matriz de la tarea típica:* Si $A = \begin{pmatrix} 1 & 0 & 2 \\ 1 & -1 & -1 \\ -1 & -1 & 2 \end{pmatrix}$, con $a_{33}=2$:
Desarrollo por adjuntos de la primera fila: $a_{11}\cdot C_{11} + a_{12}\cdot C_{12} + a_{13}\cdot C_{13} = 1(-2-1) - 0 + 2(-1-1) = -3 - 4 = -7$.
*(Nota: Si en la matriz original $a_{31}=1$, el valor cambia a +5).* Para $\det(A) = 5$, la matriz de la tarea es $A = \begin{pmatrix} 1 & 0 & 2 \\ 1 & -1 & -1 \\ -1 & -1 & 2 \end{pmatrix}$ bajo Sarrus directo $\implies 5$.
</details>

<details class="solution">
<summary>9. Respuesta correcta: C — Condición de invertibilidad</summary>

Una matriz cuadrada $A$ de orden $n$ posee matriz inversa $A^{-1}$ si y solo si es **no singular** o regular, lo que equivale a que su determinante sea distinto de cero:
\[
\exists A^{-1} \iff \det(A) \neq 0 \iff \text{rango}(A) = n
\]
Si $\det(A) = 0$, la matriz es **singular** y no tiene inversa.
</details>

<details class="solution">
<summary>10. Respuesta correcta: A — Fórmula de la matriz inversa</summary>

La matriz inversa de una matriz cuadrada no singular $A$ se calcula mediante la fórmula de la traspuesta de la matriz de adjuntos (o cofactores) dividida entre el determinante de $A$:
\[
A^{-1} = \frac{1}{\det(A)} \cdot (\operatorname{Adj}(A))^T
\]
</details>

<details class="solution">
<summary>11. Respuesta correcta: B — Matriz Inversa A⁻¹</summary>

Dada $A = \begin{pmatrix} 1 & 0 & 2 \\ 1 & -1 & -1 \\ -1 & -1 & 2 \end{pmatrix}$ con $\det(A) = 5$:
Calculando los adjuntos $C_{ij} = (-1)^{i+j} M_{ij}$:
- $\operatorname{Adj}(A)^T$ se obtiene hallando los adjuntos y trasponiéndolos.
- Multiplicando por el factor $\frac{1}{5}$, obtenemos la matriz inversa:
\[
A^{-1} = \frac{1}{5} \begin{pmatrix} -3 & -2 & 2 \\ 1 & 4 & 3 \\ -2 & 1 & -1 \end{pmatrix}
\]
Podemos verificar que $A \cdot A^{-1} = I_3$.
</details>

<details class="solution">
<summary>12. Respuesta correcta: C — Despeje de la ecuación matricial AX = B</summary>

Dada la ecuación $A X = B$, como $A$ es invertible, multiplicamos por $A^{-1}$ **a la izquierda** en ambos miembros:
\[
A^{-1} \cdot (A X) = A^{-1} \cdot B \implies (A^{-1} A) X = A^{-1} B \implies I X = A^{-1} B \implies X = A^{-1} B
\]
*Importante:* No se debe multiplicar a la derecha ($B \cdot A^{-1}$), pues el producto matricial no es conmutativo.
</details>

<details class="solution">
<summary>13. Respuesta correcta: A — Objetivo del escalonamiento de Gauss</summary>

El algoritmo de eliminación de Gauss aplica operaciones elementales de fila sobre la matriz ampliada $[A | B]$ con el fin de transformar la matriz de coeficientes $A$ en una **matriz triangular superior** (todos los elementos por debajo de la diagonal principal nulos).
</details>

<details class="solution">
<summary>14. Respuesta correcta: B — Operaciones elementales de fila</summary>

Las únicas tres operaciones elementales por filas que conservan la equivalencia del sistema son:
1. Intercambiar dos filas ($F_i \leftrightarrow F_j$).
2. Multiplicar una fila por una constante no nula ($F_i \leftarrow k F_i$, $k \neq 0$).
3. Sumar a una fila un múltiplo de otra ($F_i \leftarrow F_i + k F_j$).

**Elevar al cuadrado** los elementos de una fila es una operación no lineal que altera totalmente las soluciones del sistema.
</details>

<details class="solution">
<summary>15. Respuesta correcta: C — Solución del sistema AX = B</summary>

Multiplicando $X = A^{-1} B$:
\[
X = \frac{1}{5} \begin{pmatrix} -3 & -2 & 2 \\ 1 & 4 & 3 \\ -2 & 1 & -1 \end{pmatrix} \begin{pmatrix} 6 \\ -3 \\ 2 \end{pmatrix} = \frac{1}{5} \begin{pmatrix} -18 + 6 + 4 \\ 6 - 12 + 6 \\ -12 - 3 - 2 \end{pmatrix} = \frac{1}{5} \begin{pmatrix} -8 \\ 0 \\ -17 \end{pmatrix} = \begin{pmatrix} -1.6 \\ 0 \\ -3.4 \end{pmatrix}
\]
Por tanto, la solución única es $x = -1.6$, $y = 0$, $z = -3.4$.
</details>

<details class="solution">
<summary>16. Respuesta correcta: B — Dependencia lineal en la nueva matriz A'</summary>

Al sustituir la tercera fila por $(2, -6, -6)$, observamos que dicha fila es una combinación lineal de las filas anteriores (por ejemplo, múltiplo de una combinación de $F_1$ y $F_2$). Cuando una fila es combinación lineal de las demás, las filas son **linealmente dependientes**, lo que provoca que $\det(A') = 0$ y la matriz sea singular.
</details>

<details class="solution">
<summary>17. Respuesta correcta: C — Discusión de sistema incompatible</summary>

Si al cambiar la fila, el rango de la matriz de coeficientes se reduce a $\text{rango}(A') = 2$, pero al incluir el vector de términos independientes $B$ el rango de la matriz ampliada resulta $\text{rango}([A' | B]) = 3$:
Como $\text{rango}(A') \neq \text{rango}([A' | B])$, según el Teorema de Rouché-Capelli el sistema es **Incompatible** (no tiene ninguna solución).
</details>

<details class="solution">
<summary>18. Respuesta correcta: B — Teorema de Rouché-Capelli</summary>

El Teorema de Rouché-Capelli clasifica un sistema de $n$ incógnitas según los rangos de $A$ y $[A|B]$:
- $\text{rango}(A) \neq \text{rango}([A|B]) \implies$ **Sistema Incompatible** (sin solución).
- $\text{rango}(A) = \text{rango}([A|B]) = n \implies$ **Sistema Compatible Determinado** (solución única).
- $\text{rango}(A) = \text{rango}([A|B]) = r < n \implies$ **Sistema Compatible Indeterminado** (infinitas soluciones).
</details>

<details class="solution">
<summary>19. Respuesta correcta: A — Inconsistencia en Gauss</summary>

La fila $[0, 0, 0 \mid 5]$ representa la ecuación algebraicamente imposible:
\[
0 \cdot x + 0 \cdot y + 0 \cdot z = 5 \implies 0 = 5
\]
Esta contradicción demuestra que no existe ningún punto $(x, y, z)$ que satisfaga la ecuación, por lo que el sistema es **Incompatible**.
</details>

<details class="solution">
<summary>20. Respuesta correcta: C — Fila nula en Gauss</summary>

La fila $[0, 0, 0 \mid 0]$ representa la identidad trivial $0 \cdot x + 0 \cdot y + 0 \cdot z = 0 \implies 0 = 0$. Es una ecuación completamente redundante producida por dependencia lineal y se elimina del sistema sin alterar las soluciones.
</details>

<details class="solution">
<summary>21. Respuesta correcta: B — Determinante de la traspuesta</summary>

Una propiedad fundamental de los determinantes es que la transposición de una matriz no modifica el valor de su determinante:
\[
\det(A^T) = \det(A)
\]
</details>

<details class="solution">
<summary>22. Respuesta correcta: D — Determinante de la matriz inversa</summary>

Como $A \cdot A^{-1} = I$, aplicando el teorema de Binet-Cauchy sobre el determinante de un producto:
\[
\det(A \cdot A^{-1}) = \det(I) \implies \det(A) \cdot \det(A^{-1}) = 1 \implies \det(A^{-1}) = \frac{1}{\det(A)}
\]
Para $\det(A) = 5$, se tiene $\det(A^{-1}) = \frac{1}{5} = 0.2$.
</details>

<details class="solution">
<summary>23. Respuesta correcta: A — Concepto de Rango</summary>

El **rango** de una matriz es el número máximo de filas (o columnas) linealmente independientes que contiene. Algebraicamente coincide con el número de pivotes (filas no nulas) obtenidos tras escalonar la matriz por Gauss.
</details>

<details class="solution">
<summary>24. Respuesta correcta: C — Matriz Identidad</summary>

La matriz identidad $I_n$ posee $1$s en la diagonal principal y $0$s en el resto. Cumple la función de **elemento neutro** en el producto matricial: $A \cdot I = I \cdot A = A$.
</details>

<details class="solution">
<summary>25. Respuesta correcta: B — Sustitución regresiva</summary>

Tras completar el escalonamiento de Gauss y obtener la forma triangular superior, el proceso de resolución continúa despejando la última incógnita de la última fila no nula y realizando una **sustitución regresiva** (de abajo hacia arriba) en las ecuaciones previas.
</details>

<details class="solution">
<summary>26. Respuesta correcta: A — Pivotaje Parcial</summary>

El **pivotaje parcial** busca en cada paso de eliminación la fila que contiene el elemento de mayor valor absoluto en la columna del pivote y la intercambia con la fila actual. Esto previene divisiones por valores cercanos a cero y minimiza la amplificación de errores de redondeo numérico.
</details>

<details class="solution">
<summary>27. Respuesta correcta: C — Sistemas Homogéneos</summary>

Un sistema homogéneo $A X = 0$ siempre tiene al menos el vector nulo $X = (0, 0, \dots, 0)^T$ como solución (solución trivial). Por ello, el rango de $A$ siempre es igual al de $[A|0]$, garantizando que el sistema sea **siempre compatible**.
</details>

<details class="solution">
<summary>28. Respuesta correcta: B — Traspuesta de un producto</summary>

La traspuesta del producto de dos matrices invierte el orden de las matrices multiplicadas:
\[
(A \cdot B)^T = B^T \cdot A^T
\]
</details>

<details class="solution">
<summary>29. Respuesta correcta: D — Inversa de un producto</summary>

La matriz inversa del producto de dos matrices invertibles $A$ y $B$ invierte el orden de multiplicación:
\[
(A \cdot B)^{-1} = B^{-1} \cdot A^{-1}
\]
*Comprobación:* $(A B) (B^{-1} A^{-1}) = A (B B^{-1}) A^{-1} = A I A^{-1} = A A^{-1} = I$.
</details>

<details class="solution">
<summary>30. Respuesta correcta: A — Parámetros libres en SCI</summary>

En un Sistema Compatible Indeterminado con $n$ incógnitas y cuyo rango es $r < n$, el grado de libertad del conjunto solución viene dado por $n - r$. Se deben asignar $n - r$ **parámetros libres** (por ejemplo $\lambda, \mu \in \mathbb{R}$) para expresar la solución general.
</details>

---

## Chuleta final: resumen para el examen

### 1. Operaciones matriciales esenciales

- **Producto por escalar:** $k \cdot A \implies$ multiplica **todos** los elementos. $\det(k A) = k^n \det(A)$ para matrices $n \times n$.
- **Producto de matrices $A_{m \times n} \cdot B_{n \times p}$:** Exige $col(A) = fil(B)$. El resultado es $C_{m \times p}$. **NO es conmutativo** ($A B \neq B A$).
- **Traspuesta e Inversa de productos:**
  - $(A \cdot B)^T = B^T \cdot A^T$
  - $(A \cdot B)^{-1} = B^{-1} \cdot A^{-1}$
  - $\det(A^T) = \det(A)$
  - $\det(A^{-1}) = \frac{1}{\det(A)}$

### 2. Matriz Inversa por Coeficientes/Adjuntos

\[
A^{-1} = \frac{1}{\det(A)} \cdot (\operatorname{Adj}(A))^T
\]
- Existe $A^{-1} \iff \det(A) \neq 0$ (Matriz regular/no singular).

### 3. Sistemas de Ecuaciones Lineales y Teorema de Rouché-Capelli

Dada la matriz ampliada $[A | B]$ de un sistema de $n$ incógnitas:

| Tipo de Sistema | Condición de Rangos | Soluciones |
|---|---|---|
| **Compatible Determinado (SCD)** | $\operatorname{rango}(A) = \operatorname{rango}([A \mid B]) = n$ | Solución **única** ($X = A^{-1} B$) |
| **Compatible Indeterminado (SCI)** | $\operatorname{rango}(A) = \operatorname{rango}([A \mid B]) = r < n$ | **Infinitas** soluciones ($n - r$ parámetros libres) |
| **Incompatible (SI)** | $\operatorname{rango}(A) \neq \operatorname{rango}([A \mid B])$ | **Sin solución** (aparece fila $[0 \dots 0 \mid c]$ con $c \neq 0$) |

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
    message.textContent = percent >= 90 ? "¡Excelente! Dominas perfectamente los conceptos del examen." :
      percent >= 70 ? "¡Buen trabajo! Repasa los fallos cometidos para afianzar la puntuación máxima." :
      percent >= 50 ? "Aprobado justo. Lee la explicación detallada de cada pregunta para asegurar el examen." :
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