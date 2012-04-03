var quad = new SIMPLICIALCOMPLEX([[0,0],[1,0],[1,1],[0,1]])([[0,1,3],[1,2,3]]); //OK  //Complesso simpliciale di un quadrato con vertice nell'origine

DRAW(quad1);

//Complesso simpliciale composto da due triangoli con coordinate coorispondenti ai punti indicati
//il disegno dei punti di vertice è corrispondente alla POSIZIONE didefinizione dei punti

//-----------//

//La traslazione del quadrato costruito può essere fatta in una STRUCT, inserendo delle repliche traslate

var quad1 = STRUCT(REPLICA(10)([quad,T([1])([2])])); //OK

//Un ipercubo può esser ottenuto come:

SIMPLEXGRID( [REPLICA(10)([1,-1]), REPLICA(10)([1,-1]), REPLICA(10)([1,-1])] )

// oppure
SIMPLEXGRID( REPEAT(3)(REPLICA(10)([1,-1])) )

// FIX PLASM
SIMPLEXGRID = function (quotes) {
    return p.simplexGrid(quotes);
}

