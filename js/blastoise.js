function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/blastoise.png":
        document.getElementById("paragrafo").innerHTML = "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.";
        break;
    case "../img/megatoise.png":
        document.getElementById("paragrafo").innerHTML = "O canhão em suas costas é tão poderoso quanto uma arma de tanque. Suas pernas e costas resistentes permitem que ele suporte o recuo do disparo do canhão.";
        break;
    case "../img/shinytoise.png":
        document.getElementById("paragrafo").innerHTML = "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.";
        break;
    case "../img/gigantamaxtoise.png":
        document.getElementById("paragrafo").innerHTML = "Não é muito bom em tiro de precisão. Ao atacar, ele apenas dispara seus 31 canhões repetidamente.";
        break;
}
}