export const getDetail = () => {
  document.addEventListener("click", (e) => {
    if (e.classList.contains("card")) {
      alert("hola");
      let id = target.id;
      let categoria = e.getAttribute("data-value");
      localStorage.setItem("categoria", categoria);
      localStorage.setItem("idCard", id);
      window.location.href = "../pages/detail.html";
    }
  });

  document.addEventListener("DOMContentLoaded", async () => {
    let idCard = localStorage.getItem("idCard");
    let categoria = localStorage.getItem("categoria");
    let res = await fetch(
      `https://api-pets-app.herokuapp.com/${categoria}/${idCard}`
    );
    let data = await res.json();
    console.log(data);
  });
};
