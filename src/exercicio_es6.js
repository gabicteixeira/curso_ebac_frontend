const alunos = ['Gabriela', 'Guilherme', 'Higor', 'Matheus', 'Mariana', 'Thiago'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        nota: 6
    }
})

alunos2.push({
    nome: 'Ana',
    nota: 5
})

alunos2.push({
    nome: 'Maria',
    nota: 9
})

alunos2.push({
    nome: 'Fabio',
    nota: 7
})

alunos2.push({
    nome: 'Jorge',
    nota: 4
})

console.log(alunos2)

const notaMaiorOuIgualSeis = alunos2.filter(function(item) {
    return item.nota >= 6
})

console.log(notaMaiorOuIgualSeis)