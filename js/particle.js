const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const textElement = document.querySelector(".frame1-text .date");
const text = textElement.textContent;  // Use the text inside the span
const fontSize = 40;  // Font size remains 40px
const particleSize = 1.5;  // Smaller dot size
const particles = [];

// Function to create the text map and generate particles
function createTextMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    for (let y = 0; y < canvas.height; y += 4) { 
        for (let x = 0; x < canvas.width; x += 4) { 
            const index = (y * canvas.width + x) * 4;
            if (imageData[index + 3] > 128) { 
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    targetX: x,
                    targetY: y,
                    vx: 0, 
                    vy: 0, 
                    radius: particleSize,
                });
            }
        }
    }
}

// Function to animate particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let particle of particles) {
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        particle.vx += dx * 0.02; 
        particle.vy += dy * 0.02; 
        particle.vx *= 0.92; 
        particle.vy *= 0.92; 

        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    requestAnimationFrame(animateParticles);
}

createTextMap();
animateParticles();
