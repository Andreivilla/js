/*Escreva um algoritmo que leia o código de um aluno e suas 
três notas. Calcule a média ponderada do aluno, considerando 3
que o peso para a maior nota seja 4 e para as duas restantes, 
3. Mostre o código doaluno, suas três notas, a média 
calculada e uma mensagem "APROVADO" se a média for maior ou 
igual a 5 e "REPROVADO" se a média for menor que 5. Repita a 
operação até que o código lido seja negativo.*/
function situacao(nota1, nota2, nota3){
    const notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort()
    const media = ((notas[0]+notas[1])*3+notas[2]*4)/10
    return `sua media é ${media} --- ${media<5 ? 'reprovado': 'aprovado'}`
}
console.log(situacao(2.8, 6, 3.5))