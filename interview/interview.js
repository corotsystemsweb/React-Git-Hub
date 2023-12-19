
// Use Cases for JavaScript reduce

// 1. Sum all the values of an array
 const studentResult = [67, 90, 100, 37, 60];
 const sumResult = studentResult.reduce((initVal, currVal) => {
     return initVal + currVal;
 }, 0);
 console.log(`The sum of Student result is : ${sumResult}`);

// 2. Sum of values in an object array
const stdResult = [
    { subject: 'Maths', marks: 20 },
    { subject: 'Physics', marks: 80 },
    { subject: 'Chemistry', marks: 100 }
];
const stdSum = stdResult.reduce((iVal, cVal) => {
    return iVal + cVal.marks;
}, 0);
console.log(`The sum of Student result is : ${stdSum}`);


// 3. Flatten an array of arrays
const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];
 const singleArry = twoDArr.reduce((intval, currVal) => {
        return intval.concat(currVal);
 })
console.log(singleArry);




// 4. Remove duplicates in an array
const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];
const unikNum = [...new Set(duplicatedsArr)];
console.log(`The nuique numbers are : ${unikNum}`)



// what is the output

function toDo(){
   let x = y = 0;
    x++;
    y++
    return x;
}
console.log(toDo(), typeof x, typeof y);

// what will be output
var x = 21;
var myfun = function () {
    console.log(x);
    var x = 20;
};
myfun();
// undefined



// ascending and desending order the array
const mynumers = [2, 5, 3, 10, 8, 4, 7];
let temp;
for(let i = 0; i < mynumers.length; i++){
   // console.log(mynumers[i]);
    for(let j = i; j < mynumers.length; j++){
        //console.log(mynumers[j])
       if(mynumers[i] > mynumers[j]){
        temp = mynumers[i];
        mynumers[i] = mynumers[j];
       mynumers[j] = temp;
       }
    }
}
console.log(mynumers);

//sorting

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()
fruits.reverse();
console.log(fruits);

// sorting a numbers

const arrNumbers = [10, 50, 5, 25, 100, 111, 12, 15,];
 const newnumber = arrNumbers.sort((a, b) => {
     console.log(`a value is ${a} and b value ${b} and ${a -b}`)
    return a - b;
 })
console.log(newnumber);



// simple output, What ?
console.log(2 + '2'); // 22
console.log(2 - '2'); // 0  as when we use - operator then - operator use only in number so it convert string to number

//what is output
console.log(5 < 4 < 3);// true

console.log(5 > 4 > 3); // false



// Remove duplicate from array
let num = [10, 15, 20, 20, 15, 25, 25, 40];
let remDup = [...new Set(num)];
console.log(remDup);


 //slice - get the eleleme from start index and end index but last index is not included
const numnum = [10, 20, 27, 30, 40, 50, 60];
 const result = numnum.slice(2, 4)
 console.log(result); // 27, 30

  // splice  - from second index, 0 means nothing deleting and adding 100, 200 from 2nd index
  const numnumnum = [10, 20, 27, 30, 40, 50, 60];
  const resultSplice = numnumnum.splice(2, 0, 100, 200)
  console.log(resultSplice);
  console.log(numnumnum); // 10, 20, 100, 200, 27, 30,  40,  50, 60


// how to add 10, 12, 14 in this array after 8
var array = [2, 4, 6, 8, 16];
var newarr = array.splice(4, 0, 10, 12, 14);
console.log(newarr);







array.splice(4, 0, 10, 12, 14);
console.log(array);
// i did like 
// var array = [2,4,6,8,16]
// var newarr = array.splice(4,0,10,12,14);
// console.log(newarr);
//////////////////////

//// output
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
    numbers.push(i + 1);
}
console.log(numbers); 
// output is 5 becoz we have cemicolon after i++ bracess,
// if we remove the semecolo then output  - [ 1, 2, 3, 4 ]


////// what output //////
for (var i = 0; i < 5; i++) {
setTimeout(() => console.log(i), 1000);
} 
//output will be 5 at 5 times becoz of var, and if we do let like this
for (let i = 0; i < 5; i++) {
setTimeout(() => console.log(i), 1000);
} 
//output will be 0,1,2,3,4 becoz of let



let myNum = [10, 15, 20, 20, 15, 25, 25, 40];
let myNewNum = [...new Set(myNum)];
console.log(myNewNum);