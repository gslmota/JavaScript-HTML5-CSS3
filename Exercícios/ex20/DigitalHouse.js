function transformaParaMaiusculo(arrayPalavras){
   for(var i = 0;i<=arrayPalavras.length;i++){
      arrayPalavras[i].push(arrayPalavras[i].toUpperCase())
   }
   return arrayPalavras
}