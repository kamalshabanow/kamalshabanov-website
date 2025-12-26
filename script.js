document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

function scrollToContact() {
    const email = 'kamalshabanov04@gmail.com'; 
    
    window.location.href = 'mailto:' + email;
}

document.querySelectorAll('.social-link, .contact-btn').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});