// DOM Elements
const recommendationForm = document.getElementById('recommendationForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const okButton = document.getElementById('okButton');

// Form submission handler
recommendationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value || 'Anonymous';
    const message = document.getElementById('message').value;
    
    // Create new recommendation element
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation';
    newRecommendation.innerHTML = `
        <p class="recommendation-text">${message}</p>
        <p class="recommendation-author">- ${name}</p>
    `;
    
    // Add to recommendations container
    document.querySelector('.recommendations-container').appendChild(newRecommendation);
    
    // Show popup
    popup.style.display = 'flex';
    
    // Reset form
    recommendationForm.reset();
});

// Close popup handlers
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

okButton.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Close popup when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .home-icon').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});