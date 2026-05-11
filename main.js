// ===========================
// Initialize AOS (Animate On Scroll)
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        offset: 100,
        mirror: true
    });
    
    // Initialize Hero Background Slideshow
    initHeroSlideshow();
    
    // Initialize Hero Text Animation
    initHeroTextAnimation();
});

// ===========================
// Hero Text Animation
// ===========================
function initHeroTextAnimation() {
    const textElement = document.querySelector('.hero-text-animated');
    if (!textElement) return;
    
    // Make texts globally accessible for language switching
    window.heroTexts = [
        'We build <span class="text-gradient">social-first storytelling platforms</span> where books, games, and communities grow together',
        'Where <span class="text-gradient">readers become communities</span> and stories come alive',
        'Transforming <span class="text-gradient">books into interactive experiences</span> for the digital age',
        'Building the future of <span class="text-gradient">gaming and storytelling</span> hand in hand',
        'Creating platforms where <span class="text-gradient">stories meet players</span> and magic happens'
    ];
    
    let currentText = 0;
    
    // Set initial text
    textElement.innerHTML = window.heroTexts[currentText];
    textElement.style.opacity = '1';
    
    function changeText() {
        // Fade out
        textElement.style.opacity = '0';
        
        setTimeout(() => {
            // Change text
            currentText = (currentText + 1) % window.heroTexts.length;
            textElement.innerHTML = window.heroTexts[currentText];
            
            // Fade in
            textElement.style.opacity = '1';
        }, 600);
    }
    
    // Change text every 5 seconds
    setInterval(changeText, 5000);
}

// ===========================
// Hero Background Slideshow
// ===========================
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
}

// ===========================
// Navbar Scroll Effect
// ===========================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Smooth Scroll for Navigation Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ===========================
// Newsletter Form Submission
// ===========================
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('Thank you for subscribing!', 'success');
            this.reset();
        }
    });
});

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'};
        color: white;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Parallax Effect for Hero
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ===========================
// Portfolio Item Hover Effect
// ===========================
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===========================
// Service Card Tilt Effect
// ===========================
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Prevent Default Form Actions
// ===========================
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (!form.getAttribute('action')) {
            e.preventDefault();
        }
    });
});

// ===========================
// Dynamic Year in Footer
// ===========================
const yearElement = document.querySelector('.footer p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
}
// ===========================
// Cookie Settings Modal
// ===========================
const cookieModal = document.getElementById('cookieModal');
const openCookieSettings = document.getElementById('openCookieSettings');
const closeCookieModal = document.getElementById('closeCookieModal');
const closeCookieModalFooter = document.getElementById('closeCookieModalFooter');
const saveCookiePreferences = document.getElementById('saveCookiePreferences');
const acceptAllCookies = document.getElementById('acceptAllCookies');
const rejectAllCookies = document.getElementById('rejectAllCookies');

// Cookie checkboxes
const cookiePreferences = document.getElementById('cookiePreferences');
const cookieAnalytics = document.getElementById('cookieAnalytics');
const cookieMarketing = document.getElementById('cookieMarketing');

// Load saved cookie preferences from localStorage
function loadCookiePreferences() {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences);
        cookiePreferences.checked = preferences.preferences || false;
        cookieAnalytics.checked = preferences.analytics || false;
        cookieMarketing.checked = preferences.marketing || false;
    }
}

// Save cookie preferences to localStorage
function saveCookieSettings() {
    const preferences = {
        essential: true, // Always true
        preferences: cookiePreferences.checked,
        analytics: cookieAnalytics.checked,
        marketing: cookieMarketing.checked
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
}

// Open modal
if (openCookieSettings) {
    openCookieSettings.addEventListener('click', function(e) {
        e.preventDefault();
        cookieModal.classList.add('show');
        loadCookiePreferences();
    });
}

// Close modal
function closeCookieModalFunction() {
    cookieModal.classList.remove('show');
}

if (closeCookieModal) {
    closeCookieModal.addEventListener('click', closeCookieModalFunction);
}

if (closeCookieModalFooter) {
    closeCookieModalFooter.addEventListener('click', closeCookieModalFunction);
}

// Close modal if clicking outside
cookieModal.addEventListener('click', function(e) {
    if (e.target === cookieModal) {
        closeCookieModalFunction();
    }
});

// Save preferences button
if (saveCookiePreferences) {
    saveCookiePreferences.addEventListener('click', function() {
        saveCookieSettings();
        closeCookieModalFunction();
        
        // Show a brief confirmation (optional)
        console.log('Cookie preferences saved!');
    });
}

// Accept all cookies
if (acceptAllCookies) {
    acceptAllCookies.addEventListener('click', function() {
        cookiePreferences.checked = true;
        cookieAnalytics.checked = true;
        cookieMarketing.checked = true;
        saveCookieSettings();
        closeCookieModalFunction();
    });
}

// Reject all non-essential cookies
if (rejectAllCookies) {
    rejectAllCookies.addEventListener('click', function() {
        cookiePreferences.checked = false;
        cookieAnalytics.checked = false;
        cookieMarketing.checked = false;
        saveCookieSettings();
        closeCookieModalFunction();
    });
}

// Load preferences on page load
loadCookiePreferences();

// ===========================
// Cookie Consent Banner
// ===========================
const cookieBanner = document.getElementById('cookieBanner');
const acceptAllBanner = document.getElementById('acceptAllBanner');
const rejectAllBanner = document.getElementById('rejectAllBanner');
const cookieSettingsBanner = document.getElementById('cookieSettingsBanner');

// Show banner every time page loads
function showCookieBanner() {
    // Show banner after a short delay for smooth animation
    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 500);
}

// Hide banner
function hideCookieBanner() {
    cookieBanner.classList.remove('show');
}

// Accept all cookies from banner
if (acceptAllBanner) {
    acceptAllBanner.addEventListener('click', function() {
        cookiePreferences.checked = true;
        cookieAnalytics.checked = true;
        cookieMarketing.checked = true;
        saveCookieSettings();
        hideCookieBanner();
    });
}

// Reject all non-essential cookies from banner
if (rejectAllBanner) {
    rejectAllBanner.addEventListener('click', function() {
        cookiePreferences.checked = false;
        cookieAnalytics.checked = false;
        cookieMarketing.checked = false;
        saveCookieSettings();
        hideCookieBanner();
    });
}

// Open cookie settings from banner
if (cookieSettingsBanner) {
    cookieSettingsBanner.addEventListener('click', function() {
        hideCookieBanner();
        cookieModal.classList.add('show');
        loadCookiePreferences();
    });
}

// Show banner on page load
showCookieBanner();

// ===========================
// Back to Top Button
// ===========================
const backToTopBtn = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Contact Form Handling
// ===========================

// EmailJS Configuration
// IMPORTANT: You need to set up EmailJS account and replace these values:
// 1. Create free account at https://www.emailjs.com/
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values below with your own keys
const EMAILJS_PUBLIC_KEY = 'Ms5IFtaxQKy2ZGa4h'; // Get from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_vehx97h'; // Your email service ID
const EMAILJS_TEMPLATE_ID = 'template_7ggy5om'; // Your template ID

// Initialize EmailJS
(function() {
    if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

// Character counter for message field
const messageField = document.getElementById('contactMessage');
const charCount = document.getElementById('charCount');

if (messageField && charCount) {
    messageField.addEventListener('input', function() {
        const count = this.value.length;
        charCount.textContent = count;
        
        // Change color based on character count
        if (count < 50) {
            charCount.style.color = '#ff6b6b';
        } else {
            charCount.style.color = 'var(--primary-color)';
        }
    });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        // Validate fields
        if (!name || !email || !subject || !message) {
            showFormStatus('Please fill in all fields.', 'error');
            return;
        }
        
        // Validate message length
        if (message.length < 50) {
            showFormStatus('Message must be at least 50 characters long.', 'error');
            return;
        }
        
        // Check if EmailJS is configured
        if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            showFormStatus('EmailJS is not configured yet. Please set up your EmailJS account and update the keys in main.js', 'error');
            console.error('EmailJS Configuration Required:', {
                instructions: 'Visit https://www.emailjs.com/ to create an account and get your keys',
                requiredKeys: ['EMAILJS_PUBLIC_KEY', 'EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID']
            });
            return;
        }
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        
        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'info@versanova.de'
        };
        
        // Send email using EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showFormStatus('Message sent successfully! We will get back to you soon.', 'success');
                contactForm.reset();
                charCount.textContent = '0';
                charCount.style.color = 'rgba(255, 255, 255, 0.6)';
            })
            .catch(function(error) {
                console.error('FAILED...', error);
                showFormStatus('Failed to send message. Please try again or contact us directly at info@versanova.de', 'error');
            })
            .finally(function() {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span data-translate="contact_form_btn">Send Message</span> <i class="bi bi-send ms-2"></i>';
            });
    });
}

// Show form status message
function showFormStatus(message, type) {
    if (!formStatus) return;
    
    formStatus.innerHTML = `
        <div class="alert alert-${type === 'success' ? 'success' : 'danger'}" role="alert" style="
            background: ${type === 'success' ? 'rgba(40, 167, 69, 0.15)' : 'rgba(220, 53, 69, 0.15)'};
            border: 1px solid ${type === 'success' ? 'rgba(40, 167, 69, 0.3)' : 'rgba(220, 53, 69, 0.3)'};
            color: ${type === 'success' ? '#28a745' : '#dc3545'};
            border-radius: 8px;
            padding: 12px 20px;
        ">
            <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2"></i>
            ${message}
        </div>
    `;
    
    // Auto-hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formStatus.innerHTML = '';
        }, 5000);
    }
}

console.log('Versa Nova Website Loaded Successfully! 🚀');