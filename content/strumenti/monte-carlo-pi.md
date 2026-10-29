+++
title = 'Stima di π con il metodo Monte Carlo'
description = 'Punti casuali in un quadrato: quanti cadono nel cerchio?'
date = 2026-10-29
weight = 2
+++

Lanciamo a caso dei punti nel quadrato di lato $2$ e contiamo quanti cadono dentro il cerchio inscritto di raggio $1$. Il rapporto tra le aree è

$$ \dfrac{A_{cerchio}}{A_{quadrato}} = \dfrac{\pi r^2}{(2r)^2} = \dfrac{\pi}{4} $$

per cui, se i punti sono tanti:

$$ \pi \approx 4 \cdot \dfrac{N_{dentro}}{N} $$

{{< strumento "monte-carlo-pi" >}}

Il primo grafico mostra come cambia la stima all'aumentare dei lanci; il secondo è l'istogramma delle distanze dei punti dal centro: tutto ciò che sta a sinistra della linea $r = 1$ è dentro il cerchio.

<h2>Da provare</h2>

1. Ripeti più volte la simulazione con $100$ lanci: quanto cambia la stima da una volta all'altra?
2. Passa a $10\,000$ e poi a $100\,000$ lanci. L'errore si riduce, ma lentamente: per guadagnare una cifra decimale servono circa cento volte i punti.
3. Perché l'istogramma cresce fino a $r = 1$ e poi cala?

Lo strumento è stato preparato per la [Notte Nazionale del Liceo Classico 2025]({{< ref "/nnlc/2025" >}}), dove c'è anche la dispensa.
