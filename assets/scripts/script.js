window.onload = function() {
    
    var c = document.getElementById("main");
    window.ctx = c.getContext("2d");
    
    // 1-0: GRAPHICS
    // Uncomment this to see
    //draw();
    
    // 2-0: ANIMATION
    // Uncomment this and re-comment Part 1 to see
    //animate();
    
} // window.onload



// Let's create a draw function for the canvas
function draw() {
    
    // 2-2: My spaceship is drawn facing up, so I want it to face right
    // window.ctx.translate(150,0);
    // window.ctx.rotate(90*Math.PI/180);
    
    // 2-1: Create a drawSpaceShip() function that draws your spaceship
    drawSpaceShip();
    // Or cheat and use mine:
    // drawKatiesSpaceShip();
}


var flipped = 0;
var xOrig = 0;

// Let's animate!
function animate() {
    
    // Always clear the canvas after drawing each frame
    window.ctx.clearRect(0, 0, 640, 480);
    
    // Draw here, including conditionals:
    
    // Let's rotate just for fun
    // My spaceship is drawn facing up, so I want it to face right
    if ( flipped != 1) {
        window.ctx.translate(150+xOrig,0);
        window.ctx.rotate(90*Math.PI/180);
        
        flipped = 1;
    }
    
    // Draw it
    drawSpaceShip();
    
    // Move it
    window.ctx.translate(0,xOrig-2); // reversed bc translation
    
    // This will run animate() every 33 ms
    setTimeout(animate, 33);
}


// Draw Katie's awesome spaceship
function drawKatiesSpaceShip()
{
    // Draw ship base
    var body = window.ctx;
    var size = 150;
    
    
    // Left thruster
    
    body.beginPath();
    body.arc(size/3.2, size-size/3.7, size/18, 0, Math.PI*2, false);
    body.closePath();

    body.fillStyle = "#66b2ff";
    body.fill();
    
    
    
    // Right thruster
    
    body.beginPath();
    body.arc(size-size/3.2, size-size/3.7, size/18, 0, Math.PI*2, false);
    body.closePath();
    
    body.fillStyle = "#66b2ff";
    body.fill();
    
    
    // Left thruster band
    
    body.beginPath();
    body.moveTo(size/3.5, size-size/4.8);
    body.lineTo(size/2.9, size-size/4.8);
    
    body.strokeStyle = "#ffd633";
    body.lineWidth = size/40;
    body.stroke();
    
    
    // Right thruster band
    
    body.beginPath();
    body.moveTo(size-size/3.5, size-size/4.8);
    body.lineTo(size-size/2.9, size-size/4.8);

    body.strokeStyle = "#ffd633";
    body.lineWidth = size/40;
    body.stroke();
    
    
    // Main thruster band
    
    body.beginPath();
    body.moveTo(size/2.3, size-size/5);
    body.lineTo(size-size/2.3, size-size/5);
    
    body.strokeStyle = "#ffd633";
    body.lineWidth = size/15;
    body.stroke();
    
    
    // Wings
    
    body.beginPath();
    body.moveTo(0, size-size/3.75); // bottom-left
    body.lineTo(size, size-size/3.75); // bottom-right
    body.quadraticCurveTo(size, size/2.5, size/2, size/2.5);
    body.quadraticCurveTo(0, size/2.5, 0, size-size/3.75);
    body.closePath();
    
    body.fillStyle = "#f5f4f8";
    body.fill();
    
    
    // Left wing band
    
    body.beginPath();
    body.moveTo(size/7, size-size/3.75); // bottom-left
    body.lineTo(size/4, size-size/3.75);
    body.lineTo(size/4, size/2.35); // top-right
    body.lineTo(size/7, size/2.1);
    
    body.fillStyle = "#ffd633";
    body.fill();
    
    
    // Right wing band
    
    body.beginPath();
    body.moveTo(size-size/7, size-size/3.75); // bottom-left
    body.lineTo(size-size/4, size-size/3.75);
    body.lineTo(size-size/4, size/2.35); // top-right
    body.lineTo(size-size/7, size/2.1);
    
    body.fillStyle = "#ffd633";
    body.fill();
    
    
    // Body of ship
    
    body.beginPath();
    body.moveTo(size/2, size/4.25); // Top middle
    body.lineTo(size/2.6, size/4.25);
    body.quadraticCurveTo(size/3, size/3, size/3, size/2);
    body.quadraticCurveTo(size/2.75, size/2+size/4, size/2.25, size-size/5);
    body.lineTo(size-size/2.25, size-size/5);
    body.quadraticCurveTo(size-size/2.75, size/2+size/4, size-size/3, size/2);
    body.quadraticCurveTo(size-size/3, size/3, size-size/2.6, size/4.25);
    body.lineTo(size-size/2.6, size/4.25); // Top Middle
    body.closePath();
    
    // Gradient example!
    var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0.5, "#66b2ff");
    my_gradient.addColorStop(1, "#3390cc");
    body.fillStyle = my_gradient;
    body.fill();
    
    
    // Top of ship
    
    body.beginPath();
    body.arc(size/2, size/3.5, size/8, 1.1 * Math.PI, 1.9 * Math.PI, false);
    body.closePath();
    
    body.fillStyle = "#ffd633";
    body.fill();
    
    
    // Window
    
    body.beginPath();
    body.arc(size/2, size/2, size/15, 0, Math.PI*2, false);
    body.closePath();
    
    body.fillStyle = "#fff";
    body.strokeStyle = "#2b8cee";
    body.lineWidth = size/15;
    body.stroke();
    body.fill();
    
}