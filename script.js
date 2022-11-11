let fields = [];

let currentShape = "cross";

function fillShape(id) {
    fields[id] = currentShape;
    isItCircleOrCross(id);
    checkWinner();
    console.log(fields);
}

function isItCircleOrCross(id) {
    if (currentShape == "cross") {
        fillCross(id);
    } else {
        fillCircle(id); 
    }
}

function fillCross(id) {
    document.getElementById(`cross${id}`).classList.remove('d-none');
    document.getElementById(`circle${id}`).classList.add('d-none');
    currentShape = "circle";
}

function fillCircle(id) {
    document.getElementById(`cross${id}`).classList.add('d-none');
    document.getElementById(`circle${id}`).classList.remove('d-none');
    currentShape = "cross";
}

function checkWinner() {
//horizontal
    for (let i = 0; i < 9; i+=3) {
        if (fields[i] == fields[i+1] && fields[i+1] == fields[i+2] && fields[i]) {
            console.log(fields[i] + ' du hast gewonnen!');
        } 
    }
//vertikal
    for (let i = 0; i < 3; i++) {
        if (fields[i] == fields[i+3] && fields[i+3] == fields[i+6] && fields[i]) {
            console.log(fields[i] + ' du hast gewonnen!');
        } 
    }
//diagonal
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        console.log(fields[0] + ' du hast gewonnen!');
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        console.log(fields[2] + ' du hast gewonnen!');
    }
}