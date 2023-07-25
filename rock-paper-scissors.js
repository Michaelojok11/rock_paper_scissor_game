



// Create a variable for our score
 let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Getting the element
updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1; 
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  // update the score
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `Result: ${result}`;
  document.querySelector('.js-moves').innerHTML = `You <img src="pictures/${playerMove}-emoji.png" alt="" class="move-icon"> - Computer <img src="pictures/${computerMove}-emoji.png" alt="" class="move-icon">`;
}

// Let's create a function to reuse the code
function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  
  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.setItem('score', JSON.stringify(score));
}

// Adding event listeners
document.body.addEventListener('keydown',(event) => {
  if (event.key === 'r'){
    playGame('rock');
  } else if (event.key=== 'p'){
    playGame('paper');
  } else if (event.key==='s'){
    playGame('scissors');
  }
})
// End of event listener