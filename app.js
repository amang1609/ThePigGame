
init()


document.querySelector('.btn-roll').addEventListener('click', function () { 
    if (gamePlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById("dice1").style.display = 'block';
        document.getElementById("dice2").style.display = 'block';
        document.getElementById("dice1").src = './images/dice-' + dice1 + '.png';
        document.getElementById("dice2").src = './images/dice-' + dice2 + '.png';
    
    
        if (dice1 !== 1 && dice2 !== 1){
            currentScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = currentScore;
        } else {
            nextPlayer();
        }
    }
  });


  document.querySelector('.btn-hold').addEventListener('click', function () {
      if (gamePlaying){
            scores[activePlayer] += currentScore;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

            if (scores[activePlayer] >= 100){
                document.getElementById('name-' + activePlayer).textContent = 'WINNER!';

                document.getElementById("dice1").style.display = 'none';
                document.getElementById("dice2").style.display = 'none';
                document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;            

            } else{
                nextPlayer();
            }
        }
    });


document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0
    
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
};



function init(){
    scores = [0, 0]
    activePlayer = 0
    currentScore = 0
    gamePlaying = true;

    document.getElementById("dice1").style.display = 'none';
    document.getElementById("dice2").style.display = 'none';

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}