---
title: Test Tema 10 - Relaciones y árboles
---

# Test Tema 10: Relaciones y árboles

Este test está basado en las 15 preguntas del cuestionario del tema. Tiene **una sola respuesta correcta por pregunta**. Selecciona tus respuestas y pulsa **Comprobar respuestas** para conocer tu nota, ver la explicación rápida de cada pregunta y consultar al final las soluciones explicadas paso a paso.

!!! info "Criterio de puntuación"
    Las preguntas 1–10 valen **0,70 puntos** cada una y las preguntas 11–15 valen **0,60 puntos** cada una. La puntuación máxima es **9,00 puntos**.

!!! tip "Cómo estudiar"
    Haz primero el test sin mirar las soluciones. Al corregirlo, lee la **explicación rápida** de cada pregunta y, si necesitas profundizar, despliega la **explicación detallada paso a paso** al final de la página.

<div id="quiz-tema10" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Una relación R en A es reflexiva si todo elemento se relaciona consigo mismo ((a, a) ∈ R para todo a ∈ A), reflejándose con unos en toda la diagonal principal de su matriz.">
      <legend>1. ¿Cuál de las siguientes afirmaciones describe correctamente una propiedad de una relación reflexiva?</legend>
      <label><input type="radio" name="q1" value="a"> A. Una relación reflexiva es una relación en la que cada par de elementos distintos está relacionado en ambas direcciones.</label>
      <label><input type="radio" name="q1" value="b"> B. Una relación reflexiva es una relación en la que cada elemento está relacionado consigo mismo.</label>
      <label><input type="radio" name="q1" value="c"> C. Una relación reflexiva es una relación que no tiene ciclos.</label>
      <label><input type="radio" name="q1" value="d"> D. Una relación reflexiva es una relación en la que no hay elementos relacionados.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La simetría garantiza la reversibilidad lógica: la presencia de un par (a, b) en la relación exige la presencia del par inverso (b, a).">
      <legend>2. ¿Qué es una relación simétrica?</legend>
      <label><input type="radio" name="q2" value="a"> A. Una relación en la que (a,b)∈R implica que (b,a)∈R.</label>
      <label><input type="radio" name="q2" value="b"> B. Una relación en la que (a,b)∈R implica que (a,a)∈R.</label>
      <label><input type="radio" name="q2" value="c"> C. Una relación en la que (a,a)∈R para todo a∈A.</label>
      <label><input type="radio" name="q2" value="d"> D. Una relación en la que no existen pares de elementos relacionados.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El recorrido en preorden procesa primero el nodo Raíz (R) y posteriormente sus subárboles Izquierdo (I) y Derecho (D) en esquema RID.">
      <legend>3. ¿Cuál es el recorrido en preorden de un árbol binario?</legend>
      <label><input type="radio" name="q3" value="a"> A. Recorrer la raíz, luego el subárbol izquierdo y finalmente el subárbol derecho.</label>
      <label><input type="radio" name="q3" value="b"> B. Recorrer primero los nodos hoja.</label>
      <label><input type="radio" name="q3" value="c"> C. Recorrer la raíz, luego el subárbol derecho y finalmente el subárbol izquierdo.</label>
      <label><input type="radio" name="q3" value="d"> D. Recorrer primero los nodos internos.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El recorrido en inorden procesa primero el subárbol Izquierdo (I), después la Raíz (R) y finalmente el subárbol Derecho (D) en esquema IRD.">
      <legend>4. ¿Cuál es el recorrido en inorden de un árbol binario?</legend>
      <label><input type="radio" name="q4" value="a"> A. Recorrer el subárbol izquierdo, luego la raíz y finalmente el subárbol derecho.</label>
      <label><input type="radio" name="q4" value="b"> B. Recorrer la raíz, luego el subárbol izquierdo y finalmente el subárbol derecho.</label>
      <label><input type="radio" name="q4" value="c"> C. Recorrer la raíz, luego el subárbol derecho y finalmente el subárbol izquierdo.</label>
      <label><input type="radio" name="q4" value="d"> D. Recorrer primero los nodos hoja.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El recorrido en posorden procesa primero los subárboles Izquierdo (I) y Derecho (D) antes de procesar el nodo Raíz (R) en esquema IDR.">
      <legend>5. ¿Cuál es el recorrido en posorden de un árbol binario?</legend>
      <label><input type="radio" name="q5" value="a"> A. Recorrer el subárbol izquierdo, luego el subárbol derecho y finalmente la raíz.</label>
      <label><input type="radio" name="q5" value="b"> B. Recorrer la raíz, luego el subárbol izquierdo y finalmente el subárbol derecho.</label>
      <label><input type="radio" name="q5" value="c"> C. Recorrer el subárbol derecho, luego el subárbol izquierdo y finalmente la raíz.</label>
      <label><input type="radio" name="q5" value="d"> D. Recorrer primero los nodos internos.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="El recorrido en amplitud (BFS) visita los nodos nivel por nivel de superior a inferior, procesando de izquierda a derecha cada cota de profundidad.">
      <legend>6. ¿Cuál de los siguientes recorridos es un recorrido de amplitud?</legend>
      <label><input type="radio" name="q6" value="a"> A. Recorrer cada nivel del árbol de izquierda a derecha, comenzando por la raíz.</label>
      <label><input type="radio" name="q6" value="b"> B. Recorrer cada nivel del árbol de derecha a izquierda, comenzando por la raíz.</label>
      <label><input type="radio" name="q6" value="c"> C. Recorrer primero los nodos hoja y luego los nodos internos.</label>
      <label><input type="radio" name="q6" value="d"> D. Recorrer la raíz, luego el subárbol izquierdo y finalmente el subárbol derecho.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La transitividad encadena relaciones: si a se relaciona con b y b con c, entonces obligatoriamente a debe relacionarse con c ((a, b) ∈ R ∧ (b, c) ∈ R ⇒ (a, c) ∈ R).">
      <legend>7. ¿Cuál de las siguientes afirmaciones describe correctamente una relación transitiva?</legend>
      <label><input type="radio" name="q7" value="a"> A. Si (a,b)∈R y (b,c)∈R, entonces (a,c)∈R.</label>
      <label><input type="radio" name="q7" value="b"> B. Si (a,b)∈R, entonces (b,a)∈R.</label>
      <label><input type="radio" name="q7" value="c"> C. Si (a,a)∈R para todo a∈A.</label>
      <label><input type="radio" name="q7" value="d"> D. Si (a,b)∈R para todo a,b∈A.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Una relación de equivalencia exige reflexividad, simetría y transitividad. La antisimetría es propia de las relaciones de orden, no de las de equivalencia.">
      <legend>8. ¿Cuál de las siguientes propiedades no es necesaria para que una relación sea de equivalencia?</legend>
      <label><input type="radio" name="q8" value="a"> A. Reflexividad.</label>
      <label><input type="radio" name="q8" value="b"> B. Simetría.</label>
      <label><input type="radio" name="q8" value="c"> C. Transitividad.</label>
      <label><input type="radio" name="q8" value="d"> D. Antisimetría.</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Una relación es antisimétrica si la única forma de que exista relación en ambos sentidos ((a, b) ∈ R y (b, a) ∈ R) es que ambos elementos sean el mismo (a = b).">
      <legend>9. ¿Qué es una relación antisimétrica?</legend>
      <label><input type="radio" name="q9" value="a"> A. Una relación en la que (a,b)∈R y (b,a)∈R implican que a=b.</label>
      <label><input type="radio" name="q9" value="b"> B. Una relación en la que (a,b)∈R implica que (b,a)∈R.</label>
      <label><input type="radio" name="q9" value="c"> C. Una relación en la que (a,a)∈R para todo a∈A.</label>
      <label><input type="radio" name="q9" value="d"> D. Una relación en la que no existen pares de elementos relacionados.</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Los árboles se aplican extensamente en índices de BBDD (Árboles B/B+), compresión (Árboles de Huffman) y representación sintáctica (Árboles de Expresión).">
      <legend>10. ¿Cuál de las siguientes aplicaciones utiliza árboles en informática?</legend>
      <label><input type="radio" name="q10" value="a"> A. Búsqueda en bases de datos.</label>
      <label><input type="radio" name="q10" value="b"> B. Compresión de datos.</label>
      <label><input type="radio" name="q10" value="c"> C. Representación de expresiones algebraicas.</label>
      <label><input type="radio" name="q10" value="d"> D. Todas las anteriores.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un BST mantiene ordenados sus elementos (menores a la izquierda, mayores a la derecha), lo que facilita búsquedas y ordenaciones eficientes.">
      <legend>11. ¿Cómo se utiliza un árbol binario de búsqueda (BST) en la informática?</legend>
      <label><input type="radio" name="q11" value="a"> A. Para ordenar elementos de manera eficiente.</label>
      <label><input type="radio" name="q11" value="b"> B. Para almacenar datos en un formato comprimido.</label>
      <label><input type="radio" name="q11" value="c"> C. Para realizar cálculos matemáticos complejos.</label>
      <label><input type="radio" name="q11" value="d"> D. Para representar relaciones jerárquicas simples.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Los árboles AVL son árboles de búsqueda autoequilibrados que mantienen acotada la diferencia de altura de sus subárboles (factor de equilibrio ∈ {-1, 0, 1}), garantizando complejidad O(log n).">
      <legend>12. ¿Cuál es una ventaja de utilizar un árbol AVL sobre un árbol binario de búsqueda estándar?</legend>
      <label><input type="radio" name="q12" value="a"> A. Los árboles AVL permiten ciclos.</label>
      <label><input type="radio" name="q12" value="b"> B. Los árboles AVL son más simples de implementar.</label>
      <label><input type="radio" name="q12" value="c"> C. Los árboles AVL mantienen un equilibrio que asegura tiempos de búsqueda eficientes.</label>
      <label><input type="radio" name="q12" value="d"> D. Los árboles AVL no requieren equilibrio.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="En un árbol de expresión, los operadores (+, -, *, /) se sitúan en los nodos internos, mientras que los operandos (variables o constantes) constituyen las hojas.">
      <legend>13. ¿Cómo se utiliza un árbol de expresión en la evaluación de expresiones algebraicas?</legend>
      <label><input type="radio" name="q13" value="a"> A. Los nodos representan operaciones y los hijos representan operandos.</label>
      <label><input type="radio" name="q13" value="b"> B. Los nodos representan operandos y los hijos representan operaciones.</label>
      <label><input type="radio" name="q13" value="c"> C. Los nodos y los hijos representan ciclos.</label>
      <label><input type="radio" name="q13" value="d"> D. Los nodos y los hijos representan relaciones reflexivas.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un árbol de decisión evalúa pruebas condicionales en los nodos internos y asigna etiquetas de clasificación o valores predichos en sus hojas.">
      <legend>14. ¿Cuál es una aplicación de los árboles de decisión?</legend>
      <label><input type="radio" name="q14" value="a"> A. Para tomar decisiones basadas en datos mediante una estructura jerárquica de condiciones.</label>
      <label><input type="radio" name="q14" value="b"> B. Para representar datos en un formato comprimido.</label>
      <label><input type="radio" name="q14" value="c"> C. Para realizar cálculos matemáticos complejos.</label>
      <label><input type="radio" name="q14" value="d"> D. Para buscar datos en un formato desordenado.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Siguiendo la regla de Inorden (Izquierda-Raíz-Derecha) sobre la estructura habitual (Raíz A; subárbol izq B con hijos D, E; subárbol der C con hijo F), el recorrido resulta D, B, E, A, C, F.">
      <legend>15. Dado el árbol binario estándar del tema, ¿cuál es su recorrido en inorden?</legend>
      <label><input type="radio" name="q15" value="a"> A. D, B, E, A, C, F.</label>
      <label><input type="radio" name="q15" value="b"> B. A, B, D, E, C, F.</label>
      <label><input type="radio" name="q15" value="c"> C. D, E, B, A, F, C.</label>
      <label><input type="radio" name="q15" value="d"> D. A, B, C, D, E, F.</label>
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
<summary>1. Respuesta correcta: B — Definición de Relación Reflexiva</summary>

Una relación binaria $R$ sobre un conjunto $A$ es **reflexiva** si todos y cada uno de los elementos de $A$ están relacionados consigo mismos:
\[
\forall a \in A, \quad (a, a) \in R
\]
**Propiedad matricial:** Su matriz booleana asociada $M_R$ contiene exclusivamente $1$s en la diagonal principal ($M_{ii} = 1$).
</details>

<details class="solution">
<summary>2. Respuesta correcta: A — Definición de Relación Simétrica</summary>

Una relación $R$ sobre un conjunto $A$ es **simétrica** si la relación es reversible para cualquier par de elementos:
\[
\forall a, b \in A, \quad (a, b) \in R \implies (b, a) \in R
\]
**Propiedad matricial:** La matriz booleana $M_R$ es traspuesta de sí misma ($M_R = M_R^T$).
</details>

<details class="solution">
<summary>3. Respuesta correcta: A — Recorrido en Preorden (RID)</summary>

El recorrido en **Preorden** es un algoritmo de exploración en profundidad (DFS) para árboles binarios que sigue la secuencia **RID**:
1. Visitar la **Raíz** ($R$).
2. Recorrer el subárbol **Izquierdo** ($I$) en preorden.
3. Recorrer el subárbol **Derecho** ($D$) en preorden.
</details>

<details class="solution">
<summary>4. Respuesta correcta: A — Recorrido en Inorden (IRD)</summary>

El recorrido en **Inorden** explora el árbol binario siguiendo la regla **IRD**:
1. Recorrer el subárbol **Izquierdo** ($I$) en inorden.
2. Visitar la **Raíz** ($R$).
3. Recorrer el subárbol **Derecho** ($D$) en inorden.

*Aplicación:* En un Árbol Binario de Búsqueda (BST), el recorrido en inorden procesa los elementos en **orden estrictamente creciente**.
</details>

<details class="solution">
<summary>5. Respuesta correcta: A — Recorrido en Posorden (IDR)</summary>

El recorrido en **Posorden** explora el árbol binario según el esquema **IDR**:
1. Recorrer el subárbol **Izquierdo** ($I$) en posorden.
2. Recorrer el subárbol **Derecho** ($D$) en posorden.
3. Visitar la **Raíz** ($R$).

*Aplicación:* Es el orden ideal para liberar la memoria de un árbol o evaluar expresiones algebraicas en notación postfija (Polaca Inversa).
</details>

<details class="solution">
<summary>6. Respuesta correcta: A — Recorrido en Amplitud (BFS)</summary>

El recorrido en **Amplitud** (o BFS - Breadth-First Search):
- Explora el árbol **por niveles**, comenzando en el nivel 0 (raíz).
- Procesa todos los nodos pertenecientes a un nivel de izquierda a derecha antes de descender al siguiente nivel.
- Para su implementación en código se utiliza típicamente una estructura de datos tipo **Cola (FIFO)**.
</details>

<details class="solution">
<summary>7. Respuesta correcta: A — Definición de Relación Transitiva</summary>

Una relación $R$ sobre $A$ es **transitiva** si el encadenamiento de dos relaciones exige la existencia directa del atajo:
\[
\forall a, b, c \in A, \quad ((a, b) \in R \land (b, c) \in R) \implies (a, c) \in R
\]
</details>

<details class="solution">
<summary>8. Respuesta correcta: D — Propiedades para la Relación de Equivalencia</summary>

Una relación $R$ es de **equivalencia** si cumple simultáneamente:
1. **Reflexiva**
2. **Simétrica**
3. **Transitiva**

La **antisimetría** es una propiedad requerida para las **relaciones de orden** (parcial o total), no para las de equivalencia.
</details>

<details class="solution">
<summary>9. Respuesta correcta: A — Definición de Relación Antisimétrica</summary>

Una relación $R$ sobre $A$ es **antisimétrica** si no permite relaciones bidireccionales entre elementos distintos:
\[
\forall a, b \in A, \quad ((a, b) \in R \land (b, a) \in R) \implies a = b
\]
Es decir, si $a \neq b$, nunca pueden existir simultáneamente $(a, b) \in R$ y $(b, a) \in R$.
</details>

<details class="solution">
<summary>10. Respuesta correcta: D — Aplicaciones de Árboles en Informática</summary>

Los árboles son estructuras de datos no lineales fundamentales empleadas en:
- **Bases de datos:** B-Trees y B+Trees para la indexación y optimización de búsquedas en disco.
- **Compresión de datos:** Árboles de Huffman para codificación de longitud variable sin prefijo.
- **Compiladores y cálculo:** Árboles de expresión sintáctica abstracta (AST) para parser y compilación.
</details>

<details class="solution">
<summary>11. Respuesta correcta: A — Árbol Binario de Búsqueda (BST)</summary>

Un **BST** (Binary Search Tree) es un árbol binario estructurado según la propiedad de orden:
- Para cualquier nodo $x$, las claves de su subárbol izquierdo son menor que su clave ($\text{clave}(izq) < \text{clave}(x)$).
- Las claves de su subárbol derecho son mayor que su clave ($\text{clave}(der) > \text{clave}(x)$).

Esto permite buscar, insertar y eliminar elementos en tiempo $O(h)$, donde $h$ es la altura del árbol.
</details>

<details class="solution">
<summary>12. Respuesta correcta: C — Ventajas de los Árboles AVL</summary>

Un **árbol AVL** (Adelson-Velsky y Landis) es un BST autoequilibrado donde:
- Para cada nodo, la diferencia entre la altura del subárbol izquierdo y la del subárbol derecho (factor de equilibrio) es como máximo $1$ (sólo puede ser $-1, 0, 1$).
- Al realizar inserciones o borrados, si se rompe el equilibrio se realizan **rotaciones de nodos**.
- Garantiza una altura óptima de $h = O(\log n)$, evitando la degradación a listas enlazadas de los BST estándar.
</details>

<details class="solution">
<summary>13. Respuesta correcta: A — Árboles de Expresión</summary>

En un **árbol de expresión**:
- Los **nodos internos** representan los operadores matemáticos o lógicos (ej. $+$, $-$, $*$, $/$).
- Las **hojas** (nodos terminales) representan los operandos (constantes numéricas o variables).
- Su evaluación en **posorden** produce la notación postfija y calcula el valor de la expresión de forma jerárquica.
</details>

<details class="solution">
<summary>14. Respuesta correcta: A — Árboles de Decisión</summary>

En aprendizaje automático y toma de decisiones, un **árbol de decisión**:
- Presenta en sus nodos internos preguntas o condiciones sobre los datos/atributos.
- Presenta en las ramas las posibles respuestas a dicha prueba.
- Presenta en sus hojas la decisión final, categoría o valor predicho.
</details>

<details class="solution">
<summary>15. Respuesta correcta: A — Recorrido Inorden de ejemplo</summary>

Estructura habitual de referencia:
- Raíz: $A$
- Subárbol izquierdo de $A$: Raíz $B$, con hijo izquierdo $D$ e hijo derecho $E$.
- Subárbol derecho de $A$: Raíz $C$, con hijo derecho $F$.

**Cálculo Inorden (IRD):**
1. Subárbol Izquierdo de $A$ (Raíz $B$):
   - Subárbol Izquierdo de $B \to D$
   - Raíz $B \to B$
   - Subárbol Derecho de $B \to E$
   - *Resultado subárbol izq:* $D, B, E$
2. Raíz principal $\to A$
3. Subárbol Derecho de $A$ (Raíz $C$):
   - Subárbol Izquierdo de $C \to \emptyset$
   - Raíz $C \to C$
   - Subárbol Derecho de $C \to F$
   - *Resultado subárbol der:* $C, F$

**Secuencia completa:** $D, B, E, A, C, F$.
</details>

---

## Chuleta final: lo imprescindible para aprobar

### 1. Relaciones y propiedades

- **Reflexiva:** $\forall a, (a, a) \in R$. Diagonal de la matriz llena de $1$s.
- **Simétrica:** $(a, b) \in R \implies (b, a) \in R$. Matriz simétrica ($M = M^T$).
- **Antisimétrica:** $(a, b) \in R \land (b, a) \in R \implies a = b$.
- **Transitiva:** $(a, b) \in R \land (b, c) \in R \implies (a, c) \in R$.
- **Relación de Equivalencia:** Reflexiva + Simétrica + Transitiva.
- **Relación de Orden:** Reflexiva + Antisimétrica + Transitiva.

### 2. Recorridos de Árboles Binarios

| Recorrido | Regla Mnemotécnica | Secuencia de Exploración |
|---|---|---|
| **Preorden** | **R**aíz **PRE**viamente | **R**aíz $\to$ **I**zquierda $\to$ **D**erecha (**RID**) |
| **Inorden** | **R**aíz **EN** medio | **I**zquierda $\to$ **R**aíz $\to$ **D**erecha (**IRD**) |
| **Posorden** | **R**aíz **POST**eriormente | **I**zquierda $\to$ **D**erecha $\to$ **R**aíz (**IDR**) |
| **Amplitud** | Por Niveles (BFS) | De arriba a abajo, de izquierda a derecha (Usa Cola/FIFO) |

### 3. Tipos de Árboles y Complejidad

- **BST (Binary Search Tree):** Claves $Izquierdas < Raíz < Claves Derechas$. Inorden da elementos ordenados.
- **Árbol AVL:** BST autoequilibrado mediante **rotaciones**. Factor de equilibrio $\in \{-1, 0, 1\}$. Operaciones garantizadas en $O(\log n)$.
- **Árbol de Expresión:** Operadores en nodos internos, operandos en hojas.
- **Árbol de Decisión:** Condiciones en nodos internos, clasificaciones/predicciones en hojas.

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