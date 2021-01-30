//var, let, const
//var is globally scoped and you dont wanna use it for the most parts
//let and const have a block-level scope
//with let u can reassign values


let age = 30;
age = 31;
console.log(age);

/*const a = 30;
a = 31;
console.log(a);*/

//just use const if you're not sure you'll reassign it

let score;
score = 10;
console.log(score);