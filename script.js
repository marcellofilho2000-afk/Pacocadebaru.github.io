const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    const aberto = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", aberto);
});
