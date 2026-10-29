// stima di pi col metodo monte carlo
// porting di nnlc/2025/montepi_migliorato.py

Strumenti.quando('strumento-monte-carlo-pi', function (box) {

    const S = Strumenti;
    const COL_DENTRO = '#1F4FBF';
    const COL_FUORI = '#CC0000';
    const COL_CERCHIO = '#2E7D32';
    const BIN = 20, D_MAX = 1.4;

    let totale = 0, dentro = 0;
    let storia = [];
    let istogramma = new Array(BIN).fill(0);
    let inMoto = false;
    let lanciMax = 1000;
    let perFotogramma = 5;

    const LATO = 500;
    const tela = S.canvas(box, LATO, LATO, 'Quadrato con cerchio inscritto e punti estratti');
    const af = S.crea('div', { class: 'affiancati' }, box);
    af.style.marginTop = '.8rem';
    const gPi = S.canvas(af, 320, 200, 'Andamento della stima di pi');
    const gIst = S.canvas(af, 320, 200, 'Istogramma delle distanze dal centro');

    const comandi = S.crea('div', { class: 'comandi' }, box);

    const scelta = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'Lanci' }, scelta);
    const menu = S.crea('select', {}, scelta);
    for (const n of [100, 1000, 10000, 100000]) {
        const o = S.crea('option', { value: n, testo: n.toLocaleString('it-IT') }, menu);
        if (n === lanciMax) o.selected = true;
    }
    menu.addEventListener('change', () => { lanciMax = Number(menu.value); azzera(); });

    const slV = S.cursore(comandi, 'Velocità', 1, 500, 1, perFotogramma, v => v + ' /fot.',
        v => { perFotogramma = v; });

    const pulsanti = S.crea('div', { class: 'pulsanti' }, comandi);
    const btPlay = S.pulsante(pulsanti, 'Avvia', avviaPausa);
    S.pulsante(pulsanti, 'Un lancio', () => { if (totale < lanciMax) lancia(); disegnaGrafici(); aggiornaLettura(); });
    S.pulsante(pulsanti, 'Azzera', azzera);

    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    const px = x => (x + 1) / 2 * LATO;
    const py = y => (1 - y) / 2 * LATO;

    function sfondo() {
        const g = tela.ctx;
        g.fillStyle = '#FFFFFF';
        g.fillRect(0, 0, LATO, LATO);
        g.strokeStyle = '#DDDDDD';
        g.lineWidth = 1;
        for (let t = -1; t <= 1.001; t += 0.2) {
            g.beginPath(); g.moveTo(px(t), 0); g.lineTo(px(t), LATO); g.stroke();
            g.beginPath(); g.moveTo(0, py(t)); g.lineTo(LATO, py(t)); g.stroke();
        }
        cerchio();
    }

    function cerchio() {
        const g = tela.ctx;
        g.strokeStyle = COL_CERCHIO;
        g.lineWidth = 2;
        g.setLineDash([8, 5]);
        g.beginPath();
        g.arc(px(0), py(0), LATO / 2, 0, 2 * Math.PI);
        g.stroke();
        g.setLineDash([]);
    }

    function lancia() {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;
        const d = Math.hypot(x, y);
        totale++;
        if (d <= 1) dentro++;
        istogramma[Math.min(BIN - 1, Math.floor(d / D_MAX * BIN))]++;
        storia.push(4 * dentro / totale);

        const g = tela.ctx;
        g.fillStyle = d <= 1 ? COL_DENTRO : COL_FUORI;
        const r = lanciMax > 10000 ? 1 : (lanciMax > 1000 ? 1.5 : 2.5);
        g.beginPath();
        g.arc(px(x), py(y), r, 0, 2 * Math.PI);
        g.fill();
    }

    function assi(c, titoloX, titoloY) {
        const g = c.ctx;
        g.fillStyle = '#FFFFFF';
        g.fillRect(0, 0, c.larg, c.alt);
        g.strokeStyle = '#000000';
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(40, 10); g.lineTo(40, c.alt - 40); g.lineTo(c.larg - 10, c.alt - 40);
        g.stroke();
        g.fillStyle = '#575C61';
        g.font = '12px ' + S.FONT;
        g.fillText(titoloX, c.larg - 10 - g.measureText(titoloX).width, c.alt - 6);
        g.fillText(titoloY, 44, 20);
    }

    function disegnaGrafici() {
        // stima di pi in funzione dei lanci
        const g = gPi.ctx, W = gPi.larg - 50, H = gPi.alt - 50;
        assi(gPi, 'numero di lanci', 'π stimato');
        const yv = v => 10 + H - (v - 2) / 2 * H; // asse da 2 a 4
        g.fillStyle = '#575C61';
        for (const v of [2, 3, 4]) g.fillText(v, 26, yv(v) + 4);
        g.strokeStyle = COL_FUORI;
        g.setLineDash([5, 4]);
        g.beginPath(); g.moveTo(40, yv(Math.PI)); g.lineTo(40 + W, yv(Math.PI)); g.stroke();
        g.setLineDash([]);
        if (storia.length > 1) {
            g.strokeStyle = COL_CERCHIO;
            g.lineWidth = 1.5;
            g.beginPath();
            const passo = Math.max(1, Math.floor(storia.length / W));
            for (let i = 0; i < storia.length; i += passo) {
                const x = 40 + i / (lanciMax - 1) * W;
                const y = yv(Math.min(4, Math.max(2, storia[i])));
                if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
            }
            g.stroke();
        }

        // istogramma delle distanze
        const h = gIst.ctx, W2 = gIst.larg - 50, H2 = gIst.alt - 50;
        assi(gIst, 'distanza dal centro', 'frequenza');
        const max = Math.max(1, ...istogramma);
        const lb = W2 / BIN;
        h.fillStyle = COL_DENTRO;
        h.globalAlpha = 0.7;
        istogramma.forEach((n, i) => {
            const a = n / max * (H2 - 25);
            h.fillRect(40 + i * lb + 1, 10 + H2 - a, lb - 2, a);
        });
        h.globalAlpha = 1;
        const x1 = 40 + 1 / D_MAX * W2;
        h.strokeStyle = COL_FUORI;
        h.setLineDash([5, 4]);
        h.beginPath(); h.moveTo(x1, 10); h.lineTo(x1, 10 + H2); h.stroke();
        h.setLineDash([]);
        h.fillStyle = COL_FUORI;
        h.fillText('r = 1', x1 + 4, 22);
        h.fillStyle = '#575C61';
        for (const v of [0, 0.5, 1]) h.fillText(S.num(v, 1), 40 + v / D_MAX * W2 - 6, gIst.alt - 24);
    }

    function aggiornaLettura() {
        if (totale === 0) {
            lettura.textContent = 'Premi Avvia per iniziare a lanciare punti nel quadrato.';
            return;
        }
        const stima = 4 * dentro / totale;
        const err = Math.abs(stima - Math.PI);
        lettura.textContent = 'Lanci: ' + totale.toLocaleString('it-IT') + ' su ' + lanciMax.toLocaleString('it-IT')
            + '   dentro: ' + dentro.toLocaleString('it-IT')
            + '\nπ ≈ 4 · ' + dentro + '/' + totale + ' = ' + S.num(stima, 5)
            + '   errore: ' + S.num(err, 5) + ' (' + S.num(err / Math.PI * 100, 2) + '%)';
    }

    function avviaPausa() {
        if (inMoto) { ferma('Avvia'); return; }
        if (totale >= lanciMax) azzera();
        inMoto = true;
        btPlay.textContent = 'Pausa';
        btPlay.classList.add('premuto');
        requestAnimationFrame(ciclo);
    }

    function ferma(testo) {
        inMoto = false;
        btPlay.textContent = testo;
        btPlay.classList.remove('premuto');
    }

    function azzera() {
        ferma('Avvia');
        totale = 0; dentro = 0;
        storia = [];
        istogramma.fill(0);
        sfondo();
        disegnaGrafici();
        aggiornaLettura();
    }

    function ciclo() {
        if (!inMoto) return;
        // all'inizio piano, poi veloce (come l'originale)
        const n = totale < lanciMax / 5 ? Math.max(1, Math.round(perFotogramma / 5)) : perFotogramma;
        for (let i = 0; i < n && totale < lanciMax; i++) lancia();
        cerchio();
        disegnaGrafici();
        aggiornaLettura();
        if (totale >= lanciMax) { ferma('Ricomincia'); return; }
        requestAnimationFrame(ciclo);
    }

    azzera();
});
