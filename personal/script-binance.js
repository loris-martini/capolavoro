const Binance = require('binance-api-node').default;

// Inizializza il client con le tue chiavi API
const client = Binance({
  apiKey: 'ECWHxJJ5JpIcbDaULbPkQjNz061TELn3hYPWNA3czljQG4oK8Se9XIC7iGvqIvaR',
  apiSecret: 'FW3Han4IKTw1lhvQTkNXZS2ky0QJgJMDb8055xzG0YfA5V3kqfPZ95yoTNuiffCC',
});

// Recupera informazioni sull'account
async function getAccountInfo() {
  try {
    const accountInfo = await client.accountInfo();
    console.log(accountInfo);
    return accountInfo;
  } catch (error) {
    console.error('Errore nel recuperare le informazioni:', error);
  }
}

// Esegui la funzione
getAccountInfo();
