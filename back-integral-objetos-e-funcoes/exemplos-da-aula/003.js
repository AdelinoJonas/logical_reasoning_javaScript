function obterFaixaEtaria(idade) {
    if (idade < 25) {
        return "jovem";
    } else if (idade < 65) {
        return "adulto";
    } else {
        return "idoso";
    }
};

function apresentar(pessoa) {

    const faixaEtaria = obterFaixaEtaria(pessoa.idade);

    console.log(`Olá! Sou ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
}

let jonas = {
    nome: "Jonas",
    idade: 15,
    profissao: "Programador",
    altura: 1.89
};

apresentar(jonas);

let felipe = {
    nome: "Felipe",
    idade: 25,
    profissao: "Médico",
    altura: 1.84
};
apresentar(felipe);
let denis = {
    nome: "Denis",
    idade: 72,
    profissao: "Engenheiro",
    altura: 1.75
};
apresentar(denis);