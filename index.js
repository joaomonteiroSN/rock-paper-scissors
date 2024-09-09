//Array de respostas
const arrayAnswers = [
    "Empate/draw",
    "Você ganhou! PEDRA vence tesoura!!",
    "Você ganhou! PAPEL vence pedra!!",
    "Você perdeu! PAPEL perde para tesoura!!",
    "Você ganhou! TESOURA ganha de papel!!",
    "Você perdeu! TESOURA perde para pedra!!",
    "Você perdeu, PEDRA perde para papel!!"
];

function getComputerChoice() {
    const arrayChoices = ["Rock", "Paper", "Scissors"];
    const random = (Math.random() * 2).toFixed();
    return arrayChoices[random].toLowerCase();
}

let playerPoints = 0;
let computerPoints = 0;
let empate = 0;

function round(playerSelection, computerSelection) {
    let resultado;

    if (playerSelection == computerSelection) {
        resultado = arrayAnswers[0];
        empate++;
        return resultado;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        resultado = arrayAnswers[1];
        playerPoints++;
        return resultado;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        resultado = arrayAnswers[2];
        playerPoints++;
        return resultado;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        resultado = arrayAnswers[3];
        computerPoints++
        return resultado;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        resultado = arrayAnswers[4];
        playerPoints++;
        return resultado;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        resultado = arrayAnswers[5];
        computerPoints++;
        return resultado;
    } else {
        resultado = arrayAnswers[6];
        computerPoints++;
        return resultado;
    }
}

//Event handler for buttons

let playerSelection;
let computerChoise;
let roundWinner;
let counter = 0;

const container = document.querySelector(".container");
const roundResult = document.querySelector(".roundResult");
const playerScoreEl = document.querySelector(".playerScore > span");
const computerScoreEl = document.querySelector(".computerScore > span");

let button = document.querySelector("#playerChoises");
button.addEventListener('click', (event) => {
    counter++;
    let target = event.target;

    if (target.id === 'paper') {
        playerSelection = "paper";
        computerChoise = getComputerChoice();
        roundResult.innerText = round(playerSelection, computerChoise);
        playerScoreEl.innerText = playerPoints;
        computerScoreEl.innerText = computerPoints;
        game();
    }
    else if (target.id === 'rock') {
        playerSelection = "rock";
        computerChoise = getComputerChoice();
        roundResult.innerText = round(playerSelection, computerChoise);
        playerScoreEl.innerText = playerPoints;
        computerScoreEl.innerText = computerPoints;
        game();
    }
    else {
        playerSelection = "scissors";
        computerChoise = getComputerChoice();
        roundResult.innerText = round(playerSelection, computerChoise);
        playerScoreEl.innerText = playerPoints;
        computerScoreEl.innerText = computerPoints;
        game();
    }
});

const finalResult = document.createElement("span");

function game() {
    if (playerPoints === 5 || computerPoints === 5) {
        openModal();
    }
    // console.log("escolha do PLAYER: " + playerSelection);
    // console.log("escolha do COMPUTADOR: " + computerChoise);
    // console.log("quem ganhou o ROUND: " + roundWinner);
}

const modal = document.querySelector(".modal-container");

function openModal() {
    finalResult.innerText = playerPoints > computerPoints ? "Jogador venceu!" : "Computador venceu."
    container.appendChild(finalResult);
    modal.classList.add("active");
}

const btnEndGame = document.querySelector("#btn-endGame");

btnEndGame.addEventListener('click', () => {
    endGame();
});

function endGame() {
    playerPoints = 0;
    computerPoints = 0;
    empate = 0;
    playerScoreEl.innerText = playerPoints;
    computerScoreEl.innerText = computerPoints;
    roundResult.innerText = "-";
    container.removeChild(finalResult);
    modal.classList.remove("active");
}