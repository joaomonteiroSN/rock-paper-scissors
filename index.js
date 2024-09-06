
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
        currentScores.innerText = `Pontos do jogador: ${playerPoints} e Pontos do computador: ${computerPoints}.`
        return resultado;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        resultado = arrayAnswers[1];
        playerPoints++;
        currentScores.innerText = `Pontos do jogador: ${playerPoints} e Pontos do computador: ${computerPoints}.`
        return resultado;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        resultado = arrayAnswers[2];
        playerPoints++;
        currentScores.innerText = `Pontos do jogador: ${playerPoints} e Pontos do computador: ${computerPoints}.`
        return resultado;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        resultado = arrayAnswers[3];
        computerPoints++
        currentScores.innerText = `Pontos do jogador: ${playerPoints} e Pontos do computador: ${computerPoints}.`
        return resultado;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        resultado = arrayAnswers[4];
        playerPoints++;
        currentScores.innerText = `Pontos do jogador: ${playerPoints} e Pontos do computador: ${computerPoints}.`
        return resultado;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        resultado = arrayAnswers[5];
        computerPoints++;
        currentScores.innerText = `Pontos do jogador: ${playerPoints} e Pontos do computador: ${computerPoints}.`
        return resultado;
    } else {
        resultado = arrayAnswers[6];
        computerPoints++;
        currentScores.innerText = `Pontos do jogador: ${playerPoints} e Pontos do computador: ${computerPoints}.`
        return resultado;
    }
}

//Event handler to buttons

let playerSelection;
let computerChoise;
let roundWinner;
let counter = 0;

const container = document.querySelector(".container");
const roundResult = document.createElement("p");
const currentScores = document.createElement("p");


let button = document.querySelector("#playerChoises");
button.addEventListener('click', (event) => {
    counter++;
    let target = event.target;

    if (target.id === 'paper') {
        playerSelection = "paper";
        computerChoise = getComputerChoice();
        return roundResult.innerText = round(playerSelection, computerChoise);
    }
    else if (target.id === 'rock') {
        playerSelection = "rock";
        computerChoise = getComputerChoice();
        return roundResult.innerText = round(playerSelection, computerChoise);
    }
    else {
        playerSelection = "scissors";
        computerChoise = getComputerChoice();
        return roundResult.innerText = round(playerSelection, computerChoise);
    }
});

function game() {
    return playerPoints > computerPoints ? "Jogador venceu!" : "Computador venceu."

    console.log("escolha do PLAYER: " + playerSelection);
    console.log("escolha do COMPUTADOR: " + computerChoise);
    console.log("quem ganhou o ROUND: " + roundWinner);
}

container.appendChild(roundResult);
container.appendChild(currentScores);