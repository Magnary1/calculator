// linking to html

const output = document.querySelector(`output`);
const numbersBtns = document.querySelectorAll(`.numbers`)
const equalsBtn = document.querySelector(`#equals-btn`)
const addBtn = document.querySelector(`#add-btn`)


// onclick event listeners

numbersBtns.forEach(number => number.addEventListener(`click`, displayNumber))
equalsBtn.addEventListener(`click`, displayAnswer)
addBtn.addEventListener(`click`, operatorPressed)

let a = undefined
let plusON = false
let newNumON = false
let temp = ``
let tempSum = ``
let plusCounter = 0
function displayAnswer() {

    if (plusON === true) {
        if (a === temp) {
            output.textContent = +output.textContent + a
            console.log(`ONE ${a} is a and ${temp} is temp`)
            newNumON = true
            plusCounter = 0

        } else if (a != temp) {
            temp = +output.textContent
            output.textContent = +output.textContent + a
            a = temp
            newNumON = true
            console.log(`TWO ${a} is a and ${temp} is temp`)
            plusCounter = 0
        }
    }
}


function operatorPressed() {

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








function displayNumber(e) {
    if (newNumON === true) {
        output.textContent = ``
        newNumON = false
    }
    output.textContent += e.target.textContent
}

function add(...nums) {
    return nums.reduce((previous, current) => previous + current)
}


function subtract(...nums) {
    return nums.reduce((previous, current) => previous - current)

}
function multiply(...nums) {
    return nums.reduce((previous, current) => previous * current)

}
function divide(...nums) {
    return nums.reduce((previous, current) => previous / current)

}



