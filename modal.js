const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

let myGif = document.getElementById('gifWin');
let msg = document.getElementById('mnsWin');
let sonido = document.getElementById('miaudio');

// GIFS (Giphy.com) 
const gif1 = `<img src="win1.gif" width="95%" />`;
const gif2 = `<img src="win2.gif" width="100%" />`;
const gif3 = `<img src="win3.gif" width="100%" />`;
const gif4 = `<img src="win4.gif" width="95%" />`;

const gifArray = [gif1, gif2, gif3, gif4];

// SONIDOS
const sound1 = "goffyGoofy_Holler.mp3";

// AL GANAR ->MODAL CON GIF AL AZAR

function youWin(){
    modal.style.display = "inline-block";
    let gifAzar = gifArray[Math.floor(Math.random() * gifArray.length)];
    let esteGif = gifAzar.valueOf();
    myGif.innerHTML = esteGif;  
}


