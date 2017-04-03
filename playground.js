function onDraw() {
    var ctx = getDrawingContext("playground-canvas");

    // Draw on the canvas
    ctx.moveTo(0,0);
    ctx.lineTo(600, 400);
    ctx.stroke();
}

function onClear() {
    clearCanvas("playground-canvas");
}

