# Test Tema 5 — Programación lineal, Simplex y dualidad

Practica las 15 preguntas del test. Marca una opción en cada pregunta y pulsa **Corregir test** para obtener tu nota, ver las respuestas correctas y leer las explicaciones.

!!! info "Puntuación"
    Las preguntas 1–5 y 11–15 valen **0,70 puntos**; las preguntas 6–10 valen **0,60 puntos**. Total: **10 puntos**.

<div id="test-tema-5" class="quiz-container">
  <div class="quiz-toolbar">
    <button type="button" id="corregir-t5" class="md-button md-button--primary">Corregir test</button>
    <button type="button" id="reiniciar-t5" class="md-button">Reiniciar</button>
    <span id="resultado-t5" class="quiz-result" aria-live="polite">15 preguntas · 10 puntos</span>
  </div>
  <div id="preguntas-t5"></div>
  <div id="resumen-t5" class="quiz-summary" aria-live="polite"></div>
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
      q: "¿Qué es la programación lineal?",
      o: ["Una técnica para resolver problemas de optimización lineal.", "Un método para calcular integrales.", "Una forma de programación en Java.", "Una técnica de análisis de datos."],
      a: 0, p: 0.7,
      e: "La programación lineal es una herramienta matemática para optimizar (maximizar o minimizar) una función lineal respetando restricciones que también son lineales. Se aplica, por ejemplo, a la planificación de producción, transporte y asignación de recursos."
    },
    {
      q: "¿Cuál es el objetivo principal de un problema de programación lineal?",
      o: ["Encontrar una solución numérica.", "Maximizar o minimizar una función objetivo lineal sujeta a restricciones lineales.", "Calcular la derivada de una función.", "Realizar un análisis estadístico."],
      a: 1, p: 0.7,
      e: "No basta con encontrar cualquier número: buscamos los valores de las variables que hacen máxima o mínima la función objetivo sin incumplir ninguna restricción."
    },
    {
      q: "¿Qué algoritmo se menciona como herramienta para resolver problemas de programación lineal?",
      o: ["Algoritmo de Euclides.", "Algoritmo simplex.", "Algoritmo de Dijkstra.", "Algoritmo de Newton."],
      a: 1, p: 0.7,
      e: "El algoritmo Simplex recorre soluciones básicas factibles, moviéndose entre vértices de la región factible para mejorar el valor de la función objetivo hasta alcanzar el óptimo o detectar que no existe un óptimo finito."
    },
    {
      q: "¿Cuál de las siguientes afirmaciones es cierta acerca de las soluciones óptimas en programación lineal?",
      o: ["Pueden ser tanto locales como globales.", "Son siempre únicas.", "Son siempre globales si existen.", "No existen en programación lineal."],
      a: 2, p: 0.7,
      e: "En programación lineal, si se alcanza un óptimo, es global: la función objetivo lineal sobre una región factible convexa no tiene óptimos locales que sean peores que el global. El óptimo puede ser único o puede haber varios."
    },
    {
      q: "¿Qué se utiliza en la programación lineal para optimizar el rendimiento de sistemas operativos, compiladores y sistemas de bases de datos?",
      o: ["Integración numérica.", "Programación lineal.", "Algoritmos de búsqueda binaria.", "Análisis de Fourier."],
      a: 1, p: 0.7,
      e: "La programación lineal puede ayudar a asignar recursos, planificar tareas y optimizar costes o tiempos en sistemas informáticos. La pregunta se refiere a la técnica general, no a un algoritmo específico."
    },
    {
      q: "¿Cómo se representa un problema de programación lineal en forma estándar?",
      o: ["Utilizando desigualdades.", "Como un sistema de ecuaciones lineales con igualdades y restricciones no negativas.", "Utilizando integrales.", "Como un gráfico de barras."],
      a: 1, p: 0.6,
      e: "En una convención habitual, la forma estándar se escribe con restricciones como Ax=b y x≥0, además de una función objetivo lineal. Según el libro o curso, los nombres «estándar» y «canónica» pueden intercambiarse; lo importante es reconocer la conversión de desigualdades en igualdades y las condiciones de signo."
    },
    {
      q: "¿Qué son las variables de holgura en programación lineal?",
      o: ["Variables que no afectan la solución del problema.", "Variables adicionales que se añaden para convertir desigualdades en igualdades.", "Variables que siempre son cero.", "Variables utilizadas solo en la forma dual del problema."],
      a: 1, p: 0.6,
      e: "Una variable de holgura mide el recurso que sobra en una restricción de tipo ≤. Por ejemplo, x₁+x₂≤10 se transforma en x₁+x₂+s=10, con s≥0. Si s=0, el recurso se usa por completo."
    },
    {
      q: "¿Cuál es la forma general de la función objetivo en programación lineal?",
      o: ["f(x)=c₁x₁+c₂x₂+⋯+cₙxₙ", "f(x)=x²+y²", "f(x)=√x+√y", "f(x)=log(x)+log(y)"],
      a: 0, p: 0.6,
      e: "La función objetivo es una combinación lineal de las variables: cada variable se multiplica por un coeficiente constante y después se suman los términos. No aparecen potencias distintas de 1, raíces ni logaritmos."
    },
    {
      q: "¿Qué se debe hacer para transformar una restricción de desigualdad en igualdad en programación lineal?",
      o: ["Multiplicar la desigualdad por cero.", "Añadir una variable de holgura.", "Dividir la desigualdad por dos.", "Restar una constante."],
      a: 1, p: 0.6,
      e: "Para una restricción ≤ se añade una variable de holgura no negativa. Por ejemplo, 2x+y≤8 pasa a 2x+y+s=8, con s≥0. Para restricciones ≥ suele introducirse una variable de exceso restándola; a veces también hace falta una variable artificial para iniciar Simplex."
    },
    {
      q: "¿Qué significa que un problema de programación lineal esté en forma canónica?",
      o: ["Que está expresado únicamente con ecuaciones no lineales.", "Que está expresado con funciones exponenciales.", "Que está expresado con desigualdades y restricciones no negativas.", "Que está en una representación matemática estándar con igualdades y restricciones no negativas."],
      a: 2, p: 0.6,
      e: "En muchos cursos se llama forma canónica a la representación con desigualdades (por ejemplo, Ax≤b) y variables no negativas. La forma estándar suele expresarse con igualdades Ax=b y variables no negativas. ¡Ojo!: la terminología no es universal y algunos materiales intercambian ambos nombres."
    },
    {
      q: "¿Qué es el problema dual en programación lineal?",
      o: ["Un problema que se obtiene invirtiendo los coeficientes de la función objetivo del problema primal.", "Un problema que no tiene relación con el problema primal.", "Un problema que busca maximizar o minimizar una función objetivo obtenida a partir de las restricciones del problema primal.", "Un problema que siempre tiene una solución opuesta al problema primal."],
      a: 2, p: 0.7,
      e: "El dual se construye sistemáticamente a partir del primal: las restricciones y variables se relacionan, y la matriz de coeficientes se transpone. Los coeficientes del lado derecho del primal pasan a la función objetivo dual y los coeficientes de la función objetivo primal aparecen en las restricciones duales. No consiste simplemente en invertir coeficientes."
    },
    {
      q: "¿Cuál es una de las aplicaciones prácticas del problema dual en programación lineal?",
      o: ["Calcular la inversa de una matriz.", "Resolver problemas de maximización.", "Encontrar la relación entre el problema primal y su solución óptima.", "Transformar un problema no lineal en uno lineal."],
      a: 2, p: 0.7,
      e: "La dualidad permite estudiar el valor y la estructura de la solución óptima del primal desde el dual. Sus variables pueden interpretarse como precios sombra: indican cuánto mejoraría el valor óptimo si se dispusiera de una unidad adicional de un recurso, dentro de ciertos límites."
    },
    {
      q: "¿Cuál de las siguientes afirmaciones es cierta sobre el algoritmo Simplex?",
      o: ["Siempre encuentra una solución en el primer intento.", "Solo se aplica a problemas no lineales.", "Desplaza la solución de un extremo a otro del politopo factible hasta encontrar la solución óptima.", "No es útil para problemas con más de dos variables."],
      a: 2, p: 0.7,
      e: "Simplex se desplaza entre vértices (soluciones básicas factibles) de la región factible, mejorando la función objetivo. No se limita a dos variables ni garantiza resolver en un solo paso. En casos especiales puede haber degeneración o ciclos, aunque existen reglas para evitarlos."
    },
    {
      q: "¿Qué indica una solución óptima no acotada en un problema de programación lineal?",
      o: ["Que el problema tiene una solución única.", "Que el problema no tiene solución factible.", "Que la función objetivo puede incrementarse indefinidamente.", "Que todas las soluciones son iguales."],
      a: 2, p: 0.7,
      e: "«No acotado» significa que se puede mejorar la función objetivo sin límite (aumentarla indefinidamente en un problema de maximización o disminuirla indefinidamente en uno de minimización). Esto es distinto de no tener soluciones factibles."
    },
    {
      q: "¿Qué significa cuando un problema de programación lineal tiene varias soluciones óptimas?",
      o: ["Que todas las soluciones son ineficientes.", "Que el óptimo se encuentra en un conjunto de valores pertenecientes a una cara de la región factible.", "Que no hay una solución óptima.", "Que la función objetivo no tiene una máxima ni mínima."],
      a: 1, p: 0.7,
      e: "Hay más de un punto factible que alcanza el mismo valor óptimo. Si hay dos soluciones óptimas distintas, todos los puntos del segmento que las une también son óptimos. Geométricamente, el óptimo puede ocupar una arista o una cara completa de la región factible."
    }
  ];

  const root = document.getElementById("preguntas-t5");
  const result = document.getElementById("resultado-t5");
  const summary = document.getElementById("resumen-t5");
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
        input.name = `t5-p${i}`;
        input.value = j;
        const text = document.createElement("span");
        text.textContent = `${letters[j]}. ${option}`;
        label.append(input, text);
        options.append(label);
      });
      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      feedback.id = `t5-feedback-${i}`;
      section.append(heading, prompt, options, feedback);
      root.append(section);
    });
  }

  function grade() {
    let earned = 0, total = 0, correct = 0;
    questions.forEach((q, i) => {
      total += q.p;
      const section = root.children[i];
      const selected = section.querySelector(`input[name="t5-p${i}"]:checked`);
      const feedback = document.getElementById(`t5-feedback-${i}`);
      const labels = section.querySelectorAll(".quiz-option");
      labels.forEach((label, j) => {
        label.classList.remove("is-correct", "is-wrong");
        if (j === q.a) label.classList.add("is-correct");
      });
      const isCorrect = selected && Number(selected.value) === q.a;
      if (isCorrect) {
        earned += q.p; correct++;
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

  document.getElementById("corregir-t5").addEventListener("click", grade);
  document.getElementById("reiniciar-t5").addEventListener("click", render);
  render();
})();
</script>

---

## Chuleta final — Programación lineal

### 1. ¿Qué es?

La **programación lineal** busca maximizar o minimizar una función lineal respetando restricciones lineales.

- **Variables de decisión:** lo que podemos elegir (por ejemplo, cuántas unidades fabricar).
- **Función objetivo:** lo que queremos optimizar (beneficio, coste, tiempo…).
- **Restricciones:** límites de recursos, capacidad, demanda, etc.
- **No negatividad:** normalmente \(x_i\geq0\).

Forma general:

\[
\text{Optimizar } z=c_1x_1+\cdots+c_nx_n
\]

sujeto a restricciones lineales.

### 2. Región factible y solución óptima

- La **región factible** contiene todos los puntos que cumplen todas las restricciones.
- Una solución factible cumple las restricciones, pero no tiene por qué ser óptima.
- Una solución **óptima** es la factible que da el mejor valor de la función objetivo.
- En programación lineal, todo óptimo alcanzado es global.
- Puede haber un óptimo único o varios óptimos.

### 3. Forma canónica y forma estándar

La nomenclatura cambia entre manuales. Una convención frecuente es:

| Forma | Restricciones | No negatividad |
|---|---|---|
| Canónica | Desigualdades (p. ej. \(Ax\leq b\)) | \(x\geq0\) |
| Estándar | Igualdades (\(Ax=b\)) | \(x\geq0\) |

Lo importante es identificar qué representación está usando el temario.

### 4. Variables de holgura y exceso

Para convertir una desigualdad en igualdad:

- Si es **≤**, añadimos holgura: \(2x+y\leq8\) pasa a \(2x+y+s=8\), con \(s\geq0\).
- Si es **≥**, restamos una variable de exceso: \(2x+y\geq8\) pasa a \(2x+y-e=8\), con \(e\geq0\).

La holgura representa recurso que queda sin utilizar. El exceso representa cuánto se supera un mínimo exigido.

### 5. Algoritmo Simplex

1. Se parte de una solución básica factible (un vértice de la región factible).
2. Se elige una variable entrante para mejorar la función objetivo.
3. Se determina qué variable sale mediante el criterio de razón.
4. Se pivota para pasar a otro vértice.
5. Se repite hasta que no se puede mejorar el objetivo.

Simplex funciona también con más de dos variables; el dibujo en dos dimensiones es solo una ayuda visual.

### 6. Dualidad

Todo problema lineal (primal) tiene asociado un problema dual.

- Las variables del dual se relacionan con las restricciones del primal.
- Las restricciones del dual se relacionan con las variables del primal.
- La matriz de coeficientes se transpone.
- Bajo las condiciones habituales, los valores óptimos del primal y del dual coinciden (dualidad fuerte).
- Las variables duales suelen interpretarse como **precios sombra** de los recursos.

### 7. Situaciones que pueden aparecer

| Situación | Significado |
|---|---|
| Óptimo único | Un único punto alcanza el mejor valor |
| Óptimos múltiples | Varios puntos alcanzan el mismo mejor valor |
| Problema infactible | No existe ningún punto que cumpla todas las restricciones |
| Problema no acotado | La función objetivo puede mejorar indefinidamente |

!!! warning "No confundas"
    - **Infactible** no es lo mismo que **no acotado**: en el primero no hay soluciones factibles; en el segundo sí las hay, pero el objetivo puede mejorar sin límite.
    - **Solución factible** no significa necesariamente **solución óptima**.
    - La holgura se añade a restricciones de tipo ≤; para restricciones ≥ se utiliza una variable de exceso.
