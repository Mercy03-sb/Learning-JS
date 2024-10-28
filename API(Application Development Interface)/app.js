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
