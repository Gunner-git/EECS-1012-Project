let timerText = document.getElementById("timer")
let gameStart = false;
inputText.value = '';
let scoreContainer = document.getElementById("score");
let scoreWPM = document.getElementById("score-wpm");

function inputType(input) {
    let textInput = input.value;
    if(!gameStart) {
        startTimer(60, timerText);
        gameStart = true;
    }
}

// Start the timer
function startTimer(duration, ele) {
    let timer = duration;
    let minutes;
    let seconds;
    let tick = setInterval(() => {
        minutes = parseInt(timer / 60);
        seconds = parseInt(timer % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        ele.textContent = minutes + ":" + seconds;

        timer--;
        if(timer < 0) {
            clearInterval(tick);
            ele.textContent="Game Over";
            showGameOver();
        }
    }, 1000)
}

function showGameOver() {
    inputText.disabled = true;
    let currentWord = document.querySelector(`#tester-text span:nth-child(${currentWordNumber})`);
    currentWord.setAttribute("class", "");
    inputText.value = "";
    let wordsPerMinute = Math.round((userScore / 60) * 100);
    scoreWPM.textContent = wordsPerMinute + "WPM";
    scoreContainer.style.display = "block";
}

function onFocus() {
    isFocus = true;
}

function onBlur() {
    isFocus = false;
}