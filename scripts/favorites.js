//Agregar a favoritos
let btnFavorito = document.getElementById("favorite");

btnFavorito.addEventListener("click", (e) => {
  e.preventDefault();
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let breed = document.getElementById("breed").value;
  let image = document.getElementById("image").value;

  fetch("https://api-pets-app.herokuapp.com/favoritos", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      name: name,
      breed: breed,
      image: image,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then(() => {
      Swal.fire("Favorito agregado exitosamente").then((result) => {
        if (result.value) {
          window.location.href = "../pages/ffavorites.html";
        }
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha fallado agregar a favoritos!",
        showConfirmButton: true,
        footer: err,
      });
    });
});

// Eliminar favorito
let cardFavorito = e.classList.contains("card");
let idcardFavorito = e.classList.contains("id");

cardFavorito.addEventListener("click", () => {
  fetch(`https://api-pets-app.herokuapp.com/favoritos/${idcardFavorito}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: id,
      name: name,
      breed: breed,
      image: image,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then(() => {
      Swal.fire("Favorito Eliminado exitosamente").then((result) => {
        if (result.value) {
          window.location.href = "../pages/favorites.html";
        }
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha fallado algo!",
        showConfirmButton: true,
        footer: err,
      });
    });
});
