// Smooth scroll for navigation links
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Toggle Navbar for Mobile
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // Hamburger icon
document.querySelector('.navbar').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Form validation and submission feedback
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Simple validation (additional validation can be added)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for reaching out! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
