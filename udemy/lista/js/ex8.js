/*Pedro joga N jogos de basquete por temporada. 
Para saber como está ele está progredindo, ele 
mantémregistro de todos os as pontuações feitas 
por jogo. Após cada jogo ele anota no novo valor 
e confere se omesmo é maior ou menor que seu melhor 
e pior desempenho. Dada uma lista 
string = “pontuação1 pontuação2 pontuação3 etc..”, \
escreva uma função que ao recebê-la irá comparar os valores 
um a um e irá retornar umvetor com o número de vezes que 
ele bateu seu recorde de maior número de pontos e quando 
fez seu piorjogo. (Número do pior jogo).*/
let Pontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
let pontos = Pontuacoes.split(', ')
for(let i=0; i<pontos.length; i++)
    pontos[i] = parseInt(pontos[i])
let piorjogo = 0
let melhorpontuacao = pontos[0]
let piorpontuacao = pontos[0]
let recordes = 0
for(let i=0; i<pontos.length; i++){
    if(pontos[i] > melhorpontuacao){
        melhorpontuacao = pontos[i]
        recordes++
    }
    if(pontos[i] < piorpontuacao){
        piorpontuacao = pontos[i]
        piorjogo = i
    }
}

console.log('pior jogo:', piorjogo)
console.log('pior pontuacao:', piorpontuacao)
console.log('melhor pontuacao:', melhorpontuacao)

