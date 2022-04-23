function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/venusaur.png":
        document.getElementById("paragrafo").innerHTML = "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.";
        break;
    case "../img/megavenu.png":
        document.getElementById("paragrafo").innerHTML = "Para sustentar sua flor, que cresceu devido à Mega Evolução, suas costas e pernas ficaram mais fortes.";
        break;
    case "../img/shinyvenu.png":
        document.getElementById("paragrafo").innerHTML = "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.";
        break;
    case "../img/gigantamaxvenu.png":
        document.getElementById("paragrafo").innerHTML = "Enormes quantidades de pólen irromperam dele com a força de uma erupção vulcânica. Respirar muito pólen pode causar desmaios.";
        break;
}
}


/* if (a == "../img/venusaur.png") {
    document.getElementById("paragrafo").innerHTML = "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.";
} else if (a == "../img/megavenu.png") {
    document.getElementById("paragrafo").innerHTML = "Para sustentar sua flor, que cresceu devido à Mega Evolução, suas costas e pernas ficaram mais fortes.";
} else if (a == "../img/shinyvenu.png") {
    document.getElementById("paragrafo").innerHTML = "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.";
}else {
    document.getElementById("img").src=a;
    document.getElementById("paragrafo").innerHTML = "Enormes quantidades de pólen irromperam dele com a força de uma erupção vulcânica. Respirar muito pólen pode causar desmaios.";
}
} */