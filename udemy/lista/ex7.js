/*Uma das vantagens da programação é a automatização
de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula 
de Bhaskara. Para isso, sua função deve receber trêsparâmetros, 
“ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os 
valores seriam respectivamente: 3,-5, 12. Como retorno deve 
ser passado um vetor que tem 2 valores um para cada possível 
resultado, mesmoque os resultados sejam iguais. Caso o delta 
seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/
function Bhaskara(a, b, c){
    var resultado = []
    var x1 = 0
    var x2 = 0
    var delta = b*b -4*a*c
    if(delta < 0)
        return('delta negativo')
    else if(delta == 0){
        x1 = (-b+Math.sqrt(delta))/(2*a)
    }else if(delta > 0){
        x1 = (-b+Math.sqrt(delta))/(2*a)
        x2 = (-b-Math.sqrt(delta))/(2*a)
    }
    resultado.push(x1)
    resultado.push(x2)
    return resultado;
}

console.log(Bhaskara(3,-5,1))