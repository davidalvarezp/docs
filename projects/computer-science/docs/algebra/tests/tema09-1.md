---
title: Test Tema 9 - Teoría de grafos
---

# Test Tema 9: Teoría de grafos

Este test está basado en las 15 preguntas del cuestionario del tema. Tiene **una sola respuesta correcta por pregunta**. Selecciona tus respuestas y pulsa **Comprobar respuestas** para conocer tu nota, ver la explicación rápida de cada pregunta y consultar al final las soluciones explicadas paso a paso.

!!! tip "Cómo estudiar"
    Haz primero el test sin mirar las soluciones. Al corregirlo, lee la **explicación rápida** de cada pregunta y, si necesitas profundizar, despliega la **explicación detallada paso a paso** al final de la página.

<div id="quiz-tema9" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un grafo G = (V, E) se compone de un conjunto V de vértices (o nodos) y un conjunto E de aristas que relacionan o conectan pares de dichos vértices.">
      <legend>1. ¿Cuál de las siguientes afirmaciones describe correctamente un grafo?</legend>
      <label><input type="radio" name="q1" value="a"> A. Un grafo es un conjunto de vértices y un conjunto de aristas que conectan pares de vértices.</label>
      <label><input type="radio" name="q1" value="b"> B. Un grafo es un conjunto de vértices que están todos conectados entre sí por aristas.</label>
      <label><input type="radio" name="q1" value="c"> C. Un grafo es un conjunto de aristas sin vértices.</label>
      <label><input type="radio" name="q1" value="d"> D. Un grafo es un conjunto de vértices conectados en un ciclo cerrado.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un vértice (o nodo) es el elemento o punto fundamental del grafo donde concurren o inciden las aristas que lo conectan con otros vértices.">
      <legend>2. ¿Qué es un vértice en el contexto de un grafo?</legend>
      <label><input type="radio" name="q2" value="a"> A. Un punto donde se encuentran varias aristas.</label>
      <label><input type="radio" name="q2" value="b"> B. Una línea que conecta dos puntos.</label>
      <label><input type="radio" name="q2" value="c"> C. Un conjunto de líneas paralelas.</label>
      <label><input type="radio" name="q2" value="d"> D. Una relación de vecindad entre dos puntos.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un grafo simple es completo (K_n) si contiene todas las aristas posibles, es decir, cada par de vértices distintos está unido por una arista única.">
      <legend>3. ¿Cuál de las siguientes propiedades describe correctamente un grafo completo?</legend>
      <label><input type="radio" name="q3" value="a"> A. Un grafo donde todos los vértices están conectados entre sí por una arista única.</label>
      <label><input type="radio" name="q3" value="b"> B. Un grafo que no tiene ciclos.</label>
      <label><input type="radio" name="q3" value="c"> C. Un grafo que tiene al menos un ciclo.</label>
      <label><input type="radio" name="q3" value="d"> D. Un grafo donde cada vértice tiene al menos una arista conectada.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Dos vértices u y v son adyacentes o vecinos si existe una arista e = {u, v} que los une directamente.">
      <legend>4. ¿Qué es la relación de vecindad en un grafo?</legend>
      <label><input type="radio" name="q4" value="a"> A. La relación que existe entre dos vértices si están conectados por una arista.</label>
      <label><input type="radio" name="q4" value="b"> B. La relación que existe entre un vértice y todas las aristas del grafo.</label>
      <label><input type="radio" name="q4" value="c"> C. La relación entre dos vértices que no están conectados por una arista.</label>
      <label><input type="radio" name="q4" value="d"> D. La relación que existe entre un vértice y el grafo completo.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El grado deg(v) de un vértice v es el número de aristas incidentes en él (en grafos no dirigidos, con bucles/lazos contando doble).">
      <legend>5. ¿Cuál de las siguientes afirmaciones describe correctamente el grado de un vértice en un grafo?</legend>
      <label><input type="radio" name="q5" value="a"> A. El número de vértices adyacentes a ese vértice.</label>
      <label><input type="radio" name="q5" value="b"> B. El número de aristas que inciden en ese vértice.</label>
      <label><input type="radio" name="q5" value="c"> C. El número total de vértices en el grafo.</label>
      <label><input type="radio" name="q5" value="d"> D. El número total de aristas en el grafo.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Un grafo es bipartito si V = V₁ ∪ V₂ con V₁ ∩ V₂ = ∅, de forma que cualquier arista une un vértice de V₁ con uno de V₂.">
      <legend>6. ¿Cuál de las siguientes afirmaciones describe correctamente un grafo bipartito?</legend>
      <label><input type="radio" name="q6" value="a"> A. Todos los vértices están conectados entre sí por una arista única.</label>
      <label><input type="radio" name="q6" value="b"> B. Puede dividirse en dos conjuntos disjuntos de vértices, sin aristas entre vértices del mismo conjunto.</label>
      <label><input type="radio" name="q6" value="c"> C. Es un grafo que no tiene ciclos.</label>
      <label><input type="radio" name="q6" value="d"> D. Es un grafo que tiene al menos un ciclo.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Todo árbol es un grafo acíclico y conexo, por lo que carece de ciclos impares y es por definición siempre un grafo bipartito.">
      <legend>7. ¿Cuál de los siguientes grafos es siempre bipartito?</legend>
      <label><input type="radio" name="q7" value="a"> A. Un grafo completo.</label>
      <label><input type="radio" name="q7" value="b"> B. Un grafo cíclico de longitud impar.</label>
      <label><input type="radio" name="q7" value="c"> C. Un árbol.</label>
      <label><input type="radio" name="q7" value="d"> D. Un grafo dirigido.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Al alternar entre dos subconjuntos disjuntos V₁ y V₂, cualquier circuito cerrado o ciclo debe realizar un número par de transiciones/pasos.">
      <legend>8. ¿Cuál es una propiedad clave de los grafos bipartitos?</legend>
      <label><input type="radio" name="q8" value="a"> A. Todos los ciclos en un grafo bipartito tienen longitud impar.</label>
      <label><input type="radio" name="q8" value="b"> B. Todos los ciclos en un grafo bipartito tienen longitud par.</label>
      <label><input type="radio" name="q8" value="c"> C. Un grafo bipartito tiene vértices de grado impar.</label>
      <label><input type="radio" name="q8" value="d"> D. Un grafo bipartito no tiene vértices de grado par.</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Según el Teorema de Cónig, un grafo no dirigido es bipartito si y solo si no contiene ningún ciclo de longitud impar.">
      <legend>9. ¿Cuál es una condición necesaria y suficiente para que un grafo sea bipartito?</legend>
      <label><input type="radio" name="q9" value="a"> A. El grafo debe tener al menos un ciclo.</label>
      <label><input type="radio" name="q9" value="b"> B. El grafo no debe tener ciclos.</label>
      <label><input type="radio" name="q9" value="c"> C. El grafo no debe tener ciclos de longitud impar.</label>
      <label><input type="radio" name="q9" value="d"> D. El grafo debe ser dirigido.</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Es bipartito pues se puede particionar en V₁ = {A, B, C} y V₂ = {D, E, F}, sin que exista ninguna arista conectando vértices dentro del mismo subconjunto.">
      <legend>10. Dado V = {A, B, C, D, E, F} y E = {(A,D), (A,E), (B,D), (C,F)}, ¿es bipartito el grafo definido por (V, E)?</legend>
      <label><input type="radio" name="q10" value="a"> A. No, porque tiene vértices que no están conectados.</label>
      <label><input type="radio" name="q10" value="b"> B. Sí, porque se puede dividir en dos conjuntos disjuntos sin aristas entre vértices del mismo conjunto.</label>
      <label><input type="radio" name="q10" value="c"> C. No, porque tiene ciclos de longitud impar.</label>
      <label><input type="radio" name="q10" value="d"> D. Sí, porque todos los vértices están conectados por aristas.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un grafo es plano si admite un dibujo en el plano euclídeo en el que sus aristas solo se intersecan en los vértices comunes incidentes.">
      <legend>11. ¿Cuál de las siguientes afirmaciones describe correctamente un grafo plano?</legend>
      <label><input type="radio" name="q11" value="a"> A. Puede dibujarse en el plano de manera que sus aristas no se crucen.</label>
      <label><input type="radio" name="q11" value="b"> B. Tiene un ciclo cerrado.</label>
      <label><input type="radio" name="q11" value="c"> C. Cada vértice tiene al menos dos aristas.</label>
      <label><input type="radio" name="q11" value="d"> D. Puede dividirse en dos conjuntos disjuntos de vértices.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La fórmula de Euler establece que para cualquier representación plana de un grafo conexo se cumple la invariante V - E + F = 2.">
      <legend>12. ¿Cuál es una propiedad clave de los grafos planos en términos de la fórmula de Euler?</legend>
      <label><input type="radio" name="q12" value="a"> A. V − E + F = 2, donde V es el número de vértices, E el de aristas y F el de caras.</label>
      <label><input type="radio" name="q12" value="b"> B. V + E + F = 2.</label>
      <label><input type="radio" name="q12" value="c"> C. V × E = F.</label>
      <label><input type="radio" name="q12" value="d"> D. V + E − F = 2.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un camino es una sucesión alternada v₀, e₁, v₁, e₂, ..., v_k de vértices y aristas donde cada par de vértices consecutivos forma una arista del grafo.">
      <legend>13. ¿Cuál de las siguientes afirmaciones describe correctamente un camino en un grafo?</legend>
      <label><input type="radio" name="q13" value="a"> A. Una secuencia de vértices en la que cada par consecutivo está conectado por una arista.</label>
      <label><input type="radio" name="q13" value="b"> B. Un conjunto de aristas que conectan todos los vértices del grafo.</label>
      <label><input type="radio" name="q13" value="c"> C. Un ciclo que no tiene vértices repetidos.</label>
      <label><input type="radio" name="q13" value="d"> D. Un grafo en el que todas las aristas están conectadas a un solo vértice.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Un ciclo es un camino cerrado de longitud ≥ 1 que empieza y termina en el mismo vértice sin repetir ninguna arista en su recorrido.">
      <legend>14. ¿Qué es un ciclo en el contexto de un grafo?</legend>
      <label><input type="radio" name="q14" value="a"> A. Un camino que comienza y termina en el mismo vértice y no repite ninguna arista.</label>
      <label><input type="radio" name="q14" value="b"> B. Un camino que no repite ningún vértice.</label>
      <label><input type="radio" name="q14" value="c"> C. Un conjunto de aristas que forman una línea recta.</label>
      <label><input type="radio" name="q14" value="d"> D. Un grafo donde todos los vértices tienen el mismo grado.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El trazado de vías en placas de circuito impreso (PCB) e integrados requiere que las conexiones no se crucen en una misma capa, lo que se modela mediante planaridad.">
      <legend>15. ¿Cuál de las siguientes aplicaciones es un ejemplo de uso de grafos planos en informática?</legend>
      <label><input type="radio" name="q15" value="a"> A. Optimización de redes eléctricas.</label>
      <label><input type="radio" name="q15" value="b"> B. Diseño de circuitos integrados.</label>
      <label><input type="radio" name="q15" value="c"> C. Análisis de redes sociales.</label>
      <label><input type="radio" name="q15" value="d"> D. Algoritmos de búsqueda en Internet.</label>
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
<summary>1. Respuesta correcta: A — Definición matemática de grafo</summary>

Un **grafo** $G$ es un par ordenado $G = (V, E)$ compuesto por:
- $V$: Un conjunto no vacío de **vértices** o nodos.
- $E$: Un conjunto de **aristas** o enlaces, donde cada arista relaciona un par de vértices de $V$.

**Aclaraciones:**
- No todos los vértices deben estar conectados (pueden existir vértices aislados de grado 0).
- No requiere ser un grafo completo ($K_n$) ni estructurarse obligatoriamente como ciclo.
</details>

<details class="solution">
<summary>2. Respuesta correcta: A — Vértices o nodos</summary>

Un **vértice** es la unidad o punto fundamental del conjunto $V$. 
- Es el elemento abstracto sobre el que inciden o donde concurren las aristas del grafo.
- La línea o conexión entre dos vértices se denomina **arista**.
</details>

<details class="solution">
<summary>3. Respuesta correcta: A — Grafo Completo K_n</summary>

Un **grafo completo** (denotado $K_n$) es un grafo simple con $n$ vértices en el que **existe una arista única conectando cada par distinto de vértices**.

El número total de aristas en un grafo completo de $n$ vértices viene dado por la fórmula combinatoria:
\[
|E| = \binom{n}{2} = \frac{n(n-1)}{2}
\]
</details>

<details class="solution">
<summary>4. Respuesta correcta: A — Adyacencia y Vecindad</summary>

En un grafo $G = (V, E)$, dos vértices $u, v \in V$ son **adyacentes** (o **vecinos**) si existe una arista $e = \{u, v\} \in E$ que los conecta directamente.

El conjunto vecindario de un vértice $u$, denotado $N(u)$, agrupa a todos sus vértices adyacentes:
\[
N(u) = \{v \in V \mid \{u, v\} \in E\}
\]
</details>

<details class="solution">
<summary>5. Respuesta correcta: B — Grado de un vértice</summary>

El **grado** de un vértice $v$, denotado $\operatorname{deg}(v)$, es el número de aristas que inciden en él.

**Teorema del Apretón de Manos (Handshaking Lemma):**
En todo grafo no dirigido, la suma de los grados de todos sus vértices equivale exactamente al doble del número total de aristas:
\[
\sum_{v \in V} \operatorname{deg}(v) = 2|E|
\]
*(Un bucle o lazo sobre un mismo vértice suma +2 a su grado).*
</details>

<details class="solution">
<summary>6. Respuesta correcta: B — Estructura de un Grafo Bipartito</summary>

Un grafo $G = (V, E)$ es **bipartito** si su conjunto de vértices $V$ puede dividirse en dos subconjuntos disjuntos $V_1$ y $V_2$ ($V = V_1 \cup V_2$ con $V_1 \cap V_2 = \emptyset$) tales que:
- Toda arista $e = \{u, v\} \in E$ tiene un extremo en $V_1$ y el otro en $V_2$.
- No existen aristas conectando dos vértices pertenecientes al mismo subconjunto.
</details>

<details class="solution">
<summary>7. Respuesta correcta: C — Árboles como grafos bipartitos</summary>

Un **árbol** es un grafo conexo y acíclico.
- Al no contener ciclos de ningún tipo (y en particular, carecer de ciclos de longitud impar), por el **Teorema de Kőnig** todo árbol es **garantizadamente bipartito**.
- La partición se puede construir fácilmente asignando los vértices según si su distancia a la raíz es par ($V_1$) o impar ($V_2$).
</details>

<details class="solution">
<summary>8. Respuesta correcta: B — Longitud de ciclos en grafos bipartitos</summary>

En cualquier grafo bipartito, para partir de un vértice $u \in V_1$, recorrer un camino cerrado y regresar al mismo $u$, se requiere alternar obligatoriamente entre los subconjuntos de la partición:
\[
V_1 \to V_2 \to V_1 \to V_2 \to \dots \to V_1
\]
Este recorrido alternado exige realizar un número par de transiciones. Por consiguiente, **todos los ciclos en un grafo bipartito tienen longitud par**.
</details>

<details class="solution">
<summary>9. Respuesta correcta: C — Teorema de Kőnig para bipartición</summary>

El **Teorema de Kőnig** (1916) establece la condición necesaria y suficiente para los grafos bipartitos:
\[
G \text{ es bipartito} \iff G \text{ no contiene ningún ciclo de longitud impar.}
\]
Pueden existir ciclos en un grafo bipartito siempre que todos ellos sean de longitud par (por ejemplo, el ciclo $C_4$).
</details>

<details class="solution">
<summary>10. Respuesta correcta: B — Verificación de partición bipartita</summary>

Dado $V = \{A, B, C, D, E, F\}$ y $E = \{(A,D), (A,E), (B,D), (C,F)\}$:
- Si definimos $V_1 = \{A, B, C\}$ y $V_2 = \{D, E, F\}$:
- Arista $(A,D)$: une $A \in V_1$ con $D \in V_2$.
- Arista $(A,E)$: une $A \in V_1$ con $E \in V_2$.
- Arista $(B,D)$: une $B \in V_1$ con $D \in V_2$.
- Arista $(C,F)$: une $C \in V_1$ con $F \in V_2$.

Como ninguna arista une elementos de $V_1$ entre sí ni de $V_2$ entre sí, el grafo es **bipartito**.
</details>

<details class="solution">
<summary>11. Respuesta correcta: A — Definición de Grafo Plano</summary>

Un grafo es **plano** si es isomórfico a un grafo dibujado en el plano euclídeo de forma que sus aristas no se crucen (sus únicas intersecciones se producen en sus vértices incidentes comunes).

**Teorema de Kuratowski:** Un grafo es plano si y solo si no contiene ningún subgrafo homeomorphic a $K_5$ (grafo completo de 5 vértices) o a $K_{3,3}$ (grafo bipartito completo de 3+3 vértices).
</details>

<details class="solution">
<summary>12. Respuesta correcta: A — Fórmula de Euler para grafos planos</summary>

Para todo grafo plano y conexo con $V$ vértices, $E$ aristas y $F$ caras (incluyendo la región exterior no acotada), se verifica la **Fórmula de Euler**:
\[
V - E + F = 2
\]
*Ejemplo:* Para $K_3$ (un triángulo): $V = 3$, $E = 3$, $F = 2$ (interior y exterior) $\implies 3 - 3 + 2 = 2$.
</details>

<details class="solution">
<summary>13. Respuesta correcta: A — Definición de camino</summary>

Un **camino** en un grafo $G = (V, E)$ es una secuencia alternada de vértices $v_0, v_1, \dots, v_k$ tal que para todo $i \in \{0, \dots, k-1\}$, el par $\{v_i, v_{i+1}\} \in E$.
- La **longitud del camino** es el número de aristas $k$ que lo componen.
- Si no se repite ningún vértice, el camino se denomina **camino simple**.
</details>

<details class="solution">
<summary>14. Respuesta correcta: A — Definición de ciclo</summary>

Un **ciclo** es un camino cerrado de longitud $k \ge 1$ donde:
- El vértice de inicio coincide con el vértice final ($v_0 = v_k$).
- No se repite ninguna arista en su recorrido.
- Si además todos los vértices intermedios $v_0, v_1, \dots, v_{k-1}$ son distintos entre sí, se trata de un **ciclo simple**.
</details>

<details class="solution">
<summary>15. Respuesta correcta: B — Aplicación de planaridad en VLSI</summary>

En ingeniería informática y diseño de microchips (**VLSI** - Very Large Scale Integration):
- El trazado de pistas conductoras sobre una capa dieléctrica de una placa de circuito impreso (PCB) no puede tener cruces físicos directos para evitar cortocircuitos.
- La teoría de **grafos planos** permite verificar algorítmicamente si un circuito se puede implementar en una sola capa o requiere múltiples capas mediante "vías".
</details>

---

## Chuleta final: lo imprescindible para aprobar

### 1. Elementos de un grafo G = (V, E)

- **Vértices ($V$):** Nodos del grafo. $|V| = n$.
- **Aristas ($E$):** Conexiones entre pares de vértices. $|E| = m$.
- **Adyacencia:** Dos vértices unidos por una arista.
- **Grado ($\operatorname{deg}(v)$):** Número de aristas incidentes en $v$.
- **Lema del Apretón de Manos:** $\sum_{v \in V} \operatorname{deg}(v) = 2|E|$.

### 2. Tipos de grafos especiales

- **Grafo Completo ($K_n$):** Todas las aristas posibles están presentes. $|E| = \frac{n(n-1)}{2}$.
- **Grafo Bipartito:** $V = V_1 \cup V_2$ sin aristas internas en $V_1$ ni en $V_2$.
- **Grafo Bipartito Completo ($K_{m,n}$):** Todos los nodos de $V_1$ ($m$) conectados a todos los de $V_2$ ($n$). Total aristas: $m \cdot n$.
- **Árbol:** Grafo conexo y acíclico ($|E| = |V| - 1$). **Siempre es bipartito.**

### 3. Teoremas de Bipartición y Planaridad

| Teorema / Regla | Concepto |
|---|---|
| **Teorema de Kőnig** | $G$ es bipartito $\iff$ **NO tiene ciclos impares** (todos son de longitud par). |
| **Grafo Plano** | Se puede dibujar en el plano **sin cruces de aristas**. |
| **Fórmula de Euler** | En grafos planos conexos: **$V - E + F = 2$** ($F$ incluye la cara exterior). |
| **Kuratowski** | $G$ es plano $\iff$ no contiene subgrafos no planos homomorfos a $K_5$ o $K_{3,3}$. |

### 4. Recorridos

- **Camino:** Secuencia de vértices conectados por aristas.
- **Ciclo:** Camino cerrado ($v_0 = v_k$) sin repetir aristas.

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
      percent >= 50 ? "Vas por buen camino. Lee las explicaciones cortas y detailed para afianzar." :
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