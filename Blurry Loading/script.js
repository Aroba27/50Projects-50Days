const wrapper = document.querySelector(".wrapper");
const text = document.querySelector(".text");

let load = 0;
const interval = setInterval(() => {
    load++;
    text.innerText = `${load}%`;
    wrapper.style.opacity = Math.min(load / 50, 1);
    wrapper.style.filter = `blur(${(100 - load)}px)`;
        if(load > 100){
        clearInterval(interval);
        text.style.display = "none";
    }
}, 30);
