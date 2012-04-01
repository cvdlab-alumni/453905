var drawCone = function (b, h, n, m, color) {
	
	var coneDomain = DOMAIN([[0, b],[0,b])([n, n]);

	var traslateDomain = function (p) {

		var x = p[0];		//solo per mostrare come si può separare la traslazione dal resto della funzione
		var y = p[1];		//in questo caso non fa nulla
				
		return[x, y];
		}

	var traslatedDomain = MAP(traslateDomain)(coneDomain);

	var mappingCone = function (p) {

	var a = p[0];
	var b = p[1];
	
	var x = b+b+b+b;
	var y = 
	
	return [x, y, h]; 
	}

	var mappedCone = MAP(mappingCone)(traslatedDomain);
	
	COLOR(color)(mappedCone);
	DRAW(mappedCone);
	
	return mappedCone; 
}

drawCone(5, 20, 50, 50, [0,1,0]);