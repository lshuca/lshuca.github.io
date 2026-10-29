+++
title = 'Funzioni goniometriche'
description = 'Ampiezza, periodo, fase e traslazione verticale di y = A sin(ωx + φ) + k.'
gruppo = 'didattici'
weight = 20
+++

Partendo dal grafico di $y = \sin x$ (tratteggiato) si possono ottenere tutte le sinusoidi

$$ y = A \sin(\omega x + \varphi) + k $$

* $A$ è l'**ampiezza**: allunga o schiaccia il grafico in verticale;
* $\omega$ è la **pulsazione**: il periodo diventa $T = \dfrac{2\pi}{\omega}$;
* $\varphi$ è la **fase**: trasla il grafico in orizzontale di $-\dfrac{\varphi}{\omega}$;
* $k$ trasla il grafico in verticale.

{{< grafico >}}
{
  "x": [-7, 7], "y": [-4, 4],
  "descrizione": "Grafico di y = A sin(ωx + φ) + k confrontato con y = sin x",
  "cursori": [
    {"nome": "A", "etichetta": "ampiezza A", "min": -3, "max": 3, "passo": 0.1, "val": 2},
    {"nome": "w", "etichetta": "pulsazione ω", "min": 0.1, "max": 4, "passo": 0.1, "val": 1},
    {"nome": "f", "etichetta": "fase φ", "min": -3.2, "max": 3.2, "passo": 0.1, "val": 0},
    {"nome": "k", "etichetta": "traslazione k", "min": -2, "max": 2, "passo": 0.1, "val": 0}
  ],
  "curve": [
    {"y": "sin(x)", "colore": "#AAAAAA", "tratteggio": true, "spessore": 1},
    {"y": "k", "colore": "#DDDDDD", "spessore": 1},
    {"y": "A * sin(w * x + f) + k", "colore": "#AA0000"}
  ],
  "testi": ["y = {n(A)} sin({n(w)}x + {n(f)}) + {n(k)}", "periodo T = 2π/ω = {2 * pi / w}   valore massimo {k + abs(A)}   valore minimo {k - abs(A)}"]
}
{{< /grafico >}}

<h2>Da provare</h2>

1. Cosa succede al grafico se $A$ è negativa?
2. Trova il valore di $\omega$ per cui il periodo è $\pi$.
3. Per quale valore di $\varphi$ il grafico di $y = \sin(x + \varphi)$ coincide con quello di $y = \cos x$?
4. Quante soluzioni ha l'equazione $2 \sin x = 1$ nell'intervallo mostrato? Leggile sul grafico.
