Il vettore nullo, o elemento zero, è un vettore necessario per poter definire uno spazio vettoriale.

Gli spazi vettoriali sono strutture matematiche, nello specifico strutture algebriche, in cui sono definiti:

* un campo di elementi scalari;
* un insieme di elementi vettoriali;
* due operazioni, addizione e moltiplicazione, per le quali valgono diverse proprietà.

<h3>
	Definizione
</h3>

Si dice **spazio vettoriale** su un campo $K$ un insieme $V$ dotato di due operazioni:

* un'operazione interna $+:V \times V \rightarrow V$ (detta ''somma'' o legge di composizione interna, che associa a ogni coppia di vettori $ \mathbf u, \mathbf v $ appartenenti a $V$ un altro vettore di $V$ indicato con $ \mathbf u + \mathbf v$);
* un'operazione esterna $\cdot:K \times V \rightarrow V$ (detta ''prodotto per scalare'' o legge di composizione esterna, che associa a ogni coppia $(a,\mathbf u)$, dove $ \mathbf u $ appartiene a $V$ e $a$ appartiene a $K$, un altro vettore appartenente a $V$ indicato con $ a\mathbf u$).

Queste due operazioni devono rispettare le seguenti proprietà:

1) $\forall \mathbf u, \mathbf v \in V, \mathbf u + \mathbf v = \mathbf v + \mathbf u$ (proprietà commutativa della somma)
2) $\forall \mathbf u, \mathbf v, \mathbf w \in V, (\mathbf u + \mathbf v) + \mathbf w = \mathbf u + (\mathbf v + \mathbf w)$ (proprietà associativa della somma)
3) $ \exists 0_V \in V \mid \forall \mathbf u \in V, \mathbf u + 0_V= 0_V + \mathbf u = \mathbf u $ (esistenza dell'elemento neutro per la somma)
4) $ \forall \mathbf u \in V, \exists \mathbf u' \in V \mid \mathbf u + \mathbf u'=\mathbf u' + \mathbf u=0_V $ (esistenza dell'elemento opposto per la somma)
5) $\forall \mathbf u, \mathbf v \in V, \forall a \in K, a(\mathbf u + \mathbf v) = a \mathbf u + a \mathbf v$ (proprietà distributiva a destra del prodotto per scalare)
6) $\forall a,b \in K, \forall \mathbf v \in V,(a+b) \mathbf v = a \mathbf v + b \mathbf v$ (proprietà distributiva a sinistra del prodotto per scalare)
7) $\forall a,b \in K,\forall \mathbf v \in V,(a b) \mathbf v = a (b \mathbf v)$ (proprietà associativa del prodotto per scalare)
8) $ \exists 1 \in K \mid \forall \mathbf u \in V, 1\mathbf u = \mathbf u $ (esistenza dell'elemento neutro per il prodotto per scalare)

Su questa definizione possiamo costruire molti spazi vettoriali, tra questi emergono gli spazi vettoriali composto da polinomi (con "+" identificato nella somma di polinomi e "\*" la moltiplicazoine per uno scalare), le matrici (uno strumento matematico molto utile) e gli spazi di funzioni.