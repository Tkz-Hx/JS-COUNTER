let count = 0;

document.getElementById("DecBtn").onclick = function () {
     count -= 5;
     document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function () {
     count = 0;
     document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("inBtn").onclick = function () {
     count += 5;
     document.getElementById("countLabel").innerHTML = count;
} 