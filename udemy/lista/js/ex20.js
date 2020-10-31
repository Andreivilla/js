/*Crie um programa para informar quais e quantas notas 
são necessárias para entregar o mínimo de cédulaspara um 
determinado valor informado pelo usuário considerando notas 
de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve 
mostrar apenas as notas utilizadas. Por exemplo, ao solicitar 
R$18, o programa deveinformar apenas a seguinte informação 
(note que não foram exibidas informações sobre as demais 
cédulas): 1nota(s) de R$ 10. 1 nota(s) de 
R$ 5. 3 nota(s) de R$ 1.*/
function notas(valor){    
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0
    let notas1 = 0
    let stringNotas = ''
    if(valor >= 100){
        notas100 = Math.floor(valor/100)
        valor = valor%100
        stringNotas += `${notas100} de 100. `
    }
    if(valor >= 50){
        notas50 = Math.floor(valor/50) 
        valor = valor%50
        stringNotas += `${notas50} de 50. `
    }
    if(valor >= 10){
        notas10 = Math.floor(valor/10) 
        valor = valor%10
        stringNotas += `${notas10} de 10. `
    }
    if(valor >= 1){
        notas1 = Math.floor(valor/1)
        valor = valor%1
        stringNotas += `${notas1} de 1. `
    }
    return stringNotas
}
console.log(notas(1892))