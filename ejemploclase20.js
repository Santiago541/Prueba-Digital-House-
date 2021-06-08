let vals = [5, 4, 1, 2, 9];
//let sum = 0;
//for (let i = 0; i < vals.length; i++) {
//sum += vals[i];
//}

//for (let val of vals) {
//  sum += val;
//}

// console.log(sum);



let sum = vals.reduce((acc, val) => acc + val);
console.log(sum)
