// carica in campo magnetico uniforme: orbita circolare e ciclotrone

Strumenti.quando('strumento-carica-campo-magnetico', function (box) {

    const S = Strumenti;
    const QE = 1.602e-19;
    const PARTICELLE = {
        protone: { m: 1.673e-27, q: QE, nome: 'protone' },
        elettrone: { m: 9.109e-31, q: -QE, nome: 'elettrone' },
        alfa: { m: 6.645e-27, q: 2 * QE, nome: 'particella α' }
    };
    const COL_V = '#1F4FBF';
    const COL_F = '#AA0000';
    const COL_T = '#E8A020';

    let modo = 'orbita';
    let part = PARTICELLE.protone;
    let B = 0.5, v = 2e6, verso = 1; // verso 1: B entrante
    let dV = 100e3;                  // ciclotrone: ddp tra le D
    const R_D = 0.5;                 // raggio delle D (m)

    const LATO = 500;
    const tela = S.canvas(box, LATO, LATO, 'Traiettoria di una carica in un campo magnetico uniforme');
    const ctx = tela.ctx;

    const comandi = S.crea('div', { class: 'comandi' }, box);
    const scModo = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'Modalità' }, scModo);
    const menuModo = S.crea('select', {}, scModo);
    S.crea('option', { value: 'orbita', testo: 'orbita circolare' }, menuModo);
    S.crea('option', { value: 'ciclotrone', testo: 'ciclotrone' }, menuModo);

    const scPart = S.crea('label', {}, comandi);
    S.crea('span', { testo: 'Particella' }, scPart);
    const menuPart = S.crea('select', {}, scPart);
    for (const k in PARTICELLE) S.crea('option', { value: k, testo: PARTICELLE[k].nome }, menuPart);

    S.cursore(comandi, 'Campo B', 0.1, 2, 0.05, B, x => S.num(x, 2) + ' T', x => { B = x; ricomincia(); });
    const slV = S.cursore(comandi, 'Velocità v', 1, 50, 1, v / 1e5, x => S.num(x / 10, 1) + '·10⁶ m/s', x => { v = x * 1e5; ricomincia(); });
    const slDV = S.cursore(comandi, 'ddp ΔV', 20, 500, 10, dV / 1e3, x => x + ' kV', x => { dV = x * 1e3; ricomincia(); });
    const pulsanti = S.crea('div', { class: 'pulsanti' }, comandi);
    S.pulsante(pulsanti, 'Inverti B', () => { verso = -verso; ricomincia(); });
    S.pulsante(pulsanti, 'Ricomincia', ricomincia);
    const lettura = S.crea('p', { class: 'lettura', 'aria-live': 'polite' }, comandi);

    menuModo.addEventListener('change', () => {
        modo = menuModo.value;
        if (modo === 'ciclotrone') { menuPart.value = 'protone'; part = PARTICELLE.protone; }
        menuPart.disabled = modo === 'ciclotrone';
        aggiornaComandi();
        ricomincia();
    });
    menuPart.addEventListener('change', () => { part = PARTICELLE[menuPart.value]; ricomincia(); });

    function aggiornaComandi() {
        slV.el.closest('label').style.display = modo === 'orbita' ? '' : 'none';
        slDV.el.closest('label').style.display = modo === 'ciclotrone' ? '' : 'none';
    }

    // senso di rotazione: +1 antiorario
    function senso() { return -Math.sign(part.q) * verso; }

    function sfondo(k) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, LATO, LATO);
        // simboli del campo
        ctx.fillStyle = '#CCCCCC';
        ctx.strokeStyle = '#CCCCCC';
        ctx.lineWidth = 1;
        for (let x = 25; x < LATO; x += 50) {
            for (let y = 25; y < LATO; y += 50) {
                if (verso > 0) {
                    ctx.beginPath(); ctx.moveTo(x - 4, y - 4); ctx.lineTo(x + 4, y + 4); ctx.moveTo(x + 4, y - 4); ctx.lineTo(x - 4, y + 4); ctx.stroke();
                } else {
                    ctx.beginPath(); ctx.arc(x, y, 2, 0, 2 * Math.PI); ctx.fill();
                }
            }
        }
        // scala
        const passi = [1e-6, 2e-6, 5e-6, 1e-5, 2e-5, 5e-5, 1e-4, 2e-4, 5e-4, 1e-3, 2e-3, 5e-3, 1e-2, 2e-2, 5e-2, 0.1, 0.2, 0.5, 1];
        const p = passi.find(s => s * k > 60) || 1;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(15, LATO - 15); ctx.lineTo(15 + p * k, LATO - 15); ctx.stroke();
        ctx.fillStyle = '#000000';
        ctx.font = '12px ' + S.FONT;
        ctx.fillText(lunghezza(p), 15, LATO - 22);
        ctx.fillText(verso > 0 ? 'B entrante ⊗' : 'B uscente ⊙', LATO - 95, 18);
    }

    function lunghezza(x, cifre) {
        cifre = cifre || 0;
        if (x >= 1) return S.num(x, cifre) + ' m';
        if (x >= 1e-2) return S.num(x * 100, cifre) + ' cm';
        if (x >= 1e-3) return S.num(x * 1000, cifre) + ' mm';
        return S.num(x * 1e6, cifre) + ' μm';
    }

    function tempo(x) {
        if (x >= 1e-6) return S.num(x * 1e6, 2) + ' μs';
        return S.num(x * 1e9, 2) + ' ns';
    }

    // orbita
    let fase = 0;
    function disegnaOrbita() {
        const r = part.m * v / (Math.abs(part.q) * B);
        const T = 2 * Math.PI * part.m / (Math.abs(part.q) * B);
        const k = LATO * 0.32 / r;
        sfondo(k);
        const c = LATO / 2;
        ctx.strokeStyle = '#999999';
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(c, c, r * k, 0, 2 * Math.PI); ctx.stroke();
        ctx.setLineDash([]);
        const s = senso();
        const x = c + r * k * Math.cos(fase), y = c - r * k * Math.sin(fase);
        // velocità tangente, forza verso il centro
        const tx = -Math.sin(fase) * s, ty = Math.cos(fase) * s;
        S.freccia(ctx, x, y, x + tx * 70, y - ty * 70, COL_V, 2.5, 10);
        S.freccia(ctx, x, y, x + (c - x) * 0.45, y + (c - y) * 0.45, COL_F, 2.5, 10);
        ctx.fillStyle = part.q > 0 ? '#AA0000' : '#1F4FBF';
        ctx.beginPath(); ctx.arc(x, y, 8, 0, 2 * Math.PI); ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 12px ' + S.FONT;
        ctx.textAlign = 'center';
        ctx.fillText(part.q > 0 ? '+' : '−', x, y + 4);
        ctx.textAlign = 'start';
        ctx.font = '13px ' + S.FONT;
        ctx.fillStyle = COL_V; ctx.fillText('v', x + tx * 74, y - ty * 74);
        ctx.fillStyle = COL_F; ctx.fillText('F', x + (c - x) * 0.5 + 6, y + (c - y) * 0.5);
        fase += s * 0.02;

        lettura.textContent = part.nome + ':  m = ' + part.m.toExponential(3).replace('.', ',') + ' kg   q = ' + (part.q / QE > 0 ? '+' : '') + (part.q / QE) + 'e'
            + '\nr = mv/(|q|B) = ' + lunghezza(r, 2)
            + '   T = 2πm/(|q|B) = ' + tempo(T) + '   f = ' + S.num(1 / T / 1e6, 2) + ' MHz'
            + '\nrotazione ' + (s > 0 ? 'antioraria' : 'oraria');
    }

    // ciclotrone: semicirconferenze di raggio crescente, tutte nello stesso tempo
    let archi = [], arco = 0, avanz = 0;
    function preparaCiclotrone() {
        archi = [];
        let y = 0, n = 1, dir = 1; // dir: verso della velocità lungo x all'ingresso
        const s = senso();
        while (n < 2000) {
            const K = n * part.q * dV;
            const vel = Math.sqrt(2 * K / part.m);
            const r = part.m * vel / (part.q * B);
            // centro sopra o sotto il punto di ingresso
            const cy = y + dir * s * r;
            if (r > R_D) { archi.push({ uscita: true, y, dir, vel, K }); break; }
            archi.push({ cy, r, dir, y, vel, K });
            y = cy + dir * s * r;
            dir = -dir;
            n++;
        }
        arco = 0; avanz = 0;
    }

    function disegnaCiclotrone() {
        const k = LATO * 0.45 / R_D;
        sfondo(k);
        const c = LATO / 2;
        const gap = 6;
        // le due D
        ctx.strokeStyle = '#555555';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(c + gap, c, R_D * k, -Math.PI / 2, Math.PI / 2); ctx.closePath(); ctx.stroke();
        ctx.beginPath(); ctx.arc(c - gap, c, R_D * k, Math.PI / 2, 3 * Math.PI / 2); ctx.closePath(); ctx.stroke();

        // traccia fino all'arco corrente
        ctx.strokeStyle = COL_T;
        ctx.lineWidth = 1.5;
        let pos = null;
        for (let i = 0; i <= arco && i < archi.length; i++) {
            const a = archi[i];
            const frazione = i < arco ? 1 : avanz;
            const x0 = c + a.dir * gap;
            // attraversamento della fessura: qui la ddp accelera la carica
            ctx.beginPath(); ctx.moveTo(c - a.dir * gap, c - a.y * k); ctx.lineTo(x0, c - a.y * k); ctx.stroke();
            if (a.uscita) {
                // estrazione: tratto rettilineo verso il bordo
                const x1 = x0 + a.dir * frazione * (R_D * k + 20);
                ctx.beginPath(); ctx.moveTo(x0, c - a.y * k); ctx.lineTo(x1, c - a.y * k); ctx.stroke();
                pos = [x1, c - a.y * k];
                continue;
            }
            // semicirconferenza nella D dal lato a.dir: ingresso in (0, y), centro in (0, cy)
            ctx.beginPath();
            const passi = 60;
            for (let j = 0; j <= Math.round(passi * frazione); j++) {
                const f = Math.PI * j / passi;
                const x = x0 + a.dir * a.r * Math.sin(f) * k;
                const y = c - (a.cy + (a.y - a.cy) * Math.cos(f)) * k;
                if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                pos = [x, y];
            }
            ctx.stroke();
        }
        if (pos) {
            ctx.fillStyle = '#AA0000';
            ctx.beginPath(); ctx.arc(pos[0], pos[1], 6, 0, 2 * Math.PI); ctx.fill();
        }

        const a = archi[Math.min(arco, archi.length - 1)];
        const T = 2 * Math.PI * part.m / (part.q * B);
        const Kmax = Math.pow(part.q * B * R_D, 2) / (2 * part.m);
        lettura.textContent = 'giri completati: ' + Math.floor(Math.min(arco, archi.length - 1) / 2)
            + '   energia: ' + S.num(a.K / QE / 1e6, 2) + ' MeV   v = ' + S.num(a.vel / 1e6, 2) + '·10⁶ m/s'
            + '\nogni mezzo giro dura sempre T/2 = πm/(qB) = ' + tempo(T / 2) + ': la frequenza della ddp alternata è f = ' + S.num(1 / T / 1e6, 2) + ' MHz'
            + '\nenergia in uscita (raggio delle D ' + S.num(R_D * 100, 0) + ' cm): ' + S.num(Kmax / QE / 1e6, 2) + ' MeV';

        // ogni arco nello stesso tempo
        avanz += archi[arco] && archi[arco].uscita ? 0.03 : 0.05;
        if (avanz >= 1) {
            if (arco < archi.length - 1) { arco++; avanz = 0; } else avanz = 1;
        }
    }

    function ricomincia() {
        fase = 0;
        if (modo === 'ciclotrone') preparaCiclotrone();
    }

    let ultimo = 0;
    function ciclo(t) {
        if (t - ultimo > 16) {
            ultimo = t;
            if (modo === 'orbita') disegnaOrbita(); else disegnaCiclotrone();
        }
        requestAnimationFrame(ciclo);
    }

    aggiornaComandi();
    ricomincia();
    requestAnimationFrame(ciclo);
});
