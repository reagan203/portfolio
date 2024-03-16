document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle mobile menu
    function toggleMenu() {
        document.querySelector('.navbar').classList.toggle('active');
    }

    // Toggle mobile menu when menu icon is clicked
    document.getElementById('menu-icon').addEventListener('click', toggleMenu);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            toggleMenu(); // Close menu after clicking a link
        });
    });

    // Dynamic content loading (for example, load more projects when scrolling to the bottom)
    window.addEventListener('scroll', function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // Load more content dynamically
        }
    });

    // Add hover animation effect to social media icons
    document.querySelectorAll('.social-media a').forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            // Add animation effect
            this.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseleave', function () {
            // Remove animation effect
            this.style.transform = 'scale(1)';
        });
    });
});
