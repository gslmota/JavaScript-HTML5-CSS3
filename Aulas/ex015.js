// Objetos
// Objetos podem guardar funções tbm
let amigo = {name:`josé`,sex:`M`, peso:`45.7`,
    engordar(p=0){
        console.log('Engordou!');
        this.peso += p;
    }
};
amigo.engordar(2);
console.log(`Amigo ${amigo.name} pesa ${amigo.peso} KG!`);