//Esempio di dominio generale in max 3 dimensioni, 
//x1 ed y1 sono le coordinate del primo asse, così x2 ed y2 del secondo asse ecc.
//res1, 2, 3 sono le risoluzioni assegnate ad ogni dimensione che corrispondono al numero di blocchi in cui si decide di suddividere
//ogni piano, pertanto corrisponderanno al num di volte per cui verrà applicata la funzione al dominio
var domain = DOMAIN([[x1,y1],[x2,y2],[x3,y3]])([res1,res2,res3]);	

//Per tracciare il dominio nello spazio PLASM si usa:
DRAW(domain);

//Per nascondere il tracciato:
HIDE(domain);

//Esempio di comandi per tracciare e nascondere un dominio monodimensionale
var domain = DOMAIN([[1,5]])([4])  //Monodimensionale
DRAW(domain)
HIDE(domain);

//Così via...
var domain2 = DOMAIN([[1,5],[0,4]])([4,2])  //Bidimensionale

var domain3 = DOMAIN([[1.5,5.5],[1,3],[0,1]])([4,2,1])  //Tridimensionale