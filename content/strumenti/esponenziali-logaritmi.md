+++
title = 'Esponenziali e logaritmi'
description = 'Grafici di y = aˣ e y = logₐ x al variare della base.'
gruppo = 'didattici'
weight = 10
+++

La funzione esponenziale $y = a^x$ e la funzione logaritmica $y = \log_a x$ (con $a > 0$ e $a \neq 1$) sono una l'inversa dell'altra: i loro grafici sono simmetrici rispetto alla bisettrice $y = x$.

{{< grafico >}}
{
  "x": [-5, 5], "y": [-5, 5],
  "descrizione": "Grafici di y = a^x e y = log_a x con la bisettrice y = x",
  "cursori": [
    {"nome": "a", "etichetta": "base a", "min": 0.1, "max": 5, "passo": 0.1, "val": 2}
  ],
  "curve": [
    {"y": "x", "colore": "#AAAAAA", "tratteggio": true, "spessore": 1, "etichetta": "y = x", "xEtichetta": 3.6},
    {"y": "a == 1 ? NaN : pow(a, x)", "colore": "#AA0000", "etichetta": "y = aˣ", "xEtichetta": 1.3},
    {"y": "a == 1 ? NaN : log(x) / log(a)", "colore": "#1F4FBF", "etichetta": "y = logₐ x", "xEtichetta": 2.6}
  ],
  "punti": [
    {"x": "0", "y": "1", "etichetta": "(0, 1)", "colore": "#AA0000"},
    {"x": "1", "y": "0", "etichetta": "(1, 0)", "colore": "#1F4FBF"},
    {"x": "1", "y": "a", "colore": "#AA0000"},
    {"x": "a", "y": "1", "colore": "#1F4FBF"}
  ],
  "testi": ["{a == 1 ? 'con a = 1 la funzione è costante: la base deve essere diversa da 1' : (a > 1 ? 'a > 1: entrambe le funzioni sono crescenti' : '0 < a < 1: entrambe le funzioni sono decrescenti')}"]
}
{{< /grafico >}}

<h2>Da provare</h2>

1. Per quale valore di $a$ i grafici non sono definiti? Perché la base non può valere $1$?
2. Confronta $a = 2$ e $a = 0{,}5$: che relazione c'è tra i due grafici esponenziali?
3. Qual è il punto per cui passano tutti i grafici esponenziali? E tutti quelli logaritmici?
4. Perché il logaritmo non è definito per $x \le 0$? Come si vede dal grafico dell'esponenziale?
