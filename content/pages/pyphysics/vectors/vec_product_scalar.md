+++
menus = []
title = 'Prodotto tra vettori'
date = 2024-12-03T12:55:42+01:00
+++

### Prodotto scalare
Il prodotto scalare tra due vettori $\vec{v}$ e $\vec{w}$ è definito come:

$$\vec{v} \cdot \vec{w} = v_x w_x + v_y w_y \quad \text{oppure} \quad \vec{v} \cdot \vec{w} = |\vec{v}| |\vec{w}| \cos(\alpha) $$

#### Proprietà principali:
1. **Simmetria**: $\vec{v} \cdot \vec{w} = \vec{w} \cdot \vec{v}$.
2. **Risultato scalare**: il prodotto scalare restituisce un numero puro (non un vettore).
3. **Significato geometrico**: rappresenta la lunghezza della proiezione di $\vec{v}$ lungo $\vec{w}$, moltiplicata per la lunghezza di $\vec{w}$.

#### **Casi particolari**:
1. **Vettori paralleli**:
   Se $\vec{v}$ e $\vec{w}$ sono paralleli (angolo $\alpha = 0^\circ$ o $\alpha = 180^\circ$):
   - Per $\alpha = 0^\circ$ ($v$ e $w$ hanno la stessa direzione):
     $$      \cos(0^\circ ) = 1 \quad \implies \quad \vec{v} \cdot \vec{w} = |\vec{v}| |\vec{w}|$$
   - Per $\alpha = 180^\circ$ ($v$ e $w$ hanno direzioni opposte):
     $$      \cos(180^\circ ) = -1 \quad \implies \quad \vec{v} \cdot \vec{w} = -|\vec{v}| |\vec{w}|$$

   Quindi, il prodotto scalare fornisce un valore massimo (positivo o negativo) quando i vettori sono paralleli.

2. **Vettori ortogonali**:
   Se $\vec{v}$ e $\vec{w}$ sono ortogonali (angolo $\alpha = 90^\circ$):
   - $\cos(90^\circ) = 0$, quindi:
     $$      \vec{v} \cdot \vec{w} = 0$$
   Questo significa che il prodotto scalare tra vettori perpendicolari è sempre nullo.

3. **Angolo tra due vettori**:
   Note le relazioni per cui $ \vec{v} \cdot \vec{w} = v_x w_x + v_y w_y = |\vec{v}| |\vec{w}| \cos(\alpha)$ possiamo facilmente invertire la relazione per ottenere il $cos(\alpha)$:

   $$ cos(\alpha) = \dfrac{v_x w_x + v_y w_y}{|\vec{v}| |\vec{w}|}$$




   ---

### Prodotto vettoriale
Il prodotto vettoriale tra due vettori $\vec{v}$ e $\vec{w}$ è definito come:

$$ \vec{u} = \vec{v} \times \vec{w} $$

Dove il risultato è un vettore $\vec{u}$ ortogonale sia a $\vec{v}$ che a $\vec{w}$. Il modulo è dato da:

$$ |\vec{u}| = |\vec{v}| |\vec{w}| \sin(\alpha )$$

#### Proprietà principali:
1. **Antisimmetria**: $\vec{v} \times \vec{w} = -(\vec{w} \times \vec{v})$.
2. **Ortogonalità del risultato**: il vettore risultante $\vec{u}$ è perpendicolare al piano definito da $\vec{v}$ e $\vec{w}$.
3. **Modulo nullo per vettori paralleli**.

#### **Casi particolari**:
1. **Vettori paralleli**:
   Se $\vec{v}$ e $\vec{w}$ sono paralleli ($\alpha = 0^\circ$ o $\alpha = 180^\circ$):
   - $\sin(0^\circ) = \sin(180^\circ) = 0$, quindi:
     $$      |\vec{v} \times \vec{w}| = 0$$
   Il prodotto vettoriale è nullo quando i vettori sono paralleli (non c'è "area" tra di essi).

2. **Vettori ortogonali**:
   Se $\vec{v}$ e $\vec{w}$ sono ortogonali ($\alpha = 90^\circ$):
   - $\sin(90^\circ) = 1$, quindi:
     $$      |\vec{v} \times \vec{w}| = |\vec{v}| |\vec{w}|$$
   In questo caso, il modulo del prodotto vettoriale è massimo e rappresenta l'area del parallelogramma definito dai due vettori.

---

### Calcolo del prodotto vettoriale con il determinante

Per calcolare il prodotto vettoriale $\vec{v} \times \vec{w}$ di due vettori $\vec{v}$ e $\vec{w}$ nello spazio tridimensionale ($ \mathbb{R}^3 $), possiamo utilizzare il **determinante di una matrice**. Questo metodo è pratico e diretto. Ecco come fare passo passo:

#### Metodo:
1. **Scrivere la matrice**:
   Organizza la matrice $3 \times 3$ come segue:
   - La **prima riga** contiene i versori $\hat{i}$, $\hat{j}$, $\hat{k}$ (che rappresentano le direzioni dei tre assi $x$, $y$, $z$).
   - La **seconda riga** contiene le componenti del primo vettore $\vec{v} = (v_x, v_y, v_z)$.
   - La **terza riga** contiene le componenti del secondo vettore $\vec{w} = (w_x, w_y, w_z)$.

   Quindi:
   
   | $\hat{i}$ | $\hat{j}$ | $\hat{k}$ |
    |-----------|-----------|-----------|
    | $v_x$     | $v_y$     | $v_z$     |
    | $w_x$     | $w_y$     | $w_z$     |

2. **Calcolare il determinante**:
   Il determinante si espande lungo la prima riga (quella dei versori). Procedi come segue:
   - Moltiplica ogni versore per il determinante della **sottomatrice** che rimane eliminando la riga e la colonna del versore stesso.
   - Usa i segni alternati $+,-,+$ per i versori $\hat{i}$, $\hat{j}$, $\hat{k}$.

   Scrivendo il calcolo espanso:

   $$ \vec v \times \vec w = \hat i A_{1,1} + \hat j A_{2,1} + \hat k A_{3,1} $$

3. **Calcolare i minori**:
   Ogni **sottomatrice** è una matrice $2 \times 2$, e il suo determinante si calcola con la formula:
   
    | $a$     | $b$     |
     |---|---|
     | $c$     | $d$     |

     $$ ad - bc $$

   Applica questa formula per ciascun minore:
   - Per $\hat{i}$: usa la sottomatrice $((v_y, v_z), (w_y, w_z))$.
   - Per $\hat{j}$: usa la sottomatrice $((v_x, v_z), (w_x, w_z))$.
   - Per $\hat{k}$: usa la sottomatrice $((v_x, v_y), (w_x, w_y))$.

4. **Comporre il risultato**:
   Sostituisci i determinanti calcolati nei rispettivi termini per ottenere il vettore risultante:
   $$
   \vec{v} \times \vec{w} =
   \left[(v_y w_z - v_z w_y)\right] \hat{i} -
   \left[(v_x w_z - v_z w_x)\right] \hat{j} +
   \left[(v_x w_y - v_y w_x)\right] \hat{k}
   $$

Questi casi particolari evidenziano i legami geometrici fondamentali tra i due tipi di prodotto.