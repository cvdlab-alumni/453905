var quad = new SIMPLICIALCOMPLEX([[0,0],[1,0],[1,1],[0,1]])([[0,1,2],[1,2,3]]); //ERRORE DI ADATTAMENTO TRIANGOLI //Complesso simpliciale di un quadrato con vertice nell'origine

var quad = new SIMPLICIALCOMPLEX([[0,0],[1,0],[1,1],[0,1]])([[0,1,3],[1,2,3]]); //OK  //Complesso simpliciale di un quadrato con vertice nell'origine
var quad1 = new SIMPLICIALCOMPLEX([[1,1],[2,1],[2,2],[1,2]])([[3,4,6],[4,5,6]]); //COORDINATE INESISTENTI

DRAW(quad1);

SKELETON(1)(quad);

var quadTraslato = TR([quad,T([1])][(2)]);

var quad1 = STRUCT(REPLICA(10)([quad,T([1])([2])])); //OK

var quad2 = SIMPLEXGRID([REPEAT(20)(STRUCT(REPLICA(10)([quad,T([1])(2)])))]);

SIMPLEXGRID([REPEAT(n)(turns * 2 * Math.PI / n), REPEAT(m)(radius / m)]);



DEF Leg = CUBOID:< 0.1,0.1,0.7 >;
DEF Plane = CUBOID:< 1, 1, 0.2>;
DEF Table = STRUCT:<
Leg, T:1:0.9, Leg, T:2:0.9, Leg, T:1:-0.9, Leg,
T:<2,3>:<-0.9,0.7>, Plane >;
DEF Tablel = STRUCT:<
Leg, T:l:0.9:Leg, T:<1,2>:<0.9,0.9>:Leg, T:2:0.9:Leg,
T:3:0.7:Plane >;
VRML: Table:'out.wrl';



var plane = CUBOID([1, 1, 0.2]);
var leg = CUBOID([0.1, 0.1, 0.7]);
var table = STRUCT([leg,T([1])(2)],[leg, T([2])(0.9)],[leg, T([1])(0.9)]]);

