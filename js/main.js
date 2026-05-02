(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const revealElements = document.querySelectorAll('.reveal');
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 24) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const open = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  const sections = document.querySelectorAll('section[id]');
  function updateActiveLink() {
    const offset = window.scrollY + 120;
    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (offset >= top && offset < top + height) {
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  if (contactForm) {
    const fields = {
      nome: {
        el: document.getElementById('nome'),
        errorEl: document.getElementById('nome-error'),
        validate: function (value) {
          if (!value.trim()) return 'Por favor, informe seu nome.';
          if (value.trim().length < 2) return 'Use pelo menos 2 caracteres.';
          return '';
        }
      },
      email: {
        el: document.getElementById('email'),
        errorEl: document.getElementById('email-error'),
        validate: function (value) {
          if (!value.trim()) return 'Por favor, informe seu e-mail.';
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!regex.test(value.trim())) return 'Informe um e-mail válido.';
          return '';
        }
      },
      empresa: {
        el: document.getElementById('empresa'),
        errorEl: document.getElementById('empresa-error'),
        validate: function () { return ''; }
      },
      telefone: {
        el: document.getElementById('telefone'),
        errorEl: document.getElementById('telefone-error'),
        validate: function () { return ''; }
      },
      mensagem: {
        el: document.getElementById('mensagem'),
        errorEl: document.getElementById('mensagem-error'),
        validate: function (value) {
          if (!value.trim()) return 'Conte um pouco sobre o seu desafio.';
          if (value.trim().length < 10) return 'A mensagem deve ter pelo menos 10 caracteres.';
          return '';
        }
      }
    };

    function validateField(key) {
      const field = fields[key];
      if (!field || !field.el) return true;
      const error = field.validate(field.el.value);
      field.el.classList.remove('error', 'success');
      if (error) {
        field.el.classList.add('error');
        if (field.errorEl) field.errorEl.textContent = error;
        return false;
      }
      if (field.el.value.trim()) field.el.classList.add('success');
      if (field.errorEl) field.errorEl.textContent = '';
      return true;
    }

    function validateAll() {
      return Object.keys(fields).every(validateField);
    }

    Object.keys(fields).forEach(function (key) {
      const field = fields[key];
      if (!field.el) return;
      field.el.addEventListener('blur', function () { validateField(key); });
      field.el.addEventListener('input', function () {
        if (field.el.classList.contains('error')) validateField(key);
      });
    });

    const telefoneField = fields.telefone.el;
    if (telefoneField) {
      telefoneField.addEventListener('input', function (event) {
        let value = event.target.value.replace(/\D/g, '').slice(0, 11);
        if (value.length > 6) value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7);
        else if (value.length > 2) value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
        else if (value.length) value = '(' + value;
        event.target.value = value;
      });
    }

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const botcheck = document.getElementById('botcheck');
      if (botcheck && botcheck.checked) return;
      if (!validateAll()) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
      }

      const formData = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Falha no envio');
          return response.json().catch(function () { return {}; });
        })
        .then(function () {
          alert('Mensagem enviada com sucesso. A Okami vai retornar em breve.');
          contactForm.reset();
          document.querySelectorAll('.form-input').forEach(function (field) {
            field.classList.remove('success');
          });
        })
        .catch(function () {
          alert('Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.');
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
          }
        });
    });
  }
})();
