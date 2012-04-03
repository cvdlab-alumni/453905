var pillars = SIMPLEX_GRID([
  REPLICA(3)([0.15,-6*2.4,0.15]),
  [0.15,-6*2.4,0.15],
  [1.5,3,3]
]);

var beams = SIMPLEX_GRID([
  REPLICA(3)([0.15,-6*2.4,0.15]),
  [14.7],
  [-7.5,1.5]
]);

var steelFrames = COLOR([0.2,0.2,0.2])(STRUCT([pillars,beams]));

var floors = SIMPLEX_GRID([
  REPLICA(3)(14.7),
  [-0.15,14.4,-0.15],
  [-1.2,0.3,-2.7,0.3,-2.7,0.3]
]);

var cantileverFloor = SIMPLEX_GRID([
  [0.15,2*2.4,0.15],
  [-0.15,14.4,-0.15],
  [-1.2,0.3,-2.7,0.3,-2.7,0.3]
]);

var cantileverPillars = SIMPLEX_GRID([
  [0.15, -2*2.4, 0.15],
  [0.15,-14.4,0.15],
  [1.5,3,3]
]);

var cantileverBeams = SIMPLEX_GRID([
  [0.15],
  [14.7],
  [-7.5,1.5]
]);

var gridLato1 = SIMPLEX_GRID([ [-0.15, 0.05, -2.3, 0.05], [0.15], [1.5,3,3] ]);
var gridLato2 = SIMPLEX_GRID([ [-0.15, -0.05, 2.3, -0.05], [0.15], [0.3, -0.9, 0.3,-2.95,0.05,-2.7,0.3] ]);
var gridLato3 = SIMPLEX_GRID([ [-0.15, -0.05, -1.125, 0.05, -1.125,  -0.05], [0.15], [-0.3, 0.9, -0.3, 2.95,0.05] ]);
var panelLato = SIMPLEX_GRID([ [-0.15, -0.05, 1.125, -0.05, 1.125,  -0.05], [-0.1,0.05], [-0.3, 0.9, -0.3, 2.95/2] ]);


COLOR([0,191,255])(panelLato);
var gridLato = STRUCT([gridLato1,gridLato2,gridLato3, panelLato]);
var gridLat = STRUCT([gridLato, T([0])([2.35]), gridLato]);
var cantilever = STRUCT([cantileverFloor,cantileverPillars,cantileverBeams, gridLat]);

var cantilever1 = S([0])([-1])(cantilever);
var cantilever2 = T([0])([3*14.7])(cantilever);

var grid1 = SIMPLEX_GRID([ [-0.15, 0.05, -2.3, 0.05], [0.15], [1.5,3,3] ]);
var grid2 = SIMPLEX_GRID([ [-0.15, -0.05, 2.3, -0.05], [0.15], [0.3, -0.9, 0.3,-2.95,0.05,-2.7,0.3] ]);
var grid3 = SIMPLEX_GRID([ [-0.15, -0.05, -1.125, 0.05, -1.125,  -0.05], [0.15], [-0.3, 0.9, -0.3, 2.95,0.05] ]);
var panel = SIMPLEX_GRID([ [-0.15, -0.05, 1.125, -0.05, 1.125,  -0.05], [-0.1,0.05], [-0.3, 0.9, -0.3, 2.95/2] ]);

var grid = COLOR([0.2,0.2,0.2])(STRUCT([grid1,grid2,grid3]));
var frame = function(color) {return STRUCT([ COLOR(color)(panel), grid])};
var frameGroup = function(number,color) {return STRUCT( REPLICA(number)([ frame(color), T([0])([2.4]) ]))};

var colors = [[1,0,0],[0,1,0],[0,0,1],[0,1,1],[1,0,1],[1,1,0]];
var frames = STRUCT([
  frameGroup(3,colors[0]), T([0])([3*2.4]),
  frameGroup(3,colors[1]), T([0])([3*2.4]), T([0])([0.3]),
  frameGroup(3,colors[2]), T([0])([3*2.4]),
  frameGroup(3,colors[3]), T([0])([3*2.4]), T([0])([0.3]),
  frameGroup(3,colors[4]), T([0])([3*2.4]),
  frameGroup(3,colors[5])
]);

var backFrames = T([1])([14.7])(S([1])([-1])(frames));

var structMansarda = SIMPLEX_GRID([REPLICA(4)([2.4]), [10], [0.15, -1.2, 0.15]]);
var pilarsMansarda = SIMPLEX_GRID([REPLICA(4)([0.15, -2.1, 0.15]),[10], [1.5]]);
var telaioFinMansarda = SIMPLEX_GRID([REPLICA(4)([-0.15, -1.0475, 0.05, -0.15, -1.0475]), [0.05], [-0.15, 1.2, 0.15]]);
var finestra = SIMPLEX_GRID([REPLICA(4)([-0.15, 2.1, -0.15]), [0.05], [-0.15, 1.2, -0.15]]);
COLOR([0,191,255])(finestra);
var mansarda = STRUCT([T([0])([17.4]),T([1])([4.7]),T([2])([7.5]), structMansarda, pilarsMansarda, telaioFinMansarda, finestra, T([1])([9.95]), telaioFinMansarda, finestra]);

//scale

var scale = function (n, z, x, y, t, h){
var elementi = [];
for (var i =0; i<n; i++){
var gradino = CUBOID([x, y, z]);
elementi[i] =gradino;
y= y-t ;
z= z+h;
}
var scalinata= STRUCT(elementi);

return scalinata;
}

var scala1 = scale(5,0.15,2.5*3,3.5,0.4,0.15);
var scala2 = scale(5,0.15,2.5*3,3.5,0.4,0.15);

var scaleComplete = STRUCT([T([0])([0.15+6*2.4+0.15+3*2.5+1.75]), S([1])([-1]), scala1 ]);

DRAW(STRUCT([ steelFrames,floors,cantilever1,cantilever2,frames,backFrames, mansarda, scaleComplete ]));