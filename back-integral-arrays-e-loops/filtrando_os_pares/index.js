const original = [1, 4, 12, 21, 53, 88,44, 112];

let juntaPares = [];

for(let par of original){
    if(par % 2==0){
        juntaPares.push(par);
    }
}console.log(juntaPares);