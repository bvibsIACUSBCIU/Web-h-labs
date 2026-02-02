import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    z: number;
    baseX: number;
    baseY: number;
    baseZ: number;
}

const ParticleSphere = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let rotation = 0;

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            particles = [];
            const particleCount = 800; // Number of particles
            const radius = Math.min(canvas.width, canvas.height) * 0.35; // Size relative to screen

            for (let i = 0; i < particleCount; i++) {
                // Spherical distribution using Fibonacci lattice for even spread
                const phi = Math.acos(-1 + (2 * i) / particleCount);
                const theta = Math.sqrt(particleCount * Math.PI) * phi;

                const x = radius * Math.cos(theta) * Math.sin(phi);
                const y = radius * Math.sin(theta) * Math.sin(phi);
                const z = radius * Math.cos(phi);

                particles.push({
                    x, y, z,
                    baseX: x, baseY: y, baseZ: z
                });
            }
        };

        const draw = () => {
            // Clear with slight fade effect if desired, or full clear
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Transparent background

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Rotate sphere
            rotation += 0.002;
            const cosRot = Math.cos(rotation);
            const sinRot = Math.sin(rotation);

            particles.forEach(p => {
                // Rotation around Y axis
                let x = p.baseX * cosRot - p.baseZ * sinRot;
                let z = p.baseZ * cosRot + p.baseX * sinRot;

                // Slight Rotation around X axis for tilt
                const tilt = 0.2;
                let y = p.baseY * Math.cos(tilt) - z * Math.sin(tilt);
                z = z * Math.cos(tilt) + p.baseY * Math.sin(tilt);

                // Perspective projection
                const scale = 800 / (800 + z); // Perspective factor
                const screenX = centerX + x * scale;
                const screenY = centerY + y * scale;
                const alpha = Math.max(0.1, (scale - 0.5) * 1.5); // Fade distant particles but keep them slightly visible

                ctx.beginPath();
                ctx.arc(screenX, screenY, scale * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 200, 210, ${alpha * 0.6})`; // Light gray particles
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        init();
        draw();

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.6 }} // Adjust global opacity of the sphere
        />
    );
};

export default ParticleSphere;
