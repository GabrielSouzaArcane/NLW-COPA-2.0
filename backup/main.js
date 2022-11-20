function createGame(player1, hour, player2){
  return`
<li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
</li>
  
  `
}

function createCard(date, day, games){
  return `
  <div class="cards">
                <h2>${date} <span>${day}</span></h2>

                <ul>
                   
                  ${games}
                </ul>

            </div>
`
}

document.querySelector('#app').innerHTML = `
 <header>
            <img src="./assets/logo.svg" alt="Logo da NLW">
</header>
        <main id="card">
         ${createCard('24/11', 'quinta', createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'korea') +  createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia'))}

         ${createCard('28/11', 'segunda',createGame('cameroon', '07:00', 'serbia') + createGame('korea', '10:00', 'ghana') + createGame('brazil', '13:00', 'switzerland') +createGame('portugal', '16:00', 'uruguay'))} 

         ${createCard('02/12', 'sexta', createGame('korea', '12:00' , 'portugal') + createGame('ghana', '12:00' , 'uruguay') + createGame('switzerland', '16:00' , 'serbia') + createGame('brazil', '16:00' , 'cameroon'))} 

        </main> 

` 
