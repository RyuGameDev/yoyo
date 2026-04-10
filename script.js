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
// Inisialisasi data default contoh (sesuai permintaan client)
if(!localStorage.getItem('yoyo_pemasukan')) {
    const contohPemasukan = [
        { tanggal: "2026-04-10", sumber: "Uang Saku", jumlah: 20000 },
        { tanggal: "2026-04-11", sumber: "Jualan", jumlah: 50000 }
    ];
    localStorage.setItem('yoyo_pemasukan', JSON.stringify(contohPemasukan));
}
if(!localStorage.getItem('yoyo_pengeluaran')) {
    const contohPengeluaran = [
        { tanggal: "2026-04-10", keperluan: "Jajan", jumlah: 10000 },
        { tanggal: "2026-04-11", keperluan: "Pulsa", jumlah: 15000 }
    ];
    localStorage.setItem('yoyo_pengeluaran', JSON.stringify(contohPengeluaran));
}
