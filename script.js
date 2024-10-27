document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(`#${link.getAttribute('href').substring(1)}`);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

