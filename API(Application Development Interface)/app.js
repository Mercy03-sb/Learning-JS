let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  let para = document.querySelector("#result");

  para.innerText = fact;
});

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
