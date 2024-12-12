Un vettore è geometricamente rappresentato da un segmento orientato, ovvero un elemento caraterizzato da modulo, direzione e verso.

Il modulo, ovvero la lunghezza del segmento, risulta essere un numero cioè uno scalare. Spesso risulta molto comodo, sfruttando l'operazione di moltiplicazione per uno scalare, ragionare su direzione e verso di un vettore ignorando, momentaneamente, il modulo.

Ricordiamo che un vettore può essere banalmente moltiplicato per uno scalare ricordando che $ \vec v = a \cdot \w $, ovvero il vettore $\vec v$ è un vettore il cui modulo è dato da $a$ volte quello di $\vec w$ mentre direzione e verso sono identici.

Sulla base di questa considerazione può essere utile considerare un elemento il cui modulo è $1$ come indicatore delle sole componenti direzione e verso di un vettore.

Il versore, in inglese chiamato *vector unit* (unità vettoriale), altro non è che un vettore il cui modulo è unitario.

Nel piano cartesiano $(x, y)$ sono definiti due versori, la cui direzione e verso sono rispettivamente lungo l'asse orientato $x$ e $y$, tali da poter scomporre facilmente ogni vettore lungo ascisse e ordinate.

* $\hat i$ è il vettore unitario posto nell'origine degli assi e con direzione e verso lungo l'asse orientato $x$;
* $\hat j$ è il vettore unitario posto nell'origine degli assi e con direzione e verso lungo l'asse orientato $y$.

Per questo motivo possiamo definire un vettore tramite i moduli delle sue componenti moltiplicate per il versore dei deu assi privilegiati $x$ e $y$. 

$$ \vec v = v_x \hat i + v_y \hat j $$

In generale è possibile definire il versore, a partire da un generico vettore, semplicemente dividendo il vettore originale per il suo modulo.

$$ \hat v = \frac{\vec v}{|| \vec v ||}$$

Lo strumento in calce permette di visualizzare il versore $\hat v$ (in rosso) costruito a partire dal vettore $\vec v$ (in blu).

Le componenti del versore $\hat v$ sono troncate alla seconda cifra decimale, per cui il calcolo questo versore è figlio di una approssimazione.

{{< rawhtml >}}

	<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scomposizione di vettore</title>
    <style>
        canvas {
            border: 1px solid #000;
            padding-left: 0;
            padding-right: 0;
            margin-left: auto;
            margin-right: auto;
            display: block;
        }
    </style>
</head>
<body>
    <canvas id="plotCanvas" width="400" height="400"></canvas>

    <script>
        // Function to generate a random vector with modulus 1 starting from the origin
        function generateUnitVector() {
            return {
                x: Math.round(Math.random()*20 - 10)/10,
                y: Math.round(Math.random()*20 - 10)/10
            };
        }

        // Function to plot a vector as an arrow on the canvas
        function plotVector(context, vector, color, name) {
            context.strokeStyle = color;
            context.fillStyle = color;

            // Arrow properties
            const arrowLength = 100;
            const arrowWidth = 15;
            const textSpacing = 1.2;
            const arrowThickness = 0.85;

            // Calculate arrowhead points
            const arrowHead1 = {
                x: arrowLength * vector.x * arrowThickness - arrowWidth * vector.y * arrowThickness,
                y: arrowLength * vector.y * arrowThickness + arrowWidth * vector.x * arrowThickness
            };

            const arrowHead2 = {
                x: arrowLength * vector.x * arrowThickness + arrowWidth * vector.y * arrowThickness,
                y: arrowLength * vector.y * arrowThickness - arrowWidth * vector.x * arrowThickness
            };

            // Draw arrow line
            context.beginPath();
            context.moveTo(canvas.width / 2, canvas.height / 2);
            context.lineTo(canvas.width / 2 + arrowLength * vector.x, canvas.height / 2 + arrowLength * vector.y);
            context.lineWidth = 2;

            context.stroke();

            // Draw arrowhead
            context.beginPath();
            context.moveTo(canvas.width / 2 + arrowLength * vector.x, canvas.height / 2 + arrowLength * vector.y);
            context.lineTo(canvas.width / 2 + arrowHead1.x, canvas.height / 2 + arrowHead1.y);
            context.moveTo(canvas.width / 2 + arrowLength * vector.x, canvas.height / 2 + arrowLength * vector.y);
            context.lineTo(canvas.width / 2 + arrowHead2.x, canvas.height / 2 + arrowHead2.y);
            context.lineWidth = 2;
            context.stroke();

            context.fillText(name, canvas.width / 2 + arrowHead2.x * textSpacing, canvas.height / 2 + arrowHead2.y * textSpacing); 
        }

        // Function to draw x and y axes
        function drawAxes(context, canvasWidth, canvasHeight) {
            // Draw x-axis
            context.beginPath();
            context.moveTo(0, canvasHeight / 2);
            context.lineTo(canvasWidth, canvasHeight / 2);
            context.stroke();

            // Draw y-axis
            context.beginPath();
            context.moveTo(canvasWidth / 2, 0);
            context.lineTo(canvasWidth / 2, canvasHeight);
            context.stroke();
        }

        // Get the canvas and its 2d rendering context
        var canvas = document.getElementById('plotCanvas');
        var context = canvas.getContext('2d');

        // Draw x and y axes
        drawAxes(context, canvas.width, canvas.height, );

        // Generate two random vectors as arrows with modulus 1 starting from the center
        var vector = generateUnitVector();

        // Plot the vectors
        plotVector(context, vector, 'red', "v");

        context.font = "12px Arial";
        context.fillStyle = "red";
        context.fillText("v = " + vector.x*10 + " i " + -vector.y*10 + " j", 10, 30); 

        // Function to add two vectors
        function unitVector(vector_in) {
            var mod = ((vector_in.x ** 2  + vector_in.y **2) * 10)**(1/2)
            return {
                x: Math.round((vector_in.x/mod) * 100) / 100,
                y: Math.round((vector_in.y/mod) * 100) / 100,
                mod: mod
            };
        }




        versor = unitVector(vector)
        plotVector(context, versor, 'blue', "");

        context.font = "12px Arial";
        context.fillStyle = "blue";
        context.fillText("|ver| = " + Math.round(versor.x/0.32*100)/100 + " i " + -Math.round(versor.y/0.32*100)/100 + " j", 10, 50); 
        
    </script>
</body>
</html>


{{< /rawhtml >}}