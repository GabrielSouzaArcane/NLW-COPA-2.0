function createGame(player1, hour, player2){
  return`
<li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
</li>
  
  `
}
let delay = 0;
function createCard(date, day, grop, games){
  delay = delay + 2;
  return `
  <div class="cards" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2><br/><h2><span>${grop}</span></h2>

                <ul>
                   
                  ${games}
                </ul>

            </div>
`
}

document.querySelector('#card').innerHTML = 

          createCard('20/11', 'domingo', 'grupo a', createGame('qatar', '13:00', 'ecuador')) +

          createCard('21/11', 'segunda', 'grupo b/a/b', createGame('england', '10:00', 'iran') + createGame('senegal', '13:00' , 'netherlands',  ) +  createGame('eua', '16:00', 'wales')) +

          createCard('22/11', 'terça', 'grupo c/d/c/d', createGame('argentina', '07:00', 'saudi') + createGame('denmark', '10:00', 'tunisia') +  createGame('mexico', '13:00', 'polond') +  createGame('france', '16:00', 'australia')) + 
         
          createCard('23/11', 'quarta', 'grupo f/e/e/f', createGame('marocco', '07:00', 'croatia') + createGame('germany', '10:00', 'japan') +  createGame('spain', '13:00', 'costarica') +  createGame('belgium', '16:00', 'canada')) +
          
         createCard('24/11', 'quinta', 'grupo g/h/h/g', createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'korea') +  createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia')) +

         createCard('25/11', 'sexta', 'grupo b/a/a/b', createGame('wales', '07:00', 'iran') + createGame('qatar', '10:00', 'senegal') +  createGame('netherlands', '13:00', 'ecuador') + createGame('england', '16:00', 'eua')) +

         createCard('26/11', 'sábado', 'grupo d/c/d/c', createGame('tunisia', '07:00', 'australia') + createGame('polond', '10:00', 'saudi') +  createGame('france', '13:00', 'denmark') + createGame('argentina', '16:00', 'mexico')) +
        
         createCard('27/11', 'domingo', 'grupo e/f/f/e', createGame('japan', '07:00', 'costarica') + createGame('belgium', '10:00', 'marocco') +  createGame('croatia', '13:00', 'canada') + createGame('spain', '16:00', 'germany')) +

         createCard('28/11', 'segunda', 'grupo g/h/g/h',createGame('cameroon', '07:00', 'serbia') + createGame('korea', '10:00', 'ghana') + createGame('brazil', '13:00', 'switzerland') +createGame('portugal', '16:00', 'uruguay')) +

         createCard('29/11', 'terça', 'grupo a/a/b/b',createGame('ecuador', '12:00', 'senegal') + createGame('netherlands', '12:00', 'qatar') + createGame('iran', '16:00', 'eua') +createGame('wales', '16:00', 'england')) +

         createCard('30/11', 'quarta', 'grupo d/d/c/c',createGame('tunisia', '12:00', 'france') + createGame('australia', '12:00', 'qatar') + createGame('polond', '16:00', 'argentina') +createGame('saudi', '16:00', 'mexico')) +

         createCard('01/12', 'quinta', 'grupo f/f/e/e',createGame('croatia', '12:00', 'belgium') + createGame('canada', '12:00', 'marocco') + createGame('japan', '16:00', 'spain') +createGame('costarica', '16:00', 'germany')) +

        createCard('02/12', 'sexta','grupo h/h/g/g', createGame('korea', '12:00' , 'portugal') + createGame('ghana', '12:00' , 'uruguay') + createGame('switzerland', '16:00' , 'serbia') + createGame('brazil', '16:00' , 'cameroon')) 

        


