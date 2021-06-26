// gra w marynarzyka

//pobieranie danych
let playGame = confirm("Zagramy partyjke?");
if(playGame) {
    //play
    while (playGame) {
    const playerChoice = prompt("Wybierz kamień, papier lub nożyce!")
    if(playerChoice || playerChoice === "") {
        const player1 = playerChoice.trim().toLowerCase();
        if (
            player1 === "kamień" ||
            player1 === "papier" ||
            player1 === "nożyce"
            ){
            //gra
            
//losowanie przez komputer
const computerChoice = Math.floor(Math.random() * 3);
const kpnArray = ["kamień", "papier", "nożyce"];
const player2 = kpnArray[computerChoice];

const result =
//tie game
player1 === player2
? "Remis"

//player1 rock
: player1 === "kamień" && player2 === "nożyce"
? "Wygrałeś!"

//player1 paper
: player1 === "papier" && player2 === "kamień"
? "Wygrałeś!"

//player1 scisors
: player1 === "nożyce" && player2 === "papier"
? "Wygrałeś!"
: "Przegrałeś :("

//alert
alert(`Ty: ${player1}\nKomputer: ${player2}\n${result}`);

//play again
playGame = confirm("Zagramy jeszcze raz?");
if (!playGame) alert ("Szkoda, spróbujmy kiedy indziej.")
continue;
}else {
            alert("Nie podałeś poprawnego ruchu.");
            continue;
        }
    }else {
        alert("Szkoda, spróbujmy kiedy indziej.")
        break;
    }
}
}else {
    alert("Ok, może następnym razem.")
}
