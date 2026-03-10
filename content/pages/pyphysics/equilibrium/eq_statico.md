+++
menus = ['forze']
title = 'Equilibrio statico'
date = 2026-03-10T10:00:00+01:00
+++

Un corpo è in **equilibrio statico** quando si trova in uno stato di quiete che si mantiene nel tempo. Affinché ciò accada è necessario che la risultante di tutte le forze che agiscono sul corpo sia nulla.

<h2>Prima legge di Newton</h2>

Il primo principio della dinamica, o *legge di inerzia*, afferma:

<center><em>Un corpo rimane in stato di quiete o di moto rettilineo uniforme fintanto che una forza esterna non ne muta lo stato.</em></center>

La condizione matematica per l'equilibrio traslazionale è quindi:

$$\sum \vec{F} = \vec{0}$$

Scomponendo lungo gli assi cartesiani si ottengono due equazioni scalari indipendenti:

$$\sum F_x = 0 \qquad \sum F_y = 0$$

<h2>Forze fondamentali</h2>

<h3>Forza peso</h3>

La forza peso $\vec{P}$ è la forza gravitazionale che la Terra esercita su ogni corpo di massa $m$:

$$\vec{P} = m \vec{g}$$

In modulo $P = mg$, con $g \approx 9{,}81 \, \text{m/s}^2$. È diretta verso il basso (verso il centro della Terra).

<h3>Forza normale</h3>

Quando un corpo poggia su una superficie, la superficie esercita sul corpo una **forza normale** $\vec{N}$, perpendicolare alla superficie stessa e diretta verso il corpo. Impedisce la compenetrazione dei corpi.

<h2>Esempio: corpo su piano orizzontale</h2>

Un blocco di massa $m = 5 \, \text{kg}$ è in quiete su un piano orizzontale. Determinare la forza normale esercitata dal piano.

Le forze agenti sono:

* Forza peso: $\vec{P}$ diretta verso il basso, $P = mg$
* Forza normale: $\vec{N}$ diretta verso l'alto

Applicando la condizione di equilibrio sull'asse verticale:

$$\sum F_y = N - P = 0 \implies N = P = mg$$

$$N = 5 \cdot 9{,}81 = 49{,}05 \, \text{N}$$

<h2>Esempio: corpo appeso a due funi</h2>

Un corpo di peso $P = 100 \, \text{N}$ è appeso a due funi che formano rispettivamente angoli $\alpha = 30°$ e $\beta = 60°$ con l'orizzontale. Trovare le tensioni $T_1$ e $T_2$.

Le componenti delle forze:

$$\sum F_x = T_2 \cos 60° - T_1 \cos 30° = 0$$

$$\sum F_y = T_1 \sin 30° + T_2 \sin 60° - P = 0$$

Dal primo:

$$T_2 \cdot \dfrac{1}{2} = T_1 \cdot \dfrac{\sqrt{3}}{2} \implies T_2 = T_1 \sqrt{3}$$

Sostituendo nel secondo:

$$T_1 \cdot \dfrac{1}{2} + T_1 \sqrt{3} \cdot \dfrac{\sqrt{3}}{2} = 100 \implies 2 T_1 = 100 \implies T_1 = 50 \, \text{N}$$

$$T_2 = 50\sqrt{3} \approx 86{,}6 \, \text{N}$$

[Piano inclinato]({{< ref "/pages/pyphysics/equilibrium/eq_piano_inclinato" >}} "Piano inclinato")

[Momento di una forza]({{< ref "/pages/pyphysics/equilibrium/eq_momento" >}} "Momento di una forza")

[Introduzione alle forze]({{< ref "/pages/pyphysics/equilibrium/intro_forces" >}} "Introduzione alle forze")
