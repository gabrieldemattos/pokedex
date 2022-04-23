function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/raticate.png":
        document.getElementById("paragrafo").innerHTML = "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.";
        document.getElementById("descricao").innerHTML = "Normal";
        document.getElementById("descricaoDois").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
    break;
    case "../img/alolanraticate.png":
        document.getElementById("paragrafo").innerHTML = "Faz com que seus subordinados Rattata coletem comida para ele, jantando apenas com a comida mais nutritiva e deliciosa.";
        document.getElementById("descricao").innerHTML = "Normal";
        document.getElementById("descricaoDois").style.display = 'block';
        document.getElementById("fraquezas").style.display = 'block';
        document.getElementById("fraquezasDois").style.display = 'block';
    break;
    case "../img/shinyraticate.png":
        document.getElementById("paragrafo").innerHTML = "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.";
        document.getElementById("descricao").innerHTML = "Normal";
        document.getElementById("descricaoDois").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
    break; 
}
}


/* if (a == "../img/raticate.png") {
    document.getElementById("paragrafo").innerHTML = "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.";
    document.getElementById("descricao").innerHTML = "Normal";
    document.getElementById("descricaoDois").style.display = 'none';
    document.getElementById("fraquezas").style.display = 'none';
    document.getElementById("fraquezasDois").style.display = 'none';
} else if (a == "../img/alolanraticate.png") {
    document.getElementById("paragrafo").innerHTML = "Faz com que seus subordinados Rattata coletem comida para ele, jantando apenas com a comida mais nutritiva e deliciosa.";
    document.getElementById("descricao").innerHTML = "Normal";
    document.getElementById("descricaoDois").style.display = 'block';
    document.getElementById("fraquezas").style.display = 'block';
    document.getElementById("fraquezasDois").style.display = 'block';
} else {
    document.getElementById("img").src=a;
    document.getElementById("paragrafo").innerHTML = "Suas patas traseiras são palmadas. Eles agem como nadadeiras, para que possam nadar em rios e caçar presas.";
    document.getElementById("descricao").innerHTML = "Normal";
    document.getElementById("descricaoDois").style.display = 'none';
    document.getElementById("fraquezas").style.display = 'none';
    document.getElementById("fraquezasDois").style.display = 'none';
}
} */