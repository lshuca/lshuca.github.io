+++
menus = []
title = 'Relazioni tra funzioni goniometriche'
date = 2024-03-20T10:38:42+01:00
+++

<h3>Relazioni tra funzioni</h3>

<h4>Somma dei quadrati</h4>

Il teorema di Pitagora ci permette di scrivere la relazione tra ipotenusa e cateti.

$$ I^2 = c_1^2 + c_2^2 $$

Andando quindi a sostituire le definizioni di $c_1$ e $c_2$ possiamo facilmente ottenere che.

$$ I^2 = (I cos \theta)^2 + (I sin \theta)^2 $$

$$ I^2 = I ^2 (cos \theta)^2 + I^2 (sin \theta)^2 $$

$$ I^2 = I ^2 [(cos \theta)^2 + (sin \theta)^2] $$

$$ 1 = (cos \theta)^2 + (sin \theta)^2 $$

Cioè la somma del quadrato dei valori di seno e coseno, per lo stesso angolo $\theta$ è uguale a 1.

<h4>Angoli complementari</h4>

Due angoli sono detti complementari se, sommati, compongono un angolo retto $\pi/2$.

$$ \theta + \gamma = \dfrac{\pi}{2}$$

Riprendendo le relazioni precedenti, e ricordando che stiamo trattando triangoli rettangoli, possiamo notare che:

$$ c_1 = I cos\theta \leftrightarrow c_1 = I sin \gamma $$

$$ \dfrac{c_1}{I} = cos\theta \leftrightarrow \dfrac{c_1}{I} = I sin \gamma $$

Per la proprietà transitiva [^1]

$$ cos \theta = sin \gamma $$

Ricordando che $\theta$ e $\gamma$ sono complementari.

$$ cos \theta = sin \left( \dfrac{\pi}{2} - \gamma \right) $$

Questo ci permette di utilizzare, con grande disinvoltura, gli angoli più comodi nello studio delle relazioni vettoriali.

[^1]: Se $A = B$ e $B = C$ allora $A = C$.