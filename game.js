//Jeux de dés Javascript !

const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');
const score0 = document.querySelector('#score0');
const score1 = document.querySelector('#score1');
const current0 = document.querySelector('#current0');
const current1 = document.querySelector('#current1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn_new');
const btnRoll = document.querySelector('.btn_roll');
const btnHold = document.querySelector('.btn_hold');
const scores = [0, 0];

let currentscore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = () => {
    currentscore = 0;
    document.getElementById(`current${activePlayer}`).textContent = currentscore;
    activePlayer = activePlayer == 0 ? 1 : 0;
}; 

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.floor(Math.random() * 6) + 1;
        diceImg.src=`assets/Images/dice-${dice}.png`;
        //console.log(dice);
        if (dice !== 1) {
            currentscore += dice;
            document.getElementById(`current${activePlayer}`).textContent = currentscore;
}   else {
        switchPlayer();
        }
    }
});

let active = 0;

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentscore;
        document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            playing = false;
            document.getElementById(`score${activePlayer}`).textContent = 'Win!';
            setAnimationWin();
            applause();
            switchPlayer();
            document.getElementById(`score${activePlayer}`).textContent = 'Lost!';
            active = activePlayer == 1 ? 0 : 1;
            
        } else {
            switchPlayer();
            }
    }
});

btnNew.addEventListener('click', function () {
    playing = true;
    stopAnimation();
    document.querySelector(`.player${activePlayer}`)
    activePlayer = 0;
    scores[0] = 0;
    scores[1] = 0;
    document.getElementById('score0').textContent = 0;
    document.getElementById('score1').textContent = 0;
});

// Creation des confettis a la victoire :

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setAnimationWin(){
    let animateDiv = document.getElementById("allConfettis");
    for(let i = 0; i<100; i++){
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = getRandomArbitrary(0,100)+'%';
        confetti.style.animationDelay = 50*i + 'ms';
        confetti.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        animateDiv.appendChild(confetti);
    }
}
// Fonction fin de l'animation des confettis
function stopAnimation(){
    let animateDiv = document.getElementById("allConfettis");
    animateDiv.innerHTML = "";
}

// Bruitage De Victoire

function applause(){
    let playWin = document.getElementById('bruitage')
    playWin.play();
}

// Javascript Created by Angélik, Marion, Arthur 😎 