+++
menus = []
title = 'Piano inclinato'
date = 2026-03-10T10:00:00+01:00
+++

Il piano inclinato è uno dei problemi classici della statica. Consiste nel determinare le condizioni di equilibrio di un corpo che giace su una superficie inclinata di un angolo $\theta$ rispetto all'orizzontale.

<h2>Analisi delle forze</h2>

Sul corpo di massa $m$ agiscono:

* **Forza peso** $\vec{P} = m\vec{g}$, verticale verso il basso;
* **Forza normale** $\vec{N}$, perpendicolare alla superficie del piano;
* **Forza d'attrito** $\vec{F}_a$ (se presente), parallela alla superficie e opposta al moto.

<h3>Scomposizione della forza peso</h3>

È conveniente scomporre $\vec{P}$ lungo due assi: uno parallelo al piano ($x'$) e uno perpendicolare ($y'$).

$$P_{\parallel} = P \sin\theta = mg \sin\theta \qquad \text{(componente lungo il piano, diretta verso il basso del piano)}$$

$$P_{\perp} = P \cos\theta = mg \cos\theta \qquad \text{(componente perpendicolare al piano)}$$

<h2>Equilibrio senza attrito</h2>

In assenza di attrito, l'unica forza che può bilanciare $P_{\parallel}$ è la tensione di un vincolo (ad esempio una fune parallela al piano).

Condizione di equilibrio:

$$\sum F_{y'} = N - mg\cos\theta = 0 \implies N = mg\cos\theta$$

$$\sum F_{x'} = T - mg\sin\theta = 0 \implies T = mg\sin\theta$$

<h2>Equilibrio con attrito</h2>

La forza d'attrito statico ha valore massimo:

$$F_{a,\text{max}} = \mu_s N = \mu_s mg\cos\theta$$

dove $\mu_s$ è il coefficiente di attrito statico. Il corpo rimane in equilibrio finché:

$$mg\sin\theta \le \mu_s mg\cos\theta \implies \tan\theta \le \mu_s$$

L'**angolo limite di attrito** $\phi$ è l'angolo massimo per cui il corpo è ancora in equilibrio senza scivolare:

$$\tan\phi = \mu_s$$

<h2>Esempio</h2>

Un blocco di massa $m = 10 \, \text{kg}$ è su un piano inclinato di $\theta = 30°$. Il coefficiente di attrito statico è $\mu_s = 0{,}6$. Il corpo è in equilibrio?

Forza lungo il piano:

$$P_{\parallel} = 10 \cdot 9{,}81 \cdot \sin 30° = 49{,}05 \, \text{N}$$

Forza normale:

$$N = 10 \cdot 9{,}81 \cdot \cos 30° \approx 84{,}9 \, \text{N}$$

Attrito massimo disponibile:

$$F_{a,\text{max}} = 0{,}6 \cdot 84{,}9 \approx 50{,}9 \, \text{N}$$

Poiché $F_{a,\text{max}} = 50{,}9 \, \text{N} > P_{\parallel} = 49{,}05 \, \text{N}$, il corpo è in equilibrio.

[Equilibrio statico]({{< ref "/pages/pyphysics/equilibrium/eq_statico" >}} "Equilibrio statico")

[Momento di una forza]({{< ref "/pages/pyphysics/equilibrium/eq_momento" >}} "Momento di una forza")
