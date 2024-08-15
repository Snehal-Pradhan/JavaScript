// for of
// ["","",""]
// [{},{},{}]
const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN' ,"India")
map.set('US',"United States")
map.set('FR',"France")
map.set('IN' ,"India")
// works on unique value 
//console.log(map)

for (const [key,value] of map) {
   console.log(key, ":",value) 
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of MyObject) {
//     console.log(key, ":-" , value);
// } => this is not how we can iterate for objects