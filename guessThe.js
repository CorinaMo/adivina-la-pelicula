let listInUse = list;
let pista = document.getElementById('pista');
let peli = document.getElementById('peli');
let line = "";
let frase = "";
let pelicula = "";
let errores = 0;
let partidasGanadas = 0;
let readErrors = document.getElementById('errores');
let readWins = document.getElementById('ganadas');
let playSound = document.getElementById('keySound');
startGame();

//ESCOGE FRASE + PELI/SERIE, ENCRIPTA Y DEVUELVE
function startGame(){
    
    let elementoLista = listInUse[Math.floor(Math.random() * listInUse.length)];
    frase = elementoLista.frase.valueOf();
    pelicula = elementoLista.pelicula.valueOf();

    pista.innerHTML = `<h2><b> ${frase} </b></h2> <br/>`;
    let peliArray = (pelicula.split(" "));

    let peliEnc = peliArray.map(peliStr =>{
        return peliStr.replace(/[A-Z]/g, ("_"));
    });
    line = (peliEnc.toString()).replace(/,/g, " ");
    peli.innerHTML = `<b> ${line} </b>`
}

// ESCUCHA EVENTO DE KEYBOARD Y RESPONDE
function keyUse(e){
    let letraKey = (`${e.key}`).toUpperCase();
    playSound.play();
    let newLine = "";
    let letter = line.split("");
    
    // REEMPLAZO DE "-" POR LETRA ORIGINAL SI EXISTE, SI NO EXISTE SUMARÁ 1 ERROR.
    for(let i = 0; i < pelicula.length; i++){
        if(pelicula[i] == letraKey){
            newLine += letraKey;
        }else{
            newLine += letter[i];
        }
        line = newLine;
        peli.innerHTML = `<b> ${line} </b>`;       
    }   
    if(pelicula.indexOf(letraKey) === -1){
        errores += 1;
        readErrors.innerHTML = `<b>Errores: ${errores} </b>`
        if(errores === 8){
            alert(`¡PERDISTE ESTA VEZ! Has ganado ${partidasGanadas} vez/veces.`);
            location.reload();
        }
    }
    setTimeout(go, 1000);
    function go(){checkWin(line)};
}

// CHECK SI SE HA COMPLETADO LA FRASE
function checkWin(l){
    
    if(l.indexOf("_") === -1){
        alert(`¡Has ganado!`);
        partidasGanadas += 1;
        errores = 0;
        readErrors.innerHTML = `<b>Errores: ${errores} </b>`
        readWins.innerHTML = `<b>Partidas ganadas: ${partidasGanadas} </b>`
        startGame();
    }else{}    
}
 
//LISTENERS
window.addEventListener('keydown', keyUse);