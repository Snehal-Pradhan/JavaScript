
function sayMyName(){
    console.log("S");
    console.log("N");
    console.log("E");
    console.log("H");
    console.log("A");
    console.log("L");
}

// function_name  => reference 
// function_name() => execute
// sayMyName();

// function addTwoNums(num1,num2){

//     console.log(num1+num2)
// }

function addTwoNums(num1,num2){
    // let result = num1 + num2;
    // return result
    return num1+num2;
}



const result = addTwoNums(3,5)
// function func_name(parameter1 ,parameter2){......}
// func_name(argument1 ,argument2) => call
// parameters != argument

//console.log("Result: ",result)


function loginUserMessage(username ="sam"){
    if(username === undefined){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("somu"))
// here if no parameter is given it will show undefined.
console.log(loginUserMessage())