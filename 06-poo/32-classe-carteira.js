// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }

    adicionarCredito(valor) {
        this.#saldo += valor;
    }

    realizarPagamento(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log("Pagamento realizado com sucesso!");
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

let carteira = new CarteiraDigital();

carteira.adicionarCredito(100);
carteira.realizarPagamento(30);

console.log("Saldo:", carteira.consultarSaldo());
