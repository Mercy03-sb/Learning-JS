# Question
Add the following elements to the container using only javascript and DOM methods.<br>
(i) a 'p' with red text text that says "Hey I'm red!"<br>
(ii) an 'h3' with blue text that says "I'm a blue h3!"<br>
(iii) a 'div' with a black border and pink background color with the following elements inside of it-<br>
- another 'h1' that says "I'm in a div"
- a 'p' that says "ME TOO!"

1. Answer (i)
``` javascript
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);

// para1.style.color = "red"; or
para1.classList.add('red'); // and red class styling is defined in css file

```

2. Answer (ii)
``` javascript
let heading = document.createElement('h3');
heading.innerText = "I'm a blue h3!";
document.querySelector('body').append(heading);

heading.classList.add("blue");
```

3. Answer (iii)
``` javascript
let div = document.createElement('div');
document.querySelector('body').append(div);

div.classList.add('box');

let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
```