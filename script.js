
const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        // Stop previous audio
        if (currentAudio !== null) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Get sound name
        let soundName = button.dataset.sound;

        // Create new audio
        currentAudio = new Audio(`sounds/${soundName}.mp3`);

        // Play audio
        currentAudio.play();

    });

});

// Stop button
stopButton.addEventListener("click", () => {

    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});
