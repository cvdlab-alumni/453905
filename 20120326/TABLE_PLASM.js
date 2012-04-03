var plane = CUBOID([1,1,0.2]);
var surface = (T([0,1,2])([0,0,0.7])(plane));
var leg = CUBOID([0.1,0.1,0.7]);
var leg1 = (T([0])([0.9])(leg));
var leg2 = (T([1])([0.9])(leg));
var leg3 = (T([0,1])([0.9,0.9])(leg));
var table = STRUCT([leg,leg1,leg2,leg3,surface]);

DRAW(table)

//----//

//Versione parametrica  ....da rivedere

var drawTable = function (l1, l2, s, h, f ) {

	var l1 = this.l1 || 1;
	var l2 = this.l2 || 1;
	var s = this.s || 0.2;
	var h = this.h || 0.7;
	var f = this.f || 0.1;

	var x = l1-0.1;
	var y = l2-0.1;

	var plane = CUBOID([l1,l2,s]);
	var surface = (T([0,1,2])([0,0,h])(plane));

	var leg = CUBOID([f,f,h]);
	var leg1 = (T([0])([x])(leg));
	var leg2 = (T([1])([y])(leg));
	var leg3 = (T([0,1])([x,y])(leg));
	var table = STRUCT([leg,leg1,leg2,leg3,surface]);

	DRAW(table);
}