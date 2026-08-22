function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.log("Waiting...");

wait(1000)
  .then(() => {
    console.log("1 second passed");
    app.innerHTML = "<p>Done waiting.</p>";
  })
  .catch((error) => {
    console.error(error);
  });