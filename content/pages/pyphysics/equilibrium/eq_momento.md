+++
menus = ['forze']
title = 'Momento di una forza'
date = 2026-03-10T10:00:00+01:00
+++

Il momento di una forza (o **coppia**) misura la capacità di una forza di produrre una rotazione attorno a un punto fisso detto **polo**.

<h2>Definizione</h2>

Il momento $M$ di una forza $\vec{F}$ rispetto a un polo $O$ è definito come:

$$\vec{M} = \vec{r} \times \vec{F}$$

dove $\vec{r}$ è il vettore che va dal polo $O$ al punto di applicazione della forza. Il modulo è:

$$M = r \cdot F \cdot \sin\alpha$$

dove $\alpha$ è l'angolo tra $\vec{r}$ e $\vec{F}$.

In modo equivalente, si può scrivere il momento come il prodotto della forza per il **braccio** $d$, cioè la distanza perpendicolare tra la retta d'azione della forza e il polo:

$$M = F \cdot d$$

L'unità di misura del momento nel SI è il **Newton per metro** ($\text{N} \cdot \text{m}$).

<h2>Verso del momento</h2>

Per convenzione:

* Momento **positivo** (antiorario): tende a ruotare il corpo in senso antiorario;
* Momento **negativo** (orario): tende a ruotare il corpo in senso orario.

<h2>Equilibrio rotazionale</h2>

Un corpo è in equilibrio completo solo se sono verificate sia la condizione di equilibrio traslazionale che quella rotazionale. La condizione per l'equilibrio rotazionale rispetto a qualsiasi polo $O$ è:

$$\sum M_O = 0$$

La somma algebrica di tutti i momenti rispetto a un polo deve essere nulla. Il polo può essere scelto liberamente: spesso si sceglie in modo da eliminare le forze incognite dall'equazione.

<h2>Principio della leva</h2>

La leva è la semplice macchina che sfrutta i momenti. Ha un fulcro $O$, un braccio di forza $d_1$ e un braccio di resistenza $d_2$.

La condizione di equilibrio della leva è:

$$F_1 \cdot d_1 = F_2 \cdot d_2$$

Questa relazione mostra che con un piccolo sforzo $F_1$ applicato a grande distanza si può bilanciare un grande peso $F_2$ posto vicino al fulcro.

<h2>Esempio</h2>

Una trave orizzontale di lunghezza $L = 4 \, \text{m}$ e massa $m = 20 \, \text{kg}$ è appoggiata all'estremo sinistro su un fulcro. A $3 \, \text{m}$ dal fulcro è appeso un peso $P_1 = 100 \, \text{N}$. Dove bisogna applicare una forza $F = 200 \, \text{N}$ (verso l'alto) per mantenere l'equilibrio?

La forza peso della trave $P_T = mg = 196{,}2 \, \text{N}$ agisce nel suo baricentro, a $2 \, \text{m}$ dal fulcro.

Scegliamo il fulcro come polo. Condizione $\sum M = 0$ (positivo antiorario):

$$F \cdot d - P_1 \cdot 3 - P_T \cdot 2 = 0$$

$$200 \cdot d = 100 \cdot 3 + 196{,}2 \cdot 2 = 692{,}4$$

$$d = \dfrac{692{,}4}{200} \approx 3{,}46 \, \text{m}$$

[Equilibrio statico]({{< ref "/pages/pyphysics/equilibrium/eq_statico" >}} "Equilibrio statico")

[Piano inclinato]({{< ref "/pages/pyphysics/equilibrium/eq_piano_inclinato" >}} "Piano inclinato")
