window.addEventListener("DOMContentLoaded", () => {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    const totalJumlah = keranjang.reduce((acc, item) => acc + item.jumlah, 0);
    const cartLink = document.querySelector(".cart-link");
    if (cartLink) {
      cartLink.textContent = `🛒 (${totalJumlah})`;
    }
  });
  -
