// Lista degli utenti
let users = [
    { firstName: 'Luca', lastName: 'Maraschi', isAmbassador: true },
    { firstName: 'Marco', lastName: 'Brolli', isAmbassador: false },
    { firstName: 'Giulia', lastName: 'Costix', isAmbassador: true },
    { firstName: 'Anna', lastName: 'Basic', isAmbassador: false }
  ];
  
  // Funzione per calcolare il totale del carrello
  function calculateCartTotal(cartItems, user, shippingCost) {
    let totalCost = 0;
    
    // Calcola il totale dei prodotti
    for (let item of cartItems) {
      totalCost += item.price;
    }
  
    // Se l'utente è un ambassador, applica uno sconto del 30%
    if (user.isAmbassador) {
      totalCost = totalCost * 0.7;
    }
  
    // Se il totale supera 100€, la spedizione è gratuita
    if (totalCost > 100) {
      shippingCost = 0;
    }
  
    // Aggiungi il costo della spedizione
    totalCost += shippingCost;
  
    return totalCost;
  }
  
  // Esegui il ciclo sugli utenti per calcolare e stampare i totali
  for (let user of users) {
    console.log(`${user.firstName} ${user.lastName} è ${user.isAmbassador ? '' : 'non '}un ambassador`);
  
    // Dati del carrello di esempio
    let cartItems = [
      { name: 'T-shirt', price: 25 },
      { name: 'Jeans', price: 40 },
      { name: 'Sneakers', price: 50 }
    ];
  
    // Costo di spedizione di esempio
    let shippingCost = 10;
  
    // Calcola il totale
    let total = calculateCartTotal(cartItems, user, shippingCost);
  
    // Stampa il totale del carrello
    console.log(`${user.firstName} ha un totale di: €${total.toFixed(2)}`);
  }
  
  // Estrai e stampa solo gli ambassador
  console.log("\nLista degli Ambassador:");
  for (let user of users) {
    if (user.isAmbassador) {
      console.log(`${user.firstName} ${user.lastName}`);
    }
  }
  