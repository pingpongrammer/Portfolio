
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    if (!isMenuOpen) {
        toggleMenu();
    }
}

let isMenuOpen = true;

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (isMenuOpen) {
        // Hide the menu
        menu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        // Show the menu
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
    
    isMenuOpen = !isMenuOpen;
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

// Initialize animations when elements come into view
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animatedElements = entry.target.querySelectorAll('.image-container, .text-container, .skill-card, .project-card');
                
                animatedElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('animate-fade-in');
                    }, index * 100);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});


var typed = new Typed('#typed-output', {
  strings: ["Aspiring Web Developer", "Laravel Developer", "Frontend Enthusiast"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  backDelay: 1500
});


// Previous JavaScript remains the same

// Modal functions
function openModal(modalId) {
document.getElementById(modalId).style.display = "block";
document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

function closeModal(modalId) {
document.getElementById(modalId).style.display = "none";
document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
if (event.target.className === "modal") {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
}
}

// Close modal with Escape key
document.onkeydown = function(evt) {
evt = evt || window.event;
if (evt.key === "Escape") {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (modals[i].style.display === "block") {
            modals[i].style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
}
};


// Lightbox functionality
function openLightbox(imgElement) {
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');

lightboxImg.src = imgElement.src;
lightboxCaption.textContent = imgElement.alt;
lightbox.classList.remove('hidden');
lightbox.classList.add('flex');
document.body.style.overflow = 'hidden';
}

function closeLightbox() {
const lightbox = document.getElementById('lightbox');
lightbox.classList.add('hidden');
lightbox.classList.remove('flex');
document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
if (e.target === this) {
    closeLightbox();
}
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape' && !document.getElementById('lightbox').classList.contains('hidden')) {
    closeLightbox();
}
});

// Navigation between images in lightbox
document.addEventListener('keydown', function(e) {
const lightbox = document.getElementById('lightbox');
if (lightbox.classList.contains('hidden')) return;

const currentImg = document.getElementById('lightbox-image');
const gallery = currentImg.closest('.modal-content')?.querySelector('.project-gallery');
if (!gallery) return;

const images = Array.from(gallery.querySelectorAll('.gallery-image'));
const currentIndex = images.findIndex(img => img.src === currentImg.src);

if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
    currentImg.src = images[currentIndex + 1].src;
    document.getElementById('lightbox-caption').textContent = images[currentIndex + 1].alt;
}

if (e.key === 'ArrowLeft' && currentIndex > 0) {
    currentImg.src = images[currentIndex - 1].src;
    document.getElementById('lightbox-caption').textContent = images[currentIndex - 1].alt;
}
});


// Lightbox functionality
function openLightbox(imgElement) {
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');

lightboxImg.src = imgElement.src;
lightboxCaption.textContent = imgElement.alt;
lightbox.classList.remove('hidden');
lightbox.classList.add('flex');
document.body.style.overflow = 'hidden';
}

function closeLightbox() {
const lightbox = document.getElementById('lightbox');
lightbox.classList.add('hidden');
lightbox.classList.remove('flex');
document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
if (e.target === this) {
    closeLightbox();
}
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape' && !document.getElementById('lightbox').classList.contains('hidden')) {
    closeLightbox();
}
});

// Navigation between images in lightbox
document.addEventListener('keydown', function(e) {
const lightbox = document.getElementById('lightbox');
if (lightbox.classList.contains('hidden')) return;

const currentImg = document.getElementById('lightbox-image');
const gallery = currentImg.closest('.modal-content')?.querySelector('.project-gallery');
if (!gallery) return;

const images = Array.from(gallery.querySelectorAll('.gallery-image'));
const currentIndex = images.findIndex(img => img.src === currentImg.src);

if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
    currentImg.src = images[currentIndex + 1].src;
    document.getElementById('lightbox-caption').textContent = images[currentIndex + 1].alt;
}

if (e.key === 'ArrowLeft' && currentIndex > 0) {
    currentImg.src = images[currentIndex - 1].src;
    document.getElementById('lightbox-caption').textContent = images[currentIndex - 1].alt;
}
});