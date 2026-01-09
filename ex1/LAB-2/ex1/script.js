// 1. Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 2. Draw a filled rectangle
ctx.fillStyle = 'royalblue';
ctx.fillRect(50, 50, 150, 80); // x, y, width, height

// 3. Draw a filled circle
ctx.beginPath();
ctx.arc(350, 90, 40, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = 'tomato';
ctx.fill();

// 4. Draw a straight line
ctx.beginPath();
ctx.moveTo(50, 200);  // Starting point
ctx.lineTo(450, 200); // Ending point
ctx.strokeStyle = '#333';
ctx.lineWidth = 5;
ctx.stroke();

// 5. Display text
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.textAlign = 'center';
ctx.fillText('HTML5 Canvas', canvas.width / 2, 260); // text, x, y
