 let mainDiv = document.createElement("div");
 mainDiv.className = "main-container";
 document.body.appendChild(mainDiv);


let btn = document.createElement("input");
btn.className = "btn";
btn.setAttribute("type", "button");
btn.setAttribute("value","Change Layout");
btn.addEventListener("click", createSquare);
document.body.insertBefore(btn, mainDiv);


window.addEventListener("load", load);



function load () {

    
    for (let i = 0; i < 256; i++){

        let square = document.createElement("div");
        square.className = "square";
        square.style.height = `${60}px`;
        square.style.width = `${60}px`;
        mainDiv.appendChild(square)
        
        }
}



function createSquare() {


    mainDiv.replaceChildren();

      function inputOf () {
       
                let inputUser = Number(prompt("choose the quantity of squares per side"));  
                let input = 0;

               if (inputUser > 100){
                
                alert("sorry! 100 is the limit!");
                input = 100;

               } else {
                 input = inputUser;
               }
        
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


for (let i = 0; i < gridSize; i++){

let square = document.createElement("div");
square.className = "square";
square.style.height = `${size}px`;
square.style.width = `${size}px`;
mainDiv.appendChild(square)

}


}







/*
    if ( btn.value === "Change Layout") {
        btn.value = "changed!";
     } else {
        btn.value = "Change Layout"
     }
      */


