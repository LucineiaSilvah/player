'use strict'

const playList = 
 [
   { "capa": "https://pre00.deviantart.net/3e57/th/pre/f/2013/285/0/6/pink___try_by_kot1ka-d6q8l6r.jpg",
    "audio": "/music/P!nk - Try (Official Video).mp3",
    "nome": "Try"},
 
   { "capa": "http://2.bp.blogspot.com/_zjVydElJEho/TSTuezoMzwI/AAAAAAAADWE/u8Sj4Q59noQ/s1600/Perfect%2B%2528FanMade%2BSingle%2BCover%2529%2BMade%2Bby%2Bmileyismine.png",
    "audio": "/music/pink.mp3",
    "nome": "Perfect"},
 
   { "capa": "https://images.rapgenius.com/08c4bfa3fffa1a49118ab013cd7aadde.953x953x1.jpg",
    "audio": "/music/Jessie J - Price Tag ft. B.o.B.mp3",
    "nome": "Price tag"},
 
   { "capa": "http://2.bp.blogspot.com/-9wj4NHBkwTw/TW7EnYewObI/AAAAAAAAA_k/BSSqavT_Wzo/s320/Jessie+J+-+Who+You+Are+%2528FanMade+Single+Cover%2529+Made+by+Nixmix.jpg",
    "audio": "/music/Jessie J - Who You Are (Official Music Video).mp3",
    "nome": "Who You Are"},
   { "capa": "https://resources.tidal.com/images/79802d05/807a/40b1/b0d9/c0d5350392e8/640x640.jpg",
    "audio": "/music/Kid Cudi - Day 'N' Nite.mp3",
    "nome": "Kid Cudi - Day 'N' Nite"},
 
  
 ]


const card = document.getElementById('card')

const capa = document.querySelector('#capa')
const musica = document.querySelector('#musica')
var play = false;
let i = 0;
let audio = new Audio();
function tocar(){
 capa.src = `${playList[i].capa}`
 musica.innerText = `${playList[i].nome} `

 audio.src = `${playList[i].audio}`
 if (play) 
    return;
   audio.play()
   let progresso = document.querySelector('.barra')
   let inicio = document.querySelector('.inicio')
   let fim = document.querySelector('.fim')
   audio.ontimeupdate = ()=>{
      
      progresso.style.width = Math.floor(audio.currentTime * 100 / audio.duration ) + '%'
  
     
      inicio.textContent ='0'+ audio.currentTime.toFixed(2)
      fim.textContent = audio.duration.toFixed(2)
     
   }
   play = true;
}
document.querySelector('#play').addEventListener('click', ()=>{
   tocar()

   
});
function pausar(){
   audio.pause()
   audio.currentTime = 0;
   play = false;
}
document.querySelector('#pause').addEventListener('click', ()=>{
 
 pausar()  
    
 });
 function next(){
   pausar()
   i++;
   capa.src = `${playList[i].capa}`
   musica.innerText = `${playList[i].nome}`
   audio.src = `${playList[i].audio}`
   tocar()
 
  
  
}
document.querySelector('#next').addEventListener('click', ()=>{
   next()
})
 function back(){
  pausar();
   i--;
   capa.src = `${playList[i].capa}`
   musica.innerText = `${playList[i].nome}`
   audio.src = `${playList[i].audio}`
   tocar();
  
}
document.querySelector('#back').addEventListener('click', ()=>{
  
   back()
})


