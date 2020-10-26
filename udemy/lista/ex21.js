/*Criar um programa para identificar o valor a ser pago por 
um plano de saúde dada a idade do conveniadoconsiderando 
que todos pagam R$ 100 mais um adicional conforme a seguinte 
tabela: 1) crianças com menosde 10 anos pagam R$80; 2) 
conveniados com idade entre 10 e 30 anos pagam R$50; 3) 
conveniados comidade acima de  30 e até 60 anos pagam R$ 95; 
e 4) conveniados acima de 60 anos pagam R$130*/
function planodesaude(idade){
    if(idade < 10 && idade > 0){
        return 100 + 80
    }else if(idade >= 10 && idade <= 30){
        return 100 + 50
    }else if(idade > 30 && idade < 60){
        return 100 + 95
    }else if(idade > 60){
        return 100 + 130
    }else{
        return 'idade invalida'
    }
}

console.log(planodesaude(8));
console.log(planodesaude(15));
console.log(planodesaude(35));
console.log(planodesaude(52));
console.log(planodesaude(80));