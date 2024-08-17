// reduce
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and  currval: ${currval}`)
//     return acc+currval

// },)

const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)



console.log(myTotal)



const shoppingCart =[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "appdev course",
        price: 999
    },
    {
        itemName: "block-chain course",
        price: 1999
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
// acc => accumualator , currval => current value
console.log(totalPrice);