function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/rillaboom.png":
        document.getElementById("paragrafo").innerHTML = "Ao tocar bateria, ele aproveita o poder de seu toco de árvore especial. As raízes do toco seguem sua direção na batalha.";
    break;
    case "../img/gigantamaxrillaboom.png":
        document.getElementById("paragrafo").innerHTML = "A energia Gigantamax fez com que o toco de Rillaboom se transformasse em uma bateria que se assemelha a uma floresta.";
    break;
}
}

/* if (a == "../img/rillaboom.png") {
    document.getElementById("paragrafo").innerHTML = "Ao tocar bateria, ele aproveita o poder de seu toco de árvore especial. As raízes do toco seguem sua direção na batalha.";
} else if (a == "../img/gigantamaxrillaboom.png") {
    document.getElementById("paragrafo").innerHTML = "A energia Gigantamax fez com que o toco de Rillaboom se transformasse em uma bateria que se assemelha a uma floresta.";

} 
} */