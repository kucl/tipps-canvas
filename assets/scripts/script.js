window.onload = function()
{    
    var c = document.getElementById("main");
    ctx = c.getContext("2d");

    // 1-0: GRAPHICS
    // draw(); // Uncomment this, then recomment

    // 2-0: EXTERNAL GRAPHICS MANIPULATION
    // drawBitmap(); // Uncomment this, then recomment
    
    // 3-0: ANIMATION
    // animate(); // Uncomment this

    // 4-0: INTERACTION
    // Make sure animate() is uncommented
    // Go back to your spaceship drawing function (or mine)
    // and apply the "colour" variable appropriately
    window.addEventListener("keydown", onKeyDown, false);

} // window.onload



// Let's create a draw function for the canvas
function draw()
{    
    // 1-2: My spaceship is drawn facing up, so I want it to face right
    // ctx.translate(150,0);
    // ctx.rotate(90*Math.PI/180);
    
    // 1-1: Complete the drawSpaceShip() function
    drawSpaceShip();
    // Or cheat and use mine:
    // drawKatiesSpaceShip();

    // 1-2: Add a background
    // Can you figure out how?
    // Hint: You may need to do this before drawing the spaceship ...
}



// Let's try external graphics manipulation
function drawBitmap()
{
    // 2-1: Load in and draw the image
    var img = new Image();
    img.onload = function () {
        // What happens if you set the first two parameters to 100, 100 ?
        // What happens if you set the next two to 100,100 ?
        // Can you figure out how to crop the image?
        ctx.drawImage(img, 0, 0);
    }
    img.src = "assets/images/potter.jpg"; // Or image of your choosing

    // 2-2: Apply a filter
    // Some example functions: blur(<len>), grayscale(%), sepia(%)
    // ctx.filter = "contrast(25)";

    // 2-3: Apply a transformation
    // ctx.transform(1,1,0,1,0,0);
    // What happens when you change these values?
}


var flipped = 0;
var xOrig = 0; // Make sure this is the true origin of your drawing
var colour = "black";

// Let's animate!
function animate()
{    
    // Always clear the canvas after drawing each frame
    // Why is it 640, 480?
    ctx.clearRect(0, 0, 640, 480);
    
    // Draw here:
    drawSpaceShip();
    
    // Move it
    ctx.translate(0, xOrig+2);
    // BUT, if using my spaceship, reverse b/c of transformations
    // ctx.translate(0, xOrig-2); 
    
    // This will run animate() every 33 ms
    setTimeout(animate, 33);

    // 3-1: Boundary detection
    // Can you figure out how to send the spaceship back the way it came 
    // when it hits either edge?
    // Hint: Based on the x position of the object and the w of the canvas
}


// Interact with keyboard press
function onKeyDown(e)
{
    if ( e.keyCode == 32 ) { // Space bar
        if ( colour == "black" )
            colour = "cyan";
        else
            colour = "black";
    }
}


// Draw your own awesome spaceship
function drawSpaceShip()
{
    // 1-1: Use vector drawing methods to create a ship
    // Here's some key drawing methods and properties from the API:

    ctx.beginPath();

    // ctx.arc()
    // ctx.rect, ctx.fillRect()
    // ctx.moveTo(), ctx.lineTo()

    // ctx.fillStyle, ctx.fill()
    // ctx.strokeStyle, ctx.stroke()

    // 1-2: Can you create any of thse?
    // Half-circle or pie slice
    // Shape drawn with a path, e.g., triangle
    // A diamond or star

    // 1-3: Can you figure out how to apply gradients?

    // You can cheeat and use mine:
    // drawKatiesSpaceShip();

    ctx.closePath();

    // 4-1: Change colour on keypress
    // Use the "colour" variable
    // Note: You may need to do this elsewhere ...
}


// Draw Katie's awesome spaceship
function drawKatiesSpaceShip()
{
    // Draw ship base
    var body = ctx;
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


    // Face right

    if ( flipped == 0 ) {
        ctx.translate(150+xOrig,0);
        ctx.rotate(90*Math.PI/180);

        flipped = 1;
    }
    
}