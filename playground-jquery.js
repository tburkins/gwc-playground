$(document).ready(function() {
    $("#draw-button").click(function() {
        // Call the draw function when the button is pressed
        draw();
    });

    $("#clear-button").click(function() {
        // Get the canvas element
        var c = $("#playground-canvas").get(0);

        // Get the 2d drawing context
        var ctx = c.getContext("2d");    

        // Clear the context
        ctx.clearRect(0, 0, c.width, c.height);
    });

    draw();
});

function draw() {
    // Get 2d drawing context from the canvas element
    var ctx = $("#playground-canvas").get(0).getContext("2d");

    // Draw on the canvas
    ctx.moveTo(0,0);
    ctx.lineTo(600, 400);
    ctx.stroke();
}
