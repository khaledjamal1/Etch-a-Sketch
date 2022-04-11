// user input 



// make a grid function row
const container = document.querySelector(".container")
const content = document.createElement("div")
content.id="grid"
container.appendChild(content)
function makeDiv(){
    for(let i =0; i<(16*16); i++){
        let div = document.createElement("div")
        div.className = "box"
        document.getElementById("grid").appendChild(div)
    }
}
// make a grid column
makeDiv()