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
