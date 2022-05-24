function changeImage(){
    const op = document.getElementById('selectOption').value;
    const img = document.getElementById("img");
    const paragrafo = document.getElementById("paragrafo");

    if (op == 1){
        img.src = '/img/blastoise.png';
        paragrafo.innerHTML = "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.";
    } else if (op == 2) {
        img.src = '/img/megatoise.png';
        paragrafo.innerHTML = "O canhão em suas costas é tão poderoso quanto uma arma de tanque. Suas pernas e costas resistentes permitem que ele suporte o recuo do disparo do canhão.";
    } else if (op == 3){
        img.src = '/img/shinytoise.png';
        paragrafo.innerHTML = "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.";
    } else {
        img.src = '/img/gigantamaxtoise.png';
        paragrafo.innerHTML = "Não é muito bom em tiro de precisão. Ao atacar, ele apenas dispara seus 31 canhões repetidamente.<br><br>";
    }
}