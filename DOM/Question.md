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