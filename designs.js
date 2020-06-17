// Defining variable
let size = document.getElementById("sizePicker");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
let color = document.getElementById('colorPicker');
let canvas = document.getElementById("pixelCanvas");


// Creating a loop to insert rows
function makeGrid() {
    for (let i = 0; i < gridHeight.value; i++) {
        const row = canvas.insertRow(i);
        // Creating a loop to insert cells
        for (let j = 0; j < gridWidth.value; j++) {
            row.insertCell(j);
        }
    }
}

// Adding click event to color cells
canvas.addEventListener('click', function(event) {
    if (event.target.nodeName === "TD") {
        event.target.style.backgroundColor = color.value;
    }
})

// Adding click event to the submit input
size.addEventListener('submit', function(event) {
    // Delete rows to start
    canvas.innerHTML = " ";
    event.preventDefault();
    makeGrid(); 
})

