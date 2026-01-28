/***********************
 * 🛡️ حماية أساسية
 ***********************/
document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});

// كشف DevTools بدون تخريب الموقع
setInterval(() => {
  const t1 = performance.now();
  debugger;
  const t2 = performance.now();
  if (t2 - t1 > 120) {
    console.warn("DevTools detected");
  }
}, 2000);


/***********************
 * ✅ كودك الأصلي
 ***********************/
document.addEventListener("DOMContentLoaded", () => {

  // --- العناصر الأساسية ---
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");
  const searchInput = document.querySelector(".search");

  // --- 1. شاشة الترحيب ---
  if (enterBtn && splash && main) {
    enterBtn.addEventListener("click", () => {
      splash.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      splash.style.opacity = "0";
      splash.style.transform = "scale(1.1)";
      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
        window.scrollTo(0, 0);
      }, 500);
    });
  }

  // --- 2. البحث الذكي ---
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();

      document.querySelectorAll(".section-title").forEach(title => {
        let section = title.nextElementSibling;
        let found = false;

        while (section && !section.classList.contains("section-title")) {
          if (section.classList.contains("categories") || section.classList.contains("sub-categories")) {
            section.querySelectorAll(".card-link").forEach(link => {
              const match = link.textContent.toLowerCase().includes(term);
              link.style.display = (match || term === "") ? "flex" : "none";
              if (match) found = true;
            });
            section.style.display = (found || term === "") ? "grid" : "none";
          }
          section = section.nextElementSibling;
        }

        title.style.display = (found || term === "") ? "block" : "none";
      });

      document.querySelectorAll(".anem-card").forEach(anem => {
        const match = anem.textContent.toLowerCase().includes(term);
        anem.parentElement.style.display = (match || term === "") ? "grid" : "none";
      });
    });
  }
});

// --- 3. Google Form ---
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
  sub.style.display =
    (sub.style.display === "none" || sub.style.display === "") ? "block" : "none";
}

// --- 5. CamScanner ---
function toggleCamScanner() {
  const camSub = document.getElementById("camSub");
  if (!camSub) return;
  camSub.style.display =
    (camSub.style.display === "none" || camSub.style.display === "") ? "grid" : "none";
}
