var maxPag = 14;
var polysynth,rev,pag;
var pagnum = 8;

function setup() {
	polysynth = new p5.PolySynth();
	rev = new p5.Reverb();
	polysynth.play(int(random(30,60)) ,1,0,1);
	rev.process(polysynth,3,2);

	pag = getRandompag();
	var a = confirm("¿Cuando vas a aprender?");
		if (a == true) {
    			
    			polysynth.play(int(random(30,60)) ,1,0,1);
				rev.process(polysynth,3,2);
				var b = confirm("JHKLudࢤ࣯lkja8asdoji");
    			if (b){
    				
    				polysynth.play(int(random(30,60)) ,1,0,1);
					rev.process(polysynth,3,2);
					var c = confirm("¿Sos un robot?)/C");
    					if (c){
    						
    						
    						polysynth.play(int(random(30,60)) ,1,0,1);
							rev.process(polysynth,3,2);
							alert("Adios");
							var redirect = window.open(pag +".html", "_self");
    					}
    					else{
    						
    						
    						polysynth.play(int(random(30,60)) ,1,0,1);
							rev.process(polysynth,3,2);
							alert("¿ࢤ?");
							var redirect = window.open(pag + ".html", "_self");
    					}
    			}
    			else{
    				
    				polysynth.play(int(random(30,60)) ,1,0,1);
    				rev.process(polysynth,3,2);
    				alert("Vuelve a empezar");
    				var redirect = window.open("8.html", "_self");
    			}
		} else {
    		
    		polysynth.play(int(random(30,60)) ,1,0,1);
    		rev.process(polysynth,3,2);
    		var d = confirm("Deberiakloas90890");
    		if (d){
    			
    			polysynth.play(int(random(30,60)) ,1,0,1);
    			rev.process(polysynth,3,2);
    			alert("NaN");
    			var redirect = window.open(pag + ".html", "_self");
    		} else {
    			
    			polysynth.play(int(random(30,60)) ,1,0,1);
    			rev.process(polysynth,3,2);
    			var e = confirm("£×Ê¬PӉҹ");
    			if(e){
    				
    				polysynth.play(int(random(30,60)) ,1,0,1);
    				rev.process(polysynth,3,2);
    				alert("£×Ê¬Ӊҹ");
    				var redirect = window.open(pag + ".html", "_self");
    			}else{
    				
    				polysynth.play(int(random(30,60)) ,1,0,1);
    				rev.process(polysynth,3,2);
    				alert("ѼҺݛࢤ࣯ࢱݰ");
    				var redirect = window.open(pag + ".html", "_self");
    			}
		}}
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
