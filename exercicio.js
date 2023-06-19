function Alimento(nome, marca, preco, quantidade) {
    this.nome = nome;
    this.marca = marca;
    this.preco = preco;
    this.quantidade = quantidade;
}

function Natural(nome, marca, preco, quantidade, tipo) {
    this.tipo = tipo;

    Alimento.call(this, nome, marca, preco, quantidade);
}

function Bebida(nome, marca, preco, quantidade, alcoolica) {
    this.alcoolica = alcoolica;

    Alimento.call(this, nome, marca, preco, quantidade);
}

const alimento1 = new Alimento("Arroz", "Camil", "15 reais", "5 kg");
const natural1 = new Natural("Mamão", "Frutale", "5 reais", "1 kg", "Fruta");
const bebida1 = new Bebida("Refrigerante", "Coca", "10 reais", "2 litros", "Não");

console.log(alimento1);
console.log(natural1);
console.log(bebida1);
