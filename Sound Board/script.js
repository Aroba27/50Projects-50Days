const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText = sound

    btn.addEventListener("click", () => {

        for (let i = 0; i < sounds.length; i++) {
            if (sound != sounds[i]) {
                const song = document.getElementById(sounds[i]);
                song.pause();
                song.currentTime = 0;
            }
        }
        document.getElementById(sound).play()
    })

    document.getElementById("sound-btns").appendChild(btn)
});