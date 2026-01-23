document.addEventListener("DOMContentLoaded", () => {

  const text = "مرحبا بك في منصة Ali.dz";
  const typingElement = document.getElementById("typingText");
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // سرعة الكتابة
    }
  }

  typeWriter();

  enterBtn.addEventListener("click", () => {
    splash.style.display = "none";
    main.style.display = "block";
  });

});
