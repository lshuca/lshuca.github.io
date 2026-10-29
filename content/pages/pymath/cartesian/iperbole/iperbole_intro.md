+++
title = "Introduzione all'iperbole"
date = 2026-03-10T10:00:00+01:00
+++

Un'iperbole è definita come il luogo geometrico dei punti del piano per cui il **valore assoluto della differenza delle distanze da due punti fissi** detti <em>fuochi</em> è costante.

Indicando i due fuochi con $F_1$ e $F_2$ e il punto generico con $P$:

$$\left| d(P, F_1) - d(P, F_2) \right| = 2a$$

dove $2a$ è la costante (con $a > 0$).

<h2>Equazione dell'iperbole centrata nell'origine</h2>

Con fuochi sull'asse $x$ in $F_1(-c, 0)$ e $F_2(c, 0)$:

$$\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$$

Con fuochi sull'asse $y$:

$$\dfrac{y^2}{a^2} - \dfrac{x^2}{b^2} = 1$$

La relazione tra i parametri è:

$$c^2 = a^2 + b^2$$

Si noti la differenza rispetto all'ellisse: qui $c > a$ sempre.

<h2>Elementi dell'iperbole</h2>

<h3>Vertici</h3>

L'iperbole (con fuochi su $x$) interseca l'asse $x$ nei vertici $A_1(-a, 0)$ e $A_2(a, 0)$. Non interseca l'asse $y$.

<h3>Fuochi</h3>

Si trovano in $F_1(-c, 0)$ e $F_2(c, 0)$ con $c = \sqrt{a^2 + b^2}$.

<h3>Asintoti</h3>

L'iperbole si avvicina indefinitamente a due rette passanti per l'origine dette **asintoti**:

$$y = \pm \dfrac{b}{a} x$$

Gli asintoti non fanno parte della curva ma la guidano per valori grandi di $|x|$.

<h3>Eccentricità</h3>

$$e = \dfrac{c}{a} \qquad e > 1$$

L'eccentricità è sempre maggiore di 1, il che distingue l'iperbole dall'ellisse ($e < 1$) e dalla parabola ($e = 1$).

<h2>Iperbole equilatera</h2>

Il caso $a = b$ si chiama **iperbole equilatera**. Gli asintoti diventano $y = \pm x$, cioè le bisettrici degli assi. L'eccentricità vale $e = \sqrt{2}$.

Ruotando di 45° l'iperbole equilatera si ottiene la forma:

$$xy = k \qquad (k \ne 0)$$

detta iperbole equilatera riferita agli asintoti, molto comune nello studio della proporzionalità inversa.

<h2>Esempio</h2>

Data l'iperbole $\dfrac{x^2}{16} - \dfrac{y^2}{9} = 1$, determinare tutti gli elementi.

$a^2 = 16 \Rightarrow a = 4$, $\quad b^2 = 9 \Rightarrow b = 3$.

$$c = \sqrt{16 + 9} = \sqrt{25} = 5$$

Fuochi: $F_1(-5, 0)$ e $F_2(5, 0)$.

Vertici: $(\pm 4, 0)$.

Asintoti: $y = \pm \dfrac{3}{4} x$.

Eccentricità: $e = \dfrac{5}{4} = 1{,}25$.

Con i cursori si possono cambiare $a$ e $b$: gli asintoti (tratteggiati) hanno sempre coefficiente angolare $\pm \dfrac{b}{a}$.

{{< grafico >}}
{
  "x": [-10, 10], "y": [-7, 7],
  "descrizione": "Iperbole con asintoti e fuochi",
  "cursori": [
    {"nome": "a", "min": 1, "max": 6, "passo": 0.5, "val": 4},
    {"nome": "b", "min": 1, "max": 6, "passo": 0.5, "val": 3}
  ],
  "curve": [
    {"x": "a * cosh(t)", "y": "b * sinh(t)", "t": [-3, 3], "colore": "#AA0000"},
    {"x": "-a * cosh(t)", "y": "b * sinh(t)", "t": [-3, 3], "colore": "#AA0000"},
    {"y": "b / a * x", "colore": "#888888", "tratteggio": true, "spessore": 1},
    {"y": "-b / a * x", "colore": "#888888", "tratteggio": true, "spessore": 1}
  ],
  "punti": [
    {"x": "sqrt(a*a + b*b)", "y": "0", "etichetta": "F₁", "colore": "#1F4FBF"},
    {"x": "-sqrt(a*a + b*b)", "y": "0", "etichetta": "F₂", "colore": "#1F4FBF"},
    {"x": "a", "y": "0"}, {"x": "-a", "y": "0"}
  ],
  "testi": ["x²/{a*a} − y²/{b*b} = 1", "asintoti y = ± {b/a} x   c = {sqrt(a*a + b*b)}   e = {sqrt(a*a + b*b) / a}"]
}
{{< /grafico >}}

[Introduzione all'ellisse]({{< ref "/pages/pymath/cartesian/ellisse/ellisse_intro" >}} "Introduzione all'ellisse")

[Introduzione alla parabola]({{< ref "/pages/pymath/cartesian/parabola/par_intro" >}} "Introduzione alla parabola")
