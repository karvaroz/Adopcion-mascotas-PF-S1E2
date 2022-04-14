let form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameU = document.getElementById("name").value;
  let lastNameU = document.getElementById("lastname").value;
  let emailU = document.getElementById("email").value;
  let passwordU = document.getElementById("password").value;

  fetch("https://api-pets-app.herokuapp.com/usuarios", {
    method: "POST",
    body: JSON.stringify({
      userName: nameU,
      userLastname: lastNameU,
      userEmail: emailU,
      userPassword: passwordU,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then(() => {
      Swal.fire("Login!", "Ha iniciado sesión!", "success").then((result) => {
        if (result.value) {
          window.location.href = "../pages/find.html";
        }
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha fallado el inicio de sesión!",
        showConfirmButton: true,
        footer: err,
      });
    });
});
