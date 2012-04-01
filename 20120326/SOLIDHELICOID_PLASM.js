var drawSolidHelicoid = function (w2, r, h, t, n, m, q) {
	
	var solidHelicoidDomain = DOMAIN([[0,t*2*PI],[0,r],[0,w2]])([n,m,q]);

	var mappingSolidHelicoid = function (p) {
		var u = p[0];
		var v = p[1];
		var w = p[2];

		var c = h/(t*2*PI);

		var x = v * SIN(u);
		var y = v * COS(u);
		var z = (w2*w) + (u * c);

		return [x, y, z];
	}

	var mappedSolidHelicoid = MAP(mappingSolidHelicoid)(solidHelicoidDomain);

	COLOR([0,0,1])(mappedSolidHelicoid);
	DRAW(mappedSolidHelicoid);
}

drawSolidHelicoid(0.2 , 2, 6, 5, 20, 20, 20);