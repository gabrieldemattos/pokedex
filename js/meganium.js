function changeImage(a) {
    document.getElementById("img").src=a;

switch(a){
    case "../img/meganium.png":
        document.getElementById("paragrafo").innerHTML = "A fragrância da flor de Meganium acalma e acalma as emoções. Na batalha, este Pokémon exala mais de seu perfume calmante para enfraquecer o espírito de luta do inimigo.";
    break;
    case "../img/shinymeganium.png":
        document.getElementById("paragrafo").innerHTML = "A fragrância da flor de Meganium acalma e acalma as emoções. Na batalha, este Pokémon exala mais de seu perfume calmante para enfraquecer o espírito de luta do inimigo.";
    break;
}
}


/* if (a == "../img/meganium.png") {
    document.getElementById("paragrafo").innerHTML = "A fragrância da flor de Meganium acalma e acalma as emoções. Na batalha, este Pokémon exala mais de seu perfume calmante para enfraquecer o espírito de luta do inimigo.";
} else if (a == "../img/shinymeganium.png") {
    document.getElementById("paragrafo").innerHTML = "A fragrância da flor de Meganium acalma e acalma as emoções. Na batalha, este Pokémon exala mais de seu perfume calmante para enfraquecer o espírito de luta do inimigo.";

} 
} */