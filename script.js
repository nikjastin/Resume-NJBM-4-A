// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Print button functionality (optional - you can add a print button in HTML)
function printResume() {
    window.print();
}

// Update last modified date
window.addEventListener('load', () => {
    const footer = document.querySelector('.footer');
    if (footer) {
        const lastUpdated = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
        });
        const updateElement = footer.querySelector('p:last-child');
        if (updateElement && updateElement.textContent.includes('Last Updated')) {
            updateElement.textContent = `Last Updated: ${lastUpdated}`;
        }
    }
});

// Add hover effect for skill items
document.querySelectorAll('.skill-category li').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.paddingLeft = '30px';
        this.style.transition = 'padding-left 0.3s ease';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.paddingLeft = '25px';
    });
});

console.log('Resume loaded successfully! 🎉');
