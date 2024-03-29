/*The following code is used to achieve the tail stabilizers.
For the realization of a structure that included two (symmetrical) horizontal stabilizers, 
and one vertical stabilizer (perpendicular to those above), it was chosen to instantiate and rotate one of the horizontal stabilizers, 
and then center the structure with the vertical stabilizer.*/

var surface_domain = DOMAIN([[0,1],[0,1]])([50,100]);
var controlPoints = [[0.6,0,0],[0.1,0.1,0],[0,0.1,0],[0.1,0.2,0],[0.6,0.2,0],[1.1,0.2,0],[1.2,0.1,0],[1.1,0,0],[0.6,0,0]];
var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
var c1 = NUBS(S0)(2)(knots)(controlPoints);
var controlPoints2 = controlPoints.map(function (p){ return [p[0]*2,p[1]*2,p[2]+1.5]});
var controlPoints3 = controlPoints.map(function (p){ return [p[0]*2,p[1]*2,p[2]+3]});
var controlPoints4 = controlPoints.map(function (p){ return [p[0]*2,p[1]*2,p[2]+4.5]});

var c2 = NUBS(S0)(2)(knots)(controlPoints2);
var c3 = NUBS(S0)(2)(knots)(controlPoints3);
var c4 = NUBS(S0)(2)(knots)(controlPoints4);

var surface1 = BEZIER(S1)([c1,c2,c3,c4,[0.75,0.1,4.5]]);
var horizontalStabilizer1 = MAP(surface1)(surface_domain);
var horizontalStabilizer2 = R([1,2])([PI])(T([1,2])([-0.2,0])(horizontalStabilizer1));
var horizontalStabilizer = T([2])([-1])(R([0,2])([PI/2])(STRUCT([horizontalStabilizer1, horizontalStabilizer2])));

var controlPoints5 = [[0.2,0,0],[0,0,0],[0,2,0],[0.1,3.2,0],[0.2,4,0],[0.3,3.2,0],[0.4,2,0],[0.4,0,0],[0.2,0,0]];
var c5 = NUBS(S0)(2)(knots)(controlPoints5);
var controlPoints6 = controlPoints5.map(function (p){ return [p[0]*2,p[1],p[2]-1]});
var controlPoints7 = controlPoints5.map(function (p){ return [p[0]*2,p[1],p[2]-1.7]});
var controlPoints8 = controlPoints5.map(function (p){ return [p[0]*2,p[1],p[2]-2.4]});
var controlPoints9 = controlPoints5.map(function (p){ return [p[0]*2,p[1],p[2]-3.1]});

var c6 = NUBS(S0)(2)(knots)(controlPoints6);
var c7 = NUBS(S0)(2)(knots)(controlPoints7);
var c8 = NUBS(S0)(2)(knots)(controlPoints8);
var c9 = NUBS(S0)(2)(knots)(controlPoints9);

var surface2 = BEZIER(S1)([[0.2,1.5,-0.1],c5,c6,c7,c8,c9,[0.2,0.5,-3.2]]);
var verticalStabilizer = T([0,1])([-0.2,-1])(MAP(surface2)(surface_domain));
var stabilizer = COLOR([0.098,0.098,0.44])(STRUCT([horizontalStabilizer, verticalStabilizer]));

DRAW(stabilizer);