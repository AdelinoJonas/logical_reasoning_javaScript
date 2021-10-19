const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [{
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let acertos = 0;
    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }
    let valorDaQuestao = prova.valor / prova.questoes.length;

    let nota = valorDaQuestao * acertos;

    if (acertos === 0) {
        console.log(`${prova.aluno} não acertou qualquer questão e obteve nota 0`);
    } else if (acertos === 1) {
        console.log(`O aluno(a) ${prova.aluno} acertou 1 questão e obteve nota ${nota}`);
    } else {
        console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
    }
}

corrigirProva(prova);