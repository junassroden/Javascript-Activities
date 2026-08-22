function riskyOperation(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Something went wrong"));
      } else {
        resolve("Everything worked");
      }
    }, 700);
  });
}

async function runDemo() {
  try {
    const result = await riskyOperation(false);
    console.log(result);
    app.innerHTML = `<p>${result}</p>`;
  } catch (error) {
    console.error("Caught:", error.message);
  } finally {
    console.log("Cleanup runs either way");
  }
}

runDemo();