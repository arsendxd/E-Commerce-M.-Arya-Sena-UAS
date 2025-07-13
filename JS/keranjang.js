function tambahKeKeranjang(produk) {
    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    const index = keranjang.findIndex(item => item.id === produk.id);
  
    if (index !== -1) {
      keranjang[index].jumlah += 1;
    } else {
      keranjang.push({ ...produk, jumlah: 1 });
    }
  
    localStorage.setItem("keranjang", JSON.stringify(keranjang));
    alert(`Produk "${produk.nama}" berhasil ditambahkan ke keranjang.`);
    updateCartCount();
  }
  
  function updateCartCount() {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    const totalJumlah = keranjang.reduce((acc, item) => acc + item.jumlah, 0);
    const cartLink = document.querySelector(".cart-link");
    if (cartLink) {
      cartLink.textContent = `🛒 (${totalJumlah})`;
    }
  }
  
  window.addEventListener("DOMContentLoaded", updateCartCount);
  