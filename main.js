const gray = document.createElement("button")
const rgbt = document.createElement("button")
const black = document.createElement("button")
const user = document.createElement("button")


// make a grid and add event listner
const container = document.querySelector(".container")
function makeDiv(rows, columns){
    for(let i =0; i<(rows*columns); i++){
        let div = document.createElement("div")
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
        container.appendChild(div).classList.add("box")
    }
    
}

// make buttons
const buttons = document.querySelector(".button")
//reset button
const reset = document.createElement("button")
reset.textContent="Reset"
reset.addEventListener("click", ()=>{
    location.reload()
})
buttons.appendChild(reset)

// grayscale button
function grayy(){
    const gry = container.querySelectorAll(".box")
    gray.textContent="grayscale"
    gray.addEventListener("click", () => {
        gry.forEach(box => box.addEventListener("mouseover", () =>{
            let gryn = Math.floor(Math.random()*255)
            box.style.background = `rgb(${gryn},${gryn},${gryn})`
        }))
    })
    buttons.appendChild(gray).classList.add("gry")
}
function RGB(){
    const rgb = container.querySelectorAll(".box")
    rgbt.textContent="RGB"
    rgbt.addEventListener("click", () => {
        rgb.forEach(box => box.addEventListener("mouseover", () =>{
            let r = Math.floor(Math.random()*255)
            let g = Math.floor(Math.random()*255)
            let b = Math.floor(Math.random()*255)
            box.style.background = `rgb(${r},${g},${b})`
        }))
    })
    buttons.appendChild(rgbt).classList.add("rgb")
}
function blackk(){
    const black1 = container.querySelectorAll(".box")
    black.textContent="black"
    black.addEventListener("click", () => {
        black1.forEach(box => box.addEventListener("mouseover", () =>{
            box.style.background = "black"
        }))
    })
    buttons.appendChild(black).classList.add("black")
}
function pick(){
    user.textContent="Size"
    user.addEventListener("click", () =>{
        let user = prompt("Choose the size of the grid")
        if (user == null || user > 100){
            alert ("try again")
        } else {
            makeDiv(user,user)
            blackk()
            RGB()
            grayy()
        }
    })
    buttons.appendChild(user).classList.add("user")
}
pick()
