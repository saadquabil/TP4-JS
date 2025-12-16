const input = document.getElementById("timeInput");
const btnStart = document.getElementById("startBtn");
const timerDisplay = document.getElementById("timer");
const message = document.getElementById("message");

let timerId = null;

btnStart.addEventListener("click", () => {
    let time = parseInt(input.value);

    if (isNaN(time) || time < 1) {
        alert("Veillez entrer un nombre valable.");
        return;
    }

    clearInterval(timerId);
    message.classList.add("hidden");
    timerDisplay.textContent = time;

    timerId = setInterval(() => {
        time--;
        timerDisplay.textContent = time;

        if (time <= 0) {
            clearInterval(timerId);
            message.classList.remove("hidden");
        }
    }, 1000);
});