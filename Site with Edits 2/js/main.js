
// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', nav.classList.contains('active'));
});

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Robust scroll animation fallback
window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.animate');

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      observer.observe(el);
    });

    // Final fallback
    setTimeout(() => {
      elements.forEach(el => {
        if (!el.classList.contains('animated')) {
          el.classList.add('animated');
        }
      });
    }, 500);
  }, 200);
});
