/* ========== FORM LOGIN ==========
   Fungsi ini dipanggil saat user masuk lewat form
================================== */
function masukWeb() {
    const nama = document.getElementById("nama").value;
    const gender = document.getElementById("gender").value;

    if (nama.trim() === "") {
        alert("Masukkan nama dulu!");
        return;
    }

    // Simpan data user ke localStorage
    localStorage.setItem("namaUser", nama);
    localStorage.setItem("genderUser", gender);

    // Flag untuk memulai musik
    localStorage.setItem("playMusic", "true");

    // Pindah ke halaman utama
    window.location.href = "halaman.html";
}

/* ========== HALAMAN UTAMA ========== */
// Ambil data user dari localStorage
const nama = localStorage.getItem("namaUser");
const gender = localStorage.getItem("genderUser");
const playMusic = localStorage.getItem("playMusic");

// Tampilkan judul sesuai data user
const judulWelcome = document.getElementById("judul-welcome");
if (nama && gender) {
    judulWelcome.innerText = `Selamat Datang di Web ${gender} ${nama} 😎`;
} else {
    judulWelcome.innerText = "Selamat Datang di Web Byan :)";
}

// Putar musik kalau user masuk lewat form
if (playMusic === "true") {
    const music = document.getElementById("bg-music");
    music.play().catch(err => {
        console.log("Autoplay dicegah browser, user harus klik dulu");
    });

    // Reset flag agar musik tidak main lagi otomatis setelah reload
    localStorage.removeItem("playMusic");
}

/* ========== VINYL ANIMASI SCROLL ==========
   Saat scroll melewati .div-deskripsi,
   vinyl akan berpindah (kasih class .vinyl-move)
============================================ */
window.addEventListener("scroll", () => {
    const vinylWrapper = document.querySelector(".vinyl-wrapper");
    const deskripsi = document.querySelector(".div-deskripsi");

    if (!vinylWrapper || !deskripsi) return; // kalau elemen gak ada, stop

    const triggerPoint = deskripsi.offsetTop - 200;

    if (window.scrollY > triggerPoint) {
        vinylWrapper.classList.add("vinyl-move");
    } else {
        vinylWrapper.classList.remove("vinyl-move");
    }
});
