var pag;
var pMax = 14;
var ruido;
var osc;
var pan = -1;
var t = 0;
var fft;
var pagnum = 10;

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  ruido = new p5.Noise();
  ruido.setType("white");
  ruido.start();

  osc = new p5.Oscillator();
  osc.setType('square');
  osc.start();
  osc.amp(0.3);
  osc.freq(77.781746);

  fft = new p5.FFT();
}

function draw(){

  background(0);
  noCursor();
  var waveform = fft.waveform(ruido);
  beginShape();
  stroke('white');
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    line(x, y, waveform.length, y );
  }
  endShape();
  if ((t%20)==0){
    pan = -pan;
}
  pag = getRandompag();
  setTimeout("redireccionarPagina()", 10000);
  ruido.pan(pan);
  t++;
}

function redireccionarPagina() {
  window.location = ""+pag+".html";
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
