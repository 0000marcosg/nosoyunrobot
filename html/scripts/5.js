var canvas;
var palabras = ['No', 'Soy', 'Un', 'Robot'];
var posX = 10;
var posY = 20 ;
var row = 40;
var rowN = 0;
var pag;
var maxPag = 14;
var osc;
var play = true;
var pagnum = 5;

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  osc = new p5.Oscillator();
  osc.setType('square');
  osc.freq(300);
  osc.amp(0);
  osc.start();

  pag = getRandompag();
}

function draw() {

if (play){
	osc.amp(0.5, 0.05);
}
else{
	osc.amp(0);
}

if (rowN < 5) {
	for (var i = 0; i < palabras.length; i++) {
		var ran = int(random(4));
		if(palabras[ran] == "No"){
			text = createDiv("<a href='"+pag+".html'>" + "No" + "</a>");
		}

		else{
			text = createDiv(palabras[ran]);
		}
			posX = row + (i*(window.innerWidth/30));
			text.position(posX, posY);
		

		if (i == 3) {
			posY += 20 ;
		}
	}

	if (posY > window.innerHeight - 100){
		row += (window.innerWidth/5);
		posY = 20;
		rowN ++;
		play = !play;
	}
}
		
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
