+++
menus = ['cartesiano']
title = "Introduzione all'ellisse"
date = 2026-03-10T10:00:00+01:00
+++

Un'ellisse è definita come il luogo geometrico dei punti del piano la cui **somma delle distanze da due punti fissi** detti <em>fuochi</em> è costante.

Indicando i due fuochi con $F_1$ e $F_2$ e il punto generico con $P$:

$$d(P, F_1) + d(P, F_2) = 2a$$

dove $2a$ è la costante (con $a > 0$).

<h2>Equazione dell'ellisse centrata nell'origine</h2>

Posizionando i fuochi sull'asse $x$ in $F_1(-c, 0)$ e $F_2(c, 0)$, l'equazione dell'ellisse è:

$$\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1 \qquad \text{con } a > b > 0$$

dove i parametri sono legati dalla relazione fondamentale:

$$c^2 = a^2 - b^2$$

Se i fuochi sono sull'asse $y$, le posizioni di $a$ e $b$ si scambiano.

<h2>Elementi dell'ellisse</h2>

<h3>Semi-assi</h3>

* $a$ è il **semiasse maggiore** (lunghezza dal centro al vertice lungo l'asse dei fuochi);
* $b$ è il **semiasse minore** (lunghezza dal centro al vertice sull'asse perpendicolare).

<h3>Fuochi</h3>

I fuochi si trovano sull'asse maggiore a distanza $c = \sqrt{a^2 - b^2}$ dal centro.

<h3>Vertici</h3>

L'ellisse interseca gli assi nei quattro vertici:

$$A_1(-a, 0),\quad A_2(a, 0),\quad B_1(0, -b),\quad B_2(0, b)$$

<h3>Eccentricità</h3>

L'eccentricità misura quanto l'ellisse si discosta dalla forma circolare:

$$e = \dfrac{c}{a} \qquad 0 \le e < 1$$

* $e = 0$: l'ellisse diventa un **cerchio** ($c = 0$, fuochi coincidenti nel centro);
* $e \to 1$: l'ellisse diventa molto allungata, si avvicina a un segmento.

<h2>Esempio</h2>

Data l'ellisse $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$, determinare tutti gli elementi.

$a^2 = 25 \Rightarrow a = 5$, $\quad b^2 = 9 \Rightarrow b = 3$.

$$c = \sqrt{25 - 9} = \sqrt{16} = 4$$

Fuochi: $F_1(-4, 0)$ e $F_2(4, 0)$.

Vertici: $(\pm 5, 0)$ e $(0, \pm 3)$.

Eccentricità: $e = \dfrac{4}{5} = 0{,}8$.

<iframe src="https://www.desmos.com/calculator/azdmuqhlkr?embed" width="500" height="400" style="border: 1px solid #ccc" frameborder=0></iframe>

[Introduzione alla circonferenza]({{< ref "/pages/pymath/cartesian/circonferenza/circ_intro" >}} "Introduzione alla circonferenza")
