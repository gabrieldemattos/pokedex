function changeImage(){
    const img = document.getElementById('img');
    const op = document.getElementById('selectOption').value;
    const descricaoDois = document.getElementById("descricaoDois");
    const descricaoTres = document.getElementById("descricaoTres");
    const fraquezas = document.getElementById("fraquezas");
    const fraquezasUm = document.getElementById("fraquezasUm");
    const fraquezasDois = document.getElementById("fraquezasDois");
    const fraquezasTres = document.getElementById("fraquezasTres");
    const fraquezasQuatro = document.getElementById("fraquezasQuatro");
    const fraquezasCinco = document.getElementById("fraquezasCinco");
    const paragrafo = document.getElementById("paragrafo");
    
    if (op == 1){
        img.src = '/img/charizard.png'
        paragrafo.innerHTML = "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.";
        descricaoDois.style.display = 'block';
        descricaoTres.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasUm.style.display = 'none';
        fraquezasDois.style.display = 'none';
        fraquezasTres.style.display = 'block';
        fraquezasQuatro.style.display = 'block';
        fraquezasCinco.style.display = 'block';
    } else if (op == 2){
        img.src = '/img/megazardx.png'
        paragrafo.innerHTML = "O poder avassalador que preenche todo o seu corpo faz com que ele fique preto e crie intensas chamas azuis.<br><br>";
        descricaoDois.style.display = 'none';
        descricaoTres.style.display = 'block';
        fraquezas.style.display = 'block';
        fraquezasUm.style.display = 'block';
        fraquezasDois.style.display = 'block';
        fraquezasTres.style.display = 'none';
        fraquezasQuatro.style.display = 'none';
        fraquezasCinco.style.display = 'none';
    } else if (op == 3){
        img.src = '/img/megazardy.png';
        paragrafo.innerHTML = "Seu vínculo com seu treinador é a fonte de seu poder. Possui velocidade e manobrabilidade maiores do que a de um caça a jato.";
        descricaoDois.style.display = 'block';
        descricaoTres.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasUm.style.display = 'none';
        fraquezasDois.style.display = 'none';
        fraquezasTres.style.display = 'block';
        fraquezasQuatro.style.display = 'block';
        fraquezasCinco.style.display = 'block';
    } else if (op == 4){
        img.src = '/img/shinyzard.png';
        paragrafo.innerHTML = "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.";
        descricaoDois.style.display = 'block';
        descricaoTres.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasUm.style.display = 'none';
        fraquezasDois.style.display = 'none';
        fraquezasTres.style.display = 'block';
        fraquezasQuatro.style.display = 'block';
        fraquezasCinco.style.display = 'block';
    } else {
        img.src = '/img/gigantamaxzard.png';
        paragrafo.innerHTML = "Esta figura colossal de asas de fogo de um Charizard foi provocada pela energia Gigantamax.<br><br>";
        descricaoDois.style.display = 'block';
        descricaoTres.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasUm.style.display = 'none';
        fraquezasDois.style.display = 'none';
        fraquezasTres.style.display = 'block';
        fraquezasQuatro.style.display = 'block';
        fraquezasCinco.style.display = 'block';
    }
}