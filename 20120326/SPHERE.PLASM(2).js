//la sfera va disegnata a prtire da un dominio bidimensionale 
//come coordinate usa x, y, z
//le coordinate della sfera sono:
							//x= r * cos(ß) * cos (∂);
							//y= r * cos(ß) * sin (∂);
							//z= r * sin (a);
var drawSphere = function (r, m, color) {
	// in cui r = raggio, m = risoluzione, color = [r,g,b];

	var sphereDomain = DOMAIN([[0, PI],[0, 2*PI]])([m, 2*m]);

	var traslateDomain = function (p) {  //Prima traslo il dominio
		var u = p[0];
		var w = p[1];

		return [u-(PI/2), w];
	}

	var traslatedDomain = MAP(traslateDomain)(sphereDomain);

	var mappingSphere = function (p) {
		var a = p[0];
		var b = p[1];

		var x = r * COS(a) * SIN(b);  //Coordinate x ed y invertite per vedere bene il colore esterno
		var y = r * COS(a) * COS(b);
		var z = r * SIN(a);
		return [x, y, z];
	}

	var mappedSphere = MAP(mappingSphere)(traslatedDomain);
	
	COLOR(color)(mappedSphere);
	DRAW(mappedSphere);

	return mappedSphere; //restituisco la sfera in modo da poterla gestire con le funzioni di visualizzazione
}

drawSphere(10, 100, [0,0,1]);
