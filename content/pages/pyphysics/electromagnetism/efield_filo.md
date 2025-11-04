+++
menus = ['elettromagnetismo']
title = 'Campo Elettrico di un Filo Infinito con Legge di Gauss'
date = 2025-11-04T10:30:00+01:00
+++

Spesso il campo generato da un filo infinito carico viene subito associato ad una formula:

$$E = \frac{\lambda}{2 \pi \varepsilon_0 r}$$

dove $\lambda$ è la distribuzione lineare di carica ed $r$ è la distanza del punto $P$ di osservazione dal filo. Vogliamo però ricavare di nuovo il campo elettrico $\vec E$ utilizzando la **legge di Gauss**.

<h2>Impostazione del Problema</h2>

Consideriamo un filo di lunghezza infinita rappresentato in figura. $P$ è il punto dove vogliamo calcolare il campo elettrico $\vec E$.

<h3>Scelta della Superficie di Gauss</h3>

Come prima cosa dobbiamo scegliere la superficie $S$ di Gauss (quella rappresentata in verde nell'immagine sottostante). Scegliamo un **cilindro concentrico** al filo e passante per il punto $P$.

![efield_all](/static/img/electromagnetism/efield_all.png "Filo carico e punto P")

$S$ è un cilindro di raggio $r$ e altezza $h$. La legge di Gauss impone che la superficie attraverso la quale valutare il flusso del campo elettrico sia chiusa. 

Conviene vedere questo cilindro come costituito dall’unione delle superfici di base $S_{\uparrow}$ e $S_{\downarrow}$ e di quella laterale $S_L$.

<h2>Risoluzione</h2>
<h3>Analisi del Flusso</h3>

L'obiettivo era quello di avere una superficie chiusa: il cilindro offre una superficie chiusa con due componenti perpendicolari al filo e quella laterale. Infatti:

* Per $S_{\uparrow}$ e $S_{\downarrow}$ le normali $\vec n_{\uparrow}$ $\vec n_{\downarrow}$ alle superfici risultano perpendicolari al vettore campo elettrico $\vec E$. Di conseguenza il loro prodotto scalare è nullo ($\cos(90^\circ) = 0$). Il flusso è nullo su $S_{\uparrow}$ e $S_{\downarrow}$.
* Per la superficie laterale $S_L$ invece, essendo la normale $\vec n_L$ ad essa parallela al vettore campo elettrico $\vec E$, il flusso risulta massimo ($\cos(0^\circ) = 1$).

![efield_norm](/static/img/electromagnetism/efield_norm.png "Normali alla superficie")


Il flusso $ \Phi(\vec{E})|_{S} $ del vettore campo elettrico attraverso la superficie di Gauss $S$ può essere scomposto nello studio di tanti contributi che possono, per ragioni geometriche, essere come segue.

$$ \left. \Phi(\vec{E}) \right\rvert_{S} = \Phi_{S}(\vec{E}) = \Phi_{S_{\uparrow}}(\vec{E}) + \Phi_{S_{L}}(\vec{E}) + \Phi_{S_{\downarrow}}(\vec{E}) $$

Come visto, i contributi delle superfici $up$ e $down$ sono nulli. Ci rimane solo il flusso attraverso la superficie laterale $S_L$.

Dobbiamo notare che lungo tutta la superficie laterale $S_L$ il campo elettrico $E$ (in modulo) è sempre lo stesso, perché la distanza $r$ dal filo è costante e perché il contributo parallelo al filo è nullo come indicato in figura.

![efield_radial](/static/img/electromagnetism/efield_radial.png "Componenti radiali e tangenziali alla superficie")

Questo permette di studiare il prodotto scalare tra campo elettrico e superficie come un semplice prodotto di scalari.

$$\Phi_{S}(\vec{E}) = \vec{E} \cdot \vec{S_L} = E \cdot S_L$$

La superficie laterale del cilindro varrà banalmente $S_{L} = 2 \pi r h$.

$$\Phi_{S}(\vec{E}) = E (2 \pi r h)$$

<h3>Applicazione della Legge di Gauss</h3>

Ora applichiamo la legge di Gauss, che ci dice che il flusso attraverso la superficie è pari alla carica interna ($q_{int}$) alla superficie, diviso la costante $\varepsilon_0$:

$$\Phi_{S}(\vec{E}) = \frac{q_{int}}{\varepsilon_0}$$

$q_{int}$ è la carica interna al cilindro. Utilizzando la densità lineare di carica $\lambda$ (carica per unità di lunghezza) si ha:

$$q_{int} = \lambda \cdot h$$

Adesso sostituiamo, eguagliando le due espressioni trovate per il flusso $\Phi_{S}(\vec{E})$:

$$E (2 \pi r h) = \frac{\lambda h}{\varepsilon_0}$$

Da questa ricaviamo il campo elettrico $E$. Possiamo semplificare l'altezza $h$ da entrambi i lati:

$$E (2 \pi r) = \frac{\lambda}{\varepsilon_0}$$

Si ottiene infine:

$$E = \frac{\lambda}{2 \pi \varepsilon_0 r}$$

Il campo elettrico non dipende dalla lunghezza $h$ del cilindro scelto.