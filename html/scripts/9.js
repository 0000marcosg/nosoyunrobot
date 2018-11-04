var canvas;
var pag;
var osc;
var osc2;
var osc3;
var ok;
var t = 0;
var p;
var x;
var y;
var pMax = 14;
var notas = [261.625565, 0, 311.126984, 0, 369.994423, 0, 523.251131];
var pagnum = 9;

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  var reverb = new p5.Reverb();
  var rev2 = new p5.Reverb();
  var delay = new p5.Delay();
  osc = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  osc.setType('triangle');
  osc2.setType('triangle');
  osc3.setType('triangle');
  delay.process(osc, .2, .7, 2300);
  reverb.process(osc, 3, 2);
  rev2.process(osc2, 3, 2)
  osc.start();
  osc2.start();
  osc3.start();
  osc2.freq(65.406391);
  osc3.freq(46.249303);
  osc2.amp(0.5);
  osc3.amp(0.5);

  reverb.process(osc, 3, 2);
  pag = getRandompag();

  ok = createDiv("<form action='"+pag+".html'><input type='submit' value='No'></form>");
  ok.position((window.innerWidth/2-10), (window.innerHeight/2-5))

 }

function draw(){

  background(0);
  var i1 = Math.floor(Math.random()*(0-8))+8;
  var amp1 = 0.5;
  osc.amp(amp1);
  osc2.amp(amp1);
  osc3.amp(amp1);
  x = Math.floor(Math.random()*(0-window.innerWidth))+window.innerWidth;
  y = Math.floor(Math.random()*(0-window.innerHeight))+window.innerHeight;

  if ((t % 10)==0){

  osc.freq(notas[i1]);
  if(!(notas[i1]==0)) {
  p = createDiv("<p>&#215;</p>");
  p.position(x,y);
 }
}
  t++
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