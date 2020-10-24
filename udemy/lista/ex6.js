/*Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação. 
Aprimeira função retornará o montante da aplicação 
financeira sob o regime de juros simples e a segundaretornará 
o valor da aplicação sob o regime de juros compostos.*/
function jurosimples(capitalInicial, juros, tempo){
    var capitalFinal = 0
    for(var i=0; i<tempo; i++)
        capitalFinal = capitalInicial*juros
    return capitalFinal
}
function jurocomposto(capitalInicial, juros, tempo){
    for(var i=0; i<tempo; i++)
        capitalInicial*=juros
    return capitalInicial
}

console.log(jurocomposto(100,1.1,5))
console.log(jurosimples(100,1.1,5))