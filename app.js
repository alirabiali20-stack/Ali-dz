document.addEventListener("DOMContentLoaded", () => {

  // --- العناصر الأساسية ---
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");
  const searchInput = document.querySelector(".search");

  // --- 1. شاشة الترحيب ---
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

  // --- 2. البحث داخل الأقسام فقط ---
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();

      document.querySelectorAll(".section-title").forEach(title => {
        const section = title.nextElementSibling;
        let foundInSection = false;

        if (section && section.classList.contains("categories")) {
          section.querySelectorAll(".card-link").forEach(link => {
            const text = link.textContent.toLowerCase();
            const match = text.includes(term);

            link.style.display = match || term === "" ? "block" : "none";
            if (match) foundInSection = true;
          });

          // إظهار أو إخفاء القسم كامل
          title.style.display =
            foundInSection || term === "" ? "block" : "none";
          section.style.display =
            foundInSection || term === "" ? "grid" : "none";
        }
      });
    });
  }

});

// --- 3. فتح نموذج Google Form ---
function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform",
    "_blank"
  );
}

// --- 4. قائمة ANEM ---
function toggleAnem() {
  const sub = document.getElementById("anemSub");
  if (!sub) return;
  sub.style.display = sub.style.display === "grid" ? "none" : "grid";
}
