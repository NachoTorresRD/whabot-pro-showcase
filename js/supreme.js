/* ==========================================================================
   NT-SKILL SUPREME ENGINE - INTERACTION CONTROLLER
   Project: Whabot Pro Public Showcase
   Features: Cursor Spotlight | 3D Perspective Card Tilt | Interactive Tabs
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Cursor Spotlight Follower Effect
  const spotlight = document.createElement('div');
  spotlight.className = 'spotlight-follower';
  document.body.appendChild(spotlight);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateSpotlight() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    spotlight.style.left = `${followerX}px`;
    spotlight.style.top = `${followerY}px`;
    requestAnimationFrame(animateSpotlight);
  }
  animateSpotlight();

  // 2. 3D Perspective Card Tilt (Fine Pointer Guarded)
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isTouchDevice && !isReducedMotion) {
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cardWidth = rect.width;
        const cardHeight = rect.height;
        const centerX = rect.left + cardWidth / 2;
        const centerY = rect.top + cardHeight / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = (mouseY / (cardHeight / 2)) * -8;
        const rotateY = (mouseX / (cardWidth / 2)) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // 3. Interactive Showcase Tabs Switcher
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(`tab-${targetTab}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });
});
