/*Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código:

Escreva uma função calculaGostos(notas)

Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:

O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme

O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano

O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.*/

function calculaGostos(notas){
   arrf = []
   var ngf = 0
   var fm = 0
   var gf = 0
   for(var i =0;i<notas.length;i++){
      if(notas[i] == 0 || notas[i] == 1){
         ngf += 1
      }
      else if(notas[i] == 2 || notas[i] == 3){
         fm += 1
      }
      else if(notas[i] == 4 || notas[i] == 5){
         gf += 1
      }
   }
   arrf = [ngf, fm, gf]
   return arrf
}

console.log(calculaGostos([1,1,3,3,5,5]))