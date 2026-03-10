+++
menus = ['algebra']
title = 'Rappresentazione grafica del valore assoluto'
date = 2026-03-10T10:00:00+01:00
+++

La rappresentazione grafica del valore assoluto permette di visualizzare geometricamente le soluzioni delle equazioni e disequazioni già studiate analiticamente.

<h2>Grafico di $y = |f(x)|$</h2>

Dato un qualsiasi grafico di $f(x)$, il grafico di $y = |f(x)|$ si ottiene con una semplice regola geometrica:

* Le parti di $f(x)$ in cui $f(x) \ge 0$ rimangono **invariate**;
* Le parti di $f(x)$ in cui $f(x) < 0$ vengono **riflesse** rispetto all'asse $x$ (cambiate di segno).

$$
|f(x)| = \begin{cases}
f(x) & \text{se } f(x) \ge 0 \newline
-f(x) & \text{se } f(x) < 0
\end{cases}
$$

Il risultato è un grafico sempre non negativo ($y \ge 0$).

<h3>Esempio: $y = |x|$</h3>

La funzione $f(x) = x$ è una retta. La sua parte negativa (per $x < 0$) viene ribaltata verso l'alto, ottenendo la tipica forma a "V" centrata nell'origine.

<iframe src="https://www.desmos.com/calculator/rrnqjblgjv?embed" width="500" height="400" style="border: 1px solid #ccc" frameborder=0></iframe>

<h3>Esempio: $y = |x - 2|$</h3>

La stessa forma a "V" ma traslata di 2 unità verso destra: il vertice si trova in $(2, 0)$.

<h2>Lettura grafica delle soluzioni</h2>

Il vantaggio della rappresentazione grafica è che le soluzioni di equazioni e disequazioni si leggono direttamente come intersezioni o confronti tra grafici.

<h3>Equazione $|f(x)| = k$</h3>

Le soluzioni corrispondono ai punti di intersezione tra il grafico di $y = |f(x)|$ e la retta orizzontale $y = k$.

* Se $k > 0$: ci sono **due** intersezioni (in generale).
* Se $k = 0$: c'è **un'unica** intersezione nel punto di vertice.
* Se $k < 0$: **nessuna** soluzione (la retta è sotto l'asse $x$, il grafico non ci arriva).

<h3>Disequazione $|f(x)| < k$</h3>

Le soluzioni sono i valori di $x$ per cui il grafico di $y = |f(x)|$ si trova **al di sotto** della retta $y = k$, cioè l'intervallo interno compreso tra le due intersezioni.

<h3>Disequazione $|f(x)| > k$</h3>

Le soluzioni sono i valori di $x$ per cui il grafico si trova **al di sopra** della retta $y = k$, cioè i due intervalli esterni.

<h2>Esempio completo</h2>

Consideriamo $|x + 3| = 7$.

Graficamente stiamo cercando le intersezioni tra $y = |x + 3|$ (V con vertice in $(-3, 0)$) e la retta $y = 7$.

Le intersezioni si trovano dove $x + 3 = 7$ cioè $x = 4$ e dove $-(x+3) = 7$ cioè $x = -10$, confermando il risultato analitico.

[Equazioni con valore assoluto]({{< ref "/pages/pymath/algebra/absval_eq" >}} "Equazioni con valore assoluto")

[Disequazioni con valore assoluto]({{< ref "/pages/pymath/algebra/absval_diseq" >}} "Disequazioni con valore assoluto")
