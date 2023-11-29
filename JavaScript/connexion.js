
//Connexion
document.getElementById("co-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let users = [
    { username: "admin", password: "pass1" },
    { username: "user2", password: "pass2" },
  ];

  let isValidUser = users.some(function (user) {
    return user.username === username && user.password === password;
  });

  let resultElement = document.getElementById("loginResult");

  if (isValidUser) {
  window.location.href = "cine-compte.html";
  } else {
    resultElement.textContent = "Echec de la connexion. Verifiez vos identifiants.";
    resultElement.style.color = "#1a76a3";
    resultElement.style.fontweight = "bold";

  }
});
