+++
menus = ['elettromagnetismo']
title = 'Introduzione al campo magnetico'
date = 2026-03-10T10:00:00+01:00
+++

Il campo magnetico è la componente magnetica del campo elettromagnetico. Si manifesta in presenza di cariche in moto (correnti elettriche) o di magneti permanenti.

<h2>Vettore campo magnetico $\vec{B}$</h2>

Il campo magnetico è descritto dal vettore $\vec{B}$, detto anche **induzione magnetica** o **densità di flusso magnetico**. La sua unità di misura nel SI è il **Tesla** (T):

$$1 \, \text{T} = 1 \, \dfrac{\text{kg}}{\text{A} \cdot \text{s}^2} = 1 \, \dfrac{\text{V} \cdot \text{s}}{\text{m}^2}$$

<h2>Forza di Lorentz</h2>

Una carica $q$ in moto con velocità $\vec{v}$ in un campo magnetico $\vec{B}$ subisce la **forza di Lorentz**:

$$\vec{F} = q\vec{v} \times \vec{B}$$

In modulo:

$$F = qvB\sin\alpha$$

dove $\alpha$ è l'angolo tra $\vec{v}$ e $\vec{B}$. Si noti che:

* La forza è **perpendicolare** sia a $\vec{v}$ che a $\vec{B}$;
* Se la carica si muove parallela al campo ($\alpha = 0°$), la forza è **nulla**;
* Il campo magnetico **non compie lavoro** sulla carica (la forza è sempre perpendicolare allo spostamento).

La direzione di $\vec{F}$ si determina con la **regola della mano destra**: allineando le dita nella direzione di $\vec{v}$ e piegandole verso $\vec{B}$, il pollice indica la direzione di $\vec{F}$ per $q > 0$.

<h2>Forza su un filo percorso da corrente</h2>

Un filo di lunghezza $L$ percorso da corrente $I$ immerso in un campo $\vec{B}$ subisce una forza:

$$\vec{F} = I \vec{L} \times \vec{B}$$

In modulo: $F = ILB\sin\alpha$, dove $\alpha$ è l'angolo tra il filo e il campo.

<h2>Legge di Biot-Savart</h2>

Il campo magnetico generato da un elemento di filo $d\vec{l}$ percorso da corrente $I$ nel punto $P$ a distanza $r$ è:

$$d\vec{B} = \dfrac{\mu_0}{4\pi} \dfrac{I \, d\vec{l} \times \hat{r}}{r^2}$$

dove $\mu_0 = 4\pi \times 10^{-7} \, \text{T} \cdot \text{m/A}$ è la **permeabilità magnetica del vuoto**.

<h3>Campo di un filo rettilineo infinito</h3>

Integrando la legge di Biot-Savart lungo un filo infinito percorso da corrente $I$, si ottiene il campo a distanza $r$:

$$B = \dfrac{\mu_0 I}{2\pi r}$$

Le linee di campo sono **cerchi concentrici** attorno al filo. La direzione segue la regola della mano destra: avvolgendo il filo con la mano destra e il pollice nella direzione della corrente, le dita indicano il verso delle linee di campo.

<h2>Confronto con il campo elettrico</h2>

| | Campo elettrico $\vec{E}$ | Campo magnetico $\vec{B}$ |
|---|---|---|
| **Sorgente** | Cariche ferme | Cariche in moto (correnti) |
| **Forza su carica ferma** | $\vec{F} = q\vec{E}$ | Nessuna |
| **Forza su carica in moto** | $q\vec{E}$ | $q\vec{v} \times \vec{B}$ |
| **Linee di campo** | Da $+$ a $-$ | Chiuse (no monopoli) |
| **Unità** | V/m | T |

[Introduzione al campo elettrico]({{< ref "/pages/pyphysics/electromagnetism/efield_intro" >}} "Introduzione al campo elettrico")

[Campo elettrico di un filo infinito]({{< ref "/pages/pyphysics/electromagnetism/efield_filo" >}} "Campo elettrico di un filo infinito")
