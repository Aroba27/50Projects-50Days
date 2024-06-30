const left = document.querySelector(".left");
const right = document.querySelector(".right");
const wrapper = document.querySelector(".wrapper");

left.addEventListener("mouseenter", () => {
    wrapper.classList.add("left-hover")
})
left.addEventListener("mouseleave", () => {
    wrapper.classList.remove("left-hover")
})
right.addEventListener("mouseenter", () => {
    wrapper.classList.add("right-hover")
})
right.addEventListener("mouseleave", () => {
    wrapper.classList.remove("right-hover")
})