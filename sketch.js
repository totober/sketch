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

    let inputUser = prompt("choose the quantity of squares per side", "16");  
    let input = Number(inputUser);

    // if (input === 0 || "") {
    //     input = 16
    // }

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

setTimeout(createSquare, 4000);

function createSquare() {

for (let i = 0; i < gridSize; i++){

let square = document.createElement("div");
square.className = "square";
square.style.height = `${size}px`;
square.style.width = `${size}px`;
mainDiv.appendChild(square)

} 

}



/* function createSquare() {

    for (let i = gridSize; i > 0; i--){
      let square = document.createElement("div");
    square.className = "square";
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
    mainDiv.appendChild(square)  
    } */





