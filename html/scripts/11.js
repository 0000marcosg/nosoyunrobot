var pag;
var pMax = 14;
var letra = ["otra ", "vez ", "salir ", "al ", "sol ", "que ", "no ", "ves ",
              "no ", "hay ", "nadie ", "alrededor ", "por favor ", "vamonos "];
var osc;
var osc2;
var salir;
var posX = 0;
var posY = 10;
var largo;
var alto;
var pagnum = 11;

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  osc = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  var rev = new p5.Reverb();
  var rev2 = new p5.Reverb();
  osc.setType('square');
  osc.amp(0.15);
  osc2.setType('square');
  osc2.amp(0.15);
  osc.freq(493.883301);
  osc2.freq(490.8);
  osc.start();
  osc2.start();
  rev.process(osc, 3, 2);
  rev2.process(osc2, 3, 2);
  pag = getRandompag();
}

function draw(){
  noCursor();
  background(0);
  largo = (window.innerWidth-8);
  alto = (window.innerHeight-40);

  var i = Math.floor(Math.random()*(0-letra.length))+letra.length;
  if(posX<largo){
    if((posX>(window.innerWidth/4))&&(posX<(window.innerWidth/1.4))){
      salir = createDiv("<a href='"+pag+".html'>"+letra[i]+"</a>");
      salir.position(posX, posY);
      posX = posX+90;
    }
      posX = posX+10;
  }else{
    if(posY<alto){
  posY = posY+20;
  posX = 0;
}else{
    window.location = ""+pag+".html";
}
}
}

function getRandompag(){
  pag = int(random(1,pMax));
  print(pag);
  if (pag != pagnum) {
    return pag;
   
  } else{
    while (pag == pagnum){
      pag = int(random(1,pMax));
     
    }
    return pag;
  }
   
}
