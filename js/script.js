// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Hamburger menu toggle
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('active');
                // Close all dropdowns
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }

    // Mobile dropdown toggle
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('a');
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 700) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');

                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
    });

    // Mobile sub-dropdown toggle
    const subDropdowns = document.querySelectorAll('.sub-dropdown');
    subDropdowns.forEach(subDropdown => {
        const subDropdownToggle = subDropdown.querySelector('a');
        if (subDropdownToggle) {
            subDropdownToggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 700) {
                    e.preventDefault();
                    subDropdown.classList.toggle('active');

                    // Close other sub-dropdowns
                    subDropdowns.forEach(otherSubDropdown => {
                        if (otherSubDropdown !== subDropdown) {
                            otherSubDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                faqAnswer.classList.add('active');
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('contactModal');
    const modalTriggers = document.querySelectorAll('.btn-secondary');
    const closeModal = document.querySelector('.close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    if (closeModal && modal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});