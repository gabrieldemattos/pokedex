function changeImage(){
    const op = document.getElementById('selectOption').value;
    const img = document.getElementById("img");
    const paragrafo = document.getElementById("paragrafo");

    if (op == 1){
        img.src = '/img/pidgeot.png';
        paragrafo.innerHTML = "Este Pokémon voa em velocidade Mach 2, em busca de presas. Suas grandes garras são temidas como armas perversas.";
    } else if (op == 2) {
        img.src = '/img/megageot.png';
        paragrafo.innerHTML = "Com sua força muscular agora muito aumentada, ele pode voar continuamente por duas semanas sem descansar.";
    } else {
        img.src = '/img/shinygeot.png';
        paragrafo.innerHTML = "Este Pokémon voa em velocidade Mach 2, em busca de presas. Suas grandes garras são temidas como armas perversas.";
    }
}