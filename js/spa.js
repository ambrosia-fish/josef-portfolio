document.addEventListener('DOMContentLoaded', function() {
    // Function to show a section
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
        }

        // Update active navigation link
        document.querySelectorAll('.navigation-list_item').forEach(link => {
            link.classList.remove('navigation-list__item--active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('navigation-list__item--active');
            }
        });
    }

    // Handle navigation clicks
    document.querySelectorAll('a[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            history.pushState(null, '', `#${sectionId}`);
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.slice(1) || 'home';
        showSection(hash);
    });

    // Show initial section based on URL hash
    const initialSection = window.location.hash.slice(1) || 'home';
    showSection(initialSection);
});
