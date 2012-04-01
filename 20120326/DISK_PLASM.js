var drawDisk = function (r, n, m) {
	
	var diskDomain = DOMAIN([[0, 2*PI],[0,r]])([n,m]);

	var mappingDisk = function (p) {
		var u = p[0];
		var v = p[1];

		var x = v * SIN(u);
		var y = v * COS(u);

		return [x, y];
	}

	var mappedDisk = MAP(mappingDisk)(diskDomain);

	COLOR([0,0,1])(mappedDisk);
	DRAW(mappedDisk);
}

drawDisk(5, 100, 100);