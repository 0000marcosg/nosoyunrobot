var pag;
var pMax = 14;
var pagnum = 13;

var x = 0;
var osc;
var text;
var asc = 123;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	osc = new p5.Oscillator('sine');
	var delay = new p5.Delay();
	delay.process(osc, .2, .7, 2300);
	osc.start();

	pag = getRandompag();
	text = createDiv("<p>&#"+asc+"</p>");
	text.position(window.innerWidth/2, window.innerHeight/2 - 150);
}

function draw(){
	osc.freq(x);
	stroke(255);

	asc = int(random(100, 200));
	text.html("<p>&#"+asc+"</p>");
	line(x, window.innerHeight/2 - 20, x,window.innerHeight/2 + 20);
	x += 2;
	if (x > window.innerWidth){
		redirect();
	}

	
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