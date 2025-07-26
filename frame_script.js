const iframe = document.getElementById("frame");
let count = 0

window.addEventListener("message", (event) => {
    if(event.data === "fromStart") {
        iframe.src = "testdir/test.html";
    }
    else if(event.data === "fromTest") {
        iframe.src = "resultdir/result.html";
    }
    else if(event.data === "fromResult" && count != 4) {
        iframe.src = "testdir/test.html";
        count++;
    }
    else if(event.data === "fromResult" && count == 4) {
        iframe.src = "enddir/end.html";
    }
});