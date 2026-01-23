document.addEventListener("DOMContentLoaded", () => {
  // --- العناصر الأساسية ---
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");
  const searchInput = document.querySelector(".search");
  const cards = document.querySelectorAll(".categories .card-link");

  // --- 1. التحكم في شاشة الترحيب ---
  if (enterBtn) {
    enterBtn.onclick = () => {
      // إخفاء شاشة الترحيب وإظهار المحتوى الرئيسي بسلاسة
      splash.style.transition = "opacity 0.5s ease";
      splash.style.opacity = "0";
      
      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
        window.scrollTo(0, 0); // العودة لأعلى الصفحة عند الدخول
      }, 500);
    };
  }

  // --- 2. نظام البحث الذكي ---
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      
      cards.forEach(link => {
        const cardText = link.textContent.toLowerCase();
        // إظهار أو إخفاء الكروت بناءً على كلمة البحث
        if (cardText.includes(term)) {
          link.style.display = "block";
        } else {
          link.style.display = "none";
        }
      });

      // إخفاء العناوين الجانبية إذا لم توجد نتائج تحتها (اختياري)
      document.querySelectorAll(".section-title").forEach(title => {
        const nextGrid = title.nextElementSibling;
        if (nextGrid && nextGrid.classList.contains("categories")) {
          const hasVisibleCards = [...nextGrid.children].some(child => child.style.display !== "none");
          title.style.display = hasVisibleCards ? "block" : "none";
        }
      });
    });
  }

  // --- 3. تشغيل القائمة الجانبية (Sidebar) ---
  // ملاحظة: تحتاج إضافة زر في HTML يحمل id="menuBtn" لتفعيل هذا الجزء
  const menuBtn = document.getElementById("menuBtn") || document.querySelector(".menu-btn");
  const sidebar = document.getElementById("sidebar") || document.querySelector(".side-menu");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      // تغيير موضع القائمة بناءً على اتجاه RTL
      if (sidebar.classList.contains("active")) {
        sidebar.style.right = "0";
      } else {
        sidebar.style.right = "-260px";
      }
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.style.right = "-260px";
        sidebar.classList.remove("active");
      }
    });
  }
});

// --- 4. وظيفة إرسال المشكلة (Global Function) ---
function openForm() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform";
  window.open(formUrl, "_blank");
}
