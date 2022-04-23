function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/typhlosion.png":
        document.getElementById("paragrafo").innerHTML = "Typhlosion se obscurece atrás de uma névoa de calor cintilante que cria usando suas chamas intensamente quentes. Este Pokémon cria explosões explosivas que queimam tudo em cinzas.";
    break;
    case "../img/shinytyphlosion.png":
        document.getElementById("paragrafo").innerHTML = "Typhlosion se obscurece atrás de uma névoa de calor cintilante que cria usando suas chamas intensamente quentes. Este Pokémon cria explosões explosivas que queimam tudo em cinzas.";
    break;
}
}

/* if (a == "../img/typhlosion.png") {
    document.getElementById("paragrafo").innerHTML = "Typhlosion se obscurece atrás de uma névoa de calor cintilante que cria usando suas chamas intensamente quentes. Este Pokémon cria explosões explosivas que queimam tudo em cinzas.";
} else if (a == "../img/shinytyphlosion.png") {
    document.getElementById("paragrafo").innerHTML = "Typhlosion se obscurece atrás de uma névoa de calor cintilante que cria usando suas chamas intensamente quentes. Este Pokémon cria explosões explosivas que queimam tudo em cinzas.";

} 
} */