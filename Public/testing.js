let currentWordNumber = 1;
selectThisWord(currentWordNumber);

let isFocus = false;

let testerText = document.getElementById("tester-text");
let minusMarginTop = 0;
let userScore = 0;

let inputText = document.getElementById("write");
window.addEventListener("keyup", event => {
    if(event.code === "Space" && isFocus) {
        let wordStore = inputText.value.trim();
        inputText.value = '';
        currentWordNumber++;
        selectThisWord(currentWordNumber, wordStore);
    }
})  

function selectThisWord(currentWordNumber, wordStore) {
    let prevWord;
    if(currentWordNumber > 1) {
        prevWord = document.querySelector(`#tester-text span:nth-child(${currentWordNumber - 1})`);
        prevWord.setAttribute("class", "");
        shouldUserScore(wordStore, prevWord);
    }
    let currentWord = document.querySelector(`#tester-text span:nth-child(${currentWordNumber})`);
    currentWord.setAttribute("class", "current-word");
    if (prevWord) isNewLine(prevWord, currentWord);
 }

 function shouldUserScore(userInput, prevWord) {
    let textValue = prevWord.textContent;
    console.log(userInput);
    console.log(textValue);
    textValue = textValue.slice(1);
    if(userInput == textValue) {
        prevWord.style.color = "green";
        userScore++;
    }else{
        prevWord.style.color = "red";
    }
 }

 function isNewLine(prevWord, currentWord) {
    let prevWordRect = prevWord.getBoundingClientRect();
    let currentWordRect = currentWord.getBoundingClientRect();
    if(prevWordRect.top !== currentWordRect.top) {
        minusMarginTop -= 65;
        testerText.style.marginTop = minusMarginTop + "px";
    }
 }