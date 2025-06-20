function toggleSection(id) {
  const allSections = document.querySelectorAll("main section");
  const placeholder = document.getElementById("placeholder");

  allSections.forEach(section => {
    if (section.id === id) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });

  if (placeholder && id !== "placeholder") {
    placeholder.classList.add("hidden");
  }
}

function vierFeest() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function openOutlook() {
  vierFeest();
  window.open(
    "https://outlook.com",
    "_blank"
  );
}

function openGmail() {
  vierFeest();
  window.open(
    "https://mail.google.com/mail/?view=cm&to=dj-tenj@outlook.com&su=Boeking%20DJ%20T%26J",
    "_blank"
  );
}

function openMailto() {
  vierFeest();
  window.location.href = "mailto:dj-tenj@outlook.com?subject=Boeking%20DJ%20T%26J";
}
