// Simpan status play saat klik link navbar
function setPlay() {
  localStorage.setItem("playMusic", "true");
}

// Fungsi login dari form
function masukWeb() {
  const nama = document.getElementById("nama").value.trim();
  // ambil input radio yang terpilih
  const genderInput = document.querySelector('input[name="radio"]:checked');
  const gender = genderInput ? genderInput.value : "";

  if (!nama) {
    alert("Masukkan nama dulu!");
    return;
  }

  if (!gender) {
    alert("Pilih gender dulu!");
    return;
  }

  // Simpan versi huruf besar
  localStorage.setItem("namaUser", nama.toUpperCase());
  localStorage.setItem("genderUser", gender.toUpperCase());
  localStorage.setItem("playMusic", "true");

  // pindah ke halaman utama setelah simpan
  window.location.href = "halaman.html";
}

// Ambil data dari localStorage
const nama = localStorage.getItem("namaUser");
const gender = localStorage.getItem("genderUser");

// Tampilkan tulisan selamat datang
const judulWelcome = document.getElementById("judul-welcome");
if (judulWelcome && nama && gender) {
  judulWelcome.innerText = `HALO ${gender} ${nama} SELAMAT DATANG`;
}

// Jalankan musik otomatis sesuai halaman
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.id = "bg-music";
  audio.loop = true;

  // Tentukan lagu sesuai halaman
  if (window.location.pathname.includes("halaman.html")) {
    audio.src = "assets/mp3/december.mp3";
  } else if (window.location.pathname.includes("index.html")) {
    audio.src = "assets/mp3/8letters.mp3";
  } else if (window.location.pathname.includes("wa.html")) {
    audio.src = "assets/mp3/multo.mp3";
  } else if (window.location.pathname.includes("tele.html")) {
    audio.src = "assets/mp3/consume.mp3";
  } 
    


  document.body.appendChild(audio);

  // tombol play musik
  const playBtn = document.getElementById("play-btn");
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      audio.play();
      localStorage.setItem("playMusic", "true");
      playBtn.style.display = "none"; // sembunyikan tombol setelah diklik
    });
  }

  // kalau user sudah aktifkan musik sebelumnya
  if (localStorage.getItem("playMusic") === "true") {
    audio.play().catch(() => {
      console.warn("Autoplay dicegah. Klik tombol Play Musik dulu.");
    });
  }
});





const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    document.body.classList.add("tutorial-mode"); // 🔥 ganti background
    const masukBtn = document.querySelector('.sign-in button');
    if (masukBtn) masukBtn.style.display = "none";
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    document.body.classList.remove("tutorial-mode"); // 🔥 kembali ke background awal
    const masukBtn = document.querySelector('.sign-in button');
    if (masukBtn) masukBtn.style.display = "block";
});



