const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    // TRANSFORMANDO EM MÉTODO
    imprimirResumo: function () {
        let qtdItens = 0

        let precoItens = 0;

        for (let produto of this.produtos) {

            qtdItens += produto.qtd;

            precoItens += produto.qtd * produto.precoUnit;
        }

        let precoItensReais = `${precoItens/100}`;

        // **replace** COLOCAR OS PONTOS E VIRGULAS NOS LUGARRES CERTOS (repocondiciona strings)
        precoItensReais = precoItensReais.replace('.', ',');
        // ADICIONAR ",00" NO FIM DA STRING (indexOf = varre array procurando item e retorna -1 se não achar)
        if (precoItensReais.indexOf(',') === -1) {
            precoItensReais = `${precoItensReais},00`;
        }

        console.log(`Cliente: ${carrinho.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdItens} itens.`);
        console.log(`Total a pagar: R$ ${precoItensReais}`);
    }
}
// ADICIONAR PRODUTO AO CARRINHO
function addProdutoAoCarrinho(carrinho, produto) {

    let produtoExistente = -1;

    // VARRER ARRAY PARA VER SE TEM ALGUM ITEM IGUAL
    for (let i = 0; i < carrinho.produtos.length; i++) {

        if (carrinho.produtos[i].id === produto) {

            produtoExistente = i;
            // PARAR DE CORRER O ARRAY, O PRODUTO FOI ENCONTRADO
            break;
        }
    }

    if (produtoExistente === -1) {

        carrinho.produtos.push(produto);
    } else {
        carrinho.produtos[produtoExistente].qtd += produto.qtd;
    }
}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
addProdutoAoCarrinho(carrinho, novaBermuda);

carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
addProdutoAoCarrinho(carrinho, novoTenis);

carrinho.imprimirResumo();