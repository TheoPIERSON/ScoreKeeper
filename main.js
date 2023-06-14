"use strict";
let playerOneScore = document.getElementById("playerOne");
let playerOneButton = document.getElementById("playerOneButton");
let playerTwoScore = document.getElementById("playerTwo");

let playerTwoButton = document.getElementById("playerTwoButton");
let endScore = document.getElementById("endScore");
let resetButton = document.getElementById("resetButton");

let goal = document.getElementById("inputGoal");
goal.value = Number(goal.value);

let scoreP1 = 0;
let scoreP2 = 0;

goal.addEventListener("input", function () {
  endScore.textContent = goal.value;
});

playerOneButton.addEventListener("click", function () {
  if (scoreP1 < goal.value && scoreP2 < goal.value) {
    console.log("samarsh");
    playerOneScore.innerHTML = ++scoreP1; // Augmente d'abord le score, puis met à jour l'affichage
    if (scoreP1 == goal.value) {
      playerOneScore.style.color = "green"; // Change la couleur du score si l'objectif est atteint
    }
  }
});

playerTwoButton.addEventListener("click", function () {
  if (scoreP2 < goal.value && scoreP1 < goal.value) {
    console.log("samarsh");
    playerTwoScore.innerHTML = ++scoreP2;
    if (scoreP2 == goal.value) {
      playerTwoScore.style.color = "green";
    }
  }
});

resetButton.addEventListener("click", function () {
  playerOneScore.textContent = scoreP1 = 0;
  playerOneScore.style.color = "black";
  playerTwoScore.textContent = scoreP2 = 0;
  playerTwoScore.style.color = "black";
  goal.value = 0;
  endScore.textContent = 0;
});
