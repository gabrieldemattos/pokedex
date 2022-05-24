function changeImage(){
    const img = document.getElementById('img');
    const op = document.getElementById('selectOption').value;
    const descricaoDois = document.getElementById("descricaoDois");
    const fraquezas = document.getElementById("fraquezas");
    const fraquezasDois = document.getElementById("fraquezasDois");
    const paragrafo = document.getElementById("paragrafo");
    
    if (op == 1){
        img.src = '/img/raticate.png'
        paragrafo.innerHTML = "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.";
        descricaoDois.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasDois.style.display = 'none';
    } else if (op == 2){
        img.src = '/img/alolanraticate.png'
        paragrafo.innerHTML = "Faz com que seus subordinados Rattata coletem comida para ele, jantando apenas com a comida mais nutritiva e deliciosa.";
        descricaoDois.style.display = 'block';
        fraquezas.style.display = 'block';
        fraquezasDois.style.display = 'block';
    } else {
        img.src = '/img/shinyraticate.png';
        paragrafo.innerHTML = "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.";
        descricaoDois.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasDois.style.display = 'none';
    } 
}