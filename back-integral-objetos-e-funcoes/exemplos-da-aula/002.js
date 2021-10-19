function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Olá! Sou ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 60) {
        console.log(`Olá! Sou ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Olá! Sou ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    }
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
    profissao:"Engenheiro",
    altura: 1.75
};
apresentar(denis);