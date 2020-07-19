function autonomia(quantidadeDeCombustivel, rendimento){
    var autonomia = rendimento * quantidadeDeCombustivel
    return autonomia
}

// Programa principal
var d = autonomia(34, 4)
console.log(d)