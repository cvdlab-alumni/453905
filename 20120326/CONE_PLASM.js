// Il cono è visibile come una superficie piana ripiegata, (oppure come una piramide a base circolare, nel caso del cono solido
// La costruzione relativa alla geometria piana, e si esegue come per il cilindro cavo 
// Definendo un'altezza h per il cono, si fa in modo di applicare la funzione di mappatura dei punti fino a tale altezza
// partendo dalla base fino al vertice
// il modello si costruisce tracciando quindi una serie di circonferenze concentriche sovrapposte, ma di raggio sempre decrescente, fino al singolo punto
// dalle equazioni polari per tracciare il cono si ha:
// x = r * (1-b) * COS(a), 
// y = r * (1-b) * SIN(a), 
// z = h * b,
// I domini, per il cono, sono: quello delle funzioni trigonometriche e quello dell'intervallo di valori che può assumere h*ß. 

var drawCone = function (r, h, n, m, color) {
	
	var coneDomain = DOMAIN([[0, 2*PI],[0,1]])([n, m]);

	var traslateDomain = function (p) {

		var f = p[0];		//solo per mostrare come si può separare la traslazione dal resto della funzione
		var g = p[1];		//in questo caso non fa nulla
				
		return[f, g];
		}

	var traslatedDomain = MAP(traslateDomain)(coneDomain);

	var mappingCone = function (p) {

	var a = p[0];
	var b = p[1];
	
	var x = r * (b) * COS(a);
	var y = r * (b) * SIN(a);
	var z = h * b;
	
	return [x, y, z]; 
	}

	var mappedCone = MAP(mappingCone)(traslatedDomain);
	
	COLOR(color)(mappedCone);
	DRAW(mappedCone);
	
	return mappedCone; 
}

drawCone(5, 20, 50, 50, [0,1,0]);
