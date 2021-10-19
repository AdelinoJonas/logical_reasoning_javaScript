let tenis = 129.99, desconto = 0, valorEmMaos = 80, restante = tenis-valorEmMaos;

desconto = restante * 100 / tenis;

console.log(`Ele precisará de ${desconto.toFixed(2)}% de desconto.`);
