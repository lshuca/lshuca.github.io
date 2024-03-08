La scomposizione di un vettore è, in un certo senso, l'operazione inversa della somma: l'obiettivo della scomposizione è infatti quello di trovare due vettori tali che, ognuno con una sua direzione sommati, possano risultare il vettore di partenza.

Dato un vettore $\vec d$ e due rette $s$ e $r$ non parallele, vogliamo ottenere le componenti $\vec d_s$ e $\vec d_r$ tali che:

$$ \vec d = \vec d_s + \vec d_r $$

Graficamente possiamo facilmente notare che le componenti $\vec d_s$ e $\vec d_r$ rappresentano le proiezioni del vettore $\vec d$ rispettivamente sulle rette $s$ e $r$.

Finora non abbiamo, in nessun modo, posto alcuna condizione sull'angolo tra le due rette: è infatti possibile scomporre un vettore lungo due direzioni generiche.

Molto spesso è utile proiettare un vettore su due rette perpendicolari tra loro: l'esempio più evidente è il caso delle rette $x$ e $y$ costituenti il piano cartesiano.

Dato un vettore $\vec a$ che unisce l'origine $O$ e il punto $A$ possiamo facilmente definirne le componenti $\vec a_x$ e $\vec a_y$ come i vettori proiettati rispettivamente su $x$ e $y$.

Possiamo, altrettanto facilmente, ricavare il modulo del vettore $||\vec a||$ sfruttando il teorema di Pitagora (i triangoli $\overset{\triangle}{OAA_x}$ e $\overset{\triangle}{OAA_y}$ sono infatti rettangoli per definizione).

$$ ||\vec a|| = \sqrt{ OA_x ^ 2 + OA_y ^ 2} = \sqrt{ || \vec a_x || ^ 2 + || \vec a_y || ^ 2}$$

Lo sturmento in calce permette di visualizzare immediatamente le componenti $x$ e $y$ di un generico vettore $v$ generato casualmente.

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
        var vector = generateUnitVector();

        // Plot the vectors
        plotVector(context, vector, 'purple', "a");

        // Function to add two vectors
        function yComponent(vector_in) {
            return {
                x: 0,
                y: Math.round((vector.y)*1000)/1000
            };
        }

        yVector = yComponent(vector)
        plotVector(context, yVector, 'blue', "ay");

        // Function to add two vectors
        function xComponent(vector_in) {
            return {
                x: Math.round((vector.x)*1000)/1000,
                y: 0
            };
        }

        xVector = xComponent(vector)
        plotVector(context, xVector, 'red', "ax");



        context.font = "12px Arial";
        context.fillStyle = "purple";
        context.fillText("a = " + vector.x*10 + " i " + -vector.y*10 + " j", 10, 30); 
        
        context.font = "12px Arial";
        context.fillStyle = "red";
        context.fillText("ax = " + vector.x*10 + " i " + 0 + " j", 10, 50); 
        
        context.font = "12px Arial";
        context.fillStyle = "blue";
        context.fillText("ay = " + 0 + " i " + vector.y*10 + " j", 10, 70); 

        context.font = "12px Arial";
        context.fillStyle = "purple";
        context.fillText("a = " + Math.round(((vector.x * 10)**2 + (vector.y * 10)**2)**(1/2)*100)/100 , 10, 350); 
    </script>
</body>
</html>


{{< /rawhtml >}}