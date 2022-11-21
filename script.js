let fields = [];
let currentShape = "cross";
let directionOfLine = "";
let gameOver = false;

function fillShape(id) {
    if (noGameOver()) {
        fields[id] = currentShape;
        isItCircleOrCross(id);
        checkWinner();
    }
}

function noGameOver() {
    return !gameOver;
}

function isItCircleOrCross(id) {
    if (currentShape == "cross") {
        fillCross(id);
        changeToPlayer1();
    } else {
        fillCircle(id); 
        changeToPlayer2();
    }
}

function fillCross(id) {
    document.getElementById(`div${id}`).parentElement.classList.add('notClickable');
    document.getElementById(`cross${id}`).classList.remove('d-none');
    document.getElementById(`circle${id}`).classList.add('d-none');
    currentShape = "circle";
}

function changeToPlayer1() {
    document.getElementById('player1').classList.remove('playerInactive');
    document.getElementById('player2').classList.add('playerInactive');
}

function fillCircle(id) {
    document.getElementById(`div${id}`).parentElement.classList.add('notClickable');
    document.getElementById(`cross${id}`).classList.add('d-none');
    document.getElementById(`circle${id}`).classList.remove('d-none');
    currentShape = "cross";
}

function changeToPlayer2() {
    document.getElementById('player2').classList.remove('playerInactive');
    document.getElementById('player1').classList.add('playerInactive');
}

function checkWinner() {
    checkHorizontalWinner();
    checkVerticalWinner();
    checkDiagonalWinner();
}

function checkHorizontalWinner() {
    for (let i = 0; i < 9; i+=3) {
        if (fields[i] == fields[i+1] && fields[i+1] == fields[i+2] && fields[i]) {
            yesGameOver();
            directionOfLine = 'horizotal';
            addHorizontalWinnerLine(i);
        } 
    }
}

function checkVerticalWinner() {
    for (let i = 0; i < 3; i++) {
        if (fields[i] == fields[i+3] && fields[i+3] == fields[i+6] && fields[i]) {
            yesGameOver();
            directionOfLine = 'vertical';
            addVerticalWinnerLine(i);
        } 
    }
}

function checkDiagonalWinner() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        yesGameOver();
        directionOfLine = 'diagonal1';
        addDiagonalWinnerLine();
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        yesGameOver();
        directionOfLine = 'diagonal2';
        addDiagonalWinnerLine();
    }
}

function addHorizontalWinnerLine(i) {
    if (i == 0 &&  directionOfLine == 'horizotal') {
        document.getElementById('line1').classList.add('scale1');
    } else if (i == 3 && directionOfLine == 'horizotal') {
        document.getElementById('line2').classList.add('scale1');
    } else {
        document.getElementById('line3').classList.add('scale1');
    }   //i==6
}

function addVerticalWinnerLine(i) {
    if (i == 0 &&  directionOfLine == 'vertical') {
        document.getElementById('line4').classList.add('scale2');
    } else if (i == 1 && directionOfLine == 'vertical') {
        document.getElementById('line5').classList.add('scale2');
    } else {
        document.getElementById('line6').classList.add('scale2');
    }   //i==2
}

function addDiagonalWinnerLine() {
    if (directionOfLine == 'diagonal1') {
        document.getElementById('line7').classList.add('scale3');
    } else {
        document.getElementById('line8').classList.add('scale4');
    }
}

function yesGameOver() {
    gameOver = true;
    setTimeout(function () {
        document.getElementById('winnerDiv').classList.remove('d-none');
    }, 1000);
}

function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('winnerDiv').classList.add('d-none');
    resetCircleAndCross ();
    resetWinnerLines();
}

function resetCircleAndCross () {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cross${i}`).classList.add('d-none');
        document.getElementById(`circle${i}`).classList.add('d-none');
        document.getElementById(`div${i}`).parentElement.classList.remove('notClickable');
    }
}

function resetWinnerLines() {
    resetHorizontalLines();
    resetVerticalLines();
    resetDiagonalLines();
}

function resetHorizontalLines() {
    for (let i = 1; i < 4; i++) {
        document.getElementById(`line${i}`).classList.remove('scale1');
    }
}

function resetVerticalLines() {
    for (let i = 4; i < 8; i++) {
        document.getElementById(`line${i}`).classList.remove('scale2');
    }
}

function resetDiagonalLines() {
    for (let i = 7; i < 9; i++) {
        document.getElementById(`line${i}`).classList.remove(`scale${i-4}`);
        }
}

// MEDIA QUERY FUNCTION 


function checkMediaQuery() {
    if (window.innerWidth < 510) {
        document.getElementById('line1').style = "top: 39px; left: 11px;";
        document.getElementById('line2').style = "top: 131px; left: 11px;";
        document.getElementById('line3').style = "top: 225px; left: 11px;";
        document.getElementById('line4').style = "top: 133px; left: -81px;";
        document.getElementById('line5').style = "top: 133px; right: 12px;";
        document.getElementById('line6').style = "top: 133px; left: 105px;";
        document.getElementById('line7').style = "top: 133px; left: -11px;";
        document.getElementById('line8').style = "top: 133px; left: -15px;";
    } else {
        document.getElementById('line1').style = "top: 62px;";
        document.getElementById('line2').style = "top: 202px;";
        document.getElementById('line3').style = "top: 342px;";
        document.getElementById('line4').style = "top: 202px; right: 147px;";
        document.getElementById('line5').style = "top: 202px; right: 7px;";
        document.getElementById('line6').style = "top: 202px; left: 148px;";
        document.getElementById('line7').style = "top: 202px; left: -42px;";
        document.getElementById('line8').style = "top: 202px; left: -42px;";
    }
}

window.addEventListener('resize', checkMediaQuery);