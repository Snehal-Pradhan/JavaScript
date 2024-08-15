// for 

for (let i = 0; i <100; i++) {
    const element = i;
    if(element == 5){
       // console.log(`5 is the best number.`);
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value : ${1}`);
    for(let j = 0; j <= 10;j++){
       // console.log(`Inner Loop ${j} and Outer Loop ${i}`);
       //console.log(`${i} * ${j} = ${i*j}`);
    }
}

let  MyArray = ["Superman","Batman","Flash"]
for (let index = 0; index <  MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
}

// beark and continue

for (let index = 1; index <= 20 ; index++){
    if(index == 5){
        console.log(`detected 5 `);
        continue
    }
    console.log(`Value of i is ${index}`);
}