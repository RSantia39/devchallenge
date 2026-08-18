const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  burger.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav-links.classList.remove("show");
  }
});
