document.addEventListener("DOMContentLoaded", () => {

  // --- العناصر الأساسية ---
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");
  const searchInput = document.querySelector(".search");
  const cards = document.querySelectorAll(".categories .card");

  // --- 1. التحكم في شاشة الترحيب ---
  if (enterBtn && splash && main) {
    enterBtn.addEventListener("click", () => {
      splash.style.transition = "opacity 0.5s ease";
      splash.style.opacity = "0";

      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
        window.scrollTo(0, 0);
      }, 500);
    });
  }

  // --- 2. نظام البحث ---
  if (searchInput && cards.length > 0) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? "block" : "none";
      });

      // إخفاء العناوين إذا لم توجد نتائج
      document.querySelectorAll(".section-title").forEach(title => {
        const nextGrid = title.nextElementSibling;
        if (nextGrid && nextGrid.classList.contains("categories")) {
          const hasVisible = [...nextGrid.children].some(
            el => el.style.display !== "none"
          );
          title.style.display = hasVisible ? "block" : "none";
        }
      });
    });
  }

});

// --- 3. فتح نموذج Google Form ---
function openForm() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform";
  window.open(formUrl, "_blank");
}document.addEventListener("DOMContentLoaded", () => {
  
  // --- العناصر الأساسية ---
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");
  const searchInput = document.querySelector(".search");
  const cards = document.querySelectorAll(".categories .card");
  
  // --- 1. التحكم في شاشة الترحيب ---
  if (enterBtn && splash && main) {
    enterBtn.addEventListener("click", () => {
      splash.style.transition = "opacity 0.5s ease";
      splash.style.opacity = "0";
      
      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
        window.scrollTo(0, 0);
      }, 500);
    });
  }
  
  // --- 2. نظام البحث ---
  if (searchInput && cards.length > 0) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? "block" : "none";
      });
      
      // إخفاء العناوين إذا لم توجد نتائج
      document.querySelectorAll(".section-title").forEach(title => {
        const nextGrid = title.nextElementSibling;
        if (nextGrid && nextGrid.classList.contains("categories")) {
          const hasVisible = [...nextGrid.children].some(
            el => el.style.display !== "none"
          );
          title.style.display = hasVisible ? "block" : "none";
        }
      });
    });
  }
  
});

// --- 3. فتح نموذج Google Form ---
function openForm() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform";
  window.open(formUrl, "_blank");
}
