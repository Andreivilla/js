/*Crie um programa que exibe se um dia é dia útil, 
fim de semana ou dia inválido dado o número 
referente aodia. Considere que domingo é o dia 1 
e sábado é o dia 7. Utilize a estrutura Switch.*/
function dia(n){
    switch (n){
        case 1:
            return 'Nao é dia util'
        break
        case 2:
            return 'É dia util'
        break
        case 3:
            return 'É dia util'
        break
        case 4:
            return 'É dia util'
        break
        case 5:
            return 'É dia util'
        break
        case 6:
            return 'É dia util'
        break
        case 7:
            return 'Nao é dia util'
        break
    }
}
console.log(dia(5))