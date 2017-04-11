// Draw on the canvas
function onDraw() {
    // Get the canvas element
    var c = document.getElementById("playground-canvas");

    // Get the 2d drawing context
    var ctx = c.getContext("2d");

    // TODO: Draw on the canvas
    ctx.moveTo(0,0);
    ctx.lineTo(600, 400);
    ctx.stroke();
}

// Clears the canvas
function onClear() {
    // Get the canvas element
    var c = document.getElementById("playground-canvas");

    // Get the 2d drawing context
    var ctx = c.getContext("2d");    

    // Clear the context
    ctx.clearRect(0, 0, c.width, c.height);
}