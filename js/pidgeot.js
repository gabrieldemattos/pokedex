function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/pidgeot.png":
        document.getElementById("paragrafo").innerHTML = "Este Pokémon voa em velocidade Mach 2, em busca de presas. Suas grandes garras são temidas como armas perversas.";
        break;
    case "../img/megageot.png":
        document.getElementById("paragrafo").innerHTML = "Com sua força muscular agora muito aumentada, ele pode voar continuamente por duas semanas sem descansar.";
        break;
    case "../img/shinygeot.png":
        document.getElementById("paragrafo").innerHTML = "Este Pokémon voa em velocidade Mach 2, em busca de presas. Suas grandes garras são temidas como armas perversas.";
        break;
}
}