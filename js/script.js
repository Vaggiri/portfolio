document.addEventListener('DOMContentLoaded', function () {
    // --- Theme Toggler ---
    const themeToggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    const html = document.documentElement;

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    });

    // --- AOS (Animate on Scroll) Initialization ---
    AOS.init({
        duration: 800, // animation duration
        once: true,    // whether animation should happen only once
    });

    // --- Typed.js Initialization ---
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ["ECE Student.", "IoT Enthusiast.", "Intel IoT Core Team Member.", "Problem Solver."],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2000,
            loop: true
        });
    }

    // --- Particles.js Initialization (only in dark mode) ---
    const initParticles = () => {
        if (document.documentElement.classList.contains('dark') && document.getElementById('particles-js')) {
            particlesJS("particles-js", {
                "particles": { "number": { "value": 60, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.3, "random": true }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out" } },
                "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true }, "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } } } },
                "retina_detect": true
            });
        }
    };
    initParticles();
    // Re-initialize if theme changes
    new MutationObserver(initParticles).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // --- Resume Button ---
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            alert("To generate a PDF, use your browser's print function (Ctrl+P) and 'Save as PDF'. A dedicated resume file is recommended for best results.");
            window.print();
        });
    }

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});