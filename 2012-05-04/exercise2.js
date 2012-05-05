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
DRAW(fuselage);
