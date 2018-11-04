var canvas;
var volver;
var pag;
var posX = 0;
var posY = 5;
var salto;
var osc;
var osc2;
var pMax = 14;
var amp1 = 0.0;
var pagnum = 2;

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  osc = new p5.Oscillator();
  osc.setType('sawtooth');
  osc.start();
  osc.freq(92.498606);
  var reverb = new p5.Reverb();
  reverb.process(osc, 3, 2);
  osc2 = new p5.Oscillator();
  osc2.setType('sawtooth');
  osc2.start();
  osc2.freq(97.998859);
  var reverb2 = new p5.Reverb();
  reverb2.process(osc2, 3, 2);
  pag = getRandompag();
 }

function draw(){
  amp1 = amp1 + 0.001;
  osc.amp(amp1);
  osc2.amp(amp1);
  largo = (window.innerWidth-110);
  alto = (window.innerHeight-40);


  volver = createDiv("<a href='"+pag+".html' color= 'yellow'>Volver</a> |");
  volver.position(posX,posY);
  if(posX<largo){
  posX = posX + 70;
}else{
  if(posY<alto){
  posY = posY+25;
  posX = 0;
}
}
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
