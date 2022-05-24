const darkModeClass = 'dark-mode';
const body = document.getElementsByTagName('body')[0];
const container = document.getElementsByClassName('container')[0];
const imgs = document.getElementsByTagName('a');

function changeMode() {
    changeClasses();
    changeContainer();
}

function changeClasses() {
    body.classList.toggle(darkModeClass);
}

function changeContainer() {

    if (body.classList.contains(darkModeClass)) {
        container.classList.add("container-dark-mode");  
        for(var i = 1; i <= 9; i++){
            document.getElementById(`pokeballimg` + i).src='img/ultraballicon.png';
        }
        gifMode();
		return;
	}
	container.classList.remove("container-dark-mode");
    for(var i = 1; i <= 9; i++){
            document.getElementById(`pokeballimg` + i).src='img/pokeballicon.png';
    }
    pngMode();
}

function gifMode (){
    const gifs = ['','pokegifs/bulbasaur.gif','pokegifs/ivysaur.gif','pokegifs/venusaur.gif','pokegifs/charmander.gif','pokegifs/charmeleon.gif','pokegifs/charizard.gif',
                'pokegifs/squirtle.gif','pokegifs/wartortle.gif','pokegifs/blastoise.gif','pokegifs/caterpie.gif','pokegifs/metapod.gif','pokegifs/butterfree.gif',
                'pokegifs/weedle.gif','pokegifs/kakuna.gif','pokegifs/beedrill.gif','pokegifs/pidgey.gif','pokegifs/pidgeotto.gif','pokegifs/pidgeot.gif','pokegifs/rattata.gif',
                'pokegifs/raticate.gif','pokegifs/spearow.gif','pokegifs/fearow.gif','pokegifs/ekans.gif','pokegifs/arbok.gif',
                'pokegifs/chikorita.gif', 'pokegifs/bayleef.gif','pokegifs/meganium.gif','pokegifs/cyndaquil.gif','pokegifs/quilava.gif',
                'pokegifs/typhlosion.gif','pokegifs/totodile.gif','pokegifs/croconaw.gif','pokegifs/feraligatr.gif','pokegifs/sentret.gif',
                'pokegifs/furret.gif','pokegifs/hoothoot.gif','pokegifs/treecko.gif','pokegifs/grovyle.gif','pokegifs/sceptile.gif',
                'pokegifs/torchic.gif','pokegifs/turtwig.gif','pokegifs/grotle.gif','pokegifs/torterra.gif','pokegifs/chimchar.gif',
                'pokegifs/victini.gif','pokegifs/snivy.gif','pokegifs/servine.gif','pokegifs/serperior.gif','pokegifs/chespin.gif',
                'pokegifs/quilladin.gif','pokegifs/chesnaught.gif','pokegifs/fennekin.gif','pokegifs/rowlet.gif','pokegifs/dartrix.gif',
                'pokegifs/decidueye.gif','pokegifs/litten.gif','pokegifs/grookey.gif','pokegifs/thwackey.gif','pokegifs/rillaboom.gif',
                'pokegifs/scorbunny.gif'];
    
    for(var i = 1; i <= 60; i++){
        document.getElementById(`a` + i).src=gifs[i];
    }
}

function pngMode () {
    const png = ['','img/bulbasaur.png','img/ivysaur.png','img/venusaur.png','img/charmander.png','img/charmeleon.png','img/charizard.png',
                'img/squirtle.png','img/wartortle.png','img/blastoise.png','img/caterpie.png','img/metapod.png','img/butterfree.png',
                'img/weedle.png','img/kakuna.png','img/beedrill.png','img/pidgey.png','img/pidgeotto.png','img/pidgeot.png','img/rattata.png',
                'img/raticate.png','img/spearow.png','img/fearow.png','img/ekans.png','img/arbok.png','img/chikorita.png','img/bayleef.png',
                'img/meganium.png','img/cyndaquil.png','img/quilava.png','img/typhlosion.png','img/totodile.png','img/croconaw.png',
                'img/feraligatr.png','img/sentret.png','img/furret.png','img/hoothoot.png','img/treecko.png','img/grovyle.png','img/sceptile.png',
                'img/torchic.png','img/turtwig.png','img/grotle.png','img/torterra.png','img/chimchar.png','img/victini.png','img/snivy.png',
                'img/servine.png','img/serperior.png','img/chespin.png','img/quilladin.png','img/chesnaught.png','img/fennekin.png',
                'img/rowlet.png','img/dartrix.png','img/decidueye.png','img/litten.png','img/grookey.png','img/thwackey.png','img/rillaboom.png',
                'img/scorbunny.png'];

                for(var i = 1; i <= 60; i++){
       document.getElementById(`a` + i).src=png[i];
    }
}