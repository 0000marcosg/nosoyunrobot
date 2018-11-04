var last = 1;
var maxPag = 14;
var polysynth;
var pag;
var pagnum = 6;

function setup(){
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  polysynth = new p5.PolySynth();
  pag = getRandompag();

  for (var x = 0; x < window.innerWidth; x += window.innerWidth/6){
  	for (var y = 0; y < window.innerHeight; y += window.innerHeight/5){
  		if (last == 30){
  			var div = createDiv("<a href='"+pag+".html'>" + "OTRA VEZ" + "</a>");
  		}
  		else{
  			var div = createDiv("OTRA VEZ");
  		}
  		div.size(window.innerWidth/6, window.innerHeight/5);
  		div.position(x, y);
  		last ++;
  	}
  }
}

function draw() {
  polysynth.play(second() + 20 ,1,0,3);
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