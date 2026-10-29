+++
title = 'Simulatore di campo elettrico'
description = 'Cariche fisse e mobili in un campo uniforme: linee di campo, equipotenziali, forze.'
date = 2026-10-29
gruppo = 'didattici'
weight = 60
+++

Il simulatore mostra il campo elettrico generato da un campo uniforme esterno e da una o più cariche puntiformi, insieme alle linee equipotenziali (tratteggiate in verde).

Le cariche possono essere di due tipi:

* **fisse** (in giallo, con l'asterisco): generano campo e non si muovono;
* **mobili** (rosse se positive, blu se negative): non generano campo, ma subiscono la forza del campo uniforme e delle cariche fisse.

Sulla carica mobile selezionata compare il vettore forza (in rosso) oppure il vettore velocità (in viola).

{{< strumento "campo-elettrico" >}}

<h2>Come si usa</h2>

* Un click su una carica la seleziona; trascinandola la si sposta (a simulazione ferma).
* Un click in un punto vuoto sposta lì la carica selezionata.
* Con *Fissa* / *Libera* si cambia il tipo della carica selezionata, con il cursore *Carica sel.* il suo valore.
* *Avvia* fa partire il moto delle cariche mobili.

Le grandezze sono in unità arbitrarie: la costante vale $k = 5$ e nel moto è presente un piccolo attrito, così che le cariche non schizzino via all'infinito.

<h2>Da provare</h2>

1. Con una sola carica mobile e il campo uniforme acceso, osserva la traiettoria: che moto è?
2. Fissa una carica positiva al centro e lasciane una negativa libera vicino: cosa succede? E con due cariche positive?
3. Metti due cariche fisse di segno opposto (un dipolo) e guarda come si dispongono le equipotenziali rispetto alle linee di campo.

Per la teoria: [Introduzione al campo elettrico]({{< ref "/pages/pyphysics/electromagnetism/efield_intro" >}}) e [Campo elettrico di cariche puntiformi]({{< ref "/pages/pyphysics/electromagnetism/efield_punti" >}}).
