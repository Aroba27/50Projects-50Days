const wrapper = document.querySelector(".wrapper");
window.addEventListener("keydown", () => {
    wrapper.innerHTML = `
        <div class="content">
            ${event.key === " " ? "Space" : event.key}
            <small>event.key</small>    
        </div>
        <div class="content">
            ${event.keyCode}
            <small>event.keyCode</small>    
        </div>
        <div class="content">
            ${event.code}
            <small>event.code</small>    
        </div>
    `
})