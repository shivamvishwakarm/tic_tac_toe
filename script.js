// declaration of varables

console.log("Welcome to Tic Tac Toe")
let bg_music = new Audio("music.mp3")
let winsound = new Audio("Tada.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;



// mute unmute function 

function unmute() {
    bg_music.play();
    alert('Background Music is playing now')
}

function mute() {
    bg_music.pause();
    alert('Background Music is Muted ')
}


// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        // for vertical win and lines
        [0, 1, 2, -15, 5, 0],
        [3, 4, 5, -16, 15, 0],
        [6, 7, 8, -15, 25.2, 0],
        // for horizontal win and lines
        [0, 3, 6, -25.6, 15, 90],
        [1, 4, 7, -15.6, 16, 90],
        [2, 5, 8, -5.5, 15, 90],
        // for cross win and lines
        [0, 4, 8, -15.6, 15, 45],
        [2, 4, 6, -15, 14.6, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
                // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

            winsound.play();

            document.querySelector('.winImg').getElementsByTagName('img')[0].style.width = "400px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "36vw";

        }
    })
}




// Game Logic


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.winImg').getElementsByTagName('img')[0].style.width = "0px";

})



//Adding active class in currrent buttton
var header = document.getElementById("action");
var btns = header.getElementsByClassName("sound_button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });

}