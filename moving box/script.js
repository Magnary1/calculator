// const container = document.getElementById(`container`)
// let box = document.querySelector(`.box`)

const scoreDisplay = document.querySelector(`#score`)
let score = 0
scoreDisplay.textContent = score




function deleteAddNew() {
    const box = document.querySelector(`.box`)
    box.remove()
    addBox()

}


function addBox() {
    const container = document.getElementById(`container`)
    const box = document.createElement(`div`)
    box.classList.add(`box`)
    
    let x = Math.floor(Math.random() * 750)
    let y = Math.floor(Math.random() * 450)

    box.style.transform = `translate(${x}px, ${y}px)`
    box.style.backgroundColor = randomColor()
    container.style.backgroundColor = `grey`
    container.append(box)
    box.addEventListener(`click`, deleteAddNew)




    function randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


}

addBox()

