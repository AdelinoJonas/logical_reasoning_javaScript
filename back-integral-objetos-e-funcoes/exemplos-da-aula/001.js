const comanda = {
    nome: "jonas",
    idade: 30,
    produtos: [{
            nome: "batata frita",
            precoUnit: 1500,
            quantidade: 2
        },
        {
            nome: "porçao aipim",
            precoUnit: 2500,
            quantidade: 1
        },
        {
            nome: "cerveja",
            precoUnit: 900,
            quantidade: 6
        },
    ]
}
console.log(comanda.nome);
console.log(comanda.idade);
comanda.idade = 24;
console.log(comanda.idade);
console.log(comanda.produtos[0].nome);
console.log(comanda.produtos[comanda.produtos.length-1].precoUnit);

let totalApagar= 0;

for(let item of comanda.produtos){
    totalApagar += (item.quantidade*item.precoUnit);
    // totalApagar = totalApagar + (item.quantidade *item.precoUnit); 
}

console.log(`Senhor ${comanda.nome}, o valor a pagar é de R$ ${totalApagar/100}`);