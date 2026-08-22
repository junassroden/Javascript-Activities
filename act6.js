function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Before await");
  await wait(1000);
  console.log("After await");

  app.innerHTML = "<p>Async function finished.</p>";
}

main();