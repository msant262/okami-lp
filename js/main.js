/* ==========================================
   OKAMI LANDING PAGE — JavaScript v2
   Vanilla JS, no dependencies
   IntersectionObserver, smooth scroll, navbar
   ========================================== */

(function() {
  'use strict';

  // === NAVBAR SCROLL EFFECT ===
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.pageYOffset > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // === MOBILE MENU TOGGLE ===
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    navMenu.classList.add('open');
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  navToggle.addEventListener('click', function() {
    if (navMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on link click
  navMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // === SCROLL ANIMATIONS (IntersectionObserver) ===
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.08
    };

    const fadeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(function(el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback for old browsers
    fadeElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // === ACTIVE NAV LINK ON SCROLL ===
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // === FORM VALIDATION & UX ===
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const nome = document.getElementById('nome');
      const email = document.getElementById('email');
      const mensagem = document.getElementById('mensagem');

      let isValid = true;

      [nome, email, mensagem].forEach(function(field) {
        if (!field.value.trim()) {
          field.style.borderBottomColor = '#ff4444';
          isValid = false;
        } else {
          field.style.borderBottomColor = '';
        }
      });

      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderBottomColor = '#ff4444';
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      }
    });

    // Reset border on input
    contactForm.querySelectorAll('input, textarea').forEach(function(field) {
      field.addEventListener('input', function() {
        this.style.borderBottomColor = '';
      });
    });
  }

  // === NAVBAR INITIAL STATE ===
  handleNavbarScroll();
  highlightNavOnScroll();

  // === PARALLAX-LIKE EFFECT ON HERO ===
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && window.innerWidth > 768) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        const opacity = 1 - (scrolled / (window.innerHeight * 0.8));
        const translateY = scrolled * 0.3;
        heroContent.style.opacity = Math.max(0, opacity);
        heroContent.style.transform = 'translateY(' + translateY + 'px)';
      }
    }, { passive: true });
  }

})();