function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }
  
 function maisCarosQue(valor, precos){
    return precos.filter(p => p >= valor);
 }
 