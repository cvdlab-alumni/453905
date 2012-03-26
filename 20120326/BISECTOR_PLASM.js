var domain = DOMAIN ([[0,10]])([50]);

var mappingBisector = function (p) {
	var u = p[0];
	return [u, u]; //Bisettrice = luogo geometrico dei punti tali che x=y;
};

var mappedBisector = MAP(mappingBisector)(domain);

COLOR ([0,0,0])(mappedBisector);
DRAW(mappedBisector); 