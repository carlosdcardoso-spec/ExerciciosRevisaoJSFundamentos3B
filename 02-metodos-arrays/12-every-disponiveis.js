// EXERCÍCIO 12 - EVERY - PRODUTOS DISPONÍVEIS
// Considere as quantidades: [4, 2, 7, 1, 6].
// Utilize every() para verificar se todos os produtos possuem estoque maior que zero.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

let quantidades = [4, 2, 7, 1, 6];

let todosDisponiveis = quantidades.every(function(quantidade) {
    return quantidade > 0;
});

console.log(todosDisponiveis);
