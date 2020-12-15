var km = prompt('Inserisci il numero di chilometri che devi percorrere');
var age = prompt('Scopri se puoi avere uno sconto inserendo qui la tua età.');

// ISNAN
if (isNaN(km) || isNaN(age)) {
  alert('Il primo oppure il secondo valore sono errati. Riprova.')
}

//PARESINT
km = parseInt(km)
age = parseInt(age)

//RISULTATO E SCONTO
var costo = (km) * 0.21;
var costoFinale = costo.toFixed(2)
console.log ('il prezzo del biglietto per ' + km + 'km, equivale a ' + costo + '€')

if (age < 18) {
  var costoUnder = (costo * 0.80)
  var costoUnderFinale = costoUnder.toFixed(2)
  console.log ('il prezzo con lo sconto per i minorenni equivale a '+ costoUnderFinale + '€')
  var prezzoFinale = document.getElementById('prezzo-finale')
  prezzoFinale.innerText = 'Il prezzo del tuo biglietto è di ' + costoUnderFinale + '€'
} else if (age > 65) {
  var costoOver = (costo * 0.60)
  var costoOverFinale = costoOver.toFixed(2)
  console.log ('il prezzo con lo sconto anziani equivale a ' + costoOverFinale + '€')
  var prezzoFinale = document.getElementById('prezzo-finale')
  prezzoFinale.innerText = 'Il prezzo del tuo biglietto è di ' + costoOverFinale + '€'
} else {
  var prezzoFinale = document.getElementById('prezzo-finale')
  prezzoFinale.innerText = 'Il prezzo del tuo biglietto è di ' + costoFinale + '€'
}
