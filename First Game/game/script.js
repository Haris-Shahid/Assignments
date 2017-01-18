alert ("Please use keyboard key to play this Game... ") ;
var canvas = document.getElementById("canvas");
var box = canvas.getContext("2d") ;
var keys = [] ;

var width = 600 ;
var height = 500 ;
var speed = 2 ;
var points = 0 ;

                    //timer
 var random= (Math.floor(Math.random() * 15)) + 15;
 document.getElementById("h4").innerHTML = random ;
 var tme = (Math.floor(Math.random() * 20)) + 50;
 if( (tme < 60 && tme > 50) && (random < 30 && random > 20) ){ 
 	tme = tme + 10 ;
 }
 document.getElementById("h1").innerHTML = random ;
    document.getElementById("h2").innerHTML = tme ;

 function run(){
    tme-- ;
    if( tme < 10){
    	document.getElementById("error1").innerHTML = tme ;
    }
    document.getElementById("h2").innerHTML = tme ;
	    if (parseInt(document.getElementById('h2').innerHTML)==0 && parseInt(document.getElementById('h4').innerHTML) > 0) {
                  	document.getElementById("loss").showModal();
                    clearInterval(timer1);
                    clearInterval(timerId);
            }
}
var timerId = setInterval(function(){
     run() ;
},1000) ;

var player ={
    x: 10 ,
    y: 10 ,
    width: 10 ,
    height: 5
} ;

var computer={
    x: Math.random() * 290,
    y: Math.random() * 145,
    width: 10 ,
    height: 5
}

window.addEventListener("keydown" , function(e) {
    keys[e.keyCode] = true ;
}, false ) ;

window.addEventListener("keyup" , function(e) {
   delete keys[e.keyCode] ;
}, false ) ;

function scores(){
    points++ ;
   computer.x = Math.random() * 290 ;
   computer.y = Math.random() * 145 ;
   document.getElementById("h3").innerHTML = points ; 
    document.getElementById("h4").innerHTML= document.getElementById("h1").innerHTML- document.getElementById("h3").innerHTML ;
    if( document.getElementById("h4").innerHTML == 0 && document.getElementById("h2").innerHTML >= 0 ) {
    	document.getElementById("win").showModal();
        clearInterval(timer1);
        clearInterval(timerId);
        }  
}

    //  if(document.getElementById("h4").innerHTML > 0 && document.getElementById("h2").innerHTML == 0 ){
    //  document.getElementById("loss").showModal();
    // } 
    // if(document.getElementById("h4").innerHTML == 0 && document.getElementById("h2").innerHTML >= 0  ){
    //      document.getElementById("win").showModal();
    // }

function start(){
    upgrade() ;
    changes() ;
}

function upgrade(){ 
          if ( keys[38]){           //38 no. is for keyboard button up  
                 player.y-=speed ; 
                    document.getElementById("svg_9").setAttribute("class" , "svg");
           }
          else {
              document.getElementById("svg_9").setAttribute("class" , "svg1");
           }
           if ( keys[40]){         //40 no. is for keyboard button down  
                 player.y+=speed ;
                 document.getElementById("svg2").setAttribute("class" , "svg");
           }
          else {
              document.getElementById("svg2").setAttribute("class" , "svg1");
           }
           if ( keys[37]){         //37 no. is for keyboard button left
                  player.x-=speed ;
                  document.getElementById("svg3").setAttribute("class" , "svg");
           }
          else {
                document.getElementById("svg3").setAttribute("class" , "svg1");
           }
           if ( keys[39]){         //39 no. is for keyboard button right  
                    player.x+=speed ;
                    document.getElementById("svg4").setAttribute("class" , "svg");
           }
          else{
                document.getElementById("svg4").setAttribute("class" , "svg1");
           }
                    //for stop from passing borders 
        if ( player.x < 0 ){
            player.x = 0 ;
        }
        if ( player.y < 0 ){
            player.y = 0 ;
        }
        if ( player.x > 290 ){
            player.x = 290 ;
        }
        if ( player.y > 145 ){
            player.y = 145 ;
        }

    if ( remove(player ,computer ))  {
        scores() ;
    }  
    
}


function changes(){
    box.fillStyle = "wheat" ;
    box.clearRect(0 ,0 ,width ,height ) ;
    box.fillRect(player.x ,player.y ,player.width ,player.height ) ;
  //for computer player
    box.fillStyle = "red" ;
    box.fillRect(computer.x ,computer.y ,computer.width ,computer.height ) ;
}

 function remove(first,second){
      return !(first.x > second.x + second.width ||
         second.x > first.x + first.width ||
         first.y > second.y + second.height ||
         second.y > first.y + first.height 
         ) ;
 }


var timer1 = setInterval(function(){
      start() ;
},1000/30) ;
