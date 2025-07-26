const waitingTime = (Math.random() * 3 + 4) * 1000;
const testScreen = document.getElementById("test-screen");
const parentOrigin = new URL(document.referrer).origin;
let timerFinished = false;
let timerId = null;
let startTime = null;
let reactionSpeed = null;
let sumOfReactionSpeeds = parseFloat(localStorage.getItem("sumOfReactionSpeeds"));

function startTimer() {
    timerId = setTimeout(() => {
        timerFinished = false;
        timerFinished = true;
        testScreen.style.backgroundColor = "green";
        testScreen.textContent = "지금!";
        startTime = performance.now();
    }, waitingTime);
}

startTimer();

testScreen.addEventListener("click", () => {
    if(!timerFinished) {
        clearTimeout(timerId);
        testScreen.textContent = "너무 빨라요";
        setTimeout(() => {
            testScreen.textContent = "기다려주세요...";
            startTimer();
        }, 300);
    }
    else {
        const endTime = performance.now();
        stringReactSpeed = (endTime - startTime).toFixed(2)
        sumOfReactionSpeeds += parseFloat(stringReactSpeed);
        reactionSpeed = stringReactSpeed + "ms";
        window.parent.postMessage("fromTest", parentOrigin);
        localStorage.setItem("reactionSpeed", reactionSpeed);
        console.log(sumOfReactionSpeeds);
        localStorage.setItem("sumOfReactionSpeeds", sumOfReactionSpeeds);
    }
});