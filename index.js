document.addEventListener('DOMContentLoaded', changeColor1())

function changeColor1() {
    let changeColorButton = document.querySelector('#changecolor')
    let colorDiv = document.querySelector('#colordiv')
    changeColorButton.addEventListener('click',function() {
        if (colorDiv.style.background === 'white') {
            colorDiv.style.background = 'green'
        } else {colorDiv.style.background = 'white'}
        })
    changeColorButton.addEventListener('mouseover',function() {
        colorDiv.style.background = 'purple'
        } 
    )
}

function changeColor(){
    let colorDiv = document.querySelector('#colordiv')
    colorDiv.style.background = 'red'
}