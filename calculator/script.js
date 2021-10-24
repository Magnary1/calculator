// linking to html

const output = document.querySelector(`output`);
const numbersBtns = document.querySelectorAll(`.numbers`)
const equalsBtn = document.querySelector(`#equals-btn`)
const addBtn = document.querySelector(`#add-btn`)
const minusBtn = document.querySelector(`#minus-btn`)

// onclick event listeners

numbersBtns.forEach(number => number.addEventListener(`click`, displayNumber))
equalsBtn.addEventListener(`click`, displayAnswer)
addBtn.addEventListener(`click`, plusPressed)
minusBtn.addEventListener(`click`, minusPressed)

let a = undefined
let temp = ``

let newNumON = false

let plusON = false
let plusCounter = 0

let minusON = false
let minusCounter = 0






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
}


function plusPressed() {
    minusON = false

    if (plusCounter === 0) {
        if (plusON === true) {
            // if (temp != a) 
            // displayAnswer()
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


function minusPressed(e) {
    plusON = false
    plusCounter = 0

    if (minusCounter === 0) {
        if (minusON === true) {
            // if (temp != a) 
            // displayAnswer()
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

function displayNumber(e) {
    if (newNumON === true) {
        output.textContent = ``
        newNumON = false
    }
    output.textContent += e.target.textContent
}



