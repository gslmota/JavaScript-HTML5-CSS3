function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
   for(var i = 0; i <= nomesDosPresentes.length;i++){
      if(nomesDosPresentes[i] == nomeDoAluno){
         return true
      }else{
         return false
      }
   }
}