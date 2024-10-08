let arr = [1, 2, 3, 4]
let sum = arr.reduce((res, el) =>{ 
    return res + el
}) 
// res = accumulator har stage ka ans issi mein jaata hai
// console.log(sum)

// Finding maxelement of array using reduce
console.log(arr.reduce((res, el) => {
    if(el > res) return el;
    else return res;
}))