function transformaParaMaiusculo(arrayPalavras){
   var array = []
   for(var i = 0;i<=arrayPalavras.length;i++){
      array.push(arrayPalavras[i].toUpperCase())
   }
   return array
}