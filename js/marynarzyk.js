// gra w marynarzyka

//pobieranie danych

let playGame = confirm("Zagramy partyjke?");
if(playGame) {
    //play
    let playerChoice = prompt("Wybierz kamień, papier lub nożyce!")
    if(playerChoice) {
        let player1 = playerChoice.trim().toLowerCase();
        if (
            player1 === "kamień" ||
            player1 === "papier" ||
            player1 === "nożyce"
            ){
            //gra
            
//losowanie przez komputer
let computer = Math.floor(Math.random() * 3) + 1;

let player2 =
computer === 1 
? "kamień"
: computer === 2
? "papier"
: computer === 3
? "nożyce"
: "Error"

//alert(`Komputer wylosował ${player2}`);

let result =
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
alert(`Ty: ${player1}\nKomputer: ${player2}\n${result}`);
//play again
let playAgain = confirm("Chcesz zagrać jeszcze raz?");
playAgain ? location.reload() : alert("Ok, bywaj");
        }else {
            alert("Nie podałeś poprawnego ruchu.");
        }
    }else {
        alert("Szkoda, spróbujmy kiedy indziej.")
    }
}else {
    alert("Ok, może następnym razem.")
}
