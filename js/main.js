
document.addEventListener("DOMContentLoaded", () => {
    const kmomLinks = document.querySelectorAll(".kmom-li");
    const kmomContainers = document.querySelectorAll(".kmom-text-container");

    kmomContainers.forEach(div => {
        div.classList.add("hide-kmom");
    });

    kmomLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetId = link.dataset.target;
            const targetDiv = document.getElementById(targetId);
            const arrowSpan = link.querySelector(".arrow");

            if (targetDiv.classList.contains("show-kmom")) {
                targetDiv.classList.remove("show-kmom");
                targetDiv.classList.add("hide-kmom");
                arrowSpan.textContent = "▲";
            } else {
                targetDiv.classList.remove("hide-kmom");
                targetDiv.classList.add("show-kmom");
                arrowSpan.textContent = "▼";
                targetDiv.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

