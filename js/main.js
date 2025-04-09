document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.querySelector('#themeToggle i');
  
  // Check for saved theme preference or use user's system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark-mode');
    if (themeIcon) {
      themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }
  }
  
  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Toggle both the Tailwind dark class and the custom dark-mode class
      document.documentElement.classList.toggle('dark');
      document.body.classList.toggle('dark-mode');
      
      // Update the icon based on current theme
      if (document.body.classList.contains('dark-mode')) {
        if (themeIcon) {
          themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        }
        localStorage.setItem('theme', 'dark');
      } else {
        if (themeIcon) {
          themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        }
        localStorage.setItem('theme', 'light');
      }
    });
  }
  
  // Initialize Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  if (typeof bootstrap !== 'undefined') {
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  
  // Newsletter form submission
  const newsletterForms = document.querySelectorAll('form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        // In real implementation, send to a backend service
        alert('Obrigado por se inscrever! Em breve você receberá nossas atualizações.');
        emailInput.value = '';
      }
    });
  });
  
  // Add animation classes when elements come into view
  const animateElements = document.querySelectorAll('.card, .section-title, .feature-box');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // Mobile search box toggle
  const searchButton = document.querySelector('[data-bs-target="#searchModal"]');
  if (searchButton) {
    searchButton.addEventListener('click', function() {
      setTimeout(() => {
        const searchInput = document.querySelector('#searchModal input');
        if (searchInput) {
          searchInput.focus();
        }
      }, 400);
    });
  }
});
