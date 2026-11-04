---
title: Test Tarea 2.2 - Aritmética Modular, Teorema Chino del Resto y Teoría de Conjuntos
---

# Test Tarea 2.2: Teoría de Números, Aritmética Modular y Operaciones con Conjuntos

Este segundo test consta de **30 preguntas teóricas y prácticas completamente nuevas y diferenciadas**, diseñadas con la misma estructura y plantilla global que el resto del curso. Cubre en profundidad los contenidos de la Tarea 2: algoritmo extendido de Euclídes, inversos modulares, teoremas de la teoría de números (Fermat/Euler), resolución paso a paso del Teorema Chino del Resto (TCR), álgebra de conjuntos, propiedades de las operaciones (distributiva, asociativa, absorción), conjunto potencia, diferencia simétrica y representación en diagramas de Venn.

!!! info "Puntuación y Criterios de Examen"
    - **Preguntas 1 a 30:** 0,33 puntos por respuesta correcta (Total: **10 puntos**).
    - **Paso de respuesta única:** Selecciona la opción adecuada para cada pregunta y pulsa **Comprobar respuestas** para calcular tu nota final, ver tus aciertos/fallos y consultar la retroalimentación inmediata.

<div id="quiz-tarea2-v2" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 30 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La relación de congruencia a ≡ b (mod m) es una relación de equivalencia sobre Z, por lo que satisface las propiedades reflexiva, simétrica y transitiva.">
      <legend>1. ¿Qué tipo de relación matemática sobre el conjunto de los enteros $\mathbb{Z}$ define la congruencia módulo $m$ ($a \equiv b \pmod m$)?</legend>
      <label><input type="radio" name="q1" value="a"> A. Una relación de orden parcial strictly asimétrica.</label>
      <label><input type="radio" name="q1" value="b"> B. Una relación de equivalencia (reflexiva, simétrica y transitiva).</label>
      <label><input type="radio" name="q1" value="c"> C. Una función biyectiva no invertible.</label>
      <label><input type="radio" name="q1" value="d"> D. Una operación binaria no asociativa.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Por el Teorema de Bézout, existen enteros x, y tales que a·x + m·y = mcd(a, m). Si mcd(a, m) = 1, la ecuación a·x ≡ 1 (mod m) admite solución única en Z_m.">
      <legend>2. ¿Qué teorema de la teoría de números justifica algebraicamente la existencia del inverso modular $a^{-1} \pmod m$ cuando $\operatorname{mcd}(a, m) = 1$?</legend>
      <label><input type="radio" name="q2" value="a"> A. El Teorema Fundamental del Cálculo.</label>
      <label><input type="radio" name="q2" value="b"> B. La Ley de Reciprocidad Cuadrática de Gauss.</label>
      <label><input type="radio" name="q2" value="c"> C. La Identidad de Bézout ($a \cdot x + m \cdot y = \operatorname{mcd}(a, m)$).</label>
      <label><input type="radio" name="q2" value="d"> D. La Desigualdad de Cauchy-Schwarz.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El Algoritmo Extendido de Euclídes calcula eficazmente el mcd(a, m) y obtiene los coeficientes de Bézout x e y para determinar el inverso modular.">
      <legend>3. ¿Qué algoritmo sistemático se utiliza en la práctica computacional para hallar el inverso modular $y_i$ de $M_i$ módulo $m_i$?</legend>
      <label><input type="radio" name="q3" value="a"> A. El Algoritmo Extendido de Euclídes.</label>
      <label><input type="radio" name="q3" value="b"> B. La Criba de Eratóstenes.</label>
      <label><input type="radio" name="q3" value="c"> C. El Algoritmo de Eliminación de Gauss-Jordan.</label>
      <label><input type="radio" name="q3" value="d"> D. La regla de la cadena para derivadas.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Buscamos y en {0..10} tal que 5y ≡ 1 mod 11. Como 5 · 9 = 45 = 4 · 11 + 1 ≡ 1 mod 11, el inverso es 9.">
      <legend>4. ¿Cuál es el inverso modular de $5$ en $\mathbb{Z}_{11}$ (módulo $11$)?</legend>
      <label><input type="radio" name="q4" value="a"> A. $2$</label>
      <label><input type="radio" name="q4" value="b"> B. $4$</label>
      <label><input type="radio" name="q4" value="c"> C. $7$</label>
      <label><input type="radio" name="q4" value="d"> D. $9$</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Si el sistema de congruencias del TCR no fuera de módulos coprimos dos a dos, la solución podría no existir o no ser única módulo M = ∏ m_i.">
      <legend>5. ¿Qué ocurre si intentamos aplicar la fórmula estándar del TCR a un sistema donde dos módulos $m_1$ y $m_2$ no son coprimos ($\operatorname{mcd}(m_1, m_2) = d > 1$)?</legend>
      <label><input type="radio" name="q5" value="a"> A. La solución siempre existe y es única módulo $M = m_1 \cdot m_2$.</label>
      <label><input type="radio" name="q5" value="b"> B. La fórmula estándar falla porque $M_i$ y $m_i$ no serían coprimos y no existiría alguno de los inversos modulares $y_i$.</label>
      <label><input type="radio" name="q5" value="c"> C. El módulo total $M$ se calcula simplemente elevando al cuadrado la suma de módulos.</label>
      <label><input type="radio" name="q5" value="d"> D. Automáticamente el sistema se vuelve compatible indeterminado con infinitos parámetros en $\mathbb{R}$.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Para m_1=2, m_2=3, m_3=5: M = 2·3·5 = 30. M_1=15, M_2=10, M_3=6. Inversos: 15y_1≡1 mod 2 ⟹ 1y_1≡1 ⟹ y_1=1. 10y_2≡1 mod 3 ⟹ 1y_2≡1 ⟹ y_2=1. 6y_3≡1 mod 5 ⟹ 1y_3≡1 ⟹ y_3=1. Suma x = 1·15·1 + 2·10·1 + 3·6·1 = 15 + 20 + 18 = 53 ≡ 23 mod 30.">
      <legend>6. Dado el sistema: $x \equiv 1 \pmod 2$, $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$. ¿Cuál es la menor solución positiva $x$?</legend>
      <label><input type="radio" name="q6" value="a"> A. $x = 13$</label>
      <label><input type="radio" name="q6" value="b"> B. $x = 17$</label>
      <label><input type="radio" name="q6" value="c"> C. $x = 23$</label>
      <label><input type="radio" name="q6" value="d"> D. $x = 29$</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Cualquier otra solución x' del sistema es congruente con la solución particular x_0 módulo M: x' ≡ x_0 (mod M), formando la clase de congruencia x_0 + k·M para k ∈ Z.">
      <legend>7. Si $x_0$ es la menor solución positiva obtenida por el TCR para un módulo total $M$, ¿cuál es la forma de la solución general entera?</legend>
      <label><input type="radio" name="q7" value="a"> A. $x = x_0 + k \cdot M$, con $k \in \mathbb{Z}$.</label>
      <label><input type="radio" name="q7" value="b"> B. $x = x_0 \cdot M^k$, con $k \in \mathbb{N}$.</label>
      <label><input type="radio" name="q7" value="c"> C. $x = x_0 \pm \operatorname{mcd}(m_1, m_2)$.</label>
      <label><input type="radio" name="q7" value="d"> D. $x = \frac{x_0}{k \cdot M}$, con $k \neq 0$.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="La función totiente φ(p) para un número primo p vale φ(p) = p - 1, ya que todos los enteros entre 1 y p-1 son coprimos con p.">
      <legend>8. ¿Cuál es el valor de la función totiente de Euler $\phi(p)$ si $p$ es un número primo?</legend>
      <label><input type="radio" name="q8" value="a"> A. $\phi(p) = p$</label>
      <label><input type="radio" name="q8" value="b"> B. $\phi(p) = p + 1$</label>
      <label><input type="radio" name="q8" value="c"> C. $\phi(p) = p / 2$</label>
      <label><input type="radio" name="q8" value="d"> D. $\phi(p) = p - 1$</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El Pequeño Teorema de Fermat establece que si p es primo y mcd(a, p) = 1, entonces a^(p-1) ≡ 1 (mod p).">
      <legend>9. ¿Qué establece el Pequeño Teorema de Fermat para un número primo $p$ y un entero $a$ tal que $\operatorname{mcd}(a, p) = 1$?</legend>
      <label><input type="radio" name="q9" value="a"> A. $a^p \equiv 0 \pmod p$</label>
      <label><input type="radio" name="q9" value="b"> B. $a^{p-1} \equiv 1 \pmod p$</label>
      <label><input type="radio" name="q9" value="c"> C. $a+p \equiv 1 \pmod p$</label>
      <label><input type="radio" name="q9" value="d"> D. $a^{p+1} \equiv a^2 \pmod p$</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Por el Pequeño Teorema de Fermat, a^(p-1) ≡ 1 mod p ⟹ a · a^(p-2) ≡ 1 mod p, por lo que a^(p-2) es el inverso modular de a mod p.">
      <legend>10. Apoyándote en el Pequeño Teorema de Fermat, ¿cómo se puede expresar directamente el inverso modular de $a$ módulo un primo $p$?</legend>
      <label><input type="radio" name="q10" value="a"> A. $a^{-1} \equiv a^{p-2} \pmod p$</label>
      <label><input type="radio" name="q10" value="b"> B. $a^{-1} \equiv a^{p-1} \pmod p$</label>
      <label><input type="radio" name="q10" value="c"> C. $a^{-1} \equiv p - a^2 \pmod p$</label>
      <label><input type="radio" name="q10" value="d"> D. $a^{-1} \equiv a^{p} \pmod p$</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="En teoría de conjuntos formal, el axioma de extensión establece que dos conjuntos son idénticos si y solo si poseen exactamente los mismos elementos.">
      <legend>11. ¿Cuándo se considera que dos conjuntos $A$ y $B$ son estrictamente iguales ($A = B$)?</legend>
      <label><input type="radio" name="q11" value="a"> A. Cuando ambos conjuntos tienen el mismo número de elementos (misma cardinalidad).</label>
      <label><input type="radio" name="q11" value="b"> B. Cuando su intersección es el conjunto vacío.</label>
      <label><input type="radio" name="q11" value="c"> C. Cuando coinciden elemento a elemento, es decir, $A \subseteq B$ y $B \subseteq A$.</label>
      <label><input type="radio" name="q11" value="d"> D. Cuando el conjunto potencia de $A$ es mayor que el de $B$.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El conjunto potencia de un conjunto A con n elementos contiene 2^n subconjuntos. Para n = 3, |P(A)| = 2³ = 8 subconjuntos.">
      <legend>12. Si un conjunto $A$ tiene $3$ elementos ($|A| = 3$), ¿cuántos elementos (subconjuntos) tiene su conjunto potencia $\mathcal{P}(A)$?</legend>
      <label><input type="radio" name="q12" value="a"> A. $6$</label>
      <label><input type="radio" name="q12" value="b"> B. $8$</label>
      <label><input type="radio" name="q12" value="c"> C. $9$</label>
      <label><input type="radio" name="q12" value="d"> D. $16$</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="P(S) de S = {1, 2} incluye todos sus subconjuntos: ∅, los de 1 elemento ({1}, {2}) y el propio conjunto ({1, 2}). Total 2² = 4.">
      <legend>13. ¿Cuál de las siguientes opciones lista correctamente el conjunto potencia $\mathcal{P}(S)$ para $S = \{1, 2\}$?</legend>
      <label><input type="radio" name="q13" value="a"> A. $\mathcal{P}(S) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$</label>
      <label><input type="radio" name="q13" value="b"> B. $\mathcal{P}(S) = \{\{1\}, \{2\}\}$</label>
      <label><input type="radio" name="q13" value="c"> C. $\mathcal{P}(S) = \{(1, 1), (1, 2), (2, 1), (2, 2)\}$</label>
      <label><input type="radio" name="q13" value="d"> D. $\mathcal{P}(S) = \{\emptyset, 1, 2, \{1, 2\}\}$</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="U = {1,2,3,4,5,6}, A = {1,2,3}, B = {3,4,5}. A ∪ B = {1,2,3,4,5}. El complemento (A ∪ B)^c = U \ {1,2,3,4,5} = {6}.">
      <legend>14. Dado $U = \{1, 2, 3, 4, 5, 6\}$, $A = \{1, 2, 3\}$, $B = \{3, 4, 5\}$. ¿Cuál es el resultado del conjunto $(A \cup B)^c$?</legend>
      <label><input type="radio" name="q14" value="a"> A. $\{3\}$</label>
      <label><input type="radio" name="q14" value="b"> B. $\{1, 2, 4, 5, 6\}$</label>
      <label><input type="radio" name="q14" value="c"> C. $\emptyset$</label>
      <label><input type="radio" name="q14" value="d"> D. $\{6\}$</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Leyes de Absorción: 1) A ∪ (A ∩ B) = A; 2) A ∩ (A ∪ B) = A. Reducen la expresión directamente a A.">
      <legend>15. De acuerdo con la Ley de Absorción en álgebra de conjuntos, ¿a qué se simplifica la expresión $A \cup (A \cap B)$?</legend>
      <label><input type="radio" name="q15" value="a"> A. $A \cap B$</label>
      <label><input type="radio" name="q15" value="b"> B. $A$</label>
      <label><input type="radio" name="q15" value="c"> C. $B$</label>
      <label><input type="radio" name="q15" value="d"> D. $A \cup B$</label>
      <div class="question-feedback" id="feedback-q15">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 16 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La segunda Ley de De Morgan establece que el complemento de la intersección es la unión de los complementos: (A ∩ B)^c = A^c ∪ B^c.">
      <legend>16. Según las Leyes de De Morgan, ¿a qué es equivalente la expresión $(A \cap B)^c$?</legend>
      <label><input type="radio" name="q16" value="a"> A. $A^c \cap B^c$</label>
      <label><input type="radio" name="q16" value="b"> B. $A \setminus B$</label>
      <label><input type="radio" name="q16" value="c"> C. $A^c \cup B^c$</label>
      <label><input type="radio" name="q16" value="d"> D. $(A \cup B)^c$</label>
      <div class="question-feedback" id="feedback-q16">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 17 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La doble complementación (o ley de involución) devuelve el conjunto original: (A^c)^c = A.">
      <legend>17. ¿Cuál es el resultado de aplicar la complementación dos veces consecutivas $((A^c)^c)$ a un conjunto $A$?</legend>
      <label><input type="radio" name="q17" value="a"> A. $A$</label>
      <label><input type="radio" name="q17" value="b"> B. $A^c$</label>
      <label><input type="radio" name="q17" value="c"> C. $U$ (el universo)</label>
      <label><input type="radio" name="q17" value="d"> D. $\emptyset$ (el conjunto vacío)</label>
      <div class="question-feedback" id="feedback-q17">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 18 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="A \ B equivale a A ∩ B^c (elementos de A que están fuera de B). Por tanto (A \ B)^c = (A ∩ B^c)^c = A^c ∪ (B^c)^c = A^c ∪ B.">
      <legend>18. Expresa la diferencia $A \setminus B$ en términos de intersección y complemento.</legend>
      <label><input type="radio" name="q18" value="a"> A. $A \setminus B = A \cup B^c$</label>
      <label><input type="radio" name="q18" value="b"> B. $A \setminus B = A^c \cap B^c$</label>
      <label><input type="radio" name="q18" value="c"> C. $A \setminus B = (A \cap B)^c$</label>
      <label><input type="radio" name="q18" value="d"> D. $A \setminus B = A \cap B^c$</label>
      <div class="question-feedback" id="feedback-q18">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 19 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="A = {a, b}, B = {1, 2}. A × B = {(a,1), (a,2), (b,1), (b,2)}. Contiene 2 · 2 = 4 pares ordenados.">
      <legend>19. Sean $A = \{a, b\}$ y $B = \{1, 2\}$. ¿Cuál es el listado correcto del producto cartesiano $A \times B$?</legend>
      <label><input type="radio" name="q19" value="a"> A. $A \times B = \{(1, a), (1, b), (2, a), (2, b)\}$</label>
      <label><input type="radio" name="q19" value="b"> B. $A \times B = \{(a, 1), (a, 2), (b, 1), (b, 2)\}$</label>
      <label><input type="radio" name="q19" value="c"> C. $A \times B = \{a, b, 1, 2\}$</label>
      <label><input type="radio" name="q19" value="d"> D. $A \times B = \{(a, b), (1, 2)\}$</label>
      <div class="question-feedback" id="feedback-q19">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 20 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El producto cartesiano de cualquier conjunto A por el conjunto vacío ∅ da como resultado el conjunto vacío ∅.">
      <legend>20. ¿A qué es igual el producto cartesiano de un conjunto $A$ por el conjunto vacío ($A \times \emptyset$)?</legend>
      <label><input type="radio" name="q20" value="a"> A. $\emptyset$ (el conjunto vacío)</label>
      <label><input type="radio" name="q20" value="b"> B. $A$</label>
      <label><input type="radio" name="q20" value="c"> C. $\{(A, \emptyset)\}$</label>
      <label><input type="radio" name="q20" value="d"> D. $U$ (el universo)</label>
      <div class="question-feedback" id="feedback-q20">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 21 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La diferencia simétrica A Δ B es asociativa: (A Δ B) Δ C = A Δ (B Δ C) y conmutativa. Mide la paridad de pertenencia en las regiones del Venn.">
      <legend>21. ¿Cuál de las siguientes afirmaciones sobre la diferencia simétrica $A \Delta B$ es CORRECTA?</legend>
      <label><input type="radio" name="q21" value="a"> A. Es equivalente a la intersección $A \cap B$.</label>
      <label><input type="radio" name="q21" value="b"> B. No es conmutativa ($A \Delta B \neq B \Delta A$).</label>
      <label><input type="radio" name="q21" value="c"> C. Es asociativa: $(A \Delta B) \Delta C = A \Delta (B \Delta C)$.</label>
      <label><input type="radio" name="q21" value="d"> D. Siempre es igual al universo $U$.</label>
      <div class="question-feedback" id="feedback-q21">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 22 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La diferencia simétrica de un conjunto A consigo mismo elimina todos los elementos: A Δ A = (A \ A) ∪ (A \ A) = ∅ ∪ ∅ = ∅.">
      <legend>22. ¿Cuál es el resultado de la diferencia simétrica de un conjunto $A$ consigo mismo ($A \Delta A$)?</legend>
      <label><input type="radio" name="q22" value="a"> A. $A$</label>
      <label><input type="radio" name="q22" value="b"> B. $\emptyset$</label>
      <label><input type="radio" name="q22" value="c"> C. $A^c$</label>
      <label><input type="radio" name="q22" value="d"> D. $U$</label>
      <div class="question-feedback" id="feedback-q22">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 23 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="A Δ ∅ = (A \ ∅) ∪ (∅ \ A) = A ∪ ∅ = A. El conjunto vacío actúa como elemento neutro de la diferencia simétrica.">
      <legend>23. ¿Cuál es el resultado de la diferencia simétrica de un conjunto $A$ con el conjunto vacío ($A \Delta \emptyset$)?</legend>
      <label><input type="radio" name="q23" value="a"> A. $\emptyset$</label>
      <label><input type="radio" name="q23" value="b"> B. $A^c$</label>
      <label><input type="radio" name="q23" value="c"> C. $U$</label>
      <label><input type="radio" name="q23" value="d"> D. $A$</label>
      <div class="question-feedback" id="feedback-q23">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 24 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="|A ∪ B| = |A| + |B| - |A ∩ B| ⟹ 30 = 20 + 15 - |A ∩ B| ⟹ 30 = 35 - |A ∩ B| ⟹ |A ∩ B| = 5.">
      <legend>24. Si $|A| = 20$, $|B| = 15$ y $|A \cup B| = 30$, ¿cuántos elementos contiene la intersección $|A \cap B|$?</legend>
      <label><input type="radio" name="q24" value="a"> A. $5$</label>
      <label><input type="radio" name="q24" value="b"> B. $10$</label>
      <label><input type="radio" name="q24" value="c"> C. $35$</label>
      <label><input type="radio" name="q24" value="d"> D. $0$</label>
      <div class="question-feedback" id="feedback-q24">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 25 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="|A \ B| representa los elementos exclusivos de A, que se calculan restando de A la intersección: |A \ B| = |A| - |A ∩ B| = 20 - 5 = 15.">
      <legend>25. Siguiendo con los datos del ejercicio anterior ($|A| = 20, |B| = 15, |A \cap B| = 5$), ¿cuántos elementos tiene la diferencia exclusiva $|A \setminus B|$?</legend>
      <label><input type="radio" name="q25" value="a"> A. $20$</label>
      <label><input type="radio" name="q25" value="b"> B. $10$</label>
      <label><input type="radio" name="q25" value="c"> C. $15$</label>
      <label><input type="radio" name="q25" value="d"> D. $25$</label>
      <div class="question-feedback" id="feedback-q25">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 26 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="En un Diagrama de Venn de 3 conjuntos, la región A \ (B ∪ C) contiene a los elementos que están en A pero no pertenecen ni a B ni a C (exclusivos de A).">
      <legend>26. En un diagrama de Venn con 3 conjuntos $A$, $B$ y $C$, ¿qué describe geométricamente la región $A \setminus (B \cup C)$?</legend>
      <label><input type="radio" name="q26" value="a"> A. Los elementos que pertenecen a $A$ y a $B$, excluyendo $C$.</label>
      <label><input type="radio" name="q26" value="b"> B. La región de elementos puramente exclusivos del conjunto $A$ (sin solapamiento con $B$ ni con $C$).</label>
      <label><input type="radio" name="q26" value="c"> C. La zona exterior a todos los conjuntos.</label>
      <label><input type="radio" name="q26" value="d"> D. La intersección triple de los tres conjuntos.</label>
      <div class="question-feedback" id="feedback-q26">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 27 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Las Leyes de Idempotencia establecen que A ∪ A = A y A ∩ A = A. Unir o intersectar un conjunto consigo mismo no añade ni elimina elementos.">
      <legend>27. ¿Cómo se denominan las propiedades algebraicas $A \cup A = A$ y $A \cap A = A$?</legend>
      <label><input type="radio" name="q27" value="a"> A. Leyes de Absorción.</label>
      <label><input type="radio" name="q27" value="b"> B. Leyes de De Morgan.</label>
      <label><input type="radio" name="q27" value="c"> C. Propiedad Asociativa.</label>
      <label><input type="radio" name="q27" value="d"> D. Leyes de Idempotencia.</label>
      <div class="question-feedback" id="feedback-q27">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 28 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Demostración de igualdad de conjuntos: Para probar A = B se debe demostrar la doble inclusión, es decir, A ⊆ B (todo x ∈ A ⟹ x ∈ B) y B ⊆ A (todo x ∈ B ⟹ x ∈ A).">
      <legend>28. Para demostrar rigurosamente la igualdad entre dos expresiones de conjuntos $X = Y$ mediante lógica proposicional, ¿qué método de doble inclusión se debe utilizar?</legend>
      <label><input type="radio" name="q28" value="a"> A. Demostrar que $X \subseteq Y$ y simultáneamente $Y \subseteq X$.</label>
      <label><input type="radio" name="q28" value="b"> B. Demostrar que $|X| = |Y|$ únicamente.</label>
      <label><input type="radio" name="q28" value="c"> C. Comprobar un solo elemento genérico en $X$.</label>
      <label><input type="radio" name="q28" value="d"> D. Verificar que $X \cap Y = U$.</label>
      <div class="question-feedback" id="feedback-q28">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 29 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La representación de relaciones entre conjuntos mediante diagramas de Venn tiene asignado un peso del 10% en la rúbrica oficial (Criterio 3).">
      <legend>29. Según los criterios de evaluación de la Tarea 2, ¿qué peso porcentual de la calificación global tiene la representación gráfica en diagramas de Venn (Criterio 3)?</legend>
      <label><input type="radio" name="q29" value="a"> A. $5\%$</label>
      <label><input type="radio" name="q29" value="b"> B. $40\%$</label>
      <label><input type="radio" name="q29" value="c"> C. $10\%$</label>
      <label><input type="radio" name="q29" value="d"> D. $25\%$</label>
      <div class="question-feedback" id="feedback-q29">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 30 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Formato académico: La extensión máxima fijada en las pautas de elaboración de la Tarea 2 es de exactamente 5 páginas en formato Calibri 12 interlineado 1,5 (Criterio 5).">
      <legend>30. De acuerdo con las pautas formales de elaboración de la Tarea 2, ¿cuál es la extensión máxima permitida para el documento final?</legend>
      <label><input type="radio" name="q30" value="a"> A. $2$ páginas.</label>
      <label><input type="radio" name="q30" value="b"> B. $5$ páginas.</label>
      <label><input type="radio" name="q30" value="c"> C. $10$ páginas.</label>
      <label><input type="radio" name="q30" value="d"> D. Sin límite de páginas.</label>
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
<summary>1. Respuesta correcta: B — Congruencia como relación de equivalencia</summary>

La congruencia módulo $m$ satisface:
1. **Reflexiva:** $a \equiv a \pmod m$ porque $m \mid (a - a) = 0$.
2. **Simétrica:** Si $a \equiv b \pmod m$, entonces $b \equiv a \pmod m$.
3. **Transitiva:** Si $a \equiv b \pmod m$ y $b \equiv c \pmod m$, entonces $a \equiv c \pmod m$.

Por tanto, particiona $\mathbb{Z}$ en $m$ clases de equivalencia distintas.
</details>

<details class="solution">
<summary>2. Respuesta correcta: C — Identidad de Bézout</summary>

El **Teorema de Bézout** afirma que para dos enteros $a$ y $m$, existen coeficientes $x, y \in \mathbb{Z}$ tales que:
\[
a \cdot x + m \cdot y = \operatorname{mcd}(a, m)
\]
Si $\operatorname{mcd}(a, m) = 1$, reduciendo la ecuación módulo $m$ obtenemos $a \cdot x \equiv 1 \pmod m$, lo que demuestra que $x$ es el **inverso modular** de $a$ en $\mathbb{Z}_m$.
</details>

<details class="solution">
<summary>3. Respuesta correcta: A — Algoritmo Extendido de Euclídes</summary>

El **Algoritmo Extendido de Euclídes** realiza divisiones sucesivas para calcular $\operatorname{mcd}(a, m)$ y desanda los pasos expresando el mcd como combinación lineal $a x + m y = \operatorname{mcd}(a, m)$, obteniendo así el valor del inverso $x = a^{-1} \pmod m$.
</details>

<details class="solution">
<summary>4. Respuesta correcta: D — Inverso modular de 5 mod 11</summary>

Buscamos $y \in \{0, 1, \dots, 10\}$ tal que $5 y \equiv 1 \pmod{11}$:
- $5 \cdot 9 = 45 = 4 \cdot 11 + 1 \equiv 1 \pmod{11}$.

Por consiguiente, $5^{-1} \equiv 9 \pmod{11}$.
</details>

<details class="solution">
<summary>5. Respuesta correcta: B — Módulos no coprimos en el TCR</summary>

Si dos módulos $m_i$ y $m_j$ comparten un divisor común $d > 1$, la cantidad auxiliar $M_i = M / m_i$ también contendrá al factor $d$. En consecuencia, $\operatorname{mcd}(M_i, m_i) = d > 1$, impidiendo la existencia del inverso modular $y_i$ módulo $m_i$ y provocando el fallo del método analítico directo.
</details>

<details class="solution">
<summary>6. Respuesta correcta: C — Resolución de sistema de 3 congruencias</summary>

Sistema: $x \equiv 1 \pmod 2$, $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$.

1. **Módulo total:** $M = 2 \cdot 3 \cdot 5 = 30$.
2. **Módulos parciales:**
   - $M_1 = 30 / 2 = 15$
   - $M_2 = 30 / 3 = 10$
   - $M_3 = 30 / 5 = 6$
3. **Inversos modulares:**
   - $15 y_1 \equiv 1 \pmod 2 \implies 1 y_1 \equiv 1 \pmod 2 \implies y_1 = 1$.
   - $10 y_2 \equiv 1 \pmod 3 \implies 1 y_2 \equiv 1 \pmod 3 \implies y_2 = 1$.
   - $6 y_3 \equiv 1 \pmod 5 \implies 1 y_3 \equiv 1 \pmod 5 \implies y_3 = 1$.
4. **Construcción de $x$:**
   \[
   x = (1 \cdot 15 \cdot 1) + (2 \cdot 10 \cdot 1) + (3 \cdot 6 \cdot 1) = 15 + 20 + 18 = 53
   \]
5. **Reducción módulo 30:** $53 = 1 \cdot 30 + 23 \implies x \equiv 23 \pmod{30}$.
</details>

<details class="solution">
<summary>7. Respuesta correcta: A — Estructura de la solución general del TCR</summary>

Por el TCR, la solución es única módulo $M$. Todas las soluciones enteras congruentes vienen dadas por la clase de equivalencia:
\[
x \in [x_0] = \{x_0 + k \cdot M \mid k \in \mathbb{Z}\}
\]
</details>

<details class="solution">
<summary>8. Respuesta correcta: D — Función Totiente para números primos</summary>

La **función $\phi(n)$ de Euler** cuenta cuántos enteros $1 \le k \le n$ son coprimos con $n$. Si $p$ es un número primo, todos los números enteros menores que $p$ ($1, 2, \dots, p-1$) son primos con él, por lo que $\phi(p) = p - 1$.
</details>

<details class="solution">
<summary>9. Respuesta correcta: B — Pequeño Teorema de Fermat</summary>

Si $p$ es primo y $a$ no es divisible por $p$ ($\operatorname{mcd}(a, p) = 1$), el **Pequeño Teorema de Fermat** establece:
\[
a^{p-1} \equiv 1 \pmod p
\]
Multiplicando por $a$ en ambos miembros se obtiene la forma equivalente $a^p \equiv a \pmod p$.
</details>

<details class="solution">
<summary>10. Respuesta correcta: A — Cálculo del inverso modular con Fermat</summary>

Reescribiendo el Pequeño Teorema de Fermat:
\[
a^{p-1} \equiv 1 \pmod p \implies a \cdot \left(a^{p-2}\right) \equiv 1 \pmod p
\]
Por definición de inverso modular, $a^{-1} \equiv a^{p-2} \pmod p$.
</details>

<details class="solution">
<summary>11. Respuesta correcta: C — Axioma de Extensión</summary>

En lógica formal de conjuntos, dos conjuntos $A$ y $B$ son iguales ($A = B$) si y solo si poseen exactamente los mismos elementos:
\[
A = B \iff (\forall x, x \in A \iff x \in B) \iff A \subseteq B \land B \subseteq A
\]
</details>

<details class="solution">
<summary>12. Respuesta correcta: B — Cardinalidad del conjunto potencia</summary>

El conjunto potencia $\mathcal{P}(A)$ es el conjunto formado por todos los subconjuntos posibles de $A$. Para un conjunto con $|A| = n$ elementos:
\[
|\mathcal{P}(A)| = 2^n
\]
Si $n = 3$, $|\mathcal{P}(A)| = 2^3 = 8$ subconjuntos.
</details>

<details class="solution">
<summary>13. Respuesta correcta: A — Construcción de P(S)</summary>

Para $S = \{1, 2\}$ ($n = 2$ elementos, luego $2^2 = 4$ subconjuntos):
- Subconjunto de 0 elementos: $\emptyset$
- Subconjuntos de 1 elemento: $\{1\}, \{2\}$
- Subconjunto de 2 elementos: $\{1, 2\}$

Luego $\mathcal{P}(S) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$.
</details>

<details class="solution">
<summary>14. Respuesta correcta: D — Cálculo del complemento de la unión</summary>

Dados $U = \{1, 2, 3, 4, 5, 6\}$, $A = \{1, 2, 3\}$, $B = \{3, 4, 5\}$:
1. $A \cup B = \{1, 2, 3, 4, 5\}$.
2. $(A \cup B)^c = U \setminus (A \cup B) = \{1, 2, 3, 4, 5, 6\} \setminus \{1, 2, 3, 4, 5\} = \{6\}$.
</details>

<details class="solution">
<summary>15. Respuesta correcta: B — Ley de Absorción</summary>

Las **Leyes de Absorción** simplifican expresiones donde se combinan la unión y la intersección con un mismo conjunto:
\[
A \cup (A \cap B) = A \quad \text{y} \quad A \cap (A \cup B) = A
\]
</details>

<details class="solution">
<summary>16. Respuesta correcta: C — Segunda Ley de De Morgan</summary>

La segunda **Ley de De Morgan** establece que el complemento de la intersección es la unión de los complementos:
\[
(A \cap B)^c = A^c \cup B^c
\]
</details>

<details class="solution">
<summary>17. Respuesta correcta: A — Ley de Involución</summary>

La ley de involución establece que el complemento del complemento de un conjunto $A$ recupera exactamente el conjunto $A$ original:
\[
(A^c)^c = A
\]
</details>

<details class="solution">
<summary>18. Respuesta correcta: D — Expresión de la diferencia mediante complemento</summary>

La diferencia de conjuntos $A \setminus B$ se define de forma equivalente como la intersección de $A$ con el complemento de $B$:
\[
A \setminus B = A \cap B^c
\]
</details>

<details class="solution">
<summary>19. Respuesta correcta: B — Listado de A × B</summary>

Para $A = \{a, b\}$ y $B = \{1, 2\}$:
Tomando cada elemento de $A$ como primera componente y cada elemento de $B$ como segunda componente:
\[
A \times B = \{(a, 1), (a, 2), (b, 1), (b, 2)\}
\]
</details>

<details class="solution">
<summary>20. Respuesta correcta: A — Producto cartesiano con conjunto vacío</summary>

Por definición, $A \times \emptyset = \{(a, b) \mid a \in A \land b \in \emptyset\}$. Como no existe ningún elemento $b \in \emptyset$, no se puede formar ningún par ordenado. Por lo tanto, $A \times \emptyset = \emptyset$.
</details>

<details class="solution">
<summary>21. Respuesta correcta: C — Asociatividad de la diferencia simétrica</summary>

La diferencia simétrica posee la propiedad de **asociatividad**:
\[
(A \Delta B) \Delta C = A \Delta (B \Delta C)
\]
Esta propiedad permite definir diferencias simétricas múltiples sin necesidad de paréntesis.
</details>

<details class="solution">
<summary>22. Respuesta correcta: B — Diferencia simétrica A Δ A</summary>

Aplicando la definición $A \Delta A = (A \setminus A) \cup (A \setminus A)$:
Como $A \setminus A = \emptyset$, tenemos $\emptyset \cup \emptyset = \emptyset$.
</details>

<details class="solution">
<summary>23. Respuesta correcta: D — Elemento neutro de la diferencia simétrica</summary>

Aplicando la definición $A \Delta \emptyset = (A \setminus \emptyset) \cup (\emptyset \setminus A)$:
Como $A \setminus \emptyset = A$ y $\emptyset \setminus A = \emptyset$, tenemos $A \cup \emptyset = A$.
Por lo tanto, $\emptyset$ es el **elemento neutro** de la diferencia simétrica.
</details>

<details class="solution">
<summary>24. Respuesta correcta: A — Cálculo de |A ∩ B| mediante Inclusión-Exclusión</summary>

Sustituyendo en la fórmula $|A \cup B| = |A| + |B| - |A \cap B|$:
\[
30 = 20 + 15 - |A \cap B| \implies 30 = 35 - |A \cap B| \implies |A \cap B| = 35 - 30 = 5
\]
</details>

<details class="solution">
<summary>25. Respuesta correcta: C — Cardinalidad de la diferencia exclusive</summary>

La cardinalidad de la diferencia $A \setminus B$ es el número de elementos de $A$ quitando los elementos comunes:
\[
|A \setminus B| = |A| - |A \cap B| = 20 - 5 = 15
\]
</details>

<details class="solution">
<summary>26. Respuesta correcta: B — Región exclusiva en diagramas de Venn</summary>

La expresión $A \setminus (B \cup C)$ resta de $A$ todos los elementos que están en $B$ o en $C$, dejando aislada la región gráfica formada únicamente por los elementos **exclusivos de $A$**.
</details>

<details class="solution">
<summary>27. Respuesta correcta: D — Leyes de Idempotencia</summary>

Las **Leyes de Idempotencia** indican que operar un conjunto consigo mismo mediante la unión o la intersección no modifica el conjunto:
\[
A \cup A = A \quad \text{y} \quad A \cap A = A
\]
</details>

<details class="solution">
<summary>28. Respuesta correcta: A — Doble inclusión para probar la igualdad</summary>

En teoría de conjuntos, la forma matemática estándar de probar que dos conjuntos son iguales ($X = Y$) consiste en demostrar la **doble inclusión**:
1. Proveer que $X \subseteq Y$ (si $x \in X \implies x \in Y$).
2. Proveer que $Y \subseteq X$ (si $y \in Y \implies y \in X$).
</details>

<details class="solution">
<summary>29. Respuesta correcta: C — Ponderación del Criterio 3 de la Tarea 2</summary>

En la rúbrica oficial de la Tarea 2, el **Criterio 3** (Representación gráfica en el diagrama de Venn) tiene asignado un peso del **10%** de la calificación global.
</details>

<details class="solution">
<summary>30. Respuesta correcta: B — Extensión máxima permitida</summary>

Las pautas de elaboración fijan una extensión máxima de **5 páginas** en formato Calibri 12, interlineado 1,5. Cumplir este límite y la claridad formal de presentación equivale al 20% de la nota (Criterio 5).
</details>

---

## Chuleta final: fórmulas y leyes avanzadas para la Tarea 2

### 1. Álgebra de Conjuntos (Leyes fundamentales)

- **Leyes de De Morgan:**
  - $(A \cup B)^c = A^c \cap B^c$
  - $(A \cap B)^c = A^c \cup B^c$
- **Leyes de Absorción:**
  - $A \cup (A \cap B) = A$
  - $A \cap (A \cup B) = A$
- **Leyes Distributivas:**
  - $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
  - $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
- **Involución y Complemento:**
  - $(A^c)^c = A$
  - $A \setminus B = A \cap B^c$
  - $A \Delta B = (A \setminus B) \cup (B \setminus A)$

### 2. Conjunto Potencia y Producto Cartesiano

- **Conjunto Potencia $\mathcal{P}(A)$:** $|\mathcal{P}(A)| = 2^{|A|}$.
- **Producto Cartesiano $A \times B$:** $|A \times B| = |A| \cdot |B|$. $A \times \emptyset = \emptyset$.

### 3. Aritmética Modular y Teoremas Clave

- **Inverso Modular con Fermat:** Si $p$ es primo y $\operatorname{mcd}(a, p) = 1$, $a^{-1} \equiv a^{p-2} \pmod p$.
- **Algoritmo de Bézout:** $a \cdot x + m \cdot y = 1 \implies x = a^{-1} \pmod m$.
- **Teorema Chino del Resto:**
  - $M = \prod m_i$
  - $M_i = M / m_i$
  - $M_i \cdot y_i \equiv 1 \pmod{m_i}$
  - $x \equiv \sum a_i M_i y_i \pmod M$

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