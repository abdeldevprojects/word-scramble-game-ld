const misteryWord = document.querySelector(".word"),
hint = document.querySelector(".hint span"),
time = document.querySelector(".time-left b"),

input = document.querySelector("input"),
refreshBtn  = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return time.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    }, 1000)
}


const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    misteryWord.innerText = wordArray.join("");
    hint.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    input.value = "";
    input.setAttribute("maxlength", correctWord.length);

}
initGame();

const checkWord = () => {
    
        let userWord = input.value.toLowerCase();
        if(!userWord) return alert("please enter the word to check");
        if(userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word`);
        alert(`congrats! ${correctWord.toUpperCase()} is the correct word`);
        initGame()
  
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);