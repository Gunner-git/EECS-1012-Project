let timerText = document.getElementById("timer")
let gameStart = false;
inputText.value = '';

function inputType(input) {
    let textInput = input.value;
    if(!gameStart) {
        startTimer(60, timerText);
        gameStart = true;
    }
}

// Start the timer
function startTimer(duration, element) {
    let timer = duration;
    let minutes;
    let seconds;
    let tick = setInterval(() => {
        minutes = parseInt(timer / 60);
        seconds = parseInt(timer % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        element.textContent = minutes + ":" + seconds;

        timer--;
        if(timer < 0) {
            clearInterval(tick);
            element.textContent("Game Over");
        }
    }, 1000)
}

function onFocus() {
    isFocus = true;
}

function onBlur() {
    isFocus = false;
}