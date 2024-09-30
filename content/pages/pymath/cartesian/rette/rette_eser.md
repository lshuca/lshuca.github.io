+++
menus = ['cartesiano']
title = 'Operazioni con rette'
date = 2024-09-12T20:56:42+01:00
+++

<h2>Appartenenza di un punto ad una retta</h2>

Un punto $P$ appartiene ad una retta quando, sostituendone le coordinate $x_p$ e $y_p$ nell'equazione della retta, si ottiene una identità.

$$ y_p = m x_p + q \rightarrow \text{Risulta verificata}$$
$$ a x_p + b y_p + c = 0 \rightarrow \text{Risulta verificata}$$

<h2>Posizioni reciproche tra rette</h2>

Due rette possono essere definite, una rispetto all'altra, come parallele (ovvero due rette che non hanno punti in comuni o che sono coincidenti) oppure incidenti. Possiamo discriminare i vari casi tramite lo studio dei rispettivi coefficienti angolari.

Prendiamo il caso di due rette generiche $r$ e $s$ di equazioni rispettivamente:

$$ r: \: y= m_r x + q_r $$
$$ s: \: y= m_s x + q_s $$

<h3>Rette parallele</h3>

Due rette si dicono parallele se i due coefficienti angolari sono uguali.

$$ m_r = m_s $$

In tutti gli altri casi le rette si dicono incidenti o oblique.

<h3>Rette perpendicolari</h3>

Due rette perpendicolari sono due rette incidenti molto particolari: definiscono infatti quattro angoli retti nel punto di intersezione. Si può quindi dimostrare che per due rette perpendicolari il prodotto dei coefficienti angolari deve essere $-1$, ovvero il coefficiente angolare di una deve essere l'inverso (L'inverso, o reciproco, di un numero $n$ è definito come $\dfrac{1}{n}$.) opposto (L'opposto di un numero $m$ è definito come $-m$.) dell'altra.

$$ m_r m_s = - 1 $$

$$ m_r = -\dfrac{1}{m_s} $$

<h2>Intersezione tra due rette</h2>

Il punto di intersezione tra due rette è quel punto, salvo il caso di due rette parallele non coincidenti, che appartiene sia alla prima che alla seconda retta.

La ricerca di questo punto richiede quindi lo studio di un sistema di due equazioni, le equazioni delle due rette, in due incognite, le due coordinate del punto $P$.

$$
	\begin{cases}
		y = m_r x + q_r \newline \newline
		y = m_s x + q_s
	\end{cases}
$$

Risulta ancora più evidente tramite lo studio delle rette in forma implicita, infatti:

$$
	\begin{cases}
		a_r x + b_r y + c_r = 0 \newline \newline
		a_s x + b_s y + c_s = 0
	\end{cases}
$$

Sappiamo infatti dallo studio dei sistemi lineari che il rapporto dei coefficienti $a$, $b$ e $c$ dà luogo a casi differenti:

* per $\dfrac{a_r}{a_s} \neq \dfrac{b_r}{b_s}$ il sistema è determinato. 
* per $\dfrac{a_r}{a_s} = \dfrac{b_r}{b_s}$ il sistema è indeterminato o impossibile:
	* per $\dfrac{a_r}{a_s} = \dfrac{b_r}{b_s} = \dfrac{c_r}{c_s} $ il sistema è indeterminato;
	* per $\dfrac{a_r}{a_s} = \dfrac{b_r}{b_s} \neq \dfrac{c_r}{c_s} $ il sistema è impossibile. 

Ricordando che abbiamo definito la relazione $m = -\dfrac{b}{a}$ e che possiamo invertire le condizioni precedenti in $ \dfrac{a_r}{b_r} = \dfrac{a_s}{b_s} $ e $ \dfrac{a_r}{b_r} \neq \dfrac{a_s}{b_s} $ otteniamo proprio quanto detto pocanzi.

Nel caso di coefficienti angolari uguali le rette risultano parallele ovvero non si incontrano mai (impossibili) o coincidono (soluzione indeterminata).