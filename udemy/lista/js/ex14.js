/*Crie uma estrutura condicional switch que receba uma 
string com o nome de uma fruta e que possua trêscasos: 
Caso maçã, retorne no console: “Não vendemos esta fruta 
aqui”. Caso kiwi, retorne: “Estamos comescassez de kiwis”. 
Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 
Teste com estas três opções .Crietambém um default, que 
retornará uma mensagem de erro no console.*/
function venda(fruta){
    switch(fruta){
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        break
        case 'kiwi':
            return 'Estamos comescassez de kiwis'
        break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        break
    }
}
console.log(venda('maçã'))
console.log(venda('kiwi'))
console.log(venda('melancia'))