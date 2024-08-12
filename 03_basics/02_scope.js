//var c = 5000;
let a = 300;
if (true){
    let a = 10 ; 
    const b = 20;
    var c = 30;
    console.log(`Inner Loop  : ${a}`)
}
console.log(a);
//console.log(b);
console.log(c); //=> works outside scope

// scope in browser console is different than the scope in node (global scope)