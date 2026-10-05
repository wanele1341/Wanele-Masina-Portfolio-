const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  menuBtn.textContent = open ? "☰" : "✕";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.style.display = "";
    menuBtn.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => {
        link.style.color = link.getAttribute("href") === `#${entry.target.id}` ? "var(--accent)" : "";
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));
