
const buttons = document.querySelectorAll("li");
const section = document.querySelectorAll(".thumb");

buttons.forEach(item => {
    item.addEventListener('click', () => {
        buttons.forEach(item => {
            item.className = "";
        });
        item.className = "active";
        // show images
        let values = item.textContent;
        section.forEach(show => {
            show.style.display = "none";
            if (show.getAttribute("data-id") === values || values === "all") {
                show.style.display = "block";
            }
        });
    });
});
