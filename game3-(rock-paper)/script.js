
const choices = document.querySelectorAll('#choices img')
const playerBox = document.querySelector('#player-box img')
const botBox = document.querySelector('#bot-box img')
const addText = document.querySelector('#choices')
const playerScoreText = document.querySelector('#score h1:nth-child(1)')
const botScoreText = document.querySelector('#score h1:nth-last-child(1)')
let playerScore = 0;
let botScore = 0;
let cases,output,playerchoice,botchoice;

let array = ["img/rock.png", "img/paper.png", "img/scissors.png"]



choices.forEach( function (choice, i) {


    choice.addEventListener("click", async (dets) => {


        playerBox.setAttribute("src", `${dets.target.src}`)

        let botIndex = Math.floor(Math.random() * 3)

        gsap.to(botBox, {
            opacity: 0
        })

        playerchoice = ['r', 'p', 's'][i]
        botchoice = ['r', 'p', 's'][botIndex]
        cases = { rp: "bot", rs: "you", pr: "you", ps: "bot", sr: "bot", sp: "you", ss: "draw", pp: "draw", rr: "draw" }
        output = playerchoice + botchoice



        setTimeout(() => {
            gsap.to(botBox, {
                opacity: 1
            })
            botBox.setAttribute("src", `http://127.0.0.1:5500/${array[botIndex]}`)
            decision()
        }, 900);

    })
})

document.querySelector("#reset").addEventListener("click",()=>{
    location.reload()
})

function decision(){

    if (cases[output] === "bot") {
        botScore++;
        botScoreText.textContent = botScore
    }
    else if (cases[output] === "you") {
        playerScore++;
        playerScoreText.textContent = playerScore
    }   

    if (playerScore === 2 || botScore === 2) {
        addText.innerHTML = `${cases[playerchoice + botchoice] == "draw" ? cases[playerchoice + botchoice] : cases[playerchoice + botchoice] + " win"}`;
    }
}