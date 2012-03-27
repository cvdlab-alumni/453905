var draw3DSin = function (r, m) {

	var 3DSinDomain = DOMAIN([[0, 2*PI],[0, PI]])([m, 2*m]);

	var mapping3DSin = function (p) {
		var u = p[0]-(PI/2);
		var w = p[1];

		var x = r * COS(u) * COS(w);
		var y = r * COS(u) * SIN(w);
		var z = r * COS(w);
		return [x, y, z];
	}

	var mapped3DSin = MAP(mapping3DSin)(3DSinDomain);
	
COLOR([220,0,0])(mapped3DSin);
DRAW(mapped3DSin);
}
