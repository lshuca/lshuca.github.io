+++
menus = []
title = 'Campo elettrico di cariche puntiformi'
date = 2026-03-10T10:00:00+01:00
+++

Quando più cariche puntiformi sono presenti nello spazio, il campo elettrico risultante in un punto si calcola tramite il **principio di sovrapposizione**.

<h2>Principio di sovrapposizione</h2>

Il campo elettrico totale in un punto $P$ generato da $n$ cariche $q_1, q_2, \ldots, q_n$ è la **somma vettoriale** dei campi prodotti da ciascuna carica individualmente:

$$\vec{E}_{tot} = \vec{E}_1 + \vec{E}_2 + \cdots + \vec{E}_n = \sum_{i=1}^{n} \vec{E}_i$$

Ogni contributo è:

$$\vec{E}_i = k_e \dfrac{q_i}{r_i^2} \hat{r}_i$$

dove $r_i$ è la distanza da $q_i$ a $P$ e $\hat{r}_i$ è il versore da $q_i$ verso $P$.

<h2>Procedura di calcolo</h2>

1. Disegnare la configurazione con le cariche e il punto $P$.
2. Calcolare il campo $\vec{E}_i$ di ciascuna carica in $P$ (modulo e direzione).
3. Scomporre ogni $\vec{E}_i$ nelle componenti $x$ e $y$.
4. Sommare separatamente le componenti: $E_x = \sum E_{ix}$, $E_y = \sum E_{iy}$.
5. Calcolare il modulo totale: $E = \sqrt{E_x^2 + E_y^2}$.

<h2>Esempio 1 — due cariche uguali</h2>

Due cariche $q_1 = q_2 = +3 \times 10^{-6} \, \text{C}$ si trovano rispettivamente in $A(-1, 0)$ e $B(1, 0)$ (distanze in metri). Calcolare il campo in $P(0, 1)$.

Distanza da ciascuna carica a $P$:

$$r = \sqrt{1^2 + 1^2} = \sqrt{2} \, \text{m}$$

Modulo di ciascun campo:

$$E_1 = E_2 = 8{,}99 \times 10^9 \cdot \dfrac{3 \times 10^{-6}}{2} \approx 1{,}35 \times 10^4 \, \text{N/C}$$

Per simmetria le componenti $x$ si annullano. Ciascun campo ha componente $y$ pari a $E_i \sin 45° = E_i / \sqrt{2}$:

$$E_y = 2 \cdot \dfrac{1{,}35 \times 10^4}{\sqrt{2}} \approx 1{,}91 \times 10^4 \, \text{N/C}$$

Il campo risultante è diretto verso l'alto (direzione $+y$).

<h2>Esempio 2 — dipolo elettrico</h2>

Un **dipolo** è formato da due cariche uguali e opposte $+q$ e $-q$ poste a distanza $2d$. Il campo in un punto lungo l'asse del dipolo a grande distanza $r \gg d$ è approssimativamente:

$$E \approx k_e \dfrac{2qd}{r^3} = k_e \dfrac{p}{r^3}$$

dove $p = q \cdot 2d$ è il **momento di dipolo**. Il campo decresce più rapidamente ($\sim 1/r^3$) rispetto a quello di una carica singola ($\sim 1/r^2$).

[Introduzione al campo elettrico]({{< ref "/pages/pyphysics/electromagnetism/efield_intro" >}} "Introduzione al campo elettrico")

[Campo elettrico di un filo infinito]({{< ref "/pages/pyphysics/electromagnetism/efield_filo" >}} "Campo elettrico di un filo infinito")
