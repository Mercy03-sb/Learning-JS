// Spread = Break the iterables into single variables for-> Arrays, Strings, objects
let arr = [5, 3, 6, 1, 7, 8]
console.log(Math.max(...arr)) // Isne arr ko break karke saare values ismein pass kardiya
console.log(...arr)

let newArr = [...arr]
let chars = [..."Hello"]
console.log(newArr);
console.log(chars);

let odd = [1, 3, 5, 7, 9]
let even = [2, 4, 6, 8, 10]
let nums = [...odd, ...even]
nums.shift() // to pop first element
nums.unshift() // to add elements at the start
console.log(nums)

// Spread with Objects
const data = {
    email: "ironman@gmail.com",
    password: "abcd"
}

const datacopy = {...data, id: 123, country: "India"} // Copies the previous object elements in this
console.log(datacopy)

const obj1 = {...arr} // Ismein (Index: value) store hojaati hai {Same for strings}
console.log(obj1)