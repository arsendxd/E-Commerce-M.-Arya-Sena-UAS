document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("filterFormBar");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const kategori = document.getElementById("kategoriBar").value;
      if (kategori) {
        window.location.href = kategori;
      }
    });
  });
  