# La scienza ha un cuore antico

Sorgenti del sito [lshuca.github.io](https://lshuca.github.io): appunti, esercizi e strumenti di matematica e fisica per le classi dell'IIS Montessori Repetti.

Il sito è fatto con [Hugo](https://gohugo.io) e il tema [TeXify](https://github.com/queensferryme/hugo-theme-texify). Ogni push su `main` lo ricostruisce e lo pubblica tramite GitHub Actions (`.github/workflows/hugo.yaml`).

## In locale

Serve Hugo extended, la stessa versione indicata nel workflow (0.165.0).

```sh
hugo server
```

e poi http://localhost:1313. La cartella `public/` è generata e non va committata.

## Struttura

```
content/
  _index.md              home
  pages/pymath/          appunti di matematica (indice: pymath.md)
  pages/pyphysics/       appunti di fisica (indice: pyphysics.md)
  strumenti/             una pagina per ogni simulazione
  vademecum/             domande di autovalutazione (matematica/ e fisica/)
  nnlc/                  una pagina per ogni edizione della Notte Nazionale
  compiti/               bozza, non pubblicata (draft = true)
layouts/                 modifiche al tema, che resta intatto in themes/
static/
  css/sito.css           aggiunte allo stile del tema
  js/strumenti/          codice delle simulazioni
  nnlc/<anno>/           pdf delle varie edizioni
  static/img/            immagini delle pagine
```

## Aggiungere una pagina di appunti

Si crea il file nella cartella dell'argomento, con titolo e data:

```toml
+++
title = 'Titolo'
date = 2026-10-29T10:00:00+01:00
+++
```

e lo si collega dall'indice (`pymath.md` o `pyphysics.md`) con `{{< ref "/pages/..." >}}`. Le formule si scrivono tra `$...$` e `$$...$$`; per il codice html (canvas, script) si usa lo shortcode `rawhtml`.

## Aggiungere uno strumento

1. Il codice va in `static/js/strumenti/<nome>.js` e parte da

   ```js
   Strumenti.quando('strumento-<nome>', function (box) {
       // ...
   });
   ```

   Le funzioni comuni (cursori, pulsanti, canvas, frecce) sono in `comune.js`.
2. La pagina va in `content/strumenti/<nome>.md` con `title`, `description` e `weight` (ordine nell'elenco), e lo strumento si inserisce con `{{< strumento "<nome>" >}}`.

## Vademecum

Le domande di autovalutazione stanno in `content/vademecum/`, una pagina per argomento divisa tra `matematica/` e `fisica/`. Nel front matter:

```toml
+++
title = 'Parabola'
disciplina = 'matematica'
anno = 3            # classe sotto cui compare nell'indice
classi = [3]        # classi indicate sotto il titolo
weight = 40         # ordine dentro la classe
ripasso = ['/pages/pymath/cartesian/parabola/par_intro']
draft = true        # finché è in bozza non viene pubblicata
+++
```

Le domande sono un elenco numerato, con eventuali sottodomande puntate: accanto a ogni domanda numerata compare la casella "so rispondere". Le bozze si vedono in locale con `hugo server -D`.

## Aggiungere un'edizione della NNLC

Si crea `content/nnlc/<anno>.md` (vedi le edizioni già presenti) e si mettono i pdf in `static/nnlc/<anno>/`. Il `weight` più basso va all'edizione più recente, che compare per prima. La tendina NNLC del menu si aggiorna da sola.

## Compiti degli anni passati

La sezione `content/compiti/` è pronta ma non pubblicata: per pubblicarla basta togliere `draft = true` da `_index.md`, aggiungere le pagine come per la NNLC e la voce nel menu in `hugo.toml` (le tendine si fanno con `parent`, dando a ogni voce un `identifier` diverso).

## Licenza

GPL v3, vedi `LICENSE`.
