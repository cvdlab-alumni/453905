//la sfera va disegnata a prtire da un dominio bidimensionale 
//come coordinate usa x, y, z
//le coordinate della sfera sono:
							//x= r * cos(ß) * cos (∂);
							//y= r * cos(ß) * sin (∂);
							//z= r * sin (ß);
var drawSphere = function (r, m) {
	// in cui r = raggio, m = risoluzione raggio

	var sphereDomain = DOMAIN([[0, PI],[0, 2*PI]])([m, 2*m]);

	var mappingSphere = function (p) {
		var u = p[0]-(PI/2);
		var w = p[1];

		var x = r * COS(u) * COS(w);
		var y = r * COS(u) * SIN(w);
		var z = r * SIN(u);
		return [x, y, z];
	}

	var mappedSphere = MAP(mappingSphere)(sphereDomain);
	
COLOR([254,0,0])(mappedSphere);
DRAW(mappedSphere);
}
