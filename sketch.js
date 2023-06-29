 let mainDiv = document.createElement("div");
 mainDiv.className = "main-container";


 // uso mouseover porque este evento tiene bubbleup, lo cual me permite hacer event delegation,
 // que es colocar un solo listener en el elemento padre.

 //en este caso, agregue el color directamente al elemento:
 //mainDiv.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "gold");
 // en este otro, agregue una clase, lo cual es mejor porque puedo hacer mas ediciones en css:
 mainDiv.addEventListener("mouseover", (e) => e.target.className = "hovered");

 document.body.appendChild(mainDiv);



//ACA intente agregarle el SHADOW con cada pasada, lamentablemente no lo puedo probar.
// la pc se traba completamente, evidentemente no le da para procesar esto jaja, que hdp.

/* function colors (e) {
    e.target.style.backgroundColor = "gold";
    
    let bright =  0.9;

     while (bright < 10) {
            bright -= 0.1;
         }
   e.target.style.filter = `brightness(${bright})`;
 }  */




// aca intente hacer que cambie de color en relacion al movimiento del mouse, pero no pude.
// tampoco lo pude hacer funcionar en el test, incluso COPIANDO EXACTAMENTE lo que hizo el chabon
// en el video, asique no se. RARISIMO.

/* mainDiv.addEventListener("mouseover", colors);
function colors (e) {
    e.target.className = "hovered";
    let x = e.clientX;
    let y = e.clientY;
    e.target.style.backgroundColor = `rgb (${x},${y},${(x + y) / 10})`;
}  */




let btn = document.createElement("input");
btn.className = "btn";
btn.setAttribute("type", "button");
btn.setAttribute("value","Change Layout");
btn.addEventListener("click", createSquare);
document.body.insertBefore(btn, mainDiv);

/* // aca intento hacer lo mismo que arriba, pero sin un event delegation, sino que coloco uno por uno los 
//listeners del node collection de .squares, por eso el forEach.
//en el test funciona, pero aca no.. nose porque.

let squareColor = document.querySelectorAll(".square");
squareColor.forEach(square => square.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "gold" ));


// aca esta la named function, que podria usar en lugar de la arrow:
// function colors (e) {
//     e.target.style.backgroundColor = "gold";
// }  */


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
// aca intento hacer lo mismo que arriba, pero sin exito.. no se porque no funciona, en el test no hay problemas.
//square.addEventListener("mouseenter", (e) => e.target.style.backgroundColor= "gold");
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


