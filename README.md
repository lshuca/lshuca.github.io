# Sito Web Didattico con Hugo

Questo repository contiene un sito web statico generato con [Hugo](https://gohugo.io), un framework per la creazione di siti web veloci e moderni. Il sito è progettato per ospitare materiali didattici, esercizi e risorse per l'insegnamento della matematica e della fisica.

## Struttura del Repository

### 1. **Archetypes**
   - **default.md**: Template predefinito per la creazione di nuovi contenuti.

### 2. **Assets**
   - Contiene risorse statiche come immagini, fogli di stile e script.

### 3. **Content**
   - **\_index.md**: Pagina principale del sito.
   - **Pages**: Contiene le pagine del sito, suddivise in sezioni:
     - **Post**: Articoli e post.
     - **Pymath**: Materiali didattici per la matematica.
       - **Cartesian**: Argomenti relativi al piano cartesiano, come circonferenze, parabole e rette.
       - **Intro_cart.md**: Introduzione al piano cartesiano.
       - **Parabola**: Teoria ed esercizi sulle parabole.
       - **Rette**: Teoria ed esercizi sulle rette.
     - **Pyphysics**: Materiali didattici per la fisica.
       - **Equilibrium**: Equilibrio e forze.
       - **Vectors**: Teoria ed esercizi sui vettori.

### 4. **Data**
   - Contiene dati strutturati utilizzati nel sito.

### 5. **Hugo.toml**
   - File di configurazione principale per Hugo.

### 6. **I18n**
   - File di traduzione per il supporto multilingue.

### 7. **Layouts**
   - **index.html**: Layout della pagina principale.
   - **Shortcodes**: Componenti riutilizzabili per l'inserimento di grafici, diagrammi e altro.

### 8. **Public**
   - Contiene i file generati da Hugo, pronti per il deployment.
   - **CSS**: Fogli di stile per il sito.
   - **Font**: Font utilizzati nel sito.
   - **JS**: Script JavaScript.
   - **Pages**: Pagine generate.
   - **Plotly**: File JSON per grafici Plotly.
   - **Static**: Immagini e altre risorse statiche.
   - **Tags**: Pagine per i tag.

### 9. **Resources**
   - Risorse generate automaticamente da Hugo.

### 10. **Static**
   - Contiene risorse statiche come immagini, script e file JSON.

### 11. **Themes**
   - **hugo-chart-master**: Tema per l'integrazione di grafici.
   - **hugo-theme-texify**: Tema personalizzato per la visualizzazione di contenuti matematici.

## Requisiti

Hugo: Versione estesa (con supporto per SCSS).

Node.js: Per l'utilizzo di strumenti come Plotly e Chart.js.

## Licenza

Questo repository è distribuito sotto la licenza MIT. Sentiti libero di utilizzare, modificare e distribuire il contenuto secondo i termini della licenza.
Contatti

