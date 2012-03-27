var drawDome = function (r) {

	var domeDomain = DOMAIN([[0, 2*PI],[0, PI]])([150, 300]);

	var mappingDome = function (p) {
		var w = p[0]-(PI/2);
		var u = p[1];

		var x = r * COS(u) * COS(w);
		var y = r * COS(u) * SIN(w);
		var z = r * SIN(u);
		return [x, y, z];
	}

	var mappedDome = MAP(mappingDome)(domeDomain);
	
COLOR([58,95,205])(mappedDome);
DRAW(mappedDome);
}