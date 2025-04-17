let blinkInterval;

const leftEye = document.querySelector('.eye-left');
const rightEye = document.querySelector('.eye-right');

// Eye state: Open
function openEyes() {
    leftEye.classList.remove('eye-sleep', 'eye-blink');
    rightEye.classList.remove('eye-sleep', 'eye-blink');
    leftEye.classList.add('eye-open');
    rightEye.classList.add('eye-open');
}

// Eye state: Blink
function blinkEyes() {
    leftEye.classList.remove('eye-blink');
    rightEye.classList.remove('eye-blink');

    // Trigger reflow to restart animation
    void leftEye.offsetWidth;
    void rightEye.offsetWidth;

    leftEye.classList.add('eye-blink');
    rightEye.classList.add('eye-blink');
}

// Eye state: Sleep
function sleep() {
    leftEye.classList.remove('eye-open', 'eye-blink');
    rightEye.classList.remove('eye-open', 'eye-blink');
    leftEye.classList.add('eye-sleep');
    rightEye.classList.add('eye-sleep');
}

// Toggle mic and animation
document.querySelector("#micToggle").addEventListener("change", function () {
    if (this.checked) {
        openEyes();
        blinkInterval = setInterval(blinkEyes, 10000); // Blink every 10 seconds
    } else {
        sleep();
        clearInterval(blinkInterval);
    }
});

// On page load, start in sleep mode
window.addEventListener("DOMContentLoaded", () => {
    sleep();
    document.querySelector("#micToggle").checked = false;
});
