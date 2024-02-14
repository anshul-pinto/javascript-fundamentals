Promise.resolve(1)
  .then((value) => {
    console.log(value);
    return Promise.resolve(2);
  })
  .then((value) => {
    console.log(value);
    throw new Error("Error thrown in second then");
  })
  .catch((error) => {
    console.log("Caught error:", error.message);
    return Promise.resolve(3);
  })
  .then((value) => {
    console.log(value);
  })
  .finally((val) => {
    console.log("finally: ", val); // finally: undefined
    return Promise.resolve("res finally");
  });
