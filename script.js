// 🔄 Toon/verberg secties
function toggleSection(id) {
  const allSections = document.querySelectorAll("main section");
  const placeholder = document.getElementById("placeholder");

  allSections.forEach(section => {
    section.classList.add("hidden");
  });

  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.classList.remove("hidden");
  }

  if (placeholder && id !== "placeholder") {
    placeholder.classList.add("hidden");
  }
}

// 🎉 Confetti-functie
function vierFeest() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// E-mailactie
function openMailto() {
  vierFeest();
  window.location.href = "mailto:dj-tenj@outlook.com?subject=Boeking%20DJ%20T%26J";
}

// 🔁 Klikbaar logo met confetti en herladen
function triggerConfettiAndReload(event) {
  event.preventDefault();
  vierFeest();

  setTimeout(() => {
    location.reload();
  }, 1000);
}
