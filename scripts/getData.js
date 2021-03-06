const getData = async (url) => {
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

export default getData;