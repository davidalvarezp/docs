# Test Tema 4 — Sistemas de ecuaciones lineales y eliminación de Gauss

Practica las 15 preguntas del test. Selecciona una respuesta en cada pregunta y pulsa **Corregir test** para ver tu nota, las respuestas correctas y una explicación sencilla.

!!! info "Cómo se calcula la nota"
    Se respetan las puntuaciones del campus: las preguntas 1–5 y 11–15 valen **0,70 puntos**; las preguntas 6–10 valen **0,60 puntos**. El total es de **10 puntos**.

<div id="test-tema-4" class="quiz-container">
  <div class="quiz-toolbar">
    <button type="button" id="corregir-t4" class="md-button md-button--primary">Corregir test</button>
    <button type="button" id="reiniciar-t4" class="md-button">Reiniciar</button>
    <span id="resultado-t4" class="quiz-result" aria-live="polite">15 preguntas · 10 puntos</span>
  </div>
  <div id="preguntas-t4"></div>
  <div id="resumen-t4" class="quiz-summary" aria-live="polite"></div>
</div>

<style>
.quiz-container { margin: 1.2rem 0 2rem; }
.quiz-question { border: 1px solid var(--md-default-fg-color--lightest); border-radius: .5rem; padding: 1rem 1.1rem; margin: 1rem 0; }
.quiz-question h3 { margin-top: 0; font-size: 1.05rem; }
.quiz-options { display: grid; gap: .45rem; }
.quiz-option { display: flex; align-items: flex-start; gap: .55rem; padding: .55rem .65rem; border-radius: .35rem; cursor: pointer; }
.quiz-option:hover { background: var(--md-code-bg-color); }
.quiz-option input { margin-top: .25rem; }
.quiz-feedback { display: none; margin-top: .8rem; padding: .75rem .9rem; border-radius: .35rem; }
.quiz-feedback.correct { display: block; background: rgba(46, 125, 50, .10); border-left: 4px solid #2e7d32; }
.quiz-feedback.incorrect { display: block; background: rgba(198, 40, 40, .09); border-left: 4px solid #c62828; }
.quiz-option.is-correct { background: rgba(46, 125, 50, .10); }
.quiz-option.is-wrong { background: rgba(198, 40, 40, .09); }
.quiz-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: .65rem; margin: 1rem 0; }
.quiz-result { font-weight: 600; margin-left: .3rem; }
.quiz-summary { margin-top: 1rem; font-weight: 600; }
.quiz-explanation { font-weight: normal; margin-top: .35rem; }
</style>

<script>
(function () {
  const questions = [
    {
      q: "¿Cuál de las siguientes afirmaciones es correcta sobre un sistema de ecuaciones lineales?",
      o: ["Un sistema de ecuaciones lineales siempre tiene una solución única.", "Un sistema de ecuaciones lineales puede tener una solución única, ninguna solución o infinitas soluciones.", "Un sistema de ecuaciones lineales siempre tiene infinitas soluciones.", "Un sistema de ecuaciones lineales nunca tiene solución."],
      a: 1, p: 0.7,
      e: "Un sistema lineal puede ser compatible determinado (una solución), compatible indeterminado (infinitas soluciones) o incompatible (ninguna solución). No todos los sistemas tienen el mismo tipo de solución."
    },
    {
      q: "¿Qué implica que la matriz de coeficientes de un sistema de ecuaciones lineales sea invertible?",
      o: ["Que el sistema tiene infinitas soluciones.", "Que el sistema no tiene solución.", "Que el sistema tiene una solución única.", "Que la matriz de coeficientes es singular."],
      a: 2, p: 0.7,
      e: "Si A es invertible, el sistema Ax=b tiene la solución única x=A⁻¹b. Esto presupone que A es cuadrada, como exige la existencia de una inversa ordinaria."
    },
    {
      q: "¿Cuál es la representación matricial de un sistema de ecuaciones lineales?",
      o: ["A · x = b, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes.", "A + x = b, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes.", "A · x = 0, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes.", "A · x + b = 0, donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes."],
      a: 0, p: 0.7,
      e: "La forma compacta es Ax=b. Al multiplicar la matriz A por el vector x se obtiene el vector b de términos independientes. Si b=0, el sistema es homogéneo, pero no es la forma general."
    },
    {
      q: "¿Qué significa que una matriz sea singular?",
      o: ["La matriz tiene un determinante distinto de cero.", "La matriz es simétrica.", "La matriz no tiene inversa.", "La matriz tiene filas linealmente independientes."],
      a: 2, p: 0.7,
      e: "Una matriz cuadrada es singular cuando su determinante es cero; por eso no tiene inversa. Sus filas o columnas son linealmente dependientes."
    },
    {
      q: "¿Cuál de las siguientes afirmaciones es cierta sobre el rango de una matriz?",
      o: ["El rango de una matriz es siempre igual al número de columnas.", "El rango de una matriz es el número máximo de filas linealmente independientes.", "El rango de una matriz es siempre igual al número de filas.", "El rango de una matriz no tiene relación con las filas linealmente independientes."],
      a: 1, p: 0.7,
      e: "El rango es la dimensión del espacio generado por las filas (y también por las columnas). Por tanto, equivale al máximo número de filas linealmente independientes. Nunca supera el número de filas ni el de columnas."
    },
    {
      q: "¿Cuál es el objetivo principal del método de eliminación de Gauss?",
      o: ["Convertir una matriz en una matriz diagonal.", "Convertir una matriz en una matriz triangular superior para resolver el sistema de ecuaciones de manera recursiva.", "Encontrar el determinante de la matriz.", "Calcular la inversa de la matriz."],
      a: 1, p: 0.6,
      e: "Gauss transforma el sistema mediante operaciones elementales por filas hasta obtener una forma escalonada, normalmente triangular superior. Después se resuelve de abajo arriba mediante sustitución regresiva. Gauss-Jordan sí continúa hasta una forma reducida."
    },
    {
      q: "¿Qué significa el término «pivotaje parcial escalado» en el contexto de la eliminación de Gauss?",
      o: ["Seleccionar el pivote más pequeño y situarlo en la primera fila.", "Seleccionar el pivote más grande y situarlo en la primera fila, después dividir la fila por el elemento y restar las filas para hacer 0 los elementos inferiores.", "Seleccionar cualquier pivote y situarlo en la última fila.", "Ignorar el pivote y proceder con la eliminación."],
      a: 1, p: 0.6,
      e: "La opción B es la que más se aproxima a la idea de elegir un pivote grande y permutar filas, pero el enunciado es impreciso: en el pivotaje parcial escalado se elige la fila que maximiza |aᵢₖ|/sᵢ, donde sᵢ es la escala (normalmente el mayor valor absoluto de esa fila). Se intercambian filas si hace falta y luego se elimina. No es obligatorio dividir toda la fila por el pivote."
    },
    {
      q: "¿Cuál de las siguientes propiedades es cierta sobre un sistema de ecuaciones lineales después de aplicar la eliminación de Gauss?",
      o: ["El sistema siempre se convierte en un sistema inconsistente.", "El sistema siempre se convierte en un sistema homogéneo.", "El sistema se convierte en uno con una matriz triangular superior.", "El sistema se convierte en uno con una matriz diagonal."],
      a: 2, p: 0.6,
      e: "La eliminación de Gauss lleva la matriz de coeficientes a forma escalonada; en un sistema cuadrado típico, esto se ve como una matriz triangular superior. No garantiza que el sistema sea compatible, homogéneo ni diagonal."
    },
    {
      q: "¿Cuál es el propósito de restar una fila de otra multiplicada por un coeficiente durante la eliminación de Gauss?",
      o: ["Intercambiar las filas.", "Hacer que uno de los elementos de la fila inferior sea cero para formar una matriz triangular superior.", "Multiplicar las filas por un escalar.", "Dividir la fila por un coeficiente."],
      a: 1, p: 0.6,
      e: "Se usa una operación del tipo Fᵢ ← Fᵢ − kFⱼ para anular el elemento situado debajo del pivote. Repitiendo el proceso se obtiene la forma escalonada."
    },
    {
      q: "¿Qué es una matriz ampliada en el contexto de la eliminación de Gauss?",
      o: ["Una matriz que incluye tanto los coeficientes del sistema de ecuaciones como los términos independientes en una sola matriz.", "Una matriz con filas adicionales añadidas al final.", "Una matriz con columnas adicionales añadidas al final.", "Una matriz que se utiliza solo para encontrar la inversa de la matriz original."],
      a: 0, p: 0.6,
      e: "La matriz ampliada se escribe [A|b]: contiene las columnas de coeficientes y, al final, la columna de términos independientes. Las operaciones por filas se aplican a toda la matriz ampliada."
    },
    {
      q: "¿Cuál de las siguientes afirmaciones describe un sistema compatible determinado?",
      o: ["Un sistema con una única solución.", "Un sistema sin soluciones.", "Un sistema con infinitas soluciones.", "Un sistema que no se puede resolver."],
      a: 0, p: 0.7,
      e: "«Compatible» significa que tiene al menos una solución; «determinado» indica que esa solución es única."
    },
    {
      q: "¿Qué caracteriza a un sistema compatible indeterminado?",
      o: ["Tiene una única solución.", "No tiene soluciones.", "Tiene infinitas soluciones.", "Su solución depende de un parámetro arbitrario."],
      a: 2, p: 0.7,
      e: "La definición es que tiene infinitas soluciones. Al expresar esas soluciones, suelen aparecer uno o varios parámetros libres; por eso la opción D también puede describir una situación habitual. La respuesta más directa y definitoria es C."
    },
    {
      q: "¿Qué significa que un sistema de ecuaciones es incompatible?",
      o: ["El sistema tiene una única solución.", "El sistema no tiene ninguna solución.", "El sistema tiene infinitas soluciones.", "El sistema se puede resolver fácilmente."],
      a: 1, p: 0.7,
      e: "Un sistema incompatible no tiene solución. En la eliminación de Gauss puede aparecer una fila como [0  0  …  0 | c], con c distinto de cero, que equivale a 0=c."
    },
    {
      q: "¿Qué indica una ecuación como 0=2 en un sistema de ecuaciones lineales?",
      o: ["El sistema tiene una única solución.", "El sistema tiene infinitas soluciones.", "El sistema es incompatible.", "El sistema es trivialmente cierto."],
      a: 2, p: 0.7,
      e: "La igualdad 0=2 es una contradicción: no existe ningún valor de las incógnitas que la haga cierta. Por tanto, el sistema no tiene solución y es incompatible."
    },
    {
      q: "¿Cuál es la forma matricial de un sistema compatible determinado?",
      o: ["Una matriz con un rango menor que el número de incógnitas.", "Una matriz con un rango igual al número de incógnitas.", "Una matriz con un rango mayor que el número de incógnitas.", "Una matriz cuadrada singular."],
      a: 1, p: 0.7,
      e: "La opción B es la respuesta que probablemente pretende el test, pero está incompleta si se interpreta literalmente. Por el teorema de Rouché–Capelli, un sistema es compatible determinado si y solo si rango(A)=rango([A|b])=n, donde n es el número de incógnitas. No basta con conocer únicamente el rango de A."
    }
  ];

  const root = document.getElementById("preguntas-t4");
  const result = document.getElementById("resultado-t4");
  const summary = document.getElementById("resumen-t4");
  const letters = ["A", "B", "C", "D"];

  function render() {
    root.innerHTML = "";
    summary.innerHTML = "";
    result.textContent = "15 preguntas · 10 puntos";
    questions.forEach((q, i) => {
      const section = document.createElement("section");
      section.className = "quiz-question";
      const heading = document.createElement("h3");
      heading.textContent = `Pregunta ${i + 1} · ${q.p.toFixed(2).replace(".", ",")} puntos`;
      const prompt = document.createElement("p");
      prompt.textContent = q.q;
      const options = document.createElement("div");
      options.className = "quiz-options";
      q.o.forEach((option, j) => {
        const label = document.createElement("label");
        label.className = "quiz-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `t4-p${i}`;
        input.value = j;
        const text = document.createElement("span");
        text.textContent = `${letters[j]}. ${option}`;
        label.append(input, text);
        options.append(label);
      });
      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      feedback.id = `t4-feedback-${i}`;
      section.append(heading, prompt, options, feedback);
      root.append(section);
    });
  }

  function grade() {
    let earned = 0;
    let total = 0;
    let correct = 0;
    questions.forEach((q, i) => {
      total += q.p;
      const section = root.children[i];
      const selected = section.querySelector(`input[name="t4-p${i}"]:checked`);
      const feedback = document.getElementById(`t4-feedback-${i}`);
      const labels = section.querySelectorAll(".quiz-option");
      labels.forEach((label, j) => {
        label.classList.remove("is-correct", "is-wrong");
        if (j === q.a) label.classList.add("is-correct");
      });
      const isCorrect = selected && Number(selected.value) === q.a;
      if (isCorrect) {
        earned += q.p;
        correct++;
        feedback.className = "quiz-feedback correct";
        feedback.innerHTML = `<strong>¡Correcto!</strong> Respuesta ${letters[q.a]}. <div class="quiz-explanation">${q.e}</div>`;
      } else {
        if (selected) labels[Number(selected.value)].classList.add("is-wrong");
        feedback.className = "quiz-feedback incorrect";
        feedback.innerHTML = `<strong>${selected ? "No es correcto." : "Sin responder."}</strong> La respuesta esperada es ${letters[q.a]}. <div class="quiz-explanation">${q.e}</div>`;
      }
    });
    result.textContent = `${earned.toFixed(2).replace(".", ",")} / ${total.toFixed(2).replace(".", ",")} puntos · ${correct}/15 correctas`;
    summary.textContent = `Resultado: ${(earned / total * 100).toFixed(1).replace(".", ",")} %`;
    summary.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  document.getElementById("corregir-t4").addEventListener("click", grade);
  document.getElementById("reiniciar-t4").addEventListener("click", render);
  render();
})();
</script>

---

## Chuleta final — Sistemas lineales y método de Gauss

### 1. Forma matricial

Un sistema de ecuaciones lineales se representa como:

\[
A\,x=b
\]

- **A**: matriz de coeficientes.
- **x**: vector de incógnitas.
- **b**: vector de términos independientes.
- **Matriz ampliada**: \([A\mid b]\).

### 2. Tipos de sistemas

| Tipo | Número de soluciones | Idea clave |
|---|---:|---|
| Compatible determinado (SCD) | Una | Solución única |
| Compatible indeterminado (SCI) | Infinitas | Hay parámetros libres |
| Incompatible (SI) | Ninguna | Aparece una contradicción |

### 3. Teorema de Rouché–Capelli

Si hay \(n\) incógnitas:

- **Compatible** si \(rango(A)=rango([A\mid b])\).
- **Compatible determinado** si ambos rangos son iguales a \(n\).
- **Compatible indeterminado** si los rangos son iguales, pero menores que \(n\).
- **Incompatible** si los rangos son distintos.

### 4. Rango, singularidad e invertibilidad

- El **rango** es el máximo número de filas (o columnas) linealmente independientes.
- Una matriz cuadrada es **singular** si su determinante es 0; no tiene inversa.
- Una matriz cuadrada es **invertible** si su determinante es distinto de 0.
- Si \(A\) es invertible, \(Ax=b\) tiene solución única: \(x=A^{-1}b\).

### 5. Eliminación de Gauss

Objetivo: transformar el sistema en una forma escalonada (triangular superior en el caso cuadrado) para resolverlo mediante sustitución regresiva.

Operaciones elementales por filas:

1. Intercambiar dos filas.
2. Multiplicar una fila por un número distinto de cero.
3. Sumar a una fila un múltiplo de otra.

Para anular un elemento bajo el pivote:

\[
F_i \leftarrow F_i-kF_j
\]

La matriz ampliada completa \([A\mid b]\) debe recibir las mismas operaciones.

### 6. Pivotaje parcial escalado

En la columna del pivote se compara, para cada fila candidata, el cociente:

\[
\frac{|a_{ik}|}{s_i}
\]

donde \(s_i\) es la escala de la fila (habitualmente, el mayor valor absoluto de sus coeficientes). Se elige el cociente mayor y se intercambian filas si es necesario. Esto ayuda a evitar divisiones por pivotes demasiado pequeños y mejora la estabilidad numérica.

### 7. Detectar contradicciones rápidamente

- Una fila \([0\;0\;\cdots\;0\mid 0]\) representa \(0=0\): no añade contradicción.
- Una fila \([0\;0\;\cdots\;0\mid c]\), con \(c\ne0\), representa \(0=c\): el sistema es incompatible.

!!! warning "Dos matices importantes del test"
    - **Pregunta 7:** la opción B es la más cercana, pero el pivotaje parcial escalado no consiste simplemente en escoger el mayor elemento sin más: compara los cocientes escalados \(|a_{ik}|/s_i\).
    - **Pregunta 12:** la opción C da la definición de sistema compatible indeterminado. La D también describe una forma habitual de expresar sus soluciones mediante parámetros.
    - **Pregunta 15:** la opción B es la pretendida, pero la condición completa es \(rango(A)=rango([A\mid b])=n\), no solo \(rango(A)=n\).
