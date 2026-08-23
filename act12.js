try {
  const response = await fetch("https://jsonplaceholder.typicode.com/unknown-route");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Handled error:", error.message);
  app.innerHTML = `<p style="color:crimson;"><strong>${error.message}</strong></p>`;
}