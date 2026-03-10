+++
menus = ['cartesiano']
title = 'Intersezioni parabola-retta'
date = 2026-03-10T10:00:00+01:00
+++

Per trovare i punti di intersezione tra una parabola e una retta è necessario risolvere il sistema formato dalle due equazioni.

<h2>Impostazione del sistema</h2>

Data la parabola $y = ax^2 + bx + c$ e la retta $y = mx + q$, il sistema è:

$$
\begin{cases}
y = ax^2 + bx + c \newline
y = mx + q
\end{cases}
$$

Sostituendo la seconda nella prima si ottiene un'equazione di secondo grado in $x$:

$$ax^2 + bx + c = mx + q$$

$$ax^2 + (b - m)x + (c - q) = 0$$

<h2>Analisi del discriminante</h2>

Il discriminante di questa equazione di secondo grado determina il numero di intersezioni:

$$\Delta' = (b-m)^2 - 4a(c-q)$$

* $\Delta' > 0$: la retta è **secante** alla parabola, ci sono **due** punti di intersezione distinti.
* $\Delta' = 0$: la retta è **tangente** alla parabola, c'è **un solo** punto di contatto.
* $\Delta' < 0$: la retta è **esterna** alla parabola, **nessun** punto di intersezione.

<h2>Retta tangente in un punto</h2>

Per trovare la retta tangente alla parabola $y = ax^2 + bx + c$ nel punto $P(x_0, y_0)$ si impone $\Delta' = 0$.

In alternativa, nota la pendenza della tangente come derivata della parabola nel punto:

$$m = 2ax_0 + b$$

la retta tangente è:

$$y - y_0 = (2ax_0 + b)(x - x_0)$$

---

<h4>Esempio 1 — retta secante</h4>

Trovare le intersezioni tra $y = x^2 - 2x$ e $y = x + 4$.

$$x^2 - 2x = x + 4 \implies x^2 - 3x - 4 = 0$$

$$\Delta' = 9 + 16 = 25 > 0$$

$$x = \dfrac{3 \pm 5}{2} \implies x_1 = 4,\quad x_2 = -1$$

Sostituendo nella retta: $P_1(4,\, 8)$ e $P_2(-1,\, 3)$.

---

<h4>Esempio 2 — condizione di tangenza</h4>

Per quale valore di $q$ la retta $y = 2x + q$ è tangente alla parabola $y = x^2 + 1$?

$$x^2 + 1 = 2x + q \implies x^2 - 2x + (1-q) = 0$$

Imponiamo $\Delta' = 0$:

$$4 - 4(1-q) = 0 \implies 4q = 0 \implies q = 0$$

La retta tangente è quindi $y = 2x$, e tocca la parabola nel punto $(1, 2)$.

---

<h4>Esempio 3 — nessuna intersezione</h4>

Verificare che la retta $y = x - 5$ non incontra la parabola $y = x^2 + 1$.

$$x^2 + 1 = x - 5 \implies x^2 - x + 6 = 0$$

$$\Delta' = 1 - 24 = -23 < 0$$

Il discriminante è negativo: la retta è esterna alla parabola.

[Esercizi sulla parabola]({{< ref "/pages/pymath/cartesian/parabola/par_eser" >}} "Esercizi sulla parabola")
