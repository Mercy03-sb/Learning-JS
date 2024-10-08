// Rest allows function to take any number of arguments
// Basically args of javascript

function sum(...args){ // Agar koi aur argument lena hai toh usko args se pehle likhna hota hai taki args ke saath clash na ho
    // return args.reduce((res, ele) => (res + ele));
    console.log(arguments) // Its an object jo ki har value ko store rakhta hai object mein(Index, value) ye har function mein hota hai
    console.log(arguments.length) // ye hi method ispe lagta hai aur koi nahi
    let sum = 0;
    for(let ele of args){
        sum += ele;
    }
    return sum;
}
console.log(sum(2, 3, 4, 4))