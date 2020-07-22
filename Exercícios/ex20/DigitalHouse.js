function maxmin(a, b, c, d, e){
   var z = [a, b, c, d, e]
   var maior = Math.max(z)
   var menor = Math.min(z)
   for(var i = 0; i<5;i++){
      if(z[i] == maior){
         var x = i
      }
      else if(z[i] == menor){
         var z = i
      }
   }
   var t = a
   z[0] = menor
   z[z] = t
   var k = b
   z[1] = maior
   z[x] = k
   return z
}