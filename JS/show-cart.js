window.addEventListener("DOMContentLoaded", function () {
    tampilkanKeranjang();
  });
  
  function tampilkanKeranjang() {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    const container = document.getElementById("keranjang-container");
    const totalHargaEl = document.getElementById("total-harga");
  
    container.innerHTML = ""; // Kosongkan kontainer dulu
  
    if (keranjang.length === 0) {
      container.innerHTML = "<p>Keranjang Anda kosong.</p>";
      totalHargaEl.textContent = "Total: Rp0";
      return;
    }
  
    let total = 0;
    keranjang.forEach((item, index) => {
      total += item.harga * item.jumlah;
  
      const div = document.createElement("div");
      div.classList.add("keranjang-item");
      div.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}" width="100" />
        <div>
          <h3>${item.nama}</h3>
          <p>Harga: Rp${item.harga.toLocaleString("id-ID")}</p>
          <p>Jumlah: ${item.jumlah}</p>
          <button onclick="hapusItem('${item.id}')">Hapus</button>
        </div>
      `;
      container.appendChild(div);
    });
  
    totalHargaEl.textContent = "Total: Rp" + total.toLocaleString("id-ID");
  }
  
  function hapusItem(id) {
    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    keranjang = keranjang.filter(item => item.id !== id); // Hapus berdasarkan ID
    localStorage.setItem("keranjang", JSON.stringify(keranjang));
    tampilkanKeranjang(); // Refresh tampilan
    updateCartCount(); // Update icon keranjang
  }
  