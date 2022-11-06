const btnMenu = document.getElementById("nav-btn");

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
  //   MUDA O ICONE
  if (btnMenu.classList.contains("fa-bars")) {
    btnMenu.classList.replace("fa-bars", "fa-x");
  } else {
    btnMenu.classList.replace("fa-x", "fa-bars");
  }
}
btnMenu.addEventListener("click", toggleMenu);
// btnMenu.addEventListener("touchstart", toggleMenu);
