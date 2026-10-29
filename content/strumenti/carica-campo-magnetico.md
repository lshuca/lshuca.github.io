+++
title = 'Carica in un campo magnetico'
description = 'Orbita circolare di una carica e principio di funzionamento del ciclotrone.'
gruppo = 'didattici'
weight = 70
+++

Una carica $q$ che entra con velocità $\vec v$ perpendicolare a un campo magnetico uniforme $\vec B$ subisce la forza di Lorentz $\vec F = q \, \vec v \times \vec B$, sempre perpendicolare alla velocità. La forza non cambia il modulo della velocità ma solo la direzione: il moto è **circolare uniforme**.

Uguagliando la forza di Lorentz alla forza centripeta:

$$ q v B = m \dfrac{v^2}{r} \quad \Rightarrow \quad r = \dfrac{m v}{q B} \qquad T = \dfrac{2 \pi m}{q B} $$

Il periodo **non dipende dalla velocità**: una carica più veloce percorre una circonferenza più grande, ma nello stesso tempo.

{{< strumento "carica-campo-magnetico" >}}

<h2>Il ciclotrone</h2>

Nel ciclotrone le cariche girano dentro due contenitori metallici a forma di D, immersi in un campo magnetico. Tra le due D c'è una differenza di potenziale alternata: ogni volta che la carica attraversa la fessura viene accelerata, la velocità aumenta e il raggio cresce. Siccome ogni mezzo giro dura sempre $\dfrac{T}{2}$, basta che la tensione si inverta con frequenza

$$ f = \dfrac{q B}{2 \pi m} $$

per accelerare la carica a ogni passaggio. Arrivata al bordo, la particella esce con energia cinetica $K = \dfrac{(q B R)^2}{2m}$, dove $R$ è il raggio delle D.

<h2>Da provare</h2>

1. Confronta protone ed elettrone con la stessa velocità: come cambiano il raggio e il verso di rotazione? Perché?
2. Raddoppia la velocità: cosa succede al raggio? E al periodo?
3. Inverti il campo: cosa cambia?
4. Nel ciclotrone, come cambia l'energia finale aumentando la ddp tra le D? E aumentando il campo $B$?

Per la teoria: [Introduzione al campo magnetico]({{< ref "/pages/pyphysics/electromagnetism/bfield_intro" >}}).
