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
let isMulti = true;
let soloButton = document.querySelector("#solo")
let multiButton = document.querySelector("#multi")


function cpuPlay() {
    let cpuCell = random(0, 41)
    while (gravityTable[cpuCell].innerHTML != "") {
        cpuCell = random(0, 41)
    }
    gravityTable[cpuCell].click()

}
function play(elem) {
    soloButton.disabled = true;
    solo.style.color = "grey"
    multiButton.disabled = true;
    multi.style.color = "grey"
    let elemId = elem.id
    let currentSymbol
    let currentColor
    let index = parseInt(elemId.split("-")[1])   //question sur split
    console.log(gravityTable[index + 7]);
    if (elem.innerHTML == "" && elem.innerHTML == "" && gameOver == false) {
        if (player % 2 != 0) {
            currentColor = "red"
            currentSymbol = "_"
            document.querySelector("#empire").src = "./assets/img/empire-logo.png"
            document.querySelector("#rebels").src = "./assets/img/rebel-logo-inactiv.png"

        } else {
                currentColor = "yellow"
                currentSymbol = "}"
                document.querySelector("#empire").src = "./assets/img/empire-logo-inactiv.png"
                document.querySelector("#rebels").src = "./assets/img/rebel-logo.png"
        }
        elem.innerHTML = currentSymbol
        elem.style.color = currentColor
        console.log(player);
        for (let i = index; i < gravityTable.length; i = i + 7) {
            if (gravityTable[i] != "") {
                if (gravityTable[i + 7] && gravityTable[i + 7].innerHTML == "") {
                    gravityTable[i + 7].innerHTML = currentSymbol;
                    gravityTable[i + 7].style.color = currentColor;
                    gravityTable[i].innerHTML = "";
                    elem.style.color = currentColor;
                    console.log(player);
                }
            }
        }
        player++
        updateGrid()
       
        if (player % 2 == 0 && !isMulti) {
            setTimeout(cpuPlay, 800)
        }
        
    }
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
                if (player % 2 != 0) {
                    impWin.style.display = "block";
                } else {
                    rebWin.style.display = "block";
                }
                gameOver = true;
            }
            if ((checkWinTable[i + 3] && checkWinTable[i][j] != "" && checkWinTable[i][j] == checkWinTable[i + 1][j] && checkWinTable[i + 1][j] == checkWinTable[i + 2][j] && checkWinTable[i + 2][j] == checkWinTable[i + 3][j])) {
                if (player % 2 != 0) {
                    impWin.style.display = "block";
                } else {
                    rebWin.style.display = "block";
                }
                gameOver = true;
            }
            if ((checkWinTable[i + 3] && checkWinTable[i][j] != "" && checkWinTable[i][j] == checkWinTable[i + 1][j + 1] && checkWinTable[i + 1][j + 1] == checkWinTable[i + 2][j + 2] && checkWinTable[i + 2][j + 2] == checkWinTable[i + 3][j + 3])) {
                if (player % 2 != 0) {
                    impWin.style.display = "block";
                } else {
                    rebWin.style.display = "block";
                }
                gameOver = true;
            }
            if ((checkWinTable[i + 3] && checkWinTable[i][j + 3] != "" && checkWinTable[i][j + 3] == checkWinTable[i + 1][j + 2] && checkWinTable[i + 1][j + 2] == checkWinTable[i + 2][j + 1] && checkWinTable[i + 2][j + 1] == checkWinTable[i + 3][j])) {
                if (player % 2 != 0) {
                    impWin.style.display = "block";
                } else {
                    rebWin.style.display = "block";
                }
                gameOver = true;
            }
        }
    }
    if (player >= 43 && gameOver == false) {
        draw.style.display = "block";
        gameOver = true;
    }
}

function reset() {
    gravityTable.forEach(element => {
        element.innerHTML = ""
    });
    rebWin.style.display = "none";
    impWin.style.display = "none";
    draw.style.display = "none";
    soloButton.disabled = false;
    solo.style.color = "white";
    multiButton.disabled = false;
    multi.style.color = "white";
    player = 1;
    gameOver = false;
}

function onePlayer() {
    isMulti = false;
}

function multiPlayer(){
    isMulti = true;
}