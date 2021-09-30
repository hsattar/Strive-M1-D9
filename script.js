const generateBinogBoard = (num) => {
    let bingoContainer = document.getElementsByClassName('bingo-container')[0]
    for (let i = 1; i <= num; i++) {
        let bingoNumber = document.createElement('div')
        bingoNumber.classList.add('bingo-number')
        bingoNumber.innerText = i
        bingoContainer.appendChild(bingoNumber)
    }
}

generateBinogBoard(76)

let numbersGenerated = []

const generateRandomNum = () => {
    let numberDisplay = document.getElementById('displayRandomNum')
    let randomNum = Math.ceil(Math.random() * 76)
    numberDisplay.innerHTML = `<p>${randomNum}</p>`
    numbersGenerated.push(randomNum)
    unHighlightRandomNum() 
    highlightRandomNum(randomNum)
}

let bingoNumbers = document.getElementsByClassName('bingo-number')
let userNumbers = document.getElementsByClassName('user-number')

const unHighlightRandomNum = () => {
    for (bingoNum of bingoNumbers) {
        for (classList of bingoNum.classList) {
            if (classList === 'highlighted') {
                bingoNum.classList.remove('highlighted')
            }
        }
    }
    for (userNum of userNumbers) {
        for (classList of userNum.classList) {
            if (classList === 'highlighted') {
                userNum.classList.remove('highlighted')
            }
        }
    }
}

const highlightRandomNum = (number) => {
    for (let bingoNum of bingoNumbers) {
        if (bingoNum.innerText == number) {
            bingoNum.classList.add('highlighted')
        }
    }
    for (let userNum of userNumbers) {
        if (userNum.innerText == number) {
            userNum.classList.add('highlighted')
        }
    }
}

let randonNumBtn = document.getElementById('numGenerator')
randonNumBtn.addEventListener('click', generateRandomNum)

const createUserBoard = () => {
    let userContainer = document.getElementsByClassName('userboard-container')[0]
    for (let i = 0; i <= 24; i++) {
        let userBoard = document.createElement('div')
        userBoard.classList.add('user-number')
        let userRandomNum = Math.ceil(Math.random() * 76)
        userBoard.innerText = userRandomNum
        userContainer.appendChild(userBoard)
    }
}

createUserBoard()

// STORE RANDOM NUMBERS GENERATED INTO AN ARRAY
// WHEN GENERATING A RANDOM NUMBER CHECK THE ARRAY
// IF NUMBER ALREADY EXISTS THEN EXECUTE THE FUNCTION AGAIN


// USER BOARD
// CREATE A BOARD OF 24 NUMBERS
// GENERATE RANDOM NUMBER FOR EACH SPACE
// WHEN RANDOM NUMBER IS GENERATED CHECK IF NUMBER IS ON USER BOARD
// IF NUMBER EXISTS ADD HIGHLIGHT CLASS
// REMOVE CLASS AFTER


// TASKS

// - Make sure to always select a new number (eg. avoid randoming the number 10 three times).

// - Create a user board with 24 randomized numbers that highlights as the main board does.

// - Let the user choose how many user boards he's willing to play with and generate them before starting to play.