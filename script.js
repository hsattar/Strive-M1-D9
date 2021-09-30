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