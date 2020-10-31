function notas(valor){
    let stringNotas = ''
    let NumeroNotas = 0    
    let vetNotas = [100, 50, 10, 1]
    
    for(let tipoNota of vetNotas){
        if(valor >= tipoNota){
            NumeroNotas = Math.floor(valor/tipoNota)
            valor = valor%tipoNota
            stringNotas += `${NumeroNotas} de ${tipoNota}. `
        }
    }

    return stringNotas
}
console.log(notas(1892))