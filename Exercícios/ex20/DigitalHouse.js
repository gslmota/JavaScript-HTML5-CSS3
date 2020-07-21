function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
  var c = nomesDosPresentes.indexOf(nomeDoAluno)
  if(c == -1){
     return false
  }else {
     return true
  }
}