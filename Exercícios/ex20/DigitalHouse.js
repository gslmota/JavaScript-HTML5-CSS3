function transformaParaMaiusculo(arrayPalavras){
   for(var i = 0;i<=arrayPalavras.length;i++){
     var c =  arrayPalavras[i].pop()
     arrayPalavras[i].push(c.toUpperCase())
   }
   return arrayPalavras
}