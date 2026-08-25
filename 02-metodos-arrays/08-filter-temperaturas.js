// EXERCÍCIO 08 - FILTER - TEMPERATURAS
// Considere as temperaturas: [18, 25, 31, 16, 29, 35, 22].
// Utilize filter() para selecionar somente temperaturas acima de 25 graus.
//
// Escreva sua solução abaixo:

let temperaturas = [18, 25, 31, 16, 29, 35, 22];

let temperaturasAcimaDe25 = temperaturas.filter(function(temperatura) {
    return temperatura > 25;
});

console.log(temperaturasAcimaDe25);
