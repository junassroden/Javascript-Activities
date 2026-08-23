async function getUser() {
  return { name: "Alice", role: "Admin" };
}

const userPromise = getUser();
console.log("Without await:", userPromise);

const user = await getUser();
console.log("With await:", user);

app.innerHTML = `<p><strong>Resolved user:</strong> ${user.name} (${user.role})</p>`;