const score = JSON.parse(localStorage.getItem('score')) || {draw: 0, lose: 0, win: 0};

function playGame(playerMove){
    const computerChoise = computerMove();
    defineWinner(playerMove, computerChoise);
    document.querySelector('.js-moves').innerHTML = `You <img src="./images/${playerMove}-emoji.png" alt="" width="50px">
            <img src="./images/${computerChoise}-emoji.png" alt="" width="50px"> Computer`
    updateScore();
}

function updateScore(){
    const reset =  document.querySelector('.res-button');
    document.querySelector('.wins').innerHTML = `${score.win}`
    document.querySelector('.losses').innerHTML = `${score.lose}`
    document.querySelector('.ties').innerHTML = `${score.draw}`

    if(score.win != 0 || score.lose != 0 || score.draw != 0){
        reset.innerHTML = `<button class="reset-button" onclick="resetScore()">Reset Score</button>`;
    } else {
        reset.innerHTML = "";
    }

    console.log(document.querySelector('.reset-button'))

}


function computerMove(){
    const randomNumber = Math.random();
    let result = '';
    if(randomNumber >= 0 && randomNumber <= 1/3){
        result = 'rock';
    } else if (randomNumber > 1/3 && randomNumber <= 1/2) {
        result='paper';
    } else if(randomNumber > 1/2 && randomNumber <= 1){
        result = 'scissors';
    }
    return (result);
}

function defineWinner(playerMove, computerChoise) {
    const result = document.querySelector('.js-result');
    if (playerMove === computerChoise){
        score.draw += 1;
        result.innerHTML = "DRAW";
        result.classList.remove('lose', 'win');
        result.classList.add('draw');
    } else if (playerMove === 'rock' && computerChoise === 'scissors' || 
        playerMove === 'paper' && computerChoise === 'rock' ||
        playerMove === 'scissors' && computerChoise === 'paper') {
            score.win += 1;
            result.innerHTML = "WIN";
            result.classList.remove('lose', 'draw');
            result.classList.add('win');
        } else {
            score.lose += 1
            result.innerHTML = "DEFEAT";
            result.classList.remove('win', 'draw');
            result.classList.add('lose');
        }

        localStorage.setItem('score', JSON.stringify(score));
}

function resetScore(){
    score.draw = 0;
    score.lose = 0;
    score.win = 0;
    updateScore();
    document.querySelector('.js-result').innerHTML = "";
    document.querySelector('.js-moves').innerHTML = "";
    localStorage.removeItem('score');
}

updateScore();
