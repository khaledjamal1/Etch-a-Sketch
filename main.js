// user input 



// make a grid and add event listner
const container = document.querySelector(".container")
function makeDiv(rows, columns){
    for(let i =0; i<(rows*columns); i++){
        let div = document.createElement("div")
        //div.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        //div.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
        div.addEventListener("mouseover",() =>{
            div.style.backgroundColor= "black"
        })
        container.appendChild(div).classList.add("box")
    }
    
}
// make a grid column
makeDiv(64,64)