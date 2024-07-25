const glasses = document.querySelectorAll(".glass");
const goalCompleted = document.querySelector(".goal-completed")
const goal = document.querySelector(".goal p")
const goalText = document.querySelector(".goal span")

glasses.forEach((glass, index) => {
    glass.addEventListener("click", () => {
        glasses.forEach((g, i) => {
            if (i <= index) {
                g.classList.add("active");
            } else {
                g.classList.remove("active");
            }
        });
        const activeGlasses = index + 1;
        const totalGlasses = glasses.length;
        const heightPercentage = (activeGlasses / totalGlasses) * 100;
        goalCompleted.style.height = `${heightPercentage}%`;
        goalCompleted.innerText = `${heightPercentage}%`;
        goal.style.height = `${100 - heightPercentage}%`;
        const remainingVolume = 2 - (0.25 * activeGlasses);
        goalText.innerHTML = `${remainingVolume}L&nbsp;`;
    });
});
