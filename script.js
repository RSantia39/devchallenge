const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("show");
  }
});
