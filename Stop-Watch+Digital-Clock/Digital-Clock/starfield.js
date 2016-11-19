
function Starfield() {
	this.fps = 30;
	this.canvas = null;
	this.width = 0;
	this.height = 0;
	this.minVelocity = 15;
	this.maxVelocity = 30;
	this.stars = 200;
	this.intervalId = 0 ;
}

//	The main function - initialises the starfield.
Starfield.prototype.initialise = function(div) {
	var self = this;

	//	Store the div.
	this.containerDiv = div;
	self.width = window.innerWidth;
	self.height = window.innerHeight;

	//	Create the canvas.
	var canvas = document.createElement('canvas');
	div.appendChild(canvas);
	this.canvas = canvas;
	this.canvas.width = this.width;
	this.canvas.height = this.height;
};

Starfield.prototype.start = function() {

	//	Create the stars.
	var stars = [];
	for(var i=0; i<this.stars; i++) {
		stars[i] = new Star(Math.random()*this.width, Math.random()*this.height, Math.random()*3+1,
		 (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
	}
	this.stars = stars;

	var self = this;
	//	Start the timer.
this.intervalId = setInterval(function() {
	self.update();
	self.draw();	
	}, 1000 / this.fps);
};

Starfield.prototype.update = function() {
	var dt = 1 / this.fps;

	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.y += dt * star.velocity;
		//	If the star has moved from the bottom of the screen, spawn it at the top.
		if(star.y > this.height) {
			this.stars[i] = new Star(Math.random()*this.width, 0, Math.random()*3+1, 
		 	(Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
		}
	}
};

Starfield.prototype.draw = function() {

	//	Get the drawing context.
	var ctx = this.canvas.getContext("2d");

	//	Draw the background.
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, this.width, this.height);
	//	Draw stars.
	ctx.fillStyle = '#ffffff';
	for(var i=0; i<this.stars.length;i++) {
		var star = this.stars[i];
		ctx.fillRect(star.x, star.y, star.size, star.size);
	}
};

function Star(x, y, size, velocity) {
	this.x = x;
	this.y = y; 
	this.size = size;
	this.velocity = velocity;
}


function runTime(){
	var month = ["Jan", "Feb", "March", "April", "May", "June", "July" , "August" , "September" , "Oct" , "November" , "December"];
	var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var date = new Date() ;
	var ampm = "AM" ;
	var h = date.getHours() ;
	var m = date.getMinutes() ;
	var s = date.getSeconds() ;
	var d = date.getDay() ;
	var M = date.getMonth() ;
	var y = date.getFullYear() ;
	var Month = month[M] ;
    var dayName = day[d] ;



if ( h == 0 ) {
	h = 12 ;
} 
else if ( h > 12) {
	h = h - 12 ;
	ampm = "PM" ;
}
if ( h < 10 ){
	h = "0" + h ;
}
if ( m < 10 ){
	m = "0" + m ;
}
if ( s < 10 ){
	s = "0" + s ;
}
var clock = document.getElementById("clockContainer");
clock.innerHTML = "<center>" + "<h1>" + y + "</h1>" + "</center>" +
"<center>" + "<h4>" +  h + ":" + m + ":" + s + " " + ampm + "</h4>" + "</center>" +
"<center>" + "<h3>" + dayName + "</h3>" + "</center>" +
"<center>" + "<h4>" + Month + "</h4>" + "</center>" ;

  setTimeout('runTime()', 1000);
} ;

runTime();



var container = document.getElementById('container');
	var starfield = new Starfield();
	starfield.initialise(container);
	starfield.start();