const myNums = [1,2,4,2]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}` );
//     return acc + currval
// } ,0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0 )
console.log(myTotal);

const shoppingCart = [
    {
    itemname: "js course",
    price: 299
    },
    {
        itemname: "py course",
        price: 499
        },
        {
            itemname: "dev course",
            price: 699
            }
]

const PriceToPay=shoppingCart.reduce( (acc, item) => acc+ item.price ,0)
console.log(PriceToPay);