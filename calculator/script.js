// linking to html

const output = document.querySelector(`output`);
const equalsBtn = document.querySelector(`#equals-btn`)
const clearBtn = document.querySelector(`#clear-btn`)
const posNegBtn = document.querySelector(`#pos-neg-btn`)
const percentBtn = document.querySelector(`#percent-btn`)

const numbersBtns = document.querySelectorAll(`.numbers`)

const addBtn = document.querySelector(`#add-btn`)
const minusBtn = document.querySelector(`#minus-btn`)
const multiplyBtn = document.querySelector(`#multiply-btn`)
const divideBtn = document.querySelector(`#divide-btn`)

// onclick event listeners

numbersBtns.forEach(number => number.addEventListener(`click`, displayNumber))
equalsBtn.addEventListener(`click`, displayAnswer)
clearBtn.addEventListener(`click`, clearDisplay)
posNegBtn.addEventListener(`click`, posNegPressed)
percentBtn.addEventListener(`click`, percentPressed)
addBtn.addEventListener(`click`, plusPressed)
minusBtn.addEventListener(`click`, minusPressed)
multiplyBtn.addEventListener(`click`, multiplyPressed)
divideBtn.addEventListener(`click`, dividePressed)

let a = undefined
let temp = ``

let newNumON = false

let plusON = false
let plusCounter = 0

let minusON = false
let minusCounter = 0

let multiplyON = false
let multiplyCounter = 0

let divideON = false
let divideCounter = 0




function displayAnswer() {

    if (plusON === true) {
        if (a === temp) {
            output.textContent = +output.textContent + a
            newNumON = true
            plusCounter = 0
        } else if (a != temp) {
            temp = +output.textContent
            output.textContent = +output.textContent + a
            a = temp
            newNumON = true
            plusCounter = 0
        }
    }
    if (minusON === true) {
        if (a === temp) {
            output.textContent = +output.textContent - a
            newNumON = true
            minusCounter = 0

        } else if (a != temp) {
            temp = +output.textContent
            output.textContent = a - +output.textContent
            a = temp
            newNumON = true
            minusCounter = 0
        }
    }
    if (multiplyON === true) {
        if (a === temp) {
            output.textContent = +output.textContent * a
            newNumON = true
            multiplyCounter = 0
        } else if (a != temp) {
            temp = +output.textContent
            output.textContent = +output.textContent * a
            a = temp
            newNumON = true
            multiplyCounter = 0
        }
    }

    if (divideON === true) {
        if (a === temp) {
            output.textContent = +output.textContent / a
            newNumON = true
            divideCounter = 0

        } else if (a != temp) {
            temp = +output.textContent
            output.textContent = a / +output.textContent
            a = temp
            newNumON = true
            divideCounter = 0
        }
    }
}


function plusPressed() {
    minusON = false
    minusCounter = 0
    multiplyON = false
    multiplyCounter = 0
    divideON = false
    divideCounter = 0


    if (plusCounter === 0) {
        if (plusON === true) {
            // if (temp != a) 
            displayAnswer()
            a = +output.textContent
            plusCounter++
        } else {
            a = +output.textContent
            plusON = true
            newNumON = true
            plusCounter++

        }
    }
}

function minusPressed() {
    plusON = false
    plusCounter = 0
    multiplyON = false
    multiplyCounter = 0
    divideON = false
    divideCounter = 0

    if (minusCounter === 0) {
        if (minusON === true) {
            // if (temp != a) 
            displayAnswer()
            a = +output.textContent
            minusCounter++
        } else {
            a = +output.textContent
            minusON = true
            newNumON = true
            minusCounter++
        }
    }
}

function multiplyPressed() {
    minusON = false
    minusCounter = 0
    plusON = false
    plusCounter = 0
    divideON = false
    divideCounter = 0

    if (multiplyCounter === 0) {
        if (multiplyON === true) {
            // if (temp != a) 
            displayAnswer()
            a = +output.textContent
            multiplyCounter++
        } else {
            a = +output.textContent
            multiplyON = true
            newNumON = true
            multiplyCounter++

        }
    }
}

function dividePressed(e) {
    plusON = false
    plusCounter = 0
    multiplyON = false
    multiplyCounter = 0
    minusON = false
    minusCounter = 0


    console.log(e)
    if (divideCounter === 0) {
        if (divideON === true) {
            // if (temp != a) 
            displayAnswer()
            a = +output.textContent
            divideCounter++
        } else {
            a = +output.textContent
            divideON = true
            newNumON = true
            divideCounter++
        }
    }
}


function displayNumber(e) {
    if (newNumON === true) {
        clearBtn.textContent = `C`
        output.textContent = ``
        newNumON = false
        
        plusCounter = 0
        minusCounter = 0
        multiplyCounter = 0
        divideCounter = 0
    }
    clearBtn.textContent = `C`

    output.textContent += e.target.textContent
}


let clearCounter = 0

function clearDisplay() {
    output.textContent = ""
    clearBtn.textContent = `AC`
    if (clearCounter > 0) {
        a = undefined
        temp = ``

        newNumON = false

        plusON = false
        plusCounter = 0

        minusON = false
        minusCounter = 0

        multiplyON = false
        multiplyCounter = 0

        divideON = false
        divideCounter = 0

        clearCounter = 0

    }
    clearCounter++
}

function posNegPressed() {
    output.textContent = -output.textContent
}

function percentPressed() {
    output.textContent = output.textContent / 100
}