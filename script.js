// Global variables
let controller;
let isLoading = true;

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');

// Ensure projects are visible by default
function ensureProjectsVisible() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '1';
        card.style.display = 'block';
        card.style.transform = 'translateY(0)';
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing portfolio');
    ensureProjectsVisible(); // Ensure projects are visible first
    initializeAnimations();
    initializeScrollMagic();
    
    // Initialize navigation with a slight delay to ensure GSAP is ready
    setTimeout(() => {
        initializeNavigation();
        console.log('Navigation initialized');
    }, 100);
    
    initializeSkillBars();
    initializeSkillInteractions();
    initializeProjectFiltering();
    initializeContactForm();
    initializeCounters();
    handleLoading();
});

// Loading Screen Animation
function handleLoading() {
    window.addEventListener('load', function() {
        console.log('Window fully loaded');
        
        // Ensure navigation is working
        if (document.querySelectorAll('.nav-link').length === 0) {
            console.warn('Re-initializing navigation due to missing links');
            setTimeout(() => initializeNavigation(), 200);
        }
        
        setTimeout(() => {
            gsap.to(loadingScreen, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete: function() {
                    loadingScreen.style.display = 'none';
                    isLoading = false;
                    startMainAnimations();
                }
            });
        }, 2000);
    });
}

// Initialize GSAP animations
function initializeAnimations() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Set initial states for animations
    gsap.set(['.hero-text', '.hero-image'], { opacity: 0, y: 50 });
    gsap.set('.floating-shapes .shape', { scale: 0, rotation: 0 });
    gsap.set('.nav-container', { y: -100 });
}

// Start main animations after loading
function startMainAnimations() {
    // Navbar animation
    gsap.to('.nav-container', {
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl.to('.hero-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    })
    .to('.hero-image', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5")
    .to('.floating-shapes .shape', {
        scale: 1,
        rotation: 360,
        duration: 1.5,
        ease: "back.out(1.7)",
        stagger: 0.2
    }, "-=1");

    // Typing effect for hero title
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.innerHTML = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.opacity = '0';
            heroName.appendChild(span);
        }
        
        gsap.to('.hero-name span', {
            opacity: 1,
            duration: 0.05,
            stagger: 0.1,
            delay: 1.2
        });
    }
}

// Initialize ScrollMagic
function initializeScrollMagic() {
    // Create ScrollMagic controller
    controller = new ScrollMagic.Controller();

    // About section animation
    const aboutTl = gsap.timeline()
        .from('.about-image', { x: -100, opacity: 0, duration: 1 })
        .from('.about-text', { x: 100, opacity: 0, duration: 1 }, "-=0.8")
        .from('.stat-item', { y: 50, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.5");

    new ScrollMagic.Scene({
        triggerElement: '#about',
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(aboutTl)
    .addTo(controller);

    // Skills section animation
    const skillsTl = gsap.timeline()
        .from('.skill-category', { 
            y: 100, 
            opacity: 0, 
            duration: 0.8, 
            stagger: 0.3,
            ease: "power3.out"
        });

    new ScrollMagic.Scene({
        triggerElement: '#skills',
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(skillsTl)
    .addTo(controller);

    // Projects section animation
    const projectsTl = gsap.timeline()
        .from('.projects-filter .filter-btn', { 
            scale: 0, 
            opacity: 0, 
            duration: 0.5, 
            stagger: 0.1,
            ease: "back.out(1.7)"
        })
        .from('.project-card', { 
            y: 100, 
            opacity: 0, 
            duration: 0.8, 
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.3");

    new ScrollMagic.Scene({
        triggerElement: '#projects',
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(projectsTl)
    .addTo(controller)
    .on('enter', function() {
        // Fallback: ensure all projects are visible
        const allProjects = document.querySelectorAll('.project-card');
        allProjects.forEach(card => {
            card.style.display = 'block';
            card.style.opacity = '1';
        });
    });

    // Contact section animation
    const contactTl = gsap.timeline()
        .from('.contact-item', { 
            x: -100, 
            opacity: 0, 
            duration: 0.8, 
            stagger: 0.2 
        })
        .from('.contact-form', { 
            x: 100, 
            opacity: 0, 
            duration: 0.8 
        }, "-=0.6");

    new ScrollMagic.Scene({
        triggerElement: '#contact',
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(contactTl)
    .addTo(controller);

    // Parallax effect for floating shapes
    gsap.to('.shape-1', {
        y: -100,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to('.shape-2', {
        y: -150,
        rotation: 180,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to('.shape-3', {
        y: -80,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
}

// Navigation functionality
function initializeNavigation() {
    console.log('Initializing navigation...');
    console.log('GSAP available:', !!window.gsap);
    console.log('ScrollToPlugin available:', !!gsap.plugins?.ScrollToPlugin);
    
    // Check if elements exist before adding event listeners
    if (!mobileMenu || !navMenu) {
        console.warn('Navigation elements not found:', { mobileMenu: !!mobileMenu, navMenu: !!navMenu });
        return;
    }
    
    console.log('Mobile menu and nav menu found successfully');

    // Mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        console.log('Mobile menu clicked');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = mobileMenu.querySelectorAll('.bar');
        if (navMenu.classList.contains('active')) {
            gsap.to(bars[0], { rotation: 45, y: 6, duration: 0.3 });
            gsap.to(bars[1], { opacity: 0, duration: 0.3 });
            gsap.to(bars[2], { rotation: -45, y: -6, duration: 0.3 });
        } else {
            gsap.to(bars[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(bars[1], { opacity: 1, duration: 0.3 });
            gsap.to(bars[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Found navigation links:', navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            console.log('Navigation clicked:', targetId, 'Target found:', !!targetSection);
            
            if (targetSection) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                
                // Reset hamburger bars
                const bars = mobileMenu.querySelectorAll('.bar');
                gsap.to(bars[0], { rotation: 0, y: 0, duration: 0.3 });
                gsap.to(bars[1], { opacity: 1, duration: 0.3 });
                gsap.to(bars[2], { rotation: 0, y: 0, duration: 0.3 });
                
                // Calculate target position
                const targetPosition = targetSection.offsetTop - 70; // 70px offset for fixed navbar
                console.log('Scrolling to position:', targetPosition);
                
                // Try GSAP scroll first, fallback to native scroll
                try {
                    if (window.gsap && gsap.to && gsap.plugins.ScrollToPlugin) {
                        console.log('Using GSAP ScrollTo');
                        gsap.to(window, {
                            duration: 1,
                            scrollTo: {
                                y: targetPosition,
                                autoKill: false
                            },
                            ease: "power2.inOut"
                        });
                    } else {
                        console.log('GSAP ScrollTo not available, using native scroll');
                        // Fallback to smooth native scroll
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.warn('GSAP scroll failed, using fallback:', error);
                    // Fallback to smooth native scroll
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                console.warn('Target section not found:', targetId);
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
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
}

// Initialize skill items animation
function initializeSkillBars() {
    const skillScene = new ScrollMagic.Scene({
        triggerElement: '#skills',
        triggerHook: 0.8,
        reverse: false
    })
    .on('enter', function() {
        const skillItems = document.querySelectorAll('.skill-item');
        gsap.fromTo(skillItems, 
            {
                scale: 0.8,
                opacity: 0,
                y: 30
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }
        );
    })
    .addTo(controller);
}

// Initialize skill interactions
function initializeSkillInteractions() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(this.querySelector('.skill-icon'), {
                rotation: 10,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(this.querySelector('.skill-icon'), {
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        // Add click animation
        item.addEventListener('click', function() {
            gsap.fromTo(this.querySelector('.skill-icon'), 
                { scale: 1 },
                { 
                    scale: 1.2,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                }
            );
        });
    });
}

// Project filtering functionality
function initializeProjectFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Ensure all projects are visible initially
    projectCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Animate out all cards
            gsap.to(projectCards, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                stagger: 0.05,
                onComplete: function() {
                    // Filter cards
                    projectCards.forEach(card => {
                        const category = card.getAttribute('data-category');
                        if (filter === 'all' || category === filter) {
                            card.style.display = 'block';
                            gsap.set(card, { opacity: 0, scale: 0.8 });
                        } else {
                            card.style.display = 'none';
                        }
                    });
                    
                    // Animate in visible cards
                    const visibleCards = Array.from(projectCards).filter(card => 
                        card.style.display !== 'none'
                    );
                    
                    gsap.to(visibleCards, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "back.out(1.7)"
                    });
                }
            });
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoader = submitBtn.querySelector('.btn-loader');
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset form
                this.reset();
                
                // Reset button state
                btnText.style.display = 'inline-block';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
            }, 2000);
        });
    }
}

// Counter animation for stats
function initializeCounters() {
    const counterScene = new ScrollMagic.Scene({
        triggerElement: '.about-stats',
        triggerHook: 0.8,
        reverse: false
    })
    .on('enter', function() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            gsap.to(counter, {
                innerHTML: target,
                duration: 2,
                ease: "power2.out",
                snap: { innerHTML: 1 },
                onUpdate: function() {
                    counter.innerHTML = Math.ceil(counter.innerHTML);
                }
            });
        });
    })
    .addTo(controller);
}

// Utility function for notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    const closeBtn = notification.querySelector('button');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Scroll to top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    scrollBtn.addEventListener('click', function() {
        try {
            if (window.gsap && gsap.to && gsap.plugins.ScrollToPlugin) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: 0 },
                    ease: "power2.inOut"
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
}

// Initialize scroll to top button
addScrollToTop();

// Cursor effect for desktop
function initializeCursor() {
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            gsap.to(cursor, {
                x: e.clientX - 10,
                y: e.clientY - 10,
                duration: 0.1
            });
        });
        
        // Scale cursor on hover
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 2, duration: 0.2 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, duration: 0.2 });
            });
        });
    }
}

// Initialize cursor effect
initializeCursor();

// Intersection Observer for additional animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.slide-up');
    animateElements.forEach(el => observer.observe(el));
});

// Preloader for images
function preloadImages() {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    if (images.length === 0) return;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    document.body.classList.add('images-loaded');
                }
            });
        }
    });
    
    if (loadedImages === images.length) {
        document.body.classList.add('images-loaded');
    }
}

// Initialize image preloading
preloadImages();

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttled scroll handler
const throttledScrollHandler = debounce(function() {
    // Handle scroll-based animations here if needed
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Clean up on page unload
window.addEventListener('beforeunload', function() {
    if (controller) {
        controller.destroy(true);
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Console welcome message
console.log('%c🚀 Portfolio Website Loaded Successfully!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, JavaScript, GSAP & ScrollMagic', 'color: #10b981; font-size: 12px;');