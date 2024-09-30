+++
menus = ['cartesiano']
title = 'Fasci di rette'
date = 2024-09-12T22:56:42+01:00
+++

Tutte le informazioni precedenti sono sufficienti per poter affrontare quasi qualsiasi problema di geometria analitica che riguardi rette o punti.

Esistono tuttavia alcune scorciatoie per agevolarci nella risoluzione e risparmiare tempo prezioso.

<h2>Coefficiente angolare della retta passante per due punti</h2>

Dati due punti $A$ e $B$ è possibile calcolare il coefficiente angolare della retta che li unisce.

$$ m_{AB} = \dfrac{y_A - y_B}{x_A - x_B}$$

Come nel caso del punto medio o della distanza tra due punti, la scelta del punto $A$ o $B$ come primo o secondo termine è indifferente. È invece importante mantenere lo stesso ordine al numeratore ed al denominatore (prima $A$ poi $B$ o viceversa).

<h2>Retta passante per due punti</h2>

Dati due punti $A$ e $B$ è possibile calcolare immediatamente la retta che li unisce.

$$ \dfrac{y - y_A}{y_B - y_A} = \dfrac{x - x_A}{x_B - x_A} $$ 

Questa equazione deriva dalla risoluzione del sistema contenente il fascio di rette passante per il primo e il secondo punto, oppure del fascio di rette avente il coefficiente angolare della retta passante per $\overline{AB}$ forzandolo per $A$ o $B$.

<h2>Distanza punto retta</h2>

Dato un punto $P$ ed una retta $r$ possiamo definire la distanza tra i due enti come la lunghezza del segmento minimo che li unisce. Questa definizione porta a identificare la distanza nella lunghezza del segmento con estremi il punto $P$ ed il punto $H$, intersezione della retta che cade perpendicolarmente alla retta $r$ e passa per il punto $P$.

$$ P( \bm{X_p}, \: \bm{Y_p}) $$

$$ r: \: y= m_r x + q_r \rightarrow a_r x + b_r y + c_r = 0$$

Anche in questo caso esiste una formula molto comoda che richiede tuttavia di scrivere la retta $r$ in forma implicita.

$$ d = \dfrac{\left| a_r \bm{X_p} + b_r \bm{Y_p} + c_r \right|}{\sqrt{a_r^2 + b_r^2}} $$

Si può facilmente notare come la distanza dipenda sia dai <em>parametri</em> della retta che dalle <b>COORDINATE</b> del punto.

Tramite questa utile formula è facile calcolare i lati di un poligono regolare o la distanza tra due rette parallele.