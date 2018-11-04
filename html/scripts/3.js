var canvas;
var ascii;
var text;
var posX = 0;
var posY = 10;
var largo;
var alto;
var l;
var letra = ["A", "través", "del", "universo", "vuelvo", "a", "casa"];
var i;
var pag;
var osc;
var osc2;
var pMax = 14;
var pagnum = 3;

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  var reverb = new p5.Reverb();
  osc = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc.setType('sine');
  osc.start();
  osc.freq(391.995436);
  osc2.setType('sine');
  osc2.start();
  osc2.freq(415.304698);
  reverb.process(osc, 3, 2);
  reverb.process(osc2, 3, 2);
  pag = getRandompag();
}


function draw(){
  ascii = Math.floor(Math.random()*(162-188))+188;
  largo = (window.innerWidth-8);
  alto = (window.innerHeight-40);



  if(posX<largo){
    if((posX>(window.innerWidth/4))&&(posX<(window.innerWidth/2))){
      posX = posX + 40;
      for (i=0;i<letra.length;i++){
      l = createDiv("<form action='"+pag+".html'><input type='submit' value='"+letra[i]+"'></form>");
      l.position(posX, posY);
      posX = posX + 90;
    }
    }else{
    text = createDiv("<p>&#"+ascii+"</p>");
    text.position(posX, posY);
    posX = posX + 7;
  }
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
