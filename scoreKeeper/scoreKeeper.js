alert("HTML loaded");

// Selectors
let p1Button = document.querySelector("#player-one");
let p2Button = document.querySelector("#player-two");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let result = document.querySelector("#result");
let reset = document.querySelector("#reset");
let input = document.querySelector("input");
let playTotal = document.querySelector("#play-count-total");

// Player Scores
let p1Score = 0;
let p2Score = 0;

// Game Control Boolean
let gameOver = false;

// Score Initially Set to Five
let winningScore = 5;
playTotal.textContent = winningScore;

// Game Total Change Event
input.addEventListener('change', function() {
  playTotal.textContent = this.value;
  winningScore = parseInt(this.value);
  if (p1Score || p2Score > 0) {
    resetGame();
  }
})

// Reset Event
reset.addEventListener('click', function() {
  resetGame();
  if (gameOver === true) {
    toggleWinnerClass();
  }
});

function resetGame() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  result.textContent = "Awaiting Result...";
  input.value = "";
  playTotal.textContent = "5";
  winningScore = 5;
}

// Toggle Winner class
function toggleWinnerClass() {
  if (p1Score === winningScore) {
    p1Display.classList.toggle("winner");
  } else {
    p2Display.classList.toggle("winner");
  }
}

// Player Events Need Refactored!!!
// Player One Add/Click
p1Button.addEventListener("click", function(){
  if (!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
      result.textContent = "Player One is the winner!";
    }
  }
});

// Player Two Add/Click
p2Button.addEventListener("click", function(){
  if (!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add("winner");
      result.textContent = "Player Two is the winner!";
    }
  }
});
