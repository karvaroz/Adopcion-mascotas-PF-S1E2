const listarCard = document.getElementById("listarCard");
let idDetalleCard = listarCard.getAttribute("id");
let categoria = listarCard.getAttribute("data-value");




// idDetalleCard.addEventListener("click", function () {
//   console.log(idDetalleCard)
// });

// async function detail(id) {
//   const resp = await fetch(
//     `https://api-pets-app.herokuapp.com/${categoria}/${id}`
//   );
//   const data = await resp.json();
//   console.log(data);
// }
