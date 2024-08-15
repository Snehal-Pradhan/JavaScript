const coding = ["js", "ruby", "java", "go", "cpp"];



// coding.forEach( function (item) {
//     console.log(item)
// })

// coding.forEach( (item)=>{
//     console.log(item);
// }  )

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding =[
    {
        languageName:"Javascript",
        languageFileName: "js"
    },
    {
        languageName:"Python",
        languageFileName: "py"
    },
    {
        languageName:"Go",
        languageFileName: "go"
    },
    {
        languageName:"CPP",
        languageFileName: "cpp"
    }
]


myCoding.forEach( (item)=>{
    console.log(item.languageName);
})