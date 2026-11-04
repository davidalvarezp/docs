---
title: Test Tema 5 - Programación lineal, Simplex y dualidad
---

# Test Tema 5: Programación lineal, Simplex y dualidad

Este test está basado en las 15 preguntas del cuestionario del tema. Tiene **una sola respuesta correcta por pregunta**. Selecciona tus respuestas y pulsa **Comprobar respuestas** para conocer tu nota, ver la explicación rápida de cada pregunta y consultar al final las soluciones explicadas paso a paso.

!!! tip "Cómo estudiar"
    Haz primero el test sin mirar las soluciones. Al corregirlo, lee la **explicación rápida** de cada pregunta y, si necesitas profundizar, despliega la **explicación detallada paso a paso** al final de la página.

<div id="quiz-tema5" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La programación lineal es un método matemático de optimización para maximizar o minimizar una función objetivo lineal sujeta a restricciones representadas por ecuaciones o inecuaciones lineales.">
      <legend>1. ¿Qué es la programación lineal?</legend>
      <label><input type="radio" name="q1" value="a"> A. Una técnica para resolver problemas de optimización lineal.</label>
      <label><input type="radio" name="q1" value="b"> B. Un método para calcular integrales.</label>
      <label><input type="radio" name="q1" value="c"> C. Una forma de programación en Java.</label>
      <label><input type="radio" name="q1" value="d"> D. Una técnica de análisis de datos.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Su propósito central es encontrar los valores de las variables de decisión que optimicen (maximicen o minimicen) el valor de la función objetivo cumpliendo todas las restricciones.">
      <legend>2. ¿Cuál es el objetivo principal de un problema de programación lineal?</legend>
      <label><input type="radio" name="q2" value="a"> A. Encontrar una solución numérica.</label>
      <label><input type="radio" name="q2" value="b"> B. Maximizar o minimizar una función objetivo lineal sujeta a restricciones lineales.</label>
      <label><input type="radio" name="q2" value="c"> C. Calcular la derivada de una función.</label>
      <label><input type="radio" name="q2" value="d"> D. Realizar un análisis estadístico.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El algoritmo Simplex es el método iterativo fundamental para resolver problemas de programación lineal explorando los vértices (soluciones básicas factibles) de la región factible.">
      <legend>3. ¿Qué algoritmo se menciona como herramienta para resolver problemas de programación lineal?</legend>
      <label><input type="radio" name="q3" value="a"> A. Algoritmo de Euclides.</label>
      <label><input type="radio" name="q3" value="b"> B. Algoritmo simplex.</label>
      <label><input type="radio" name="q3" value="c"> C. Algoritmo de Dijkstra.</label>
      <label><input type="radio" name="q3" value="d"> D. Algoritmo de Newton.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Debido a la convexidad del conjunto de soluciones factibles y a la linealidad de la función objetivo, todo óptimo local en programación lineal es siempre un óptimo global.">
      <legend>4. ¿Cuál de las siguientes afirmaciones es cierta acerca de las soluciones óptimas en programación lineal?</legend>
      <label><input type="radio" name="q4" value="a"> A. Pueden ser tanto locales como globales.</label>
      <label><input type="radio" name="q4" value="b"> B. Son siempre únicas.</label>
      <label><input type="radio" name="q4" value="c"> C. Son siempre globales si existen.</label>
      <label><input type="radio" name="q4" value="d"> D. No existen en programación lineal.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La programación lineal es una técnica versátil aplicada directamente en informática para optimizar el reparto de recursos, memoria, planificación de hilos y consultas en bases de datos.">
      <legend>5. ¿Qué se utiliza en la programación lineal para optimizar el rendimiento de sistemas operativos, compiladores y sistemas de bases de datos?</legend>
      <label><input type="radio" name="q5" value="a"> A. Integración numérica.</label>
      <label><input type="radio" name="q5" value="b"> B. Programación lineal.</label>
      <label><input type="radio" name="q5" value="c"> C. Algoritmos de búsqueda binaria.</label>
      <label><input type="radio" name="q5" value="d"> D. Análisis de Fourier.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La forma estándar requiere transformar las inecuaciones en un sistema de ecuaciones lineales mediante igualdades (Ax = b) apoyándose en variables no negativas (x ≥ 0).">
      <legend>6. ¿Cómo se representa un problema de programación lineal en forma estándar?</legend>
      <label><input type="radio" name="q6" value="a"> A. Utilizando desigualdades.</label>
      <label><input type="radio" name="q6" value="b"> B. Como un sistema de ecuaciones lineales con igualdades y restricciones no negativas.</label>
      <label><input type="radio" name="q6" value="c"> C. Utilizando integrales.</label>
      <label><input type="radio" name="q6" value="d"> D. Como un gráfico de barras.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Una variable de holgura es una variable no negativa que se suma al lado izquierdo de una restricción de tipo ≤ para convertir la desigualdad en una ecuación de igualdad.">
      <legend>7. ¿Qué son las variables de holgura en programación lineal?</legend>
      <label><input type="radio" name="q7" value="a"> A. Variables que no afectan la solución del problema.</label>
      <label><input type="radio" name="q7" value="b"> B. Variables adicionales que se añaden para convertir desigualdades en igualdades.</label>
      <label><input type="radio" name="q7" value="c"> C. Variables que siempre son cero.</label>
      <label><input type="radio" name="q7" value="d"> D. Variables utilizadas solo en la forma dual del problema.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="La función objetivo expresa la meta del problema como una combinación lineal f(x) = c₁x₁ + c₂x₂ + ... + cₙxₙ donde las variables aparecen con potencia 1.">
      <legend>8. ¿Cuál es la forma general de la función objetivo en programación lineal?</legend>
      <label><input type="radio" name="q8" value="a"> A. f(x)=c₁x₁+c₂x₂+⋯+cₙxₙ</label>
      <label><input type="radio" name="q8" value="b"> B. f(x)=x²+y²</label>
      <label><input type="radio" name="q8" value="c"> C. f(x)=√x+√y</label>
      <label><input type="radio" name="q8" value="d"> D. f(x)=log(x)+log(y)</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Para convertir una restricción de menor o igual (≤) en una ecuación estricta (=), se introduce una variable de holgura s ≥ 0 (ejemplo: 2x + y + s = 8).">
      <legend>9. ¿Qué se debe hacer para transformar una restricción de desigualdad en igualdad en programación lineal?</legend>
      <label><input type="radio" name="q9" value="a"> A. Multiplicar la desigualdad por cero.</label>
      <label><input type="radio" name="q9" value="b"> B. Añadir una variable de holgura.</label>
      <label><input type="radio" name="q9" value="c"> C. Dividir la desigualdad por dos.</label>
      <label><input type="radio" name="q9" value="d"> D. Restar una constante.</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="En muchos contextos académicos se denomina forma canónica al modelo formulado mediante inecuaciones de desigualdad (ejemplo: Ax ≤ b) con condiciones de no negatividad en las variables.">
      <legend>10. ¿Qué significa que un problema de programación lineal esté en forma canónica?</legend>
      <label><input type="radio" name="q10" value="a"> A. Que está expresado únicamente con ecuaciones no lineales.</label>
      <label><input type="radio" name="q10" value="b"> B. Que está expresado con funciones exponenciales.</label>
      <label><input type="radio" name="q10" value="c"> C. Que está expresado con desigualdades y restricciones no negativas.</label>
      <label><input type="radio" name="q10" value="d"> D. Que está en una representación matemática estándar con igualdades y restricciones no negativas.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El problema dual es un modelo alternativo construido a partir de la matriz traspuesta, las restricciones y los coeficientes de la función objetivo del problema original (primal).">
      <legend>11. ¿Qué es el problema dual en programación lineal?</legend>
      <label><input type="radio" name="q11" value="a"> A. Un problema que se obtiene invirtiendo los coeficientes de la función objetivo del problema primal.</label>
      <label><input type="radio" name="q11" value="b"> B. Un problema que no tiene relación con el problema primal.</label>
      <label><input type="radio" name="q11" value="c"> C. Un problema que busca maximizar o minimizar una función objetivo obtenida a partir de las restricciones del problema primal.</label>
      <label><input type="radio" name="q11" value="d"> D. Un problema que siempre tiene una solución opuesta al problema primal.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Permite analizar la sensibilidad de la solución y ofrece la interpretación de los 'precios sombra' (Shadow Prices) sobre cómo varía el beneficio al alterar la disponibilidad de un recurso.">
      <legend>12. ¿Cuál es una de las aplicaciones prácticas del problema dual en programación lineal?</legend>
      <label><input type="radio" name="q12" value="a"> A. Calcular la inversa de una matriz.</label>
      <label><input type="radio" name="q12" value="b"> B. Resolver problemas de maximización.</label>
      <label><input type="radio" name="q12" value="c"> C. Encontrar la relación entre el problema primal y su solución óptima.</label>
      <label><input type="radio" name="q12" value="d"> D. Transformar un problema no lineal en uno lineal.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El método Simplex es una técnica algebraica que recorre los vértices contiguos del politopo de la región factible incrementando el valor del objetivo en cada paso hasta alcanzar el óptimo.">
      <legend>13. ¿Cuál de las siguientes afirmaciones es cierta sobre el algoritmo Simplex?</legend>
      <label><input type="radio" name="q13" value="a"> A. Siempre encuentra una solución en el primer intento.</label>
      <label><input type="radio" name="q13" value="b"> B. Solo se aplica a problemas no lineales.</label>
      <label><input type="radio" name="q13" value="c"> C. Desplaza la solución de un extremo a otro del politopo factible hasta encontrar la solución óptima.</label>
      <label><input type="radio" name="q13" value="d"> D. No es útil para problemas con más de dos variables.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Un problema no acotado ocurre cuando la región factible es abierta en la dirección de optimización, permitiendo hacer la función objetivo tan grande (o pequeña) como se desee.">
      <legend>14. ¿Qué indica una solución óptima no acotada en un problema de programación lineal?</legend>
      <label><input type="radio" name="q14" value="a"> A. Que el problema tiene una solución única.</label>
      <label><input type="radio" name="q14" value="b"> B. Que el problema no tiene solución factible.</label>
      <label><input type="radio" name="q14" value="c"> C. Que la función objetivo puede incrementarse indefinidamente.</label>
      <label><input type="radio" name="q14" value="d"> D. Que todas las soluciones son iguales.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Ocurre cuando la recta/plano de la función objetivo es paralela a una de las fronteras de la región factible, haciendo que todos los puntos de esa arista o cara compartan el mismo valor óptimo.">
      <legend>15. ¿Qué significa cuando un problema de programación lineal tiene varias soluciones óptimas?</legend>
      <label><input type="radio" name="q15" value="a"> A. Que todas las soluciones son ineficientes.</label>
      <label><input type="radio" name="q15" value="b"> B. Que el óptimo se encuentra en un conjunto de valores pertenecientes a una cara de la región factible.</label>
      <label><input type="radio" name="q15" value="c"> C. Que no hay una solución óptima.</label>
      <label><input type="radio" name="q15" value="d"> D. Que la función objetivo no tiene una máxima ni mínima.</label>
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
<summary>1. Respuesta correcta: A — Definición de Programación Lineal</summary>

La **programación lineal** es una disciplina fundamental de la investigación operativa encargada de optimizar (maximizar o minimizar) una función objetivo lineal, sujeta a un conjunto de restricciones compuestas por ecuaciones o inecuaciones lineales.

Se utiliza ampliamente en la planificación de recursos, logística, optimización de redes, asignación de tareas informáticas y gestión financiera.

**Para el examen:** todas las expresiones dentro del modelo (tanto la función objetivo como las restricciones) deben ser estrictamente de primer grado (lineales).
</details>

<details class="solution">
<summary>2. Respuesta correcta: B — Objetivo fundamental de la programación lineal</summary>

El objetivo básico consiste en encontrar la combinación de valores para las variables de decisión $x_1, x_2, \dots, x_n$ dentro de la **región factible** que consiga el valor óptimo (el máximo beneficio o el mínimo coste) de la función objetivo.

No consiste simplemente en resolver un sistema lineal ordinario, sino en **seleccionar la mejor solución entre un conjunto infinito de soluciones posibles**.
</details>

<details class="solution">
<summary>3. Respuesta correcta: B — El algoritmo Simplex</summary>

El **algoritmo Simplex**, desarrollado por George Dantzig en 1947, es la técnica sistemática para resolver modelos de programación lineal.

- Opera geométricamente desplazándose a través de los **vértices (extremos)** del politopo de la región factible.
- En cada iteración evalúa si el vértice contiguo mejora el valor de la función objetivo.
- Finaliza cuando no existen vértices contiguos con mejor resultado (alcanzando el óptimo) o detecta que la solución no está acotada.
</details>

<details class="solution">
<summary>4. Respuesta correcta: C — Óptimos globales en modelos lineales</summary>

Gracias a la propiedad matemática de **convexidad** del espacio de soluciones factibles y a la linealidad de la función objetivo:
- Si un problema de programación lineal tiene una solución óptima local, esta es **garantizadamente un óptimo global**.
- No existen "trampas" de máximos o mínimos locales peores que el óptimo global, a diferencia de lo que sucede en la programación no lineal.

**Excepción:** Un modelo puede tener **varios óptimos globales** (infinitos puntos a lo largo de una cara o arista que alcanzan exactamente el mismo valor máximo o mínimo).
</details>

<details class="solution">
<summary>5. Respuesta correcta: B — Uso en ciencias de la computación</summary>

En el área de los sistemas informáticos, la **programación lineal** se aplica de manera constante para resolver problemas complejos de optimización:
- **Sistemas Operativos:** Planificación eficiente de procesos en CPU y asignación de memoria.
- **Compiladores:** Asignación óptima de registros del procesador a variables.
- **Bases de Datos:** Optimización de consultas y planificación de recursos de almacenamiento/red.
</details>

<details class="solution">
<summary>6. Respuesta correcta: B — Representación en forma estándar</summary>

Un problema de programación lineal se encuentra en **forma estándar** cuando reúne las siguientes condiciones:
1. La función objetivo busca maximizar o minimizar una combinación lineal de variables.
2. Todas las restricciones se expresan como **igualdades puras** ($A x = b$).
3. Todas las variables de decisión están restringidas a ser **no negativas** ($x_i \ge 0$).
4. Los términos independientes son no negativos ($b_i \ge 0$).

Para llevar inecuaciones a la forma estándar se introducen variables de holgura o de exceso.
</details>

<details class="solution">
<summary>7. Respuesta correcta: B — Variables de holgura</summary>

Una **variable de holgura** ($s \ge 0$) es una variable auxiliar no negativa que se suma al miembro izquierdo de una restricción de menor o igual ($\le$) para transformarla en una igualdad estricta.

**Ejemplo:**
\[
2x_1 + 3x_2 \le 12 \implies 2x_1 + 3x_2 + s_1 = 12 \quad \text{con } s_1 \ge 0
\]

**Interpretación económica:** La variable $s_1$ representa la cantidad de recurso no consumido o sobrante de esa restricción concreta.
</details>

<details class="solution">
<summary>8. Respuesta correcta: A — Estructura de la función objetivo</summary>

La función objetivo en programación lineal siempre presenta la forma matemática de una **combinación lineal**:
\[
f(x_1, x_2, \dots, x_n) = c_1 x_1 + c_2 x_2 + \dots + c_n x_n
\]
Donde los coeficientes $c_j$ son constantes conocidas que representan el peso, beneficio o coste unitario de cada variable $x_j$.

**Regla clave:** No se admiten exponentes ($x^2$), productos entre variables ($x_1 \cdot x_2$), raíces ni funciones trascendentes ($\log, \sin$).
</details>

<details class="solution">
<summary>9. Respuesta correcta: B — Conversión de desigualdades a igualdades</summary>

Para pasar de inecuaciones a ecuaciones necesarias en la tabla Simplex:
- En restricciones de tipo **$\le$**: Se **suma** una variable de holgura ($s_i \ge 0$).
- En restricciones de tipo **$\ge$**: Se **resta** una variable de exceso ($e_i \ge 0$) y, si se requiere iniciar una base factible, se suma una variable artificial ($a_i \ge 0$).
</details>

<details class="solution">
<summary>10. Respuesta correcta: C — Forma canónica</summary>

En la literatura académica tradicional, un problema de programación lineal está en **forma canónica** de maximización cuando:
1. Se busca **maximizar** la función objetivo.
2. Todas las restricciones funcionales son desigualdades de tipo **menor o igual ($\le$)**.
3. Todas las variables de decisión satisfacen la condición de **no negatividad ($x_i \ge 0$)**.

*(Nota: Aunque algunos textos intercambian la denominación entre estándar y canónica, la canónica se identifica de manera general por trabajar con inecuaciones y la estándar por usar ecuaciones reducidas).*
</details>

<details class="solution">
<summary>11. Respuesta correcta: C — Definición del problema dual</summary>

A cada problema de programación lineal (denominado **Primal**) le corresponde de forma matemática única un problema secundario asociado llamado **Problema Dual**.

Las reglas de conversión entre el Primal y el Dual son:
- Si el Primal **maximiza**, el Dual **minimiza** (y viceversa).
- Los coeficientes $c_j$ de la función objetivo primal pasan a ser los términos independientes $b_j$ del dual.
- Los términos independientes $b_i$ del primal pasan a ser los coeficientes $c_i$ de la función objetivo dual.
- La matriz de coeficientes del dual es la **traspuesta ($A^T$)** de la matriz del primal.
</details>

<details class="solution">
<summary>12. Respuesta correcta: C — Utilidad del problema dual y Precios Sombra</summary>

La resolución del problema dual aporta información sobre la estructura y sensibilidad del problema primal:
- **Teorema de Dualidad Fuerte:** Si el primal y el dual tienen soluciones óptimas, sus valores objetivos en el óptimo son **exactamente iguales** ($Z_{\text{primal}} = W_{\text{dual}}$).
- **Precios Sombra (Shadow Prices):** Los valores óptimos de las variables duales $y_i$ indican cuánto aumenta el valor de la función objetivo por cada unidad adicional que se incremente en la disponibilidad del recurso $b_i$.
</details>

<details class="solution">
<summary>13. Respuesta correcta: C — Funcionamiento del algoritmo Simplex</summary>

Geométricamente, el conjunto de soluciones factibles define un polihedro o **politopo convexo** multidimensional.

El **algoritmo Simplex**:
1. Comienza evaluando un vértice inicial.
2. Comprueba mediante los costes reducidos si moverse a un vértice adyacente mejora la función objetivo.
3. Se desplaza a lo largo de las aristas del politopo hasta llegar a un vértice donde ningún movimiento mejore el resultado, garantizando la solución óptima.
</details>

<details class="solution">
<summary>14. Respuesta correcta: C — Solución no acotada</summary>

Un problema de programación lineal es **no acotado** cuando la función objetivo puede crecer indefinidamente hacia $+\infty$ (en maximización) o disminuir hacia $-\infty$ (en minimización) sin salir de la región factible.

**Causa:** Ocurre cuando la región factible no está cerrada en la dirección de mejora de la función objetivo o falta alguna restricción crítica en el modelo.
</details>

<details class="solution">
<summary>15. Respuesta correcta: B — Soluciones óptimas múltiples</summary>

Existen **múltiples soluciones óptimas** cuando la pendiente de la función objetivo es exactamente paralela a la pendiente de una de las restricciones activas que delimitan la región factible.

Geométricamente:
- El valor óptimo no se alcanza solo en un único vértice aisladamente, sino en **todos los puntos pertenecientes a la arista o cara** del politopo que conecta los vértices óptimos.
- El problema tiene infinitas soluciones factibles que otorgan exactamente el mismo beneficio o coste máximo/mínimo.
</details>

---

## Chuleta final: lo imprescindible para aprobar

### 1. Elementos del modelo de Programación Lineal (PL)

- **Variables de decisión:** $x_1, x_2, \dots, x_n \ge 0$.
- **Función objetivo:** $Z = c_1 x_1 + c_2 x_2 + \dots + c_n x_n$ (Maximizar o Minimizar).
- **Restricciones:** $a_{i1} x_1 + a_{i2} x_2 + \dots + a_{in} x_n \ (\le, =, \ge) \ b_i$.

### 2. Formas del problema

| Característica | Forma Canónica (Max) | Forma Estándar |
|---|---|---|
| **Función Objetivo** | Maximizar | Maximizar o Minimizar |
| **Restricciones** | Inecuaciones ($\le$) | Igualdades estrictas ($Ax = b$) |
| **Variables** | $x_i \ge 0$ | $x_i \ge 0$ (Añade variables $s_i$ de holgura) |

### 3. Conceptos del Algoritmo Simplex

- **Región factible:** Conjunto convexo definido por la intersección de todas las restricciones.
- **Variables de holgura ($s_i \ge 0$):** Se suman en restricciones $\le$ para convertirlas en igualdades.
- **Variables de exceso ($e_i \ge 0$):** Se restan en restricciones $\ge$.
- **Solución Básica Factible (SBF):** Corresponde a un **vértice** del politopo de la región factible.
- **Criterio de parada:** Cuando no hay costes reducidos que permitan mejorar el valor de $Z$.

### 4. Relación Primal - Dual

- **Matriz de coeficientes:** Se traspone ($A \to A^T$).
- **Vectores de costes y recursos:** Se intercambian ($c \leftrightarrow b$).
- **Dualidad Fuerte:** En el óptimo, $Z_{\text{primal}} = W_{\text{dual}}$.
- **Precio Sombra ($y_i$):** Representa la tasa de cambio del valor óptimo por cada unidad adicional del recurso $i$.

### 5. Tipos de soluciones en PL

1. **Óptimo Único:** Se alcanza en un solo vértice del politopo.
2. **Óptimos Múltiples:** La función objetivo es paralela a una restricción; infinitos puntos sobre una cara/arista dan el mismo valor.
3. **Infactible:** La región factible es vacía (no hay ningún punto que cumpla todas las restricciones a la vez).
4. **No Acotado:** La función objetivo puede crecer/decrecer indefinidamente sin violar las restricciones.

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