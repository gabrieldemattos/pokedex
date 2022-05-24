function changeImage(){
    const op = document.getElementById('selectOption').value;
    const img = document.getElementById("img");
    const paragrafo = document.getElementById("paragrafo");

    if (op == 1){
        img.src = '/img/beedrill.png';
        paragrafo.innerHTML = "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para espetar seu inimigo repetidamente.<br><br>";
    } else if (op == 2) {
        img.src = '/img/megabeedrill.png';
        paragrafo.innerHTML = "Suas pernas se tornaram ferrões venenosos. Ele apunhala sua presa repetidamente com os ferrões em seus membros, dando o golpe final com o ferrão em suas costas.";
    } else {
        img.src = '/img/shinybeedrill.png';
        paragrafo.innerHTML = "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para espetar seu inimigo repetidamente.<br><br>";
    }
}