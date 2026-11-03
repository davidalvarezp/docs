# Test Tema 8 — Relaciones y matrices booleanas

> Test interactivo para repasar producto cartesiano, relaciones, matrices booleanas y propiedades de las relaciones. Selecciona una opción en cada pregunta y pulsa **Corregir test** para obtener la nota y consultar las explicaciones.

<div id="test-tema-8" class="quiz-container">
  <style>
    #test-tema-8 { --quiz-border: var(--md-default-fg-color--lightest, #ddd); }
    #test-tema-8 .quiz-question { border: 1px solid var(--quiz-border); border-radius: .65rem; padding: 1rem; margin: 1rem 0; }
    #test-tema-8 .quiz-question h3 { margin-top: 0; }
    #test-tema-8 .quiz-option { display: block; padding: .35rem .55rem; margin: .25rem 0; border-radius: .35rem; cursor: pointer; }
    #test-tema-8 .quiz-option:hover { background: var(--md-code-bg-color, #f5f5f5); }
    #test-tema-8 .quiz-option input { margin-right: .5rem; }
    #test-tema-8 .quiz-feedback { display: none; margin-top: .75rem; padding: .7rem .85rem; border-radius: .4rem; }
    #test-tema-8 .quiz-feedback.correct { display: block; background: rgba(46, 160, 67, .12); border-left: 4px solid #2e9d50; }
    #test-tema-8 .quiz-feedback.incorrect { display: block; background: rgba(220, 53, 69, .10); border-left: 4px solid #dc3545; }
    #test-tema-8 .quiz-actions { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1.2rem 0; }
    #test-tema-8 button { border: 0; border-radius: .4rem; padding: .65rem 1rem; cursor: pointer; font: inherit; }
    #test-tema-8 .primary { background: var(--md-primary-fg-color, #4051b5); color: white; }
    #test-tema-8 .secondary { background: var(--md-default-fg-color--lightest, #ddd); color: var(--md-default-fg-color, #222); }
    #test-tema-8 #quiz-result-8 { display: none; padding: 1rem; border: 1px solid var(--quiz-border); border-radius: .6rem; margin: 1rem 0; }
    #test-tema-8 .muted { color: var(--md-default-fg-color--light, #666); font-size: .9em; }
  </style>

  <div class="quiz-actions">
    <button type="button" class="primary" id="grade-quiz-8">Corregir test</button>
    <button type="button" class="secondary" id="reset-quiz-8">Reiniciar</button>
  </div>
  <div id="quiz-result-8" role="status" aria-live="polite"></div>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 1</h3>
    <p>¿Cuál es el producto cartesiano de dos conjuntos A y B?</p>
    <label class="quiz-option"><input type="radio" name="q1" value="A"> A. El conjunto de todos los elementos que están en A o en B.</label>
    <label class="quiz-option"><input type="radio" name="q1" value="B"> B. El conjunto de todos los pares ordenados (a, b) donde a ∈ A y b ∈ B.</label>
    <label class="quiz-option"><input type="radio" name="q1" value="C"> C. El conjunto de todos los elementos que están en A y en B.</label>
    <label class="quiz-option"><input type="radio" name="q1" value="D"> D. El conjunto de todos los pares ordenados (a, a) donde a ∈ A.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> A × B reúne todas las parejas ordenadas (a, b) con el primer componente tomado de A y el segundo de B. Por ejemplo, si A = {1, 2} y B = {x, y}, entonces A × B = {(1,x), (1,y), (2,x), (2,y)}. No es una unión ni una intersección.</div>
  </section>

  <section class="quiz-question" data-answer="C" data-weight="0.70">
    <h3>Pregunta 2</h3>
    <p>¿Cuál de las siguientes afirmaciones es verdadera acerca del dominio de una relación?</p>
    <label class="quiz-option"><input type="radio" name="q2" value="A"> A. El dominio de una relación R es el conjunto de todos los segundos elementos en los pares ordenados de R.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="B"> B. El dominio de una relación R es el conjunto de todos los pares ordenados de R.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="C"> C. El dominio de una relación R es el conjunto de todos los primeros elementos en los pares ordenados de R.</label>
    <label class="quiz-option"><input type="radio" name="q2" value="D"> D. El dominio de una relación R es el conjunto de todos los elementos que están en R.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: C.</strong> En una relación formada por pares (a, b), el dominio contiene los valores que aparecen como primera componente. Los valores que aparecen como segunda componente forman la imagen o rango de la relación.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 3</h3>
    <p>¿Qué es una matriz booleana?</p>
    <label class="quiz-option"><input type="radio" name="q3" value="A"> A. Una matriz en la que todos los elementos son números reales.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="B"> B. Una matriz en la que todos los elementos son 0 o 1.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="C"> C. Una matriz en la que todos los elementos son números enteros positivos.</label>
    <label class="quiz-option"><input type="radio" name="q3" value="D"> D. Una matriz en la que todos los elementos son números complejos.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Una matriz booleana solo contiene ceros y unos. Habitualmente, 1 indica que una relación se cumple y 0 que no se cumple.</div>
  </section>

  <section class="quiz-question" data-answer="D" data-weight="0.70">
    <h3>Pregunta 4</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente el producto booleano de dos matrices booleanas A y B?</p>
    <label class="quiz-option"><input type="radio" name="q4" value="A"> A. Cada elemento se obtiene sumando los productos correspondientes de A y B.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="B"> B. Cada elemento se obtiene tomando el máximo de los productos correspondientes de A y B.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="C"> C. Cada elemento se obtiene tomando el mínimo de los productos correspondientes de A y B.</label>
    <label class="quiz-option"><input type="radio" name="q4" value="D"> D. Cada elemento se obtiene tomando el OR lógico de los productos correspondientes de A y B.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: D.</strong> Para calcular la entrada (i,j) del producto booleano, se hace el AND lógico de cada pareja de entradas correspondientes y después el OR lógico de esos resultados. Es como el producto matricial habitual, pero se sustituyen suma por OR y multiplicación por AND.</div>
  </section>

  <section class="quiz-question" data-answer="C" data-weight="0.70">
    <h3>Pregunta 5</h3>
    <p>¿Cuál de las siguientes afirmaciones es verdadera para una relación representada por una matriz booleana M?</p>
    <label class="quiz-option"><input type="radio" name="q5" value="A"> A. Si Mᵢⱼ = 1, entonces no existe relación entre los elementos i y j.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="B"> B. Si Mᵢⱼ = 0, entonces existe relación entre los elementos i y j.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="C"> C. Si Mᵢⱼ = 1, entonces existe relación entre los elementos i y j.</label>
    <label class="quiz-option"><input type="radio" name="q5" value="D"> D. Si Mᵢⱼ = 0, entonces los elementos i y j son iguales.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: C.</strong> La matriz codifica la relación: un 1 en la posición (i,j) indica que el par (i,j) pertenece a R; un 0 indica que ese par no pertenece a R. El cero no implica que los elementos sean distintos.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 6</h3>
    <p>¿Cuál es una propiedad clave de una matriz booleana cuadrada que representa una relación reflexiva?</p>
    <label class="quiz-option"><input type="radio" name="q6" value="A"> A. Todos los elementos en la diagonal principal son 0.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="B"> B. Todos los elementos en la diagonal principal son 1.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="C"> C. Todos los elementos fuera de la diagonal principal son 0.</label>
    <label class="quiz-option"><input type="radio" name="q6" value="D"> D. Todos los elementos fuera de la diagonal principal son 1.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Una relación es reflexiva si cada elemento está relacionado consigo mismo: (a,a) ∈ R para todo a. En su matriz, esto se traduce en unos en todas las posiciones de la diagonal principal.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 7</h3>
    <p>¿Qué describe el cierre transitivo de una relación representada por una matriz booleana?</p>
    <label class="quiz-option"><input type="radio" name="q7" value="A"> A. Una matriz que solo tiene unos en la diagonal principal.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="B"> B. Una matriz que muestra la relación original más las relaciones adicionales necesarias para hacerla transitiva.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="C"> C. Una matriz donde todos los elementos son unos.</label>
    <label class="quiz-option"><input type="radio" name="q7" value="D"> D. Una matriz donde todos los elementos son ceros.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> El cierre transitivo añade los pares que faltan para que se cumpla la regla: si a está relacionado con b y b con c, entonces a debe estar relacionado con c. Se añaden solo las relaciones necesarias, no se convierte necesariamente toda la matriz en unos.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 8</h3>
    <p>¿Cuál de las siguientes propiedades es necesaria para que una relación sea de equivalencia?</p>
    <label class="quiz-option"><input type="radio" name="q8" value="A"> A. Reflexividad.</label>
    <label class="quiz-option"><input type="radio" name="q8" value="B"> B. Asimetría.</label>
    <label class="quiz-option"><input type="radio" name="q8" value="C"> C. Antisimetría.</label>
    <label class="quiz-option"><input type="radio" name="q8" value="D"> D. Ninguna de las anteriores.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Una relación de equivalencia debe ser reflexiva, simétrica y transitiva. La asimetría y la antisimetría no forman parte de esa definición.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.70">
    <h3>Pregunta 9</h3>
    <p>¿Qué se entiende por el cierre reflexivo de una relación R?</p>
    <label class="quiz-option"><input type="radio" name="q9" value="A"> A. El conjunto de todos los pares ordenados en R.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="B"> B. La relación original R más los pares (a,a) para cada elemento a del conjunto de referencia.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="C"> C. El conjunto de todos los segundos elementos en los pares ordenados de R.</label>
    <label class="quiz-option"><input type="radio" name="q9" value="D"> D. El conjunto de todos los primeros elementos en los pares ordenados de R.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Para hacer reflexiva una relación, se añaden los pares (a,a) que falten para todos los elementos del conjunto base. La opción B del campus dice «cada R en el dominio», pero la notación correcta es cada elemento a del conjunto sobre el que está definida la relación.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.70">
    <h3>Pregunta 10</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente la composición de dos relaciones R y S?</p>
    <label class="quiz-option"><input type="radio" name="q10" value="A"> A. Los pares (a,c) tales que (a,b) ∈ R y (b,c) ∈ S para algún b.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="B"> B. Los pares (a,b) tales que (a,b) ∈ R y (b,a) ∈ S.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="C"> C. Los pares (b,c) tales que (a,b) ∈ R y (b,c) ∈ S para algún a.</label>
    <label class="quiz-option"><input type="radio" name="q10" value="D"> D. Los pares (b,a) tales que (a,b) ∈ R y (b,c) ∈ S para algún a.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> La composición conecta dos pasos: primero a se relaciona con b mediante R y después b con c mediante S. El resultado conecta directamente a con c. La definición es R seguida de S (según la convención de composición usada en el enunciado).</div>
  </section>

  <section class="quiz-question" data-answer="C" data-weight="0.60">
    <h3>Pregunta 11</h3>
    <p>¿Cuál de las siguientes afirmaciones describe correctamente una relación reflexiva?</p>
    <label class="quiz-option"><input type="radio" name="q11" value="A"> A. Cada elemento está relacionado con al menos otro elemento distinto.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="B"> B. Cada par de elementos distintos están relacionados en ambas direcciones.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="C"> C. Cada elemento está relacionado consigo mismo.</label>
    <label class="quiz-option"><input type="radio" name="q11" value="D"> D. No existen pares de elementos relacionados.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: C.</strong> Reflexiva significa que cada elemento se relaciona consigo mismo. Formalmente, para todo a del conjunto, (a,a) ∈ R. No exige ninguna relación entre elementos distintos.</div>
  </section>

  <section class="quiz-question" data-answer="A" data-weight="0.60">
    <h3>Pregunta 12</h3>
    <p>¿Cuál de las siguientes propiedades describe una relación simétrica?</p>
    <label class="quiz-option"><input type="radio" name="q12" value="A"> A. Si (a,b) ∈ R, entonces (b,a) ∈ R.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="B"> B. Si (a,b) ∈ R y (b,c) ∈ R, entonces (a,c) ∈ R.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="C"> C. Si (a,a) ∈ R para todo a del conjunto.</label>
    <label class="quiz-option"><input type="radio" name="q12" value="D"> D. Si (a,b) ∈ R y (a,c) ∈ R, entonces b = c.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: A.</strong> Simétrica significa que la relación funciona en ambos sentidos: si a está relacionado con b, entonces b también está relacionado con a. La B define transitividad y la C define reflexividad.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.60">
    <h3>Pregunta 13</h3>
    <p>¿Cuál de las siguientes afirmaciones es verdadera para una relación antisimétrica?</p>
    <label class="quiz-option"><input type="radio" name="q13" value="A"> A. Si (a,b) ∈ R, entonces (b,a) ∈ R.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="B"> B. Si (a,b) ∈ R y (b,a) ∈ R, entonces a = b.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="C"> C. Si (a,b) ∈ R y (b,c) ∈ R, entonces (a,c) ∈ R.</label>
    <label class="quiz-option"><input type="radio" name="q13" value="D"> D. Si (a,a) ∈ R para todo a del conjunto.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Antisimétrica significa que dos elementos distintos no pueden estar relacionados en ambos sentidos a la vez. Si aRb y bRa, necesariamente a = b. No significa que esté prohibido que un elemento se relacione consigo mismo.</div>
  </section>

  <section class="quiz-question" data-answer="B" data-weight="0.60">
    <h3>Pregunta 14</h3>
    <p>¿Cuál de las siguientes afirmaciones describe una relación transitiva?</p>
    <label class="quiz-option"><input type="radio" name="q14" value="A"> A. Si (a,b) ∈ R, entonces (b,a) ∈ R.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="B"> B. Si (a,b) ∈ R y (b,c) ∈ R, entonces (a,c) ∈ R.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="C"> C. Si (a,a) ∈ R para todo a del conjunto.</label>
    <label class="quiz-option"><input type="radio" name="q14" value="D"> D. Si (a,b) ∈ R y (a,c) ∈ R, entonces b = c.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: B.</strong> Transitiva significa que se puede encadenar la relación: si a se relaciona con b y b con c, entonces a debe relacionarse con c. Es la propiedad que permite añadir conexiones en el cierre transitivo.</div>
  </section>

  <section class="quiz-question" data-answer="D" data-weight="0.60">
    <h3>Pregunta 15</h3>
    <p>¿Cuál de las siguientes propiedades no es necesaria para que una relación sea de equivalencia?</p>
    <label class="quiz-option"><input type="radio" name="q15" value="A"> A. Reflexividad.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="B"> B. Simetría.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="C"> C. Transitividad.</label>
    <label class="quiz-option"><input type="radio" name="q15" value="D"> D. Antisimetría.</label>
    <div class="quiz-feedback"><strong>Respuesta correcta: D.</strong> Para ser una relación de equivalencia se necesitan exactamente estas tres propiedades: reflexividad, simetría y transitividad. La antisimetría no es necesaria y, en general, puede entrar en conflicto con la simetría cuando hay dos elementos distintos relacionados en ambos sentidos.</div>
  </section>
</div>

<script>
(function () {
  const root = document.getElementById('test-tema-8');
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = 'true';

  const questions = Array.from(root.querySelectorAll('.quiz-question'));
  const result = root.querySelector('#quiz-result-8');

  root.querySelector('#grade-quiz-8').addEventListener('click', function () {
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

  root.querySelector('#reset-quiz-8').addEventListener('click', function () {
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

## Chuleta final — Tema 8

### 1. Producto cartesiano y relaciones

- **Producto cartesiano:** \(A \times B = \{(a,b): a \in A,\ b \in B\}\). El orden de los componentes importa.
- **Relación:** cualquier subconjunto de un producto cartesiano. Si \((a,b) \in R\), a está relacionado con b.
- **Dominio de R:** conjunto de primeras componentes de los pares de R.
- **Imagen o rango:** conjunto de segundas componentes que aparecen en R.

### 2. Matrices booleanas

- Solo contienen **0 y 1**.
- Para representar una relación, \(M_{ij}=1\) significa que existe la relación de i a j; \(M_{ij}=0\) significa que no existe.
- Si la relación es **reflexiva**, toda la diagonal principal está formada por unos.
- **Producto booleano:** se calcula como un producto matricial, pero usando AND (∧) en lugar de multiplicar y OR (∨) en lugar de sumar:

\[
(A \odot B)_{ij} = \bigvee_k (A_{ik} \land B_{kj})
\]

Es decir: para cada posición, se combinan los productos lógicos con OR.

### 3. Propiedades de las relaciones

| Propiedad | Regla | Cómo recordarla |
|---|---|---|
| Reflexiva | \((a,a) \in R\) para todo a | Cada elemento consigo mismo |
| Simétrica | Si \(aRb\), entonces \(bRa\) | Si va, vuelve |
| Antisimétrica | Si \(aRb\) y \(bRa\), entonces \(a=b\) | En ambos sentidos solo si son el mismo |
| Transitiva | Si \(aRb\) y \(bRc\), entonces \(aRc\) | Si encadena, conecta |

**Ojo con simétrica y antisimétrica:** no son lo mismo. Una relación simétrica obliga a que la flecha de vuelta exista. Una antisimétrica permite flechas en ambos sentidos únicamente cuando los dos elementos son iguales.

### 4. Cierres de relaciones

- **Cierre reflexivo:** añade los pares \((a,a)\) que falten.
- **Cierre simétrico:** añade los pares inversos \((b,a)\) cuando ya existe \((a,b)\).
- **Cierre transitivo:** añade los pares necesarios para que, si \(aRb\) y \(bRc\), también exista \(aRc\).

El cierre conserva todos los pares originales y añade los mínimos necesarios para cumplir la propiedad correspondiente.

### 5. Relaciones de equivalencia

Una relación es de equivalencia si cumple simultáneamente:

1. **Reflexividad:** cada elemento se relaciona consigo mismo.
2. **Simetría:** si a se relaciona con b, b se relaciona con a.
3. **Transitividad:** si a se relaciona con b y b con c, a se relaciona con c.

**No se exige antisimetría.**

### 6. Composición de relaciones

Si \((a,b) \in R\) y \((b,c) \in S\), la composición conecta a con c:

\[
(a,c) \in S \circ R
\]

Con esta convención, primero se recorre R y después S. Algunos materiales escriben la composición en el orden \(R;S\), así que conviene fijarse en la definición que use el enunciado.

### 7. Trucos para el examen

- Producto cartesiano = parejas ordenadas; unión = elementos de uno u otro conjunto.
- Dominio = primeras coordenadas; imagen = segundas coordenadas.
- Matriz de relación: 1 significa «sí hay relación» y 0 significa «no hay relación».
- Reflexiva = diagonal llena de unos.
- Simétrica = si hay una flecha, también hay flecha de vuelta.
- Antisimétrica = dos flechas opuestas solo pueden darse entre el mismo elemento.
- Transitiva = dos pasos consecutivos implican el atajo directo.
- Equivalencia = reflexiva + simétrica + transitiva.
