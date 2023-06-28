// let mainDiv = document.createElement("div");
// mainDiv.className = "main-container";
// document.body.appendChild(mainDiv);

let mainDiv = document.getElementById("main-container");

// let btn = document.createElement("button");
// btn.className = "btn";
// btn.textContent = "Change layout"
// btn.addEventListener("click", inputOf);
// btn.addEventListener("click", createSquare);
// document.body.insertBefore(btn, mainDiv);

let btn = document.createElement("input");
btn.className = "btn";
btn.setAttribute("type", "button");
btn.setAttribute("value","Change Layout");
btn.addEventListener("click", inputOf);
btn.addEventListener("click", createSquare);
//btn.addEventListener("click", restart);
document.body.insertBefore(btn, mainDiv);


function inputOf (e) {

    let input = 16;

    if ( btn.value === "Change Layout") {
        btn.value = "changed!";
     } else {
        btn.value = "Change Layout"
        let inputUser = prompt("choose the quantity of squares per side", "16");  
        input = Number(inputUser);
     }
  

   



    return input
}


/* setTimeout(restart, 3000);

function restart () {
    input.reset();
} */



let inputSelected = inputOf();
console.log(inputSelected)

let gridSize = inputSelected * inputSelected;
console.log(gridSize);

function sizeOf() {
    let calc = 960 / inputSelected;
    return calc
}

let size = sizeOf();

setTimeout(createSquare, 1000);

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





