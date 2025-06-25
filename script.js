window.scrollTo(0, 0);

// Smooth scroll for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const text = btn.textContent.toLowerCase();
        if (text.includes('try')) scrollToSection('.white-section');
        if (text.includes('launch')) scrollToSection('.cta');
    });
});

function scrollToSection(selector) {
    const section = document.querySelector(selector);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Back to Top Button Logic
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }

    // Animate feature cards on scroll
    document.querySelectorAll('.feature-card, .step-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing Animation for Hero Heading
const heroText = "Meet Your AI Voice Mentor";
const h1 = document.querySelector('h1');
h1.textContent = "";
let index = 0;
const typeInterval = setInterval(() => {
    if (index < heroText.length) {
        h1.textContent += heroText.charAt(index);
        index++;
    } else {
        clearInterval(typeInterval);
    }
}, 100);
