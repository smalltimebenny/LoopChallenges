let sum = 1
let problem = 1

for (let i = 2; i < 101; i++){
    sum = sum + i;
    problem = problem + " + " + i;
}
console.log(problem);
console.log(sum);