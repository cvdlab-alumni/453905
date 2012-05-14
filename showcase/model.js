var drawDisk = function (r,s,x,y,z) {
	
	var diskDomain = DOMAIN([[0, 2*PI],[0,r]])([80,80]);

	var mappingDisk = function (p) {
		var u = p[0];
		var v = p[1];

		var x = v * SIN(u);
		var y = v * COS(u);

		return [x, y];
	}

	var mappedDisk = T([0,1,2])([x,y,z])(EXTRUDE([s])(COLOR([0,1,1,1])(MAP(mappingDisk)(diskDomain))));

	DRAW(mappedDisk);
}

var point_set_1 = [[5,5],[5,5],[3,6],[0,9],[3,16],[12,16],[14,9],[6.5,0],[5,0],[5,0]];
var point_set_2 = [[5,0],[5,0],[6.5,0],[13,6],[18,16],[26,16],[28,9],[26,5],[22,2],[18,1],[16,0],[16,0]];
var domain_set = INTERVALS(1)(40);
var profile1 = SPLINE(CUBIC_UBSPLINE(domain_set))(point_set_1);
var profile2 = SPLINE(CUBIC_UBSPLINE(domain_set))(point_set_2);
var first_curve = EXTRUDE([10])(profile1);
var second_curve = EXTRUDE([10])(profile2);
var lower_element = R([1,2])(PI/2)(T([0,1,2])([0,0,0])(COLOR([0.82,0.41,0.11])(STRUCT([first_curve, second_curve]))));
var plane = drawDisk(16,0.5,15,-5,15.8)
DRAW(lower_element);
