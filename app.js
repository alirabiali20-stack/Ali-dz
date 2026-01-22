,const text = "مرحبا بكم في منصة Ali.dz";
const typingElement = document.getElementById("typingText");
let index = 0;
const speed = 4000 / text.length; // 4 ثواني

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

const enterBtn = document.getElementById("enterBtn");
const splash = document.getElementById("splash");
const main = document.getElementById("mainContent");

enterBtn.onclick = () => {
  splash.style.display = "none";
  main.style.display = "block";
};

function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform",
    "_blank"
  );
}
