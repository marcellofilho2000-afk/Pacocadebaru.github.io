const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
    // Toggle menu open/close with proper ARIA values
    menuToggle.addEventListener('click', () => {
        const aberto = menu.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        document.body.classList.toggle('menu-open', aberto);
    });

    // Close menu when focus moves away (keyboard) or when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            if (menu.classList.contains('is-open')) {
                menu.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        }
    });
}
