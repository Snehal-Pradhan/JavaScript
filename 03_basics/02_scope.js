//var c = 5000;
let a = 300;
if (true){
    let a = 10 ; 
    const b = 20;
    var c = 30;
   // console.log(`Inner Loop  : ${a}`)
}
//console.log(a);
//console.log(b);
//console.log(c); //=> works outside scope

// scope in browser console is different than the scope in node (global scope)

function one(){
    const username = "somu"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //two();
}
 //one();

 if(true){
    const username = "somu";
    if(username==="somu"){
        const website ="youtube"
        console.log(username+website);
    }
    //console.log(website)
 }
 //console.log(username)

// -----------------interesting------------------
console.log(addOne(5))
function addOne(num){
    return num+1;
}


addTwo(5)
const addTwo = function(num){
    return num+2
}
// two ways of declaring function.
// using a variable method , we cannot use that funtion before.
// more in hoisting and execution context.

