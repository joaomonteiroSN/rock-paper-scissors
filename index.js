
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

function game() {

    let counter = 0;

    while (counter < 5 + empate) {
        let playerSelection = prompt("Digite sua Opção").toLowerCase();
        let computerChoise = getComputerChoice();
        let roundWinner = round(playerSelection, computerChoise);
        counter++;
        console.log("escolha do PLAYER: " + playerSelection);
        console.log("escolha do COMPUTADOR: " + computerChoise);
        console.log("quem ganhou o ROUND: " + roundWinner)
    }
    // console.log("valor do counter:" + counter);
    // console.log("valor do player " + playerPoints);

    return playerPoints > computerPoints ? "Jogador venceu!" : "Computador venceu."

}

console.log("quem ganhou O GAME: " + game());
