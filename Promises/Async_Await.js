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
