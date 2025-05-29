// Art Essence - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    init();
});

function init() {
    // Set current year in footer
    setCurrentYear();
    
    // Set up navigation
    setupNavigation();
    
    // Set up order buttons
    setupOrderButtons();
    
    // Add animations
    addAnimations();
}

function setCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

function setupNavigation() {
    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const exploreBtn = document.getElementById('exploreBtn');
    const backBtn = document.getElementById('backBtn');
    
    const landingPage = document.getElementById('landingPage');
    const menuPage = document.getElementById('menuPage');
    
    // Show landing page initially
    showPage('home');
    
    // Navigation event listeners
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('home');
            updateActiveNavLink('home');
        });
    }
    
    if (menuLink) {
        menuLink.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('menu');
            updateActiveNavLink('menu');
        });
    }
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('menu');
            updateActiveNavLink('menu');
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('home');
            updateActiveNavLink('home');
        });
    }
}

function showPage(page) {
    const landingPage = document.getElementById('landingPage');
    const menuPage = document.getElementById('menuPage');
    
    if (page === 'home') {
        landingPage.style.display = 'block';
        menuPage.style.display = 'none';
        
        // Add fade in animation
        landingPage.classList.remove('page-transition');
        setTimeout(() => {
            landingPage.classList.add('page-transition', 'active');
        }, 50);
        
    } else if (page === 'menu') {
        landingPage.style.display = 'none';
        menuPage.style.display = 'block';
        
        // Add fade in animation
        menuPage.classList.remove('page-transition');
        setTimeout(() => {
            menuPage.classList.add('page-transition', 'active');
        }, 50);
        
        // Animate product cards
        animateProductCards();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNavLink(activePage) {
    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    
    // Remove active class from all links
    homeLink.classList.remove('active');
    menuLink.classList.remove('active');
    
    // Add active class to current page link
    if (activePage === 'home') {
        homeLink.classList.add('active');
    } else if (activePage === 'menu') {
        menuLink.classList.add('active');
    }
}

function setupOrderButtons() {
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            const phoneNumber = "+201273830334";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    });
}

function addAnimations() {
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .feature-icon, h1, h2, h3, .lead');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

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

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Handle navbar collapse on mobile
document.addEventListener('click', function(e) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                hide: true
            });
        }
    }
});