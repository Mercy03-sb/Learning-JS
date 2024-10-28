## JSON (JavaScript Object Notation)

The JSON data is in the form a string when fetched from an API to convert it to JS object we have two functions.

- `JSON.parse(data)`: To parse(convert) a `string data into JS object`.
- `JSON.stringify(json)`: To parse a `JS object into json`.

#### Example:

```js
let jsonRes = `{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}`;

let validRes = JSON.parse(jsonRes); // string to JS object.
console.log(validRes.fact);

let student = {
  name: "Ram",
  marks: 95,
};

console.log(JSON.stringify(student)); // JS object to string.
```

## Using fetch() function

fetch function returns a promise containing string data which has to be converted to JSON by using parse.

#### Example:

```js
let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    return res.json(); // converting to json format
  })
  .then((data) => {
    console.log(data.fact);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log(data2.fact);
  })
  .catch((error) => {
    console.log("Error occured", error);
  });
```

Using async, await

```js
let url = "https://catfact.ninja/fact";

async function getFacts() {
  let res1 = await fetch(url);
  let data1 = await res1.json();

  console.log(data1);

  let res2 = await fetch(url);
  let data2 = await res2.json();

  console.log(data2);
}

getFacts();
```

## Using axios

Axios is a library to make Http requests and it fetches data directly in Json or any other format(can be handled using headers).

#### Example:

```js
let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (err) {
    console.log("Error found", err);
    return "No fact found";
  }
}
```

### Headers in axios

```js
// Normally for this api we get data in html format to get the data in json format we have to pass a header in get request.
const url2 = "https://icanhazdadjoke.com/";
async function getJokes(params) {
  try {
    const config = { headers: { Accept: "application/json" } }; // To get data in json format directly
    let res = await axios.get(url, config);
    console.log(res.data);
  } catch (err) {
    console.log("Error:", err);
  }
}
```
