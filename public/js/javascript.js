const heroDescription = document.querySelector(".hero-description");

// Fungsi untuk mengecek apakah elemen sudah masuk viewport
function checkVisibility() {
  const rect = heroDescription.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    heroDescription.classList.add("visible");
  }
}

// Tambahkan event listener pada scroll
window.addEventListener("scroll", checkVisibility);

// Panggil fungsi saat halaman pertama kali dimuat untuk memeriksa posisi elemen
checkVisibility();
