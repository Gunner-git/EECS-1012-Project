let currentWordNumber = 1;
// selectThisWord(currentWordNumber);

let isFocus = false;

let inputText = document.getElementById("write");
window.addEventListener("keyup", event => {
    if(event.code === "Space" && isFocus) {
        let wordStore = inputText.value.trim();
        inputText.value = '';
        currentWordNumber++;
        // selectThisWord(currentWordNumber, wordStore);
    }
})  

// function selectThisWord(currentWordNumber, wordStore) {
//     let prevWord;
//     if(currentWordNumber > 1) {
//         prevWord = document.querySelector('#tester-text span:nth-child(${currentWordNumber - 1})');
//         prevWord.setAttribute("class", "");
//     }
//     let currentWord = document.querySelector('#tester-text span:nth-child(${currentWordNumber})');
//     currentWord.setAttribute("class", "current-word");
    
// }