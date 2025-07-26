const msResult = document.getElementById("ms-result");
const parentOrigin = new URL(document.referrer).origin;

msResult.textContent = localStorage.getItem("reactionSpeed");

setTimeout(() => {
    window.parent.postMessage("fromResult", parentOrigin);
}, 2000);