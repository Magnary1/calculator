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

//setting global variables and initial state of calculator

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

let clearCounter = 0
let equalsON = false

//functions

function displayAnswer() {
    equalsON = true
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
    if (divideON === true || multiplyON === true || minusON === true)
        if (equalsON === false) {
            displayAnswer()
            equalsON = false
        }

    equalsON = false

    minusON = false
    minusCounter = 0
    multiplyON = false
    multiplyCounter = 0
    divideON = false
    divideCounter = 0


    if (plusCounter === 0) {
        if (plusON === true) {
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
    if (plusON === true || multiplyON === true || minusON === true)
        if (equalsON === false) {
            displayAnswer()
            equalsON = false
        }

    equalsON = false

    plusON = false
    plusCounter = 0
    multiplyON = false
    multiplyCounter = 0
    divideON = false
    divideCounter = 0

    if (minusCounter === 0) {
        if (minusON === true) {
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
    if (plusON === true || multiplyON === true || minusON === true)
        if (equalsON === false) {
            displayAnswer()
            equalsON = false
        }

    equalsON = false

    minusON = false
    minusCounter = 0
    plusON = false
    plusCounter = 0
    divideON = false
    divideCounter = 0

    if (multiplyCounter === 0) {
        if (multiplyON === true) {
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

function dividePressed() {
    if (plusON === true || multiplyON === true || minusON === true)
        if (equalsON === false) {
            displayAnswer()
            equalsON = false
        }
    equalsON = false

    plusON = false
    plusCounter = 0
    multiplyON = false
    multiplyCounter = 0
    minusON = false
    minusCounter = 0

    if (divideCounter === 0) {
        if (divideON === true) {
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
    if (output.textContent.includes(`.`) && this.textContent === `.`) return
    clearBtn.textContent = `C`
    // if (output.textContent.includes(`.`))
    output.textContent += e.target.textContent
}

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


// letting user type numbers/operators

window.addEventListener(`keydown`, getNumber)

function getNumber(e) {
    console.log(e.key)
    let numbers = `1234567890.`
    if (numbers.includes(e.key) && !output.textContent.includes(`.`)) {
        displayNumberTyped(e)
} else if (output.textContent.includes(`.`) && numbers.slice(0,-1).includes(e.key)) {
    displayNumberTyped(e)

}
    if (e.key === `Enter` || e.key === `=`)
        displayAnswer()
    if (e.key === `+`)
        plusPressed()
    if (e.key === `-`)
        minusPressed()
    if (e.key === `/`)
        dividePressed()
    if (e.key === `*`)
        multiplyPressed()
    if (e.key === `c` || e.key === `C`)
        clearDisplay()
    if (e.key === `Backspace`)
        output.textContent = output.textContent.slice(0,-1)
}
function displayNumberTyped(e) {
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
    output.textContent += e.key
    }