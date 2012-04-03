var pentagono = function (l) {
	var o = 0;
	var a = l;
	var b = l-3;
	var c = l+1;
	var d = l+3;
	var e = l-1;
	var f = l+2;

	var pen = new SIMPLICIALCOMPLEX([[o,l],[b,o],[c,o],[d,l],[e,f]])([[0,1,3],[1,2,3],[4,0,3]]);

	DRAW(pen);
}
