//Modello di dominio e di funzione mapping
var domain = DOMAIN([[0,1]])([15]);	//definisco il dominio monodimensionale tra 0 ed 1

var mapping = function(p) {
	var u = p[0];

	return [u,1]
};

//La funzione mapping così definita lavora su tutti i punti del dominio 
//sfrutta l'array p per traslare la retta in 1

var mapped = MAP(mapping)(domain);
COLOR([1, 0, 0])(mapped);
DRAW(mapped);