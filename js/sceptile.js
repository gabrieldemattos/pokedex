function changeImage(){
    const img = document.getElementById('img');
    const op = document.getElementById('selectOption').value;
    const descricaoDois = document.getElementById("descricaoDois");
    const fraquezas = document.getElementById("fraquezas");
    const fraquezasDois = document.getElementById("fraquezasDois");
    const fraquezasTres = document.getElementById("fraquezasTres");
    const paragrafo = document.getElementById("paragrafo");
    
    if (op == 1){
        img.src = '/img/sceptile.png'
        descricaoDois.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasDois.style.display = 'none';
        fraquezasTres.style.display = 'block';
    } else if (op == 2){
        img.src = '/img/megasceptile.png'
        descricaoDois.style.display = 'block';
        fraquezas.style.display = 'block';
        fraquezasDois.style.display = 'block';
        fraquezasTres.style.display = 'none';
    } else {
        img.src = '/img/shinysceptile.png';
        descricaoDois.style.display = 'none';
        fraquezas.style.display = 'none';
        fraquezasDois.style.display = 'none';
        fraquezasTres.style.display = 'block';
    }
}