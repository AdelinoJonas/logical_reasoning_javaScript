const comentario = "Esse COVID é muito perigoso!";

function verificarComentario() {

    let verificacaoCov = comentario.includes('COVID');
    let verificacaoPan = comentario.includes('PANDEMIA');

    if (verificacaoCov == true || verificacaoPan == true) {

        console.log("Comentário bloqueado por conter palavras proibidas")
    }
}

verificarComentario();