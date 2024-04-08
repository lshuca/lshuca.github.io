+++
menus = ['forze']
title = 'Risoluzione guidata di un esercizio di equilibrio'
date = 2024-01-09T15:56:42+01:00
+++

<h2>Testo del problema</h2>

Uno sciatore è appoggiato ad una pista inclinata tale che in una lunghezza di $1255 $ m supera un dislivello di $448 $m.

Ipotizzando che la pista risulti con una pendenza uniforme, studiare il caso di uno sciatore di massa $m = 80$ kg in equilibrio. Calcolare il valore della forza svolta dallo sciatore per evitare di scivolare sul piano inclinato.

<h2>Impostazione</h2>

Per impostare il problema dobbiamo prima capire i dati.

<h3>Dati e incognite</h3>

I dati del problema sono riferiti alle specifiche del piano inclinato (lunghezza e dislivello) e alla massa dello sciatore.

<h5>Dati</h5>

* Lunghezza $l = 1255$ m
* Dislivello $h = 448$ m
* Massa dello sciatore $m = 80$ kg

<h5>Incognite</h5>

* Forza esercitata dallo sciatore per mantenere l'equilibrio $\vec F$

<h3>Disegno</h3>

Per tracciare il disegno vogliamo inizialmente capire come è composto il sistema studiato.

Sappiamo che la pista è approssimabile ad uniforme, cioè possiamo ipotizzare che non ci siano variazioni di pendenza in tutto il suo percorso.

![eq_triangle](/static/img/equilibrium_guided/eq_triangle.png "Piano inclinato")

Vogliamo quindi studiare le forze agenti sullo sciatore, rappresentato da un puntino sul piano inclinato.

![eq_skier](/static/img/equilibrium_guided/eq_skier.png "Sciatore")

Lo sciatore ha modo di esercitare una forza parallela alla pendenza e, logicamente, con verso opposto alla discesa.

![eq_skier_1](/static/img/equilibrium_guided/eq_skier_1.png "Sciatore frena")

Osservando queste immagini possiamo subito notare che, per come sono disegnate e rappresentate le forze in questo momento, lo sciatore non risulta in equilibrio.

L'equilibrio statico necessita infatti che la risultante delle forze, cioè la somma, vettoriale, di tutte le forze agenti su un oggetto sia nulla.

Sommando le due forze presenti sul grafico non otteniamo un vettore nullo! Manca infatti la forza normale, una delle forze vincolari più conosciute, che impedisce allo sciatore di sprofondare nel pendio!

![eq_skier_2](/static/img/equilibrium_guided/eq_skier_2.png "Sciatore frena e normale")

Adottando l'approssimazione di punto materiale andiamo a disegnare le forze in gioco, agenti sullo sciatore, in uno schema ad hoc.

![eq_schema](/static/img/equilibrium_guided/eq_schema.png "Schema di corpo libero")

Per poter terminare l'impostazione del problema dobbiamo riportare, vettorialmente, la condizione di equilibrio: ovvero che la somma di tutte le forze sia nulla.

$$ \vec R = \vec F + \vec N + \vec P = \vec 0 $$

<h2>Risoluzione</h2>

La parte fisica del problema è praticamente terminata. Ogni prossimo passo richiede infatti di fare considerazioni di tipo geometrico o algebrico.

Prima di tutto dobbiamo studiare la condizione di equilibrio: abbiamo informazioni vettoriali, difficili da gestire perché non allineate.

Il primo passo è quello di scegliere un sistema di riferimento di assi $x$ e $y$ e disegnare le componenti delle forze studiate finora.

![eq_schema_xy](/static/img/equilibrium_guided/eq_schema_xy.png "Schema di corpo libero componenti")

Sfruttando le conoscenze di goniometria e di relazioni tra angoli e funzioni goniometriche, troviamo facilmente che le componenti di $\vec F$ e $\vec N$ risultano essere:

$$\vec F_x = \vec F \cos \alpha $$
$$\vec F_y = \vec F \sin \alpha $$

$$\vec N_x = \vec N \cos \left(\dfrac{\pi}{2} - \alpha \right) = \vec N \sin \alpha $$
$$\vec N_y = \vec N \sin \left(\dfrac{\pi}{2} - \alpha \right) = \vec N \cos \alpha $$

Dobbiamo fare particolarmente attenzione a quale angolo stiamo usando, infatti nel caso della forza normale l'angolo $\alpha$ non è adiacente a $\vec F$ e $\vec F_x$ imponendo quindi il cambio di funzione goniometrica.

Per quanto concerne $\vec P$ invece sappiamo che "cade a filo a piombo", cioè la sua componente $x$, per questo sistema di riferimento, è nulla.

Risulta molto comodo quindi riconsiderare la condizione di equilibrio lungo le due direzioni $x$ e $y$.

$$ \vec R_x = \vec F_x + \vec N_x = \vec 0 $$
$$ \vec R_y = \vec F_y + \vec N_y + \vec P = \vec 0 $$

Passando quindi a considerare le intensità delle forze sull'asse y.

$$ R_y = F_y + N_y - P = 0 $$

Sostituendo le informazioni ottenute in precedenza.

$$ F \sin \alpha + N \cos \alpha - P = 0 $$

Ricordiamo che la forza peso $\vec P$ è data dalla moltiplicazione della massa del corpo per l'accelerazione di gravità.

$$ F \sin \alpha + N \cos \alpha - mg = 0 $$

Questa risulta ancora essere un'equazione in due incognite ($ F$ e $N$), è quindi necessario trovare un modo per identificare il valore di $N$.

Prendendo la condizione di equilibrio sull'asse x possiamo notare che:

$$ \vec R_x = \vec F_x + \vec N_x = \vec 0 $$

$$ F \cos \alpha = N \sin \alpha $$

$$ N = F \dfrac{\cos \alpha}{\sin \alpha} $$

Sostituendo nella prima:

$$ F \sin \alpha + (F \dfrac{\cos \alpha}{\sin \alpha}) \cos \alpha - mg = 0 $$

$$ F (\sin \alpha)^2 + F(\cos \alpha)^2 - mg (\sin \alpha) = 0 $$

$$ F [(\sin \alpha)^2 +(\cos \alpha)^2] = mg (\sin \alpha) $$

$$ F = mg \dfrac{(\sin \alpha)}{[(\sin \alpha)^2 + (\cos \alpha)^2]} = mg \dfrac{(\sin \alpha)}{1} =  mg \sin \alpha $$

Manca solo da conoscere il valore di $\alpha$, ma questo può essere facilmente ottenuto dalle relazioni goniometriche sfruttando la lunghezza ed il dislivello della pista:

$$ \sin \alpha = \dfrac{h}{l} $$

Quindi.

$$ F \approx 80 \cdot 9.81 \dfrac{448}{1255}\text{N} \approx 280 N $$

<h2>Risoluzione con diverso Sistema di Riferimento</h2>

Possiamo affrontare il problema adoperando una scelta "più furba" per quanto riguarda il sistema di riferimento.

Osservando un piano inclinato possiamo infatti valutarlo, come fatto nel caso precedente, rispetto a due assi $x$ e $y$, perpendicolari tra loro, in cui l'$y$ è solidale alla direzione del "filo a piombo" (cioè diretto verso il centro della terra). Come abbiamo visto questa scelta comporta la scomposizione su questi assi di tutte le forze che non risultano essere orientate come $x$ e $y$: rispettivamente la forza normale e la forza con cui lo sciatore frena.

Questa scelta, seppur corretta, potrebbe comportare però calcoli più complicati qualora le forze in gioco non dovessero essere solo tre (per esempio presenza di attrito, di una tensione o il carico dovuto alla presenza di uno zaino).

Possiamo quindi fare una scelta più "consapevole" e decidere che, per lo studio del problema, il sistema di riferimento $x'$ e $y'$ siano orientati perpendicolarmente e lungo la pendenza.
Questa scelta comporterebbe il dover scomporre la forza peso lungo i due assi solidali alla pendenza, ma le altre forze saranno già utilizzabili.

![eq_alt](/static/img/equilibrium_guided/eq_schema_alt.png "Schema alternativo")

Studiando questo schema la lettura fisica rimane invariata rispetto a prima: tre forze che agiscono su uno stesso corpo, tre forze la cui risultante è nulla.
Cambia invece l'analisi matematica del problema, rendendo necessario scomporre un solo vettore lungo le due direzioni.

In prima battuta possiamo notare che l'unico angolo a nostra disposizione non è più $\alpha$ ma, con un po' di trigonometria, riconosciamo facilmente che 

$$\beta = \dfrac{\pi}{2} - \alpha$$

Per cui, le due componenti risultano essere.

$$ P_{x'} = P \cos \beta = P \cos \left( \dfrac{\pi}{2} - \alpha \right) = P \sin \alpha $$
$$ P_{y'} = P \sin \beta = P \sin \left( \dfrac{\pi}{2} - \alpha \right) = P \cos \alpha $$

Studiando le condizioni di equilibrio lungo i due assi otteniamo che:

$$ \vec R_x = \vec F + \vec P_{x'} = \vec 0 $$
$$ \vec R_y = \vec N + \vec P_{y'} = \vec 0 $$

Ovvero

$$ R_x = - F + \vec P_{x'} = 0 $$
$$ R_y = N - P_{y'} = 0 $$

Per cui possiamo ricalcolare sostituendo i valori ottenuti prima

$$ - F + P \sin \alpha = 0 $$
$$ N - P \cos \alpha = 0 $$

Possiamo notare immediatamente che non è, in questo caso, necessario risolvere le due equazioni in quanto abbiamo immediatamente una relazione risolubile per via numerica:


$$ F = m g \sin \alpha = m g \dfrac{h}{l} $$

Esattamente come ottenuto, con calcoli più complicati, in precedenza.
Sostituendo dunque i valori numerici si ottiene lo stesso risultato.

$$ F \approx 80 \cdot 9.81 \dfrac{448}{1255}\text{N} \approx 280 N $$

![gran_risa](/static/img/equilibrium_guided/equilibrium_slope.jpg "Gran Risa")
