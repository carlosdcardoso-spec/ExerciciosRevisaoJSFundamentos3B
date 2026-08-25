// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie um array de convidados da família e outro de amigos.
// Utilize Spread para criar um terceiro array contendo todos os convidados.
//
// Escreva sua solução abaixo:

let familia = ["João", "Maria", "Carlos"];
let amigos = ["Pedro", "Ana", "Lucas"];

let convidados = [...familia, ...amigos];

console.log(convidados);
