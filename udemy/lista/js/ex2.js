/*Os triângulos podem ser classificados em 3 tipos 
quanto ao tamanho de seus lados:Equilátero: Os três 
lados são iguais. Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes.Crie uma função 
que recebe os comprimentos dos três lados de um triângulo 
e retorne sua classificação quantoao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de umtriângulo).*/
function tipoTriangulo(a,b,c){
    //verificar se é triangulo
    if(a+b>c || b+c>a || a+c>b)
        return "não é triangulo";
    
    //verificar tipo do triangulo
    if(a==b && b==c && a==c)
        return "Equilátero";
    else if(a==b || b==c || a==c)
        return "Isósceles";
    else
        return "Escaleno";
}

console.log(tipoTriangulo(4,4,9));