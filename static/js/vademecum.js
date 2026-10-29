// vademecum: domande segnate come sapute, salvate nel browser

(function () {

    function leggi(k) {
        try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; }
    }

    function scrivi(k, v) {
        try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { }
    }

    // pagina di un argomento
    const art = document.querySelector('.vademecum[data-vademecum]');
    if (art) {
        const chiave = 'vademecum:' + art.dataset.vademecum;
        const domande = art.querySelectorAll(':scope > ol > li');
        let stato = leggi(chiave) || {};
        if (!domande.length) return;

        const riepilogo = document.createElement('p');
        riepilogo.className = 'vademecum-riepilogo';
        const testo = document.createElement('span');
        const azzera = document.createElement('button');
        azzera.type = 'button';
        azzera.textContent = 'Azzera';
        riepilogo.append(testo, ' ', azzera);
        art.prepend(riepilogo);

        function aggiorna() {
            const n = Object.values(stato).filter(Boolean).length;
            testo.textContent = 'Domande a cui sai rispondere: ' + n + ' su ' + domande.length;
            scrivi(chiave, stato);
            scrivi(chiave + ':totale', domande.length);
        }

        domande.forEach((li, i) => {
            const c = document.createElement('input');
            c.type = 'checkbox';
            c.className = 'vademecum-casella';
            c.title = 'So rispondere';
            c.setAttribute('aria-label', 'So rispondere alla domanda ' + (i + 1));
            c.checked = !!stato[i];
            c.addEventListener('change', () => {
                stato[i] = c.checked;
                li.classList.toggle('saputa', c.checked);
                aggiorna();
            });
            li.classList.toggle('saputa', c.checked);
            li.prepend(c);
        });

        azzera.addEventListener('click', () => {
            stato = {};
            art.querySelectorAll('.vademecum-casella').forEach(c => { c.checked = false; });
            domande.forEach(li => li.classList.remove('saputa'));
            aggiorna();
        });

        aggiorna();
    }

    // indice: avanzamento per argomento
    document.querySelectorAll('.vademecum-indice a[data-vademecum]').forEach(a => {
        const chiave = 'vademecum:' + a.dataset.vademecum;
        const stato = leggi(chiave);
        const tot = leggi(chiave + ':totale');
        if (!stato || !tot) return;
        const n = Object.values(stato).filter(Boolean).length;
        const s = a.parentNode.querySelector('.vademecum-stato');
        if (s) s.textContent = '(' + n + ' su ' + tot + ')';
    });
})();
