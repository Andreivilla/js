/*Criar uma função para calcular o valor a ser pago de 
anuidade de uma associação. A função recebe como parâmetro 
um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) 
que foi paga e o valor da anuidade. Aanuidade deve ser paga 
no mês de janeiro. Por mês, é cobrado 5% de juros 
(sob o regime de juroscompostos). O retorno deve ser o 
valor a ser pago para o respectivo mês escolhido.*/
function juroComposto(valor, tempo){
    for(let i=0; i<tempo;  i++){
        valor *= 1.05
    }
    return valor
}
function anuidade(mes, valor){
    if(mes <= 2 && mes > 0){
        return `Anuidade: ${valor}`
    }else if(mes>2 && mes<12){
        return `Anuidade: ${juroComposto(valor, mes-1).toFixed(2)}`
    }else{
        return 'Valor invalido'
    }
}
console.log(anuidade(4, 100))