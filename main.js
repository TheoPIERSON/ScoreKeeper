"use strict";
let playerOneScore = document.getElementById("playerOne");
let playerOneButton = document.getElementById("playerOneButton");
let playerTwoScore = document.getElementById("playerTwo");

let playerTwoButton = document.getElementById("playerTwoButton");
let endScore = document.getElementById("endScore");
let resetButton = document.getElementById("resetButton");

let goal = document.getElementById("inputGoal");

let scoreP1 = 0;
let scoreP2 = 0;

goal.addEventListener("click", function () {
  endScore.innerHTML = goal.value;
});

playerOneButton.addEventListener("click", function () {
  if (scoreP1 < goal.value && scoreP2 < goal.value) {
    console.log("samarsh");
    playerOneScore.innerHTML = scoreP1 += 1;
  } else if (scoreP1 == goal.value) {
    playerOneScore.style.color = "green";
  }
});

playerTwoButton.addEventListener("click", function () {
  if (scoreP2 < goal.value && scoreP1 < goal.value) {
    console.log("samarshoci");
    playerTwoScore.innerHTML = scoreP2 += 1;
  } else if (scoreP2 == goal.value) {
    playerTwoScore.style.color = "green";
  }
});

resetButton.addEventListener("click", function () {
  playerOneScore.innerHTML = scoreP1 = 0;
  playerOneScore.style.color = "black";
  playerTwoScore.innerHTML = scoreP2 = 0;
  playerTwoScore.style.color = "black";
  goal.value = 0;
  endScore.innerHTML = 0;
});
