var drawBicolorSphere = function (r) {

	var bicoloSphereDomain = DOMAIN([[0, 2*PI],[0, PI]])([150, 300]);

	var mappingBicolorSphere = function (p) {
		var u = p[0]-(PI/2);
		var w = p[1];

		var x = r * COS(u) * COS(w);
		var y = r * COS(u) * SIN(w);
		var z = r * SIN(u);
		return [x, y, z];
	}

	var mapperdBicolorSphere = MAP(mappingBicolorSphere)(bicoloSphereDomain);

COLOR([58,95,205])(mapperdBicolorSphere);
DRAW(mapperdBicolorSphere);
}