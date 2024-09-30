+++
menus = ['cartesiano']
title = 'Punti e segmenti'
date = 2024-09-27T17:56:42+01:00
+++

Ogni punto sul piano cartesiano è determinato dalle sue coordinate, relativamente all'asse delle <em>ascisse</em> $x$ e a quello delle <em>ordinate</em> $y$.

$$ P(x_p, y_p) $$

<h3>Punto medio</h3>

Dati due punti $A$ e $B$, identificati da due set di coordinate $(x_a, y_a)$ e $(x_b, y_b)$, è possibile calcolarne il punto medio $M$, ovver il punto che suddivide il segmento $\overline{AB}$ in due segmenti congruenti $\overline{AM}$ $\overline{MB}$.	
$$ M \left(\dfrac{x_A + x_B}{2}, \: \dfrac{y_A + y_B}{2} \right) $$

<h3>Distanza tra due punti</h3>

Dati due punti $A$ e $B$ è possibile calcolarne la distanza, ovvero la lunghezza del segmento che ha come estremi $A$ e $B$, sfruttando applicando il teorema di Pitagora su sul triangolo avente come cateti le differenze di coordinate sulle ascisse e ordinate dei due punti.

$$ d = \left| \sqrt{(x_A - x_B)^2 + (y_A - y_B)^2} \right| $$

Si può notare come la distanza tra due punti sia indifferentemente calcolata a partire da $A$ o da $B$ e che sarà sempre definita positiva dalla presenza del valore assoluto.	

<p>

{{< rawhtml >}}
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Segmento con Punto Medio</title>
    <style>
        canvas {
            border: 1px solid #000;
            display: block;
            margin: 20px auto;
        }
    </style>
</head>
<body>

    <canvas id="segmentCanvas" width="400" height="400"></canvas>

    <script>

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

        // Funzione per generare un punto casuale sul canvas
        function generateRandomPoint() {
		    return {
		        x: Math.floor(Math.random() * 41) - 20,  // Intervallo [-20, 20]
		        y: Math.floor(Math.random() * 41) - 20   // Intervallo [-20, 20]
		    };
		}

		// Funzione per convertire le coordinate matematiche [-20, 20] in coordinate pixel del canvas [0, 400]
		function mapToCanvasCoordinates(point, canvasWidth, canvasHeight) {
		    return {
		        x: (point.x + 20) * (canvasWidth / 40),  // Mappa da [-20, 20] a [0, canvasWidth]
		        y: canvasHeight - ((point.y + 20) * (canvasHeight / 40))  // Mappa da [-20, 20] a [0, canvasHeight] e inverte y
		    };
		}

        // Funzione per calcolare il punto medio tra due punti
        // Funzione per calcolare il punto medio tra due punti, restituendo una frazione
		function calculateMidPoint(A, B) {
		    return {
		        x: { num: A.x + B.x, den: 2 },  // Punto medio in forma di frazione
		        y: { num: A.y + B.y, den: 2 }
		    };
		}

		// Funzione per mostrare il risultato del punto medio come frazione
		function displayFraction(fraction) {
		    // Se il numeratore è divisibile per il denominatore, restituisci il numero intero
		    if (fraction.num % fraction.den === 0) {
		        return (fraction.num / fraction.den).toString();
		    } else {
		        // Altrimenti, restituisci la frazione
		        return fraction.num + "/" + fraction.den;
		    }
		}


		// Funzione per calcolare la distanza tra due punti e restituire la rappresentazione con radice
		function calculateDistance(A, B) {
		    const deltaX = B.x - A.x;
		    const deltaY = B.y - A.y;

		    // Calcola il quadrato della distanza
		    const distanceSquared = deltaX * deltaX + deltaY * deltaY;

		    // Calcola la radice quadrata approssimata
		    const sqrtDistance = Math.sqrt(distanceSquared);

		    // Se la radice quadrata è un numero intero, restituiscilo come tale
		    if (Number.isInteger(sqrtDistance)) {
		        return sqrtDistance.toString();
		    } else {
		        // Altrimenti, restituisci la rappresentazione con la radice quadrata
		        return "√(" + distanceSquared + ")";
		    }
		}



        // Funzione per disegnare un segmento e i punti sul canvas
        function drawSegment(context, A, B, M, canvasWidth, canvasHeight) {
		    // Mappiamo i punti A, B, M alle coordinate del canvas
		    const ACanvas = mapToCanvasCoordinates(A, canvasWidth, canvasHeight);
		    const BCanvas = mapToCanvasCoordinates(B, canvasWidth, canvasHeight);
		    const MCanvas = mapToCanvasCoordinates(M, canvasWidth, canvasHeight);

		    // Disegna il segmento tra A e B
		    context.beginPath();
		    context.moveTo(ACanvas.x, ACanvas.y);
		    context.lineTo(BCanvas.x, BCanvas.y);
		    context.strokeStyle = 'black';
		    context.lineWidth = 2;
		    context.stroke();

		    // Disegna il punto A
		    context.beginPath();
		    context.arc(ACanvas.x, ACanvas.y, 5, 0, 2 * Math.PI);
		    context.fillStyle = 'red';
		    context.fill();
		    context.fillText("A (" + A.x + ", " + A.y + ")", ACanvas.x + 10, ACanvas.y - 10);

		    // Disegna il punto B
		    context.beginPath();
		    context.arc(BCanvas.x, BCanvas.y, 5, 0, 2 * Math.PI);
		    context.fillStyle = 'blue';
		    context.fill();
		    context.fillText("B (" + B.x + ", " + B.y + ")", BCanvas.x + 10, BCanvas.y - 10);

		    // Disegna il punto medio M
		    context.beginPath();
		    context.arc(MCanvas.x, MCanvas.y, 5, 0, 2 * Math.PI);
		    context.fillStyle = 'green';
		    context.fill();
		    context.fillText("M (" + M.x.toFixed(2) + ", " + M.y.toFixed(2) + ")", MCanvas.x + 10, MCanvas.y + 10);
		}

        // Funzione principale per eseguire il disegno
        function main() {
            var canvas = document.getElementById('segmentCanvas');
            var context = canvas.getContext('2d');

        	drawAxes(context, canvas.width, canvas.height, );

            // Genera due punti casuali A e B
            var A = generateRandomPoint(canvas.width, canvas.height);
            var B = generateRandomPoint(canvas.width, canvas.height);

            // Calcola il punto medio M
            var M = calculateMidPoint(A, B);

            // Calcola la distanza tra A e B
            var distance = calculateDistance(A, B);

            // Ad esempio, per visualizzare il punto medio M nel disegno:
			// context.fillText("M (" + displayFraction(M.x) + ", " + displayFraction(M.y) + ")", M.x.num / M.x.den + 10, M.y.num / M.y.den + 10);

			// Per visualizzare la distanza sotto il canvas
			context.fillText("Distanza tra A e B: " + calculateDistance(A, B), 10, canvas.height - 10);

		    // Disegna il segmento e i punti sul canvas
		    drawSegment(context, A, B, M, canvas.width, canvas.height);

            // Mostra la distanza sotto il canvas
            context.font = "16px Arial";
            context.fillStyle = "black";
            context.fillText("Distanza tra A e B: " + distance.toFixed(2), 10, canvas.height - 10);
        }

        // Esegui la funzione principale quando la pagina viene caricata
        window.onload = main;
    </script>

</body>
</html>

{{< /rawhtml >}}

</p>




[^1]: Sicuramente rettangolo in quanto gli assi $x$ e $y$ sono perpendicolari per definizione.