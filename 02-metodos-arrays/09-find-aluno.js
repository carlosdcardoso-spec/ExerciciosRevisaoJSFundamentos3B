// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

let alunos = [
    { nome: "Ana", matricula: 101 },
    { nome: "Bruno", matricula: 102 },
    { nome: "Carlos", matricula: 103 },
    { nome: "Daniela", matricula: 104 }
];

let alunoEncontrado = alunos.find(function(aluno) {
    return aluno.matricula === 103;
});

console.log(alunoEncontrado);
