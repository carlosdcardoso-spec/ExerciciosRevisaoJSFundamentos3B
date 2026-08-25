// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Produto com nome, preço e um método exibirDados().
// Crie a classe ProdutoDigital que herde de Produto e receba também o tamanhoArquivo.
// Utilize super() no constructor e sobrescreva exibirDados() incluindo o tamanho.
//
// Escreva sua solução abaixo:

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirDados() {
        return `Nome: ${this.nome}, Preço: R$ ${this.preco}`;
    }
}

class ProdutoDigital extends Produto {
    constructor(nome, preco, tamanhoArquivo) {
        super(nome, preco);
        this.tamanhoArquivo = tamanhoArquivo;
    }

    exibirDados() {
        return `${super.exibirDados()}, Tamanho do arquivo: ${this.tamanhoArquivo}`;
    }
}

let produto = new ProdutoDigital("Curso de JavaScript", 99.90, "500 MB");

console.log(produto.exibirDados());

