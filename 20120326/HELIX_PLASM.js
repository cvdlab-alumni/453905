//Disegno di una elica ('molla'), definito su un singolo dominio, tridimensionale
//dovendo essere circolare, il dominio di massima è lo stesso della circonferenza, ma moltiplicato per il numero di spire della molla
//Sull'asse delle ascisse e delle ordinate si tracciano le semplici coordinate di una circonferenza, USANDO UN SOLO ANGOLO, in modo che la 'linea' sia contigua 
//mentre si 'spinge' la struttura lungo l'asse z mediante l'equazione z = alfa * h/(t*2*PI).

var drawHelix = function (r, h, t, n) {
	
	var helixDomain = DOMAIN([[0, t*2*PI]])([n]);

	var mappingHelix = function (p) {
		var u = p[0];

		var c = h/(t*2*PI);

		var x = r * COS(u);
		var y = r * SIN(u);
		var z = u * c;

		return [x, y, z];
	}

	var mappedHelix = MAP(mappingHelix)(helixDomain);

	COLOR([0,0,1])(mappedHelix);
	DRAW(mappedHelix);
}

drawHelix(1, 5, 10, 1000);