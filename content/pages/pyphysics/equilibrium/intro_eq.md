+++
menus = []
title = 'Differenza di vettori'
date = 2024-01-09T15:56:42+01:00
+++

L'equilibrio delle forze, in dinamica e in statica, è la condizione per cui la risultante delle forze agenti su un corpo è nulla.

Una forza è una grandezza vettoriale, quindi caraterizzata da un modulo, direzione e verso. (Si rimanda ai capitoli [Introduzione ai vettori]({{< ref "/pages/pyphysics/vectors/intro_vec" >}}  "Introduzione ai vettori") e [Introduzione alle forze]({{< ref "/pages/pyphysics/equilibrium/intro_forces" >}}  "Introduzione alle forze") per maggiori informazioni).

Possiamo distinguere tra due tipi di equilibrio:

* **Equilibrio statico**: nel caso in cui il corpo dovesse mantenere velocità nulla (ovvero rimane fermo)
* **Equilibrio dinamico**: nel caso in cui il corpo dovesse muoversi con velocità costante (ovvero che si muove per inerzia)

Queste due definizioni permettono di introdurre il primo principio della dinamica, o *prima legge di Newton*:

<center><em>Corpus omne perseverare in statu suo quiescendi vel movendi uniformiter in directum, nisi quatenus à viribus impressis cogitur statum illum mutare.</em></center>



Dunque, la condizione per cui un corpo sia in equilibrio è che la risultante delle forze, agenti su di esso, sia nulla, ovvero:

$$ \vec{F}_{ris} = 0 $$

Ricordando la definizione di forza risultante, cioè data dalla somma vettoriale delle forze agenti su un corpo, possiamo anche scrivere:

$$ \sum_i \vec F_i = 0 $$

Il simbolo $ \sum $ si legge come "sommatoria" ovver la somma di tutte le possibili forze.

Noto che la condizione di equilibrio necessita lo studio delle forze, può essere utile ricordare come si definisce una forza.

È importante, nel caso 

[Esempio sacchetto spesa]({{< ref "/pages/pyphysics/equilibrium/eq_ex_1" >}}  "Esempio sacchetto spesa")