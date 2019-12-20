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
let tecla = document.getElementsByClassName('tecla');
let teclaOn = "";

//TECLADO DEL JUEGO ON/OFF  &  CAPTURAR VALOR TECLA
function onOff(){    
    let teclado = document.getElementById('cajaTeclado');
    teclado.style.display = (teclado.style.display === 'none') ? 'block' : 'none'; 
}
//JQUERY PARA MANEJAR EL TECLADO DEL JUEGO HTML, SÚPER SENCILLO
$(function(){

    let teccc = [];

    //CADA TECLA DEL DOM AL ARRAY TECCC
    for( tec of $('.tecla')){
        teccc.push(tec)     
    }    

    //POR CADA TECLA ALMACENADA EN TECCC, CUANDO SE HAGA CLIC, 
    //DEVUELVE EL VALOR DE LA TECLA A LA FUNCIÓN REEMPLAZAR  
    for( t of teccc){
        let i = teccc.indexOf(t);
        $(teccc[i]).click(function(){
            playSound.play();
            let laTecla = `${teccc[i].value}`;
            reemplazar(laTecla);
        })
    }    
})    

//COMIENZA EL JUEGO
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
    reemplazar(letraKey);
}
function reemplazar(n){
    let newLine = "";
    let letter = line.split("");    

    // REEMPLAZO DE "-" POR LETRA ORIGINAL SI EXISTE, SI NO EXISTE SUMARÁ 1 ERROR.
    for(let i = 0; i < pelicula.length; i++){          
        if(pelicula[i]=== n){
            newLine += n;
        }else{
            newLine += letter[i];
        }
        line = newLine;
        peli.innerHTML = `<b> ${line} </b>`;       
    }   
    if(pelicula.indexOf(n) === -1){
        errores += 1;
        readErrors.innerHTML = `<b>Errores: ${errores} </b>`
        if(errores === 8){
            alert(`¡PERDISTE ESTA VEZ! Has ganado ${partidasGanadas} vez/veces.`);
            location.reload();
        }
    }
    setTimeout(go, 800);
    function go(){ checkWin(line) };
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

//LISTENER
window.addEventListener('keydown', keyUse);

