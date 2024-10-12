let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);

// para1.style.color = "red"; or
para1.classList.add('red'); // and red class styling is defined in css file