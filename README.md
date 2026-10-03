# ⚡ Shrinking Navbar on Scroll

Proyek komponen antarmuka web berupa navigasi atas (*Header/Navbar*) yang secara otomatis mengecil dan berganti warna latar saat halaman di-scroll ke bawah.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Window Scroll Event Handling:**
   Mendeteksi pergerakan *viewport* menggunakan event listener `window.addEventListener('scroll', ...)`.
2. **DOM Class Manipulation:**
   Menggunakan `classList.add()` dan `classList.remove()` berdasarkan pengondisian jarak scroll (`window.scrollY`).
3. **CSS Smooth Transition:**
   Memanfaatkan properti `transition: all 0.35s ease` pada elemen fixed header agar perubahan padding, warna, dan ukuran ikon berlangsung halus tanpa patah.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur halaman web dan elemen navbar
├── style.css        # Desain gaya Neobrutalism, posisi fixed, dan class .shrunk
└── script.js        # Logika pendeteksi scroll dan toggle class navbar
