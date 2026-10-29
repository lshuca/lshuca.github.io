+++
aliases = ['/pages/pymath/cartesian/rette_intro/', '/pages/pymath/cartesian/rette/']
title = 'Rette'
date = 2024-09-29T17:56:42+01:00
+++

Una retta è definita come il luogo geometrico dei punti allineati lungo una specifica direzione.

In geometria analitica significa poter definire l'insieme dei punti che rispettano una determinata condizione che ne lega le coordinate, nel caso del piano cartesiano allora $y$ a $x$, rispettivamente ordinata e ascissa generiche.

<h2>Forma implicita</h2>

La forma implicita della retta è rappresentata e determinata da tre parametri $a$, $b$ e $c$.

$$ ax + by + c = 0 $$

<h2>Forma esplicita</h2>

La forma esplicita della retta permette di ricavare immediatamente il valore della coordinata $y$ (variabile dipendente) in funzione della $x$ (variabile indipendente).

$$ y = mx + q $$

Nel caso della forma esplicita sono di immediato riconoscimento i parametri $m$ e $q$, tuttavia le rette parallele all'asse $y$ non possono essere rappresentate in questa forma.

<h3>Termine noto</h3>

Il termine noto o quota $q$ rappresenta la coordinata $y$ che la retta assume nel punto di ascissa $0$. Questa informazione è utile per poter ricavare immediatamente un'informazione geometrica del punto $(0, y_p)$ appartenente alla retta.

{{< grafico >}}
{
  "x": [-6, 6], "y": [-6, 6],
  "descrizione": "Le rette y = mx + q e y = −mx + q",
  "cursori": [
    {"nome": "m", "min": -5, "max": 5, "passo": 0.1, "val": 2},
    {"nome": "q", "min": -5, "max": 5, "passo": 0.1, "val": 1}
  ],
  "curve": [
    {"y": "m * x + q", "colore": "#AA0000", "etichetta": "y = mx + q", "xEtichetta": 1.2},
    {"y": "-m * x + q", "colore": "#1F4FBF", "etichetta": "y = −mx + q", "xEtichetta": -4.8}
  ],
  "punti": [{"x": "0", "y": "q", "etichetta": "(0, {q})"}]
}
{{< /grafico >}}

<h3>Coefficiente angolare</h3>

Il coefficiente angolare $m$ è un parametro associato alla pendenza della retta studiata. Maggiore è $m$ maggiore sarà il divario, date due rette $r$ e $s$, tra le coordinate $y$ a parità di $x$.

Spostando il punto $P$ si vede come cambia la pendenza della retta passante per l'origine e per $P$, confrontata con la bisettrice $y = x$ (cioè $m = 1$).

{{< grafico >}}
{
  "x": [-6, 6], "y": [-6, 6],
  "descrizione": "Retta per l'origine e per il punto P, confrontata con y = x",
  "cursori": [
    {"nome": "Px", "etichetta": "P_x", "min": -5, "max": 5, "passo": 0.05, "val": 3.25},
    {"nome": "Py", "etichetta": "P_y", "min": -5, "max": 5, "passo": 0.05, "val": 0.72}
  ],
  "curve": [
    {"y": "x", "colore": "#888888", "tratteggio": true, "etichetta": "y = x", "xEtichetta": 4},
    {"y": "Py / Px * x", "colore": "#AA0000"}
  ],
  "punti": [{"x": "Px", "y": "Py", "etichetta": "P"}],
  "testi": ["m = P_y / P_x = {Px == 0 ? 'non definito (retta verticale)' : n(Py / Px)}"]
}
{{< /grafico >}}