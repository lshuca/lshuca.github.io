// moto circolare uniforme e sua proiezione: il moto armonico

Strumenti.quando('strumento-moto-armonico', function (box) {

    const S = Strumenti;
    const COL_P = '#AA0000';
    const COL_X = '#1F4FBF';
    const COL_V = '#2E7D32';
    const COL_A = '#E8A020';

    let R = 1.0, T = 4, fase = 0;
    let t = 0, inMoto = true;
    let vettori = 'velocita';

    const af = S.crea('div', { class: 'affiancati' }, box);
    const cerchio = S.canvas(af, 320, 320, 'Punto in moto circolare e sua proiezione sull\'asse x');
    const grafici = S.canvas(af, 320, 320, 'Grafici di posizione, velocità e accelerazione nel tempo');

    const comandi = S.crea('div', { class: 'comandi' }, box);
    S.cursore(comandi, 'Raggio A', 0.2, 1.5, 0.1, R, v => S.num(v, 1) + ' m', v => { R = v; });
    S.cursore(comandi, 'Periodo T', 1, 10, 0.5, T, v => S.num(v, 1) + ' s', v => { T = v; });
    S.cursore(comandi, 'Fase φ', 0, 360, 15, 0, v => v + '°', v => { fase = v * Math.PI / 180; });
    const scelta = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'Vettori' }, scelta);
    const menu = S.crea('select', {}, scelta);
    S.crea('option', { value: 'velocita', testo: 'velocità' }, menu);
    S.crea('option', { value: 'accelerazione', testo: 'accelerazione' }, menu);
    menu.addEventListener('change', () => { vettori = menu.value; });
    const pulsanti = S.crea('div', { class: 'pulsanti' }, comandi);
    const btPlay = S.pulsante(pulsanti, 'Pausa', () => {
        inMoto = !inMoto;
        btPlay.textContent = inMoto ? 'Pausa' : 'Avvia';
        if (inMoto) { ultimo = null; requestAnimationFrame(ciclo); }
    });
    S.pulsante(pulsanti, 'Azzera', () => { t = 0; storia.length = 0; });
    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    const storia = [];
    const FINESTRA = 10; // s mostrati nei grafici

    function stato(t) {
        const w = 2 * Math.PI / T;
        const th = w * t + fase;
        return {
            w, th,
            x: R * Math.cos(th), y: R * Math.sin(th),
            vx: -w * R * Math.sin(th), vy: w * R * Math.cos(th),
            ax: -w * w * R * Math.cos(th), ay: -w * w * R * Math.sin(th)
        };
    }

    function disegnaCerchio(s) {
        const g = cerchio.ctx, L = cerchio.larg, c = L / 2, k = 90; // px per metro
        g.fillStyle = '#FFFFFF';
        g.fillRect(0, 0, L, L);
        g.strokeStyle = '#DDDDDD';
        g.lineWidth = 1;
        g.beginPath(); g.moveTo(0, c); g.lineTo(L, c); g.moveTo(c, 0); g.lineTo(c, L); g.stroke();
        g.strokeStyle = '#000000';
        g.beginPath(); g.arc(c, c, R * k, 0, 2 * Math.PI); g.stroke();

        const px = c + s.x * k, py = c - s.y * k;
        // raggio e proiezione
        g.strokeStyle = '#999999';
        g.setLineDash([4, 4]);
        g.beginPath(); g.moveTo(c, c); g.lineTo(px, py); g.lineTo(px, c); g.stroke();
        g.setLineDash([]);

        const kv = vettori === 'velocita' ? 0.25 : 0.12;
        const vx = vettori === 'velocita' ? s.vx : s.ax, vy = vettori === 'velocita' ? s.vy : s.ay;
        S.freccia(g, px, py, px + vx * kv * k, py - vy * kv * k, vettori === 'velocita' ? COL_V : COL_A, 2.5, 9);
        S.freccia(g, px, c, px + vx * kv * k, c, vettori === 'velocita' ? COL_V : COL_A, 2.5, 9);

        g.fillStyle = COL_P;
        g.beginPath(); g.arc(px, py, 7, 0, 2 * Math.PI); g.fill();
        g.fillStyle = COL_X;
        g.beginPath(); g.arc(px, c, 6, 0, 2 * Math.PI); g.fill();

        g.font = '12px ' + S.FONT;
        g.fillStyle = '#575C61';
        g.fillText('moto circolare', 8, 16);
        g.fillStyle = COL_X;
        g.fillText('proiezione: moto armonico', 8, L - 8);
    }

    function disegnaGrafici() {
        const g = grafici.ctx, L = grafici.larg, H = grafici.alt;
        g.fillStyle = '#FFFFFF';
        g.fillRect(0, 0, L, H);
        const righe = [['x(t)', 'x', COL_X], ['v(t)', 'vx', COL_V], ['a(t)', 'ax', COL_A]];
        const h = H / 3;
        const t0 = Math.max(0, t - FINESTRA);
        righe.forEach(([nome, campo, col], i) => {
            const y0 = h * i + h / 2;
            g.strokeStyle = '#DDDDDD';
            g.beginPath(); g.moveTo(30, y0); g.lineTo(L - 6, y0); g.stroke();
            g.fillStyle = col;
            g.font = '12px ' + S.FONT;
            g.fillText(nome, 2, y0 + 4);
            // scala sul massimo teorico
            const w = 2 * Math.PI / T;
            const max = campo === 'x' ? R : (campo === 'vx' ? w * R : w * w * R);
            const ky = (h / 2 - 8) / Math.max(max, 1e-6);
            g.strokeStyle = col;
            g.lineWidth = 1.8;
            g.beginPath();
            let primo = true;
            for (const p of storia) {
                if (p.t < t0) continue;
                const x = 30 + (p.t - t0) / FINESTRA * (L - 36);
                const y = y0 - p[campo] * ky;
                if (primo) { g.moveTo(x, y); primo = false; } else g.lineTo(x, y);
            }
            g.stroke();
        });
        g.fillStyle = '#575C61';
        g.fillText('t →', L - 26, H - 4);
    }

    let ultimo = null;
    function ciclo(ora) {
        if (!inMoto) return;
        if (ultimo !== null) t += Math.min(0.05, (ora - ultimo) / 1000);
        ultimo = ora;
        const s = stato(t);
        storia.push({ t, x: s.x, vx: s.vx, ax: s.ax });
        while (storia.length && storia[0].t < t - FINESTRA) storia.shift();
        disegnaCerchio(s);
        disegnaGrafici();
        lettura.textContent = 'ω = 2π/T = ' + S.num(s.w, 2) + ' rad/s   f = ' + S.num(1 / T, 2) + ' Hz'
            + '   v = ωA = ' + S.num(s.w * R, 2) + ' m/s   a = ω²A = ' + S.num(s.w * s.w * R, 2) + ' m/s²'
            + '\nx(t) = A cos(ωt + φ) = ' + S.num(s.x, 2) + ' m   v(t) = ' + S.num(s.vx, 2) + ' m/s   a(t) = ' + S.num(s.ax, 2) + ' m/s²';
        requestAnimationFrame(ciclo);
    }

    requestAnimationFrame(ciclo);
});
