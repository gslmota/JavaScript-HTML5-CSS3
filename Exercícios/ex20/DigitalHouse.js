function gerarDezenas(){
   var ms = []
   for(var i = 1; i<=6;i++){
      ms[i] =Math.round(Math.random() * 60)
   }
   return ms
}