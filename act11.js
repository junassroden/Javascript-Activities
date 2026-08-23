console.log("Loading user...");

const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const user = await response.json();

console.log("User name:", user.name);
console.log("Email:", user.email);

app.innerHTML = `
  <h3>${user.name}</h3>
  <p><strong>Email:</strong> ${user.email}</p>
  <p><strong>Company:</strong> ${user.company.name}</p>
`;