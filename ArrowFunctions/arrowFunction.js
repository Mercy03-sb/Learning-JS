const sum = (a, b) => {
    console.log(a + b);
}

const cube = (a) => {
    return a**3;
}

const hello = () => {
    console.log("Hello World");
}
let c = cube(2);
console.log(c);
hello()

// Implicit Return (agar sirf return karna ho arrow function mein toh return likhne ki zaroorat nahi hai alag syntax hota hai)
const mul = (a, b) =>(
    a*b
)
console.log(mul(2, 3));
