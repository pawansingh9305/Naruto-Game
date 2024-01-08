score=0;
cross=true;
audio=new Audio('../music/battle2.mp3');
audiogo=new Audio('../music/akatsuki.mp3');




setTimeout(()=>{
audio.play();
},100);

document.onkeydown = function(e){
    console.log("key code is:",e.keyCode);
    if (e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');

        },700);
    }
    if (e.keyCode==39){
        dino=document.querySelector('.dino');
        dino.style.transform='rotateY(0deg)';
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left =(dinoX+100)+"px";
        

    }
    if (e.keyCode==37){
        dino=document.querySelector('.dino');
        dino.style.transform='rotateY(180deg)';
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left =(dinoX-100)+"px";
    
        
        

    }
    if (e.keyCode==82){
        document.location.reload(true);
       

    }
    if (e.keyCode==75){
        console.log("Kakashi");
        Kakashi=document.querySelector('.kakashi');
        Kakashi.classList.add('animateKakashi');
        Kakashi.style.visibility='visible';
        setTimeout(() => {
            Kakashi.style.visibility='hidden';
            dino.classList.remove('animateKakashi');

        },5800);
       

    }
    if (e.keyCode==66){
        dino=document.querySelector('.dino');
        dino.classList.remove('naruto');
        dino.classList.add('narubeast');
        setTimeout(() => {
            dino.classList.remove('narubeast');
            dino.classList.add('naruto');

        },15000);
    }
    if (e.keyCode==83){
    obstacle = document.querySelector('.obstacle');
    obstacle.classList.add('obstacleAni');
    document.getElementById("start").innerHTML = "PRESS UP to JUMP ";
      setTimeout(()=>{
      document.getElementById("start").innerHTML = "PRESS LEFT OR RIGHT TO MOVE";
      },3000);
      
      setTimeout(()=>{
      document.getElementById("start").innerHTML = "PRESS B TO BECOME BEAST";
      },6000);

      setTimeout(()=>{
      document.getElementById("start").innerHTML ="";},10000);
      
      
    
      
    }
    
}
setInterval(()=>{
    dino = document.querySelector('.dino');
    startGame=document.querySelector('.startGame');
    obstacle = document.querySelector('.obstacle');
    gameOver= document.querySelector(".gameOver");
    gameContainer= document.querySelector('.gameContainer');

    dx= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

     offsetX= Math.abs(dx-ox);
     offsetY= Math.abs(dy-oy);
     console.log(offsetX,offsetY);
     if(offsetX<120 && offsetY<90){
        gameOver.innerHTML='PRESS R TO REPLAY';
        gameContainer.style.backgroundImage = "url('https://images8.alphacoders.com/106/1066339.png')";
        gameOver.style.background= 'none';
        // startGame.classList.remove('startGame');
        // obstacle.classList.add('deadobstacle');
        obstacle.classList.remove('obstacleAni');
        dino.style.left=500+'px';
        obstacle.style.left=800+'px';
        audiogo.play();
        audio.pause();
        setTimeout(()=>{
        audiogo.pause();
        },13000);
       
     }
     else if(offsetX<100 && cross){
        score+=100;
        updateScore(score);
        cross=false;

        setTimeout(()=>{
        cross=true;
        },1000);

        // setTimeout(()=>{
        //     aniDur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        //     newDur=aniDur - 0.01;
        //     if(newDur>=2){
        //     obstacle.style.animationDuration =newDur+'s';
        //     }
        // },400);
        
     }
     else if(ox<10){
        aniDur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur=aniDur - 0.03;
        console.log("newdurlatest",newDur);
        if(newDur>=2){
        obstacle.style.animationDuration =newDur+'s';
        
        }
     }
},100);


  
function updateScore(score){
    scoreCount.innerHTML ="Your Score: "+ score;

}
// function kakashi(){

// }
