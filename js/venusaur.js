function changeImage(){
    var op = document.getElementById('selectOption').value;

    if (op == 1){
        document.getElementById('paragrafo').innerHTML = "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.";
        document.getElementById('img').src = '/img/venusaur.png'
    } else if (op == 2){
        document.getElementById("paragrafo").innerHTML = "Para sustentar sua flor, que cresceu devido à Mega Evolução, suas costas e pernas ficaram mais fortes.<br><br>";
        document.getElementById("img").src = '/img/megavenu.png'
    } else if (op == 3){
        document.getElementById('paragrafo').innerHTML = "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.";
        document.getElementById('img').src = '/img/shinyvenu.png'
    } else {
        document.getElementById("paragrafo").innerHTML = "Enormes quantidades de pólen irromperam dele com a força de uma erupção vulcânica. Respirar muito pólen pode causar desmaios.";
        document.getElementById('img').src = '/img/gigantamaxvenu.png'
    }
}