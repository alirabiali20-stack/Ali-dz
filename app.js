document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");

  enterBtn.addEventListener("click", () => {
    splash.style.display = "none";
    main.style.display = "block";
  });
});

function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform",
    "_blank"
  );
}
