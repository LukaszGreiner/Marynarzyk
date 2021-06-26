// gra w marynarzyka

//pobieranie danych

let player1 = prompt("Podaj swój ruch");
 
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

alert(`Komputer wylosował ${player2}`);

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
alert(result);
