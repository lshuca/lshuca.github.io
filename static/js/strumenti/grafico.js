// grafici interattivi nel piano cartesiano, configurati dalla pagina
// uso: {{< grafico >}} { ...json... } {{< /grafico >}}

(function () {

    const S = Strumenti;
    const COLORI = ['#AA0000', '#1F4FBF', '#2E7D32', '#E8A020', '#8A2BE2'];

    // espressione -> funzione dei parametri (x, t e cursori)
    function compila(expr, nomi) {
        return new Function(...nomi, 'const {abs, sqrt, sin, cos, tan, asin, acos, atan, exp, log, log10, log2, sinh, cosh, tanh, sign, floor, ceil, min, max, pow, PI, E} = Math;'
            + 'const ln = log; const pi = PI; const e = E;'
            + 'const n = v => String(Math.round(v * 100) / 100).replace(".", ",");'
            + 'return (' + expr + ');');
    }

    // passo "tondo" per la griglia
    function passoGriglia(ampiezza) {
        const grezzo = ampiezza / 10;
        const p = Math.pow(10, Math.floor(Math.log10(grezzo)));
        for (const k of [1, 2, 5, 10]) if (k * p >= grezzo) return k * p;
        return 10 * p;
    }

    function avvia(box) {
        const conf = JSON.parse(box.querySelector('script[type="application/json"]').textContent);
        box.textContent = '';

        const [x0, x1] = conf.x || [-6, 6];
        const [y0, y1] = conf.y || [-6, 6];
        const LARG = 500;
        const ALT = conf.alt || Math.round(LARG * (y1 - y0) / (x1 - x0));
        const tela = S.canvas(box, LARG, ALT, conf.descrizione || 'Grafico');
        const g = tela.ctx;

        const px = x => (x - x0) / (x1 - x0) * LARG;
        const py = y => (y1 - y) / (y1 - y0) * ALT;

        // cursori
        const val = {};
        const nomi = ['x', 't'];
        (conf.cursori || []).forEach(c => { val[c.nome] = c.val; nomi.push(c.nome); });
        const ev = expr => compila(String(expr), nomi);
        const leggi = (f, x, t) => f(x, t, ...(conf.cursori || []).map(c => val[c.nome]));

        const curve = (conf.curve || []).map((c, i) => Object.assign({}, c, {
            fy: c.y !== undefined && c.x === undefined ? ev(c.y) : null,
            fx: c.x !== undefined && c.y === undefined ? ev(c.x) : null,
            px: c.x !== undefined && c.y !== undefined ? ev(c.x) : null,
            py: c.x !== undefined && c.y !== undefined ? ev(c.y) : null,
            colore: c.colore || COLORI[i % COLORI.length]
        }));
        const punti = (conf.punti || []).map(p => Object.assign({}, p, { fx: ev(p.x), fy: ev(p.y) }));
        const testi = (conf.testi || []).map(t => ({ modello: t, parti: [] }));

        function assi() {
            g.fillStyle = '#FFFFFF';
            g.fillRect(0, 0, LARG, ALT);
            const sx = passoGriglia(x1 - x0), sy = passoGriglia(y1 - y0);
            g.lineWidth = 1;
            g.strokeStyle = '#E4E4E4';
            for (let x = Math.ceil(x0 / sx) * sx; x <= x1; x += sx) { g.beginPath(); g.moveTo(px(x), 0); g.lineTo(px(x), ALT); g.stroke(); }
            for (let y = Math.ceil(y0 / sy) * sy; y <= y1; y += sy) { g.beginPath(); g.moveTo(0, py(y)); g.lineTo(LARG, py(y)); g.stroke(); }
            g.strokeStyle = '#555555';
            if (x0 < 0 && x1 > 0) { g.beginPath(); g.moveTo(px(0), 0); g.lineTo(px(0), ALT); g.stroke(); }
            if (y0 < 0 && y1 > 0) { g.beginPath(); g.moveTo(0, py(0)); g.lineTo(LARG, py(0)); g.stroke(); }
            g.fillStyle = '#575C61';
            g.font = '12px ' + S.FONT;
            const ax = Math.min(Math.max(py(0), 12), ALT - 4);
            const ay = Math.min(Math.max(px(0), 4), LARG - 24);
            for (let x = Math.ceil(x0 / sx) * sx; x <= x1; x += sx) {
                if (Math.abs(x) < sx / 2) continue;
                g.fillText(S.num(x, sx < 1 ? 1 : 0), px(x) + 2, ax + 13 > ALT ? ax - 3 : ax + 13);
            }
            for (let y = Math.ceil(y0 / sy) * sy; y <= y1; y += sy) {
                if (Math.abs(y) < sy / 2) continue;
                g.fillText(S.num(y, sy < 1 ? 1 : 0), ay + 3, py(y) - 2);
            }
            g.fillText('x', LARG - 10, ax - 4);
            g.fillText('y', ay + 6, 12);
        }

        function traccia(c) {
            g.strokeStyle = c.colore;
            g.lineWidth = c.spessore || 2;
            g.setLineDash(c.tratteggio ? [6, 5] : []);
            g.beginPath();
            let su = false;
            if (c.fy) {
                // y = f(x), interrotta dove salta o non esiste
                const n = 800;
                let yp = null;
                for (let i = 0; i <= n; i++) {
                    const x = x0 + (x1 - x0) * i / n;
                    const y = leggi(c.fy, x, 0);
                    const ok = Number.isFinite(y) && Math.abs(y) < 1e6;
                    if (ok && su && yp !== null && Math.abs(py(y) - py(yp)) < ALT * 2) g.lineTo(px(x), py(y));
                    else if (ok) g.moveTo(px(x), py(y));
                    su = ok; yp = ok ? y : null;
                }
            } else if (c.fx) {
                // retta verticale x = k
                const x = leggi(c.fx, 0, 0);
                g.moveTo(px(x), 0); g.lineTo(px(x), ALT);
            } else {
                const [t0, t1] = c.t || [0, 2 * Math.PI];
                const n = 600;
                for (let i = 0; i <= n; i++) {
                    const t = t0 + (t1 - t0) * i / n;
                    const x = leggi(c.px, 0, t), y = leggi(c.py, 0, t);
                    const ok = Number.isFinite(x) && Number.isFinite(y);
                    if (ok && su) g.lineTo(px(x), py(y)); else if (ok) g.moveTo(px(x), py(y));
                    su = ok;
                }
            }
            g.stroke();
            g.setLineDash([]);
            if (c.etichetta && c.fy) {
                const xe = c.xEtichetta !== undefined ? c.xEtichetta : x0 + (x1 - x0) * 0.82;
                const ye = leggi(c.fy, xe, 0);
                if (Number.isFinite(ye) && ye > y0 && ye < y1) {
                    g.fillStyle = c.colore;
                    g.font = 'italic 14px ' + S.FONT;
                    g.fillText(c.etichetta, px(xe) + 4, py(ye) - 6);
                }
            }
        }

        function disegna() {
            assi();
            curve.forEach(traccia);
            punti.forEach(p => {
                const x = leggi(p.fx, 0, 0), y = leggi(p.fy, 0, 0);
                if (!Number.isFinite(x) || !Number.isFinite(y)) return;
                g.fillStyle = p.colore || '#000000';
                g.beginPath(); g.arc(px(x), py(y), 4.5, 0, 2 * Math.PI); g.fill();
                if (p.etichetta) {
                    g.font = '13px ' + S.FONT;
                    g.fillText(p.etichetta.replace(/\{([^}]+)\}/g, (_, e) => formatta(e)), px(x) + 7, py(y) - 7);
                }
            });
            if (lettura) lettura.textContent = (conf.testi || []).map(t => t.replace(/\{([^}]+)\}/g, (_, e) => formatta(e))).join('\n');
        }

        function formatta(e) {
            const v = leggi(ev(e), 0, 0);
            if (typeof v === 'string') return v;
            if (!Number.isFinite(v)) return '-';
            return S.num(v, Math.abs(v - Math.round(v)) < 1e-9 ? 0 : 2);
        }

        let lettura = null;
        if ((conf.cursori || []).length || (conf.testi || []).length) {
            const comandi = S.crea('div', { class: 'comandi' }, box);
            (conf.cursori || []).forEach(c => {
                S.cursore(comandi, c.etichetta || c.nome, c.min, c.max, c.passo || 0.1, c.val,
                    v => S.num(v, String(c.passo || 0.1).split('.')[1] ? String(c.passo || 0.1).split('.')[1].length : 0),
                    v => { val[c.nome] = v; disegna(); });
            });
            if ((conf.testi || []).length) lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);
        }

        disegna();
    }

    document.querySelectorAll('.grafico[data-grafico]').forEach(avvia);
})();
