const items = document.querySelectorAll(".item")

items.forEach(item => {
    
    item.addEventListener("click", (e) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i] != item) {
                items[i].classList.remove("active")
            }
        }
        item.classList.toggle("active");
    })

});
