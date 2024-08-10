// singleton
// object.create

// object literals

const mySym =Symbol("key1")

const JsUser = {
    name : "somu",
    "full name" : "Snehal Pradhan",
    [mySym] : "mykey1",
    age : 18,
    location: "jaipur",
    isLoggedIn: false,
    email:'somu@gmail.com',
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


JsUser.email="somu@meta.com";
//Object.freeze(JsUser)
JsUser.email="somu@abc.com";
//console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());