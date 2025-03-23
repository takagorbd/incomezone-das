// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Entrance Animation
window.addEventListener('scroll', () => {
    const content = document.querySelector('.telegram-section');
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add('show');
    } else {
        content.classList.remove('show');
    }
});

// Menu Toggle System
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
