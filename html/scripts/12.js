var pag;
var pMax = 14;
var pagnum = 12;

var y = 0;
var osc;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	osc = new p5.Oscillator('triangle');
	var delay = new p5.Delay();
	delay.process(osc, .2, .7, 2300);
	osc.start();

	pag = getRandompag();
}

function draw(){
	osc.freq(y);

	noStroke();
	fill(0,10);
	rect(0,0,window.innerWidth, window.innerHeight);
	strokeWeight(5);
	stroke(255);
	line(0,y,window.innerWidth,y);
	y += 10;
	if (y > window.innerHeight){
		y = 0;
	}

	setTimeout("redirect()", 10*1000);
}

function redirect(){

	var redirect = window.open(pag + ".html", "_self");
}

function getRandompag(){
  pag = int(random(1,pMax));
  if (pag != pagnum) {
    return pag;
  } else{
    while (pag == pagnum){
      pag = int(random(1,pMax));
    }
    return pag;
  }
}