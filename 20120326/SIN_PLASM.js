var sinDomain = DOMAIN ([[0,20*PI]])([1000]); //Dominio del Seno, definito tra 0 e 2π

var mappingSin = function (p) {
	var u = p[0];

	return [u, SIN(u)];
}

var mappedSin = MAP(mappingSin)(sinDomain);

COLOR ([0,0,0])(mappedSin);

DRAW(mappedSin); 
