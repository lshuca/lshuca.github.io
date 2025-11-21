+++
menus = ['algebra']
title = 'Equazioni con valore assoluto'
date = 2025-11-13T16:43:28+01:00
+++

Un'**equazione con valore assoluto** è un'equazione in cui l'incognita $x$ appare all'interno del simbolo di valore assoluto $| A(x) |$.

Il valore assoluto di un numero $a$, indicato come $|a|$, rappresenta il suo modulo, in parole più semplici la sua "distanza dall'origine" sulla retta numerica. Di conseguenza, $|a|$ è sempre un valore non negativo ($|a| \ge 0$).

Possiamo anche definire il valore assoluto tramite una semplice considerazione:
* Se l'argomento è positivo o nullo il suo valore assoluto rimane tale;
* Se l'argomento è negativo allora il valore assoluto assume il valore dell'opposto dell'argomento.

$$
|A| = \begin{cases}
A & \text{se } A \ge 0 \newline
-A & \text{se } A < 0
\end{cases}
$$


<h2>Equazioni con valore assoluto</h2>

<h3>$| A(x) | = k$</h3>

Per risolvere un'equazione della forma base $|A(x)| = k$, dove $k$ è una costante non negativa ($k \ge 0$), dobbiamo riscrivere il valore assoluto come unione di due sistemi.

$$
\begin{cases}
A(x) = k \newline
A(x) \ge 0
\end{cases}
\quad \cup \quad
\begin{cases}
-A(x) = k \newline
A(x) < 0
\end{cases}
$$

La soluzione dell'equazione è data dall'**unione** delle soluzioni trovate in questi due casi.

---

<h4>Esempi </h4>

$$|x| = 9$$

Applicando la regola generale possiamo riscrivere la condizione come 

$$
\begin{cases}
x = 9 & \text{se } x \ge 0 \newline
-x = 9 & \text{se } x < 0
\end{cases}
$$

Riscrivendo in maniera più leggibile dovremo risolvere l'unione di due sistemi così definiti.

$$
\begin{cases}
x = 9 \newline
x \ge 0
\end{cases}
\quad \cup \quad
\begin{cases}
-x = 9 \newline
x < 0
\end{cases}
$$

Risolvendo entrambi i sistemi risulta che le soluzioni sono immediate e accettabili:

$$
x = 9
\quad \cup \quad
x = -9
$$

---

$$ |x + 3| = 7 $$

Applicando la definizione possiamo notare che questa equazione è in realtà equivalente ad una coppia di equazioni condizionate.

$$
\begin{cases}
x + 3= 7 & \text{se } x + 3\ge 0 \newline
-(x + 3)= 7 & \text{se } x + 3< 0
\end{cases}
$$

Possiamo notare come il segno del valore assoluto risulta essere in questo caso leggermente più scomodo, per questo motivo in casi più complicati si procede con lo studio del valore assoluto prima della definizione del sistema.

Procedendo come già visto otteniamo:


$$
\begin{cases}
x + 3 = 7 \newline
x \ge -3
\end{cases}
\quad \cup \quad
\begin{cases}
-(x + 3) = 7 \newline
x < -3
\end{cases}
$$

$$
\begin{cases}
x = 4 \newline
x \ge -3
\end{cases}
\quad \cup \quad
\begin{cases}
x = -10 \newline
x < -3
\end{cases}
$$

Anche in questo caso entrambe le soluzioni sono accettabili ma non simmetriche come invece erano nel primo caso:

$$
x = 7
\quad \cup \quad
x = -10
$$



---

$$ | x + 1 | + 3 = 0 $$

In questo caso dobbiamo in prima battuta riportare l'equazione nella forma standard, ovvero $|A(x)| = k$

$$ | x + 1 | = - 3 $$

Possiamo subito notare che il primo membro, un numero mai negativo per definizione del valore assoluto, deve essere confrontato con un valore negativo $-3$.
Si evince immediatamente che questa equazione non ha nessuna soluzione. Risolvendo possiamo comunque notare che:

$$
\begin{cases}
x + 1 = -3 \newline
x \ge -3
\end{cases}
\quad \cup \quad
\begin{cases}
-(x + 1) = -3 \newline
x < -3
\end{cases}
$$

$$
\begin{cases}
x = -4 \newline
x \ge -3
\end{cases}
\quad \cup \quad
\begin{cases}
x = 2 \newline
x < -3
\end{cases}
$$

Come già dedotto intuitivamente possiamo verificare che nessuna delle due soluzione sarebbe accettabile.
