function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formResponse").textContent =
    "Thank you for contacting VK Academy! We will reach out to you soon.";
  this.reset();
});
