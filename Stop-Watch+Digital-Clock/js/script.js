var milliseconds = 0 ;
var seconds = 0 ;
var minutes = 0 ;
var hours = 0 ;
var i = 0 ;
function startRunning(){
	i++ ;
		if ( i == 2 ){
		i-- ;
	

	if ( i == 1 ){
   milliseconds = milliseconds + 4 ;
		if ( milliseconds === 1000 ) {
		seconds++ ;
			if ( seconds < 10){
	    	seconds = "0" + seconds ;
			}
			milliseconds = 0 ;
			
			if ( seconds === 60 ) {
		minutes++ ;
	     	if ( minutes < 10){
		  minutes = "0" + minutes ;
		}
				seconds = 0 ;
				
				if ( minutes === 60 ) {
					hours++ ;
					minutes = 0 ;
					
					if ( hours === 24) {
						hours = 0 ;
					
					}
				}
			
			}
		}
	}
		}
	document.getElementById("num"). innerHTML = hours + " : " + minutes + " : " + seconds + "  " + "<sup>" + milliseconds + "</sup>" ;
}
function start() {
  time = setInterval(startRunning , 1) ;
}

function stop(){
	clearInterval(time);
}
function reset(){
	stop() ;
	milliseconds=seconds=minutes=hours=0 ;
	document.getElementById("num"). innerHTML = "0 : 0 : 0 <sup>000</sup>";
}

function restart(){
	milliseconds=seconds=minutes=hours=0 ;
}

var canvas = document.getElementById("Canvas01"); 
var ctx = canvas.getContext("2d");
var x=canvas.width/2, y=canvas.height/2;
ctx.rect(0, 0, canvas.width, canvas.height);
var grad = ctx.createRadialGradient(x, y, 30, x, y, 300); 
grad.addColorStop(1, "black");
grad.addColorStop(0, "#36FF00"); ctx.fillStyle = grad; ctx.fill(); 





