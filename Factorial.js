let product = 1;
let problem = 1;

for (let x = 2; x < 13; x++){
    product *= x;
    problem = problem + " * " + x;
}

console.log(problem);
console.log(product);
