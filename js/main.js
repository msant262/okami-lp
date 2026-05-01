/* ========================================
   OKAMI — Landing Page JavaScript
   Vanilla JS | IIFE Pattern
   ======================================== */

(function () {
    'use strict';

    /* ---------- DOM References ---------- */
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    /* ---------- Navbar Scroll Effect ---------- */
    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    /* ---------- Mobile Menu Toggle ---------- */
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);

            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when clicking a link
        var navLinkItems = navLinks.querySelectorAll('.navbar__link');
        navLinkItems.forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                hamburger.focus();
            }
        });
    }

    /* ---------- Scroll Reveal (IntersectionObserver) ---------- */
    var revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        var revealObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        // Fallback: reveal all elements
        revealElements.forEach(function (el) {
            el.classList.add('revealed');
        });
    }

    /* ---------- Form Validation & Handling ---------- */
    if (contactForm) {
        var fields = {
            nome: {
                el: document.getElementById('nome'),
                errorEl: document.getElementById('nome-error'),
                validate: function (val) {
                    if (!val.trim()) return 'Por favor, informe seu nome.';
                    if (val.trim().length < 2) return 'Nome deve ter ao menos 2 caracteres.';
                    return '';
                },
            },
            email: {
                el: document.getElementById('email'),
                errorEl: document.getElementById('email-error'),
                validate: function (val) {
                    if (!val.trim()) return 'Por favor, informe seu e-mail.';
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(val.trim())) return 'Por favor, informe um e-mail válido.';
                    return '';
                },
            },
            empresa: {
                el: document.getElementById('empresa'),
                errorEl: document.getElementById('empresa-error'),
                validate: function () {
                    return '';
                },
            },
            telefone: {
                el: document.getElementById('telefone'),
                errorEl: document.getElementById('telefone-error'),
                validate: function () {
                    return '';
                },
            },
            mensagem: {
                el: document.getElementById('mensagem'),
                errorEl: document.getElementById('mensagem-error'),
                validate: function (val) {
                    if (!val.trim()) return 'Por favor, escreva uma mensagem.';
                    if (val.trim().length < 10) return 'A mensagem deve ter ao menos 10 caracteres.';
                    return '';
                },
            },
        };

        // Real-time validation on blur
        Object.keys(fields).forEach(function (key) {
            var field = fields[key];
            if (!field.el) return;

            field.el.addEventListener('blur', function () {
                validateField(key);
            });

            field.el.addEventListener('input', function () {
                // Clear error state on input
                if (field.el.classList.contains('error')) {
                    validateField(key);
                }
            });
        });

        function validateField(key) {
            var field = fields[key];
            if (!field.el) return true;

            var errorMsg = field.validate(field.el.value);

            if (errorMsg) {
                field.el.classList.add('error');
                field.el.classList.remove('success');
                if (field.errorEl) field.errorEl.textContent = errorMsg;
                return false;
            } else {
                field.el.classList.remove('error');
                if (field.el.value.trim()) {
                    field.el.classList.add('success');
                } else {
                    field.el.classList.remove('success');
                }
                if (field.errorEl) field.errorEl.textContent = '';
                return true;
            }
        }

        function validateAll() {
            var isValid = true;
            Object.keys(fields).forEach(function (key) {
                if (!validateField(key)) {
                    isValid = false;
                }
            });
            return isValid;
        }

        // Phone mask (simple)
        var telefoneField = fields.telefone.el;
        if (telefoneField) {
            telefoneField.addEventListener('input', function (e) {
                var val = e.target.value.replace(/\D/g, '');
                if (val.length > 11) val = val.substring(0, 11);

                if (val.length > 6) {
                    val = '(' + val.substring(0, 2) + ') ' + val.substring(2, 7) + '-' + val.substring(7);
                } else if (val.length > 2) {
                    val = '(' + val.substring(0, 2) + ') ' + val.substring(2);
                } else if (val.length > 0) {
                    val = '(' + val;
                }

                e.target.value = val;
            });
        }

        // Form submit
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Check honeypot
            var botcheck = document.getElementById('botcheck');
            if (botcheck && botcheck.checked) {
                return;
            }

            if (!validateAll()) {
                // Focus first invalid field
                var firstError = contactForm.querySelector('.form-input.error');
                if (firstError) firstError.focus();
                return;
            }

            // Show loading state
            if (submitBtn) {
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
            }

            // Submit form via fetch for better UX
            var formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
            })
                .then(function (response) {
                    if (response.ok) {
                        // Redirect on success
                        window.location.href = 'https://msant262.github.io/okami-lp/';
                    } else {
                        throw new Error('Erro no envio');
                    }
                })
                .catch(function () {
                    // Fallback: submit form normally
                    contactForm.submit();
                })
                .finally(function () {
                    if (submitBtn) {
                        submitBtn.classList.remove('loading');
                        submitBtn.disabled = false;
                    }
                });
        });
    }

    /* ---------- Smooth scroll for anchor links (polyfill) ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                var navbarHeight = navbar ? navbar.offsetHeight : 70;
                var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            }
        });
    });

    /* ---------- Active nav link on scroll ---------- */
    var sections = document.querySelectorAll('section[id]');
    var navLinkAll = document.querySelectorAll('.navbar__link');

    function highlightNavLink() {
        var scrollPos = window.scrollY + 100;

        sections.forEach(function (section) {
            var top = section.offsetTop - 80;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinkAll.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink, { passive: true });

    /* ---------- Transformação arrow animation (mobile) ---------- */
    var transformArrow = document.querySelector('.transformacao__arrow');
    if (transformArrow && window.innerWidth < 768) {
        transformArrow.querySelector('i').classList.remove('fa-arrow-right');
        transformArrow.querySelector('i').classList.add('fa-arrow-down');
    }

    window.addEventListener('resize', function () {
        if (!transformArrow) return;
        var icon = transformArrow.querySelector('i');
        if (window.innerWidth < 768) {
            icon.classList.remove('fa-arrow-right');
            icon.classList.add('fa-arrow-down');
        } else {
            icon.classList.remove('fa-arrow-down');
            icon.classList.add('fa-arrow-right');
        }
    });
})();
