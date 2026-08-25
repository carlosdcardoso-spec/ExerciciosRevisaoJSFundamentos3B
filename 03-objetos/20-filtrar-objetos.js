// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

let funcionarios = [
    { nome: "Ana", salario: 2500 },
    { nome: "Bruno", salario: 3500 },
    { nome: "Carlos", salario: 4200 },
    { nome: "Daniela", salario: 2800 },
    { nome: "Eduardo", salario: 5000 }
];

let funcionariosAcimaDe3000 = funcionarios.filter(function(funcionario) {
    return funcionario.salario > 3000;
});

console.log(funcionariosAcimaDe3000);
