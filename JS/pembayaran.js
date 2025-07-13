// pembayaran.js

document.addEventListener("DOMContentLoaded", () => {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    const detail = document.getElementById("detail-pesanan");
    const form = document.getElementById("checkout-form");
    const konfirmasi = document.getElementById("konfirmasi");
  
    if (!detail || !form) return;
  
    if (keranjang.length === 0) {
      detail.innerHTML = "<p>Tidak ada produk di keranjang.</p>";
      form.style.display = "none";
    } else {
      let html = "<ul>";
      let total = 0;
  
      keranjang.forEach((item) => {
        const subtotal = item.harga * item.jumlah;
        total += subtotal;
        html += `<li>${item.nama} - ${item.jumlah} x Rp${item.harga.toLocaleString()} = Rp${subtotal.toLocaleString()}</li>`;
      });
  
      html += `</ul><p><strong>Total: Rp${total.toLocaleString()}</strong></p>`;
      detail.innerHTML = html;
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nama = form.nama.value.trim();
      const alamat = form.alamat.value.trim();
      const metode = form["metode-pembayaran"].value;
  
      if (!nama || !alamat || !metode) {
        alert("Lengkapi semua data!");
        return;
      }
  
      // Simulasi checkout
      localStorage.removeItem("keranjang");
  
      konfirmasi.innerHTML = `
        Terima kasih, <strong>${nama}</strong>!<br>
        Pesanan Anda sedang diproses ke alamat: <strong>${alamat}</strong>.<br>
        Pembayaran via <strong>${metode.toUpperCase()}</strong>.
      `;
  
      detail.innerHTML = "";
      form.style.display = "none";
    });
  });
  