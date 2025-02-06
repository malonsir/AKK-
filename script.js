document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const container = document.querySelector(".container");
    const musicBtn = document.getElementById("music-btn");
    const bgMusic = document.getElementById("bg-music");

    links.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            container.style.transform = `translateX(-${index * 100}vw) rotateY(${index * -10}deg)`;
        });
    });

    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = "🔇 Pause Music";
        } else {
            bgMusic.pause();
            musicBtn.textContent = "🎵 Play Music";
        }
    });

    function updateCountdown() {
        let eventDate = new Date("Feb 20, 2025 18:00:00").getTime();
        let now = new Date().getTime();
        let timeLeft = eventDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m`;
    }

    setInterval(updateCountdown, 1000);
});

// Background Particles Animation
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

animateParticles();
