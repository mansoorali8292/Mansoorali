const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Small motion detail; the figure is explicitly illustrative, not a real result.
const growthNumber = document.getElementById("growthNumber");
let tick = 0;
const cycle = () => {
  tick = (tick + 1) % 3;
  growthNumber.textContent = ["38", "42", "35"][tick];
};
setInterval(cycle, 3200);
