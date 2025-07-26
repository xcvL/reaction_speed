const ms = document.getElementById("ms");

ms.innerText = (parseFloat(localStorage.getItem("sumOfReactionSpeeds")) / 5).toFixed(2) + "ms";