---
title: Test Tema 2 - Inducción matemática y recursión
---
# Test Tema 2: Inducción matemática y recursión

Este test está basado en las 15 preguntas del cuestionario original. Tiene **una sola respuesta correcta por pregunta**. Selecciona tus respuestas y pulsa **Comprobar respuestas** para conocer tu nota, ver la explicación rápida de cada pregunta y consultar al final las soluciones explicadas paso a paso.

!!! tip "Cómo estudiar"
    Haz primero el test sin mirar las soluciones. Al corregirlo, lee la **explicación rápida** de cada pregunta y, si necesitas profundizar, despliega la **explicación detallada paso a paso** al final de la página.

<div id="quiz-tema2" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La inducción matemática es un método de demostración que permite probar propiedades para todos los números naturales a partir de un caso base inicial.">
      <legend>1. ¿Qué es la inducción matemática?</legend>
      <label><input type="radio" name="q1" value="a"> A. Un método para calcular límites.</label>
      <label><input type="radio" name="q1" value="b"> B. Un método de demostración para proposiciones sobre números naturales.</label>
      <label><input type="radio" name="q1" value="c"> C. Una técnica para resolver ecuaciones diferenciales.</label>
      <label><input type="radio" name="q1" value="d"> D. Un procedimiento para simplificar expresiones algebraicas.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El primer paso indispensable es probar el caso base, garantizando que la afirmación se cumple para el valor inicial (por ejemplo, \(n=1\)).">
      <legend>2. ¿Cuál es el primer paso de una demostración por inducción?</legend>
      <label><input type="radio" name="q2" value="a"> A. Definir la hipótesis inductiva.</label>
      <label><input type="radio" name="q2" value="b"> B. Probar el paso inductivo.</label>
      <label><input type="radio" name="q2" value="c"> C. Demostrar el caso base.</label>
      <label><input type="radio" name="q2" value="d"> D. Comprobar todos los números naturales uno por uno.</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="En el paso inductivo se demuestra la implicación \(P(n) \Rightarrow P(n+1)\): asumiendo que vale para \(n\), se prueba que se cumple para el siguiente.">
      <legend>3. ¿Qué se hace en el paso inductivo?</legend>
      <label><input type="radio" name="q3" value="a"> A. Se supone que la proposición es falsa para algún número.</label>
      <label><input type="radio" name="q3" value="b"> B. Se demuestra que, si es cierta para \(n\), también lo es para \(n+1\).</label>
      <label><input type="radio" name="q3" value="c"> C. Se concluye que la proposición es falsa para todos los naturales.</label>
      <label><input type="radio" name="q3" value="d"> D. Se inventa una proposición diferente.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La inducción fuerte permite suponer cierta la propiedad para todos los términos desde el caso inicial hasta \(n\), facilitando demostrar \(n+1\).">
      <legend>4. ¿En qué consiste la inducción matemática fuerte?</legend>
      <label><input type="radio" name="q4" value="a"> A. En no demostrar ningún caso inicial.</label>
      <label><input type="radio" name="q4" value="b"> B. En suponer que la propiedad se cumple para todos los naturales anteriores hasta \(n\), y usarlo para demostrar el siguiente caso.</label>
      <label><input type="radio" name="q4" value="c"> C. En resolver ecuaciones de grado alto.</label>
      <label><input type="radio" name="q4" value="d"> D. En comprobar únicamente el último número de una sucesión.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Las fórmulas explícitas dependientes de un número natural \(n\) (como la suma de los primeros \(n\) enteros) son el ejemplo canónico de prueba inductiva.">
      <legend>5. ¿Cuál de estas afirmaciones es un ejemplo típico para demostrar por inducción?</legend>
      <label><input type="radio" name="q5" value="a"> A. Una fórmula para la suma de los primeros \(n\) números naturales.</label>
      <label><input type="radio" name="q5" value="b"> B. La derivada de una función polinómica.</label>
      <label><input type="radio" name="q5" value="c"> C. El cálculo de una integral definida concreta.</label>
      <label><input type="radio" name="q5" value="d"> D. El cálculo de un límite de una función.</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="La clave diferencial radica en la amplitud de la hipótesis: la ordinaria usa solo el estado inmediatamente anterior (\(n\)), la fuerte utiliza todos los anteriores (\(n_0 \dots n\)).">
      <legend>6. ¿Cuál es la diferencia principal entre inducción ordinaria e inducción fuerte?</legend>
      <label><input type="radio" name="q6" value="a"> A. La ordinaria no necesita caso base.</label>
      <label><input type="radio" name="q6" value="b"> B. La fuerte no necesita hipótesis inductiva.</label>
      <label><input type="radio" name="q6" value="c"> C. La fuerte permite utilizar como hipótesis todos los casos anteriores, no solo el caso \(n\).</label>
      <label><input type="radio" name="q6" value="d"> D. La ordinaria solo sirve para sucesiones finitas.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El caso base sirve como punto de anclaje inicial: demuestra que la propiedad es cierta para el primer valor del dominio considerado.">
      <legend>7. ¿Qué se demuestra en el caso base?</legend>
      <label><input type="radio" name="q7" value="a"> A. Que la propiedad es falsa para el primer natural.</label>
      <label><input type="radio" name="q7" value="b"> B. Que la propiedad se cumple para todos los naturales de golpe.</label>
      <label><input type="radio" name="q7" value="c"> C. Que la propiedad es verdadera para el primer valor considerado.</label>
      <label><input type="radio" name="q7" value="d"> D. Que la propiedad es verdadera para \(n+1\), sin hipótesis.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Dado que en Fibonacci cada valor se calcula con la suma de los dos anteriores (\(F_n = F_{n-1} + F_{n-2}\)), se necesita la hipótesis fuerte sobre todos los términos previos.">
      <legend>8. En una demostración por inducción fuerte sobre Fibonacci, ¿qué se supone en la hipótesis inductiva?</legend>
      <label><input type="radio" name="q8" value="a"> A. Que la propiedad solo se cumple para el primer término.</label>
      <label><input type="radio" name="q8" value="b"> B. Que la propiedad se cumple para todos los términos anteriores hasta un índice \(n\).</label>
      <label><input type="radio" name="q8" value="c"> C. Que la propiedad solo se cumple para los términos pares.</label>
      <label><input type="radio" name="q8" value="d"> D. Que la propiedad ya se cumple para \(n+1\).</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El objetivo del paso inductivo ordinario es establecer un puente condicional: asegurar que el cumplimiento en \(n\) propaga la verdad hacia \(n+1\).">
      <legend>9. ¿Qué hay que probar en el paso inductivo ordinario?</legend>
      <label><input type="radio" name="q9" value="a"> A. Que la proposición es cierta para un número cualquiera, sin partir de nada.</label>
      <label><input type="radio" name="q9" value="b"> B. Que si la proposición vale para \(n\), entonces también vale para \(n+1\).</label>
      <label><input type="radio" name="q9" value="c"> C. Que la proposición es falsa para \(n+1\).</label>
      <label><input type="radio" name="q9" value="d"> D. Que la proposición no sirve para los números naturales.</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Al ser una lista infinita de valores definidos recursivamente, la inducción es la herramienta rigurosa para validar propiedades universales en toda la serie.">
      <legend>10. ¿Por qué se usa la inducción para demostrar propiedades de la sucesión de Fibonacci?</legend>
      <label><input type="radio" name="q10" value="a"> A. Porque siempre es más rápida que cualquier otro método.</label>
      <label><input type="radio" name="q10" value="b"> B. Porque ningún otro método puede utilizarse.</label>
      <label><input type="radio" name="q10" value="c"> C. Porque permite demostrar una propiedad para todos los términos, comprobando los casos iniciales y el paso inductivo.</label>
      <label><input type="radio" name="q10" value="d"> D. Porque Fibonacci es una sucesión aritmética.</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Una definición es recursiva cuando un problema se resuelve descomponiéndose en una o más llamadas a la misma función sobre instancias de menor tamaño.">
      <legend>11. ¿Qué son las funciones recursivas?</legend>
      <label><input type="radio" name="q11" value="a"> A. Funciones que siempre devuelven el mismo valor.</label>
      <label><input type="radio" name="q11" value="b"> B. Funciones definidas utilizando valores de la propia función en casos anteriores o más sencillos.</label>
      <label><input type="radio" name="q11" value="c"> C. Funciones que solo se usan en matemáticas y nunca en programación.</label>
      <label><input type="radio" name="q11" value="d"> D. Funciones que no pueden llamarse a sí mismas.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El caso base determina la condición de parada con un resultado directo conocido, evitando llamadas recursivas infinitas y errores de pila.">
      <legend>12. ¿Para qué sirve el caso base en una definición recursiva?</legend>
      <label><input type="radio" name="q12" value="a"> A. Para que la función se ejecute indefinidamente.</label>
      <label><input type="radio" name="q12" value="b"> B. Para establecer el valor inicial o el caso que se resuelve directamente.</label>
      <label><input type="radio" name="q12" value="c"> C. Para calcular todos los valores futuros sin ninguna regla.</label>
      <label><input type="radio" name="q12" value="d"> D. Para provocar un error cuando se llama a la función.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="El paso recursivo formula el mecanismo o regla general que vincula el resultado del problema actual con el de los subproblemas anteriores.">
      <legend>13. ¿Qué se define en el paso recursivo?</legend>
      <label><input type="radio" name="q13" value="a"> A. El valor inicial de la función.</label>
      <label><input type="radio" name="q13" value="b"> B. Únicamente el mensaje de error.</label>
      <label><input type="radio" name="q13" value="c"> C. Una regla para obtener un valor a partir de uno o varios valores anteriores.</label>
      <label><input type="radio" name="q13" value="d"> D. El tiempo exacto que tardará el programa.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Ambos conceptos son complementarios: la recursión permite construir estructuras o algoritmos, mientras que la inducción demuestra que son correctos.">
      <legend>14. ¿Cómo se relacionan la recursión y la inducción matemática?</legend>
      <label><input type="radio" name="q14" value="a"> A. No tienen ninguna relación.</label>
      <label><input type="radio" name="q14" value="b"> B. Son exactamente lo mismo.</label>
      <label><input type="radio" name="q14" value="c"> C. La inducción puede utilizarse para demostrar que una definición o función recursiva cumple una propiedad.</label>
      <label><input type="radio" name="q14" value="d"> D. La inducción es siempre un caso especial de recursión.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Un árbol binario posee una naturaleza recursiva intrínseca: se compone de un nodo raíz conectado a dos subárboles (izquierdo y derecho) que son, a su vez, árboles binarios.">
      <legend>15. ¿Cuál de estas estructuras puede definirse recursivamente?</legend>
      <label><input type="radio" name="q15" value="a"> A. Una ecuación lineal.</label>
      <label><input type="radio" name="q15" value="b"> B. Un árbol binario.</label>
      <label><input type="radio" name="q15" value="c"> C. Una función cuadrática.</label>
      <label><input type="radio" name="q15" value="d"> D. Una operación aritmética aislada.</label>
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
<summary>1. Respuesta correcta: B — Qué es la inducción matemática</summary>

La **inducción matemática** es una forma de demostrar que una afirmación es verdadera para todos los números naturales a partir de cierto punto.

Imagina una fila infinita de fichas de dominó:
- Compruebas que cae la primera ficha.
- Compruebas que, si cae una ficha cualquiera, también cae la siguiente.

Entonces caerán todas.

En matemáticas ocurre algo parecido: demostramos un primer caso y después que cada caso lleva al siguiente.

**Para el examen:** la inducción sirve para demostrar propiedades que se cumplen para una cantidad infinita de números naturales. No es un método para calcular límites ni para resolver ecuaciones diferenciales.
</details>

<details class="solution">
<summary>2. Respuesta correcta: C — Primero se demuestra el caso base</summary>

El primer paso es comprobar que la propiedad funciona en el primer número que queremos estudiar. A esto lo llamamos **caso base**.

Por ejemplo, si queremos demostrar algo para todos los naturales desde \(n=1\), primero comprobamos que funciona cuando \(n=1\).

Después haremos el paso inductivo.

**Orden habitual:**
1. Caso base.
2. Hipótesis inductiva: suponemos que funciona para \(n\).
3. Paso inductivo: demostramos que entonces funciona para \(n+1\).

**Truco:** primero aseguras la primera ficha del dominó; después demuestras que cada ficha empuja a la siguiente.
</details>

<details class="solution">
<summary>3. Respuesta correcta: B — Demostrar que funciona para el siguiente número</summary>

En el paso inductivo suponemos que nuestra propiedad es cierta para un número natural \(n\). A eso se le llama **hipótesis inductiva**.

Con esa suposición, tenemos que demostrar que también es cierta para \(n+1\).

Es decir:
\[
P(n)\Rightarrow P(n+1)
\]

¡Ojo! No estamos suponiendo que la propiedad sea cierta para todos los números. Solo la suponemos para un \(n\) cualquiera y demostramos el siguiente.

**Ejemplo:** si ya sabemos que una ficha de dominó cae, demostramos que esa ficha hace caer la siguiente.
</details>

<details class="solution">
<summary>4. Respuesta correcta: B — Inducción fuerte</summary>

La inducción fuerte es una variante de la inducción normal.

- **Inducción ordinaria:** supones que la propiedad funciona para \(n\) y demuestras que funciona para \(n+1\).
- **Inducción fuerte:** supones que funciona para todos los valores anteriores (desde el caso inicial hasta \(n\)) y utilizas esa información para demostrar \(n+1\).

¿Por qué puede ser útil? Porque a veces para demostrar el siguiente caso necesitamos varios resultados anteriores, no solamente el inmediatamente anterior.

**Ejemplo:** para construir o estudiar una sucesión, puede que el término siguiente dependa de los dos anteriores. La inducción fuerte permite disponer de todos los casos previos.

**Importante:** también hay que comprobar los casos base necesarios.
</details>

<details class="solution">
<summary>5. Respuesta correcta: A — La suma de los primeros números naturales</summary>

Un ejemplo clásico es demostrar esta fórmula:
\[
1+2+\cdots+n=\frac{n(n+1)}{2}
\]

Podemos demostrarla por inducción:

- **Caso base:** para \(n=1\), la suma es 1 y la fórmula da \(1(2)/2=1\). Funciona.
- **Hipótesis:** suponemos que para cierto \(n\), la suma vale \(n(n+1)/2\).
- **Paso:** añadimos el siguiente número, \(n+1\), y comprobamos que obtenemos la fórmula para \(n+1\).

La inducción es especialmente útil para fórmulas que contienen \(n\) y que queremos demostrar para todos los naturales.

**Truco:** si ves una afirmación del tipo «para todo número natural \(n\)», piensa si puede demostrarse por inducción.
</details>

<details class="solution">
<summary>6. Respuesta correcta: C — La hipótesis es más amplia en la inducción fuerte</summary>

La diferencia está en lo que podemos suponer:

- **Ordinaria:** suponemos que \(P(n)\) es cierta.
- **Fuerte:** suponemos que \(P(1), P(2), \ldots, P(n)\) son ciertas.

En ambos casos queremos demostrar \(P(n+1)\).

La inducción fuerte no elimina el caso base ni la hipótesis inductiva. Lo que cambia es que podemos utilizar todos los casos anteriores.

**Truco para memorizar:** ordinaria = el caso anterior; fuerte = todos los casos anteriores.
</details>

<details class="solution">
<summary>7. Respuesta correcta: C — Comprobar el primer caso</summary>

El caso base consiste en demostrar que la propiedad funciona para el primer número natural del que hablamos.

Por ejemplo, si la afirmación empieza en \(n=0\), probamos \(P(0)\). Si empieza en \(n=1\), probamos \(P(1)\).

No tenemos que demostrar todos los números en el caso base: eso sería imposible si hay infinitos. Para los siguientes utilizamos el paso inductivo.

**Truco:** el caso base es el primer dominó. Si no cae el primero, la cadena no empieza.
</details>

<details class="solution">
<summary>8. Respuesta correcta: B — Hipótesis fuerte aplicada a Fibonacci</summary>

La sucesión de Fibonacci comienza habitualmente así:
\[
0,\ 1,\ 1,\ 2,\ 3,\ 5,\ 8,\ 13,\ldots
\]

Cada término se obtiene sumando los dos anteriores:
\[
F_n=F_{n-1}+F_{n-2}
\]

Por eso, para una demostración por inducción fuerte, podemos suponer que la propiedad se cumple para todos los términos anteriores que necesitemos.

Después utilizamos esa información para demostrar que también se cumple para el término siguiente.

**Ojo:** como Fibonacci utiliza dos términos anteriores, hay que cuidar los casos base iniciales (normalmente \(F_0\) y \(F_1\), según cómo se formule la propiedad).
</details>

<details class="solution">
<summary>9. Respuesta correcta: B — El paso inductivo ordinario</summary>

El paso inductivo tiene una misión muy concreta:
\[
P(n)\Rightarrow P(n+1)
\]

Lo leemos así: «Si la propiedad es cierta para \(n\), entonces también es cierta para el siguiente número, \(n+1\)».

No basta con comprobar que \(P(n+1)\) parece funcionar con un ejemplo. Hay que demostrarlo usando la hipótesis \(P(n)\).

**Truco:** el paso inductivo siempre conecta un caso con el siguiente.
</details>

<details class="solution">
<summary>10. Respuesta correcta: C — Demostrar una propiedad para todos los términos de Fibonacci</summary>

La sucesión de Fibonacci tiene infinitos términos. Si comprobamos que una propiedad funciona para los primeros cinco, diez o cien términos, todavía no hemos demostrado que funcione para todos.

La inducción permite demostrarlo de manera general:
1. Comprobamos los términos iniciales necesarios.
2. Suponemos que la propiedad se cumple en los casos anteriores que correspondan.
3. Demostramos que se cumple para el siguiente término.

**Importante:** Fibonacci no es una sucesión aritmética. Es una sucesión definida por recurrencia: cada término depende de términos anteriores.
</details>

<details class="solution">
<summary>11. Respuesta correcta: B — Funciones recursivas</summary>

Una función recursiva es una función que se define utilizando la propia función en versiones más sencillas del problema.

Un ejemplo muy conocido es el factorial:
\[
n!=n\cdot(n-1)!
\]
Por ejemplo:
\[
5!=5\cdot4!=5\cdot4\cdot3\cdot2\cdot1
\]

La función se llama a sí misma para calcular un caso más pequeño.

En programación sucede lo mismo: una función puede llamarse a sí misma para resolver una parte más sencilla del problema.

**Truco:** recursión significa que algo se define o resuelve usando versiones más pequeñas de sí mismo.
</details>

<details class="solution">
<summary>12. Respuesta correcta: B — El caso base de la recursión</summary>

El caso base es el punto donde la recursión deja de llamarse a sí misma y ya sabe qué resultado devolver.

Por ejemplo, en el factorial:
\[
0!=1
\]
Este es el caso base.

Y para los demás números:
\[
n!=n\cdot(n-1)!
\]

Si no existiera el caso base, la función seguiría llamándose una y otra vez sin llegar a una respuesta. En un programa podría provocar un desbordamiento de la pila (*stack overflow*).

**Truco:** caso base = punto de parada y respuesta conocida.
</details>

<details class="solution">
<summary>13. Respuesta correcta: C — El paso recursivo</summary>

El paso recursivo es la regla que permite construir un caso a partir de otros más pequeños o anteriores.

En el factorial:
\[
n!=n\cdot(n-1)!
\]

- Caso base: \(0!=1\).
- Paso recursivo: \(n!=n\cdot(n-1)!\).

El caso base dice dónde empezar o parar. El paso recursivo dice cómo calcular los demás valores.

**Truco:** base = valor conocido; recursivo = regla para avanzar.
</details>

<details class="solution">
<summary>14. Respuesta correcta: C — Recursión e inducción trabajan juntas</summary>

La recursión sirve para **definir** algo usando casos anteriores. La inducción sirve para **demostrar** que una propiedad se cumple en todos los casos.

Por ejemplo, podemos definir el factorial de forma recursiva:
\[
0!=1,\qquad n!=n(n-1)!
\]

Después podemos usar inducción para demostrar que una fórmula relacionada con el factorial es correcta para todos los naturales.

En programación, también podemos usar inducción para demostrar que una función recursiva devuelve el resultado esperado.

**Idea clave:**
- Recursión: cómo se construye o calcula.
- Inducción: cómo demostramos que funciona correctamente.
</details>

<details class="solution">
<summary>15. Respuesta correcta: B — Los árboles binarios</summary>

Un árbol binario es una estructura que puede definirse recursivamente porque está formado por partes que también pueden ser árboles binarios.

De forma sencilla:
- Un árbol puede estar vacío.
- O puede tener una raíz y dos subárboles: uno izquierdo y otro derecho.
- Cada subárbol puede tener a su vez otros subárboles.

<figure markdown>
  ![Ejemplo esquemático de árbol binario](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/512px-Binary_tree.svg.png)
  <figcaption>Un árbol binario se construye mediante una raíz y subárboles.</figcaption>
</figure>

Esto es una definición recursiva: una estructura se construye a partir de estructuras más pequeñas del mismo tipo.

**Truco:** listas, árboles y otras estructuras de datos pueden definirse recursivamente.
</details>

---

## Chuleta final: lo imprescindible para aprobar

### 1. Inducción matemática

| Parte | Qué haces |
|---|---|
| Caso base | Compruebas que la propiedad funciona para el primer valor. |
| Hipótesis inductiva | Supones que funciona para un \(n\) cualquiera. |
| Paso inductivo | Demuestras que, si funciona para \(n\), también funciona para \(n+1\). |

La idea completa es:

\[
P(n_0)\quad\text{y}\quad P(n)\Rightarrow P(n+1)
\]

Así puedes concluir que la propiedad se cumple para todos los naturales desde \(n_0\).

### 2. Inducción ordinaria frente a fuerte

| Ordinaria | Fuerte |
|---|---|
| Supones \(P(n)\). | Supones \(P(n_0),\ldots,P(n)\). |
| Demuestras \(P(n+1)\). | Demuestras \(P(n+1)\). |
| Utilizas el caso anterior. | Puedes utilizar todos los anteriores. |

### 3. Recursión

Una definición recursiva necesita dos piezas:

- **Caso base:** valor conocido que detiene la recursión.
- **Paso recursivo:** regla para obtener un caso usando otros más sencillos.

Ejemplo del factorial:

\[
0!=1,\qquad n!=n\cdot(n-1)!
\]

### 4. Diferencia entre inducción y recursión

- **Inducción:** sirve para demostrar que algo es cierto para todos los casos.
- **Recursión:** sirve para definir o calcular algo a partir de casos anteriores.

**Qué debes memorizar sí o sí:** caso base, hipótesis inductiva, paso inductivo, diferencia entre inducción ordinaria y fuerte, caso base recursivo y paso recursivo.

<style>
/* Estilos globales de la plantilla de tests MkDocs */
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

/* Retroalimentación en tiempo de corrección */
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

/* Botones y área de resultados */
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

/* Desplegables de soluciones completas */
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

    // Renderizar MathJax/KaTeX si está presente en la página tras actualizar textos
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