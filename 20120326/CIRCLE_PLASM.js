//Il cerchio è il luogo geometrico dei punti per cui la corona esterna è
//composta dalle coordinate per cui x=rcosß ed y=rsinß, 

//Per evitare di scrivere una funzione statica che tracci solo circonferenze di un dato raggio
//includiamo tutto dentro una funzione alla quale passiamo raggio e risoluzione (per completezza)

var drawCircle = function (r, n) {

	var circleDomain = DOMAIN([[0, 2*PI]])([n]);

	var mappingCircle = function (p) {		
			var u = p[0];	

			return [r * COS(u),r * SIN(u) ];
		}
var mappedCircle = MAP(mappingCircle)(circleDomain);

COLOR([0,0,0])(mappedCircle);

DRAW(mappedCircle);
}