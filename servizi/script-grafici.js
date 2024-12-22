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
    
    // Esegui modifiche basate sul parametro 'crypto'
    switch(symbol) {
      case 'PEPEUSD':
        title = 'PepeCoin (USD)';
        description = 'PepeCoin è una criptovaluta meme che sta guadagnando popolarità.';
        chartSymbol = 'CRYPTO:PEPEUSD';
        break;
      case 'DOGEUSD':
        title = 'Dogecoin (USD)';
        description = 'Dogecoin è una criptovaluta nata come una parodia, ma ora molto apprezzata.';
        chartSymbol = 'CRYPTO:DOGEUSD';
        break;
      case 'PENGUSDT':
        title = 'PenguCoin (USDT)';
        description = 'PENGU';
        chartSymbol = 'MEXC:PENGUSDT'; 
        break;
      default:
        title = 'Errore: criptovaluta non riconosciuta';
        description = 'Non abbiamo informazioni per questa criptovaluta.';
        chartSymbol = '';
    }

    // Modifica il contenuto HTML
    document.getElementById('crypto-title').textContent = title;
    document.getElementById('crypto-description').textContent = description;

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
