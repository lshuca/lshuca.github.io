+++
menus = ['cartesiano']
title = 'Introduzione alla circonferenza'
date = 2024-09-29T22:56:42+01:00
+++

Una circonferenza è definita come il luogo geometrico dei punti equidistanti da un punto detto <em>centro</em> e la cui distanza è denominata <em>raggio</em>.

In geometria analitica significa poter definire l'insieme dei punti che rispettano una determinata condizione che ne lega le coordinate, nel caso del piano cartesiano allora $y$ a $x$, rispettivamente ordinata e ascissa generiche.

<h2>Equazione della circonferenza</h2>

L'equazione della circonferenza deriva dalla definizione di distanza tra due punti, uno generico $P(x, y)$ ed uno specifico detto centro $C(x_c, y_c)$.

$$ d_{PC} = \sqrt{(x - x_c)^2 + (y - y_c)^2} $$

Definendo $d_{PC} = r$ e elevando al quadrato:

$$ (x - x_c)^2 + (y - y_c)^2 = r^2 $$

Sviluppandone i binomi possiamo riscrivere una seconda formulazione della circonferenza più compatta.

$$ x^2 - 2x_c x + x_c^2 + y^2 - 2y_c y + y_c^2 = r^2 $$

$$ x^2 + y^2 - 2x_c x - 2y_c y + x_c^2 + y_c^2 - r^2 = 0 $$

Utilizzando tre parametri $a$, $b$ e $c$ possiamo definire, quasi sempre, una circonferenza come riportato in calce.

$$  x^2 + y^2 + ax + by + c = 0 $$

Da cui risulta evidente come sia possibile legare i parametri $a$, $b$ e $c$ alle coordinate del centro ed il raggio.

$$
	\begin{cases}
		a = -2 x_c \rightarrow x_c = -\dfrac{a}{2} \newline \newline
		b = -2 y_c \rightarrow y_c = -\dfrac{b}{2} \newline \newline
		c = x_c^2 + y_c^2 - r^2 = \rightarrow r = \sqrt{x_c^2 + y_c^2 - c}
	\end{cases}
$$

L'ultima condizione rende necessario analizzare la condizione di esistenza della figura, infatti:

* $\sqrt{x_c^2 + y_c^2 - c} > 0$ la circonferenza esiste;

* $\sqrt{x_c^2 + y_c^2 - c} = 0$ la circonferenza esiste ma si dice degenere, ovvero "degenera" in un singolo punto;

* $\sqrt{x_c^2 + y_c^2 - c} < 0$ la circonferenza non esiste in quanto non esiste un $r \in \mathbb{R}$ 

<h2>Esempi</h2>

<h3>Determina l'equazione della circonferenza</h3>

Determina l'equazione della circonferenza di raggio $3$ e centro $C(1, 1)$.

<h4>Utilizzando la definizione</h4>

$$ (x - 1)^2 + (y - 1)^2 = 9 $$

Risolvendo

$$ x^2 - 2x + 1 + y^2 - 2y +1 = 9 $$

$$ x^2 + y^2 - 2x - 2y - 7 = 0 $$


<h4>Utilizzando i parametri</h4>

$$
	\begin{cases}
		a = -2 x_c \rightarrow a = -2 \cdot 1 = -2 \newline \newline
		b = -2 y_c \rightarrow b = -2 \cdot 1 = -2 \newline \newline
		c = x_c^2 + y_c^2 - r^2 = \rightarrow c = 1 + 1 - 9 = -7
	\end{cases}
$$

L'equazione della circonferenza risulta essere:

$$ x^2 + y^2 - 2x - 2y - 7 = 0 $$

<h3>Ricava i parametri della circonferenza</h3>

Determina le coordinate del centro ed il raggio della circonferenza di equazione $ x^2 + y^2 + 25 = 0 $.

<h4>Utilizzando i parametri</h4>

Possiamo immediatamente notare come la circonferenza in oggetto non abbia centro nell'origine, infatti non presenta termini in $x$ ed $y$, ovvero i parametri $a$ e $b$ sono nulli.

Possiamo quindi calcolarne il raggio tramite l'apposita relazione:

$$ r = \sqrt{x_c^2 + y_c^2 - c} $$

$$ r = \sqrt{0^2 + 0^2 - (25)} = \sqrt{- 25}$$

Otteniamo un radicale pari con argomento negativo, questa relazione non ha soluzione nei numeri reali dunque non può esistere una circonferenza di equazione $ x^2 + y^2 + 25 = 0 $.