//const tinderUser = new Object();


const tinderUser = {}
tinderUser.id ="123abc";
tinderUser.name ="Somu";
tinderUser.isLoggedIn =false;
//console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"Snehal",
        lastname:"Pradhan"
    }
    }
   
}
//console.log(regularUser.fullname.userfullname.firstname);

// optional chaining => later

const obj1 ={
    1:"a" , 2 :"b"
}
const obj2 = {
    3:"a",4:"b"
}
//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)

const obj3 ={...obj1,...obj2} 
// spread operator
// console.log(obj3)
// Object.assign(a, b, c, d) => a is the target and b,c,d are the sources.
// use mdn web docs for any more info.



/* 
const users = {
    {
        id:2;
        email:"s@gmail.com"
    },

    {..

    },
    {...

    },
} 
    */
//user[1].email => can use indexing . similar to indexing


// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course = {
    coursename : "js in hindi",
    price :"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor

const {courseInstructor : instructor} = course

//console.log(courseInstructor);
console.log(instructor);
//  object destructuring

// const navbar = () => {}
// navbar(company ="hitesh")

