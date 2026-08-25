// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:

class Curso {
    constructor(nome, duracao, modalidade) {
        this.nome = nome;
        this.duracao = duracao;
        this.modalidade = modalidade;
    }

    exibirInformacoes() {
        return `Nome: ${this.nome}, Duração: ${this.duracao} horas, Modalidade: ${this.modalidade}`;
    }
}

let curso1 = new Curso("JavaScript", 40, "Online");
let curso2 = new Curso("HTML e CSS", 30, "Presencial");

console.log(curso1.exibirInformacoes());
console.log(curso2.exibirInformacoes());
