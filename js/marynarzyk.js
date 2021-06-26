// gra w marynarzyka

//pobieranie danych
let player1 = prompt("Gracz1 podaj swój ruch");
let player2;

//losowanie komputera
let computer = Math.floor(Math.random() * 3) + 1;

switch (computer) {

    case 1:
        if(computer === 1) {
        alert("Komputer wylosował kamień");
        player2 = "kamień";
    }
        break;

    case 2:
        if(computer === 2) {
        alert("Komputer wylosował papier");
        player2 = "papier";
    }
        break;
    
    case 3:
        if(computer === 3) {
        alert("Komputer wylosował nożyce");
        player2 = "nożyce";
        }
        break;
}


//remis
if(player1 === player2)
{
    alert("Remis");
}
//player1 kamień
else if (player1 === "kamień") {
    if(player2 ==="papier") {
        alert("Przegrałeś");
    }else {
        alert("Wygrałeś!");
    }
}
//player1 papier
else if (player1 === "papier") {
    if (player2 === "nożyce") {
    alert("Przegrałeś");
    }
    else {
        alert("Wygrałeś!");
    }
}
//player1 nożyce
else if (player1 === "nożyce") {
    if (player2 === "kamień") {
    alert("Przegrałeś");
    }
    else {
        alert("Wygrałeś!");
    }
}

