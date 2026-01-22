const text = "مرحبا بكم في منصة Ali.dz";
const speed = 100; // سرعة الكتابة (100ms)
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// تشغيل الأنيميشن عند فتح الصفحة
document.addEventListener("DOMContentLoaded", typeWriter);document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");

  if (enterBtn) {
    enterBtn.onclick = () => {
      splash.style.display = "none";
      main.style.display = "block";
    };
  }
});

function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform",
    "_blank"
  );
}
