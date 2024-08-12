const user = {
    username: "somu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `)
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

// global object in browser is window but in node and other runtime environment is {}


// function alpha(){
//     let username ="somu";
//     console.log(this)
//     console.log(this.username)
//     // => undefined as this. thing can be used in cases like objects 
//     //but not in a function
// }
// alpha()


// const alpha = function(){
//     let username = "somu"
//     console.log(this.username);
// }

const alpha = () =>{
     let username = "somu"
     console.log(this.username);
}
//alpha();

// ()=>{}
// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }

//implicit return
// const addTwo = (num1,num2) => num1+num2;
// const addTwo = (num1,num2) => (num1+num2);

// const addTwo = (num1,num2) => {username: "somu"} => undefined
const addTwo = (num1,num2) => ({username: "somu"}) 
// need () to pass object or return object;


console.log(addTwo(5,9))