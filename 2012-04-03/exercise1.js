//Barcelona Pavilion's Map

var perimeter = POLYLINE([[0,0],[0,2],[1,2],[1,22],[9,22],[9,17],[39,17],[39,16],[51,16],[51,6],[52,6],[52,4],[39,4],[39,0],[0,0]]);
COLOR([0,0,0])(perimeter);

var swimmingPool = POLYLINE([[1,1],[1,10],[21,10],[21,1],[1,1]]);
COLOR([0,191,255])(swimmingPool);

var stairs = POLYLINE([[36,1],[36,4],[39,4],[39,1],[36,1]]);
COLOR([0,0,0])(stairs);

var step1 = POLYLINE([[38.5,4],[38.5,1]]);
var step2 = POLYLINE([[38,4],[38,1]]);
var step3 = POLYLINE([[37.5,4],[37.5,1]]);
var step4 = POLYLINE([[37,4],[37,1]]);
var step5 = POLYLINE([[36.5,4],[36.5,1]]);
var steps = STRUCT([step1,step2,step3,step4,step5]);
COLOR([0,0,0])(steps);

var fountain = POLYLINE([[47,5],[47,16],[51,16],[51,5],[47,5]]);
COLOR([0,191,255])(fountain);

var wall1 = POLYLINE([[47,16],[38,16]]);
var wall2 = POLYLINE([[41,5],[51,5]]);
var wall3 = POLYLINE([[45.5,6.75],[45.5,14]]); //da vedere in posizione x
var wall4 = POLYLINE([[42.5,11.5],[37.5,11.5]]);
var wall5 = POLYLINE([[30,13.5],[40,13.5]]);
var wall6 = POLYLINE([[25,7.5],[34,7.5]]);
var wall7 = POLYLINE([[26.5,15],[6.5,15]]);
var walls = STRUCT([wall1,wall2,wall3,wall4,wall5,wall6,wall7]);
COLOR([0,0,0])(walls);

var centralStructure1 = POLYLINE([[32,7.5],[32,13.5],[31,13.5],[31,7.5],[32,7.5]]);
var centralStructure2 = POLYLINE([[32.5,9],[32.5,12],[33.5,12],[33.5,9],[32.5,9]]);
var centralStructures = STRUCT([centralStructure1,centralStructure2]);

var benchStructure = POLYLINE([[7,14],[7,14.5],[22,14.5],[22,14],[7,14]]);
var bechDivide1 = POLYLINE([[9.5,14],[9.5,14.5]]);
var bechDivide2 = POLYLINE([[12,14],[12,14.5]]);
var bechDivide3 = POLYLINE([[14.5,14.5],[14.5,14]]);
var bechDivide4 = POLYLINE([[17,14],[17,14.5]]);
var bechDivide5 = POLYLINE([[19.5,14],[19.5,14.5]]);
var bench = STRUCT([benchStructure,bechDivide1,bechDivide2,bechDivide3,bechDivide4,bechDivide5]);

var colum1 = POLYLINE([[25.75,6.75],[25.75,7],[26,7],[26,6.75],[25.75,6.75]]);
var colum2 = POLYLINE([[25.75,13.75],[25.75,14],[26,14],[26,13.75],[25.75,13.75]]);
var colum3 = POLYLINE([[32.75,6.75],[32.75,7],[33,7],[33,6.75],[32.75,6.75]]);
var colum4 = POLYLINE([[32.75,13.75],[32.75,14],[33,14],[33,13.75],[32.75,13.75]]);
var colum5 = POLYLINE([[38.75,6.75],[38.75,7],[39,7],[39,6.75],[38.75,6.75]]);
var colum6 = POLYLINE([[38.75,13.75],[38.75,14],[39,14],[39,13.75],[38.75,13.75]]);
var colum7 = POLYLINE([[45.75,6.75],[45.75,7],[46,7],[46,6.75],[45.75,6.75]]);
var colum8 = POLYLINE([[45.75,13.75],[45.75,14],[46,14],[46,13.75],[45.75,13.75]]);
var colum = STRUCT([colum1,colum2,colum3,colum4,colum5,colum6,colum7,colum8]); 
COLOR([0,50,0])(colum);


var cube1 = POLYLINE([[33,12.75],[33,13],[33.25,13],[33.25,12.75],[33,12.75]]);
var cube2 = POLYLINE([[33,8],[33,8.25],[33.25,8.25],[33.25,8],[33,8]]);
var cube3 = POLYLINE([[38.75,10.75],[38.75,11],[39,11],[39,10.75],[38.75,10.75]]);
var cube4 = POLYLINE([[40.75,10.75],[40.75,11],[41,11],[41,10.75],[40.75,10.75]]);
var cube5 = POLYLINE([[41.5,8.5],[41.5,9],[42,9],[42,8.5],[41.5,8.5]]);
var cube6 = POLYLINE([[41.5,7.5],[41.5,8],[42,8],[42,7.5],[41.5,7.5]]);
var cube7 = POLYLINE([[39.625,10.5],[39.625,11],[40.125,11],[40.125,10.5],[39.625,10.5]]);
var cubes = STRUCT([cube1,cube2,cube3,cube4,cube5,cube6,cube7]); 

var room1 = POLYLINE([[1,17],[9,17]]);
var room2 = POLYLINE([[5,22],[5,19]]);
var room3 = POLYLINE([[5,17],[5,18]]);
var room4 = POLYLINE([[7,22],[7,21]]);
var room5 = POLYLINE([[5,20],[5.5,20]]);
var room6 = POLYLINE([[6.5,20],[9,20]]);
var rooms = STRUCT([room1,room2,room3,room4,room5,room6]);

var pavilon = STRUCT([perimeter,swimmingPool,stairs,steps,fountain,walls,centralStructures,bench,colum,cubes,rooms]);

DRAW(pavilon);
