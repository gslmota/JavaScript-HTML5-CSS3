function transformaParaMaiusculo(arrayPalavras){
   var array = []
   var c = []
   c = arrayPalavras
   for(var i = 0;i<=c.length;i++){
    array.push(c[i])
   }
   array.pop()
   return array
}
console.log(transformaParaMaiusculo(["gato","cachorro","tartaruga"]))