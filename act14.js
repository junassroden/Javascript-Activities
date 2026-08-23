function wait(ms, label) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(label);
      resolve();
    }, ms);
  });
}

console.log("Using forEach...");
[1, 2, 3].forEach(async (n) => {
  await wait(n * 400, `Finished item ${n}`);
});

console.log("This prints before the async work is done.");

app.innerHTML = `
  <p><strong>Watch the console.</strong></p>
  <p>The "done" message appears before the delayed items finish.</p>
`;