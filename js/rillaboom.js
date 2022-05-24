function changeImage(){
    const op = document.getElementById('selectOption').value;
    const img = document.getElementById("img");
    const paragrafo = document.getElementById("paragrafo");

    if (op == 1){
        img.src = '/img/rillaboom.png';
        paragrafo.innerHTML = "Ao tocar bateria, ele aproveita o poder de seu toco de árvore especial. As raízes do toco seguem sua direção na batalha.";
    } else {
        img.src = '/img/gigantamaxrillaboom.png';
        paragrafo.innerHTML = "A energia Gigantamax fez com que o toco de Rillaboom se transformasse em uma bateria que se assemelha a uma floresta.";
    }
}