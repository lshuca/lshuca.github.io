+++
menus = ['algebra']
title = 'Disequazioni con valore assoluto'
date = 2025-11-21T14:30:00+01:00
+++

Una **disequazione con valore assoluto** è una disequazione in cui l'incognita $x$ appare all'interno del simbolo di valore assoluto $| A(x) |$.

Il valore assoluto di un numero $a$, indicato come $|a|$, rappresenta la sua distanza dall'origine sulla retta numerica. Essendo una distanza, $|a|$ è sempre un valore non negativo ($|a| \ge 0$).

Possiamo definire il comportamento del valore assoluto tramite la consueta considerazione:
* Se l'argomento è positivo o nullo il valore assoluto rimane invariato;
* Se l'argomento è negativo il valore assoluto inverte il segno.

$$
|A| = \begin{cases}
A & \text{se } A \ge 0 \newline
-A & \text{se } A < 0
\end{cases}
$$

<h2>Disequazioni con valore assoluto</h2>

Quando affrontiamo disequazioni della forma base $|A(x)| \lessgtr k$ con $k$ costante positiva ($k > 0$), distinguiamo due casi fondamentali che semplificano lo studio dei sistemi.

<h3>1. Caso $| A(x) | < k$</h3>

Chiedersi quando il modulo di un argomento è **minore** di una costante positiva significa cercare i valori la cui distanza dall'origine è inferiore a $k$. Questo corrisponde ai valori "interni" all'intervallo $(-k, k)$.

$$
-k < A(x) < k
$$

Che equivale al sistema:
$$
\begin{cases}
A(x) < k \newline
A(x) > -k
\end{cases}
$$

<h3>2. Caso $| A(x) | > k$</h3>

Chiedersi quando il modulo è **maggiore** di una costante positiva significa cercare i valori la cui distanza dall'origine è superiore a $k$. Questo corrisponde ai valori "esterni" all'intervallo.

$$
A(x) < -k \quad \cup \quad A(x) > k
$$

---

<h4>Esempi</h4>

$$|x| < 9$$

Essendo una richiesta di valori "vicini" all'origine (minori di 9), applichiamo la regola dell'intervallo interno:

$$
-9 < x < 9
$$

Possiamo scriverlo anche come sistema:

$$
\begin{cases}
x < 9 \newline
x > -9
\end{cases}
$$

Le soluzioni sono quindi tutti i valori compresi tra -9 e 9.

---

$$|x + 3| \ge 7$$

In questo caso stiamo cercando i valori la cui distanza è **maggiore o uguale** a 7. Corrisponde all'unione di due disuguaglianze (valori esterni).

$$
x + 3 \le -7 \quad \cup \quad x + 3 \ge 7
$$

Risolviamo le due disequazioni separatamente:

1. $x + 3 \le -7 \implies x \le -10$
2. $x + 3 \ge 7 \implies x \ge 4$

La soluzione è l'unione degli intervalli:

$$
x \le -10 \quad \cup \quad x \ge 4
$$

---

$$| x + 1 | + 3 < 0$$

Riportiamo prima la disequazione nella forma standard isolando il valore assoluto:

$$| x + 1 | < - 3$$

Osserviamo il primo membro: un valore assoluto è per definizione sempre $\ge 0$.
Ci viene chiesto quando questa quantità positiva (o nulla) sia **minore** di un numero negativo ($-3$).

Si evince immediatamente che questo è impossibile. Non è necessario impostare alcun sistema o calcolo.

$$
\text{Nessuna soluzione} \quad (\emptyset)
$$

*Nota: Se la disequazione fosse stata $|x+1| > -3$, la soluzione sarebbe stata $\forall x \in \mathbb{R}$, poiché un valore assoluto è sempre maggiore di un numero negativo.*