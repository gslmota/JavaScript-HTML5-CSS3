function transformaParaMaiusculo(palavras) {  

   var array=[]
  
   for(var i=0;i<palavras.length;++i)
  
       array.push(palavras[i].toUpperCase())
  
   return array
  
  }
  console.log(transformaParaMaiusculo(["gato","cachorro","tartaruga"]))

