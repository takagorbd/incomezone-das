// Smooth Scroll Animation
document.querySelectorAll('a[href^="https://t.me/Income_zone0e_bot?start=r00162070985"]').forEach(anchor => {
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
