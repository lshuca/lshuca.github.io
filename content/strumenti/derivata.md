+++
title = 'Derivata e retta tangente'
description = 'Dalla retta secante alla retta tangente: il significato geometrico della derivata.'
gruppo = 'didattici'
weight = 30
+++

Dato un punto $P(x_0, f(x_0))$ sul grafico di una funzione e un secondo punto $Q(x_0 + h, f(x_0 + h))$, la retta secante $PQ$ ha coefficiente angolare uguale al **rapporto incrementale**

$$ \dfrac{\Delta y}{\Delta x} = \dfrac{f(x_0 + h) - f(x_0)}{h} $$

Facendo tendere $h$ a zero, il punto $Q$ si avvicina a $P$ e la secante si avvicina alla **retta tangente**. Il limite del rapporto incrementale è la derivata:

$$ f'(x_0) = \lim_{h \to 0} \dfrac{f(x_0 + h) - f(x_0)}{h} $$

{{< strumento "derivata" >}}

La secante è tratteggiata in blu, la tangente è in rosso. Spuntando la casella compare anche il grafico di $f'(x)$ (in verde): il suo valore in $x_0$ è proprio la pendenza della tangente.

<h2>Da provare</h2>

1. Avvicina $h$ a zero, da destra e da sinistra: il rapporto incrementale si avvicina alla derivata?
2. Con $f(x) = x^2$, dove la tangente è orizzontale? Che segno ha la derivata a sinistra e a destra di quel punto?
3. Con $f(x) = x^3 - 3x$, trova i punti in cui la tangente è orizzontale. Cosa sono per la funzione?
4. Con $f(x) = e^x$, confronta il grafico della funzione con quello della sua derivata.
