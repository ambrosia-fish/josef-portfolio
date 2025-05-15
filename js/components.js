// Component functionality for the portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Load header component
    const headerPlaceholder = document.getElementById('header-component');
    if (headerPlaceholder) {
        fetch('components/header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                
                // Initialize Alpine.js for the header
                const header = headerPlaceholder.querySelector('header');
                if (header && !header._x_dataStack) {
                    Alpine.initTree(header);
                }
                
                // Get current page path
                const currentPath = window.location.pathname;
                const currentPage = currentPath.split('/').pop() || 'index.html';
                
                // Add active class to current nav item
                const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
                navLinks.forEach(link => {
                    const linkPath = link.getAttribute('href');
                    if ((currentPage === 'index.html' && (linkPath === 'index.html' || linkPath === '#home')) || 
                        (currentPage !== 'index.html' && linkPath === currentPage)) {
                        link.classList.add('text-button');
                    }
                });
            })
            .catch(error => {
                console.error('Error loading header component:', error);
                headerPlaceholder.innerHTML = '<p>Error loading header</p>';
            });
    }
});
