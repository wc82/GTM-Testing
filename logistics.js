document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".sc-nav-toggle");
  const nav = document.querySelector(".sc-nav");

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
});
