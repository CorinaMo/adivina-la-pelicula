//JQUERY PARA MANEJAR EL TECLADO HTML, SÚPER SENCILLO
$(function(){

    let teccc = [];

    //CADA TECLA DEL DOM AL ARRAY TECCC
    for( tec of $('.tecla')){
        teccc.push(tec)     
    }    

    //POR CADA TECLA ALMACENADA EN TECCC, CUANDO SE HAGA CLIC, 
    //DEVUELVE EL VALOR DE LA TECLA A LA FUNCIÓN REEMPLAZAR (DE GuessThe.js)   
    for( t of teccc){
        let i = teccc.indexOf(t);
        $(teccc[i]).click(function(){
            playSound.play();
            let laTecla = `${teccc[i].value}`;
            reemplazar(laTecla);
        })
    }    
})    
