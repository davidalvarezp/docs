---
title: Test Tarea 2.1 - Aritmética Modular, Teorema Chino del Resto y Teoría de Conjuntos
---

# Test Tarea 2.1: Teoría de Números, Aritmética Modular y Operaciones con Conjuntos

Este test consta de **30 preguntas teóricas y prácticas** diseñadas con la misma estructura y plantilla global que el resto del curso. Cubre de forma exhaustiva los contenidos de la Tarea 2: resolución de sistemas de congruencias lineales mediante el Teorema Chino del Resto (TCR), coprimidad, inversos modulares, definición de conjuntos por extensión/comprensión, operaciones fundamentales (unión, intersección, diferencia, complemento, producto cartesiano), diagramas de Venn y demostración/verificación de propiedades algebraicas (distributividad y leyes de De Morgan).

!!! info "Puntuación y Criterios de Examen"
    - **Preguntas 1 a 30:** 0,33 puntos por respuesta correcta (Total: **10 puntos**).
    - **Paso de respuesta única:** Selecciona la opción adecuada para cada pregunta y pulsa **Comprobar respuestas** para calcular tu nota final, ver tus aciertos/fallos y consultar la retroalimentación inmediata.

<div id="quiz-tarea2" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 30 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Dos enteros a y b son congruentes módulo m (a ≡ b mod m) si m divide exactamente a la diferencia (a - b).">
      <legend>1. ¿Qué significa formalmente la expresión de congruencia $a \equiv b \pmod m$?</legend>
      <label><input type="radio" name="q1" value="a"> A. Que al dividir $a$ entre $b$ el cociente es exactamente $m$.</label>
      <label><input type="radio" name="q1" value="b"> B. Que el módulo $m$ divide exactamente a la diferencia $a - b$ (es decir, $a$ y $b$ dejan el mismo resto al dividirse entre $m$).</label>
      <label><input type="radio" name="q1" value="c"> C. Que $a$ y $b$ son números primos entre sí.</label>
      <label><input type="radio" name="q1" value="d"> D. Que $a + b$ es un múltiplo exacto de $m$.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El Teorema Chino del Resto exige indispensablemente que todos los módulos m_i sean coprimos dos a dos: mcd(m_i, m_j) = 1 para todo i ≠ j.">
      <legend>2. ¿Cuál es la condición fundamental que deben cumplir los módulos $m_1, m_2, \dots, m_k$ para garantizar la existencia de solución única módulo $M$ mediante el Teorema Chino del Resto?</legend>
      <label><input type="radio" name="q2" value="a"> A. Que todos los módulos sean números pares.</label>
      <label><input type="radio" name="q2" value="b"> B. Que los módulos estén en progresión aritmética estricta.</label>
      <label><input type="radio" name="q2" value="c"> C. Que sean primos entre sí dos a dos ($\operatorname{mcd}(m_i, m_j) = 1$ para todo $i \neq j$).</label>
      <label><input type="radio" name="q2" value="d"> D. Que la suma de todos los módulos sea un número primo.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="En la formulación estándar del TCR, M es el producto de todos los módulos individuales: M = m_1 · m_2 · ... · m_k.">
      <legend>3. En el algoritmo del Teorema Chino del Resto para un sistema con módulos $m_1, m_2, \dots, m_k$, ¿cómo se calcula el módulo total $M$ en el que la solución es única?</legend>
      <label><input type="radio" name="q3" value="a"> A. Multiplicando todos los módulos: $M = m_1 \cdot m_2 \cdot \dots \cdot m_k$.</label>
      <label><input type="radio" name="q3" value="b"> B. Calculando el mínimo común múltiplo de los restos $a_i$.</label>
      <label><input type="radio" name="q3" value="c"> C. Sumando todos los módulos: $M = m_1 + m_2 + \dots + m_k$.</label>
      <label><input type="radio" name="q3" value="d"> D. Elevando el primer módulo al número total de ecuaciones.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El módulo parcial M_i asociado a la i-ésima ecuación es M / m_i, es decir, el producto de todos los módulos excepto m_i.">
      <legend>4. Para cada ecuación $i$ en el algoritmo del TCR, ¿cómo se define la cantidad auxiliar $M_i$?</legend>
      <label><input type="radio" name="q4" value="a"> A. $M_i = M \cdot m_i$</label>
      <label><input type="radio" name="q4" value="b"> B. $M_i = M / m_i$ (el producto de todos los módulos excepto $m_i$).</label>
      <label><input type="radio" name="q4" value="c"> C. $M_i = M + m_i$</label>
      <label><input type="radio" name="q4" value="d"> D. $M_i = \operatorname{mcd}(M, m_i)$</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="El valor y_i representa el inverso modular de M_i respecto al módulo m_i, cumpliendo M_i · y_i ≡ 1 mod m_i.">
      <legend>5. En el TCR, ¿qué propiedad cumple el factor $y_i$ asociado a cada ecuación?</legend>
      <label><input type="radio" name="q5" value="a"> A. $M_i \cdot y_i \equiv 0 \pmod{m_i}$</label>
      <label><input type="radio" name="q5" value="b"> B. $y_i = m_i - a_i$</label>
      <label><input type="radio" name="q5" value="c"> C. $M_i + y_i \equiv 1 \pmod M$</label>
      <label><input type="radio" name="q5" value="d"> D. Es el inverso modular de $M_i$ módulo $m_i$, satisfaciendo $M_i \cdot y_i \equiv 1 \pmod{m_i}$.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La solución particular x_0 se reconstruye mediante la suma ponderada ∑ (a_i · M_i · y_i) modulo M.">
      <legend>6. ¿Cuál es la expresión general para construir la solución simultánea $x$ módulo $M$ en el Teorema Chino del Resto?</legend>
      <label><input type="radio" name="q6" value="a"> A. $x \equiv \sum_{i=1}^k (a_i \cdot M_i \cdot y_i) \pmod M$</label>
      <label><input type="radio" name="q6" value="b"> B. $x \equiv \prod_{i=1}^k (a_i + M_i + y_i) \pmod M$</label>
      <label><input type="radio" name="q6" value="c"> C. $x \equiv \sum_{i=1}^k (a_i + m_i) \pmod M$</label>
      <label><input type="radio" name="q6" value="d"> D. $x \equiv \frac{M}{\sum_{i=1}^k y_i} \pmod M$</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Para m_1=3, m_2=5, m_3=7: M = 3·5·7 = 105. M_1=35, M_2=21, M_3=15. Inversos: 35y_1≡1 mod 3 ⟹ 2y_1≡1 ⟹ y_1=2. 21y_2≡1 mod 5 ⟹ 1y_2≡1 ⟹ y_2=1. 15y_3≡1 mod 7 ⟹ 1y_3≡1 ⟹ y_3=1. Suma x = 2·35·2 + 3·21·1 + 2·15·1 = 140 + 63 + 30 = 233 ≡ 23 mod 105.">
      <legend>7. Resuelve el sistema: $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$, $x \equiv 2 \pmod 7$. ¿Cuál es la menor solución entera positiva?</legend>
      <label><input type="radio" name="q7" value="a"> A. $x = 17$</label>
      <label><input type="radio" name="q7" value="b"> B. $x = 53$</label>
      <label><input type="radio" name="q7" value="c"> C. $x = 23$</label>
      <label><input type="radio" name="q7" value="d"> D. $x = 103$</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Un elemento a admite inverso modular z mod m (a·z ≡ 1 mod m) si y solo si mcd(a, m) = 1.">
      <legend>8. ¿Bajo qué condición existe el inverso modular de un entero $a$ módulo $m$?</legend>
      <label><input type="radio" name="q8" value="a"> A. Siempre existe para cualquier par de enteros $a$ y $m$.</label>
      <label><input type="radio" name="q8" value="b"> B. Si y solo si $\operatorname{mcd}(a, m) = 1$ ($a$ y $m$ son coprimos).</label>
      <label><input type="radio" name="q8" value="c"> C. Solo si $a$ es un número primo mayor que $m$.</label>
      <label><input type="radio" name="q8" value="d"> D. Únicamente si $m$ es un múltiplo par de $a$.</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Buscamos y tal que 3y ≡ 1 mod 7. Probando: 3·5 = 15 = 2·7 + 1 ≡ 1 mod 7. Por tanto, el inverso es 5.">
      <legend>9. ¿Cuál es el inverso modular de $3$ módulo $7$ (es decir, el entero $y \in \{0, 1, \dots, 6\}$ tal que $3y \equiv 1 \pmod 7$)?</legend>
      <label><input type="radio" name="q9" value="a"> A. $5$</label>
      <label><input type="radio" name="q9" value="b"> B. $2$</label>
      <label><input type="radio" name="q9" value="c"> C. $4$</label>
      <label><input type="radio" name="q9" value="d"> D. $3$</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Definir un conjunto por extensión consiste en listar individualmente cada uno de sus elementos entre llaves.">
      <legend>10. ¿En qué consiste definir un conjunto por extensión?</legend>
      <label><input type="radio" name="q10" value="a"> A. En enunciar una propiedad lógica que deben cumplir sus elementos.</label>
      <label><input type="radio" name="q10" value="b"> B. En dibujar sus límites dentro de un diagrama cartesiano.</label>
      <label><input type="radio" name="q10" value="c"> C. En enumerar explícitamente uno a uno todos sus elementos dentro de llaves.</label>
      <label><input type="radio" name="q10" value="d"> D. En calcular el número total de subconjuntos de su conjunto potencia.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Definir un conjunto por comprensión establece la regla o condición matemática que deben satisfacer sus elementos: A = {x ∈ U | P(x)}.">
      <legend>11. ¿En qué consiste definir un conjunto por comprensión?</legend>
      <label><input type="radio" name="q11" value="a"> A. En contar cuántos elementos tiene el conjunto.</label>
      <label><input type="radio" name="q11" value="b"> B. En ordenar sus elementos de menor a mayor.</label>
      <label><input type="radio" name="q11" value="c"> C. En listar todos sus pares ordenados.</label>
      <label><input type="radio" name="q11" value="d"> D. En especificar la propiedad o condición lógica que caracteriza a sus miembros.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="U = {1, 2, ..., 12}. Primos pares ≤ 12: solo el 2. Cuadrados perfectos ≤ 12: 1, 4, 9. Múltiplos de 3 ≤ 12: 3, 6, 9, 12.">
      <legend>12. Dado el universo $U = \{x \in \mathbb{N} \mid 1 \le x \le 10\}$. Si $A = \{x \in U \mid x \text{ es par y primo}\}$, $B = \{x \in U \mid x^2 \le 16\}$, ¿cuáles son sus listas por extensión?</legend>
      <label><input type="radio" name="q12" value="a"> A. $A = \{2, 4\}$, $B = \{1, 2, 3, 4, 5\}$</label>
      <label><input type="radio" name="q12" value="b"> B. $A = \{2\}$, $B = \{1, 2, 3, 4\}$</label>
      <label><input type="radio" name="q12" value="c"> C. $A = \emptyset$, $B = \{2, 4\}$</label>
      <label><input type="radio" name="q12" value="d"> D. $A = \{2, 3, 5\}$, $B = \{1, 4, 9, 16\}$</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La unión A ∪ B reúne todos los elementos que pertenecen a A, a B o a ambos simultáneamente.">
      <legend>13. ¿Qué representa la unión de dos conjuntos $A \cup B$?</legend>
      <label><input type="radio" name="q13" value="a"> A. El conjunto de elementos que pertenecen a $A$, a $B$ o a ambos ($x \in A \lor x \in B$).</label>
      <label><input type="radio" name="q13" value="b"> B. El conjunto de elementos comunes que pertenecen estrictamente a $A$ y a $B$ al mismo tiempo.</label>
      <label><input type="radio" name="q13" value="c"> C. Los elementos de $A$ que no están en $B$.</label>
      <label><input type="radio" name="q13" value="d"> D. El producto cartesiano de sus componentes.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La intersección A ∩ B está formada exclusivamente por los elementos compartidos que pertenecen a A y a B simultáneamente.">
      <legend>14. ¿Qué representa la intersección de dos conjuntos $A \cap B$?</legend>
      <label><input type="radio" name="q14" value="a"> A. Todos los elementos de $A$ y de $B$ combinados sin repetir.</label>
      <label><input type="radio" name="q14" value="b"> B. El conjunto formado únicamente por los elementos comunes ($x \in A \land x \in B$).</label>
      <label><input type="radio" name="q14" value="c"> C. Todos los elementos del universo fuera de $A$.</label>
      <label><input type="radio" name="q14" value="d"> D. Los elementos de $B$ que no están en $A$.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La diferencia A \ B (o A - B) reúne a los elementos que pertenecen a A pero NO pertenecen a B.">
      <legend>15. ¿Cómo se define la diferencia de conjuntos $A \setminus B$ (o $A - B$)?</legend>
      <label><input type="radio" name="q15" value="a"> A. $A \setminus B = \{x \in U \mid x \in A \land x \in B\}$</label>
      <label><input type="radio" name="q15" value="b"> B. $A \setminus B = \{x \in U \mid x \in B \land x \notin A\}$</label>
      <label><input type="radio" name="q15" value="c"> C. $A \setminus B = \{x \in U \mid x \in A \land x \notin B\}$</label>
      <label><input type="radio" name="q15" value="d"> D. $A \setminus B = (A \cup B)^c$</label>
      <div class="question-feedback" id="feedback-q15">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 16 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El complemento A^c (o A') contiene todos los elementos del universo U que no están en A: A^c = U \ A.">
      <legend>16. Dado un conjunto universal $U$, ¿cómo se define el complemento de un conjunto $A$, denotado $A^c$ o $A'$?</legend>
      <label><input type="radio" name="q16" value="a"> A. $A^c = U \setminus A = \{x \in U \mid x \notin A\}$</label>
      <label><input type="radio" name="q16" value="b"> B. $A^c = A \setminus U$</label>
      <label><input type="radio" name="q16" value="c"> C. $A^c = A \cap U$</label>
      <label><input type="radio" name="q16" value="d"> D. $A^c = \{x \in A \mid x \notin U\}$</label>
      <div class="question-feedback" id="feedback-q16">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 17 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="U = {1,2,3,4,5,6,7,8,9,10}, A = {2,3,5,7}, B = {2,4,6,8,10}. A ∩ B = {2}. A \ B = {3,5,7}. B \ A = {4,6,8,10}. A^c = {1,4,6,8,9,10}.">
      <legend>17. Con $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$, $A = \{2, 3, 5, 7\}$, $B = \{2, 4, 6, 8, 10\}$. ¿Cuál es el resultado de la diferencia $A \setminus B$?</legend>
      <label><input type="radio" name="q17" value="a"> A. $\{2\}$</label>
      <label><input type="radio" name="q17" value="b"> B. $\{1, 9\}$</label>
      <label><input type="radio" name="q17" value="c"> C. $\{4, 6, 8, 10\}$</label>
      <label><input type="radio" name="q17" value="d"> D. $\{3, 5, 7\}$</label>
      <div class="question-feedback" id="feedback-q17">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 18 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La propiedad distributiva de la intersección respecto a la unión establece que A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).">
      <legend>18. ¿Cuál de las siguientes identidades expresa correctamente la propiedad distributiva de la intersección respecto de la unión?</legend>
      <label><input type="radio" name="q18" value="a"> A. $A \cap (B \cup C) = (A \cup B) \cap (A \cup C)$</label>
      <label><input type="radio" name="q18" value="b"> B. $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$</label>
      <label><input type="radio" name="q18" value="c"> C. $A \cap (B \cup C) = A \cup (B \cap C)$</label>
      <label><input type="radio" name="q18" value="d"> D. $A \cap (B \cup C) = (A \setminus B) \cup (A \setminus C)$</label>
      <div class="question-feedback" id="feedback-q18">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 19 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La propiedad distributiva de la unión respecto a la intersección establece que A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).">
      <legend>19. ¿Cuál de las siguientes identidades expresa correctamente la propiedad distributiva de la unión respecto de la intersección?</legend>
      <label><input type="radio" name="q19" value="a"> A. $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$</label>
      <label><input type="radio" name="q19" value="b"> B. $A \cup (B \cap C) = (A \cap B) \cup (A \cap C)$</label>
      <label><input type="radio" name="q19" value="c"> C. $A \cup (B \cap C) = (A \cup B) \cup C$</label>
      <label><input type="radio" name="q19" value="d"> D. $A \cup (B \cap C) = A \cap (B \cup C)$</label>
      <div class="question-feedback" id="feedback-q19">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 20 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Las Leyes de De Morgan establecen: 1) (A ∪ B)^c = A^c ∩ B^c; 2) (A ∩ B)^c = A^c ∪ B^c.">
      <legend>20. Según las Leyes de De Morgan, ¿a qué es equivalente la expresión $(A \cup B)^c$?</legend>
      <label><input type="radio" name="q20" value="a"> A. $A^c \cup B^c$</label>
      <label><input type="radio" name="q20" value="b"> B. $A \cap B$</label>
      <label><input type="radio" name="q20" value="c"> C. $A^c \cap B^c$</label>
      <label><input type="radio" name="q20" value="d"> D. $A \setminus B$</label>
      <div class="question-feedback" id="feedback-q20">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 21 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El producto cartesiano A × B es el conjunto formado por todos los pares ordenados (a, b) tales que a ∈ A y b ∈ B.">
      <legend>21. ¿Cómo se define el producto cartesiano de dos conjuntos $A \times B$?</legend>
      <label><input type="radio" name="q21" value="a"> A. El conjunto de las sumas $a + b$ para todo $a \in A, b \in B$.</label>
      <label><input type="radio" name="q21" value="b"> B. El conjunto de pares ordenados $A \times B = \{(a, b) \mid a \in A \land b \in B\}$.</label>
      <label><input type="radio" name="q21" value="c"> C. La intersección de las cardinalidades $|A| \cdot |B|$.</label>
      <label><input type="radio" name="q21" value="d"> D. El conjunto de elementos comunes entre $A$ y $B$.</label>
      <div class="question-feedback" id="feedback-q21">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 22 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Si |A| = m y |B| = n, la cardinalidad del producto cartesiano es |A × B| = m · n. Para |A|=3 y |B|=2, |A × B| = 3 · 2 = 6.">
      <legend>22. Si el conjunto $A$ tiene $3$ elementos y el conjunto $B$ tiene $2$ elementos, ¿cuántos elementos (pares ordenados) tiene el conjunto $A \times B$?</legend>
      <label><input type="radio" name="q22" value="a"> A. $5$</label>
      <label><input type="radio" name="q22" value="b"> B. $8$</label>
      <label><input type="radio" name="q22" value="c"> C. $9$</label>
      <label><input type="radio" name="q22" value="d"> D. $6$</label>
      <div class="question-feedback" id="feedback-q22">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 23 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="En general el producto cartesiano NO es conmutativo (A × B ≠ B × A) salvo si A = B o alguno es vacío. (1, x) ≠ (x, 1).">
      <legend>23. ¿Por qué el producto cartesiano $A \times B$ en general NO es conmutativo ($A \times B \neq B \times A$)?</legend>
      <label><input type="radio" name="q23" value="a"> A. Porque en los pares ordenados la posición importa: $(a, b) \neq (b, a)$ salvo si $a = b$.</label>
      <label><input type="radio" name="q23" value="b"> B. Porque $|A \times B|$ es siempre diferente de $|B \times A|$.</label>
      <label><input type="radio" name="q23" value="c"> C. Porque la unión de conjuntos invalida el orden cartesiano.</label>
      <label><input type="radio" name="q23" value="d"> D. Porque solo se pueden multiplicar conjuntos disjuntos.</label>
      <div class="question-feedback" id="feedback-q23">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 24 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="En un Diagrama de Venn de 3 conjuntos (A, B, C), el plano queda dividido en 2³ = 8 regiones disjuntas (incluyendo la región exterior).">
      <legend>24. En un diagrama de Venn representativo de 3 conjuntos $A$, $B$ y $C$ contenidos en un universo $U$, ¿en cuántas regiones disjuntas queda dividido el universo?</legend>
      <label><input type="radio" name="q24" value="a"> A. $3$ regiones.</label>
      <label><input type="radio" name="q24" value="b"> B. $6$ regiones.</label>
      <label><input type="radio" name="q24" value="c"> C. $8$ regiones.</label>
      <label><input type="radio" name="q24" value="d"> D. $4$ regiones.</label>
      <div class="question-feedback" id="feedback-q24">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 25 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La región central en un diagrama de Venn de 3 conjuntos donde se superponen los tres círculos representa la intersección triple A ∩ B ∩ C.">
      <legend>25. En un diagrama de Venn de tres conjuntos $A$, $B$ y $C$, ¿qué región gráfica corresponde a la intersección triple $A \cap B \cap C$?</legend>
      <label><input type="radio" name="q25" value="a"> A. Toda la zona sombreada dentro del círculo $A$.</label>
      <label><input type="radio" name="q25" value="b"> B. La región central común donde se solapan simultáneamente los tres círculos.</label>
      <label><input type="radio" name="q25" value="c"> C. La zona exterior a los tres círculos.</label>
      <label><input type="radio" name="q25" value="d"> D. El área pertenecientes a $A$ y $B$ pero excluyendo $C$.</label>
      <div class="question-feedback" id="feedback-q25">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 26 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Principio de Inclusión-Exclusión para 2 conjuntos: |A ∪ B| = |A| + |B| - |A ∩ B|.">
      <legend>26. ¿Cuál es la fórmula del Principio de Inclusión-Exclusión para la cardinalidad de la unión de dos conjuntos $|A \cup B|$?</legend>
      <label><input type="radio" name="q26" value="a"> A. $|A \cup B| = |A| + |B| - |A \cap B|$</label>
      <label><input type="radio" name="q26" value="b"> B. $|A \cup B| = |A| \cdot |B| - |A \cap B|$</label>
      <label><input type="radio" name="q26" value="c"> C. $|A \cup B| = |A| + |B| + |A \cap B|$</label>
      <label><input type="radio" name="q26" value="d"> D. $|A \cup B| = |A \setminus B| + |B \setminus A|$</label>
      <div class="question-feedback" id="feedback-q26">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 27 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Si A y B son disjuntos, no comparten elementos (A ∩ B = ∅), por lo que |A ∩ B| = 0 y |A ∪ B| = |A| + |B|.">
      <legend>27. Si dos conjuntos $A$ y $B$ son disjuntos ($A \cap B = \emptyset$), ¿cuál es el valor de su intersección y de la cardinalidad de su unión?</legend>
      <label><input type="radio" name="q27" value="a"> A. $A \cap B = U$ y $|A \cup B| = |A| \cdot |B|$</label>
      <label><input type="radio" name="q27" value="b"> B. $A \cap B = \{0\}$ y $|A \cup B| = 0$</label>
      <label><input type="radio" name="q27" value="c"> C. $A \cap B = A$ y $|A \cup B| = |B|$</label>
      <label><input type="radio" name="q27" value="d"> D. $A \cap B = \emptyset$ y $|A \cup B| = |A| + |B|$</label>
      <div class="question-feedback" id="feedback-q27">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 28 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Inclusión-Exclusión para 3 conjuntos: |A ∪ B ∪ C| = |A|+|B|+|C| - (|A∩B|+|A∩C|+|B∩C|) + |A∩B∩C|. Suma simples, resta dobles, suma triple.">
      <legend>28. En el Principio de Inclusión-Exclusión para 3 conjuntos, ¿por qué motivo se debe SUMAR al final la cardinalidad de la intersección triple $|A \cap B \cap C|$?</legend>
      <label><input type="radio" name="q28" value="a"> A. Porque nunca se había sumado en los términos individuales.</label>
      <label><input type="radio" name="q28" value="b"> B. Porque al restar las intersecciones dobles tres veces, los elementos comunes a los tres conjuntos fueron descontados por completo y deben ser reañadidos.</label>
      <label><input type="radio" name="q28" value="c"> C. Para convertir la unión en un producto cartesiano.</label>
      <label><input type="radio" name="q28" value="d"> D. Es una constante fija equivalente a 1.</label>
      <div class="question-feedback" id="feedback-q28">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 29 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La diferencia simétrica A Δ B incluye a los elementos que están en A o en B, pero NO en ambos: A Δ B = (A \ B) ∪ (B \ A) = (A ∪ B) \ (A ∩ B).">
      <legend>29. ¿Cómo se define la diferencia simétrica de dos conjuntos $A \Delta B$?</legend>
      <label><input type="radio" name="q29" value="a"> A. $A \Delta B = (A \setminus B) \cup (B \setminus A) = (A \cup B) \setminus (A \cap B)$</label>
      <label><input type="radio" name="q29" value="b"> B. $A \Delta B = A \cap B^c$</label>
      <label><input type="radio" name="q29" value="c"> C. $A \Delta B = (A \cap B)^c$</label>
      <label><input type="radio" name="q29" value="d"> D. $A \Delta B = A \times B$</label>
      <div class="question-feedback" id="feedback-q29">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 30 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El Criterio 1 (Aplicación correcta del Teorema Chino del Resto) tiene un peso del 40% de la nota total en la rúbrica oficial de la Tarea 2.">
      <legend>30. Según la rúbrica de evaluación oficial de la Tarea 2, ¿qué peso porcentual de la calificación global tiene la correcta resolución del ejercicio del Teorema Chino del Resto (Criterio 1)?</legend>
      <label><input type="radio" name="q30" value="a"> A. $15\%$</label>
      <label><input type="radio" name="q30" value="b"> B. $20\%$</label>
      <label><input type="radio" name="q30" value="c"> C. $40\%$</label>
      <label><input type="radio" name="q30" value="d"> D. $50\%$</label>
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
<summary>1. Respuesta correcta: B — Concepto de Congruencia Linear</summary>

Dos números enteros $a$ y $b$ son **congruentes módulo $m$** (escrito $a \equiv b \pmod m$) si su diferencia $a - b$ es un múltiplo entero de $m$.
\[
a \equiv b \pmod m \iff m \mid (a - b) \iff \exists k \in \mathbb{Z}, \, a - b = k \cdot m
\]
Esto equivale a que tanto $a$ como $b$ producen exactamente el mismo resto al ser divididos entre $m$.
</details>

<details class="solution">
<summary>2. Respuesta correcta: C — Hipótesis del Teorema Chino del Resto</summary>

El **Teorema Chino del Resto** (TCR) garantiza la existencia y unicidad de la solución de un sistema de congruencias:
\[
x \equiv a_i \pmod{m_i}, \quad i = 1, 2, \dots, k
\]
módulo $M = m_1 \cdot m_2 \cdot \dots \cdot m_k$ si y solo si los módulos son **coprimos dos a dos**:
\[
\operatorname{mcd}(m_i, m_j) = 1 \quad \forall i \neq j
\]
</details>

<details class="solution">
<summary>3. Respuesta correcta: A — Módulo total M</summary>

En la construcción analítica del TCR, el espacio de soluciones módulo el cual la solución es única es el **producto directo de los módulos individuales**:
\[
M = \prod_{i=1}^k m_i = m_1 \cdot m_2 \cdot \dots \cdot m_k
\]
</details>

<details class="solution">
<summary>4. Respuesta correcta: B — Construcción de M_i</summary>

Para cada congruencia $i$, la variable auxiliar $M_i$ se define dividiendo el módulo total $M$ entre el módulo individual $m_i$:
\[
M_i = \frac{M}{m_i} = \prod_{j \neq i} m_j
\]
Por construcción, $M_i$ es divisible por todos los $m_j$ para $j \neq i$, pero es coprimo con $m_i$.
</details>

<details class="solution">
<summary>5. Respuesta correcta: D — Inverso modular y_i</summary>

Dado que $\operatorname{mcd}(M_i, m_i) = 1$, por el Teorema de Bézout existe un único **inverso modular** $y_i \in \{0, 1, \dots, m_i - 1\}$ tal que:
\[
M_i \cdot y_i \equiv 1 \pmod{m_i}
\]
</details>

<details class="solution">
<summary>6. Respuesta correcta: A — Reconstrucción de la solución simultánea</summary>

La solución general del sistema de congruencias viene dada por la combinación lineal modular:
\[
x \equiv \sum_{i=1}^k a_i \cdot M_i \cdot y_i \pmod M
\]
Al evaluar $x$ módulo $m_j$, todos los términos con $i \neq j$ se anulan (pues $m_j \mid M_i$), quedando $a_j \cdot (M_j y_j) \equiv a_j \cdot 1 \equiv a_j \pmod{m_j}$.
</details>

<details class="solution">
<summary>7. Respuesta correcta: C — Resolución paso a paso del sistema del TCR</summary>

Dado el sistema:
1) $x \equiv 2 \pmod 3$
2) $x \equiv 3 \pmod 5$
3) $x \equiv 2 \pmod 7$

**Paso 1: Módulo total $M$**
\[
M = 3 \cdot 5 \cdot 7 = 105
\]

**Paso 2: Módulos parciales $M_i$**
- $M_1 = 105 / 3 = 35$
- $M_2 = 105 / 5 = 21$
- $M_3 = 105 / 7 = 15$

**Paso 3: Inversos modulares $y_i$**
- $35 y_1 \equiv 1 \pmod 3 \implies 2 y_1 \equiv 1 \pmod 3 \implies y_1 = 2$
- $21 y_2 \equiv 1 \pmod 5 \implies 1 y_2 \equiv 1 \pmod 5 \implies y_2 = 1$
- $15 y_3 \equiv 1 \pmod 7 \implies 1 y_3 \equiv 1 \pmod 7 \implies y_3 = 1$

**Paso 4: Solución $x$**
\[
x = (2 \cdot 35 \cdot 2) + (3 \cdot 21 \cdot 1) + (2 \cdot 15 \cdot 1) = 140 + 63 + 30 = 233
\]
Reduciendo módulo $105$: $233 = 2 \cdot 105 + 23$. Por lo tanto, $x \equiv 23 \pmod{105}$.
La menor solución entera positiva es **$23$**.
</details>

<details class="solution">
<summary>8. Respuesta correcta: B — Condición para el inverso modular</summary>

Un entero $a$ posee inverso multiplicativo módulo $m$ si y solo si $a$ y $m$ son **primos entre sí** ($\operatorname{mcd}(a, m) = 1$). Si $\operatorname{mcd}(a, m) = d > 1$, la ecuación $a z \equiv 1 \pmod m$ no tiene solución.
</details>

<details class="solution">
<summary>9. Respuesta correcta: A — Cálculo del inverso modular de 3 mod 7</summary>

Buscamos $y \in \{0, 1, \dots, 6\}$ tal que $3y \equiv 1 \pmod 7$:
- $3 \cdot 1 = 3 \equiv 3 \pmod 7$
- $3 \cdot 2 = 6 \equiv 6 \pmod 7$
- $3 \cdot 3 = 9 \equiv 2 \pmod 7$
- $3 \cdot 4 = 12 \equiv 5 \pmod 7$
- $3 \cdot 5 = 15 = 2 \cdot 7 + 1 \equiv 1 \pmod 7$

El inverso modular es **$5$**.
</details>

<details class="solution">
<summary>10. Respuesta correcta: C — Definición de conjuntos por Extensión</summary>

Un conjunto está especificado **por extensión** cuando se listan explícitamente todos sus elementos entre llaves, separados por comas. Ejemplo: $A = \{2, 3, 5, 7\}$.
</details>

<details class="solution">
<summary>11. Respuesta correcta: D — Definición de conjuntos por Comprensión</summary>

Un conjunto está especificado **por comprensión** cuando se define mediante un predicado o propiedad lógica que deben satisfacer todos sus miembros. Ejemplo: $A = \{x \in \mathbb{N} \mid x \text{ es primo y } x < 10\}$.
</legend>
</details>

<details class="solution">
<summary>12. Respuesta correcta: B — Determinación por Extensión</summary>

Universo $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$.
- $A = \{x \in U \mid x \text{ es par y primo}\}$: El único número par que también es primo es el $2$. Luego $A = \{2\}$.
- $B = \{x \in U \mid x^2 \le 16\}$: Los enteros positivos cuyos cuadrados son $\le 16$ son $1, 2, 3, 4$ ($1^2=1, 2^2=4, 3^2=9, 4^2=16$). Luego $B = \{1, 2, 3, 4\}$.
</details>

<details class="solution">
<summary>13. Respuesta correcta: A — Unión de Conjuntos</summary>

La **unión** de $A$ y $B$ ($A \cup B$) agrupa a todos los elementos que pertenecen al menos a uno de los dos conjuntos:
\[
A \cup B = \{x \in U \mid x \in A \lor x \in B\}
\]
</details>

<details class="solution">
<summary>14. Respuesta correcta: B — Intersección de Conjuntos</summary>

La **intersección** de $A$ y $B$ ($A \cap B$) reúne exclusivamente a los elementos comunes que pertenecen simultáneamente a ambos conjuntos:
\[
A \cap B = \{x \in U \mid x \in A \land x \in B\}
\]
</details>

<details class="solution">
<summary>15. Respuesta correcta: C — Diferencia de Conjuntos</summary>

La **diferencia** entre $A$ y $B$ ($A \setminus B$ o $A - B$) es el conjunto de elementos que están en $A$ pero no están en $B$:
\[
A \setminus B = \{x \in U \mid x \in A \land x \notin B\}
\]
</details>

<details class="solution">
<summary>16. Respuesta correcta: A — Complemento de un Conjunto</summary>

El **complemento** de $A$ ($A^c$) con respecto al universo $U$ es el conjunto formado por todos los elementos de $U$ que no pertenecen a $A$:
\[
A^c = U \setminus A = \{x \in U \mid x \notin A\}
\]
</details>

<details class="solution">
<summary>17. Respuesta correcta: D — Cálculo de la Diferencia A \ B</summary>

Dados $A = \{2, 3, 5, 7\}$ y $B = \{2, 4, 6, 8, 10\}$:
Para hallar $A \setminus B$, tomamos los elementos de $A$ y eliminamos aquellos que también están en $B$ ($2$ es el único elemento común):
\[
A \setminus B = \{3, 5, 7\}
\]
</details>

<details class="solution">
<summary>18. Respuesta correcta: B — Propiedad Distributiva (∩ sobre ∪)</summary>

La intersección se distribuye respecto a la unión según la identidad:
\[
A \cap (B \cup C) = (A \cap B) \cup (A \cap C)
\]
</details>

<details class="solution">
<summary>19. Respuesta correcta: A — Propiedad Distributiva (∪ sobre ∩)</summary>

La unión se distribuye respecto a la intersección según la identidad:
\[
A \cup (B \cap C) = (A \cup B) \cap (A \cup C)
\]
</details>

<details class="solution">
<summary>20. Respuesta correcta: C — Primera Ley de De Morgan</summary>

La primera **Ley de De Morgan** establece que el complemento de la unión de dos conjuntos es igual a la intersección de sus complementos:
\[
(A \cup B)^c = A^c \cap B^c
\]
</details>

<details class="solution">
<summary>21. Respuesta correcta: B — Producto Cartesiano</summary>

El **producto cartesiano** $A \times B$ es el conjunto de todos los pares ordenados $(a, b)$ tales que la primera componente $a$ pertenece a $A$ y la segunda componente $b$ pertenece a $B$:
\[
A \times B = \{(a, b) \mid a \in A \land b \in B\}
\]
</details>

<details class="solution">
<summary>22. Respuesta correcta: D — Cardinalidad del Producto Cartesiano</summary>

La cardinalidad (número de elementos) del producto cartesiano $A \times B$ de dos conjuntos finitos es el producto de las cardinalidades individuales:
\[
|A \times B| = |A| \cdot |B| = 3 \cdot 2 = 6
\]
</details>

<details class="solution">
<summary>23. Respuesta correcta: A — No conmutatividad del Producto Cartesiano</summary>

Dos pares ordenados $(a, b)$ y $(c, d)$ son iguales si y solo si $a = c$ y $b = d$. Como en general $(a, b) \neq (b, a)$ cuando $a \neq b$, los conjuntos de pares $A \times B$ y $B \times A$ contienen elementos distintos. Por ende, **$A \times B \neq B \times A$**.
</details>

<details class="solution">
<summary>24. Respuesta correcta: C — Regiones en Diagramas de Venn</summary>

Un Diagrama de Venn de $n$ conjuntos representados en posición general divide al plano universal en $2^n$ regiones disjuntas. Para $n = 3$, el número de regiones es $2^3 = 8$ (7 regiones interiores más la región exterior a todos los conjuntos).
</details>

<details class="solution">
<summary>25. Respuesta correcta: B — Región de la Intersección Triple</summary>

En la representación gráfica de tres conjuntos $A, B, C$, la región donde se solapan simultáneamente los tres círculos representa la **intersección triple** $A \cap B \cap C$ (los elementos compartidos por $A$, por $B$ y por $C$).
</details>

<details class="solution">
<summary>26. Respuesta correcta: A — Principio de Inclusión-Exclusión para 2 conjuntos</summary>

Al sumar las cardinalidades $|A| + |B|$, los elementos pertenecientes a la intersección $A \cap B$ son contados dos veces. Para corregir este exceso, se debe restar su cardinalidad:
\[
|A \cup B| = |A| + |B| - |A \cap B|
\]
</details>

<details class="solution">
<summary>27. Respuesta correcta: D — Conjuntos Disjuntos</summary>

Dos conjuntos $A$ y $B$ son **disjuntos** si no tienen ningún elemento en común, es decir, su intersección es el conjunto vacío $A \cap B = \emptyset$. En consecuencia, $|A \cap B| = 0$ y $|A \cup B| = |A| + |B|$.
</details>

<details class="solution">
<summary>28. Respuesta correcta: B — Explicación del Principio de Inclusión-Exclusión (3 conjuntos)</summary>

La fórmula para 3 conjuntos es:
\[
|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|
\]
Al restar las tres intersecciones dobles, los elementos pertenecientes a la intersección triple $A \cap B \cap C$ fueron sumados 3 veces inicialmente y restados 3 veces a continuación, quedando excluidos del cómputo. Por ello, es necesario **sumar $|A \cap B \cap C|$ una vez** para incluirlos correctamente.
</details>

<details class="solution">
<summary>29. Respuesta correcta: A — Diferencia Simétrica</summary>

La **diferencia simétrica** de $A$ y $B$ ($A \Delta B$) reúne a los elementos que pertenecen a $A$ o a $B$, pero no a ambos a la vez (unión exclusiva):
\[
A \Delta B = (A \setminus B) \cup (B \setminus A) = (A \cup B) \setminus (A \cap B)
\]
</details>

<details class="solution">
<summary>30. Respuesta correcta: C — Ponderación del Criterio 1 en la Tarea 2</summary>

En la rúbrica oficial asignada para la Tarea 2, el **Criterio 1** (Aplicación correcta del Teorema Chino del Resto) tiene un peso del **40%** de la nota total, siendo el apartado de mayor valor académico de la actividad.
</details>

---

## Chuleta final: conceptos clave para el examen de la Tarea 2

### 1. Aritmética Modular y Teorema Chino del Resto (TCR)

- **Congruencia:** $a \equiv b \pmod m \iff m \mid (a - b)$.
- **Inverso Modular:** Existe $z$ tal que $a \cdot z \equiv 1 \pmod m \iff \operatorname{mcd}(a, m) = 1$.
- **Algoritmo del TCR ($k$ ecuaciones):**
  1. $M = m_1 \cdot m_2 \cdot \dots \cdot m_k$ (con $\operatorname{mcd}(m_i, m_j) = 1$).
  2. $M_i = \frac{M}{m_i}$.
  3. Hallar $y_i$ tal que $M_i \cdot y_i \equiv 1 \pmod{m_i}$.
  4. Solución: $x \equiv \sum_{i=1}^k (a_i \cdot M_i \cdot y_i) \pmod M$.

### 2. Operaciones con Conjuntos

| Operación | Definición Formal |
|---|---|
| **Unión ($A \cup B$)** | $\{x \in U \mid x \in A \lor x \in B\}$ |
| **Intersección ($A \cap B$)** | $\{x \in U \mid x \in A \land x \in B\}$ |
| **Diferencia ($A \setminus B$)** | $\{x \in U \mid x \in A \land x \notin B\}$ |
| **Complemento ($A^c$)** | $\{x \in U \mid x \notin A\} = U \setminus A$ |
| **Diferencia Simétrica ($A \Delta B$)** | $(A \setminus B) \cup (B \setminus A) = (A \cup B) \setminus (A \cap B)$ |
| **Producto Cartesiano ($A \times B$)** | $\{(a, b) \mid a \in A \land b \in B\}$. Cardinalidad: $\|A \times B\| = \|A\| \cdot \|B\|$. |

### 3. Propiedades Leyes Algebraicas de Conjuntos

- **Distributivas:**
  - $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
  - $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
- **Leyes de De Morgan:**
  - $(A \cup B)^c = A^c \cap B^c$
  - $(A \cap B)^c = A^c \cup B^c$
- **Inclusión-Exclusión:**
  - $\|A \cup B\| = \|A\| + \|B\| - \|A \cap B\|$
  - $\|A \cup B \cup C\| = \|A\| + \|B\| + \|C\| - (\|A \cap B\| + \|A \cap C\| + \|B \cap C\|) + \|A \cap B \cap C\|$

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
    message.textContent = percent >= 90 ? "¡Excelente! Dominas perfectamente los conceptos de la Tarea 2." :
      percent >= 70 ? "¡Buen trabajo! Repasa los fallos cometidos para afianzar la puntuación máxima." :
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