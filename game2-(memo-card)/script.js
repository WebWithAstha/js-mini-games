const cardBox = document.querySelector("#main #game-board #card-wrapper")

let cardArray = [
    { src: "https://i.pinimg.com/564x/ad/f7/4c/adf74c1a831cd5121b55f25b3d715f48.jpg" },
    { src: "https://i.pinimg.com/564x/a2/87/2b/a2872bcda86121f3ffc0c87c23a491f6.jpg" },
    { src: "https://i.pinimg.com/564x/1b/fc/1a/1bfc1ab3c20ea5a8382847097eed74a3.jpg" },
    { src: "https://i.pinimg.com/564x/59/6d/d8/596dd89bd98b46ed3d886c54dffe3ecf.jpg" },
    { src: "https://i.pinimg.com/564x/b8/5b/86/b85b865aecb457388eea9e3b7d7769b0.jpg" },
    { src: "https://i.pinimg.com/564x/b1/4d/77/b14d775bf53d79260f1d87e6e5915cdc.jpg" },
]

cardArray = cardArray.concat(cardArray)

function createCard() {
    let clutter = ``
    cardArray.forEach(function (e, i) {
        clutter += `<div class="card">
        <div id="o${i}" class="overlay"></div>
        <img data-overlayid="o${i}"  id="c${i}" src="${e.src}" alt="" draggable="false">
    </div>`
    })
    cardBox.innerHTML = clutter
    rotateRandom();

}

function rotateRandom(){
    document.querySelectorAll(".card").forEach(function(e){
        let randomRotate = Math.floor(Math.random()*(15)-5)
        gsap.set(e,{
            rotate:randomRotate,
        })
        gsap.from(e,{
            scale:0,
            rotate:randomRotate*15,
        })
    })
}

function shuffleCard(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let ranIndex = Math.floor(Math.random() * i + 1)
        let temp = array[i];
        array[i] = array[ranIndex];
        array[ranIndex] = temp;
    }
    return createCard(array);
}

shuffleCard(cardArray)

document.querySelector("#game-board button").addEventListener("click", function () {
    shuffleCard(cardArray)
    score = 0
    document.querySelector("#game-board h4").innerHTML = score
})


let count = 0;
let pre = ``;
let score = 0;

document.querySelector("#card-wrapper").addEventListener("click", function (dets) {
    console.log(dets.target)
    if (dets.target.id !== "card-wrapper") {
        document.querySelector(`#${dets.target.dataset.overlayid}`).style.display = "none"
        dets.target.style.filter = `contrast(1)`
        if (count === 0) {
            pre = dets.target;
        }
        count++;
        if (count === 2) {
            if (pre.src === dets.target.src && pre.id !== dets.target.id) {
                setTimeout(() => {
                    pre.style.display = "none"
                    dets.target.style.display = "none"
                }, 400);
                score += 10;
            } else {
                setTimeout(() => {
                    document.querySelector(`#${dets.target.dataset.overlayid}`).style.display = "block"
                    document.querySelector(`#${pre.dataset.overlayid}`).style.display = "block"
                }, 400);
                if (score >= 10) {
                    score -= 1
                }
            }
            document.querySelector("#game-board h4").innerHTML = score
            count = 0
        }

    }


})

if(score === 60){
    alert("Dattebayo🎉🫡")
}