const mario =document.querySelector('.mario')
const pipe=document.querySelector('.pipe')
const game_boarding=document.querySelector('.game-boarding')
const gram=document.querySelector('.gram')

//menu pos morte
const menuDead=document.createElement('div')
menuDead.setAttribute("class","manudead")

//Botao de reload
const reload=document.createElement('button')
reload.setAttribute("class","btnreload ")
reload.innerHTML="RELOAD"
menuDead.appendChild(reload)


//botao de aceeso menu
// const retunMenu=document.createElement('button')
// retunMenu.setAttribute("class","btnmenu")
// retunMenu.innerHTML="MENU"
// menuDead.appendChild(retunMenu)

reload.addEventListener("click",()=>{
    window.location.reload();
    

})

 
//funçao pulo do mario acionado por qualquer botao
const jump= () =>{
     mario.classList.add('jump')

     setTimeout(()=>{
        mario.classList.remove('jump')
     },500)

}

//funçao de loop 
const loop =setInterval( ()=>{
    const pipePosition= pipe.offsetLeft
    const gramPosition=gram.offsetLeft
    const marioPosition=+window.getComputedStyle(mario).bottom.replace("px","")
   
 //verificador de acionamento da tecla e se conseguiu passar para o proximo  
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && gramPosition > 0){
        pipe.style.animation='none'
        pipe.style.left=  pipePosition+'px';

        mario.style.animation='none'
        mario.style.bottom= marioPosition+'px';

        mario.src='/image/mario-mario-dead.gif'
        mario.style.width= '75px';
        mario.style.left= '50px';

        gram.style.animation='none'
        gram.style.left=gramPosition+'px'
     
         game_boarding.appendChild(menuDead)  
         console.log(game_boarding)

        clearInterval(loop)


    }

}, 10)


document;addEventListener('keydown',jump)
