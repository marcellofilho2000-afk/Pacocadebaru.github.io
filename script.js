document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (!btn || !menu) return;

    btn.addEventListener("click", function () {

        btn.classList.toggle("active");
        menu.classList.toggle("active");

    });

});
