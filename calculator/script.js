// linking to html

const output = document.querySelector(`output`);
const numbersBtns = document.querySelectorAll(`.numbers`)
const addBtn = document.querySelector(`#add-btn`)

// onclick event listeners

numbersBtns.forEach(number => number.addEventListener(`click`, displayNumber))












function displayNumber(e) {
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



