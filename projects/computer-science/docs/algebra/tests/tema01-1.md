---
title: Test Tema 1 - Lógica y demostraciones
---

# Test Tema 1: Lógica y demostraciones

Este test está basado en las 15 preguntas del cuestionario original. Tiene **una sola respuesta correcta por pregunta**. Selecciona tus respuestas y pulsa **Comprobar respuestas** para conocer tu nota, ver la explicación rápida de cada pregunta y consultar al final las soluciones explicadas paso a paso.

!!! tip "Cómo estudiar"
    Haz primero el test sin mirar las soluciones. Al corregirlo, lee la **explicación rápida** de cada pregunta y, si necesitas profundizar, despliega la **explicación detallada paso a paso** al final de la página.

<div id="quiz-tema1" class="quiz-container">

  <div class="quiz-progress" aria-live="polite">
    <strong id="quiz-count">0 de 15 respondidas</strong>
    <span id="quiz-progress-text">¡Empieza cuando quieras!</span>
  </div>

  <form id="quiz-form">
    
    <!-- Pregunta 1 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="La disyunción inclusiva p ∨ q solo requiere que al menos uno de sus componentes sea verdadero para que toda la proposición resulte verdadera.">
      <legend>1. ¿Cuándo es verdadera la proposición \(p \lor q\)?</legend>
      <label><input type="radio" name="q1" value="a"> A. Siempre que \(q\) no sea falsa.</label>
      <label><input type="radio" name="q1" value="b"> B. Cuando al menos una de las dos proposiciones es verdadera.</label>
      <label><input type="radio" name="q1" value="c"> C. Siempre que \(p\) no sea falsa.</label>
      <label><input type="radio" name="q1" value="d"> D. Siempre; es una tautología.</label>
      <div class="question-feedback" id="feedback-q1">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 2 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Negar que una propiedad se cumpla para todos los elementos (¬∀x P(x)) equivale a afirmar que existe al menos un elemento que no la cumple (∃x ¬P(x)).">
      <legend>2. ¿Qué significa \(\neg(\forall x\, P(x)) \iff \exists x\,\neg P(x)\)?</legend>
      <label><input type="radio" name="q2" value="a"> A. Para todo \(x\), no se cumple \(P(x)\).</label>
      <label><input type="radio" name="q2" value="b"> B. Existe un \(x\) para el que se cumple \(P(x)\).</label>
      <label><input type="radio" name="q2" value="c"> C. No todos los valores de \(x\) cumplen \(P(x)\).</label>
      <label><input type="radio" name="q2" value="d"> D. Todos los valores de \(x\) cumplen \(P(x)\).</label>
      <div class="question-feedback" id="feedback-q2">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 3 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="El predicado o relación expresa la propiedad o vínculo que une a los sujetos («No es más grande que»), mientras que «Saturno» y «la Tierra» actúan como términos/argumentos.">
      <legend>3. En la frase «Saturno no es más grande que la Tierra», ¿qué parte expresa el predicado o relación?</legend>
      <label><input type="radio" name="q3" value="a"> A. «Saturno».</label>
      <label><input type="radio" name="q3" value="b"> B. «No es más grande que».</label>
      <label><input type="radio" name="q3" value="c"> C. «La Tierra».</label>
      <label><input type="radio" name="q3" value="d"> D. La frase no contiene ningún predicado.</label>
      <div class="question-feedback" id="feedback-q3">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 4 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Es el principio del tercero excluido: p ∨ ¬p siempre es verdadera, ya que si p es falsa, su negación ¬p es necesariamente verdadera (y viceversa).">
      <legend>4. ¿Qué tipo de proposición es \(p \lor \neg p\)?</legend>
      <label><input type="radio" name="q4" value="a"> A. Una contradicción.</label>
      <label><input type="radio" name="q4" value="b"> B. Una tautología.</label>
      <label><input type="radio" name="q4" value="c"> C. Una contingencia.</label>
      <label><input type="radio" name="q4" value="d"> D. No se puede saber.</label>
      <div class="question-feedback" id="feedback-q4">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 5 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Negar ∃x equivale a ∀x ¬(...). Al negar la implicación P(x) ⇒ Q(x) se obtiene que P(x) es verdadera Y Q(x) es falsa: P(x) ∧ ¬Q(x).">
      <legend>5. ¿A qué expresión equivale \(\neg\exists x\,(P(x)\Rightarrow Q(x))\)?</legend>
      <label><input type="radio" name="q5" value="a"> A. \(\exists x\,(P(x)\Rightarrow Q(x))\).</label>
      <label><input type="radio" name="q5" value="b"> B. \(\forall x\,(P(x)\lor\neg Q(x))\).</label>
      <label><input type="radio" name="q5" value="c"> C. \(\forall x\,(\neg P(x)\lor Q(x))\).</label>
      <label><input type="radio" name="q5" value="d"> D. \(\forall x\,(P(x)\land\neg Q(x))\).</label>
      <div class="question-feedback" id="feedback-q5">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 6 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="Esta fórmula representa el esquema formal de Modus Tollens. Al ser una regla de inferencia lógica válida, su tabla de verdad da siempre verdadero (tautología).">
      <legend>6. Suponiendo que la expresión es \(((p\Rightarrow q)\land\neg q)\Rightarrow\neg p\), ¿qué podemos afirmar?</legend>
      <label><input type="radio" name="q6" value="a"> A. Es una tautología.</label>
      <label><input type="radio" name="q6" value="b"> B. Es una contradicción.</label>
      <label><input type="radio" name="q6" value="c"> C. Solo es verdadera cuando \(p\) y \(q\) son verdaderas.</label>
      <label><input type="radio" name="q6" value="d"> D. Siempre es falsa.</label>
      <div class="question-feedback" id="feedback-q6">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 7 -->
    <fieldset class="quiz-question" data-answer="a" data-short-exp="NAND es conmutativa porque p NAND q ≡ ¬(p ∧ q) ≡ ¬(q ∧ p) ≡ q NAND p. Sin embargo, no cumple la propiedad asociativa.">
      <legend>7. La operación NAND, definida como \(p\ \text{NAND}\ q=\neg(p\land q)\), es:</legend>
      <label><input type="radio" name="q7" value="a"> A. Conmutativa.</label>
      <label><input type="radio" name="q7" value="b"> B. Asociativa.</label>
      <label><input type="radio" name="q7" value="c"> C. Siempre verdadera.</label>
      <label><input type="radio" name="q7" value="d"> D. Siempre falsa.</label>
      <div class="question-feedback" id="feedback-q7">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 8 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Es la formulación exacta de la Ley de De Morgan para la conjunción: la negación de una conjunción equivale a la disyunción de las negaciones.">
      <legend>8. ¿Es verdadera la equivalencia \(\neg(P(x)\land Q(x))\iff(\neg P(x)\lor\neg Q(x))\)?</legend>
      <label><input type="radio" name="q8" value="a"> A. No; la parte derecha siempre es falsa.</label>
      <label><input type="radio" name="q8" value="b"> B. No; solo funciona cuando ambas son verdaderas.</label>
      <label><input type="radio" name="q8" value="c"> C. Sí; es una de las leyes de De Morgan.</label>
      <label><input type="radio" name="q8" value="d"> D. No; es una contradicción.</label>
      <div class="question-feedback" id="feedback-q8">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 9 -->
    <fieldset class="quiz-question" data-answer="b" data-short-exp="Al aplicar la definición p NAND p = ¬(p ∧ p), y sabiendo por idempotencia que p ∧ p ≡ p, la expresión se reduce directamente a ¬p.">
      <legend>9. ¿Es cierto que \(p\ \text{NAND}\ p\iff\neg p\)?</legend>
      <label><input type="radio" name="q9" value="a"> A. No son equivalentes.</label>
      <label><input type="radio" name="q9" value="b"> B. Sí, son lógicamente equivalentes.</label>
      <label><input type="radio" name="q9" value="c"> C. Falta información.</label>
      <label><input type="radio" name="q9" value="d"> D. Solo son equivalentes cuando \(p\) es verdadera.</label>
      <div class="question-feedback" id="feedback-q9">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 10 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Modus Tollens (o negación del consecuente) establece que si la implicación p ⇒ q es válida y la consecuencia q es falsa, la hipótesis p debe ser necesariamente falsa.">
      <legend>10. La expresión \(((p\Rightarrow q)\land\neg q)\Rightarrow\neg p\) representa un razonamiento conocido como:</legend>
      <label><input type="radio" name="q10" value="a"> A. Afirmación del consecuente.</label>
      <label><input type="radio" name="q10" value="b"> B. Negación del antecedente.</label>
      <label><input type="radio" name="q10" value="c"> C. Silogismo disyuntivo.</label>
      <label><input type="radio" name="q10" value="d"> D. Modus tollens (razonamiento por contraposición).</label>
      <div class="question-feedback" id="feedback-q10">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 11 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Los términos premisa/hipótesis/antecedente para p y consecuencia/conclusión para q son sinónimos estándar utilizados en lógica formal.">
      <legend>11. En una implicación \(p\Rightarrow q\):</legend>
      <label><input type="radio" name="q11" value="a"> A. \(p\) es la premisa.</label>
      <label><input type="radio" name="q11" value="b"> B. \(q\) es la consecuencia.</label>
      <label><input type="radio" name="q11" value="c"> C. \(p\) es la hipótesis o antecedente.</label>
      <label><input type="radio" name="q11" value="d"> D. Todas las anteriores son correctas.</label>
      <div class="question-feedback" id="feedback-q11">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 12 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="Se puede probar directamente desarrollando (2k+1)² = 2(2k²+2k)+1, o por contraposición demostrando que si n es par (n=2k), entonces n² es par (4k²).">
      <legend>12. «Si \(n\) es un entero impar, entonces \(n^2\) es impar». ¿Cómo se puede demostrar?</legend>
      <label><input type="radio" name="q12" value="a"> A. Solo de forma directa.</label>
      <label><input type="radio" name="q12" value="b"> B. Solo por contraposición.</label>
      <label><input type="radio" name="q12" value="c"> C. No se puede demostrar.</label>
      <label><input type="radio" name="q12" value="d"> D. Tanto de forma directa como por contraposición.</label>
      <div class="question-feedback" id="feedback-q12">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 13 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="A diferencia de la inducción o la observación empírica, las demostraciones directas e indirectas son deductivas: garantizan la verdad formal partiendo de premisas válidas.">
      <legend>13. Los métodos de demostración directo e indirecto son:</legend>
      <label><input type="radio" name="q13" value="a"> A. Métodos inductivos.</label>
      <label><input type="radio" name="q13" value="b"> B. Métodos que se basan en probar muchos ejemplos.</label>
      <label><input type="radio" name="q13" value="c"> C. Métodos que van de lo particular a lo general.</label>
      <label><input type="radio" name="q13" value="d"> D. Métodos deductivos; parten de hipótesis o hechos aceptados para llegar a una conclusión.</label>
      <div class="question-feedback" id="feedback-q13">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 14 -->
    <fieldset class="quiz-question" data-answer="d" data-short-exp="¬p ⇒ ¬q es la INVERSA de p ⇒ q (no equivalente). La contraposición equivalente es ¬q ⇒ ¬p (invierte el orden y niega ambas partes).">
      <legend>14. Si sabemos que \(p\Rightarrow q\) es verdadera, ¿podemos concluir que \(\neg p\Rightarrow\neg q\) también lo es?</legend>
      <label><input type="radio" name="q14" value="a"> A. Sí, siempre.</label>
      <label><input type="radio" name="q14" value="b"> B. Sí, porque es la contraposición.</label>
      <label><input type="radio" name="q14" value="c"> C. Sí, porque negar las dos partes no cambia la implicación.</label>
      <label><input type="radio" name="q14" value="d"> D. No; \(\neg p\Rightarrow\neg q\) es la inversa, no la contraposición.</label>
      <div class="question-feedback" id="feedback-q14">
        <div class="feedback-status"></div>
        <div class="feedback-exp"></div>
      </div>
    </fieldset>

    <!-- Pregunta 15 -->
    <fieldset class="quiz-question" data-answer="c" data-short-exp="Un error operacional (como dividir entre cero o fallar en un signo) invalida por completo el encadenamiento deductivo, aunque la lógica de fondo sea correcta.">
      <legend>15. Al hacer demostraciones matemáticas debemos prestar atención a:</legend>
      <label><input type="radio" name="q15" value="a"> A. Los errores de aritmética básica.</label>
      <label><input type="radio" name="q15" value="b"> B. Los errores de álgebra básica.</label>
      <label><input type="radio" name="q15" value="c"> C. Tanto los errores aritméticos como los algebraicos.</label>
      <label><input type="radio" name="q15" value="d"> D. Ningún error importa si la conclusión parece correcta.</label>
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

Lee estas explicaciones después de hacer el test. La idea es que entiendas la regla y puedas reconocerla aunque en el examen cambien las letras o el ejemplo.

<details class="solution">
<summary>1. Respuesta correcta: B — La disyunción \(p\lor q\)</summary>

El símbolo \(\lor\) significa **«o»**. En lógica, este «o» es inclusivo: basta con que una de las dos proposiciones sea verdadera. También puede ocurrir que las dos sean verdaderas.

| \(p\) | \(q\) | \(p\lor q\) |
|---|---|---|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

**Truco para el examen:** una disyunción solo es falsa cuando **las dos partes son falsas**. No confundas «o» con «y».
</details>

<details class="solution">
<summary>2. Respuesta correcta: C — Negar un «para todo»</summary>

- \(\forall x\) significa **«para todos los valores de x»**.
- \(\exists x\) significa **«existe al menos un valor de x»**.
- \(\neg\) significa **«no»**.

Por eso, decir «no todos cumplen algo» significa que **hay por lo menos uno que no lo cumple**.

Ejemplo: «No todos los alumnos aprobaron» significa que existe al menos un alumno que no aprobó. No significa que ninguno aprobara.

**Regla para memorizar:**
\[
\neg(\forall x\,P(x))\iff\exists x\,\neg P(x)
\]
Al negar «todos», aparece «existe al menos uno que no».
</details>

<details class="solution">
<summary>3. Respuesta correcta: B — El predicado es la relación</summary>

En «Saturno no es más grande que la Tierra»:
- **Saturno** y **la Tierra** son los objetos de los que hablamos.
- **«No es más grande que»** expresa la propiedad o relación que los conecta.

Eso es el predicado: lo que afirmamos sobre uno o varios objetos. Si escribimos \(R(x,y)\), \(R\) sería la relación «no es más grande que», mientras que \(x\) e \(y\) serían los lugares donde ponemos los objetos.

**Importante:** en la frase original, Saturno y la Tierra son nombres concretos, no variables. Por eso la pregunta original, que preguntaba cuál era la «variable libre», estaba mal planteada. Aquí se ha corregido para que tenga una respuesta válida.
</details>

<details class="solution">
<summary>4. Respuesta correcta: B — La tautología \(p\lor\neg p\)</summary>

Una tautología es una expresión que sale **verdadera en todos los casos**.

\(p\lor\neg p\) significa «p es verdadera o p no es verdadera». Solo hay dos posibilidades:
- Si \(p\) es verdadera, gana la primera parte.
- Si \(p\) es falsa, \(\neg p\) es verdadera.

Siempre hay una parte verdadera. Por eso es una tautología.

**Truco:** «algo o su negación» siempre es verdadero.
</details>

<details class="solution">
<summary>5. Respuesta correcta: D — Negar una existencia y una implicación</summary>

Vamos paso a paso:

1. \(\neg\exists x\) significa «no existe ningún \(x\) que...». Es equivalente a decir «para todo \(x\), no...».
2. Una implicación \(P\Rightarrow Q\) solo es falsa cuando \(P\) es verdadera y \(Q\) es falsa.
3. Por tanto, \(\neg(P\Rightarrow Q)\) equivale a \(P\land\neg Q\).

Juntándolo:
\[
\neg\exists x(P(x)\Rightarrow Q(x))
\iff
\forall x(P(x)\land\neg Q(x))
\]

**Ojo con la trampa:** aparece \(\land\) («y»), no \(\lor\) («o»). Para que una implicación sea falsa, tienen que darse las dos cosas: \(P\) verdadera y \(Q\) falsa.
</details>

<details class="solution">
<summary>6. Respuesta correcta: A — Es una tautología (modus tollens)</summary>

La expresión es:
\[
((p\Rightarrow q)\land\neg q)\Rightarrow\neg p
\]

Se lee así: «Si p implica q y q es falsa, entonces p también tiene que ser falsa».

Imagina: «Si llueve, la calle se moja». Si sabemos que la calle **no** está mojada, podemos concluir que **no** ha llovido (suponiendo que se cumple la regla del ejemplo).

Este razonamiento se llama **modus tollens**. Es válido en todos los casos, así que la expresión es una tautología.

**Esquema para memorizar:** \(p\Rightarrow q\), no \(q\), por tanto no \(p\).
</details>

<details class="solution">
<summary>7. Respuesta correcta: A — NAND es conmutativa</summary>

NAND significa «NO (p Y q)»:
\[
p\ \text{NAND}\ q=\neg(p\land q)
\]

Es conmutativa porque cambiar el orden no cambia el resultado:
\[
p\ \text{NAND}\ q=q\ \text{NAND}\ p
\]

Por ejemplo, «p y q» da lo mismo que «q y p»; al negar el resultado, sigue dando lo mismo.

No es asociativa en general: al agrupar tres valores de distintas maneras pueden salir resultados diferentes. Tampoco es siempre verdadera ni siempre falsa.

**Truco:** NAND solo da falso cuando p y q son las dos verdaderas.
</details>

<details class="solution">
<summary>8. Respuesta correcta: C — Ley de De Morgan</summary>

La equivalencia es:
\[
\neg(P\land Q)\iff(\neg P\lor\neg Q)
\]

Es una de las **leyes de De Morgan**. Dice que negar un «y» es lo mismo que negar cada parte y cambiar el «y» por un «o».

Ejemplo: «No es cierto que tenga pan y leche» significa «no tengo pan o no tengo leche» (puede faltar uno o pueden faltar los dos).

La equivalencia funciona siempre, por eso es verdadera.
</details>

<details class="solution">
<summary>9. Respuesta correcta: B — NAND de una proposición consigo misma</summary>

Sustituimos \(q\) por \(p\):
\[
p\ \text{NAND}\ p=\neg(p\land p)
\]

Como \(p\land p\) es simplemente \(p\), queda:
\[
\neg(p\land p)=\neg p
\]

Por eso son lógicamente equivalentes: siempre tienen el mismo valor de verdad.

**Truco:** una proposición haciendo NAND consigo misma equivale a su negación.
</details>

<details class="solution">
<summary>10. Respuesta correcta: D — Modus tollens</summary>

Es el mismo razonamiento de la pregunta 6, ahora preguntando por su nombre:

1. Si \(p\), entonces \(q\).
2. No se cumple \(q\).
3. Por tanto, no se cumple \(p\).

Eso es **modus tollens**. No es afirmar el consecuente ni negar el antecedente.

**Recuerda la diferencia:**
- Modus ponens: \(p\Rightarrow q\), \(p\); concluimos \(q\).
- Modus tollens: \(p\Rightarrow q\), \(\neg q\); concluimos \(\neg p\).
</details>

<details class="solution">
<summary>11. Respuesta correcta: D — Partes de una implicación</summary>

En \(p\Rightarrow q\):
- \(p\) es el **antecedente**, hipótesis o premisa.
- \(q\) es el **consecuente**, conclusión o consecuencia.

Se lee «si p, entonces q». Primero tenemos la condición (\(p\)) y después lo que se deduce (\(q\)).

**Truco:** lo que aparece antes de la flecha es el antecedente; lo que aparece después es el consecuente.
</details>

<details class="solution">
<summary>12. Respuesta correcta: D — Demostración directa y por contraposición</summary>

**Directa:** si \(n\) es impar, podemos escribir \(n=2k+1\), donde \(k\) es un entero. Entonces:
\[
n^2=(2k+1)^2=4k^2+4k+1
=2(2k^2+2k)+1
\]
Tiene la forma \(2m+1\), así que es impar.

**Por contraposición:** la contraposición de «si \(n\) es impar, entonces \(n^2\) es impar» es «si \(n^2\) es par, entonces \(n\) es par». Si \(n^2\) es par, \(n\) no puede ser impar; por tanto, es par.

Ambas demostraciones prueban la misma afirmación.

**Recuerda:** un entero impar siempre se puede escribir como \(2k+1\).
</details>

<details class="solution">
<summary>13. Respuesta correcta: D — Son métodos deductivos</summary>

Un razonamiento **deductivo** parte de unas hipótesis o reglas aceptadas y, siguiendo pasos lógicos, llega a una conclusión que se desprende de ellas.

- **Directo:** partes de lo que sabes y avanzas hasta demostrar lo que quieres.
- **Indirecto:** supones que lo que quieres demostrar es falso y buscas una contradicción, o demuestras la contraposición.

La inducción basada en ejemplos es distinta: observar muchos casos puede sugerir una regla, pero no demuestra por sí solo que sea cierta para todos.

**Truco:** demostrar no es probar unos cuantos ejemplos; es justificarlo con lógica.
</details>

<details class="solution">
<summary>14. Respuesta correcta: D — La inversa no es la contraposición</summary>

Si tenemos:
\[
p\Rightarrow q
\]

Su **contraposición** es:
\[
\neg q\Rightarrow\neg p
\]
Estas dos expresiones siempre son lógicamente equivalentes.

En cambio, la expresión:
\[
\neg p\Rightarrow\neg q
\]
se llama **inversa** y no tiene por qué ser equivalente a la original.

Ejemplo: «Si un número es múltiplo de 4, entonces es par» es verdadero. Pero «si un número no es múltiplo de 4, entonces no es par» es falso: el 6 no es múltiplo de 4 y sí es par.

**Muy importante para el examen:** la contraposición cambia el orden y niega las dos partes. No basta con negar las dos partes sin cambiar el orden.
</details>

<details class="solution">
<summary>15. Respuesta correcta: C — Cuidado con los cálculos</summary>

Una demostración puede tener una idea lógica correcta y, aun así, estar mal si hacemos una operación incorrecta.

Hay que revisar:
- **Aritmética:** sumas, restas, multiplicaciones y divisiones.
- **Álgebra:** signos, paréntesis, potencias, simplificaciones y despejes.

Por ejemplo, no podemos decir que \(2=1\) mediante una operación ilegal. Si dividimos entre cero o hacemos una transformación que no conserva la igualdad, la demostración deja de ser válida.

**Truco:** revisa tanto el razonamiento como cada operación matemática.
</details>

---

## Chuleta final: reglas que debes saber para el examen

| Concepto | Qué debes recordar |
|---|---|
| \(p\land q\) | «Y»: solo es verdadera si las dos son verdaderas. |
| \(p\lor q\) | «O»: es verdadera si al menos una es verdadera. |
| \(\neg p\) | «No p»: cambia verdadero por falso y falso por verdadero. |
| \(p\Rightarrow q\) | Solo es falsa cuando \(p\) es verdadera y \(q\) es falsa. |
| \(\forall x\) | Para todo \(x\). |
| \(\exists x\) | Existe al menos un \(x\). |
| Negar \(\forall\) | Se convierte en \(\exists\) y se niega el predicado. |
| Tautología | Siempre verdadera. |
| Contradicción | Siempre falsa. |
| Contingencia | A veces verdadera y a veces falsa. |
| De Morgan | \(\neg(P\land Q)\iff\neg P\lor\neg Q\). |
| NAND | \(\neg(p\land q)\); solo es falsa si ambas entradas son verdaderas. |
| Modus ponens | \(p\Rightarrow q\), \(p\); luego \(q\). |
| Modus tollens | \(p\Rightarrow q\), \(\neg q\); luego \(\neg p\). |
| Contraposición | \(p\Rightarrow q\) equivale a \(\neg q\Rightarrow\neg p\). |

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