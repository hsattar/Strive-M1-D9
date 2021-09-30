const generateBinogBoard = () => {
    let bingoContainer = document.getElementsByClassName('bingo-container')[0]
    for (let i = 1; i <= 76; i++) {
        let bingoNumber = document.createElement('div')
        bingoNumber.classList.add('bingo-number')
        bingoNumber.innerText = i
        bingoContainer.appendChild(bingoNumber)
    }
}

generateBinogBoard()


const generateRandomNum = () => {
    let numberDisplay = document.getElementById('displayRandomNum')
    let randomNum = Math.ceil(Math.random() * 76)    
    numberDisplay.innerHTML = `<p>${randomNum}</p>`
    unHighlightRandomNum() 
    highlightRandomNum(randomNum)
}

let bingoNumbers = document.getElementsByClassName('bingo-number')

const unHighlightRandomNum = () => {
    for (bingoNum of bingoNumbers) {
        for (classList of bingoNum.classList) {
            if (classList === 'highlighted') {
                bingoNum.classList.remove('highlighted')
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
}


let randonNumBtn = document.getElementById('numGenerator')
randonNumBtn.addEventListener('click', generateRandomNum)


// TASKS

// - Make sure to always select a new number (eg. avoid randoming the number 10 three times).

// - Create a user board with 24 randomized numbers that highlights as the main board does.

// - Let the user choose how many user boards he's willing to play with and generate them before starting to play.