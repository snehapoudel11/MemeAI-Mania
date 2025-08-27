class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#00f3ff', '#0066ff', '#ff00f7'];
        this.init();
    }
    
    init() {
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
        
        // Create particles
        for(let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5,
                color: this.colors[Math.floor(Math.random() * this.colors.length)]
            });
        }
        
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        for(let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Wrap around screen
            if(p.x > this.canvas.width) p.x = 0;
            if(p.x < 0) p.x = this.canvas.width;
            if(p.y > this.canvas.height) p.y = 0;
            if(p.y < 0) p.y = this.canvas.height;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = 0.8;
            this.ctx.fill();
        }
        
        // Connect particles
        for(let a = 0; a < this.particles.length; a++) {
            for(let b = a; b < this.particles.length; b++) {
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if(distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = 'rgba(0, 243, 255, 0.2)';
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

// Initialize particle background if canvas exists
const canvas = document.getElementById('particle-canvas');
if(canvas) {
    new Particle(canvas);
}