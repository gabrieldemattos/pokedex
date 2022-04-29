function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/charizard.png":
        document.getElementById("paragrafo").innerHTML = "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.";
        document.getElementById("descricaoDois").style.display = 'block';
        document.getElementById("descricaoTres").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasUm").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
        document.getElementById("fraquezasTres").style.display = 'block';
        document.getElementById("fraquezasQuatro").style.display = 'block';
        document.getElementById("fraquezasCinco").style.display = 'block';
        break;
    case "../img/megazardx.png":
        document.getElementById("paragrafo").innerHTML = "O poder avassalador que preenche todo o seu corpo faz com que ele fique preto e crie intensas chamas azuis.<br><br>";
        document.getElementById("descricaoDois").style.display = 'none';
        document.getElementById("descricaoTres").style.display = 'block';
        document.getElementById("fraquezas").style.display = 'block';
        document.getElementById("fraquezasUm").style.display = 'block';
        document.getElementById("fraquezasDois").style.display = 'block';
        document.getElementById("fraquezasTres").style.display = 'none';
        document.getElementById("fraquezasQuatro").style.display = 'none';
        document.getElementById("fraquezasCinco").style.display = 'none';
        break;
    case "../img/shinyzard.png":
        document.getElementById("paragrafo").innerHTML = "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.";
        document.getElementById("descricaoDois").style.display = 'block';
        document.getElementById("descricaoTres").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasUm").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
        document.getElementById("fraquezasTres").style.display = 'block';
        document.getElementById("fraquezasQuatro").style.display = 'block';
        document.getElementById("fraquezasCinco").style.display = 'block';
        break;
    case "../img/megazardy.png":
        document.getElementById("paragrafo").innerHTML = "Seu vínculo com seu treinador é a fonte de seu poder. Possui velocidade e manobrabilidade maiores do que a de um caça a jato.";
        document.getElementById("descricaoDois").style.display = 'block';
        document.getElementById("descricaoTres").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasUm").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
        document.getElementById("fraquezasTres").style.display = 'block';
        document.getElementById("fraquezasQuatro").style.display = 'block';
        document.getElementById("fraquezasCinco").style.display = 'block';
        break;
    case "../img/gigantamaxzard.png":
        document.getElementById("paragrafo").innerHTML = "Esta figura colossal de asas de fogo de um Charizard foi provocada pela energia Gigantamax.<br><br>";
        document.getElementById("descricaoDois").style.display = 'block';
        document.getElementById("descricaoTres").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasUm").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
        document.getElementById("fraquezasTres").style.display = 'block';
        document.getElementById("fraquezasQuatro").style.display = 'block';
        document.getElementById("fraquezasCinco").style.display = 'block';
        break;
}
}



/* switch substitui os if's abaixo

if (a == "../img/charizard.png") {
    document.getElementById("paragrafo").innerHTML = "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.";
    document.getElementById("descricaoDois").style.display = 'block';
    document.getElementById("descricaoTres").style.display = 'none';
    document.getElementById("fraquezas").style.display = 'none';
    document.getElementById("fraquezasUm").style.display = 'none';
    document.getElementById("fraquezasDois").style.display = 'none';
    document.getElementById("fraquezasTres").style.display = 'block';
    document.getElementById("fraquezasQuatro").style.display = 'block';
    document.getElementById("fraquezasCinco").style.display = 'block';
} else if (a == "../img/megazardx.png") {
    document.getElementById("paragrafo").innerHTML = "O poder avassalador que preenche todo o seu corpo faz com que ele fique preto e crie intensas chamas azuis.";
    document.getElementById("descricaoDois").style.display = 'none';
    document.getElementById("descricaoTres").style.display = 'block';
    document.getElementById("fraquezas").style.display = 'block';
    document.getElementById("fraquezasUm").style.display = 'block';
    document.getElementById("fraquezasDois").style.display = 'block';
    document.getElementById("fraquezasTres").style.display = 'none';
    document.getElementById("fraquezasQuatro").style.display = 'none';
    document.getElementById("fraquezasCinco").style.display = 'none';
} else if (a == "../img/shinyzard.png") {
    document.getElementById("paragrafo").innerHTML = "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.";
    document.getElementById("descricaoDois").style.display = 'block';
    document.getElementById("descricaoTres").style.display = 'none';
    document.getElementById("fraquezas").style.display = 'none';
    document.getElementById("fraquezasUm").style.display = 'none';
    document.getElementById("fraquezasDois").style.display = 'none';
    document.getElementById("fraquezasTres").style.display = 'block';
    document.getElementById("fraquezasQuatro").style.display = 'block';
    document.getElementById("fraquezasCinco").style.display = 'block';
} else if (a == "../img/megazardy.png") {
        document.getElementById("paragrafo").innerHTML = "Seu vínculo com seu treinador é a fonte de seu poder. Possui velocidade e manobrabilidade maiores do que a de um caça a jato.";
        document.getElementById("descricaoDois").style.display = 'block';
        document.getElementById("descricaoTres").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasUm").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
        document.getElementById("fraquezasTres").style.display = 'block';
        document.getElementById("fraquezasQuatro").style.display = 'block';
        document.getElementById("fraquezasCinco").style.display = 'block';
} else {
    document.getElementById("img").src=a;
    document.getElementById("paragrafo").innerHTML = "Esta figura colossal de asas de fogo de um Charizard foi provocada pela energia Gigantamax.";
    document.getElementById("descricaoDois").style.display = 'block';
    document.getElementById("descricaoTres").style.display = 'none';
    document.getElementById("fraquezas").style.display = 'none';
    document.getElementById("fraquezasUm").style.display = 'none';
    document.getElementById("fraquezasDois").style.display = 'none';
    document.getElementById("fraquezasTres").style.display = 'block';
    document.getElementById("fraquezasQuatro").style.display = 'block';
    document.getElementById("fraquezasCinco").style.display = 'block';
} */