+++
menus = []
title = 'Introduzione ai vettori'
date = 2024-01-09T15:55:42+01:00
+++

I vettori rappresentano uno degli strumenti matematici fondamentali in fisica. I vettori vengono infatti utilizzati per descrivere spostamenti, forze e altre grandezze fisiche dove *un numero* non è sufficiente.

In matematica e fisica, un _vettore_ è un concetto che rappresenta una quantità caratterizzata non solo dalla sua _magnitudine_ (o grandezza), ma anche dalla sua _direzione_ e _verso_. In altre parole, un vettore è un oggetto matematico che ha un **modulo** (o lunghezza), una **direzione** e un **verso** specifici. 

Possiamo quindi facilmente identificare un vettore sul foglio come un segmento orientato, ovvero una linea che unisce due punti identificandone uno come primo (punto di applicazione).

![vettore_def](/static/img/vector_def.jpg "Definizione grafica di vettore")

Dal grafico si possono identificare facilmente tutte e tre le proprietà del vettore:

1) **modulo**: $|| \vec v || = v$, il valore (scalare) che rappresenta la lunghezza del vettore.
2) **direzione**: lungo la retta $r$
3) **verso**: uscente dal punto di applicazione

I vettori, e quindi anche le grandezze vettoriali, possono essere riconosciute immediatamente anche senza l'ausilio di un supporto grafico, vengono riportati in corsivo o tramite l'ausilio di una piccola freccia sopra il simbolo.

$$ \vec v \neq v \, v \neq \text{v}$$

È importante notare che un vettore non è equivalente ad un segmento generico: il vettore che unisce i punti $A$ a $B$ è opposto al vettore che unisce $B$ ad $A$. Ciò significa che fare un passo verso destra o uno verso sinistra sono due operazioni distinte: in questo caso opposte.

$$ \vec {AB} = - \vec {BA} \rightarrow \vec {AB} + \vec {BA} = \vec {0} $$

Con $\vec 0$ abbiamo potuto introdurre il concetto di vettore nullo: fare un passo verso destra, procedendo quindi con uno verso sinistra torneremo nel punto di partenza.

![vettore_null](/static/img/vec_null.gif#center)

Per maggiori info sui vettori:

* [Somma di vettori]({{< ref "/pages/pyphysics/gen_vec_sum" >}}  "Somma di vettori")
* [Differenza di vettori]({{< ref "/pages/pyphysics/gen_vec_sub" >}}  "Differenza di vettori")
* [Moltiplicazione per uno scalare]
* [Versori]
* [Scomposizione di un vettore]
