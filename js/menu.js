// Improved menu script for better mobile device support
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu elements
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  // Ensure menu is hidden on page load
  mobileMenu.classList.remove('menu-show');
  hamburgerIcon.classList.remove('icon-hide');
  hamburgerIcon.classList.add('icon-show');
  closeIcon.classList.remove('icon-show');
  closeIcon.classList.add('icon-hide');
  
  console.log("Mobile menu initialized");
  
  // Toggle menu function with improved touch support
  function toggleMenu(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (mobileMenu.classList.contains('menu-show')) {
      // Hide menu
      mobileMenu.classList.remove('menu-show');
      hamburgerIcon.classList.remove('icon-hide');
      hamburgerIcon.classList.add('icon-show');
      closeIcon.classList.remove('icon-show');
      closeIcon.classList.add('icon-hide');
      document.body.classList.remove('menu-open');
      console.log("Menu hidden");
    } else {
      // Show menu
      mobileMenu.classList.add('menu-show');
      hamburgerIcon.classList.remove('icon-show');
      hamburgerIcon.classList.add('icon-hide');
      closeIcon.classList.remove('icon-hide');
      closeIcon.classList.add('icon-show');
      document.body.classList.add('menu-open');
      console.log("Menu shown");
    }
  }
  
  // Add menu button click/touch event
  mobileMenuButton.addEventListener('click', toggleMenu);
  mobileMenuButton.addEventListener('touchend', function(e) {
    e.preventDefault();
    toggleMenu();
  }, { passive: false });
  
  // Handle link clicks with touch support
  mobileLinks.forEach(link => {
    // Close menu when link is clicked/tapped
    function handleLinkActivation(e) {
      if (mobileMenu.classList.contains('menu-show')) {
        // Don't prevent default here to allow navigation
        toggleMenu();
      }
    }
    
    link.addEventListener('click', handleLinkActivation);
    link.addEventListener('touchend', handleLinkActivation, { passive: true });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu.classList.contains('menu-show')) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnButton = mobileMenuButton.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnButton) {
        toggleMenu();
      }
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 70; // Header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Improved scroll animation with better performance
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  // Check if element is in viewport with buffer
  const elementInView = (el, scrollOffset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    
    return (
      (elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset) &&
      (elementBottom >= 0)
    );
  };
  
  // Show element with animation
  const displayScrollElement = (element) => {
    element.classList.add('visible');
  };
  
  // Use a throttled scroll handler for better performance
  let scrollThrottleTimer;
  const throttleDelay = 100; // ms
  
  const handleScrollAnimation = () => {
    if (scrollThrottleTimer) return;
    
    scrollThrottleTimer = setTimeout(() => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        }
      });
      scrollThrottleTimer = null;
    }, throttleDelay);
  };
  
  // Initialize scroll animations
  setTimeout(handleScrollAnimation, 300); // Small delay to ensure DOM is ready
  
  // Add scroll event with passive flag for better performance
  window.addEventListener('scroll', handleScrollAnimation, { passive: true });
  
  // Reinitialize on resize with debounce
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleScrollAnimation, 250);
  }, { passive: true });
});
