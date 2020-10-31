function cardapio(codigo, quantidade){
    switch(codigo){
        case 100:
            return 3*quantidade
        case 200:
            return 4*quantidade 
        case 300:
            return  5.50*quantidade
        case 400:
            return 7.50*quantidade
        case 500: 
            return 3.50*quantidade
        case 600: 
            return 2.8*quantidade
        default:
            return 'Produto não existente'
    }
}
console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(700, 2))