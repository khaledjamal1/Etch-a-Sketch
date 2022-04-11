// user input 



// make a grid and add event listner
const container = document.querySelector(".container")
const content = document.createElement("div")
content.id="grid"
container.appendChild(content)
function makeDiv(){
    for(let i =0; i<(100*100); i++){
        let div = document.createElement("div")
        div.className = "box"
        div.setAttribute('draggable', 'false')
        div.addEventListener("mousedown",() =>{
            div.style.backgroundColor= "black"
        })
        document.getElementById("grid").appendChild(div)
    }
    
}
// make a grid column
makeDiv()