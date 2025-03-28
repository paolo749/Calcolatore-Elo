let eloIniziale = document.querySelector('.js-initial-elo')
let eloAvversario = document.querySelector('.js-opponent-elo')
let k = document.querySelector('.js-k')
let risultato = document.querySelector('.js-result')

function calcolaElo(eloIniziale, eloAvversario, k, risultato) {

  if (risultato.value === 'vittoria') {
    risultato = 1;
  } else if (risultato.value === 'patta') {
    risultato = 0.5;
  } else if (risultato.value === 'sconfitta') {
    risultato = 0;
  } else if (risultato.value === 'default') {
    alert('Inserire un risultato')
  }

  let punteggioAtteso = 1 / (1 + Math.pow(10, (eloAvversario.value - eloIniziale.value) / 400))
  const variazione = k.value * (risultato - punteggioAtteso)

  eloIniziale = eloIniziale.value;
  let nuovoElo = Number(eloIniziale) + variazione;
  document.querySelector('.js-new-elo')
    .innerHTML = `Nuovo Elo: ${nuovoElo}`

  return variazione;
}

function updateResult(variazione) {
  document.querySelector('.js-final-elo')
  .innerHTML = `Variazione: ${Math.round(variazione)}`;
}

document.querySelector('.js-calculate-button')
.addEventListener('click', () => {  
  updateResult(calcolaElo(eloIniziale, eloAvversario, k, risultato));
})



