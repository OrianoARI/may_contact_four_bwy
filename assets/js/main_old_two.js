function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let player = 1;
let gameOver = false;
let rowOne = document.querySelectorAll('.cell-one');
let rowTwo = document.querySelectorAll('.cell-two');
let rowThree = document.querySelectorAll('.cell-three');
let rowFour = document.querySelectorAll('.cell-four');
let rowFive = document.querySelectorAll('.cell-five');
let rowSix = document.querySelectorAll('.cell-six');
let rowSeven = document.querySelectorAll('.cell-seven');
let gravityTable = document.querySelectorAll('.cell');

let checkWinTable = [
    [],
    [],
    [],
    [],
    [],
    [],
];
let turn = 0;

function play(elem) {
    let elemId = elem.id
    let index = parseInt(elemId.split("-")[1])   //question sur split
    console.log(gravityTable[index + 7]);
    if (elem.innerHTML == "" && elem.innerHTML == "" && gameOver == false) {
        console.log(player);
        for (let i = index; i < gravityTable.length - 1; i = i + 7) {
            if (gravityTable[i + 7] && gravityTable[i + 7].innerHTML != "" && player % 2 != 0) {
                gravityTable[i].innerHTML = "_";
                console.log(player);
            }
            if (gravityTable[i + 7] && gravityTable[i + 7].innerHTML != "" && player % 2 == 0) {
                gravityTable[i].innerHTML = "}";
            } else {
                if (gravityTable[i + 7] && gravityTable[i + 7].innerHTML == "" && player % 2 != 0) {
                    gravityTable[i + 7].innerHTML = "_";
                    gravityTable[i].innerHTML = "";
                    console.log(player);
                }
                if (gravityTable[i + 7] && gravityTable[i + 7].innerHTML == "" && player % 2 == 0) {
                    gravityTable[i + 7].innerHTML = "}";
                    gravityTable[i].innerHTML = "";
                    console.log(player);
                }
            }
        }
    }
    updateGrid()
    player++
}


function updateGrid() {
    for (let i = 0; i < rowOne.length; i++) {
        checkWinTable[0][i] = rowOne[i].innerHTML;
    }
    for (let i = 0; i < rowTwo.length; i++) {
        checkWinTable[1][i] = rowTwo[i].innerHTML;
    }
    for (let i = 0; i < rowThree.length; i++) {
        checkWinTable[2][i] = rowThree[i].innerHTML;
    }
    for (let i = 0; i < rowFour.length; i++) {
        checkWinTable[3][i] = rowFour[i].innerHTML;
    }
    for (let i = 0; i < rowFive.length; i++) {
        checkWinTable[4][i] = rowFive[i].innerHTML;
    }
    for (let i = 0; i < rowSix.length; i++) {
        checkWinTable[5][i] = rowSix[i].innerHTML;
    }
    console.log(checkWinTable);
    checkWin()
}

function checkWin() {
    for (let i = 0; i < checkWinTable.length; i++) {
        for (let j = 0; j < checkWinTable[i].length; j++) {
            if (checkWinTable[i][j] != "" && checkWinTable[i][j] == checkWinTable[i][j + 1] && checkWinTable[i][j + 1] == checkWinTable[i][j + 2] && checkWinTable[i][j + 2] == checkWinTable[i][j + 3]) {
                console.log("gagné");
            }
            if ((checkWinTable[i + 3] && checkWinTable[i][j] != "" && checkWinTable[i][j] == checkWinTable[i + 1][j] && checkWinTable[i + 1][j] == checkWinTable[i + 2][j] && checkWinTable[i + 2][j] == checkWinTable[i + 3][j])) {
                console.log("gagné");
            }
            if ((checkWinTable[i + 3] && checkWinTable[i][j] != "" && checkWinTable[i][j] == checkWinTable[i + 1][j + 1] && checkWinTable[i + 1][j + 1] == checkWinTable[i + 2][j + 2] && checkWinTable[i + 2][j + 2] == checkWinTable[i + 3][j + 3])) {
                console.log("gagné");
            }
            if ((checkWinTable[i + 3] && checkWinTable[i][j + 3] != "" && checkWinTable[i][j + 3] == checkWinTable[i + 1][j + 2] && checkWinTable[i + 1][j + 2] == checkWinTable[i + 2][j + 1] && checkWinTable[i + 2][j + 1] == checkWinTable[i + 3][j])) {
                console.log("gagné");
            } else {
                if (turn > 41) {
                    console.log("draw");
                }
            }
        }
    }
}