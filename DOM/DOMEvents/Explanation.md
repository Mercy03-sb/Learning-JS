# DOM Events
onclick and onmouseenter
```javascript
let btn = document.querySelector("button");
btn.onclick = function () {
    console.log("Button was Clicked");
};
function sayHello() {
    alert("Button was Clicked");
}
function buttondetect(){
    console.log("Button is detected");
}
btn.onclick = sayHello; // () nahi lagaana kyuki hamein function assign karna hai execute nahi
btn.onmouseenter = buttondetect; // onmouseenter -> jab button pe cursor aayega tab ye event execute hoga.
```
<br>

# Adding Event Listeners
```javascript
// Event Listeners
btn.addEventListener("click", function() { // used because ek event ke liye multiple cheezein kara sakte hai
    sayHello();
    buttondetect();
});
// or
btn.addEventListener("click", sayHello);
btn.addEventListener("click", buttondetect);
btn.addEventListener("mouseenter", sayHello); // Events ke naam alag honge for event listener
```
<br>

# This in Event Listeners
This depicts the object that will call this function.
```javascript
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changecolor(){
    console.log(this.innerText); 
    this.style.backgroundColor = "blue";
}

h1.addEventListener("click", changecolor); // Now this will refer to h1 and same for others
h3.addEventListener("click", changecolor);
p.addEventListener("click", changecolor);
btn.addEventListener("click", changecolor);
```

<br>

# Keyboard Events
Keydown -> When a key is pressed
Keyup -> When the key is released after pressing.
event parameter in the callback function is default and can be used to access some properties of events such as mouse events, keyboard events, form events, etc.
```javascript
let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    // If we press 'A' output would be (It would be different for different keys)
    console.log(`Key = ${event.key}`); // Key = a
    console.log(`code = ${event.code}`); // code = KeyA
    console.log("Key was Pressed");
})
// We can track what key is pressed through this event listener and code or key.
```
<br>

# Form Events & Extracting form data
form.elements is a HTMLCOLLECTION of all the tags under form in html in the order they are there this helps in extracting value without selecting each input field respectively.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Events</title>
</head>
<body>
    <form action="/action">
        <input type="text" placeholder = "Enter Username" id="user">
        <input type="password" placeholder="Enter Password" id="pass">
        <button>Register</button>
    </form>
    <script src="event.js"></script>
</body>
</html>
```
```javascript
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault(); // Default operation is prevented (action waala submit ke baad action waale url pe nahi jaayega)
    let user = this.elements[0]; // or form.elements[0]
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);
});
```
Apart from submit there are more events that are important
1. change event -> It occurs when the value of an element has been changed(only works for 'input', 'textarea' and 'select' elements). Jab value daalke register ya kahi bahaar click karte hai tab trigger hota hai. Basically daalne ke baad trigger hota hai.
2. input event -> Same as change but ek-ek letter jab type hota hai tabhi trigger hotaa rehta hai(non-character ya arrow keys isse trigger ni karti).
<br>

# Event Bubbling and how to stop it.
Event bubbling is a way web browsers handle events like clicks or key presses. When you click on an element (like a button inside a div), the event happens on that element first, and then it "bubbles up" to its parent elements.Event bubbling means that events move from the clicked element up through its parent elements.
To stop event bubbling there is a function just like preventdefault for form element.
```js
ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});
```
