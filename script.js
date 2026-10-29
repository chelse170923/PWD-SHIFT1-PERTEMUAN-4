const tombol = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        tombol.classList.add("show");
    } else {
        tombol.classList.remove("show");
    }
});

tombol.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});