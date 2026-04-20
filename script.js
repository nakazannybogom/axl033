(function(){
  "use strict";

  // Intersection Observer for fade-in sections
  const sections = document.querySelectorAll('.section-fade');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });
  sections.forEach(s => observer.observe(s));

  // Typewriter effect (AXL033 roles)
  const typeEl = document.getElementById('typewriter');
  if (typeEl) {
    const phrases = [
      'python_engineer',
      'dark_psychology',
      'people_management',
      'fraud_analyst',
      'full_stack_dev'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function type() {
      const fullText = phrases[phraseIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
      }

      typeEl.textContent = currentText;

      if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 300);
      } else {
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
      }
    }
    setTimeout(type, 500);
  }

  // Animate progress bars when skills section becomes visible
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const progressBars = skillsSection.querySelectorAll('.progress div');
    const animateProgress = () => {
      progressBars.forEach(bar => {
        const parent = bar.closest('.skill-item');
        if (parent) {
          const level = parent.dataset.level;
          if (level) bar.style.width = level + '%';
        }
      });
    };
    const skillsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateProgress();
        skillsObserver.unobserve(skillsSection);
      }
    }, { threshold: 0.3 });
    skillsObserver.observe(skillsSection);
  }

  // Glitch effect on hover for title
  const glitchTitle = document.querySelector('.glitch-title');
  if (glitchTitle) {
    glitchTitle.addEventListener('mouseenter', () => {
      glitchTitle.style.animation = 'none';
      glitchTitle.offsetHeight;
      glitchTitle.style.animation = 'glitch-shift 0.8s infinite alternate';
    });
    glitchTitle.addEventListener('mouseleave', () => {
      glitchTitle.style.animation = 'glitch-shift 3s infinite alternate';
    });
  }

  // Social links reminder (dev console)
  console.log('%c AXL033 | edit social links in HTML (section .social-grid) ', 'background: #0B0E14; color: #00E5FF; font-size: 14px; padding: 6px; border-radius: 4px;');
})();
