function parÍmpar(n){   
    // É possível passar parâmetros opcionais nas  funções ex: n=0 que significa se ->
    // <- nada for passado em baixo para a função a mesma faz o uso do 0 em ves de NaN
    if(n%2 == 0){
        return 'par';
    } else{
        return ' ímpar';
    }
}
 let resultado = parÍmpar(4);
 console.log(resultado);

 // Uma variável receber um função
 var z = function(x){
     return x*2;
 }
 // Fazendo a passagem de um valor para a função atráves da variável
 console.log(z(5));

 // Fatorial recursão

 function fatorial(z){
     if(z == 1){
         return 1;
     }else{
        return z * fatorial(z - 1);
     }
 }

 console.log(fatorial(5));