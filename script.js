// ALI SYED website interactions
// Update the contact email below before publishing.
const CONTACT_EMAIL = "alisyedgardezi52@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Product enquiry links pre-select the product in the order form.
document.querySelectorAll("[data-product]").forEach(link => {
  link.addEventListener("click", () => {
    const details = document.querySelector('textarea[name="details"]');
    const service = document.querySelector('select[name="service"]');
    if (service) service.value = "Ready-made Product";
    if (details) details.value = `I'm interested in: ${link.dataset.product}. Please share more details.`;
  });
});

document.getElementById("contactEmailLink").href = `mailto:${CONTACT_EMAIL}`;

