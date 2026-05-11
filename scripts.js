// Initialize Lucide Icons
lucide.createIcons();

// Scroll Revelation Logic
const revealElements = () => {
    const elements = document.querySelectorAll('.reveal, .reveal-right');
    const windowHeight = window.innerHeight;
    
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Header Shadow on Scroll
const header = document.getElementById('main-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu || !icon) return;
    
    const isHidden = menu.classList.contains('hidden');
    
    if (isHidden) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
};

// FAQ Toggle Logic
const toggleFaq = (button) => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('open');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('open');
    });
    
    if (!isOpen) {
        item.classList.add('open');
    }
};

// Product Filtering with Animation
const filterProducts = (category) => {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update buttons
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-white', 'shadow-sm', 'text-primary');
        btn.classList.add('text-slate-500');
        if (btn.dataset.category === category) {
            btn.classList.add('active', 'bg-white', 'shadow-sm', 'text-primary');
            btn.classList.remove('text-slate-500');
        }
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9) translateY(20px)';
        
        setTimeout(() => {
            if (category === 'todos' || card.dataset.category === category) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1) translateY(0)';
                }, 50);
            } else {
                card.classList.add('hidden');
            }
        }, 400);
    });
};

// Contact Form Handling
const handleSubmit = (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const formContainer = document.getElementById('form-container');
    const successState = document.getElementById('success-state');
    
    if (!btn || !btnText || !formContainer || !successState) return;
    
    btn.disabled = true;
    btnText.innerText = 'ENVIANDO...';
    
    // Simulate API call
    setTimeout(() => {
        formContainer.classList.add('hidden');
        successState.classList.remove('hidden');
    }, 1500);
};

const resetForm = () => {
    const formContainer = document.getElementById('form-container');
    const successState = document.getElementById('success-state');
    const btn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    
    if (!formContainer || !successState || !btn || !btnText) return;
    
    formContainer.classList.remove('hidden');
    successState.classList.add('hidden');
    btn.disabled = false;
    btnText.innerText = 'ENVIAR CONSULTA';
    document.querySelector('form').reset();
};

// Highlight current page in navigation
const highlightCurrentPage = () => {
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === page) {
            link.classList.add('active-section');
        } else {
            link.classList.remove('active-section');
        }
    });
};

window.addEventListener('load', highlightCurrentPage);
