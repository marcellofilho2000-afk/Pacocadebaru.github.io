document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
    });

});
