var tetraedro = function (l) {

	var h = [COS(PI/3) * COS(PI/3)] * l;

	var a = (l/2);
	var b = l/2*Math.sqrt(3);
	

	var t = SIMPLICIALCOMPLEX ([[0,0,0],[l,0,0],[a,b,0],[a,h,h]])([[0,3,1],[0,2,3],[1,3,2],[0,2,1]]);

	COLOR([0,1,0])(t);
	
	DRAW(t);
}
tetraedro(5);


