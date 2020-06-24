var num = [3,5,8]; // Cria um vetor com 3 posições.
num[3] = 4; // Cria mais uma posição para o vetor pois n existia a posição 3 e adiciona o valor 4.
num.push(7); // Adiciona o número 7 na última posição do vetor.
num.length; // Retorna o tamanho do Vetor.
num.sort(); // Ordena os valores do Vetor.
for(let pos = 0;pos <= num.length;pos ++){
    console.log(num[pos]);
}

for(let n in num){
    console.log(num[n]);
}
var x;
x = num.indexOf(5); // Faz a busca do valor 5 no vetor.
console.log(x);