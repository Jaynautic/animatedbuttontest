let circles = document.querySelectorAll(".circle");

circles = Array.from(circles);
circles.forEach(circle => {
    circle.addEventListener("click", () => {
        console.log(circle.dataset.circle);
    });
});