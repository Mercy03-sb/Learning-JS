// Write a Function that prints Hello World 5 times at intervals of 2s each
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 12000);
