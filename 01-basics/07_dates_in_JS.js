/// dates

let myDate = new Date()
/* console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
 */


// gives the following output in order.


/* 
2024-08-09T19:58:40.361Z
Fri Aug 09 2024
Fri Aug 09 2024 19:58:40 GMT+0000 (Coordinated Universal Time)
19:58:40 GMT+0000 (Coordinated Universal Time)
2024-08-09T19:58:40.361Z
2024-08-09T19:58:40.361Z
8/9/2024, 7:58:40 PM
8/9/2024 
*/
console.log(typeof myDate);

//let myCreateDate =new Date(2024,0,5);
let myCreateDate =new Date("01-14-2023");
console.log(myCreateDate.toLocaleString())

//let myTimeStamp =Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
/* 
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
*/

//`${newDate.getDay()} and the time`

/* newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone:''
}) */