"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Stars
    const NUM_STARS = 260;
    const stars: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random(),
        speed: Math.random() * 0.004 + 0.001,
      });
    }

    // Shooting asteroids
    const asteroids: {
      x: number; y: number; vx: number; vy: number;
      len: number; alpha: number; alive: boolean;
    }[] = [];

    const spawnAsteroid = () => {
      const side = Math.random();
      let x, y, vx, vy;
      if (side < 0.5) {
        x = Math.random() * canvas.width;
        y = -10;
        vx = (Math.random() - 0.5) * 4;
        vy = Math.random() * 3 + 2;
      } else {
        x = -10;
        y = Math.random() * canvas.height;
        vx = Math.random() * 3 + 2;
        vy = (Math.random() - 0.5) * 4;
      }
      asteroids.push({ x, y, vx, vy, len: Math.random() * 80 + 40, alpha: 0.7, alive: true });
    };

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Twinkling stars
      stars.forEach((s) => {
        s.alpha += s.speed;
        const a = Math.abs(Math.sin(s.alpha));
        ctx.save();
        ctx.globalAlpha = a * 0.8 + 0.1;
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 3;
        ctx.shadowColor = "#aac0ff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Shooting asteroids
      if (frame % 220 === 0) spawnAsteroid();
      asteroids.forEach((a) => {
        if (!a.alive) return;
        a.x += a.vx;
        a.y += a.vy;
        a.alpha -= 0.01;
        if (a.alpha <= 0 || a.x > canvas.width + 50 || a.y > canvas.height + 50) {
          a.alive = false;
          return;
        }
        const angle = Math.atan2(a.vy, a.vx);
        ctx.save();
        ctx.globalAlpha = a.alpha;
        const grad = ctx.createLinearGradient(
          a.x - Math.cos(angle) * a.len, a.y - Math.sin(angle) * a.len,
          a.x, a.y
        );
        grad.addColorStop(0, "rgba(79,127,255,0)");
        grad.addColorStop(0.5, "rgba(130,180,255,0.4)");
        grad.addColorStop(1, "rgba(220,235,255,0.9)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(a.x - Math.cos(angle) * a.len, a.y - Math.sin(angle) * a.len);
        ctx.lineTo(a.x, a.y);
        ctx.stroke();
        ctx.restore();
      });

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <>
      {/* Static nebula background image */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/space-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.22,
        }}
      />
      {/* Dark overlay so the nebula stays subtle */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: "var(--bg)",
          opacity: 0.78,
        }}
      />
      {/* Animated star canvas */}
      <canvas
        ref={canvasRef}
        id="star-field"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
