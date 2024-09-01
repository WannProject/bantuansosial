// Fungsi untuk toggle menu
function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");

  // Menambahkan event listener untuk klik di luar menu ketika menu dibuka
  if (navLinks.classList.contains("show")) {
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Fungsi untuk menutup menu ketika diklik di luar
function closeMenuOnClickOutside(event) {
  var navLinks = document.querySelector(".nav-links");
  var menuButton = document.querySelector(".menu-button");

  // Mengecek jika klik terjadi di luar menu dan bukan di tombol menu
  if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
    navLinks.classList.remove("show");
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}
