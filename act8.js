function task(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} finished`);
      resolve(name);
    }, ms);
  });
}

const start = Date.now();

const results = await Promise.all([
  task("Task A", 1000),
  task("Task B", 1500),
  task("Task C", 700)
]);

console.log("Results:", results);
console.log("Total time:", `${Date.now() - start}ms`);

app.innerHTML = `<p><strong>Completed:</strong> ${results.join(", ")}</p>`;