let btn = document.querySelector("button");

// btn.onclick = function () {
//     console.log("Button was Clicked");
// };

function sayHello() {
    alert("Button was Clicked");
}

function buttondetect(){
    console.log("Button is detected");
}
// btn.onclick = sayHello; // () nahi lagaana kyuki hamein function assign karna hai execute nahi

// btn.onmouseenter = buttondetect; // onmouseenter -> jab button pe cursor aayega tab ye event execute hoga.

// Event Listeners
// btn.addEventListener("click", function() { // used because ek event ke liye multiple cheezein kara sakte hai
//     sayHello();
//     buttondetect();
// });
// or
// btn.addEventListener("click", sayHello);
// btn.addEventListener("click", buttondetect);

// This in Event Listener
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changecolor(){
    console.log(this.innerText); // this depicts the object that will call this function
    this.style.backgroundColor = "blue";
}

h1.addEventListener("click", changecolor);
h3.addEventListener("click", changecolor);
p.addEventListener("click", changecolor);
btn.addEventListener("click", changecolor);