**Promises** saves us from the callback hell. `Promise` is an object containing `resolve`(Success) and `reject`(Failure).
A Promise has three states:-

- **`fulfilled`**
- **`rejected`**
- **`pending`**

## Methods in Promise

1. **`then()`** :- `then` is called when promise is `fulfilled`.
2. **`catch()`** :- `catch` is called when promise is `rejected`.

- #### **Example**

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
