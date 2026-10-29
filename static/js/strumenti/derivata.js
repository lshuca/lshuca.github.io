// derivata: dalla secante alla tangente

Strumenti.quando('strumento-derivata', function (box) {

    const S = Strumenti;
    const FUNZIONI = {
        'x²': { f: x => x * x, d: x => 2 * x, x: [-4, 4], y: [-2, 10] },
        'x³ − 3x': { f: x => x * x * x - 3 * x, d: x => 3 * x * x - 3, x: [-3, 3], y: [-5, 5] },
        'sin x': { f: Math.sin, d: Math.cos, x: [-6.5, 6.5], y: [-2.5, 2.5] },
        'eˣ': { f: Math.exp, d: Math.exp, x: [-3, 3], y: [-1, 8] },
        'ln x': { f: Math.log, d: x => 1 / x, x: [-0.5, 6], y: [-4, 3], min: 0.05 },
        '1/x': { f: x => 1 / x, d: x => -1 / (x * x), x: [-5, 5], y: [-5, 5], escludi: 0 },
        '√x': { f: Math.sqrt, d: x => 1 / (2 * Math.sqrt(x)), x: [-0.5, 8], y: [-1, 4], min: 0.02 }
    };
    const COL_F = '#000000';
    const COL_S = '#1F4FBF';
    const COL_T = '#AA0000';
    const COL_D = '#2E7D32';

    let nome = 'x²', x0 = 1, h = 1.5, mostraD = false;

    const LARG = 500, ALT = 380;
    const tela = S.canvas(box, LARG, ALT, 'Grafico della funzione con retta secante e retta tangente');
    const g = tela.ctx;

    const comandi = S.crea('div', { class: 'comandi' }, box);
    const scelta = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'f(x) =' }, scelta);
    const menu = S.crea('select', {}, scelta);
    for (const k in FUNZIONI) S.crea('option', { value: k, testo: k }, menu);
    const slX = S.cursore(comandi, 'Punto x₀', -3, 3, 0.05, x0, v => S.num(v, 2), v => { x0 = v; disegna(); });
    S.cursore(comandi, 'Incremento h', -2, 2, 0.01, h, v => S.num(v, 2), v => { h = v; disegna(); });
    const casella = S.crea('label', {}, comandi);
    const cb = S.crea('input', { type: 'checkbox' }, casella);
    S.crea('span', { testo: 'mostra il grafico di f′(x)' }, casella);
    cb.addEventListener('change', () => { mostraD = cb.checked; disegna(); });
    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    menu.addEventListener('change', () => {
        nome = menu.value;
        const F = FUNZIONI[nome];
        const lo = F.min !== undefined ? F.min : F.x[0] + 0.5, hi = F.x[1] - 0.5;
        slX.el.min = lo; slX.el.max = hi;
        x0 = Math.min(Math.max(x0, lo), hi);
        if (F.escludi !== undefined && Math.abs(x0 - F.escludi) < 0.1) x0 = 1;
        slX.imposta(x0);
        disegna();
    });

    function disegna() {
        const F = FUNZIONI[nome];
        const [a, b] = F.x, [c, d] = F.y;
        const px = x => (x - a) / (b - a) * LARG, py = y => (d - y) / (d - c) * ALT;

        g.fillStyle = '#FFFFFF';
        g.fillRect(0, 0, LARG, ALT);
        g.strokeStyle = '#E4E4E4';
        g.lineWidth = 1;
        for (let x = Math.ceil(a); x <= b; x++) { g.beginPath(); g.moveTo(px(x), 0); g.lineTo(px(x), ALT); g.stroke(); }
        for (let y = Math.ceil(c); y <= d; y++) { g.beginPath(); g.moveTo(0, py(y)); g.lineTo(LARG, py(y)); g.stroke(); }
        g.strokeStyle = '#555555';
        g.beginPath(); g.moveTo(px(0), 0); g.lineTo(px(0), ALT); g.moveTo(0, py(0)); g.lineTo(LARG, py(0)); g.stroke();

        curva(F.f, COL_F, 2.2);
        if (mostraD) curva(F.d, COL_D, 1.8, true);

        const y0 = F.f(x0), m = F.d(x0);
        const x1 = x0 + h, y1 = F.f(x1);
        const ok1 = Number.isFinite(y1) && Math.abs(h) > 1e-9 && !(F.escludi !== undefined && (x0 - F.escludi) * (x1 - F.escludi) <= 0);

        // tangente
        retta(x0, y0, m, COL_T, 2);
        // secante
        if (ok1) {
            retta(x0, y0, (y1 - y0) / h, COL_S, 1.5, true);
            punto(x1, y1, COL_S, 'Q');
            g.strokeStyle = '#999999';
            g.setLineDash([3, 3]);
            g.beginPath(); g.moveTo(px(x0), py(y0)); g.lineTo(px(x1), py(y0)); g.lineTo(px(x1), py(y1)); g.stroke();
            g.setLineDash([]);
            g.fillStyle = '#575C61';
            g.font = '12px ' + S.FONT;
            g.fillText('h', (px(x0) + px(x1)) / 2 - 3, py(y0) + (y1 > y0 ? 14 : -5));
            g.fillText('Δy', px(x1) + 4, (py(y0) + py(y1)) / 2);
        }
        punto(x0, y0, COL_T, 'P');
        if (mostraD) punto(x0, m, COL_D, '');

        function curva(f, col, sp, tratt) {
            g.strokeStyle = col;
            g.lineWidth = sp;
            g.setLineDash(tratt ? [6, 4] : []);
            g.beginPath();
            let su = false, yp = null;
            for (let i = 0; i <= 600; i++) {
                const x = a + (b - a) * i / 600;
                const y = f(x);
                const ok = Number.isFinite(y) && !(F.escludi !== undefined && yp !== null && Math.sign(y) !== Math.sign(yp) && Math.abs(y - yp) > 5);
                if (ok && su) g.lineTo(px(x), py(y)); else if (ok) g.moveTo(px(x), py(y));
                su = ok; yp = y;
            }
            g.stroke();
            g.setLineDash([]);
        }

        function retta(x, y, m, col, sp, tratt) {
            g.strokeStyle = col;
            g.lineWidth = sp;
            g.setLineDash(tratt ? [6, 4] : []);
            g.beginPath();
            g.moveTo(px(a), py(y + m * (a - x)));
            g.lineTo(px(b), py(y + m * (b - x)));
            g.stroke();
            g.setLineDash([]);
        }

        function punto(x, y, col, et) {
            g.fillStyle = col;
            g.beginPath(); g.arc(px(x), py(y), 5, 0, 2 * Math.PI); g.fill();
            if (et) { g.font = '13px ' + S.FONT; g.fillText(et, px(x) - 14, py(y) - 8); }
        }

        const rapp = ok1 ? (y1 - y0) / h : NaN;
        lettura.textContent = 'f(x) = ' + nome + '   P(' + S.num(x0, 2) + '; ' + S.num(y0, 3) + ')'
            + '\nrapporto incrementale [f(x₀ + h) − f(x₀)] / h = ' + (Number.isFinite(rapp) ? S.num(rapp, 4) : '-')
            + '\nderivata f′(x₀) = ' + S.num(m, 4) + '   tangente: y = ' + S.num(m, 3) + ' (x ' + (x0 < 0 ? '+ ' : '− ') + S.num(Math.abs(x0), 2) + ') ' + (y0 < 0 ? '− ' : '+ ') + S.num(Math.abs(y0), 3);
    }

    disegna();
});
