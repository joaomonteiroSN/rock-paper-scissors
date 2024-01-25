

function getComputerChoice() {
    const arrayChoices = ["Rock", "Paper", "Scissors"];
    const random = (Math.random() * 2).toFixed();

    return arrayChoices[random].toLowerCase();
}

const playerSelection = "Scissors";
const computerChoise = getComputerChoice();

function singleRound(playerSelection, computerSelection) {

    let resultado;

    if (playerSelection.toLowerCase() == computerSelection) {
        resultado = "Empate/draw";
        return resultado;
    } else if (playerSelection == "Rock" && computerSelection == "scissors") {
        resultado = "Você ganhou! Pedra vence tesoura!!"
        return resultado;
    } else if (playerSelection == "Paper" && computerSelection == "rock") {
        resultado = "Você ganhou! Papel vence pedra!!"
        return resultado;
    } else if (playerSelection == "Paper" && computerSelection == "scissors") {
        resultado = "Você perdeu! papel perde para tesoura!!"
        return resultado;
    } else if (playerSelection == "Scissors" && computerSelection == "paper") {
        resultado = "Você ganhou! tesoura ganha de papel!!"
        return resultado;
    } else if (playerSelection == "Scissors" && computerSelection == "rock") {
        resultado = "Você perdeu! tesoura perde para papel!!"
        return resultado;
    } else {
        resultado = "Você perdeu, pedra perde para papel!!";
        return resultado;
    }
}

console.log(computerChoise);
console.log(singleRound(playerSelection, computerChoise));
