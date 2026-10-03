// --- 1. AMBIL ELEMEN NAVBAR ---
const navbar = document.getElementById("main-navbar");

// Batas jarak scroll (dalam piksel) untuk memicu efek
const scrollThreshold = 50;

// --- 2. FUNGSI CEK POSISI SCROLL ---
function handleNavbarScroll() {
    // Ambil posisi vertical scroll saat ini
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Jika jarak scroll melebihi batas, tambahkan class 'shrunk'
    if (currentScroll > scrollThreshold) {
        navbar.classList.add("shrunk");
    } else {
        navbar.classList.remove("shrunk");
    }
}

// --- 3. EVENT LISTENER ---
// Jalankan fungsi setiap kali layar di-scroll
window.addEventListener("scroll", handleNavbarScroll);

// Inisialisasi awal saat halaman dimuat
handleNavbarScroll();
