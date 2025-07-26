const btn = document.getElementById("btn");
const parentOrigin = new URL(document.referrer).origin;

localStorage.setItem("sumOfReactionSpeeds", "0");

btn.addEventListener("click", () => {
    window.parent.postMessage("fromStart", parentOrigin);
});