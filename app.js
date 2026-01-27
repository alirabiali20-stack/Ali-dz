document.addEventListener("DOMContentLoaded", () => {

  // --- العناصر الأساسية ---
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");
  const searchInput = document.querySelector(".search");

  // --- 1. شاشة الترحيب (تحسين الأنيميشن) ---
  if (enterBtn && splash && main) {
    enterBtn.addEventListener("click", () => {
      splash.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      splash.style.opacity = "0";
      splash.style.transform = "scale(1.1)"; // تأثير تكبير بسيط عند الخروج

      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
        window.scrollTo(0, 0);
      }, 500);
    });
  }

  // --- 2. البحث الذكي (تعديل شامل لضمان الفلترة الصحيحة) ---
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();

      document.querySelectorAll(".section-title").forEach(title => {
        // نحدد الحاوية التي تلي العنوان مباشرة (سواء كانت categories أو sub-categories)
        let section = title.nextElementSibling;
        let foundInSection = false;

        // البحث داخل العناصر التي تلي العنوان حتى نصل للعنوان التالي
        while (section && !section.classList.contains("section-title")) {
          if (section.classList.contains("categories") || section.classList.contains("sub-categories")) {
            
            section.querySelectorAll(".card-link").forEach(link => {
              const text = link.textContent.toLowerCase();
              const match = text.includes(term);

              link.style.display = (match || term === "") ? "flex" : "none";
              if (match) foundInSection = true;
            });

            // إظهار أو إخفاء الحاوية (grid) بناءً على النتائج
            section.style.display = (foundInSection || term === "") ? "grid" : "none";
          }
          section = section.nextElementSibling;
        }

        // إخفاء أو إظهار العنوان نفسه
        title.style.display = (foundInSection || term === "") ? "block" : "none";
      });
      
      // ملاحظة: التعامل مع كرت ANEM الخاص (لأنه ليس رابطاً مباشراً)
      document.querySelectorAll(".anem-card").forEach(anem => {
          const isMatch = anem.textContent.toLowerCase().includes(term);
          anem.parentElement.style.display = (isMatch || term === "") ? "grid" : "none";
      });
    });
  }
});

// --- 3. فتح نموذج Google Form (خارج المستند ليعمل الـ onclick) ---
function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform",
    "_blank"
  );
}

// --- 4. قائمة ANEM (تحسين الفتح والإغلاق) ---
function toggleAnem() {
  const sub = document.getElementById("anemSub");
  if (!sub) return;
  // استخدام flex أو block لضمان الظهور الصحيح
  sub.style.display = (sub.style.display === "none" || sub.style.display === "") ? "block" : "none";
}
