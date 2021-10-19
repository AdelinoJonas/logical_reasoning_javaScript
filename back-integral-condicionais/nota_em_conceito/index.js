const nota = 8.5;

if (nota > 9 && nota<=10) {
    console.log("A");
} else if(nota > 8 && nota<=8.9){
    console.log("B");
}else if(nota > 6 && nota<=7.9){
    console.log("C");
}else if(nota > 4 && nota<=5.9){
    console.log("D");
}else if(nota < 4){
    console.log("E");
};
// | Nota | Conceito |
// | --- | --- | 
// | 9 a 10 | A |
// | 8 a 8,9 | B |
// | 6 a 7,9 | C |
// | 4 a 5,9 | D |
// | menos que 4 | E |