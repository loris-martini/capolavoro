(function() {
  // Ottieni il parametro 'crypto' dall'URL
  const urlParams = new URLSearchParams(window.location.search);
  const cryptoSymbol = urlParams.get('crypto'); // Ottiene il valore del parametro 'crypto'
  
  // Impostazione di default se il parametro non è presente
  if (!cryptoSymbol) {
    document.getElementById('crypto-title').textContent = "Errore: nessuna criptovaluta selezionata";
    document.getElementById('crypto-description').textContent = "Per favore, scegli una criptovaluta.";
    return;
  }

  // Funzione per modificare dinamicamente il contenuto
  function updateCryptoInfo(symbol) {
    let title = '';
    let description = '';
    let chartSymbol = '';

    //Doge
    const dogecoinText = `
    <h2>Cos’è Dogecoin?</h2>
    <br>
    <p>Dogecoin è una criptovaluta nata come uno scherzo nel 2013, ma che ha rapidamente guadagnato una grande popolarità grazie alla sua comunità vivace e al suo approccio amichevole al mondo delle criptovalute. Il logo di Dogecoin è ispirato al famoso meme di un cane Shiba Inu, rendendola una delle criptovalute più riconoscibili al mondo.</p>
    <br>
    <h3>Origini e Creatori:</h3>
    <p>Dogecoin è stata creata da <strong>Billy Markus</strong> e <strong>Jackson Palmer</strong>, due sviluppatori che volevano realizzare una criptovaluta divertente e accessibile a tutti, in contrasto con la serietà di Bitcoin e delle altre monete digitali. Il progetto si basava sul codice di Litecoin, una delle principali criptovalute dell’epoca.</p>
    <br>
    <h3>Caratteristiche Principali:</h3>
    <ul>
      <li><strong>Velocità e Costi di Transazione</strong>: Le transazioni in Dogecoin sono più rapide e meno costose rispetto a molte altre criptovalute, rendendola ideale per microtransazioni, donazioni e piccoli pagamenti.</li>
      <li><strong>Fornitura Illimitata</strong>: A differenza di Bitcoin, che ha una fornitura massima di 21 milioni di monete, Dogecoin non ha un limite massimo. Vengono emessi circa 5 miliardi di Dogecoin all’anno, il che mantiene un’inflazione costante.</li>
      <li><strong>Comunità e Uso</strong>: Dogecoin è famosa per la sua comunità solidale e creativa, che ha sostenuto numerosi progetti filantropici e raccolte fondi.</li>
    </ul>
    <br>
    <h3>La Popolarità Moderna:</h3>
    <p>Nel 2021, Dogecoin ha visto un enorme aumento di interesse grazie a figure di spicco come <strong>Elon Musk</strong>, che ha pubblicato tweet a favore della criptovaluta, definendola “la cripto del popolo”. Questo ha portato a un boom del prezzo e a una maggiore attenzione mediatica.</p>
    `;

    //Pepe
    const pepeCoinText = `
    <h2>Cos'è PepeCoin?</h2>
    <p>PepeCoin è una criptovaluta ispirata al famoso meme di "Pepe the Frog", una figura iconica della cultura di internet. Creata inizialmente come un progetto scherzoso, PepeCoin si è rapidamente trasformata in una criptovaluta conosciuta all'interno delle comunità online, grazie alla sua associazione con uno dei meme più riconoscibili al mondo.</p>
    <br>
    <h3>Origini di PepeCoin</h3>
    <p>PepeCoin è stata lanciata come una moneta meme (o "meme coin") per celebrare l'umorismo e la creatività della cultura digitale. Seguendo il modello di criptovalute come Dogecoin, PepeCoin mira a offrire una piattaforma accessibile e divertente per le persone interessate al mondo delle criptovalute. La sua immagine di brand si basa su un approccio leggero e giocoso, che attrae sia gli appassionati di meme che coloro che cercano una nuova opportunità di investimento.</p>
    <br>
    <h3>Caratteristiche di PepeCoin</h3>
    <ul>
      <li><b>Fornitura Limitata</b>: A differenza di alcune criptovalute con inflazione continua, PepeCoin spesso adotta una fornitura limitata per creare scarsità e aumentare il valore percepito.</li>
      <li><b>Velocità di Transazione</b>: Le transazioni con PepeCoin sono rapide e con commissioni generalmente basse, rendendola ideale per scambi di piccola entità.</li>
      <li><b>Comunità e Cultura</b>: PepeCoin è supportata da una comunità entusiasta che crea contenuti, meme e iniziative per promuovere il progetto. Questa comunità è una delle sue forze principali, rendendola un fenomeno culturale oltre che finanziario.</li>
    </ul>
    <br>
    <h3>PepeCoin e il Mondo delle Criptovalute</h3>
    <p>PepeCoin si distingue nel mercato delle criptovalute per il suo approccio basato sull'umorismo e sulla cultura di internet. Come altre meme coin, il suo valore può essere volatile e dipendere in gran parte dal coinvolgimento della comunità e dall'hype generato sui social media. Tuttavia, questo stesso elemento di imprevedibilità è ciò che rende PepeCoin attraente per alcuni investitori e appassionati.</p>
    `;

    //Pengu
    const penguCoinText = `
    <h2>Cos'è PenguCoin?</h2>
    <p>PenguCoin è una criptovaluta emergente che nasce come parte della crescente tendenza delle "meme coin", criptovalute ispirate a meme e cultura popolare. Il suo simbolo è un simpatico pinguino, che riflette l'elemento di umorismo e leggerezza che spesso caratterizza queste criptovalute. Sebbene inizialmente possa sembrare un progetto umoristico, PenguCoin ha guadagnato un seguito grazie alla sua comunità attiva e al suo potenziale nel mercato delle criptovalute.</p>
    <br>
    <h3>Origini di PenguCoin</h3>
    <p>PenguCoin è stata lanciata con l'intenzione di unire l'intrattenimento della cultura internet con la funzionalità delle criptovalute. Come altre meme coin (ad esempio Dogecoin e Shiba Inu), PenguCoin è diventata rapidamente popolare tra gli appassionati di criptovalute, attirando l'attenzione di un pubblico giovane e di tendenze, interessato a esplorare nuovi investimenti digitali.</p>
    <br>
    <h3>Caratteristiche di PenguCoin</h3>
    <ul>
      <li><b>Fornitura Limitata</b>: PenguCoin, come molte altre criptovalute meme, spesso ha una fornitura limitata. Questo può aiutare a creare un senso di scarsità, aumentando il valore percepito della moneta man mano che cresce l'interesse della comunità.</li>
      <li><b>Supporto della Comunità</b>: La forza principale di PenguCoin risiede nella sua comunità di appassionati, che continua a crescere attraverso contenuti creativi, meme e discussioni sui social media. La partecipazione attiva dei suoi sostenitori è cruciale per mantenere alta l'attenzione su questa criptovaluta.</li>
      <li><b>Transazioni Veloci e Economiche</b>: PenguCoin si distingue per le sue transazioni rapide e le basse commissioni, il che la rende una criptovaluta interessante per gli scambi di piccole quantità o per l'uso in micropagamenti.</li>
    </ul>
    <br>
    <h3>PenguCoin e il Mercato delle Criptovalute</h3>
    <p>PenguCoin si distingue per la sua natura giocosa e informale, ma è anche una parte integrante di un fenomeno più ampio: le meme coin. Sebbene il suo valore possa essere volatile e dipenda in gran parte dall'entusiasmo della sua comunità e dai trend sui social media, molte persone trovano in PenguCoin una possibilità di investimento più "leggera" e divertente rispetto a criptovalute più tradizionali come Bitcoin ed Ethereum.</p>
  `;

  const piCoinText = `<h2>Informazioni su PiCoin</h2>
    <p>PiCoin, spesso associato a Pi Network, è una criptovaluta che mira a rendere il mining accessibile a tutti attraverso dispositivi mobili.<br>
    L'obiettivo principale del progetto è creare una piattaforma decentralizzata che consenta agli utenti di minare PiCoin senza consumare eccessive risorse energetiche, 
    differenziandosi così dal mining tradizionale di criptovalute come Bitcoin.</p>
    <br>
    <h3>Stato Attuale e Valore di PiCoin</h3>
    <p>Al momento, PiCoin non è quotato su exchange pubblici riconosciuti, il che significa che non ha un valore di mercato ufficiale.<br>
    Secondo Changelly, a partire dall'inizio del 2024, PiCoin è un token non quotato in borsa.<br>
    Tuttavia, alcune piattaforme riportano dati sul prezzo di PiCoin; ad esempio, Coinbase indica un prezzo di circa 46,25 € per PI, con un volume di scambi nelle 24 ore di 241.402,63 €.<br>
    È importante notare che questi dati potrebbero non riflettere accuratamente il valore reale di PiCoin, data la sua non quotazione ufficiale.</p>
    <br>
    <h3>Previsioni Future</h3>
    <p>Le previsioni sul valore futuro di PiCoin variano significativamente.<br>
    Alcuni analisti suggeriscono che, una volta quotato, il prezzo potrebbe iniziare da valori molto bassi, come 0,007 $, mentre altri ipotizzano che potrebbe raggiungere valori più alti, come 54,08 $, entro il 2025.<br>
    Tuttavia, queste stime sono speculative e dipendono da vari fattori, tra cui l'adozione da parte degli utenti e lo sviluppo della rete.</p>
    <br>
    <h3>Considerazioni sulla Sicurezza</h3>
    <p>Sono state sollevate preoccupazioni riguardo alla raccolta di dati personali da parte di Pi Network, in particolare attraverso processi di verifica dell'identità che richiedono documenti sensibili.<br>
    Secondo un articolo su Binance Square, gli utenti che forniscono dati sensibili come ID rilasciati dal governo si espongono a potenziali furti di identità, frodi o uso improprio delle loro informazioni personali.<br>
    È essenziale che gli utenti siano consapevoli dei rischi associati alla condivisione di informazioni personali e valutino attentamente la legittimità e la trasparenza del progetto.</p>
  `;
    
    switch(symbol) {
      case 'PEPEUSD':
        title = 'PepeCoin (USD)';
        description = pepeCoinText;
        chartSymbol = 'CRYPTO:PEPEUSD';
        break;
      case 'DOGEUSD':
        title = 'Dogecoin (USD)';
        description = dogecoinText;
        chartSymbol = 'CRYPTO:DOGEUSD';
        break;
      case 'PENGUSDT':
        title = 'PenguCoin (USDT)';
        description = penguCoinText;
        chartSymbol = 'MEXC:PENGUSDT'; 
        break;
      case 'PIUSDT':
        title = 'PiCoin (USDT)';
        description = piCoinText;
        chartSymbol = 'HTX:PIUSDT';
        break;
      default:
        title = `${symbol}`; //title = 'Errore: criptovaluta non riconosciuta';
        description = ''; //description = 'Non abbiamo informazioni per questa criptovaluta.';
        chartSymbol = `CRYPTO:${symbol}`;
    }

    // Modifica il contenuto HTML
    document.getElementById('crypto-title').textContent = title;
    document.getElementById('crypto-description').innerHTML = description;

    // Carica il grafico se il simbolo è valido
    if (chartSymbol) {
      loadChart(chartSymbol);
    }
  }

  // Funzione per caricare il grafico
  function loadChart(symbol) {
    // Crea il tag script per TradingView
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol, // Usa il simbolo dinamico
      interval: "240",
      timezone: "Europe/Vienna",
      theme: "dark",
      style: "1",
      locale: "it",
      allow_symbol_change: false,
      details: true,
      hotlist: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });

    // Aggiungi il widget al contenitore del grafico
    document.getElementById('crypto-chart').appendChild(script);
  }

  // Chiamata alla funzione per aggiornare le informazioni in base al parametro 'crypto'
  updateCryptoInfo(cryptoSymbol);
})();
