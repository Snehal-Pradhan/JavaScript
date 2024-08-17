const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.forEach((item)=> item+15);
// console.log(newNums) => RETURNS UNDEFINED


// const newNums = myNums.map((item)=> item+15);

const newNums = myNums
                 .map((nums)=> nums*10)
                 .map((num)=> num+2)
                 .filter((num) => num >=18)
console.log(newNums);
