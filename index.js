const score0 = document.querySelector(".score0");
const score1 = document.querySelector(".score1");
const diceEl = document.querySelector(".dice");
const current0 = document.querySelector(".CurrentScore0");
const current1 = document.querySelector(".CurrentScore1");
const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");
const btnRollDice = document.querySelector(".btn-RollDice");

let scores;
let currentScore;
let activePlayer;
let playing;

const initial = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceEl.classList.add("hidden");
};
initial();
const switchPlayer = () => {
  document.querySelector(`.CurrentScore${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  if (activePlayer === 0) {
    document.querySelector(".player0").style.backgroundColor = "rgb(236, 158, 173)";
    document.querySelector(".player1").style.backgroundColor = "rgb(236, 182, 220)";
  } else {
    document.querySelector(".player0").style.backgroundColor = "rgb(236, 182, 220)";
    document.querySelector(".player1").style.backgroundColor = "rgb(236, 158, 173)";
  }
};

btnRollDice.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;

      document.querySelector(`.CurrentScore${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    //    ----------OR------------
    //   scores[1]=scores[1]+currentScore
    document.querySelector(`.score${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player${activePlayer}`).style.backgroundColor = "rgb(0,0,0)";
      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", function () {
  initial();
  if (activePlayer === 0) {
    document.querySelector(".player0").style.backgroundColor = "rgb(236, 158, 173)";
    document.querySelector(".player1").style.backgroundColor = "rgb(236, 182, 220)";
  } else {
    document.querySelector(".player0").style.backgroundColor = "rgb(236, 182, 220)";
    document.querySelector(".player1").style.backgroundColor = "rgb(236, 158, 173)";
  }
});
