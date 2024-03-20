+++
menus = []
title = 'Componenti cartesiane di un vettore'
date = 2024-03-20T10:38:42+01:00
+++

Analizzando le coordinate cartesiane di un vettore possiamo notare che queste compongono un triangolo rettangolo, cioè un triangolo che presenta un angolo retto ($\pi/2$) opposto al lato definito come ipotenusa ($I$) e compreso tra i due cateti ($c_1$ e $c_2$).

![vec_rectangle](/static/img/vec_rectangle.png "Triangolo rettangolo")

Possiamo facilmente identificare l'angolo $\theta$ come l'angolo opposto alla componente $y$ del vettore, il terzo angolo risulterà quindi $\gamma = \dfrac{\pi}{2} - \theta$ per il teorema della somma degli angoli interni di un triangolo[^1].

<h2>Funzioni goniometriche</h2>

Le funzioni goniometriche sono delle funzioni matematiche che ci permettono, tramite la loro definizione, di calcolare le lunghezze dei vari lati e quindi delle componenti del vettore.

<h3>Coseno</h3>

La funzione coseno di un angolo $\theta$ (simbolo $cos\theta$) è definita come il rapporto tra la lunghezza del cateto adiacente all'angolo e la lunghezza dell'ipotenusa.

$$ cos \theta = \dfrac{c_1}{I} \rightarrow c_1 = I cos \theta $$

Analogamente possiamo vedere che.

$$ cos \gamma = \dfrac{c_2}{I} $$

<h3>Seno</h3>

La funzione seno di un angolo $\theta$ (simbolo $sin\theta$) è definita come il rapporto tra la lunghezza del cateto opposto all'angolo e la lunghezza dell'ipotenusa.

$$ sin \theta = \dfrac{c_2}{I} \rightarrow c_2 = I sin \theta$$

Analogamente possiamo vedere che.

$$ sin \gamma = \dfrac{c_1}{I} $$

<h3>Tangente</h3>

La funzione tangente di un angolo $\theta$ (simbolo $tan\theta$) è definita come il rapporto tra la lunghezza del cateto opposto all'angolo e la lunghezza del cateto adiacente.

$$ tan \theta = \dfrac{c_2}{c_1} \rightarrow c_2 = c_1 tan \theta$$

Analogamente possiamo vedere che.

$$ tan \gamma = \dfrac{c_2}{c_1} $$

<h3>Relazioni tra funzioni</h3>

Il teorema di Pitagora ci permette di scrivere una relazione tra ipotenusa e cateti.

$$ I^2 = c_1^2 + c_2^2 $$

Andando quindi a sostituire le definizioni di $c_1$ e $c_2$ possiamo facilmente ottenere che.

$$ I^2 = (I cos \theta)^2 + (I sin \theta)^2 $$

$$ I^2 = I ^2 (cos \theta)^2 + I^2 (sin \theta)^2 $$

$$ I^2 = I ^2 [(cos \theta)^2 + (sin \theta)^2] $$

$$ 1 = (cos \theta)^2 + (sin \theta)^2 $$

Cioè la somma del quadrato dei valori di seno e coseno, per lo stesso angolo $\theta$ è uguale a 1.



[^1]: La somma degli angoli di un triangolo è congruente a un angolo piatto (180°).