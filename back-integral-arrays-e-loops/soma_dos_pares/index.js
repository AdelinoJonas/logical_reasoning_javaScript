const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let juntaPares = [];
let count = 0;


for (let par of numeros) {
    if (par % 2 == 0) {
        juntaPares.push(par);
        ++count;
    } 
}
let somaPares = 0;

if (count != 0) {
    for (let i of juntaPares) {
        somaPares = somaPares + i;
    }
    console.log(somaPares);
}