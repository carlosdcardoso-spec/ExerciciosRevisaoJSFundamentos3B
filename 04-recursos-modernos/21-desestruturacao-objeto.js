// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

let viagem = {
    destino: "Rio de Janeiro",
    dias: 5,
    valor: 2500
};

let { destino, dias, valor } = viagem;

console.log(destino);
console.log(dias);
console.log(valor);
