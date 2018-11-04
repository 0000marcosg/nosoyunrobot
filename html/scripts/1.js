var canvas;
var check;
var pag;
var osc;
var pMax = 14;
var notas = [130.812783, 123.470825];
var pagnum = 1;

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  var reverb = new p5.Reverb();
  osc = new p5.Oscillator();
  osc.setType('square');
  osc.start();
  reverb.process(osc, 3, 2);

  check = createDiv("<form onsubmit='return checkForm(this)' action='"+pag+".html'>"+"<input type='checkbox'  name='robot'> No Soy Un Robot"+"<br>"+"<input type='submit' value='Aceptar'>"+"</form>");
  check.position(window.innerWidth/2-50, window.innerHeight/2-10);

  pag = getRandompag();
  
 }

function draw(){
  var i1 = Math.floor(Math.random()*(0-2))+2;
  osc.freq(notas[i1]);
  var amp1 = map(mouseY, 0, height, 1, .01);
  osc.amp(amp1);
  setTimeout("redireccionarPagina()", 30000);
}

function mouseMoved() {
  check = createDiv("<form onsubmit='return checkForm(this)' action='"+pag+".html'>"+"<input type='checkbox'  name='robot'> No Soy Un Robot"+"<br>"+"<input type='submit' value='Aceptar'>"+"</form>");
  check.position(mouseX, mouseY);
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
