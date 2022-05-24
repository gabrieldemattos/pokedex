function changeImage(){
    const op = document.getElementById('selectOption').value;
    const img = document.getElementById("img");

    if (op == 1){
        img.src = '/img/meganium.png';
    } else {
        img.src = '/img/shinymeganium.png';
    }
}