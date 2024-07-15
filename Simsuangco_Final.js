document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    }

    function toggleMobileMenu() {
        const header = document.querySelector('header');
        const nav = header.querySelector('nav');
        nav.classList.toggle('open'); 
    }

    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerText = '';
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    document.querySelector('header .container').appendChild(mobileMenuButton);

    function adjustMenu() {
        const width = window.innerWidth;
        const nav = document.querySelector('header nav');
        if (width <= 768) {
            nav.style.display = 'block';
            mobileMenuButton.style.display = 'block';
        } else {
            nav.style.display = 'block';
            mobileMenuButton.style.display = 'none';
        }
    }

    window.addEventListener('resize', adjustMenu);
    adjustMenu(); 
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent!');
});

window.addEventListener('DOMContentLoaded', (event) => {
    const navbarLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

