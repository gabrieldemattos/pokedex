function changeImage(){
    const img = document.getElementById('img');
    const op = document.getElementById('selectOption').value;
    const descricaoDois = document.getElementById("descricaoDois");
    const fraquezas = document.getElementById("fraquezas");
    const fraquezasDois = document.getElementById("fraquezasDois");
    const paragrafo = document.getElementById("paragrafo");
    
    if (op == 1){
        img.src = '/img/rattata.png'
        paragrafo.innerHTML = "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.<br><br>";
        descricaoDois.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasDois.style.display = 'none';
    } else if (op == 2){
        img.src = '/img/alolanrattata.png'
        paragrafo.innerHTML = "Seus bigodes proporcionam um olfato apurado, permitindo que ele capte o cheiro de comida escondida e localize-a instantaneamente.";
        descricaoDois.style.display = 'block';
        fraquezas.style.display = 'block';
        fraquezasDois.style.display = 'block';
    } else {
        img.src = '/img/shinyrattata.png';
        paragrafo.innerHTML = "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.<br><br>";
        descricaoDois.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasDois.style.display = 'none';
    } 
}