//Airstrip structure, composed by a green space that sorrounds the fild area and a central strip

var left_area = SIMPLEX_GRID([[40],[300],[1]]);
var right_area = SIMPLEX_GRID([[-40,-80,40],[300],[1]]);

var field_aera = COLOR([0,0.392,0])(STRUCT([left_area,right_area]));

var airstrip_struct = COLOR([0.14,0.14,0.14])(SIMPLEX_GRID([[-40,80],[300],[1]]));
var airstrip_strips = COLOR([1,1,1])(SIMPLEX_GRID([[-60,-16,8],[50,-12,50,-12,50,-12,50,-12,50],[1.1]]));

var airstrip = STRUCT([field_aera, airstrip_strips, airstrip_struct]);

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

//Everything collected into a single struct
var wing1 = T([0,2])([0.5,3])(R([0,2])([PI/2])(STRUCT([wing_part1,wing_part2,wing_part3])));
var wing2 = R([0,1])([PI])(T([0,1])([-3,-4])(wing1)); 

//The following is the rear part of the fuselage, which starts from the cockpit up to the queue's stabilizers
var surface_domain = DOMAIN([[0,1],[0,1]])([45,60]);

var p1_back = [[1.5,6,0],[1,5.5,0],[0.5,4.5,0],[0,3.5,0],[0.25,2.5,0],[0.5,1.5,0],[0.75,0.5,0],[1,0,0],[1.5,-0.5,0],[2,0,0],[2.25,0.5,0],[2.5,1.5,0],[2.75,2.5,0],[3,3.5,0],[2.5,4.5,0],[2,5.5,0],[1.5,6,0]];
var knots_back = [0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,15];

var c1 = NUBS(S0)(2)(knots_back)(p1_back);

var p2 = p1_back.map(function (p){ return [p[0]/1.2+0.2,p[1]/1.2,p[2]+1.5]});
var p3 = p1_back.map(function (p){ return [p[0]/1.4+0.3,p[1]/1.4,p[2]+6.5]});
var p4 = p1_back.map(function (p){ return [p[0]/1.6+0.4,p[1]/1.6,p[2]+8.5]});
var p5 = p1_back.map(function (p){ return [p[0]/1.8+0.5,p[1]/1.8,p[2]+11.5]});
var p6 = p1_back.map(function (p){ return [p[0]/2+0.6,p[1]/2,p[2]+15]});

var c2 = NUBS(S0)(2)(knots_back)(p2);
var c3 = NUBS(S0)(2)(knots_back)(p3);
var c4 = NUBS(S0)(2)(knots_back)(p4);
var c5 = NUBS(S0)(2)(knots_back)(p5);
var c6 = NUBS(S0)(2)(knots_back)(p6);

var surface1 = BEZIER(S1)([c1,c2,c3]);
var surface2 = BEZIER(S1)([c3,c4,c5]);
var surface3 = BEZIER(S1)([c5,c6,[1.4,1.5,15]]);

//Perhaps the following code may seems to be redundant, but it's needed to create different colors for different parts of the fuselage 
var back_fuselage1 = COLOR([0.776,0.886,1])(MAP(surface1)(surface_domain));
var back_fuselage2 = COLOR([0.098,0.098,0.44])(MAP(surface2)(surface_domain));
var back_fuselage3 = COLOR([0.776,0.886,1])(MAP(surface3)(surface_domain));

var back_fuselage = STRUCT([back_fuselage1, back_fuselage2, back_fuselage3]);


//Central fuselage

//This is the central part of the fuselage, which was created in order to leave an open space that will house the dome of the pilot
var p1_front_open = [[0.5,4.5,0],[0,3.5,0],[0.25,2.5,0],[0.5,1.5,0],[0.75,0.5,0],[1,0,0],[1.5,-0.5,0],[2,0,0],[2.25,0.5,0],[2.5,1.5,0],[2.75,2.5,0],[3,3.5,0],[2.5,4.5,0]];

var knots_front_open = [0,0,0,1,2,3,4,5,6,7,8,9,10,11,11,11];

var c1 = NUBS(S0)(2)(knots_front_open)(p1_front_open);

var p2 = p1_front_open.map(function (p){ return [p[0],p[1],p[2]-1.5]});
var p3 = p1_front_open.map(function (p){ return [p[0],p[1],p[2]-6]});
var c2 = NUBS(S0)(2)(knots_front_open)(p2);
var c3 = NUBS(S0)(2)(knots_front_open)(p3);

//This is the final part of the fuselage, 
//which will link the section housing the pilot with the tip and the propellers
var p4_front_closed = [[0.75,5,-6],[0.5,4.5,-6],[0,3.5,-6],[0.25,2.5,-6],[0.5,1.5,-6],[0.75,0.5,-6],[1,0,-6],[1.5,-0.5,-6],[2,0,-6],[2.25,0.5,-6],[2.5,1.5,-6],[2.75,2.5,-6],[3,3.5,-6],[2.5,4.5,-6],[2.25,5,-6],[0.75,5,-6]];

var knots_front_closed = [0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,14];

var c4 = NUBS(S0)(2)(knots_front_closed)(p4_front_closed);

var p5 = p4_front_closed.map(function (p){ return [p[0],p[1]/2,p[2]-1]});
var p6 = p4_front_closed.map(function (p){ return [p[0],p[1]/1.1-0.5,p[2]-9]});
var p7 = p4_front_closed.map(function (p){ return [p[0]/1.2+0.2,p[1]/1.2+0.7,p[2]-12]});
var p8 = p4_front_closed.map(function (p){ return [p[0]/1.6+0.6,p[1]/1.3+1,p[2]-15]});

var c5 = NUBS(S0)(2)(knots_front_closed)(p5);
var c6 = NUBS(S0)(2)(knots_front_closed)(p6);
var c7 = NUBS(S0)(2)(knots_front_closed)(p7);
var c8 = NUBS(S0)(2)(knots_front_closed)(p8);

var closed_curve = BEZIER(S1)([c4,c5,c6,c7,c8,[1.5,2.2,-21.7]]);
var open_curve = BEZIER(S1)([c1,c2,c3]);

var closed_fuselage = COLOR([0.776,0.886,1])(MAP(closed_curve)(surface_domain));
var open_fuselage = COLOR([0.098,0.098,0.44])(MAP(open_curve)(surface_domain));

var front_fuselage = STRUCT([closed_fuselage, open_fuselage]);

//The following code is used to create 
//and to correctly position the dome of protection of the pilot
var controlpoints_pilot1 = [[0.5,3.5,0],[0.5,4.5,0],[0.75,5,0],[1,5.5,0],[1.25,5.75,0],[1.5,6,0],[1.75,5.75,0],[2,5.5,0],[2.25,5,0],[2.5,4.5,0],[2.5,3.5,0]];
var knots_pilota_area = [0,0,0,1,2,3,4,5,6,7,8,9,9,9];
var curve1 = NUBS(S0)(2)(knots_pilota_area)(controlpoints_pilot1);

var controlpoints_pilot2 = controlpoints_pilot1.map(function (p){ return [p[0],p[1],p[2]-5.5]});
var controlpoints_pilot3 = controlpoints_pilot1.map(function (p){ return [p[0],p[1],p[2]-10.5]});
var controlpoints_pilot4 = controlpoints_pilot1.map(function (p){ return [p[0],p[1],p[2]-25]});

var curve2 = BEZIER(S0)(controlpoints_pilot2);
var curve3 = BEZIER(S0)(controlpoints_pilot2);
var curve4 = BEZIER(S0)(controlpoints_pilot2);

var pilot_area_curve = BEZIER(S1)([curve1,curve2,curve3,curve4,[1.5,3,-7]]);

var pilot_aera = COLOR([0,1,1,0.66])(MAP(pilot_area_curve)(surface_domain));

//The complete fuselage
var fuselage = STRUCT([back_fuselage, pilot_aera, front_fuselage]);


/*The following code is used to achieve the tail stabilizers.
For the realization of a structure that included two (symmetrical) horizontal stabilizers, 
and one vertical stabilizer (perpendicular to those above), it was chosen to instantiate and rotate one of the horizontal stabilizers, 
and then center the structure with the vertical stabilizer.*/
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
var stabilizer_colored = COLOR([0.098,0.098,0.44])(STRUCT([horizontalStabilizer, verticalStabilizer]));
var stabilizer = T([0,1,2])([1.5,1.2,13])(R([0,2])([PI])(stabilizer_colored));



/*Propeller structure:
The structure of the propellers was derived from a Bezier curve, enclosed in a rectangle of appropriate size.
The curve, once replicated in z, has been used to achieve a surface that would make the propeller's form adequately.
Each propeller has subsequently been rotated and translated appropriately to fit together with the tip of the plane
*/

var surface_domain = DOMAIN([[0,1],[0,1]])([45,60]);//da togliere
var controlpoints_propeller1 = [[0,0,0],[3.2,0.8,0],[4,4,0],[0.8,3.2,0],[0,0,0]];
var curve1 = BEZIER(S0)(controlpoints_propeller1);

var controlpoints_propeller2 = controlpoints_propeller1.map(function (p){ return [p[0],p[1],p[2]-0.07]}); 
var curve2 = BEZIER(S0)(controlpoints_propeller2);

var profile = BEZIER(S1)([[2,2,0.06],curve1,curve2,[2,2,-0.07]]);
var propeller_generic = MAP(profile)(surface_domain);
var propeller1 = T([0,1])([-0.2,-0.2])(propeller_generic);
var propeller2 = R([0,1])([PI/2])(T([0,1])([-0.2,-0.2])(propeller_generic));
var propeller3 = R([0,1])([225*PI/180])(propeller_generic);

var helix = T([0,1,2])([1.5,2.4,-21])(COLOR([0,0,0])(STRUCT([propeller1, propeller2, propeller3])));

//This is the complete airplane structure...
var airplane = R([1,2])([PI/2])(T([0,1,2])([80,5,-150])(STRUCT([wing1, wing2, fuselage, stabilizer, helix])));


//..and this one is the structure of the airplane and the airstrip

var structure = STRUCT([airstrip, airplane]);
DRAW(structure);



