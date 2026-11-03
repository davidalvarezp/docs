# Test Tema 7 — Conjuntos y funciones

> Test interactivo para repasar conjuntos, operaciones, relaciones y funciones. Selecciona una respuesta en cada pregunta y pulsa **Corregir test** para ver tu resultado y las explicaciones.

<div id="test-tema-7" class="quiz-container">
  <style>
    #test-tema-7 { --quiz-border: var(--md-default-fg-color--lightest, #ddd); }
    #test-tema-7 .quiz-question { border: 1px solid var(--quiz-border); border-radius: .65rem; padding: 1rem; margin: 1rem 0; }
    #test-tema-7 .quiz-question h3 { margin-top: 0; }
    #test-tema-7 .quiz-option { display: block; padding: .35rem .55rem; margin: .25rem 0; border-radius: .35rem; cursor: pointer; }
    #test-tema-7 .quiz-option:hover { background: var(--md-code-bg-color, #f5f5f5); }
    #test-tema-7 .quiz-option input { margin-right: .5rem; }
    #test-tema-7 .quiz-feedback { display: none; margin-top: .75rem; padding: .7rem .85rem; border-radius: .4rem; }
    #test-tema-7 .quiz-feedback.correct { display: block; background: rgba(46, 160, 67, .12); border-left: 4px solid #2e9d50; }
    #test-tema-7 .quiz-feedback.incorrect { display: block; background: rgba(220, 53, 69, .10); border-left: 4px solid #dc3545; }
    #test-tema-7 .quiz-actions { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1.2rem 0; }
    #test-tema-7 button { border: 0; border-radius: .4rem; padding: .65rem 1rem; cursor: pointer; font: inherit; }
    #test-tema-7 .primary { background: var(--md-primary-fg-color, #4051b5); color: white; }
    #test-tema-7 .secondary { background: var(--md-default-fg-color--lightest, #ddd); color: var(--md-default-fg-color, #222); }
    #test-tema-7 #quiz-result { display: none; padding: 1rem; border: 1px solid var(--quiz-border); border-radius: .6rem; margin: 1rem 0; }
    #test-tema-7 .muted { color: var(--md-default-fg-color--light, #666); font-size: .9em; }
  </style>

  <div class="quiz-actions">
    <button type="button" class="primary" id="grade-quiz-7">Corregir test</button>
    <button type="button" class="secondary" id="reset-quiz-7">Reiniciar</button>
  </div>
  <div id="quiz-result-7" role="status" aria-live="polite"></div>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 1</h3>
    <p>¿Qué es un conjunto según la definición de George Cantor?</p>
    <label class="quiz-option"><input type="radio" name="q1" value="A"> A. Una colección ordenada de objetos (o elementos).</label>
    <label class="quiz-option"><input type="radio" name="q1" value="B"> B. Una colección desordenada de objetos (o elementos).</label>
    <label class="quiz-option"><input type="radio" name="q1" value="C"> C. Una colección de objetos finitos únicamente.</label>
    <label class="quiz-option"><input type="radio" name="q1" value="D"> D. Una colección de objetos infinitos únicamente.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Un conjunto es una colección bien definida de elementos. El orden no importa: {1, 2, 3} representa el mismo conjunto que {3, 2, 1}. Además, puede ser finito o infinito.</div>
  </section>

  <section class="quiz-question" data-answer="D" data-weight="0.70">
    <h3>Pregunta 2</h3>
    <p>¿Cuál de los siguientes conjuntos es un conjunto finito?</p>
    <label class="quiz-option"><input type="radio" name="q2" value="A"> A. El conjunto de los números naturales.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="B"> B. El conjunto de los números enteros.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="C"> C. El conjunto de los números reales.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="D"> D. El conjunto de los días de la semana.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: D.</strong> Los días de la semana son exactamente siete, así que forman un conjunto finito. Los naturales, los enteros y los reales son conjuntos infinitos.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 3</h3>
    <p>¿Qué representa el producto cartesiano de dos conjuntos A y B?</p>
    <label class="quiz-option"><input type="radio" name="q3" value="A"> A. El conjunto de elementos comunes a A y B.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="B"> B. El conjunto de todos los pares ordenados donde el primer elemento pertenece a A y el segundo a B.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="C"> C. El conjunto de elementos únicos en A y B.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="D"> D. El conjunto de todos los subconjuntos de A.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> El producto cartesiano se escribe A × B y contiene todos los pares (a, b), con a ∈ A y b ∈ B. El orden importa: en general, A × B no es lo mismo que B × A.</div>
  </section>

  <section class="quiz-question" data-answer="C" data-weight="0.70">
    <h3>Pregunta 4</h3>
    <p>¿Cómo se representa gráficamente la relación entre conjuntos?</p>
    <label class="quiz-option"><input type="radio" name="q4" value="A"> A. Usando matrices.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="B"> B. Usando gráficos de barras.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="C"> C. Usando diagramas de Venn.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="D"> D. Usando diagramas de dispersión.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: C.</strong> Los diagramas de Venn muestran los conjuntos mediante regiones, normalmente círculos, y permiten visualizar relaciones como unión, intersección, inclusión y complemento.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 5</h3>
    <p>¿Qué indica una intersección en un diagrama de Venn?</p>
    <label class="quiz-option"><input type="radio" name="q5" value="A"> A. Los elementos que pertenecen únicamente a un conjunto.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="B"> B. Los elementos que pertenecen a todos los conjuntos representados.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="C"> C. Los elementos que no pertenecen a ningún conjunto.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="D"> D. Los elementos que pertenecen a, al menos, uno de los conjuntos.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> La intersección A ∩ B contiene los elementos que están simultáneamente en A y en B. Para más de dos conjuntos, la intersección reúne los que pertenecen a todos ellos.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.60">
    <h3>Pregunta 6</h3>
    <p>¿Qué significa que un conjunto A sea un subconjunto de un conjunto B?</p>
    <label class="quiz-option"><input type="radio" name="q6" value="A"> A. A y B tienen al menos un elemento en común.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="B"> B. Todo elemento de A es también un elemento de B.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="C"> C. A y B tienen la misma cantidad de elementos.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="D"> D. Ningún elemento de A está en B.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> A ⊆ B significa que, si un elemento pertenece a A, necesariamente pertenece también a B. No exige que A y B sean distintos: un conjunto siempre es subconjunto de sí mismo.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.60">
    <h3>Pregunta 7</h3>
    <p>¿Cuál de las siguientes propiedades es correcta sobre el conjunto de las partes P(A)?</p>
    <label class="quiz-option"><input type="radio" name="q7" value="A"> A. P(A) contiene solo los elementos de A.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="B"> B. P(A) contiene todos los subconjuntos de A.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="C"> C. P(A) es igual a A.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="D"> D. P(A) siempre contiene el conjunto vacío.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> El conjunto de las partes P(A) es, por definición, el conjunto formado por todos los subconjuntos de A. Por ejemplo, si A = {1, 2}, entonces P(A) = {∅, {1}, {2}, {1, 2}}. La opción D también describe una propiedad verdadera de P(A), porque ∅ siempre es subconjunto de A; pero la definición general que se pregunta es la B.</div>
  </section>

  <section class="quiz-question" data-answer="D" data-weight="0.60">
    <h3>Pregunta 8</h3>
    <p>¿Cuál es el número de elementos en el conjunto de las partes P(A) si A tiene n elementos?</p>
    <label class="quiz-option"><input type="radio" name="q8" value="A"> A. n.</label>
    <label class="quiz-option"><input type="radio" name="q8" value="B"> B. 2n.</label>
    <label class="quiz-option"><input type="radio" name="q8" value="C"> C. n².</label>
    <label class="quiz-option"><input type="radio" name="q8" value="D"> D. 2ⁿ.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: D (2ⁿ).</strong> Cada uno de los n elementos tiene dos posibilidades independientes: estar o no estar en un subconjunto. Por tanto, hay 2 × 2 × … × 2 = 2ⁿ subconjuntos. Ojo: 2ⁿ no es lo mismo que 2n.</div>
    <p class="muted">Nota: en el texto copiado del campus, las opciones B y D aparecen con el exponente poco claro. Se interpreta que D es 2ⁿ, que es la fórmula correcta.</p>
  </section>

  <section class="quiz-question" data-answer="D" data-weight="0.60">
    <h3>Pregunta 9</h3>
    <p>¿Qué representa la unión de dos conjuntos A y B?</p>
    <label class="quiz-option"><input type="radio" name="q9" value="A"> A. Los elementos que están solo en A.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="B"> B. Los elementos que están solo en B.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="C"> C. Los elementos que están en A y en B.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="D"> D. Los elementos que están en A o en B o en ambos.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: D.</strong> A ∪ B contiene todos los elementos que pertenecen a A, a B o a los dos. En lógica, la «o» de la unión es inclusiva: también incluye los elementos comunes.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.60">
    <h3>Pregunta 10</h3>
    <p>¿Cuál es el complemento de un conjunto A en un universo U?</p>
    <label class="quiz-option"><input type="radio" name="q10" value="A"> A. El conjunto de todos los elementos en A.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="B"> B. El conjunto de todos los elementos en U que no están en A.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="C"> C. El conjunto de todos los elementos en A que no están en U.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="D"> D. El conjunto de todos los elementos en U.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> El complemento de A (Aᶜ o U \\ A) reúne los elementos del universo U que no pertenecen a A. Siempre depende del universo que se haya fijado.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 11</h3>
    <p>¿Cuál es la definición de una función según la teoría de conjuntos?</p>
    <label class="quiz-option"><input type="radio" name="q11" value="A"> A. Una relación en la que cada elemento del dominio se asigna a, al menos, un elemento del codominio.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="B"> B. Una relación en la que cada elemento del dominio se asigna a exactamente un elemento del codominio.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="C"> C. Una relación en la que cada elemento del codominio se asigna a exactamente un elemento del dominio.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="D"> D. Una relación en la que cada elemento del codominio se asigna a al menos un elemento del dominio.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Una función asigna a cada entrada del dominio una única salida. Puede haber dos entradas distintas con la misma salida, y no es obligatorio que todos los elementos del codominio se utilicen.</div>
  </section>

  <section class="quiz-question" data-answer="C" data-weight="0.70">
    <h3>Pregunta 12</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente una función inyectiva?</p>
    <label class="quiz-option"><input type="radio" name="q12" value="A"> A. Cada elemento del dominio se asigna a exactamente un elemento del codominio.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="B"> B. Cada elemento del codominio es alcanzado por al menos un elemento del dominio.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="C"> C. Cada elemento del codominio es alcanzado por como máximo un elemento del dominio.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="D"> D. Cada elemento del dominio es alcanzado por al menos un elemento del codominio.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: C.</strong> Una función es inyectiva si no repite resultados para entradas distintas: si f(a) = f(b), entonces a = b. Dicho de otro modo, cada elemento del codominio recibe como máximo una flecha desde el dominio. La A es la definición de función en general.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 13</h3>
    <p>¿Cuál es la diferencia entre el dominio y el codominio de una función?</p>
    <label class="quiz-option"><input type="radio" name="q13" value="A"> A. El dominio es el conjunto de valores que la función puede alcanzar, mientras que el codominio es el conjunto de valores de entrada.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="B"> B. El dominio es el conjunto de valores de entrada para los cuales la función está definida, mientras que el codominio es el conjunto de valores potencialmente alcanzables por la función.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="C"> C. El dominio es el conjunto de valores potencialmente alcanzables por la función, mientras que el codominio es el conjunto de valores de entrada.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="D"> D. El dominio y el codominio son siempre iguales para cualquier función.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> El dominio contiene las entradas permitidas. El codominio es el conjunto de llegada declarado para las salidas. La imagen o recorrido es el conjunto de valores que la función alcanza realmente, y puede ser solo una parte del codominio.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 14</h3>
    <p>¿Qué es una función biyectiva?</p>
    <label class="quiz-option"><input type="radio" name="q14" value="A"> A. Una función que es tanto inyectiva como suprayectiva.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="B"> B. Una función en la que cada elemento del dominio se asigna a exactamente un elemento del codominio.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="C"> C. Una función en la que cada elemento del codominio es alcanzado por más de un elemento del dominio.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="D"> D. Una función en la que cada elemento del dominio se asigna a más de un elemento del codominio.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Biyectiva significa inyectiva y suprayectiva a la vez. Cada elemento del codominio es alcanzado por una única entrada: no hay salidas repetidas y no queda ningún elemento del codominio sin alcanzar. Una biyectiva tiene función inversa.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 15</h3>
    <p>¿Qué se entiende por la composición de funciones?</p>
    <label class="quiz-option"><input type="radio" name="q15" value="A"> A. La suma de dos funciones.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="B"> B. La aplicación de una función al resultado de otra función.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="C"> C. La multiplicación de dos funciones.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="D"> D. La resta de dos funciones.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> La composición se escribe (g ∘ f)(x) = g(f(x)): primero se aplica f y después g al resultado. Hay que comprobar que las salidas de f pertenecen al dominio de g.</div>
  </section>
</div>

<script>
(function () {
  const root = document.getElementById('test-tema-7');
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = 'true';

  const questions = Array.from(root.querySelectorAll('.quiz-question'));
  const result = root.querySelector('#quiz-result-7');

  root.querySelector('#grade-quiz-7').addEventListener('click', function () {
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

  root.querySelector('#reset-quiz-7').addEventListener('click', function () {
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

## Chuleta final — Tema 7

### 1. Conjuntos

- **Conjunto:** colección bien definida y desordenada de elementos. El orden no importa y no se cuentan duplicados.
- **Conjunto finito:** tiene un número limitado de elementos. Ejemplo: los siete días de la semana.
- **Subconjunto:** \(A \subseteq B\) significa que todo elemento de A también pertenece a B.
- **Conjunto de las partes:** \(\mathcal{P}(A)\) contiene todos los subconjuntos de A, incluido el conjunto vacío y el propio A.
- Si A tiene n elementos, entonces \(|\mathcal{P}(A)| = 2^n\).

### 2. Operaciones con conjuntos

| Operación | Símbolo | Significado |
|---|---|---|
| Unión | \(A \cup B\) | Está en A, en B o en ambos |
| Intersección | \(A \cap B\) | Está en A y en B |
| Complemento | \(A^c\) o \(U \setminus A\) | Está en el universo U, pero no en A |
| Diferencia | \(A \setminus B\) | Está en A, pero no en B |
| Producto cartesiano | \(A \times B\) | Pares ordenados (a, b), con a ∈ A y b ∈ B |

**Truco para memorizar:**
- Unión = juntar (la «o» inclusiva).
- Intersección = lo común (la «y»).
- Complemento = lo que queda fuera de A dentro del universo.
- Producto cartesiano = formar parejas ordenadas.

### 3. Funciones

Una función \(f: A \to B\) asigna **a cada elemento del dominio A exactamente una salida en el codominio B**.

- **Dominio:** conjunto de entradas permitidas.
- **Codominio:** conjunto de llegada declarado.
- **Imagen o recorrido:** valores del codominio que se alcanzan realmente.

| Tipo de función | Idea clave |
|---|---|
| Inyectiva | Entradas distintas tienen salidas distintas. Ningún elemento del codominio recibe más de una flecha. |
| Suprayectiva | Todos los elementos del codominio reciben al menos una flecha. |
| Biyectiva | Es inyectiva y suprayectiva: cada elemento del codominio recibe exactamente una flecha. |

**Regla rápida:** inyectiva = no repite; suprayectiva = llega a todos; biyectiva = no repite y llega a todos.

### 4. Composición de funciones

\[
(g \circ f)(x) = g(f(x))
\]

Primero se aplica **f** y después **g**. El resultado de f debe poder utilizarse como entrada de g.

### 5. Ideas que suelen caer en el test

- Un conjunto no es una lista ordenada.
- El conjunto de las partes contiene conjuntos (subconjuntos), no simplemente los elementos originales.
- Si hay n elementos, hay \(2^n\) subconjuntos, no \(2n\).
- La unión incluye los elementos comunes; la intersección se queda precisamente con ellos.
- Una función no puede asignar dos salidas distintas a una misma entrada.
- Inyectiva no significa que se use todo el codominio; eso es suprayectiva.
- El codominio y la imagen no tienen por qué coincidir.
- En una composición \(g \circ f\), se empieza por la función que aparece más cerca de x: primero f, luego g.
