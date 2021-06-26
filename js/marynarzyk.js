// gra w marynarzyka

//pobieranie danych
let player1 = prompt("Gracz1 podaj swój ruch");
let player2 = prompt("Gracz2 podaj swój ruch");

//remis
if(player1 === player2)
{
    alert("Remis");
}
//player1 kamień
else if (player1 === "kamień") {
    if(player2 ==="papier") {
        alert("Gracz 2 wygrywa");
    }else {
        alert("Gracz 1 wygrywa");
    }
}
//player1 papier
else if (player1 === "papier") {
    if (player2 === "nożyce") {
    alert("Gracz 2 wygrywa");
    }
    else {
        alert("Gracz 1 wygrywa");
    }
}
//player1 nożyce
else if (player1 === "nożyce") {
    if (player2 === "kamień") {
    alert("Gracz 2 wygrywa");
    }
    else {
        alert("Gracz 1 wygrywa");
    }
}
