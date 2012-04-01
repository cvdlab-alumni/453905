//la sfera va disegnata a prtire da un dominio bidimensionale 
//come coordinate usa x, y, z
//le coordinate della sfera sono:
							//x= r * cos(ß) * cos (∂);
							//y= r * cos(ß) * sin (∂);
							//z= r * sin (ß);
var drawSphere = function (r, m, color) {
	// in cui r = raggio, m = risoluzione raggio

	var sphereDomain = DOMAIN([[0, PI],[0, 2*PI]])([m, 2*m]);

	var mappingSphere = function (p) {
		var u = p[0]-(PI/2);
		var w = p[1];

		var x = r * COS(u) * SIN(w); //Coordinate x ed y invertite per vedere bene il colore esterno
		var y = r * COS(u) * COS(w);
		var z = r * SIN(u);
		return [x, y, z];
	}

	var mappedSphere = MAP(mappingSphere)(sphereDomain);
	
COLOR(color)(mappedSphere);
DRAW(mappedSphere);
}

drawSphere(10, 100, [0,1,0]);
