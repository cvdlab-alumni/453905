// Questi sono i pilastri, li formo utilizzando una griglia di simplessi e replicandoli
// li formo tramite griglia
// la replica di 3, in totale saranno composti da due file da 4
// saranno distanziati tramite il segno negativo,che indica spazio vuoto
// 

var pillars = SIMPLEX_GRID([REPLICA(3)([0.15,-6*2.4,0.15]),[0.15,-6*2.4,0.15],[1.5,3,1.15]]);
 
// Sarebbero le aste (o traverse), vanno sopra ai due pilastri lungo l'asse x
// sono ovviamente replicate x 3: lungo l'asse x sono di dimensioni uguali ai pilastri
// mentre lungo l'asse y sono di dimensioni standard(14.7)
var beams = SIMPLEX_GRID([
	REPLICA(3)([0.15,-6*2.4,0.15]),
	[14.7],
	[-7.5,1.5]   // il meno indica il distanziamento dall'origine,se lo metto positivo viene una serie di lastre
	             // collegate all'origine
]);

// Coloro di ferro le travi e i pilastri
var steelFrames = COLOR([0.2,0.2,0.2])(STRUCT([pillars,beams]));

var floors = SIMPLEX_GRID([
	REPLICA(3)(14.7),
	[-0.15,14.4,-0.15],
	[-1.2,0.3,-2.7,0.3,-2.7,0.3]
]);

// Adesso disegno le mensole, formate rispettivamente dai piani, dai pilastri e travi
// Disegno i tre piani dell'edificio
var cantileverFloor = SIMPLEX_GRID([
	[0.15,2*2.4,0.15],  //x
	[-0.15,14.4,-0.15],  //y
	[-1.2,0.3,-2.7,0.3,-2.7,0.3]   //z
]); 

// Disegno i due pilastri interni dell'edificio
var cantileverPillars = SIMPLEX_GRID([
	[0.15],
	[0.15,-14.4,0.15],
	[1.5,3,3]
]);

var cantileverBeams = SIMPLEX_GRID([
	[0.15],
	[14.7],
	[-7.5,1.5]
]);

var cantilever = STRUCT(
	[cantileverFloor,cantileverPillars,cantileverBeams]
);

var cantilever1 = S([0])([-1])(cantilever); 

var cantilever2 = T([0])([3*14.7])(cantilever);

var grid1 = SIMPLEX_GRID([ [-0.15, 0.05, -2.3, 0.05], [0.15], [1.5,3,3] ]);
var grid2 = SIMPLEX_GRID([ [-0.15, -0.05, 2.3, -0.05], [0.15], [0.3, -0.9, 0.3,-2.95,0.05,-2.7,0.3] ]);
var grid3 = SIMPLEX_GRID([ [-0.15, -0.05, -1.125, 0.05, -1.125,  -0.05], [0.15], [-0.3, 0.9, -0.3, 2.95,0.05] ]);
var panel = SIMPLEX_GRID([ [-0.15, -0.05, 1.125, -0.05, 1.125,  -0.05], [-0.1,0.05], [-0.3, 0.9, -0.3, 2.95/2] ]);

var grid = COLOR([0.2,0.2,0.2])(STRUCT([grid1,grid2,grid3]));
var frame = function(color) {return STRUCT([ COLOR(color)(panel), grid])};
var frameGroup = function(number,color) {return STRUCT( REPLICA(number)([ frame(color), T([0])([2.4]) ]))};

// var gri1 = SIMPLEX_GRID([ [-0.15, 0.05, -2.3, 0.05], [0.15], [1.5,3,3] ]);
// var gri2 = SIMPLEX_GRID([ [-0.15, -0.05, 2.3, -0.05], [0.15], [0.3, -0.9, 0.3,-2.95,0.05,-2.7,0.3] ]);
// var gri3 = SIMPLEX_GRID([ [-0.15, -0.05, -1.125, 0.05, -1.125,  -0.05], [0.15], [-0.3, 0.9, -0.3, 2.95,0.05] ]);
// var newPanel = SIMPLEX_GRID([ [-0.15, -0.05, 1.125, -0.05, 1.125,  -0.05], [-0.1,0.05], [-0.3, 0.9, -0.3, 2.95/2] ]);
// COLOR([0,191,255])(newPanel);
// var gridLato = STRUCT([gri1, gri2, gri3, newPanel]);
// var gridLatoTrasla = T([0])([2.5])(gridLato);
// var latoDx = STRUCT([gridLato,gridLatoTrasla]);

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

DRAW(STRUCT([ steelFrames,floors,cantilever1,cantilever2,frames,backFrames, mansarda ]));

 