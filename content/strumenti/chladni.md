+++
title = 'Figure di Chladni'
description = 'Onde stazionarie su una lastra quadrata: dove si ferma la sabbia.'
date = 2026-10-29
gruppo = 'nnlc'
weight = 4
+++

Una lastra metallica cosparsa di sabbia, messa in vibrazione alla frequenza giusta, si divide in zone che oscillano e linee che restano ferme: le **linee nodali**. La sabbia viene sbalzata via dalle zone in movimento e si raccoglie sulle linee nodali, disegnando le figure studiate da Ernst Chladni alla fine del Settecento.

Per una lastra quadrata con i bordi liberi una buona approssimazione dei modi di vibrazione è

$$ Z(x, y) = \cos(n \pi x) \cos(m \pi y) - \cos(m \pi x) \cos(n \pi y) $$

con $x$ e $y$ misurati in lati della lastra. Le linee nodali sono i punti in cui $Z = 0$.

{{< strumento "chladni" >}}

La frequenza indicata è una stima per una lastra di acciaio di $30 \, \text{cm}$ di lato e $1 \, \text{mm}$ di spessore:

$$ f_{n,m} \approx \dfrac{\pi h}{2 \sqrt{12} \, L^2} \sqrt{\dfrac{E}{\rho}} \, (n^2 + m^2) $$

dove $h$ è lo spessore, $L$ il lato, $E$ il modulo di Young e $\rho$ la densità.

<h2>Da provare</h2>

1. Cosa succede scambiando $n$ e $m$? E alla frequenza?
2. Come cambia la figura passando da $(1, 2)$ a $(1, 3)$ e poi a $(1, 4)$?
3. Trova due modi con la stessa frequenza che non si ottengano uno dall'altro scambiando $n$ e $m$.

Lo strumento è stato preparato per la [Notte Nazionale del Liceo Classico 2026]({{< ref "/nnlc/2026" >}}).
