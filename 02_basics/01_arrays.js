// array

const myArr =[0,1,2,3,4,5];
const myHeros = ["somu","charlie"]
const myArr2 = new Array (1,2,3,4,5,6)
console.log(myArr[2]);


/* myArr.push(6)
console.log(myArr);
myArr.push(7);
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9);
myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3)); 
*/
/* 
const newArr = myArr.join() => join makes the array elments into a string.
console.log(myArr);
console.log(newArr);
 */


// slice & splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);
const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

// slice works on a copy of array.
// splice works on reference and changes the reference array also