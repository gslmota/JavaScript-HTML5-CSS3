var hrnow = new Date(); // Utilizado para pegar a hora do Sistema!
var hora = hrnow.getHours();
var minutos = hrnow.getMinutes();
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos!`);
if(hora < 12)
{
    console.log('Bom Dia!');
}
else
{
    if(hora <= 18)
    {
        console.log('Boa Tarde!');
    }
    else
    {
        console.log('Boa Noite!');
    }
}