const wrapper = document.querySelector(".wrapper");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const circle = document.querySelector(".circle");

// open.addEventListener("click", () => {
//     wrapper.classList.add("show-nav")
//     circle.style.transform = "rotate(-90deg)"
//     close.style.left = "20%"
//     close.style.top = "55%"
//     close.style.transform = "rotate(20deg)"
// }) 

// close.addEventListener("click", () => {
//     wrapper.classList.remove("show-nav")
//     circle.style.transform = "rotate(90deg)"
//     open.style.top = "20%"
//     open.style.left = "65%"
//     open.style.transform = "rotate(-90deg)"
// })

open.addEventListener("click", () => {
    wrapper.classList.add("show-nav")
    circle.style.transform = "rotate(-90deg)"
    open.style.transform = "rotate(90deg)"
    close.style.transform = "rotate(90deg)"
    close.style.left = "20%"
     close.style.top = "55%"
})

close.addEventListener("click", () => {
    wrapper.classList.remove("show-nav")
    circle.style.transform = "rotate(0deg)"
    open.style.transform = "rotate(0deg)"
    close.style.transform = "rotate(0deg)"
})