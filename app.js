// app.js - Crystal Royal School Interactive Features

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll navigation
  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(255,255,255,1)';
      nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    } else {
      nav.style.background = 'rgba(255,255,255,0.98)';
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Form handling for admissions
  const form = document.getElementById('admissionForm');
  const successDiv = document.getElementById('formSuccess');

  if (form && successDiv) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (form.checkValidity()) {
        // Hide form, show success message
        form.style.display = 'none';
        successDiv.style.display = 'block';
        
        // Prepare email data
        const formData = new FormData(form);
        let body = 'New Admission Application:\\n\\n';
        for (let [key, value] of formData.entries()) {
          const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^\\w/, c => c.toUpperCase());
          body += `${formattedKey}: ${value}\\n`;
        }
        
        // Open default email client
        const subject = encodeURIComponent('Crystal Royal School - New Admission Application');
        const mailto = `mailto:admissions@crystalroyalschool.com?subject=${subject}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        
        // Scroll to success message
        successDiv.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      } else {
        // Show validation errors
        form.reportValidity();
      }
    });
  }

  // Hero badge floating animation
  const badge = document.querySelector('.hero-badge');
  if (badge) {
    let isUp = false;
    setInterval(() => {
      if (isUp) {
        badge.style.transform = 'translateY(0)';
      } else {
        badge.style.transform = 'translateY(-5px)';
      }
      isUp = !isUp;
    }, 3000);
  }

  // Gallery image hover effects (additional enhancement)
  document.querySelectorAll('.gallery-card img').forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    this.style.opacity = '0.95';
  });

  // Preload critical images for better performance
  const images = [
    'Pic 1.jpeg',
    'Pic 2.jpeg', 
    'Pic 3.jpeg',
    'Pic 4.jpeg',
    'Pic 5.jpeg'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Mobile menu toggle (future enhancement - placeholder)
  // Can be extended for responsive hamburger menu if needed
});

