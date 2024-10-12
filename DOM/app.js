let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);

// para1.style.color = "red"; or
para1.classList.add('red'); // and red class styling is defined in css file

let heading = document.createElement('h3');
heading.innerText = "I'm a blue h3!";
document.querySelector('body').append(heading);

heading.classList.add("blue");

let div = document.createElement('div');
document.querySelector('body').append(div);

div.classList.add('box');

let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);