// simulatore elettrostatico: campo uniforme + cariche puntiformi
// porting di progetti/potenziale (python/matplotlib)

Strumenti.quando('strumento-campo-elettrico', function (box) {

    const S = Strumenti;

    // spazio
    const X_MIN = -2, X_MAX = 2, Y_MIN = -2, Y_MAX = 2;
    const GRIGLIA = 40;

    // costanti (unità arbitrarie)
    const K = 5.0;
    const SOFT = 0.1;
    const DT = 0.03;
    const SCIA = 100;
    const V_MAX = 5.0;
    const ATTRITO = 0.99;

    const COL_E = '#4682B4';
    const COL_F = '#CC0000';
    const COL_VEL = '#8A2BE2';
    const COL_V = '#2E7D32';
    const COL_SCIA = '#FFA500';
    const COL_POS = '#CC0000';
    const COL_NEG = '#1F4FBF';
    const COL_FISSA = '#D4A017';

    // stato
    let cariche = [];
    let sel = -1;
    let eMod = 0, eAng = 0;
    let inMoto = false;
    let modoVett = 'forza';
    let campoSporco = true;
    let trascino = false;

    // disegno
    const LATO = 600;
    const tela = S.canvas(box, LATO, LATO, 'Piano con cariche, linee di campo e linee equipotenziali');
    const ctx = tela.ctx;
    const fondo = document.createElement('canvas');
    fondo.width = tela.el.width;
    fondo.height = tela.el.height;
    const fctx = fondo.getContext('2d');
    fctx.scale(tela.el.width / LATO, tela.el.height / LATO);

    const px = x => (x - X_MIN) / (X_MAX - X_MIN) * LATO;
    const py = y => (Y_MAX - y) / (Y_MAX - Y_MIN) * LATO;
    const ux = p => X_MIN + p / LATO * (X_MAX - X_MIN);
    const uy = p => Y_MAX - p / LATO * (Y_MAX - Y_MIN);
    const scala = LATO / (X_MAX - X_MIN);

    // comandi
    const comandi = S.crea('div', { class: 'comandi' }, box);
    const slE = S.cursore(comandi, 'Campo E', 0, 5, 0.1, 0, v => S.num(v, 1),
        v => { eMod = v; campoSporco = true; });
    const slA = S.cursore(comandi, 'Angolo', 0, 360, 1, 0, v => v + '°',
        v => { eAng = v; campoSporco = true; });
    const slQ = S.cursore(comandi, 'Carica sel.', -2, 2, 0.1, 1, v => S.num(v, 1) + ' C',
        v => {
            if (!haSel()) return;
            cariche[sel].q = v;
            if (cariche[sel].fissa) campoSporco = true;
        });

    const scelta = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'Vettore' }, scelta);
    const menu = S.crea('select', {}, scelta);
    S.crea('option', { value: 'forza', testo: 'forza' }, menu);
    S.crea('option', { value: 'velocita', testo: 'velocità' }, menu);
    menu.addEventListener('change', () => { modoVett = menu.value; });

    const pulsanti = S.crea('div', { class: 'pulsanti' }, comandi);
    S.pulsante(pulsanti, '+ Nuova carica', () => nuovaCarica());
    const btFissa = S.pulsante(pulsanti, 'Fissa', fissaLibera);
    const btElimina = S.pulsante(pulsanti, 'Elimina', elimina);
    const btPlay = S.pulsante(pulsanti, 'Avvia', avviaPausa);
    S.pulsante(pulsanti, 'Azzera', azzera);

    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    // fisica
    function campoIn(x, y, salta) {
        const t = eAng * Math.PI / 180;
        let ex = eMod * Math.cos(t), ey = eMod * Math.sin(t);
        let v = -(ex * x + ey * y);
        for (const c of cariche) {
            if (!c.fissa || c === salta) continue;
            const dx = x - c.x, dy = y - c.y;
            const r = Math.max(Math.hypot(dx, dy), SOFT);
            const e = K * c.q / (r * r);
            ex += e * dx / r;
            ey += e * dy / r;
            v += K * c.q / r;
        }
        return { ex, ey, v };
    }

    function forzaSu(c) {
        const e = campoIn(c.x, c.y, c);
        return { fx: c.q * e.ex, fy: c.q * e.ey };
    }

    function passo() {
        for (const c of cariche) {
            if (c.fissa) { c.f = { fx: 0, fy: 0 }; continue; }
            c.f = forzaSu(c);
            if (!inMoto) continue;
            let vx = (c.vx + c.f.fx / c.m * DT) * ATTRITO;
            let vy = (c.vy + c.f.fy / c.m * DT) * ATTRITO;
            const v = Math.hypot(vx, vy);
            if (v > V_MAX) { vx *= V_MAX / v; vy *= V_MAX / v; }
            c.vx = vx; c.vy = vy;
            c.x += vx * DT;
            c.y += vy * DT;
            c.scia.push([c.x, c.y]);
            if (c.scia.length > SCIA) c.scia.shift();
        }
    }

    // campo e potenziale su griglia, ridisegnati solo se cambiano
    function disegnaCampo() {
        fctx.fillStyle = '#FFFFFF';
        fctx.fillRect(0, 0, LATO, LATO);
        disegnaAssi(fctx);

        const n = GRIGLIA;
        const V = [];
        let vmin = Infinity, vmax = -Infinity;
        for (let j = 0; j < n; j++) {
            V.push([]);
            for (let i = 0; i < n; i++) {
                const x = X_MIN + i * (X_MAX - X_MIN) / (n - 1);
                const y = Y_MIN + j * (Y_MAX - Y_MIN) / (n - 1);
                const v = campoIn(x, y).v;
                V[j].push(v);
                vmin = Math.min(vmin, v);
                vmax = Math.max(vmax, v);
            }
        }

        // equipotenziali
        if (vmax - vmin > 0.1) {
            const tutti = V.flat().sort((a, b) => a - b);
            fctx.strokeStyle = COL_V;
            fctx.globalAlpha = 0.55;
            fctx.lineWidth = 1;
            fctx.setLineDash([5, 4]);
            for (let k = 1; k <= 15; k++) {
                // livelli sui quantili: altrimenti si ammucchiano vicino alle cariche
                const liv = tutti[Math.floor(tutti.length * k / 16)];
                isolinea(V, n, liv);
            }
            fctx.setLineDash([]);
            fctx.globalAlpha = 1;
        }

        // vettori di campo
        const passoG = 3;
        fctx.globalAlpha = 0.5;
        for (let j = 0; j < n; j += passoG) {
            for (let i = 0; i < n; i += passoG) {
                const x = X_MIN + i * (X_MAX - X_MIN) / (n - 1);
                const y = Y_MIN + j * (Y_MAX - Y_MIN) / (n - 1);
                const e = campoIn(x, y);
                const m = Math.hypot(e.ex, e.ey);
                if (m < 1e-6) continue;
                const l = 0.22 * Math.tanh(m / 4);
                S.freccia(fctx, px(x), py(y), px(x + e.ex / m * l), py(y + e.ey / m * l), COL_E, 1.2, 6);
            }
        }
        fctx.globalAlpha = 1;
        campoSporco = false;
    }

    // marching squares
    function isolinea(V, n, liv) {
        const passoX = LATO / (n - 1);
        const interp = (a, b) => (liv - a) / (b - a);
        fctx.beginPath();
        for (let j = 0; j < n - 1; j++) {
            for (let i = 0; i < n - 1; i++) {
                const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i + 1], d = V[j + 1][i];
                const x0 = i * passoX, y0 = LATO - j * passoX;
                const p = [];
                if ((a < liv) !== (b < liv)) p.push([x0 + interp(a, b) * passoX, y0]);
                if ((b < liv) !== (c < liv)) p.push([x0 + passoX, y0 - interp(b, c) * passoX]);
                if ((c < liv) !== (d < liv)) p.push([x0 + (1 - interp(c, d)) * passoX, y0 - passoX]);
                if ((d < liv) !== (a < liv)) p.push([x0, y0 - (1 - interp(d, a)) * passoX]);
                for (let k = 0; k + 1 < p.length; k += 2) {
                    fctx.moveTo(p[k][0], p[k][1]);
                    fctx.lineTo(p[k + 1][0], p[k + 1][1]);
                }
            }
        }
        fctx.stroke();
    }

    function disegnaAssi(g) {
        g.strokeStyle = '#DDDDDD';
        g.lineWidth = 1;
        for (let t = X_MIN; t <= X_MAX; t += 0.5) {
            g.beginPath(); g.moveTo(px(t), 0); g.lineTo(px(t), LATO); g.stroke();
            g.beginPath(); g.moveTo(0, py(t)); g.lineTo(LATO, py(t)); g.stroke();
        }
        g.strokeStyle = '#888888';
        g.beginPath(); g.moveTo(px(0), 0); g.lineTo(px(0), LATO); g.stroke();
        g.beginPath(); g.moveTo(0, py(0)); g.lineTo(LATO, py(0)); g.stroke();
        g.fillStyle = '#575C61';
        g.font = '13px ' + S.FONT;
        for (let t = X_MIN + 1; t < X_MAX; t += 1) {
            if (t === 0) continue;
            g.fillText(t, px(t) + 3, py(0) + 14);
            g.fillText(t, px(0) + 4, py(t) - 3);
        }
        g.fillText('x (m)', LATO - 40, py(0) - 6);
        g.fillText('y (m)', px(0) + 6, 14);
    }

    function disegna() {
        if (campoSporco) disegnaCampo();
        const dpr = tela.el.width / LATO;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(fondo, 0, 0);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        cariche.forEach((c, i) => {
            // scia
            if (c.scia.length > 1) {
                ctx.strokeStyle = COL_SCIA;
                ctx.globalAlpha = 0.7;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(px(c.scia[0][0]), py(c.scia[0][1]));
                for (const p of c.scia) ctx.lineTo(px(p[0]), py(p[1]));
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            // vettore
            if (!c.fissa) {
                let vx, vy, col, k;
                if (modoVett === 'forza') { vx = c.f.fx; vy = c.f.fy; col = COL_F; k = 1 / 15; }
                else { vx = c.vx; vy = c.vy; col = COL_VEL; k = 1 / 25; }
                const l = Math.hypot(vx, vy) * k;
                if (Math.hypot(vx, vy) > 0.01) {
                    const f = Math.min(l, 1) / l;
                    S.freccia(ctx, px(c.x), py(c.y), px(c.x + vx * k * f), py(c.y + vy * k * f), col, 2.5, 10);
                }
            }

            // carica
            const r = i === sel ? 11 : 9;
            ctx.beginPath();
            ctx.arc(px(c.x), py(c.y), r, 0, 2 * Math.PI);
            ctx.fillStyle = c.fissa ? COL_FISSA : (c.q >= 0 ? COL_POS : COL_NEG);
            ctx.fill();
            ctx.lineWidth = i === sel ? 3 : 1.5;
            ctx.strokeStyle = i === sel ? '#000000' : '#FFFFFF';
            ctx.stroke();

            // etichetta
            ctx.fillStyle = '#000000';
            ctx.font = '13px ' + S.FONT;
            ctx.textAlign = 'center';
            ctx.fillText((c.fissa ? '* ' : '') + (i + 1) + ': ' + S.num(c.q, 1) + ' C', px(c.x), py(c.y) - 15);
            ctx.textAlign = 'start';
        });
    }

    function aggiornaLettura() {
        let t = 'Cariche: ' + cariche.length + '   E = ' + S.num(eMod, 1) + ' a ' + eAng + '°';
        if (haSel()) {
            const c = cariche[sel];
            const k = 0.5 * c.m * (c.vx * c.vx + c.vy * c.vy);
            t += '\nSelezionata: n. ' + (sel + 1) + ' (' + (c.fissa ? 'fissa' : 'mobile') + ')'
                + '   q = ' + S.num(c.q, 1) + ' C'
                + '   K = ' + S.num(k, 2) + ' J';
        }
        lettura.textContent = t;
        btFissa.textContent = haSel() && cariche[sel].fissa ? 'Libera' : 'Fissa';
        btFissa.disabled = !haSel();
        btElimina.disabled = !haSel();
        slQ.el.disabled = !haSel();
    }

    // azioni
    function haSel() { return sel >= 0 && sel < cariche.length; }

    function nuovaCarica(x, y) {
        cariche.push({
            x: x !== undefined ? x : X_MIN + 0.5 + Math.random() * (X_MAX - X_MIN - 1),
            y: y !== undefined ? y : Y_MIN + 0.5 + Math.random() * (Y_MAX - Y_MIN - 1),
            vx: 0, vy: 0, q: 1, m: 1, fissa: false, scia: [], f: { fx: 0, fy: 0 }
        });
        sel = cariche.length - 1;
        slQ.imposta(1);
    }

    function fissaLibera() {
        if (!haSel()) return;
        const c = cariche[sel];
        c.fissa = !c.fissa;
        c.vx = 0; c.vy = 0; c.scia = [];
        campoSporco = true;
    }

    function elimina() {
        if (!haSel()) return;
        if (cariche[sel].fissa) campoSporco = true;
        cariche.splice(sel, 1);
        sel = Math.min(sel, cariche.length - 1);
        if (haSel()) slQ.imposta(cariche[sel].q);
    }

    function avviaPausa() {
        inMoto = !inMoto;
        btPlay.textContent = inMoto ? 'Pausa' : 'Avvia';
        btPlay.classList.toggle('premuto', inMoto);
    }

    function azzera() {
        if (inMoto) avviaPausa();
        cariche = [];
        sel = -1;
        eMod = 0; eAng = 0;
        slE.imposta(0); slA.imposta(0);
        campoSporco = true;
        nuovaCarica(0, 0);
    }

    // puntatore: click seleziona, trascina sposta (a simulazione ferma)
    tela.el.addEventListener('pointerdown', ev => {
        const p = S.puntatore(tela, ev);
        const x = ux(p.x), y = uy(p.y);
        let trovata = -1, dmin = 20 / scala;
        cariche.forEach((c, i) => {
            const d = Math.hypot(c.x - x, c.y - y);
            if (d < dmin) { dmin = d; trovata = i; }
        });
        if (trovata >= 0) {
            sel = trovata;
            slQ.imposta(cariche[sel].q);
            trascino = !inMoto;
        } else if (!inMoto) {
            if (haSel()) sposta(cariche[sel], x, y);
            else nuovaCarica(x, y);
            trascino = true;
        }
        if (trascino) tela.el.setPointerCapture(ev.pointerId);
    });

    tela.el.addEventListener('pointermove', ev => {
        if (!trascino || !haSel()) return;
        const p = S.puntatore(tela, ev);
        sposta(cariche[sel], ux(p.x), uy(p.y));
    });

    const fine = () => { trascino = false; };
    tela.el.addEventListener('pointerup', fine);
    tela.el.addEventListener('pointercancel', fine);

    function sposta(c, x, y) {
        c.x = Math.min(Math.max(x, X_MIN), X_MAX);
        c.y = Math.min(Math.max(y, Y_MIN), Y_MAX);
        c.vx = 0; c.vy = 0; c.scia = [];
        if (c.fissa) campoSporco = true;
    }

    // ciclo a ~30 ms come l'originale
    let ultimo = 0;
    function ciclo(t) {
        if (t - ultimo >= 30) {
            ultimo = t;
            passo();
            disegna();
            aggiornaLettura();
        }
        requestAnimationFrame(ciclo);
    }

    nuovaCarica(0, 0);
    requestAnimationFrame(ciclo);
});
