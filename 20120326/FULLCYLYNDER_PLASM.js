var drawFullCilynder = function (r, h, m, n) {
	// in cui r = raggio, m = risoluzione raggio, h = altezza, n =risoluzione dominio dell'altezza
	//la forma generale delle coordinate del Cilindro è la seguente = 
	var coneDomain = DOMAIN([[0, 2*PI],[0, 2*PI],[0, h]])([m, 2*m, n]);

	var mappingC = function (p) {
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
