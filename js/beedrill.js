function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/beedrill.png":
        document.getElementById("paragrafo").innerHTML = "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para espetar seu inimigo repetidamente.<br><br>";
        break;
    case "../img/megabeedrill.png":
        document.getElementById("paragrafo").innerHTML = "Suas pernas se tornaram ferrões venenosos. Ele apunhala sua presa repetidamente com os ferrões em seus membros, dando o golpe final com o ferrão em suas costas.";
        break;
    case "../img/shinybeedrill.png":
        document.getElementById("paragrafo").innerHTML = "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para espetar seu inimigo repetidamente.<br><br>";
        break;
}
}