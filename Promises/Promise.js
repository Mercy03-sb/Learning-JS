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
