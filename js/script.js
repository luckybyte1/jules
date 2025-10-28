document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animations for sections
    const sections = document.querySelectorAll('.hero, .promo-item');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Mobile navigation toggle
    const nav = document.querySelector('nav');
    const navList = document.querySelector('.nav-list');
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Add styles for the hamburger menu
    const style = document.createElement('style');
    style.textContent = `
        .hamburger {
            display: none;
            cursor: pointer;
        }

        .hamburger span {
            display: block;
            width: 25px;
            height: 3px;
            margin: 5px 0;
            background-color: #f5f5f7;
            transition: 0.4s;
        }

        @media (max-width: 833px) {
            .hamburger {
                display: block;
            }

            .nav-list {
                display: none;
                position: absolute;
                top: 48px;
                left: 0;
                width: 100%;
                background: var(--header-background);
                flex-direction: column;
                align-items: flex-start;
                padding: 10px 20px;
            }

            .nav-list.active {
                display: flex;
            }

            .nav-list li {
                margin: 10px 0;
            }
        }
    `;
    document.head.appendChild(style);
});
