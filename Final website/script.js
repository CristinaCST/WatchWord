// ========================================
// WATCHWORD PICTURES - JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Don't prevent default if it's just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe different types of elements with staggered delays
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    const projectListItems = document.querySelectorAll('.project-list-item');
    projectListItems.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    const aboutBlocks = document.querySelectorAll('.about-block');
    aboutBlocks.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    const wildveldBlocks = document.querySelectorAll('.wildveld-block');
    wildveldBlocks.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    // Animate section titles
    const sectionTitles = document.querySelectorAll('.section-title, .category-title');
    sectionTitles.forEach(el => {
        observer.observe(el);
    });

    // Animate intro text
    const introText = document.querySelector('.intro-text');
    if (introText) {
        observer.observe(introText);
    }

    // ========================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    function highlightNavLink() {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.color = 'var(--color-accent)';
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on load

    // ========================================
    // VIDEO MODAL FUNCTIONALITY
    // ========================================
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');
    const modalCloseBtn = document.querySelector('.video-modal-close');
    const videoButtons = document.querySelectorAll('.btn-sizzle[data-video], .btn-trailer[data-video]');

    // Open modal when video button is clicked
    videoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const videoSrc = this.getAttribute('data-video');

            if (videoSrc) {
                modalVideoSource.setAttribute('src', videoSrc);
                modalVideo.load();
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling

                // Ensure video plays (some browsers may block autoplay)
                modalVideo.play().catch(err => {
                    console.log('Autoplay prevented:', err);
                });
            }
        });
    });

    // Close modal when close button is clicked
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            closeVideoModal();
        });
    }

    // Close modal when clicking outside the video
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // Function to close modal and stop video
    function closeVideoModal() {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.currentTime = 0;
        document.body.style.overflow = ''; // Restore scrolling
    }
});
