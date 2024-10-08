let num = [1, 2, 3, 4]
let double = num.map((ele) => { // double = [2, 4, 6, 8]
    return ele*2;
})
// Agar kuch return ni karenge toh new array mein saare elements undefined aayega
console.log(double);

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9]
let evens = nums.filter((ele) => {
    return ele%2 == 0;
})
console.log(evens);