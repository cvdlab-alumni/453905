//Molla 'piena'

var drawHelicoid = function (r, h, t, n, m) {
	
	var helicoidDomain = DOMAIN([[0,t*2*PI],[0,r]])([n,m]);

	var mappingHelicoid = function (p) {
		var u = p[0];
		var v = p[1];

		var c = h/(t*2*PI);

		var x = v * SIN(u);
		var y = v * COS(u);
		var z = u * c;

		return [x, y, z];
	}

	var mappedHelicoid = MAP(mappingHelicoid)(helicoidDomain);

	COLOR([0,0,1])(mappedHelicoid);
	DRAW(mappedHelicoid);
}

drawHelicoid(2, 6, 5, 50, 50);