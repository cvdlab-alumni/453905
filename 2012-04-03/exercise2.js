//Barcelona Pavilion's 3D model

//All the followers are the pieces necessary to build the floor,
//This division is necessary to obtain the spaces in which to build all the others structures 
var border = SIMPLEX_GRID([[39],[1],[1.8]]);
var angle1 = SIMPLEX_GRID([[1],[2],[1.8]]);
var center1 = SIMPLEX_GRID([[-21,15],[-1,16],[1.8]]);
var center2 = SIMPLEX_GRID([[-1,20],[-10,7],[1.8]]);
var rooms = SIMPLEX_GRID([[-1,8],[-17,5],[1.8]]);
var fount = SIMPLEX_GRID([[-36,16],[-4,1],[1.8]]);
var angle2 = SIMPLEX_GRID([[-51,1],[-4,2],[1.8]]);
var plane = SIMPLEX_GRID([[-36,3],[-4,13],[1.8]]);
var garden = SIMPLEX_GRID([[-39,8],[-5,11],[1.8]]);
var frame1 = SIMPLEX_GRID([[-1,0.3],[-1,9],[1.8]]);
var frame2 = SIMPLEX_GRID([[-50.7,0.3],[-5,11],[1.8]]);
var frame3 = SIMPLEX_GRID([[-47,3.7],[-15.7,0.3],[1.8]]);

//This Struct collects all the pieces in a single one
var floor = STRUCT([border,angle1,center1,center2,rooms,fount,angle2,plane,garden,frame1,frame2,frame3]);

//Those are the structures necessary to form the water spaces, 
var pool = SIMPLEX_GRID([[-1.3,19.7],[-1,9],[1.4]]); //30 cm di muro perimetrale
var fountain = SIMPLEX_GRID([[-47,3.7],[-5,10.7],[1.4]]);
var waterComplex = STRUCT([pool,fountain]);

/* Using the following commands it's possible to get get the columns in the specified location,
but the usage of the REPLICA command causes a deformation of the base of the column
that is, the first replica onwards, with a rectangular base.

var pillarsStructure = SIMPLEX_GRID([REPLICA(3)([0.25,-6.75,0.25]),[-6.75,0.25,-6.75,0.25],[3.5]]);
var pillars = T([0])([25.75])(pillarsStructure);*/


//In this way is not properly exploited translation and replication function, but are obtained, properly, columns with a square base.
var pillars1 = SIMPLEX_GRID([[-25.75,0.25,-6.75,0.25],[-6.75,0.25,-6.75,0.25],[-1.8,3.5]]);
var pillars2 = SIMPLEX_GRID([[-38.75,0.25,-6.75,0.25],[-6.75,0.25,-6.75,0.25],[-1.8,3.5]]);
var pillars = STRUCT([pillars1,pillars2]);

//the following are the parts required to make up the stairs;
//each element corresponds to one step, while the last coincides with the base of the structure,
//and has been constructed to provide continuity solution.
var step1= SIMPLEX_GRID([[-36,0.3],[-1,3],[1.62]]);
var step2= SIMPLEX_GRID([[-36.3,0.3],[-1,3],[1.44]]);
var step3= SIMPLEX_GRID([[-36.6,0.3],[-1,3],[1.26]]);
var step4= SIMPLEX_GRID([[-36.9,0.3],[-1,3],[1.08]]);
var step5= SIMPLEX_GRID([[-37.2,0.3],[-1,3],[0.9]]);
var step6= SIMPLEX_GRID([[-37.5,0.3],[-1,3],[0.72]]);
var step7= SIMPLEX_GRID([[-37.7,0.3],[-1,3],[0.54]]);
var step8= SIMPLEX_GRID([[-38,0.3],[-1,3],[0.36]]);
var step9= SIMPLEX_GRID([[-38.3,0.3],[-1,3],[0.18]]);
var stepBase= SIMPLEX_GRID([[-38.6,0.4],[-1,3],[0.01]]);	
var steps = STRUCT([step1,step2,step3,step4,step5,step6,step7,step8,step9,stepBase]);

//The outer walls of the fountain area
var wallFountain1 = SIMPLEX_GRID([[-41,9.7],[-4.7,0.3],[-1.8,3.5]]);
var wallFountain2 = SIMPLEX_GRID([[-50.7,0.3],[-4.7,11],[-1.8,3.5]]);
var wallFountain3 = SIMPLEX_GRID([[-37,14],[-15.7,0.3],[-1.8,3.5]]);//
var wallFountain = STRUCT([wallFountain1,wallFountain2,wallFountain3]);

//Median walls
var mediumWall1 = SIMPLEX_GRID([[-37.25,5.25],[-11.5,0.3],[-1.8,3.5]]);
var mediumWall2 = SIMPLEX_GRID([[-25,9],[-7.2,0.30],[-1.8,3.5]]);
var mediumWalls = STRUCT([mediumWall1,mediumWall2]);

//Left side walls
var leftWall1 = SIMPLEX_GRID([[-1,7],[-1,0.30],[-1.8,3.5]]);
var leftWall2 = SIMPLEX_GRID([[-1,0.30],[-1,21],[-1.8,3.5]]);
var leftWall3 = SIMPLEX_GRID([[-1,8],[-21.7,0.30],[-1.5,3.5]]);
var leftWall4 = SIMPLEX_GRID([[-8.7,0.30],[-17,5],[-1.8,3.5]]);
var leftWall5 = SIMPLEX_GRID([[-6.5, 20],[-15,0.30],[-1.8,3.5]]);
var leftWalls = STRUCT([leftWall1,leftWall2,leftWall3,leftWall4,leftWall5]);

//Since the actual construction has areas bounded by glasses surfaces, 
//the following items were referred as glassn
var glass1 = SIMPLEX_GRID([[-30,10],[-13.5,0.3],[-1.8,3.5]]);
var glass2 = SIMPLEX_GRID([[-1,8],[-17,0.2],[-1.8,3.5]]);
var glass3 = SIMPLEX_GRID([[-5,0.2],[-17,1],[-1.8,3.5]]);
var glass4 = SIMPLEX_GRID([[-5,0.2],[-19,3],[-1.8,3.5]]);
var glass5 = SIMPLEX_GRID([[-5,0.5],[-20.75,0.2],[-1.8,3.5]]);
var glass6 = SIMPLEX_GRID([[-6.5, 2.2],[-20.75,0.2],[-1.8,3.5]]);
var glass7 = SIMPLEX_GRID([[-7,0.2],[-21.5, 0.2],[-1.8,3.5]]);
var glass8 = SIMPLEX_GRID([[-31,0.2],[-7.7,6],[-1.8,3.5]]);
var glass9 = SIMPLEX_GRID([[-32,0.2],[-7.7,6],[-1.8,3.5]]);
var glass10 = SIMPLEX_GRID([[-44.75,0.2],[-7,7],[-1.8,3.5]]);
var glasses = STRUCT([glass1,glass2,glass3,glass4,glass5,glass6,glass7,glass8,glass9,glass10]);

//The following construction returns a bench properly structured,
// but, as already specified for the pillars, the use of REPLICA
// causes a deformation of the base of the supports of the bench,
// making them rectangular,
// the next form, which specifies each foot individually, it is preferable for accuracy,
// while being more verbose...

/*var benchPlane = SIMPLEX_GRID([[-6.75,16],[-14,0.5],[-1.8-0.4,0.1]]);
var benchPillars = SIMPLEX_GRID([REPLICA(8)([0.5,-1,0.5]),[-14,0.5],[-1.8,0.4]]);
var benchTrasl = T([0])([6.75])(benchPillars);
var bench = STRUCT([benchPlane,benchTrasl]);*/

//Central bench, composed by a plane and several (11) small pillars
var benchPlane = SIMPLEX_GRID([[-6.75,15.5],[-14,0.5],[-1.8-0.4,0.1]]);
var benchPillars = SIMPLEX_GRID([[-6.75,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5],[-14,0.5],[-1.8,0.4]]);
var bench = STRUCT([benchPlane,benchPillars]);

//Central roof, composed by 3 Grirds, trasled to fit all the colums
var roof1Part1= SIMPLEX_GRID([[6.5],[13],[-1.8-3.5,0.3]]); 
var roof1Part2= SIMPLEX_GRID([[14.5],[13],[-1.8-3.5,0.3]]); 
var roof1Part3= SIMPLEX_GRID([[2],[3.5,-6,3.5],[-1.8-3.5,0.3]]);
var roof1Part1T =T([0,1])([24,4])(roof1Part1);
var roof1Part2T =T([0,1])([32.5,4])(roof1Part2);
var roof1Part3T =T([0,1])([30.5,4])(roof1Part3);
var roof1 = STRUCT([roof1Part1T,roof1Part2T,roof1Part3T]);

//Lateral roof, simply composed by a single Grid
var roof2= SIMPLEX_GRID([[0,10],[-14.5,8.5],[-1.8-3.5,0.3]]); 

//Roofs Struct
var roofs = STRUCT([roof1,roof2]);

//Entire building
var barcelonaPavilion = STRUCT([floor,waterComplex,pillars,steps,wallFountain,mediumWalls,leftWalls,glasses,roofs,bench]);

DRAW(barcelonaPavilion);