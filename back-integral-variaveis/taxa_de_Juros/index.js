let i = 0, m = 90000, c = 60000, n = 24, pot = m / c, exp = 1 / n;

i = (Math.pow(pot, exp) - 1) * 100;

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i.toFixed(4)}%, pois após ${n} meses você teve que pagar ${m} reais.`);