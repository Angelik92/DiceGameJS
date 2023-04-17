
//retrieve html nodes
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

let scores = [0, 0];
let currentscore = 0;
let activePlayer = 0;

let playing = true;

// function change player
const switchPlayer = () => {
    currentscore = 0;
    document.getElementById(`current${activePlayer}`).textContent = currentscore;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0.classList.toggle("actived");
    player1.classList.toggle("actived");
}; 

// dice roll on click
btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = getRandomArbitrary(1, 6) 
        diceImg.src=`assets/Images/dice-${dice}.png`;
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
        document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer] +"/100";

        if (scores[activePlayer] >= 10) {
            playing = false;         
            active = activePlayer == 1 ? 0 : 1;
            finishGame();
            
        } else {
            switchPlayer();
            }
    }
});

function finishGame(){
    setAnimationWin();
    applause();
    switchPlayer();
    document.getElementById(`score${activePlayer}`).textContent = 'Win!';
    document.getElementById(`score${activePlayer}`).textContent = 'Lost!';
    
    
}

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


//End game animation

//Create function confetis
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