+++
menus = []
title = 'Introduzione ai vettori'
date = 2024-01-09T15:55:42+01:00
+++

<p>

<!-- {{< rawhtml >}}

	<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Vectors Plot</title>
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

        // Function to add two vectors
        function addVectors(vector1, vector2) {
            return {
                x: Math.round((vector1.x + vector2.x)*1000)/1000,
                y: Math.round((vector1.y + vector2.y)*1000)/1000
            };
        }

        function subtractVectors(vector1, vector2) {
            return {
                x: Math.round((vector1.x - vector2.x)*1000)/1000,
                y: Math.round((vector1.y - vector2.y)*1000)/1000
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


            // Draw horizontal grid lines
            for (let y = 0; y < canvasHeight; y += 10) {
                context.beginPath();
                context.moveTo(0, y);
                context.lineTo(canvasWidth, y);
                context.lineWidth = 0.1;
                context.stroke();
            }

            // Draw vertical grid lines
            for (let x = 0; x < canvasWidth; x += 10) {
                context.beginPath();
                context.moveTo(x, 0);
                context.lineTo(x, canvasHeight);
                context.lineWidth = 0.1;
                context.stroke();
            }
        }

        // Get the canvas and its 2d rendering context
        var canvas = document.getElementById('plotCanvas');
        var context = canvas.getContext('2d');

        // Draw x and y axes
        drawAxes(context, canvas.width, canvas.height, );

        // Generate two random vectors as arrows with modulus 1 starting from the center
        var vector1 = generateUnitVector();
        var vector2 = generateUnitVector();

        // Calculate the sum and sub vector
        var sumVector = addVectors(vector1, vector2);

        // Plot the vectors
        plotVector(context, vector1, 'red', "v1");
        plotVector(context, vector2, 'blue', "v2");
        plotVector(context, sumVector, 'green', "w");

        context.font = "12px Arial";
        context.fillStyle = "red";
        context.fillText("v1 = " + vector1.x*10 + " i " + -vector1.y*10 + " j", 10, 30); 
        
        context.fillStyle = "blue";
        context.fillText("v2 = " + vector2.x*10 + " i " + -vector2.y*10 + " j", 10, 50); 
        
        context.fillStyle = "green";
        context.fillText("w = " + sumVector.x*10 + " i " + -sumVector.y*10 + " j", 10, 390); 
    </script>
</body>
</html>


{{< /rawhtml >}} -->

</p>

I vettori rappresentano uno degli strumenti matematici fondamentali, vengono infatti utilizzati per descrivere spostamenti, forze e altre grandezze fisiche dove *un numero* non è sufficiente.

In matematica e fisica, un _vettore_ è un concetto che rappresenta una quantità caratterizzata non solo dalla sua _magnitudine_ (o grandezza), ma anche dalla sua _direzione_ e _verso_. In altre parole, un vettore è un oggetto matematico che ha un **modulo** (o lunghezza), una **direzione** e un **verso** specifici. 

Possiamo quindi facilmente identificare un vettore sul foglio come un segmento orientato, ovvero una linea che unisce due punti identificandone uno come primo (punto di applicazione).

![vettore_def](/static/img/vector_def.jpg "Definizione grafica di vettore")

Dal grafico si possono identificare facilmente tutte e tre le proprietà del vettore:

1) **modulo**: $|| \vec v || = v$, il valore (scalare) che rappresenta la lunghezza del vettore.
2) **direzione**: lungo la retta $r$
3) **verso**: uscente dal punto di applicazione

I vettori, e quindi anche le grandezze vettoriali, possono essere riconosciute immediatamente anche senza l'ausilio di un supporto grafico, vengono infatti scritti in corsivo o tramite l'ausilio di una piccola freccia sopra il simbolo.

$$ \vec v \neq v \, v \neq \text{v}$$

È importante notare che un vettore non è equivalente ad un segmento generico, ma il vettore che unisce i punti $A$ a $B$ è opposto al vettore che unisce $B$ ad $A$.

$$ \vec {AB} = - \vec {BA} \rightarrow \vec {AB} + \vec {BA} = \vec {0} $$

Con $\vec 0$ abbiamo potuto introdurre il concetto di vettore nullo: uno spostamento totale nullo, una forza con modulo 0 ecc...

![vettore_null](/static/img/vec_null.gif#center)

Per maggiori info sulle operazioni con i vettori fare riferimento a:

* [Somma di vettori]({{< ref "/pages/pyphysics/gen_vec_sum" >}}  "Somma di vettori")
* [Differenza di vettori]({{< ref "/pages/pyphysics/gen_vec_sub" >}}  "Differenza di vettori")

Esploreremo le operazioni fondamentali come la somma e la moltiplicazione per uno scalare, apprendendo come applicare tali concetti sia in ambito geometrico che algebrico. Attraverso l'analisi dei vettori, svilupperemo una nuova prospettiva matematica che ci accompagnerà nella risoluzione di problemi complessi e nella comprensione più approfondita della natura delle grandezze fisiche che ci circondano.

