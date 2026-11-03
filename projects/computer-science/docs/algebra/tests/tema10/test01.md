# Test 10 — Relaciones y árboles

Este test interactivo reúne las 15 preguntas del campus. Selecciona una respuesta por pregunta y pulsa **Corregir test** para ver la nota, qué has acertado y explicaciones sencillas. Puedes cambiar las respuestas y corregir de nuevo.

!!! info "Criterio de puntuación"
    Las preguntas 1–10 valen **0,70 puntos** cada una y las preguntas 11–15 valen **0,60 puntos** cada una. La puntuación máxima es **9,00 puntos**, tal como aparece en el campus.

<div id="test10" class="quiz-container">
  <style>
    #test10 { --ok:#16834a; --bad:#c0392b; --line:var(--md-default-fg-color--lightest); }
    #test10 .q { border:1px solid var(--line); border-radius:10px; padding:1rem; margin:1rem 0; }
    #test10 .q h3 { margin-top:0; }
    #test10 .option { display:block; padding:.42rem .6rem; margin:.25rem 0; border-radius:6px; cursor:pointer; }
    #test10 .option:hover { background:var(--md-code-bg-color); }
    #test10 .option input { margin-right:.5rem; }
    #test10 .explanation { display:none; margin-top:.8rem; padding:.75rem; border-left:4px solid var(--line); background:var(--md-code-bg-color); border-radius:4px; }
    #test10 .correct { border-color:var(--ok); }
    #test10 .incorrect { border-color:var(--bad); }
    #test10 .correct .explanation { display:block; border-left-color:var(--ok); }
    #test10 .incorrect .explanation { display:block; border-left-color:var(--bad); }
    #test10 .status { font-weight:700; }
    #test10 button { padding:.65rem 1rem; border:0; border-radius:7px; cursor:pointer; margin:.35rem .4rem .35rem 0; }
    #test10 .primary { background:var(--md-primary-fg-color); color:white; }
    #test10 .secondary { background:var(--md-default-fg-color--lightest); color:var(--md-default-fg-color); }
    #test10 #result { font-size:1.12rem; font-weight:700; margin:1rem 0; }
  </style>

  <div id="questions"></div>
  <button class="primary" type="button" id="grade">Corregir test</button>
  <button class="secondary" type="button" id="reset">Reiniciar</button>
  <div id="result" aria-live="polite"></div>
</div>

<script>
(() => {
  const root = document.getElementById('test10');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  const questions = [
    {w:.7, a:1, q:'¿Cuál de las siguientes afirmaciones describe correctamente una propiedad de una relación reflexiva?', o:[
      'Una relación reflexiva es una relación en la que cada par de elementos distintos está relacionado en ambas direcciones.',
      'Una relación reflexiva es una relación en la que cada elemento está relacionado consigo mismo.',
      'Una relación reflexiva es una relación que no tiene ciclos.',
      'Una relación reflexiva es una relación en la que no hay elementos relacionados.'
    ], e:'Una relación R sobre A es reflexiva cuando cada elemento se relaciona consigo mismo: para todo a∈A, (a,a)∈R. En la matriz de la relación, esto significa que toda la diagonal principal contiene unos.'},
    {w:.7, a:0, q:'¿Qué es una relación simétrica?', o:[
      'Una relación en la que (a,b)∈R implica que (b,a)∈R.',
      'Una relación en la que (a,b)∈R implica que (a,a)∈R.',
      'Una relación en la que (a,a)∈R para todo a∈A.',
      'Una relación en la que no existen pares de elementos relacionados.'
    ], e:'La simetría permite invertir cualquier pareja: si a está relacionado con b, entonces b también está relacionado con a. Por ejemplo, “tener la misma edad que” es simétrica.'},
    {w:.7, a:0, q:'¿Cuál es el recorrido en preorden de un árbol binario?', o:[
      'Recorrer la raíz, luego el subárbol izquierdo y finalmente el subárbol derecho.',
      'Recorrer primero los nodos hoja.',
      'Recorrer la raíz, luego el subárbol derecho y finalmente el subárbol izquierdo.',
      'Recorrer primero los nodos internos.'
    ], e:'Preorden sigue el orden **Raíz–Izquierda–Derecha (RID)**. Se visita primero el nodo actual y después sus dos subárboles.'},
    {w:.7, a:0, q:'¿Cuál es el recorrido en inorden de un árbol binario?', o:[
      'Recorrer el subárbol izquierdo, luego la raíz y finalmente el subárbol derecho.',
      'Recorrer la raíz, luego el subárbol izquierdo y finalmente el subárbol derecho.',
      'Recorrer la raíz, luego el subárbol derecho y finalmente el subárbol izquierdo.',
      'Recorrer primero los nodos hoja.'
    ], e:'Inorden sigue **Izquierda–Raíz–Derecha (IRD)**. En un árbol binario de búsqueda, este recorrido visita las claves en orden creciente.'},
    {w:.7, a:0, q:'¿Cuál es el recorrido en posorden de un árbol binario?', o:[
      'Recorrer el subárbol izquierdo, luego el subárbol derecho y finalmente la raíz.',
      'Recorrer la raíz, luego el subárbol izquierdo y finalmente el subárbol derecho.',
      'Recorrer el subárbol derecho, luego el subárbol izquierdo y finalmente la raíz.',
      'Recorrer primero los nodos internos.'
    ], e:'Posorden sigue **Izquierda–Derecha–Raíz (IDR)**. La raíz se visita al final, después de procesar sus subárboles.'},
    {w:.7, a:0, q:'¿Cuál de los siguientes recorridos es un recorrido de amplitud?', o:[
      'Recorrer cada nivel del árbol de izquierda a derecha, comenzando por la raíz.',
      'Recorrer cada nivel del árbol de derecha a izquierda, comenzando por la raíz.',
      'Recorrer primero los nodos hoja y luego los nodos internos.',
      'Recorrer la raíz, luego el subárbol izquierdo y finalmente el subárbol derecho.'
    ], e:'El recorrido en amplitud (BFS o por niveles) visita primero la raíz, luego todos los nodos del segundo nivel, después los del tercero, etc. Habitualmente se implementa con una cola.'},
    {w:.7, a:0, q:'¿Cuál de las siguientes afirmaciones describe correctamente una relación transitiva?', o:[
      'Si (a,b)∈R y (b,c)∈R, entonces (a,c)∈R.',
      'Si (a,b)∈R, entonces (b,a)∈R.',
      'Si (a,a)∈R para todo a∈A.',
      'Si (a,b)∈R para todo a,b∈A.'
    ], e:'La transitividad encadena relaciones: cuando a se relaciona con b y b con c, también debe relacionarse a con c. No debe confundirse con simetría ni reflexividad.'},
    {w:.7, a:3, q:'¿Cuál de las siguientes propiedades no es necesaria para que una relación sea de equivalencia?', o:[
      'Reflexividad.',
      'Simetría.',
      'Transitividad.',
      'Antisimetría.'
    ], e:'Una relación de equivalencia debe ser reflexiva, simétrica y transitiva. La antisimetría no es necesaria; de hecho, una relación de equivalencia puede relacionar dos elementos distintos en ambas direcciones.'},
    {w:.7, a:0, q:'¿Qué es una relación antisimétrica?', o:[
      'Una relación en la que (a,b)∈R y (b,a)∈R implican que a=b.',
      'Una relación en la que (a,b)∈R implica que (b,a)∈R.',
      'Una relación en la que (a,a)∈R para todo a∈A.',
      'Una relación en la que no existen pares de elementos relacionados.'
    ], e:'Antisimétrica significa que dos elementos distintos no pueden estar relacionados simultáneamente en ambos sentidos. Si aRb y bRa, necesariamente a=b. No significa simplemente “no simétrica”.'},
    {w:.7, a:3, q:'¿Cuál de las siguientes aplicaciones utiliza árboles en informática?', o:[
      'Búsqueda en bases de datos.',
      'Compresión de datos.',
      'Representación de expresiones algebraicas.',
      'Todas las anteriores.'
    ], e:'Las tres aplicaciones utilizan árboles: índices de bases de datos, árboles de Huffman para compresión y árboles de expresión para representar operaciones y operandos.'},
    {w:.6, a:0, q:'¿Cómo se utiliza un árbol binario de búsqueda (BST) en la informática?', o:[
      'Para ordenar elementos de manera eficiente.',
      'Para almacenar datos en un formato comprimido.',
      'Para realizar cálculos matemáticos complejos.',
      'Para representar relaciones jerárquicas simples.'
    ], e:'En un BST, los valores menores que un nodo suelen ir a su izquierda y los mayores a su derecha. Esa organización permite buscar, insertar y recorrer datos ordenadamente. El rendimiento depende de que el árbol no esté muy desequilibrado.'},
    {w:.6, a:2, q:'¿Cuál es una ventaja de utilizar un árbol AVL sobre un árbol binario de búsqueda estándar?', o:[
      'Los árboles AVL permiten ciclos.',
      'Los árboles AVL son más simples de implementar.',
      'Los árboles AVL mantienen un equilibrio que asegura tiempos de búsqueda eficientes.',
      'Los árboles AVL no requieren equilibrio.'
    ], e:'Un AVL es un BST autoequilibrado. Mantiene acotada la diferencia de alturas de los subárboles de cada nodo y realiza rotaciones cuando hace falta. Así garantiza operaciones de búsqueda, inserción y borrado en O(log n).'},
    {w:.6, a:0, q:'¿Cómo se utiliza un árbol de expresión en la evaluación de expresiones algebraicas?', o:[
      'Los nodos representan operaciones y los hijos representan operandos.',
      'Los nodos representan operandos y los hijos representan operaciones.',
      'Los nodos y los hijos representan ciclos.',
      'Los nodos y los hijos representan relaciones reflexivas.'
    ], e:'En un árbol de expresión, los nodos internos suelen contener operadores (+, ×, etc.) y las hojas contienen operandos (números o variables). Por ejemplo, (a+b)×c tiene × en la raíz, + como hijo izquierdo y c como hijo derecho.'},
    {w:.6, a:0, q:'¿Cuál es una aplicación de los árboles de decisión?', o:[
      'Para tomar decisiones basadas en datos mediante una estructura jerárquica de condiciones.',
      'Para representar datos en un formato comprimido.',
      'Para realizar cálculos matemáticos complejos.',
      'Para buscar datos en un formato desordenado.'
    ], e:'Un árbol de decisión plantea una condición en cada nodo interno y ramifica según el resultado. Las hojas representan una decisión, clase o predicción. Se usa, por ejemplo, en clasificación y análisis de decisiones.'},
    {w:.6, a:0, q:'Dado el árbol binario del enunciado, ¿cuál es el recorrido en inorden?', o:[
      'D, B, E, A, C, F.',
      'A, B, D, E, C, F.',
      'D, E, B, A, F, C.',
      'A, B, C, D, E, F.'
    ], e:'El inorden siempre visita izquierda, raíz y derecha. La imagen del árbol no aparece en el texto que has copiado; la opción A corresponde al árbol habitual implícito en las opciones (D y E bajo B; B a la izquierda de A; C a la derecha y F bajo C). Comprueba el dibujo del campus: sin él no se puede verificar de forma independiente esta pregunta.'}
  ];
  const labels = ['A','B','C','D'];
  const host = root.querySelector('#questions');
  questions.forEach((q,i) => {
    const section = document.createElement('section');
    section.className = 'q';
    section.id = `t10q${i+1}`;
    const h = document.createElement('h3'); h.textContent = `Pregunta ${i+1} · ${q.w.toFixed(2).replace('.',',')} puntos`;
    section.appendChild(h);
    const p = document.createElement('p'); p.textContent = q.q; section.appendChild(p);
    q.o.forEach((opt,j) => {
      const label = document.createElement('label'); label.className = 'option';
      const input = document.createElement('input'); input.type='radio'; input.name=`t10q${i}`; input.value=j;
      label.append(input, document.createTextNode(`${labels[j]}. ${opt}`)); section.appendChild(label);
    });
    const feedback = document.createElement('div'); feedback.className='explanation'; feedback.innerHTML='<div class="status"></div><div class="why"></div>'; section.appendChild(feedback);
    host.appendChild(section);
  });
  root.querySelector('#grade').addEventListener('click', () => {
    let score=0, max=0, answered=0, correct=0;
    questions.forEach((q,i) => {
      max += q.w;
      const section=root.querySelector(`#t10q${i+1}`);
      section.classList.remove('correct','incorrect');
      const selected=section.querySelector('input:checked');
      const feedback=section.querySelector('.explanation');
      const status=feedback.querySelector('.status');
      if(selected) {
        answered++;
        if(Number(selected.value)===q.a) { score+=q.w; correct++; section.classList.add('correct'); status.textContent='✓ Correcta'; }
        else { section.classList.add('incorrect'); status.textContent=`✗ Incorrecta. Respuesta correcta: ${labels[q.a]}.`; }
      } else {
        section.classList.add('incorrect');
        status.textContent=`Sin responder. Respuesta correcta: ${labels[q.a]}.`;
      }
      feedback.querySelector('.why').textContent=q.e;
    });
    root.querySelector('#result').textContent=`Resultado: ${score.toFixed(2).replace('.',',')} / ${max.toFixed(2).replace('.',',')} puntos · ${correct} de ${questions.length} correctas · ${answered} respondidas.`;
    root.querySelector('#result').scrollIntoView({behavior:'smooth',block:'center'});
  });
  root.querySelector('#reset').addEventListener('click', () => {
    root.querySelectorAll('input[type=radio]').forEach(x=>x.checked=false);
    root.querySelectorAll('.q').forEach(x=>x.classList.remove('correct','incorrect'));
    root.querySelectorAll('.explanation .status,.explanation .why').forEach(x=>x.textContent='');
    root.querySelector('#result').textContent='';
  });
})();
</script>

## Chuleta final — lo imprescindible

### Relaciones

| Propiedad | Definición que debes recordar |
|---|---|
| Reflexiva | Para todo a: (a,a) pertenece a R. Cada elemento se relaciona consigo mismo. |
| Simétrica | Si aRb, entonces bRa. |
| Antisimétrica | Si aRb y bRa, entonces a=b. |
| Transitiva | Si aRb y bRc, entonces aRc. |
| Equivalencia | Reflexiva + simétrica + transitiva. No exige antisimetría. |

**Truco para no confundirlas:**
- Reflexiva: “consigo mismo”.
- Simétrica: “si va, vuelve”.
- Antisimétrica: “si va y vuelve, son el mismo”.
- Transitiva: “si puedo ir de a a b y de b a c, puedo ir de a a c”.

### Recorridos de árboles binarios

| Recorrido | Orden | Regla mnemotécnica |
|---|---|---|
| Preorden | Raíz – Izquierda – Derecha | La raíz va **PRE**viamente. |
| Inorden | Izquierda – Raíz – Derecha | La raíz va **EN** medio. |
| Posorden | Izquierda – Derecha – Raíz | La raíz va **POST**eriormente. |
| Amplitud (BFS) | Nivel por nivel | Primero todos los cercanos; normalmente usa una cola. |

### Tipos y aplicaciones de árboles

- **BST (árbol binario de búsqueda):** menores a la izquierda y mayores a la derecha (según la convención de claves). Un inorden devuelve las claves ordenadas.
- **AVL:** BST autoequilibrado. Mantiene alturas controladas mediante rotaciones; las operaciones básicas son O(log n).
- **Árbol de expresión:** operadores en nodos internos y operandos en hojas.
- **Árbol de decisión:** condiciones en nodos y resultados/decisiones en hojas.
- **Compresión:** los árboles de Huffman asignan códigos de longitud variable según la frecuencia.
- **Bases de datos:** los árboles B y B+ son estructuras de índice muy utilizadas.

### Mini-ejemplos

Para un árbol con raíz `A`, hijo izquierdo `B`, hijo derecho `C`, y `D` y `E` como hijos de `B`:

- Preorden: `A, B, D, E, C`
- Inorden: `D, B, E, A, C`
- Posorden: `D, E, B, C, A`
- Amplitud: `A, B, C, D, E`

!!! warning "Sobre la pregunta 15"
    En el texto copiado no se ha incluido el dibujo del árbol. La respuesta A se ha marcado siguiendo la estructura que parece presuponer el listado de opciones. Si el árbol del campus tiene otra disposición de nodos, el inorden puede cambiar; compara el dibujo con la regla izquierda–raíz–derecha.
