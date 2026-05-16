// Small front-end niceties. No external dependencies.

// Subtle reveal + polish
const cards = document.querySelectorAll(
  '[data-tilt], .feature-card, .project-card, .tool-card, .reveal'
);

// Guard for pages that might not render all animated classes.
if (cards.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add('is-revealed');
      });
    },
    { threshold: 0.12 }
  );


  cards.forEach((c) => observer.observe(c));
}

// Active nav helper
const current = window.location.pathname;

const links = document.querySelectorAll('[data-nav]');
links.forEach((a) => {
  const href = a.getAttribute('href');
  if (href === current) a.classList.add('active');
});


