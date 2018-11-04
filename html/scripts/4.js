var canvas;
var osc;
var osc2;
var reverb;
var delay;
var i1;
var i2;
var t;
var amp1;
var amp2;
var fft;
var entender;
var posY = 10;
var pag;
var pMax = 14;
var notas1 = [261.625565, 293.664768, 329.627557, 349.228231, 415.304698, 440.000000, 493.883301, 523.251131, 659.255114, 830.609395, 880.000000];
var notas2 = [220.000000, 207.652349, 164.813778, 130.812783, 246.941651 ];
var pagnum = 4;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc = new p5.Oscillator();
  osc2 = new p5.Oscillator();

  osc.setType('triangle');
  osc2.setType('sine');

  /*osc.amp(.3);
  osc2.amp(1);*/

  delay.process(osc, .12, .7, 2300);
  reverb.process(osc, 3, 2);
  reverb.process(osc2, 3, 2);
  osc.start();
  osc2.start();
  fft = new p5.FFT();
  pag = getRandompag();
  entender = createDiv("<form action='"+pag+".html'><input type='submit' value='cuando vas a enteder que esto no se puede hacer'></form>");
  entender.position((window.innerWidth-425),20);
 

}

function draw() {
  background(0);
  i1 = Math.floor(Math.random()*(0-11))+11;
  osc.freq(notas1[i1]);

  i2 = Math.floor(Math.random()*(0-5))+5;
  osc2.freq(notas2[i2]);
  amp1 = map(mouseY, 0, height, 1, .01);
  amp2 = map(mouseX, 0, width, 1, .01);
  osc.amp(amp1);
  osc2.amp(amp2);
  var lineas = fft.analyze();
  fill(255);
  for (var i = 0; i< lineas.length; i++){
    var x = map(i, 0, lineas.length, 0, width);
    var h = -height + map(lineas[i], 0, 255, height, 0);
    rect(x, height, width / lineas.length, h );
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

