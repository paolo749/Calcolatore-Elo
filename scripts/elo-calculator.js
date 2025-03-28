const eloIniziale = document.querySelector('.js-initial-elo')
const eloAvversario = document.querySelector('.js-opponent-elo')
const k = document.querySelector('.js-k')
const risultato = document.querySelector('.js-result')

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

  return variazione;
}

document.querySelector('.js-calculate-button')
  .addEventListener('click', () => {  
    updateResult(calcolaElo(eloIniziale, eloAvversario, k, risultato));
  })

function updateResult(variazione) {
  document.querySelector('.js-final-elo')
  .innerHTML = `Variazione: ${Math.round(variazione)}`;
}







// Formule (temp)
/*
  Variazione = K * (Risultato - Punteggio Atteso)

  Punteggio Atteso = (1 / 1 + 10**((Punteggio Avversario - Punteggio Persona)) / 400
*/