// Richiesta Nome
let fistName = prompt('Inserisci il tuo nome');

console.log(fistName);

// Richiesta conognome
let lastName = prompt(`Ciao ${fistName}, inserici il tuo cognome`);

console.log(lastName);


// colore preferito
let color = prompt('Inserisci il tuo colore preferito');
console.log(color);

// Massimo per Random
let max = prompt('Inserisci il massimo del numero casuale');
console.log(max);

// Numero Random
let rndNum = Math.floor(Math.random()*max)
console.log(rndNum);

// stapa del testo
document.getElementById('password').innerHTML = `${fistName}${lastName}${color}${rndNum}`