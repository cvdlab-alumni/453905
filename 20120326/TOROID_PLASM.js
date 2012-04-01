//	Il toroide è una superfice che può essere ottenuta facendo ruotare una circonferenza attorno ad un asse di rotazione appartenente allo stesso
//	piano della circonferenza,
//	Il toroide è identificato da un raggio interno rin (raggio della parte vuota), un raggio esterno, rex (raggio complessivo), dal raggio del 'tubo' r1 e dal raggio dal centro del toro al centro del 'tubo'
//	Servono ovviamente anche due angoli fondamentali a e b, che sono rispettivamente, l'angolo al centro della ciconferenza che fa da sezione verticale del toroide e l'angolo centrale del toroide stesso
//	le equazioni che descrivono la forma del toroide, in termini assiali, sono
//		x = (r2 + (r1 * COS(a))) * SIN(b); (usando il raggio del tubo e il raggio dal centro)
//		y = (r2 + (r1 * COS(a))) * COS(b); (usando il raggio del tubo e il raggio dal centro)
//		z = r1 * SIN(a);
//	tali raggi sono ricavabili dai raggi complessivi rin ed rex come:
//		r1 = (rex - rin)/2;
//		r2 = (rex -r1);

var drawToroid = function (rex, rin, n, m, color) {
	
	var r1 = (rex - rin)/2;
	var r2 = (rex - r1);

	var toroidDomain = DOMAIN([[0, 2*PI],[0, 2*PI]])([n,m]);

	var mappingToroid = function (p) {
		var a = p[0];
		var b = p[1];
	
		var x = (r2 + (r1 * COS(a))) * SIN(b);
		var y = (r2 + (r1 * COS(a))) * COS(b);
		var z = r1 * SIN(a);
	
		return [x, y, z]; 
	}

	var mappedToroid = MAP(mappingToroid)(toroidDomain);
	
	COLOR(color)(mappedToroid);
	DRAW(mappedToroid);
	
	return mappedToroid; 
}

drawToroid(5, 2, 50, 50, [0,1,0]);