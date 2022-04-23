function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/sceptile.png":
        document.getElementById("descricaoDois").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
        document.getElementById("fraquezasTres").style.display = 'block';
    break;
    case "../img/megasceptile.png":
        document.getElementById("descricaoDois").style.display = 'block';
        document.getElementById("fraquezas").style.display = 'block';
        document.getElementById("fraquezasDois").style.display = 'block';
        document.getElementById("fraquezasTres").style.display = 'none';
    break;
    case "../img/shinysceptile.png":
        document.getElementById("descricaoDois").style.display = 'none';
        document.getElementById("fraquezas").style.display = 'none';
        document.getElementById("fraquezasDois").style.display = 'none';
        document.getElementById("fraquezasTres").style.display = 'block';
    break;
}
}

/* if (a == "../img/sceptile.png") {
    document.getElementById("descricaoDois").style.display = 'none';
    document.getElementById("fraquezas").style.display = 'none';
    document.getElementById("fraquezasDois").style.display = 'none';
    document.getElementById("fraquezasTres").style.display = 'block';
} else if (a == "../img/megasceptile.png") {
    document.getElementById("descricaoDois").style.display = 'block';
    document.getElementById("fraquezas").style.display = 'block';
    document.getElementById("fraquezasDois").style.display = 'block';
    document.getElementById("fraquezasTres").style.display = 'none';
} else {
    document.getElementById("img").src=a;
    document.getElementById("descricaoDois").style.display = 'none';
    document.getElementById("fraquezas").style.display = 'none';
    document.getElementById("fraquezasDois").style.display = 'none';
    document.getElementById("fraquezasTres").style.display = 'block';
}
} */