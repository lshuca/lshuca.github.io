+++
title = 'Moto parabolico'
description = 'Lancio di un proiettile: traiettoria, gittata, altezza massima, componenti della velocità.'
gruppo = 'didattici'
weight = 40
+++

Un corpo lanciato con velocità $\vec v_0$ inclinata di un angolo $\theta$ rispetto all'orizzontale si muove, trascurando l'aria, di **moto rettilineo uniforme** in orizzontale e di **moto uniformemente accelerato** in verticale:

$$ x(t) = v_0 \cos\theta \; t \qquad y(t) = v_0 \sin\theta \; t - \dfrac{1}{2} g t^2 $$

{{< strumento "moto-parabolico" >}}

Durante il volo il vettore velocità (in blu) è la somma delle due componenti (in verde): quella orizzontale resta sempre uguale, quella verticale diminuisce, si annulla nel punto più alto e poi cambia verso.

Ricavando $t$ dalla prima equazione e sostituendo nella seconda si ottiene la traiettoria, una parabola, e da questa:

$$ t_{volo} = \dfrac{2 v_0 \sin\theta}{g} \qquad h_{max} = \dfrac{v_0^2 \sin^2\theta}{2g} \qquad G = \dfrac{v_0^2 \sin 2\theta}{g} $$

<h2>Da provare</h2>

1. A parità di velocità, per quale angolo la gittata è massima? Usa *Tieni traiettoria* per confrontare più lanci.
2. Confronta i lanci a $30°$ e a $60°$: cosa hanno in comune? Perché?
3. Lancia con lo stesso angolo e la stessa velocità sulla Terra e sulla Luna: di quanto cambiano gittata e altezza massima?
4. Nel punto più alto la velocità è nulla?
