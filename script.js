const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});
