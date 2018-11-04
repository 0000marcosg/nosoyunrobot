
var maxPag = 14;
var pag;
var pagnum = 7;

function setup() {
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	var captcha = createDiv("Completely Automated Public Turing test to tell Computers and Humans Apart");
	captcha.size(200,100);
	captcha.position(window.innerWidth/2-100, window.innerHeight/2-50);
	
	var noise = new p5.Noise('white');
	noise.start();


	pag = getRandompag();
}

function draw() {

	setTimeout("redirect()", 15*1000);
		
}

function redirect(){
	var redirect = window.open(pag + ".html", "_self");
}

function getRandompag(){
  pag = int(random(1,maxPag));
  if (pag != pagnum) {
    return pag;
  } else{
    while (pag == pagnum){
      pag = int(random(1,maxPag));
    }
    return pag;
  }
}