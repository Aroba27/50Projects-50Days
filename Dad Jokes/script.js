const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const para = document.getElementById("joke");
            para.innerText = data.joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });

})
