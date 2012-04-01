//In realtà si tratta di una superficie in due dimensioni curvata su se stessa..."Arrotolata per formare un cilkindro cavo"
//per costruirla usiamo un dominio a due dimensioni, in cui una rappresenta il dominio dei cerchi, definito prima
//mentre l'altra include i dati per l'altezza del cilindro
// in cui r = raggio, h= altezza, m = risoluzione raggio, n= risoluzione altezza
var drawCylinder = function (r, h, m, n) {
	

	var cylinderDomain = DOMAIN([[0, 2*PI],[0, h]])([m, n]);

	var mappingCylinder = function (p) {
		var u = p[0];
		var w = p[1];

		return [r * COS(u), r * SIN(u), w, h];
	}

	var mappedCylinder = MAP(mappingCylinder)(cylinderDomain);
	
COLOR(1,1,0)(mappedCylinder);
DRAW(mappedCylinder);
}
drawCylinder(2, 10, 50, 50);