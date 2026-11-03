# Test Tema 9 — Teoría de grafos

> Test interactivo para repasar conceptos básicos de grafos, grafos bipartitos, planaridad, caminos y ciclos. Selecciona una respuesta por pregunta y pulsa **Corregir test** para ver tu puntuación y las explicaciones.

<div id="test-tema-9" class="quiz-container">
  <style>
    #test-tema-9 { --quiz-border: var(--md-default-fg-color--lightest, #ddd); }
    #test-tema-9 .quiz-question { border: 1px solid var(--quiz-border); border-radius: .65rem; padding: 1rem; margin: 1rem 0; }
    #test-tema-9 .quiz-question h3 { margin-top: 0; }
    #test-tema-9 .quiz-option { display: block; padding: .35rem .55rem; margin: .25rem 0; border-radius: .35rem; cursor: pointer; }
    #test-tema-9 .quiz-option:hover { background: var(--md-code-bg-color, #f5f5f5); }
    #test-tema-9 .quiz-option input { margin-right: .5rem; }
    #test-tema-9 .quiz-feedback { display: none; margin-top: .75rem; padding: .7rem .85rem; border-radius: .4rem; }
    #test-tema-9 .quiz-feedback.correct { display: block; background: rgba(46, 160, 67, .12); border-left: 4px solid #2e9d50; }
    #test-tema-9 .quiz-feedback.incorrect { display: block; background: rgba(220, 53, 69, .10); border-left: 4px solid #dc3545; }
    #test-tema-9 .quiz-actions { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1.2rem 0; }
    #test-tema-9 button { border: 0; border-radius: .4rem; padding: .65rem 1rem; cursor: pointer; font: inherit; }
    #test-tema-9 .primary { background: var(--md-primary-fg-color, #4051b5); color: white; }
    #test-tema-9 .secondary { background: var(--md-default-fg-color--lightest, #ddd); color: var(--md-default-fg-color, #222); }
    #test-tema-9 #quiz-result-9 { display: none; padding: 1rem; border: 1px solid var(--quiz-border); border-radius: .6rem; margin: 1rem 0; }
    #test-tema-9 .muted { color: var(--md-default-fg-color--light, #666); font-size: .9em; }
  </style>

  <div class="quiz-actions">
    <button type="button" class="primary" id="grade-quiz-9">Corregir test</button>
    <button type="button" class="secondary" id="reset-quiz-9">Reiniciar</button>
  </div>
  <div id="quiz-result-9" role="status" aria-live="polite"></div>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 1</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente un grafo?</p>
    <label class="quiz-option"><input type="radio" name="q1" value="A"> A. Un grafo es un conjunto de vértices y un conjunto de aristas que conectan pares de vértices.</label>
    <label class="quiz-option"><input type="radio" name="q1" value="B"> B. Un grafo es un conjunto de vértices que están todos conectados entre sí por aristas.</label>
    <label class="quiz-option"><input type="radio" name="q1" value="C"> C. Un grafo es un conjunto de aristas sin vértices.</label>
    <label class="quiz-option"><input type="radio" name="q1" value="D"> D. Un grafo es un conjunto de vértices conectados en un ciclo cerrado.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Un grafo se define mediante un conjunto de vértices (o nodos) y un conjunto de aristas que conectan pares de vértices. No tiene por qué ser completo ni contener ciclos: puede tener vértices aislados o no tener ninguna arista.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 2</h3>
    <p>¿Qué es un vértice en el contexto de un grafo?</p>
    <label class="quiz-option"><input type="radio" name="q2" value="A"> A. Un punto donde se encuentran varias aristas.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="B"> B. Una línea que conecta dos puntos.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="C"> C. Un conjunto de líneas paralelas.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="D"> D. Una relación de vecindad entre dos puntos.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Un vértice es un nodo o punto del grafo. Las líneas que unen vértices son las aristas. En un grafo puede haber vértices de grado cero, llamados aislados, que no están unidos a ninguna arista.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 3</h3>
    <p>¿Cuál de las siguientes propiedades describe correctamente un grafo completo?</p>
    <label class="quiz-option"><input type="radio" name="q3" value="A"> A. Un grafo donde todos los vértices están conectados entre sí por una arista única.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="B"> B. Un grafo que no tiene ciclos.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="C"> C. Un grafo que tiene al menos un ciclo.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="D"> D. Un grafo donde cada vértice tiene al menos una arista conectada.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> En un grafo completo simple, cada pareja de vértices distintos está unida por exactamente una arista. Se suele representar como Kₙ. Por ejemplo, K₃ es un triángulo.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 4</h3>
    <p>¿Qué es la relación de vecindad en un grafo?</p>
    <label class="quiz-option"><input type="radio" name="q4" value="A"> A. La relación que existe entre dos vértices si están conectados por una arista.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="B"> B. La relación que existe entre un vértice y todas las aristas del grafo.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="C"> C. La relación entre dos vértices que no están conectados por una arista.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="D"> D. La relación que existe entre un vértice y el grafo completo.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Dos vértices son vecinos o adyacentes cuando existe una arista que los conecta directamente. No basta con que exista un camino indirecto entre ellos.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 5</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente el grado de un vértice en un grafo?</p>
    <label class="quiz-option"><input type="radio" name="q5" value="A"> A. El número de vértices adyacentes a ese vértice.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="B"> B. El número de aristas que inciden en ese vértice.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="C"> C. El número total de vértices en el grafo.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="D"> D. El número total de aristas en el grafo.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> El grado de un vértice es el número de aristas que llegan a él o salen de él en un grafo no dirigido. En un grafo simple coincide con el número de vecinos. En grafos con lazos, cada lazo cuenta dos veces.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.60">
    <h3>Pregunta 6</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente un grafo bipartito?</p>
    <label class="quiz-option"><input type="radio" name="q6" value="A"> A. Todos los vértices están conectados entre sí por una arista única.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="B"> B. Puede dividirse en dos conjuntos disjuntos de vértices, sin aristas entre vértices del mismo conjunto.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="C"> C. Es un grafo que no tiene ciclos.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="D"> D. Es un grafo que tiene al menos un ciclo.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Un grafo bipartito permite separar sus vértices en dos grupos (particiones) de modo que todas las aristas conectan un vértice de un grupo con uno del otro. No puede haber aristas dentro de una misma partición.</div>
  </section>

  <section class="quiz-question" data-answer="C" data-weight="0.60">
    <h3>Pregunta 7</h3>
    <p>¿Cuál de los siguientes grafos es siempre bipartito?</p>
    <label class="quiz-option"><input type="radio" name="q7" value="A"> A. Un grafo completo.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="B"> B. Un grafo cíclico de longitud impar.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="C"> C. Un árbol.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="D"> D. Un grafo dirigido.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: C.</strong> Todo árbol es bipartito: basta dividir los vértices según la paridad de su distancia desde una raíz. Cada arista une niveles de distinta paridad. En cambio, un ciclo impar no es bipartito y un grafo completo solo lo es en casos pequeños (K₁ y K₂).</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.60">
    <h3>Pregunta 8</h3>
    <p>¿Cuál es una propiedad clave de los grafos bipartitos?</p>
    <label class="quiz-option"><input type="radio" name="q8" value="A"> A. Todos los ciclos en un grafo bipartito tienen longitud impar.</label>
    <label class="quiz-option"><input type="radio" name="q8" value="B"> B. Todos los ciclos en un grafo bipartito tienen longitud par.</label>
    <label class="quiz-option"><input type="radio" name="q8" value="C"> C. Un grafo bipartito tiene vértices de grado impar.</label>
    <label class="quiz-option"><input type="radio" name="q8" value="D"> D. Un grafo bipartito no tiene vértices de grado par.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Al recorrer un ciclo en un grafo bipartito, se alterna entre las dos particiones. Para volver al vértice inicial hay que realizar un número par de pasos. Por eso no puede haber ciclos impares.</div>
  </section>

  <section class="quiz-question" data-answer="C" data-weight="0.60">
    <h3>Pregunta 9</h3>
    <p>¿Cuál es una condición necesaria y suficiente para que un grafo sea bipartito?</p>
    <label class="quiz-option"><input type="radio" name="q9" value="A"> A. El grafo debe tener al menos un ciclo.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="B"> B. El grafo no debe tener ciclos.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="C"> C. El grafo no debe tener ciclos de longitud impar.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="D"> D. El grafo debe ser dirigido.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: C.</strong> Un grafo (no dirigido) es bipartito si y solo si no contiene ningún ciclo impar. Puede tener ciclos: por ejemplo, un cuadrado es un ciclo de longitud 4 y sí es bipartito.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.60">
    <h3>Pregunta 10</h3>
    <p>Dado V = {A, B, C, D, E, F} y E = {(A,D), (A,E), (B,D), (C,F)}, ¿es bipartito el grafo definido por (V, E)?</p>
    <label class="quiz-option"><input type="radio" name="q10" value="A"> A. No, porque tiene vértices que no están conectados.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="B"> B. Sí, porque se puede dividir en dos conjuntos disjuntos sin aristas entre vértices del mismo conjunto.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="C"> C. No, porque tiene ciclos de longitud impar.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="D"> D. Sí, porque todos los vértices están conectados por aristas.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Una partición válida es {A, B, C} y {D, E, F}. Todas las aristas indicadas cruzan de un grupo al otro. Que haya vértices aislados o que el grafo no sea conexo no impide que sea bipartito.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 11</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente un grafo plano?</p>
    <label class="quiz-option"><input type="radio" name="q11" value="A"> A. Puede dibujarse en el plano de manera que sus aristas no se crucen.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="B"> B. Tiene un ciclo cerrado.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="C"> C. Cada vértice tiene al menos dos aristas.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="D"> D. Puede dividirse en dos conjuntos disjuntos de vértices.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Un grafo es plano si admite una representación en el plano en la que las aristas solo se encuentran en vértices comunes y no se cruzan en otros puntos. La definición se refiere a que exista algún dibujo sin cruces, no a que cualquier dibujo los evite.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 12</h3>
    <p>¿Cuál es una propiedad clave de los grafos planos en términos de la fórmula de Euler?</p>
    <label class="quiz-option"><input type="radio" name="q12" value="A"> A. V − E + F = 2, donde V es el número de vértices, E el de aristas y F el de caras.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="B"> B. V + E + F = 2.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="C"> C. V × E = F.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="D"> D. V + E − F = 2.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> La fórmula de Euler para un grafo plano conexo es V − E + F = 2. F cuenta también la región exterior. Por ejemplo, en un triángulo dibujado en el plano: V=3, E=3 y F=2; por tanto, 3−3+2=2.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 13</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente un camino en un grafo?</p>
    <label class="quiz-option"><input type="radio" name="q13" value="A"> A. Una secuencia de vértices en la que cada par consecutivo está conectado por una arista.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="B"> B. Un conjunto de aristas que conectan todos los vértices del grafo.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="C"> C. Un ciclo que no tiene vértices repetidos.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="D"> D. Un grafo en el que todas las aristas están conectadas a un solo vértice.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Un camino describe cómo desplazarse por el grafo: v₀, v₁, …, vₖ, donde cada pareja consecutiva está unida por una arista. La opción B se parece más a una descripción imprecisa de una estructura que conecta todos los vértices, no a un camino.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 14</h3>
    <p>¿Qué es un ciclo en el contexto de un grafo?</p>
    <label class="quiz-option"><input type="radio" name="q14" value="A"> A. Un camino que comienza y termina en el mismo vértice y no repite ninguna arista.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="B"> B. Un camino que no repite ningún vértice.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="C"> C. Un conjunto de aristas que forman una línea recta.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="D"> D. Un grafo donde todos los vértices tienen el mismo grado.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Un ciclo es un recorrido cerrado: se vuelve al vértice de partida sin repetir aristas. En la definición habitual de ciclo simple tampoco se repiten otros vértices. La opción B describe un camino simple, no necesariamente cerrado.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 15</h3>
    <p>¿Cuál de las siguientes aplicaciones es un ejemplo de uso de grafos planos en informática?</p>
    <label class="quiz-option"><input type="radio" name="q15" value="A"> A. Optimización de redes eléctricas.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="B"> B. Diseño de circuitos integrados.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="C"> C. Análisis de redes sociales.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="D"> D. Algoritmos de búsqueda en Internet.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> En el diseño de circuitos integrados es importante organizar las conexiones entre componentes evitando cruces o gestionándolos mediante capas. Los modelos de grafos planos ayudan a estudiar el diseño y el trazado de circuitos.</div>
  </section>
</div>

<script>
(function () {
  const root = document.getElementById('test-tema-9');
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = 'true';

  const questions = Array.from(root.querySelectorAll('.quiz-question'));
  const result = root.querySelector('#quiz-result-9');

  root.querySelector('#grade-quiz-9').addEventListener('click', function () {
    let earned = 0;
    let total = 0;
    let correctCount = 0;
    let answered = 0;

    questions.forEach((question) => {
      const weight = Number(question.dataset.weight);
      const answer = question.dataset.answer;
      const selected = question.querySelector('input[type="radio"]:checked');
      const feedback = question.querySelector('.quiz-feedback');
      total += weight;

      question.querySelectorAll('.quiz-option').forEach(label => {
        label.style.outline = '';
        label.style.background = '';
      });

      if (selected) {
        answered++;
        const label = selected.closest('.quiz-option');
        if (selected.value === answer) {
          earned += weight;
          correctCount++;
          feedback.classList.add('correct');
          feedback.classList.remove('incorrect');
          label.style.background = 'rgba(46, 160, 67, .12)';
          label.style.outline = '1px solid #2e9d50';
        } else {
          feedback.classList.add('incorrect');
          feedback.classList.remove('correct');
          label.style.background = 'rgba(220, 53, 69, .10)';
          label.style.outline = '1px solid #dc3545';
          const correctLabel = question.querySelector('input[value="' + answer + '"]').closest('.quiz-option');
          correctLabel.style.background = 'rgba(46, 160, 67, .12)';
          correctLabel.style.outline = '1px solid #2e9d50';
        }
      } else {
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
      }
    });

    const percent = total ? (earned / total) * 100 : 0;
    result.style.display = 'block';
    result.innerHTML = '<h3>Resultado</h3><p><strong>' + correctCount + ' de ' + questions.length +
      ' respuestas correctas</strong> · ' + answered + ' contestadas.</p><p><strong>Puntuación ponderada: ' +
      earned.toFixed(2).replace('.', ',') + ' / ' + total.toFixed(2).replace('.', ',') +
      '</strong> (' + percent.toFixed(1).replace('.', ',') + '%).</p><p class="muted">La puntuación suma el valor indicado por el campus para cada pregunta acertada; las respuestas en blanco o incorrectas no suman.</p>';
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  root.querySelector('#reset-quiz-9').addEventListener('click', function () {
    root.querySelectorAll('input[type="radio"]').forEach(input => { input.checked = false; });
    questions.forEach(question => {
      const feedback = question.querySelector('.quiz-feedback');
      feedback.classList.remove('correct', 'incorrect');
      question.querySelectorAll('.quiz-option').forEach(label => {
        label.style.outline = '';
        label.style.background = '';
      });
    });
    result.style.display = 'none';
    result.innerHTML = '';
  });
})();
</script>

---

## Chuleta final — Tema 9

### 1. Conceptos básicos de grafos

Un grafo se representa como \(G=(V,E)\):

- **Vértices (V):** los nodos o puntos.
- **Aristas (E):** las conexiones entre pares de vértices.
- **Adyacentes o vecinos:** dos vértices unidos directamente por una arista.
- **Grado de un vértice:** número de aristas que inciden en él.
- **Vértice aislado:** vértice de grado 0.
- **Grafo completo:** cada pareja de vértices distintos está conectada. Se denota \(K_n\).

### 2. Grafos bipartitos

Un grafo es bipartito si sus vértices se pueden dividir en dos conjuntos disjuntos \(V_1\) y \(V_2\), de forma que todas las aristas conectan un vértice de \(V_1\) con uno de \(V_2\).

- No hay aristas entre vértices de la misma partición.
- **Todo árbol es bipartito.**
- Un grafo es bipartito si y solo si no contiene ciclos impares.
- Por tanto, todos sus ciclos tienen longitud par.
- No hace falta que el grafo sea conexo: puede tener componentes separadas y vértices aislados.

**Truco:** bipartito = dos grupos; las aristas siempre cruzan de un grupo al otro.

### 3. Grafos planos y fórmula de Euler

Un grafo es **plano** si puede dibujarse sin cruces de aristas (salvo en los vértices donde se unen).

Para un grafo plano conexo:

\[
V-E+F=2
\]

- \(V\): número de vértices.
- \(E\): número de aristas.
- \(F\): número de caras, incluida la región exterior.

Ejemplo: un triángulo tiene 3 vértices, 3 aristas y 2 caras. Así, \(3-3+2=2\).

**Aplicación informática:** diseño y trazado de circuitos integrados.

### 4. Caminos y ciclos

- **Camino:** secuencia de vértices consecutivos unidos por aristas.
- **Camino cerrado:** empieza y termina en el mismo vértice.
- **Ciclo:** recorrido cerrado que no repite aristas; en un ciclo simple tampoco repite vértices salvo el inicial/final.

### 5. Resumen para memorizar

| Concepto | Palabra clave |
|---|---|
| Grafo | Vértices + aristas |
| Vértice | Nodo |
| Arista | Conexión |
| Vecinos | Conectados directamente |
| Grado | Aristas incidentes |
| Completo | Todos con todos |
| Bipartito | Dos grupos, aristas cruzadas |
| Árbol | Siempre bipartito |
| Ciclo impar | Impide ser bipartito |
| Plano | Se puede dibujar sin cruces |
| Euler | \(V-E+F=2\) |
| Camino | Recorrido por aristas |
| Ciclo | Recorrido cerrado |

### 6. Errores típicos de examen

- Un grafo no tiene por qué ser conexo ni tener ciclos.
- Un grafo completo exige conexión entre **cada pareja** de vértices distintos.
- Un vértice aislado no impide que el grafo sea bipartito.
- Un árbol siempre es bipartito, aunque tenga muchos vértices.
- Un grafo bipartito puede tener ciclos, pero todos son pares.
- La fórmula de Euler indicada se aplica a grafos planos conexos y cuenta también la cara exterior.
- Un dibujo con cruces no demuestra que el grafo no sea plano: puede existir otra representación sin cruces.
