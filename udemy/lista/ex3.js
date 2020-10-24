/*Crie uma função que recebe dois parâmetros, base e expoente, 
e retorne a base elevada ao expoente.*/
function pot(base, exp){
    var n = base;
    for(var i=1; i<exp; i++)
        n*=base;
    return n;
}
console.log(pot(3,5));