**Promises** saves us from the callback hell. `Promise` is an object containing `resolve`(Success) and `reject`(Failure).
A Promise has three states:-

- **`fulfilled`**
- **`rejected`**
- **`pending`**

## Methods in Promise

1. **`then()`** :- `then` is called when promise is `fulfilled`.
2. **`catch()`** :- `catch` is called when promise is `rejected`.

#### **Example**

```js
function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure : data not saved");
    }
  });
}

saveToDB("ABCD")
  .then(() => {
    console.log("promise was resolved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
```

## Promise Chaining

Simply Understand using the concept of try-catch in javascript

#### **Example:**

```js
saveToDB("ABCD")
  .then(() => {
    console.log("Data1 Saved");
    return saveToDB("XYZ");
  })
  .then(() => {
    console.log("Data2 Saved");
    return saveToDB("Hello World");
  })
  .then(() => {
    console.log("Data3 Saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
```

if first data is saved it will return another promise and if it is also fulfilled then next 'then' will be executed and if any of the promise gives error catch will run.

#### **Output:**

```
Data1 Saved
Data2 Saved
promise was rejected
```

## Results and Errors in Promise

We can print the result and error of the promise by passing arguement in `then` and `catch` methods. This result or error is the statements passed in `resolved` and `rejected` simultaneously.

#### **Example:**

```js
saveToDB("ABCD")
  .then((result) => {
    console.log("Data1 Saved");
    console.log("result of promise : ", result);
    return saveToDB("XYZ");
  })
  .then((result) => {
    console.log("Data2 Saved");
    console.log("result of promise : ", result);
    return saveToDB("Hello World");
  })
  .then((result) => {
    console.log("Data3 Saved");
    console.log("result of promise : ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise : ", error);
  });
```

#### **Output:**

```
Data1 Saved
result of promise :  success : data was saved
promise was rejected
error of promise :  failure : data not saved
```

## Async Keyword

`async` keyword is used before a function to create an async function. An `async` function always return a promise whether anything is returned or not. The returned element of the async function is the `PromiseResult` and if async function is fully executed without any error it's state would be `fulfilled` else it would be `rejected`.

#### Example:

```js
async function greet() {
  throw "Weak Connection"; // Throwing Weak connection error
  return "Hello";
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was", result);
  })
  .catch((error) => {
    console.log("promise was rejected with error :", error);
  });

let demo = async () => {
  // async arrow function
};
```

## Await Keyword

`await` is used in a `async` function before a function call. It pauses the execution of surrounding async functions untill the promise of the current call is settled(resolved or rejected).

#### Example:

```js
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`Color changed to ${color}`);
      resolve("Color Changed");
    }, 1000);
  });
}

async function demo() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("green", 1000);
  changeColor("yellow", 1000);
  // Pehle red hoga then blue then green then yellow
  // Agar await nahi lagaate to saare ek saath execute hota toh sirf yellow visible hota at the end
}
```

## Handling Rejections

Promise rejection when using await is handled using `try-catch` (Basic Excpetion Handling). If any promise is rejected when await is used our program will stop, so for handling this we use try-catch. So we always use use `await` in `try blocks` to avoid exceptions.

#### Example:

```js
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num > 3) {
      reject("promise was rejected");
    }
    setTimeout(() => {
      h1.style.color = color;
      console.log(`Color changed to ${color}`);
      resolve("Color Changed");
    }, 1000);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
  } catch (error) {
    console.log("Error was Caught");
    console.log(error);
  }
  // if a promise is rejected then that error is caught by catch block.
  let a = 5;
  console.log(a);
  console.log("New number =", a + 3);
}
```
