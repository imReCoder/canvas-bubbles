const bubbleColors = [
    'rgba(173, 216, 230, 0.5)', // Light blue
    'rgba(135, 206, 250, 0.5)', // Sky blue
    'rgba(240, 248, 255, 0.5)', // Alice blue
    'rgba(224, 255, 255, 0.5)', // Light cyan
    'rgba(176, 224, 230, 0.5)'  // Powder blue
];

export class BubbleParticle{
    constructor(canvas,position){
        this.canvas = canvas;
        this.x = position.x || Math.random() * canvas.width;
        this.y = position.y || canvas.height + Math.random() * 100;
        this.radius = Math.random() * 20 + 20;
        this.speedX = Math.random() * 2 + 1;
        this.speedY = Math.random() * 2 + 1;
        // random color bubbles
        this.color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
    }

    update(){
        // Move the bubble particle
        this.x += this.speedX;
        this.y -= this.speedY;
        // Reset the bubble particle if it goes off screen
        if (this.y < -this.radius || this.x > this.canvas.width + this.radius || this.x < -this.radius) {
            this.reset();
        }
    }

    reset(){
        this.x = Math.random() * this.canvas.width;
        this.y = this.canvas.height + Math.random() * 100;
        this.radius = Math.random() * 20 + 10;
        this.speed = Math.random() * 2 + 1;
        this.color = `rgba(173, 216, 230, ${Math.random()})`;
    }
}