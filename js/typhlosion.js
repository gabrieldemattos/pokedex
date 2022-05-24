function changeImage(){
    const op = document.getElementById('selectOption').value;
    const img = document.getElementById("img");

    if (op == 1){
        img.src = '/img/typhlosion.png';
    } else {
        img.src = '/img/shinytyphlosion.png';
    }
}