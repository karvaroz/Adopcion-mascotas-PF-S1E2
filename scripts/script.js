const btnPerros = document.getElementById("btnPerros");
const btnGatos = document.getElementById("btnGatos");
const listarCard = document.getElementById("listarCard");

btnPerros.addEventListener("click", () => {
  getData("https://api-pets-app.herokuapp.com/perros");
});

btnGatos.addEventListener("click", () => {
  getData("https://api-pets-app.herokuapp.com/gatos");
});


const getData = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  listarCard.innerHTML = "";
  data.forEach((element) => {
    const { id, name, image, breed } = element;
    listarCard.innerHTML += `
        <div class="card" id=${id}>
          <a href="/pages/detail.html">
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
          </a>
        </div>
    `;
  });
}

