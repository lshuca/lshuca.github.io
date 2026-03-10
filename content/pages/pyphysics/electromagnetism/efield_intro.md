+++
menus = []
title = 'Introduzione al campo elettrico'
date = 2026-03-10T10:00:00+01:00
+++

Il campo elettrico è uno dei concetti fondamentali dell'elettromagnetismo. Descrive come una carica elettrica modifica lo spazio circostante, esercitando forze su altre cariche.

<h2>Legge di Coulomb</h2>

La forza tra due cariche puntiformi $q_1$ e $q_2$ poste a distanza $r$ è descritta dalla **legge di Coulomb**:

$$F = k_e \dfrac{|q_1 q_2|}{r^2}$$

dove $k_e = \dfrac{1}{4\pi\varepsilon_0} \approx 8{,}99 \times 10^9 \, \dfrac{\text{N} \cdot \text{m}^2}{\text{C}^2}$ è la costante di Coulomb e $\varepsilon_0 \approx 8{,}85 \times 10^{-12} \, \dfrac{\text{C}^2}{\text{N} \cdot \text{m}^2}$ è la permettività del vuoto.

La forza è:

* **repulsiva** se le cariche hanno lo stesso segno ($q_1 q_2 > 0$);
* **attrattiva** se hanno segno opposto ($q_1 q_2 < 0$).

In forma vettoriale, la forza esercitata da $q_1$ su $q_2$ è:

$$\vec{F}_{12} = k_e \dfrac{q_1 q_2}{r^2} \hat{r}_{12}$$

dove $\hat{r}_{12}$ è il versore da $q_1$ verso $q_2$.

<h2>Definizione di campo elettrico</h2>

Il campo elettrico $\vec{E}$ in un punto dello spazio è definito come la forza che agisce su una **carica di prova** $q_0$ positiva e infinitesima posta in quel punto, divisa per la carica stessa:

$$\vec{E} = \dfrac{\vec{F}}{q_0}$$

L'unità di misura del campo elettrico nel SI è il **volt per metro** ($\text{V/m}$) oppure equivalentemente il Newton per Coulomb ($\text{N/C}$).

<h2>Campo di una carica puntiforme</h2>

Il campo elettrico generato da una carica puntiforme $Q$ a distanza $r$ è:

$$E = k_e \dfrac{|Q|}{r^2} = \dfrac{|Q|}{4\pi\varepsilon_0 r^2}$$

La direzione è radiale: si allontana da $Q$ se $Q > 0$, si avvicina a $Q$ se $Q < 0$.

<h2>Linee di campo</h2>

Le linee di campo elettrico sono curve che in ogni punto hanno la direzione e il verso del vettore $\vec{E}$. Permettono di visualizzare il campo:

* Escono dalle cariche positive ed entrano in quelle negative;
* Non si intersecano mai;
* Più sono dense, più il campo è intenso.

<h2>Esempio</h2>

Calcolare il modulo del campo elettrico generato da una carica $Q = 2 \times 10^{-6} \, \text{C}$ a una distanza $r = 0{,}5 \, \text{m}$.

$$E = 8{,}99 \times 10^9 \cdot \dfrac{2 \times 10^{-6}}{(0{,}5)^2} = 8{,}99 \times 10^9 \cdot 8 \times 10^{-6} \approx 7{,}19 \times 10^4 \, \text{V/m}$$

[Campo elettrico di cariche puntiformi]({{< ref "/pages/pyphysics/electromagnetism/efield_punti" >}} "Campo elettrico di cariche puntiformi")

[Campo elettrico di un filo infinito]({{< ref "/pages/pyphysics/electromagnetism/efield_filo" >}} "Campo elettrico di un filo infinito")
