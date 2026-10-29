// figure di chladni su lastra quadrata
// porting di nnlc/2026/simulazioni/chladni_math_core.py

Strumenti.quando('strumento-chladni', function (box) {

    const S = Strumenti;

    // lastra di acciaio
    const E_Y = 2.0e11;   // Pa
    const RHO = 7800;     // kg/m^3
    const H = 0.001;      // m
    const L = 0.30;       // m

    let n = 2, m = 3;
    let vista = 'sabbia';

    const LATO = 400;
    const tela = S.canvas(box, LATO, LATO, 'Figura di Chladni sulla lastra quadrata');
    const ris = tela.el.width;
    const img = tela.ctx.createImageData(ris, ris);

    const comandi = S.crea('div', { class: 'comandi' }, box);
    S.cursore(comandi, 'n', 1, 8, 1, n, v => v, v => { n = v; disegna(); });
    S.cursore(comandi, 'm', 1, 8, 1, m, v => v, v => { m = v; disegna(); });

    const scelta = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'Vista' }, scelta);
    const menu = S.crea('select', {}, scelta);
    S.crea('option', { value: 'sabbia', testo: 'sabbia sulla lastra' }, menu);
    S.crea('option', { value: 'ampiezza', testo: 'ampiezza di vibrazione' }, menu);
    menu.addEventListener('change', () => { vista = menu.value; disegna(); });

    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    function frequenza(n, m) {
        return Math.PI * H / (2 * Math.sqrt(12) * L * L) * Math.sqrt(E_Y / RHO) * (n * n + m * m);
    }

    function disegna() {
        // Z = cos(nπx)cos(mπy) - cos(mπx)cos(nπy)
        const cn = new Float32Array(ris), cm = new Float32Array(ris);
        for (let i = 0; i < ris; i++) {
            const t = i / (ris - 1);
            cn[i] = Math.cos(n * Math.PI * t);
            cm[i] = Math.cos(m * Math.PI * t);
        }
        const d = img.data;
        for (let j = 0; j < ris; j++) {
            const r = ris - 1 - j; // y verso l'alto
            for (let i = 0; i < ris; i++) {
                const z = cn[i] * cm[r] - cm[i] * cn[r];
                const a = Math.min(1, Math.abs(z) / 2);
                let R, G, B;
                if (vista === 'sabbia') {
                    // la sabbia si ferma dove la lastra non vibra
                    const s = Math.exp(-Math.pow(a / 0.035, 2));
                    R = 205 - 150 * s; G = 205 - 165 * s; B = 210 - 190 * s;
                } else {
                    R = 255 - 85 * a; G = 255 - 255 * a; B = 255 - 255 * a;
                    if (a < 0.012) { R = G = B = 0; }
                }
                const k = 4 * (j * ris + i);
                d[k] = R; d[k + 1] = G; d[k + 2] = B; d[k + 3] = 255;
            }
        }
        tela.ctx.putImageData(img, 0, 0);

        if (n === m) {
            lettura.textContent = 'Con n = m la formula dà Z = 0 ovunque: nessuna figura.\nScegli due numeri diversi.';
            return;
        }
        lettura.textContent = 'Modo (n, m) = (' + n + ', ' + m + ')'
            + '   f ≈ ' + Math.round(frequenza(n, m)).toLocaleString('it-IT') + ' Hz'
            + '\nlastra di acciaio, lato ' + L * 100 + ' cm, spessore ' + H * 1000 + ' mm';
    }

    disegna();
});
