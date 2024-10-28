// Using API which gives all the university list of a country
// We will be displaying the colleges of country, where country would be given by user
let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  try {
    let country = document.querySelector("input").value;
    let colleges = await axios.get(url + country);
    console.log(colleges);
    showColleges(colleges.data);
  } catch (err) {
    let body = document.querySelector("body");
    let p = document.createElement("p");
    p.innerText = "Error! No Connection";
    body.append(p);
  }
});

function showColleges(colleges) {
  let list = document.querySelector("#result");
  list.innerText = "";
  for (col of colleges) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}
