// script.js global utility (opsional, beberapa fungsi sudah inline)
console.log("Yoyo aplikasi siap! 🧸✨");

// Fungsi global untuk format rupiah (jika diperlukan)
function formatRupiahGlobal(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
}

// Efek kilauan reusable (tapi sudah ada di calculator1)
// Untuk menjaga agar localstorage tetap sinkron
if(typeof localStorage !== 'undefined') {
    // inisialisasi data keuangan jika belum ada
    if(!localStorage.getItem('yoyo_keuangan')) {
        localStorage.setItem('yoyo_keuangan', JSON.stringify([]));
    }
}
