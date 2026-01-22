document.addEventListener("DOMContentLoaded", () => {
    const enterBtn = document.getElementById("enterBtn");
    const splash = document.getElementById("splash");
    const main = document.getElementById("mainContent");
    const searchInput = document.getElementById("searchInput");

    // دخول المنصة
    enterBtn.onclick = () => {
        splash.style.transition = "0.5s";
        splash.style.opacity = "0";
        setTimeout(() => {
            splash.style.display = "none";
            main.style.display = "block";
        }, 500);
    };

    // نظام البحث
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card-link");
        
        cards.forEach(link => {
            const text = link.textContent.toLowerCase();
            link.style.display = text.includes(filter) ? "" : "none";
        });
    });
});

function openForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeSw9YfPx2v7AsvP80IPg5wWf_O3wJCcSo9BJChNzrntnXwSA/viewform", "_blank");
}
