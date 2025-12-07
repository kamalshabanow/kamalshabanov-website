// Particle animation
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// Social link interactions
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

// Contact button function
function scrollToContact() {
    const email = 'your.email@example.com';
    const subject = 'Salam! Layihə üçün təklif';
    const body = 'Salam,\n\nSizinlə əlaqə saxlamaq istəyirəm...\n\n';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Add hover sound effect (optional)
document.querySelectorAll('.social-link, .contact-btn').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});