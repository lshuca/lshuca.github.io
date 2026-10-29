// circuiti con tre resistori: serie, parallelo, misto

Strumenti.quando('strumento-circuiti', function (box) {

    const S = Strumenti;
    const COL_R = '#AA0000';
    const COL_Q = '#E8A020';

    let schema = 'serie';
    let V = 12;
    const R = [10, 20, 30];

    const LARG = 500, ALT = 300;
    const tela = S.canvas(box, LARG, ALT, 'Schema del circuito');
    const g = tela.ctx;

    const comandi = S.crea('div', { class: 'comandi' }, box);
    const scelta = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'Collegamento' }, scelta);
    const menu = S.crea('select', {}, scelta);
    S.crea('option', { value: 'serie', testo: 'serie' }, menu);
    S.crea('option', { value: 'parallelo', testo: 'parallelo' }, menu);
    S.crea('option', { value: 'misto', testo: 'R₁ in serie con R₂ ∥ R₃' }, menu);
    menu.addEventListener('change', () => { schema = menu.value; });
    S.cursore(comandi, 'Tensione V', 1, 24, 0.5, V, v => S.num(v, 1) + ' V', v => { V = v; });
    S.cursore(comandi, 'R₁', 1, 100, 1, R[0], v => v + ' Ω', v => { R[0] = v; });
    S.cursore(comandi, 'R₂', 1, 100, 1, R[1], v => v + ' Ω', v => { R[1] = v; });
    S.cursore(comandi, 'R₃', 1, 100, 1, R[2], v => v + ' Ω', v => { R[2] = v; });
    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    // correnti e tensioni sui tre resistori
    function risolvi() {
        let Req, I, i, v;
        if (schema === 'serie') {
            Req = R[0] + R[1] + R[2];
            I = V / Req;
            i = [I, I, I];
        } else if (schema === 'parallelo') {
            Req = 1 / (1 / R[0] + 1 / R[1] + 1 / R[2]);
            I = V / Req;
            i = R.map(r => V / r);
        } else {
            const Rp = R[1] * R[2] / (R[1] + R[2]);
            Req = R[0] + Rp;
            I = V / Req;
            const Vp = I * Rp;
            i = [I, Vp / R[1], Vp / R[2]];
        }
        v = i.map((x, k) => x * R[k]);
        return { Req, I, i, v };
    }

    // geometria: tratti di filo, ciascuno con la sua corrente (somme dei rami)
    const X0 = 60, YA = 60, YB = 240, XD = 440;
    function percorsi(i) {
        if (schema === 'serie') {
            return {
                resistori: [[[150, YA], [230, YA]], [[290, YA], [370, YA]], [[XD, 110], [XD, 190]]],
                tratti: [{ punti: [[X0, YB], [X0, YA], [XD, YA], [XD, YB], [X0, YB]], I: i[0] }]
            };
        }
        if (schema === 'parallelo') {
            const [a, b, c] = [200, 320, XD];
            const I = i[0] + i[1] + i[2];
            return {
                resistori: [a, b, c].map(x => [[x, 110], [x, 190]]),
                tratti: [
                    { punti: [[X0, YB], [X0, YA], [a, YA]], I },
                    { punti: [[a, YA], [b, YA]], I: i[1] + i[2] },
                    { punti: [[b, YA], [c, YA]], I: i[2] },
                    { punti: [[a, YA], [a, YB]], I: i[0] },
                    { punti: [[b, YA], [b, YB]], I: i[1] },
                    { punti: [[c, YA], [c, YB]], I: i[2] },
                    { punti: [[c, YB], [b, YB]], I: i[2] },
                    { punti: [[b, YB], [a, YB]], I: i[1] + i[2] },
                    { punti: [[a, YB], [X0, YB]], I }
                ]
            };
        }
        const [a, c] = [300, XD];
        return {
            resistori: [[[130, YA], [210, YA]], [[a, 110], [a, 190]], [[c, 110], [c, 190]]],
            tratti: [
                { punti: [[X0, YB], [X0, YA], [a, YA]], I: i[0] },
                { punti: [[a, YA], [c, YA]], I: i[2] },
                { punti: [[a, YA], [a, YB]], I: i[1] },
                { punti: [[c, YA], [c, YB]], I: i[2] },
                { punti: [[c, YB], [a, YB]], I: i[2] },
                { punti: [[a, YB], [X0, YB]], I: i[0] }
            ]
        };
    }

    function filo(punti) {
        g.beginPath();
        g.moveTo(punti[0][0], punti[0][1]);
        for (const p of punti.slice(1)) g.lineTo(p[0], p[1]);
        g.stroke();
    }

    function resistore(a, b, nome) {
        const [x1, y1] = a, [x2, y2] = b;
        const vert = x1 === x2;
        // copro il filo e disegno lo zig-zag
        g.fillStyle = '#FFFFFF';
        if (vert) g.fillRect(x1 - 10, y1, 20, y2 - y1); else g.fillRect(x1, y1 - 10, x2 - x1, 20);
        g.strokeStyle = COL_R;
        g.lineWidth = 2;
        g.beginPath();
        g.moveTo(x1, y1);
        const n = 8;
        for (let k = 1; k < n; k++) {
            const t = k / n, s = (k % 2 ? 1 : -1) * 8;
            if (vert) g.lineTo(x1 + s, y1 + (y2 - y1) * t); else g.lineTo(x1 + (x2 - x1) * t, y1 + s);
        }
        g.lineTo(x2, y2);
        g.stroke();
        g.fillStyle = COL_R;
        g.font = '14px ' + S.FONT;
        if (vert) g.fillText(nome, x1 + 14, (y1 + y2) / 2 + 4); else g.fillText(nome, (x1 + x2) / 2 - 8, y1 - 14);
    }

    function lunghezza(p) {
        let l = 0;
        for (let k = 1; k < p.length; k++) l += Math.hypot(p[k][0] - p[k - 1][0], p[k][1] - p[k - 1][1]);
        return l;
    }

    function puntoA(p, s) {
        for (let k = 1; k < p.length; k++) {
            const l = Math.hypot(p[k][0] - p[k - 1][0], p[k][1] - p[k - 1][1]);
            if (s <= l) return [p[k - 1][0] + (p[k][0] - p[k - 1][0]) * s / l, p[k - 1][1] + (p[k][1] - p[k - 1][1]) * s / l];
            s -= l;
        }
        return p[p.length - 1];
    }

    let spost = 0;
    function disegna() {
        const sol = risolvi();
        const geo = percorsi(sol.i);
        g.fillStyle = '#FFFFFF';
        g.fillRect(0, 0, LARG, ALT);
        g.strokeStyle = '#000000';
        g.lineWidth = 2;
        geo.tratti.forEach(a => filo(a.punti));

        // generatore
        g.fillStyle = '#FFFFFF';
        g.fillRect(X0 - 20, 130, 40, 40);
        g.strokeStyle = '#000000';
        g.beginPath(); g.moveTo(X0 - 18, 140); g.lineTo(X0 + 18, 140); g.stroke();
        g.lineWidth = 4;
        g.beginPath(); g.moveTo(X0 - 9, 158); g.lineTo(X0 + 9, 158); g.stroke();
        g.fillStyle = '#000000';
        g.font = '13px ' + S.FONT;
        g.fillText('+', X0 + 22, 144);
        g.fillText(S.num(V, 1) + ' V', X0 - 52, 154);

        geo.resistori.forEach((r, k) => resistore(r[0], r[1], 'R' + '₁₂₃'[k]));

        // cariche in moto (verso convenzionale), velocità proporzionale alla corrente
        g.fillStyle = COL_Q;
        geo.tratti.forEach(a => {
            const L = lunghezza(a.punti);
            const passo = 26;
            const off = (spost * a.I * 40) % passo;
            for (let s = off; s < L; s += passo) {
                const [x, y] = puntoA(a.punti, s);
                g.beginPath(); g.arc(x, y, 3, 0, 2 * Math.PI); g.fill();
            }
        });

        lettura.textContent = 'R_eq = ' + S.num(sol.Req, 2) + ' Ω   I = V / R_eq = ' + S.num(sol.I, 3) + ' A   P = ' + S.num(V * sol.I, 2) + ' W\n'
            + [0, 1, 2].map(k => 'R' + '₁₂₃'[k] + ':  I = ' + S.num(sol.i[k], 3) + ' A   V = ' + S.num(sol.v[k], 2) + ' V   P = ' + S.num(sol.v[k] * sol.i[k], 2) + ' W').join('\n');
    }

    function ciclo() {
        spost += 0.016;
        disegna();
        requestAnimationFrame(ciclo);
    }
    requestAnimationFrame(ciclo);
});
