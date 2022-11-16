let fields = [];
let currentShape = "cross";
let directionOfLine = "";
let gameOver = false;

function fillShape(id) {
    if (noGameOver()) {
        fields[id] = currentShape;
        isItCircleOrCross(id);
        checkWinner();
        console.log(fields);
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
//horizontal
    for (let i = 0; i < 9; i+=3) {
        if (fields[i] == fields[i+1] && fields[i+1] == fields[i+2] && fields[i]) {
            console.log(fields[i] + ' du hast gewonnen!');
            gameOver = true;
            directionOfLine = 'horizotal';
            addHorizontalWinnerLine(i);
        } 
    }
//vertical
    for (let i = 0; i < 3; i++) {
        if (fields[i] == fields[i+3] && fields[i+3] == fields[i+6] && fields[i]) {
            console.log(fields[i] + ' du hast gewonnen!');
            gameOver = true;
            directionOfLine = 'vertical';
            addVerticalWinnerLine(i);
        } 
    }
//diagonal
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        console.log(fields[0] + ' du hast gewonnen!');
        gameOver = true;
        directionOfLine = 'diagonal1';
        addDiagonalWinnerLine();
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        console.log(fields[2] + ' du hast gewonnen!');
        gameOver = true;
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
        document.getElementById('line7').classList.add('scale3')
    } else {
        document.getElementById('line8').classList.add('scale4')
    }
}