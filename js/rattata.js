function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/rattata.png":
        document.getElementById("paragrafo").innerHTML = "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.";
        document.getElementById("descricao").innerHTML = "Normal";
        document.getElementById("descricaoDois").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
    break;
    case "../img/alolanrattata.png":
        document.getElementById("paragrafo").innerHTML = "Seus bigodes proporcionam um olfato apurado, permitindo que ele capte o cheiro de comida escondida e localize-a instantaneamente.";
        document.getElementById("descricao").innerHTML = "Normal";
        document.getElementById("descricaoDois").style.display = 'block';
        document.getElementById("fraquezas").style.display = 'block';
        document.getElementById("fraquezasDois").style.display = 'block';
    break;
    case "../img/shinyrattata.png":
        document.getElementById("paragrafo").innerHTML = "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.";
        document.getElementById("descricao").innerHTML = "Normal";
        document.getElementById("descricaoDois").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
    break; 
}
}