const myObject ={
    js: 'Javascript',
    cpp: 'c++',
    rb:"ruby",
    swift:"swift by apple"
}


// for (const key in myObject) {
// console.log(`${key} shortcut is for ${myObject[key]}`)
// }


const programming=["js","rb","go","py","cpp","java"]
for (const key in programming) {
    // console.log(programming[key])
}


const map = new Map()
map.set('IN' ,"India")
map.set('US',"United States")
map.set('FR',"France")
map.set('IN' ,"India")

// for (const key in map) {
//    console.log(key);
//    // maps not iteracle in for in
// }

// objects => forin
// arrays => forof .. and many more