function changeImage(){
    const op = document.getElementById('selectOption').value;
    const img = document.getElementById("img");
    const paragrafo = document.getElementById("paragrafo");

    if (op == 1){
        img.src = '/img/butterfree.png';
        paragrafo.innerHTML = "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.<br><br>";
    } else if (op == 2) {
        img.src = '/img/shinybutterfree.png';
        paragrafo.innerHTML = "Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.<br><br>";
    } else {
        img.src = '/img/gigantamaxbutterfree.png';
        paragrafo.innerHTML = "A energia Gigantamax cristalizada compõe as escamas incrivelmente brilhantes e altamente tóxicas deste Pokémon.";
    }
}