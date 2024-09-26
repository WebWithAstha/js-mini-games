var timeleft = 60
var HitRandom = 0
var score = 0
var time = ``


function bubbleCreation() {
    var clutter = ``
    for (var i = 0; i < 90; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector("#bottom").innerHTML = clutter
}
bubbleCreation();
function hitVal() {
    HitRandom = Math.floor(Math.random() * 10)
    document.querySelector("#hitbox").textContent = HitRandom
}
hitVal();
function scoreAdd() {
    document.querySelector("#bottom").addEventListener("click", function (dets) {
        var bubVal = Number(dets.target.textContent)
        if (bubVal == HitRandom) {
            score += 10
            document.querySelector("#scorebox").textContent = score
            hitVal();
            bubbleCreation();
        }
        else {

        }
    })
}
scoreAdd();
function gameTimer() {
    time = setInterval(() => {
        if (timeleft > 0) {
            timeleft--
            document.querySelector(".elements #timerbox").textContent = timeleft
        }
        else {
            clearInterval(time)
            document.querySelector("#panel #bottom").innerHTML = `
            <div id="cont">
            <h1>Game Over!!</h1>
            <h2>Final Score <span>${score}</span></h2>
            <button id ="play">Play Again</button>
        </div>
            `
        }
    }, 1000);
}
gameTimer();
function playAgain() {
    document.querySelector("#bottom").addEventListener("click", function (dets) {
        if (dets.target.textContent == "Play Again") {
        //     document.querySelector("#play").style.color = "red"
        //     bubbleCreation();
        //     scoreAdd();
        //     hitVal();
        //     // gameTimer();
        location.reload();
        }
    })
}
playAgain();

