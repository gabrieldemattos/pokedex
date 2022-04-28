function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/butterfree.png":
        document.getElementById("paragrafo").innerHTML = "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.";
        break;
    case "../img/shinybutterfree.png":
        document.getElementById("paragrafo").innerHTML = "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.";
        break;
    case "../img/gigantamaxbutterfree.png":
        document.getElementById("paragrafo").innerHTML = "A energia Gigantamax cristalizada compõe as escamas incrivelmente brilhantes e altamente tóxicas deste Pokémon.";
        break;
}
}