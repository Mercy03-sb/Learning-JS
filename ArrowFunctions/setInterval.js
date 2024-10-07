// setInterval(function, interval) after every 2 seconds hello js print hoga
let id = setInterval(() =>{
    console.log("Hello JS");
}, 2000);
// to stop we have to save the id of the setInterval
clearInterval(id); // jab stop karna ho tab isse call karna hai with the id
