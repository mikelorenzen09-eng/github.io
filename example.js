const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 12px 35px rgba(0,0,0,0.24)';
  } else {
    header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
  }
});

// Mobile burger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
