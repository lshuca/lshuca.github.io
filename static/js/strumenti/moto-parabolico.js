// moto parabolico: lancio dal suolo con velocità v0 e angolo theta

Strumenti.quando('strumento-moto-parabolico', function (box) {

    const S = Strumenti;
    const COL_TRAI = '#AA0000';
    const COL_V = '#1F4FBF';
    const COL_COMP = '#2E7D32';

    let v0 = 15, ang = 45, g = 9.81;
    let t = 0, inMoto = false;
    const confronti = [];

    const LARG = 600, ALT = 340, M = 40;
    const tela = S.canvas(box, LARG, ALT, 'Traiettoria di un proiettile');
    const ctx = tela.ctx;

    const comandi = S.crea('div', { class: 'comandi' }, box);
    S.cursore(comandi, 'Velocità v₀', 1, 30, 0.5, v0, v => S.num(v, 1) + ' m/s', v => { v0 = v; azzera(); });
    S.cursore(comandi, 'Angolo θ', 0, 90, 1, ang, v => v + '°', v => { ang = v; azzera(); });
    const scelta = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'Gravità' }, scelta);
    const menu = S.crea('select', {}, scelta);
    for (const [nome, val] of [['Terra (9,81 m/s²)', 9.81], ['Luna (1,62 m/s²)', 1.62], ['Marte (3,71 m/s²)', 3.71], ['Giove (24,8 m/s²)', 24.8]]) {
        S.crea('option', { value: val, testo: nome }, menu);
    }
    menu.addEventListener('change', () => { g = Number(menu.value); azzera(); });
    const pulsanti = S.crea('div', { class: 'pulsanti' }, comandi);
    const btPlay = S.pulsante(pulsanti, 'Lancia', lancia);
    S.pulsante(pulsanti, 'Tieni traiettoria', () => { confronti.push({ v0, ang, g }); disegna(); });
    S.pulsante(pulsanti, 'Cancella traiettorie', () => { confronti.length = 0; disegna(); });
    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    // grandezze del lancio
    function dati(v0, ang, g) {
        const th = ang * Math.PI / 180;
        const vx = v0 * Math.cos(th), vy = v0 * Math.sin(th);
        const T = 2 * vy / g;
        return { vx, vy, T, R: vx * T, H: vy * vy / (2 * g) };
    }

    // scala: la gittata massima possibile (45°) deve stare nel riquadro
    function scala() {
        let gitt = v0 * v0 / g, alt = v0 * v0 / (2 * g);
        for (const c of confronti) { gitt = Math.max(gitt, c.v0 * c.v0 / c.g); alt = Math.max(alt, c.v0 * c.v0 / (2 * c.g)); }
        return Math.min((LARG - 2 * M) / gitt, (ALT - 2 * M) / alt);
    }

    function disegna() {
        const k = scala();
        const px = x => M + x * k, py = y => ALT - M - y * k;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, LARG, ALT);

        // griglia in metri
        const passo = [1, 2, 5, 10, 20, 50, 100].find(p => p * k > 40) || 100;
        ctx.strokeStyle = '#E4E4E4';
        ctx.lineWidth = 1;
        ctx.fillStyle = '#575C61';
        ctx.font = '12px ' + S.FONT;
        for (let x = 0; px(x) < LARG; x += passo) {
            ctx.beginPath(); ctx.moveTo(px(x), 0); ctx.lineTo(px(x), py(0)); ctx.stroke();
            ctx.fillText(x, px(x) - 4, py(0) + 14);
        }
        for (let y = passo; py(y) > 0; y += passo) {
            ctx.beginPath(); ctx.moveTo(px(0), py(y)); ctx.lineTo(LARG, py(y)); ctx.stroke();
            ctx.fillText(y, 8, py(y) + 4);
        }
        ctx.strokeStyle = '#000000';
        ctx.beginPath(); ctx.moveTo(0, py(0)); ctx.lineTo(LARG, py(0)); ctx.stroke();
        ctx.fillText('x (m)', LARG - 36, py(0) + 28);
        ctx.fillText('y (m)', 6, 14);

        // traiettorie tenute
        for (const c of confronti) curva(c, '#BBBBBB', px, py, 1.5);

        // traiettoria attuale (tratteggiata) e tratto percorso
        const d = dati(v0, ang, g);
        ctx.setLineDash([4, 4]);
        curva({ v0, ang, g }, '#999999', px, py, 1);
        ctx.setLineDash([]);
        const tt = Math.min(t, d.T);
        if (tt > 0) {
            ctx.strokeStyle = COL_TRAI;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (let i = 0; i <= 100; i++) {
                const s = tt * i / 100;
                const x = d.vx * s, y = d.vy * s - g * s * s / 2;
                if (i === 0) ctx.moveTo(px(x), py(y)); else ctx.lineTo(px(x), py(y));
            }
            ctx.stroke();
        }

        // proiettile e vettori
        const x = d.vx * tt, y = d.vy * tt - g * tt * tt / 2, vy = d.vy - g * tt;
        const kv = 3;
        S.freccia(ctx, px(x), py(y), px(x) + d.vx * kv, py(y), COL_COMP, 2, 8);
        S.freccia(ctx, px(x), py(y), px(x), py(y) - vy * kv, COL_COMP, 2, 8);
        S.freccia(ctx, px(x), py(y), px(x) + d.vx * kv, py(y) - vy * kv, COL_V, 2.5, 10);
        ctx.fillStyle = '#000000';
        ctx.beginPath(); ctx.arc(px(x), py(y), 6, 0, 2 * Math.PI); ctx.fill();

        // altezza massima e gittata
        ctx.fillStyle = COL_TRAI;
        ctx.beginPath(); ctx.arc(px(d.R / 2), py(d.H), 3, 0, 2 * Math.PI); ctx.fill();
        ctx.beginPath(); ctx.arc(px(d.R), py(0), 3, 0, 2 * Math.PI); ctx.fill();

        lettura.textContent = 'v₀x = ' + S.num(d.vx, 2) + ' m/s   v₀y = ' + S.num(d.vy, 2) + ' m/s'
            + '\ntempo di volo = ' + S.num(d.T, 2) + ' s   altezza massima = ' + S.num(d.H, 2) + ' m   gittata = ' + S.num(d.R, 2) + ' m'
            + '\nt = ' + S.num(tt, 2) + ' s   x = ' + S.num(x, 2) + ' m   y = ' + S.num(Math.max(y, 0), 2) + ' m   v_y = ' + S.num(vy, 2) + ' m/s';
    }

    function curva(c, colore, px, py, sp) {
        const d = dati(c.v0, c.ang, c.g);
        ctx.strokeStyle = colore;
        ctx.lineWidth = sp;
        ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
            const s = d.T * i / 100;
            const x = d.vx * s, y = d.vy * s - c.g * s * s / 2;
            if (i === 0) ctx.moveTo(px(x), py(y)); else ctx.lineTo(px(x), py(y));
        }
        ctx.stroke();
    }

    function azzera() {
        inMoto = false;
        t = 0;
        btPlay.textContent = 'Lancia';
        disegna();
    }

    let ultimo = null;
    function ciclo(ora) {
        if (!inMoto) return;
        if (ultimo !== null) t += (ora - ultimo) / 1000;
        ultimo = ora;
        const T = dati(v0, ang, g).T;
        if (t >= T) { t = T; inMoto = false; btPlay.textContent = 'Rilancia'; }
        disegna();
        if (inMoto) requestAnimationFrame(ciclo);
    }

    function lancia() {
        t = 0;
        ultimo = null;
        inMoto = true;
        btPlay.textContent = 'Lancia';
        requestAnimationFrame(ciclo);
    }

    disegna();
});
