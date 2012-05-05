//Generic wing profile, defined by a first control point set, used in a Bezier curve

var p1 = [[12,2,0],[6,4,0],[0,2.15,0],[0,1.85,0],[6,0,0],[12,2,0]];
var c1 = BEZIER(S0)(p1);

/*The following code is used to create as many sets of coordinates (translated) as many "kinks" of the wing are needed to be highlighted. 
All those point's set are used to create, in the best way, 
the wing's profile and are constructed on the basis of the first set, 
with suitable repositioning respect to "x", "y", and "z" axes.
The z axis is used to give depth to the wing, 
while x and y are modeled in order to design a profile that reduces the thickness.
Note that the first profile corresponds to the wing's point that will be connected to the fuselage, 
while all subsequent sets of points are needed to define
the rest of the profile, from the base to the tip.*/

var p2 = p1.map(function (p){ return [p[0],p[1],p[2]+3]});
var p3 = p1.map(function (p){ return [p[0]/1.15+1,p[1]/1.2,p[2]+6]});
var p4 = p1.map(function (p){ return [p[0]/1.4+2,p[1]/1.4,p[2]+12]});
var p5 = p1.map(function (p){ return [p[0]/1.8+3,p[1]/1.8,p[2]+18]});
var p6 = p1.map(function (p){ return [p[0]/2.2+3.5,p[1]/2.2,p[2]+21]});
var p7 = p1.map(function (p){ return [p[0]/5+5.5,p[1]/5,p[2]+23.8]});


var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);

//a two-dimensional domain is required to define the surface using the Bezier curves
var surface_domain = DOMAIN([[0,1],[0,1]])([45,60]);

//the following division into different surfaces is necessary in order to allow a separate staining of the wing

var surface1= BEZIER(S1)([c1,c2,c3,c4])
var surface2= BEZIER(S1)([c4,c5,c6])
var surface3= BEZIER(S1)([c6,c7,[7,0.5,24]])

//This is the wing's section mapping
var wing_part1 = COLOR([0.098,0.098,0.44])(MAP(surface1)(surface_domain));
var wing_part2 = COLOR([0.776,0.886,1])(MAP(surface2)(surface_domain));
var wing_part3 = COLOR([0.098,0.098,0.44])(MAP(surface3)(surface_domain));

//Everything collected into a single struct and drawed as a single object
var wing = STRUCT([wing_part1,wing_part2,wing_part3]);

DRAW(wing);
