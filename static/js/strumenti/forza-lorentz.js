// forza di lorentz su un filo: F = I (L x B)
// porting di nnlc/2026/simulazioni/lorentz_widget.py

Strumenti.quando('strumento-forza-lorentz', function (box) {

    const S = Strumenti;
    const L = 0.05; // m
    const COL_I = '#E8A020';
    const COL_B = '#1F4FBF';
    const COL_F = '#2E7D32';

    let I = 5.0, B = 0.3;
    let versoI = 1, versoB = 1;

    const af = S.crea('div', { class: 'affiancati' }, box);
    const vett = S.canvas(af, 320, 300, 'Vettori corrente, campo magnetico e forza');
    const graf = S.canvas(af, 320, 300, 'Modulo della forza al variare della corrente');

    const comandi = S.crea('div', { class: 'comandi' }, box);
    S.cursore(comandi, 'Corrente I', 0.1, 20, 0.1, I, v => S.num(v, 1) + ' A', v => { I = v; disegna(); });
    S.cursore(comandi, 'Campo B', 0.01, 1, 0.01, B, v => S.num(v, 2) + ' T', v => { B = v; disegna(); });
    const pulsanti = S.crea('div', { class: 'pulsanti' }, comandi);
    S.pulsante(pulsanti, 'Inverti corrente', () => { versoI = -versoI; disegna(); });
    S.pulsante(pulsanti, 'Inverti campo', () => { versoB = -versoB; disegna(); });
    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    function disegnaVettori() {
        const g = vett.ctx, W = vett.larg, Hh = vett.alt;
        const ox = W / 2, oy = Hh / 2 + 20;
        g.fillStyle = '#FFFFFF';
        g.fillRect(0, 0, W, Hh);
        g.strokeStyle = '#DDDDDD';
        g.lineWidth = 1;
        g.beginPath(); g.moveTo(0, oy); g.lineTo(W, oy); g.moveTo(ox, 0); g.lineTo(ox, Hh); g.stroke();

        // lunghezze in scala
        const lI = 40 + 90 * I / 20;
        const lB = Math.min(B * 2.2, 1) * 120;
        S.freccia(g, ox, oy, ox + versoI * lI, oy, COL_I, 3, 12);
        S.freccia(g, ox, oy, ox, oy - versoB * lB, COL_B, 3, 12);

        g.font = '14px ' + S.FONT;
        g.fillStyle = COL_I;
        g.textAlign = versoI > 0 ? 'left' : 'right';
        g.fillText('I·L', ox + versoI * (lI + 6), oy - 6);
        g.fillStyle = COL_B;
        g.textAlign = 'left';
        g.fillText('B', ox + 8, oy - versoB * lB + (versoB > 0 ? 4 : 12));

        // F lungo z: uscente o entrante
        const uscente = versoI * versoB > 0;
        g.strokeStyle = COL_F;
        g.fillStyle = COL_F;
        g.lineWidth = 2.5;
        g.beginPath(); g.arc(ox, oy, 14, 0, 2 * Math.PI); g.stroke();
        if (uscente) {
            g.beginPath(); g.arc(ox, oy, 4, 0, 2 * Math.PI); g.fill();
        } else {
            g.beginPath();
            g.moveTo(ox - 9, oy - 9); g.lineTo(ox + 9, oy + 9);
            g.moveTo(ox + 9, oy - 9); g.lineTo(ox - 9, oy + 9);
            g.stroke();
        }
        g.textAlign = 'center';
        g.fillText('F ' + (uscente ? 'uscente dal foglio' : 'entrante nel foglio'), W / 2, 22);
        g.textAlign = 'left';
    }

    function disegnaGrafico() {
        const g = graf.ctx, W = graf.larg - 55, Hh = graf.alt - 50;
        const x0 = 45, y0 = 15;
        const fMax = 20 * L * 1 * 1000; // mN, scala fissa a B = 1 T
        g.fillStyle = '#FFFFFF';
        g.fillRect(0, 0, graf.larg, graf.alt);
        g.strokeStyle = '#000000';
        g.lineWidth = 1;
        g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0, y0 + Hh); g.lineTo(x0 + W, y0 + Hh); g.stroke();

        g.fillStyle = '#575C61';
        g.font = '12px ' + S.FONT;
        for (const i of [0, 5, 10, 15, 20]) g.fillText(i, x0 + i / 20 * W - 4, y0 + Hh + 14);
        g.fillText('I (A)', x0 + W - 22, y0 + Hh + 30);
        g.fillText(S.num(fMax, 0), 8, y0 + 8);
        g.fillText('0', 30, y0 + Hh);
        g.fillText('|F| (mN)', x0 + 6, y0 + 10);

        g.strokeStyle = COL_B;
        g.lineWidth = 2;
        g.beginPath(); g.moveTo(x0, y0 + Hh); g.lineTo(x0 + W, y0 + Hh - 20 * L * B * 1000 / fMax * Hh); g.stroke();

        const f = I * L * B * 1000;
        g.fillStyle = COL_I;
        g.beginPath();
        g.arc(x0 + I / 20 * W, y0 + Hh - f / fMax * Hh, 6, 0, 2 * Math.PI);
        g.fill();
    }

    function disegna() {
        disegnaVettori();
        disegnaGrafico();
        const f = I * L * B;
        lettura.textContent = '|F| = I · L · B = ' + S.num(I, 1) + ' A · ' + S.num(L * 100, 0) + ' cm · '
            + S.num(B, 2) + ' T = ' + S.num(f * 1000, 1) + ' mN';
    }

    disegna();
});
