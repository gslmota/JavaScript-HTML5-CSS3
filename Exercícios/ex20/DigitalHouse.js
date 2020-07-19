function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }
  
 function maisCarosQue(valor, precos){
    return precos.filter(p => p >= valor);
 }
 
 function precosEntre(valorMenor, valorMaior, precos){
    var vm = +maisCarosQue(valorMenor, precos) + maisBaratosQue(valorMaior, precos) 
    return vm
 }