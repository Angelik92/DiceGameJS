//Jeux de dés Javascript !

const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');
const score0 = document.querySelector('#score0');
const score1 = document.getElementById('#score1');
const current0 = document.getElementById('#current0');
const current1 = document.getElementById('#current1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn_new');
const btnRoll = document.querySelector('.btn_roll');
const btnHold = document.querySelector('.btn_hold');
const scores = [0, 0];

let currentscore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
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

        if (scores[activePlayer] >= 100) {
            playing = false;
            document.getElementById(`score${activePlayer}`).textContent = 'Win!';
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
    document.querySelector(`.player${activePlayer}`)
activePlayer = 0;
scores[0] = 0;
scores[1] = 0;
    document.getElementById('score0').textContent = 0;
    document.getElementById('score1').textContent = 0;
});

// Creation des feu d'artifice a la victoire ? 

// création de la modal pour les régles du jeu ? 


// Fin du jeux de dés !


// Javascript Created by Angélik, Marion, Arthur 😎