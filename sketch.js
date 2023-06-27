let mainDiv = document.createElement("div");
mainDiv.className = "main-container";
document.body.appendChild(mainDiv);

let btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Change layout"
btn.addEventListener("click", inputOf);
btn.addEventListener("click", createSquare);
document.body.insertBefore(btn, mainDiv);

function inputOf (e) {
    
    let input = Number(prompt("choose the quantity of squares per side"));
    return input
}

let inputSelected = inputOf();
console.log(inputSelected)

let gridSize = inputSelected * inputSelected;
console.log(gridSize);

function sizeOf() {
    let calc = 960 / inputSelected;
    return calc
}

let size = sizeOf();



function createSquare() {

for (i = 0; i < gridSize; i++){
  let square = document.createElement("div");
square.className = "square";
square.style.height = `${size}px`;
square.style.width = `${size}px`;
mainDiv.appendChild(square)  
}

}



