const red = document.getElementById('light-red');
const yellow = document.getElementById('light-yellow');
const green = document.getElementById('light-green');
const display = document.getElementById('timer-display');
let interval = null;

document.getElementById('btn-start').addEventListener('click', () => {
    if (interval) return;

    let t = 10;
    let isRed = false;

    const loop = () => {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.remove('active', 'blink');
        display.textContent = t;

        if (isRed) {
            red.classList.add('active');
            display.style.color = '#ef4444';
            if (t === 0) { isRed = false; t = 10; return loop(); }
        } else {
            if (t > 5) {
                green.classList.add('active');
                display.style.color = '#22c55e';
            } else if (t > 2) {
                green.classList.add('blink');
                display.style.color = '#22c55e';
            } else if (t > 0) {
                yellow.classList.add('active');
                display.style.color = '#eab308';
            } else {
                isRed = true; t = 10; return loop();
            }
        }
        t--;
    };

    loop();
    interval = setInterval(loop, 1000);
});

document.getElementById('btn-stop').addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    [red, yellow, green].forEach(l => l.classList.remove('active', 'blink'));
    display.textContent = '--';
    display.style.color = '#ef4444';
});
