let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let mensaje = document.getElementById("mensaje").value;

  fetch("https://api-pets-app.herokuapp.com/mensajes", {
    method: "POST",
    body: JSON.stringify({
      mensaje: mensaje,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then(() => {
      Swal.fire("Mensaje Recibido");
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha ocurrido un error!",
        showConfirmButton: true,
        footer: err,
      });
    });
});
