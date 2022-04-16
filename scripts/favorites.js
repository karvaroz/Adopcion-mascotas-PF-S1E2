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
      Swal.fire("Favorito agregado exitosamente");
    })
    .catch((err) => {
      Swal.fire("Ha ocurrido un error", err);
    });
});

// Eliminar favorito
document.addEventListener("click", (e) => {
  if (e.classList.contains("card")) {
    let idcardFavorito = e.classList.contains("id");
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
  }
});

// Pintar favoritos
let listarCard = document.getElementById("listarCard");

const getFavorites = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  listarCard.innerHTML = "";
  data.forEach((element) => {
    const { id, name, image, breed } = element;
    listarCard.innerHTML += `
        <div class="card" id=${id}>
            <div class="card_img" style="
                background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0) 26.42%,
                    #000000 99.33%
                  ),
                  url(${image});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
              ">
              <div class="card_info">
                <h3>${name}</h3>
                <p>${breed}</p>
              </div>
            </div>
        </div>
    `;
  });
};

getFavorites("https://api-pets-app.herokuapp.com/favoritos");
