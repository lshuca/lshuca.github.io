+++
menus = ['cartesiano']
title = 'Introduzione alla parabola'
date = 2024-09-29T23:56:42+01:00
+++

Una parabola è definita come il luogo geometrico dei punti equidistanti da un punto detto <em>fuoco</em> ed una retta detta <em>direttrice</em>.

<h2>Equazione della parabola</h2>

L'equazione della parabola deriva dalle relazioni della distanza tra due punti e la distanza punto retta.

Ponendo infatti la distanza tra due punti $P(x, y)$ e $F(x_f, y_f)$ possiamo confrontarla con la distanza del punto $P$ dalla retta, riportata in forma implicita, $r:$ $ax + by + c$.

$$ d_{PF} = d_{Pr} $$

$$ d_{PF} = \sqrt{(x - x_f)^2 + (y - y_f)^2}  $$

$$ d_{Pr} = \dfrac{|a x + b y + c|}{\sqrt{a^2 + b^2}} $$

$$ \sqrt{(x - x_f)^2 + (y - y_f)^2} = \dfrac{|a x + b y + c|}{\sqrt{a^2 + b^2}} $$

Tramite alcuni [rimaneggiamenti algebrici]({{< ref "/pages/pymath/cartesian/parabola/par_general" >}}  "rimaneggiamenti algebrici") possiamo riscrivere l'ultima equazione come:

$$ A x^2 + B xy + C y^2 + Dx + Ey + F = 0 $$

[Parabola con direttrice parallela all'asse x]({{< ref "/pages/pymath/cartesian/parabola/par_dirx" >}}  "Parabola con direttrice parallela all'asse x")

<h3>Proprietà della parabola</h3>

<h4>Fuoco</h4>

Punto necessario per la definizione della parabola.

<h4>Direttrice</h4>

Retta necessaria per la definizione della parabola.

<h4>Asse di simmetria</h4>

Con asse di simmetria di una parabola ci si riferisce alla retta che divide la figura in due parti "uguali", ovvero la parabola gode di una simmetria assiale, dunque:

<em>Ad ogni punto dell’asse corrisponde lo stesso punto
Ad ogni punto P non appartenente ad esso è associato un punto P’ tale che l’asse diviene anche asse del segmento PP’.</em>

L'asse di simmetria risulta sempre essere perpendicolare alla direttrice e, per questo motivo, sarà parallela all'asse $x$ qualora la direttrice dovesse essere parallela alle ordinate e viceversa.

<h4>Vertice</h4>

Il vertice è definito come il punto di intersezione tra l'asse di simmetria e la parabola stessa.

Il vertice risulta, per le parabole con asse di simmetria parallelo all'asse $y$, il punto di massimo o minimo assunto dalla parabola stessa.