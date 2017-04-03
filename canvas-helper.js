// Returns a 2d context for a given <canvas> element that can be used for drawing
function getDrawingContext(canvasName) {
    // Get the canvas element
    var c = document.getElementById(canvasName);

    // Get the 2d drawing context
    return c.getContext("2d");
}

// Clears the specified <canvas> element
function clearCanvas(canvasName) {
    // Get the canvas element
    var c = document.getElementById(canvasName);

    // Get the 2d drawing context
    var ctx = c.getContext("2d");    

    // Clear the context
    ctx.clearRect(0, 0, c.width, c.height);
}