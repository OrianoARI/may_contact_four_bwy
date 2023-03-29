function play(elem) {
    if (gameOver == false && elem.innerHTML == "") {
        let elemId = elem.id
        let index = parseInt(elemId.split("-")[1])
        console.log(document.querySelectorAll(".cel")[index+7]);
        for (let i = index; i < container.length; i=i+7) {
            if (document.querySelectorAll(".cel")[i+7] && document.querySelectorAll(".cel")[i+7].innerHTML == "" && turn % 2 != 0) {
                document.querySelectorAll(".cel")[i+7].style.backgroundColor = playerOne
                document.querySelectorAll(".cel")[i+7].style.color = playerOne
                document.querySelectorAll(".cel")[i+7].innerHTML = playerOne
                document.querySelectorAll(".cel")[i].style.backgroundColor = "white"
                document.querySelectorAll(".cel")[i].style.color = "white"
                document.querySelectorAll(".cel")[i].innerHTML = ""
            } else if(document.querySelectorAll(".cel")[i+7] && document.querySelectorAll(".cel")[i+7].innerHTML == "" && turn % 2 == 0 && soloGame == false) {
                document.querySelectorAll(".cel")[i+7].style.backgroundColor = playerTwo
                document.querySelectorAll(".cel")[i+7].style.color = playerTwo
                document.querySelectorAll(".cel")[i+7].innerHTML = playerTwo
                document.querySelectorAll(".cel")[i].style.backgroundColor = "white"
                document.querySelectorAll(".cel")[i].style.color = "white"
                document.querySelectorAll(".cel")[i].innerHTML = ""
            }
        }
        upgradeGrid()
        if (turn % 2 == 0 && soloGame == true && gameOver == false){
            againstCPU()
        }
    }
}