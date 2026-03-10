+++
menus = []
title = 'Esercizi sulla parabola'
date = 2026-03-10T10:00:00+01:00
+++

<h2>Ricavare le proprietà dall'equazione</h2>

Data l'equazione di una parabola con asse parallelo all'asse $y$

$$y = ax^2 + bx + c$$

si ricavano vertice, fuoco, asse di simmetria e direttrice con le formule:

$$V = \left(-\dfrac{b}{2a},\; -\dfrac{\Delta}{4a}\right) \qquad \Delta = b^2 - 4ac$$

$$\text{Asse di simmetria: } x = -\dfrac{b}{2a}$$

$$\text{Fuoco: } F = \left(-\dfrac{b}{2a},\; \dfrac{1-\Delta}{4a}\right) \qquad \text{Direttrice: } y = -\dfrac{1+\Delta}{4a}$$

---

<h4>Esercizio 1</h4>

Data la parabola $y = x^2 - 4x + 3$, determinare vertice, asse di simmetria, fuoco e direttrice.

**Svolgimento**

Identifichiamo i coefficienti: $a = 1$, $b = -4$, $c = 3$.

Calcoliamo il discriminante:

$$\Delta = (-4)^2 - 4 \cdot 1 \cdot 3 = 16 - 12 = 4$$

Vertice:

$$V = \left(-\dfrac{-4}{2},\; -\dfrac{4}{4}\right) = (2,\; -1)$$

Asse di simmetria: $x = 2$.

Fuoco:

$$F = \left(2,\; \dfrac{1-4}{4}\right) = \left(2,\; -\dfrac{3}{4}\right)$$

Direttrice:

$$y = -\dfrac{1+4}{4} = -\dfrac{5}{4}$$

<iframe src="https://www.desmos.com/calculator/qtbhrbsoyj?embed" width="500" height="400" style="border: 1px solid #ccc" frameborder=0></iframe>

---

<h4>Esercizio 2</h4>

Data la parabola $y = -2x^2 + 4x - 1$, determinare vertice e stabilire se la parabola è rivolta verso l'alto o verso il basso. Trovare i punti di intersezione con l'asse $x$.

**Svolgimento**

$a = -2 < 0$: la parabola è rivolta verso il **basso** (concavità rivolta verso $-y$).

$$\Delta = 4^2 - 4 \cdot (-2) \cdot (-1) = 16 - 8 = 8$$

$$V = \left(-\dfrac{4}{-4},\; -\dfrac{8}{-8}\right) = (1,\; 1)$$

Intersezioni con l'asse $x$ (ponendo $y = 0$):

$$-2x^2 + 4x - 1 = 0 \implies x = \dfrac{-4 \pm \sqrt{8}}{-4} = 1 \mp \dfrac{\sqrt{2}}{2}$$

$$x_1 = 1 - \dfrac{\sqrt{2}}{2} \approx 0{,}29 \qquad x_2 = 1 + \dfrac{\sqrt{2}}{2} \approx 1{,}71$$

---

<h2>Ricavare l'equazione dalle proprietà</h2>

<h4>Esercizio 3</h4>

Trovare l'equazione della parabola con asse parallelo a $y$, vertice in $V(1, -3)$ e passante per il punto $P(3, 1)$.

**Svolgimento**

La forma con vertice noto è $y = a(x - x_V)^2 + y_V$, quindi:

$$y = a(x - 1)^2 - 3$$

Sostituiamo il punto $P(3, 1)$:

$$1 = a(3-1)^2 - 3 = 4a - 3 \implies a = 1$$

L'equazione è:

$$y = (x-1)^2 - 3 = x^2 - 2x - 2$$

[Introduzione alla parabola]({{< ref "/pages/pymath/cartesian/parabola/par_intro" >}} "Introduzione alla parabola")

[Intersezioni parabola-retta]({{< ref "/pages/pymath/cartesian/parabola/par_intersezioni" >}} "Intersezioni parabola-retta")
