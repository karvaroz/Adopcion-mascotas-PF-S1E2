import { getDetail } from "./detail.js";
import getData from "./getData.js";

const btnPerros = document.getElementById("btnPerros");
const btnGatos = document.getElementById("btnGatos");
const listarCard = document.getElementById("listarCard");

btnPerros.addEventListener("click", () => {
  getData("https://api-pets-app.herokuapp.com/perros");
  listarCard.setAttribute("data-value", "perros");
  setTimeout(getDetail(), 5000);
});

btnGatos.addEventListener("click", () => {
  getData("https://api-pets-app.herokuapp.com/gatos");
  listarCard.setAttribute("data-value", "gatos");
  setTimeout(getDetail(), 5000);
});




