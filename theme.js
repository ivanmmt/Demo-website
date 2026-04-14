// Theme Toggle Script
(function() {
  const htmlElement = document.documentElement;
  const themeBtns = document.querySelectorAll('.theme-toggle');
  
  // Check for saved theme preference or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', currentTheme);
  
  // Update all theme buttons to show current state
  updateThemeButtons(currentTheme);
  
  // Add click listeners to all theme buttons
  themeBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
  
  function toggleTheme() {
    let theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeButtons(newTheme);
  }
  
  function updateThemeButtons(theme) {
    themeBtns.forEach(btn => {
      btn.textContent = theme === 'light' ? '🌙' : '☀️';
    });
  }
})();

// Hamburger Menu Script
(function() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
})();
