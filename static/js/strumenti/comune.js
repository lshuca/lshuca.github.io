// funzioni comuni agli strumenti

const Strumenti = (function () {

    const ROSSO = '#AA0000';
    const FONT = "'Latin Modern Roman', 'Times New Roman', serif";

    function crea(tag, attr, padre) {
        const el = document.createElement(tag);
        for (const k in attr || {}) {
            if (k === 'testo') el.textContent = attr[k];
            else el.setAttribute(k, attr[k]);
        }
        if (padre) padre.appendChild(el);
        return el;
    }

    // canvas nitido anche su schermi ad alta densità
    function canvas(padre, larg, alt, etichetta) {
        const c = crea('canvas', { role: 'img', 'aria-label': etichetta || '' }, padre);
        const dpr = window.devicePixelRatio || 1;
        c.width = larg * dpr;
        c.height = alt * dpr;
        const ctx = c.getContext('2d');
        ctx.scale(dpr, dpr);
        return { el: c, ctx: ctx, larg: larg, alt: alt };
    }

    function cursore(padre, testo, min, max, passo, val, formato, cb) {
        const l = crea('label', {}, padre);
        crea('span', { testo: testo }, l);
        const r = crea('input', { type: 'range', min: min, max: max, step: passo }, l);
        r.value = val;
        const o = crea('output', {}, l);
        const agg = () => { o.textContent = formato(Number(r.value)); };
        r.addEventListener('input', () => { agg(); cb(Number(r.value)); });
        agg();
        return {
            el: r,
            get valore() { return Number(r.value); },
            imposta(v) { r.value = v; agg(); }
        };
    }

    function pulsante(padre, testo, cb) {
        const b = crea('button', { type: 'button', testo: testo }, padre);
        b.addEventListener('click', cb);
        return b;
    }

    // numeri all'italiana
    function num(x, cifre) {
        return x.toFixed(cifre).replace('.', ',');
    }

    // freccia da (x0, y0) a (x1, y1) in pixel
    function freccia(ctx, x0, y0, x1, y1, colore, spessore, punta) {
        const dx = x1 - x0, dy = y1 - y0;
        const l = Math.hypot(dx, dy);
        if (l < 0.5) return;
        const p = Math.min(punta || 8, l * 0.5);
        const ux = dx / l, uy = dy / l;
        ctx.strokeStyle = colore;
        ctx.fillStyle = colore;
        ctx.lineWidth = spessore || 1.5;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1 - ux * p * 0.6, y1 - uy * p * 0.6);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 - ux * p - uy * p * 0.45, y1 - uy * p + ux * p * 0.45);
        ctx.lineTo(x1 - ux * p + uy * p * 0.45, y1 - uy * p - ux * p * 0.45);
        ctx.closePath();
        ctx.fill();
    }

    // posizione del puntatore in coordinate css del canvas
    function puntatore(c, ev) {
        const r = c.el.getBoundingClientRect();
        return {
            x: (ev.clientX - r.left) * c.larg / r.width,
            y: (ev.clientY - r.top) * c.alt / r.height
        };
    }

    function quando(id, avvio) {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = '';
        avvio(el);
    }

    return { ROSSO, FONT, crea, canvas, cursore, pulsante, num, freccia, puntatore, quando };
})();
