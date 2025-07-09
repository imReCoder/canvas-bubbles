import {BubbleParticle} from './bubbleParticle.js';
import { handleResize } from './resize.js';

const canvaContainer = document.querySelector('.canva-container');
const canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 600;
canvaContainer.appendChild(canvas);

canvas.style.backgroundColor = '#000000FF'; // Dark background for contrast

handleResize(canvas);

const ctx = canvas.getContext('2d');
const particles = [];
const mouse = {
    x: 0,
    y: 0
}

function createParticles(numParticles= 100) {
    for (let i = 0; i < numParticles; i++) {
        particles.push(new BubbleParticle(canvas, mouse));
    }
}

function drawParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    });
    requestAnimationFrame(drawParticles);

}

canvas.addEventListener('click', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    createParticles(10);
})

createParticles(100);
drawParticles();