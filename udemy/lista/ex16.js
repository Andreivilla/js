/*Utilizando a estrutura do Switch faça um programa que 
simule uma calculadora básica O programa recebecomo 
parâmetros dois valores numéricos e uma string referente 
à operação e a realize com os valores numéricos na ordem 
que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). 
A função efetuará a soma de 2 e3. Dica: Os sinais 
das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso 
default para operações inválidas*/
function calculadora(x,op,y){
    switch(op){
        case '+':
            return x+y
        case '-':
            return x-y
        case '*':
            return x*y
        case '/':
            return x/y
        default:
            return 'operaçào inválida'
    }
}
console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, 'a', 3))