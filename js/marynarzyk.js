// Gra w marynarzyka
const initGame = () => {
    const startGame = confirm("Zagramy partyjke w marynarzyka?");
    startGame ? playGame() : alert("Ok, może następnym razem");
}

const playGame = () => {
    while (true) {
        let playerChoice = getplayerChoice();
        playerChoice = formatplayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decideNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getplayerChoice = () => {
    return prompt("Wybierz kamień, papier lub nożyce");
};

const formatplayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decideNotToPlay = () => {
    alert("Ok, może zagramy następnym razem.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "kamień" ||
        playerChoice === "papier" ||
        playerChoice === "nożyce"
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("Proszę wybrać kamień, papier lub nożyce.");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArrat = ["kamień", "papier", "nożyce"]
    return rpsArrat[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner =
    player === computer
    ? `Ty: ${player}\nKomputer: ${computer}\nRemis`
    : player === "kamień" && computer === "papier"
    ? `Ty: ${player}\nKomputer: ${computer}\nPrzegrałeś :(`
    : player === "papier" && computer === "nożyce"
    ? `Ty: ${player}\nKomputer: ${computer}\nPrzegrałeś :(`
    : player === "nożyce" && computer === "kamień"
    ? `Ty: ${player}\nKomputer: ${computer}\nPrzegrałeś :(`
    : `Ty: ${player}\nKomputer: ${computer}\nWygrałeś!`;

    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Zagramy jeszcze raz?");
};

const thanksForPlaying = () => {
    alert("Ok, bywaj.")
}

initGame();
