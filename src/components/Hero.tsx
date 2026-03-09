"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const orbitRef = useRef<HTMLDivElement>(null);

  // Slow CSS rotation handled via keyframe — no JS needed
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "clamp(7rem, 22vw, 9rem)",
        paddingBottom: "clamp(4rem, 10vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Nebula background ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/space-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          opacity: 0.55,
          zIndex: 0,
        }}
      />

      {/* ── Gradient overlays ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(180deg,
              rgba(2,3,14,0.3)  0%,
              rgba(2,3,14,0.08) 30%,
              rgba(2,3,14,0.5)  72%,
              rgba(2,3,14,0.96) 100%
            ),
            radial-gradient(ellipse 80% 55% at 50% 8%, rgba(79,127,255,0.12) 0%, transparent 60%)
          `,
          zIndex: 1,
        }}
      />

      {/* ── Floating orbital visual (top-right decoration) ─────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(5rem, 12vw, 8rem)",
          right: "clamp(-3rem, -4vw, -1rem)",
          width: "clamp(180px, 38vw, 420px)",
          height: "clamp(180px, 38vw, 420px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* Core Jupiter orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(48px, 10vw, 90px)",
            height: "clamp(48px, 10vw, 90px)",
            borderRadius: "50%",
            background: "radial-gradient(circle at 33% 30%, #c8882a, #8a5010 50%, #3a1800 100%)",
            boxShadow: "0 0 40px rgba(200,136,42,0.5), 0 0 80px rgba(200,136,42,0.15)",
            animation: "spin-slow 60s linear infinite",
            zIndex: 2,
          }}
        />

        {/* Orbit ring 1 */}
        <div
          style={{
            position: "absolute",
            inset: "8%",
            borderRadius: "50%",
            border: "1px solid rgba(79,127,255,0.12)",
            animation: "spin-slow 22s linear infinite",
          }}
        >
          {/* Moon 1 */}
          <div
            style={{
              position: "absolute",
              top: "-5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(8px,1.6vw,14px)",
              height: "clamp(8px,1.6vw,14px)",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #a8c8e8, #5080a8)",
              boxShadow: "0 0 10px rgba(168,200,232,0.6)",
            }}
          />
        </div>

        {/* Orbit ring 2 */}
        <div
          style={{
            position: "absolute",
            inset: "22%",
            borderRadius: "50%",
            border: "1px solid rgba(168,85,247,0.1)",
            animation: "spin-slow 14s linear infinite reverse",
          }}
        >
          {/* Moon 2 */}
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(6px,1.2vw,11px)",
              height: "clamp(6px,1.2vw,11px)",
              borderRadius: "50%",
              background: "radial-gradient(circle at 33% 33%, #e89240, #a05010)",
              boxShadow: "0 0 10px rgba(232,146,64,0.6)",
            }}
          />
        </div>

        {/* Orbit ring 3 */}
        <div
          style={{
            position: "absolute",
            inset: "35%",
            borderRadius: "50%",
            border: "1px solid rgba(34,211,238,0.1)",
            animation: "spin-slow 9s linear infinite",
          }}
        >
          {/* Moon 3 */}
          <div
            style={{
              position: "absolute",
              top: "-3px",
              right: "10%",
              width: "clamp(5px,1vw,9px)",
              height: "clamp(5px,1vw,9px)",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #80ffe0, #00a870)",
              boxShadow: "0 0 8px rgba(0,212,170,0.6)",
            }}
          />
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "min(760px, 92vw)",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
        }}
      >
        {/* Floating badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            background: "rgba(79,127,255,0.1)",
            border: "1px solid rgba(79,127,255,0.28)",
            borderRadius: "100px",
            padding: "0.35rem 0.9rem",
            marginBottom: "clamp(1.25rem, 4vw, 2rem)",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.6rem, 1.5vw, 0.72rem)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent-light)",
            animation: "pulse-glow 3s ease-in-out infinite",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent-light)",
              boxShadow: "0 0 6px var(--accent-light)",
              display: "inline-block",
            }}
          />
          AI Revenue OS · Now Live
        </div>

        {/* Giant wordmark — two lines on mobile, one on desktop */}
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(4.2rem, 20vw, 13rem)",
            letterSpacing: "-0.045em",
            lineHeight: 0.88,
            marginBottom: "0.3em",
            background: "linear-gradient(160deg, #ffffff 25%, #9fc3ff 62%, #4f7fff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 60px rgba(79,127,255,0.3)) drop-shadow(0 0 18px rgba(79,127,255,0.18))",
          }}
        >
          Callisto
        </h1>

        {/* Sub-wordmark line */}
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(1rem, 4.5vw, 2rem)",
            letterSpacing: "-0.025em",
            color: "rgba(200,210,255,0.55)",
            marginBottom: "clamp(1rem, 4vw, 1.75rem)",
            lineHeight: 1,
          }}
        >
          Revenue OS
        </div>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(1rem, 2.8vw, 1.4rem)",
            color: "var(--off-white)",
            letterSpacing: "-0.01em",
            marginBottom: "clamp(0.75rem, 2vw, 1rem)",
            lineHeight: 1.35,
          }}
        >
          The Unified AI Revenue System For Brokers
        </p>

        {/* Body copy */}
        <p
          style={{
            fontSize: "clamp(0.88rem, 1.8vw, 1rem)",
            color: "var(--muted)",
            maxWidth: 540,
            margin: "0 auto clamp(2rem, 5vw, 2.75rem)",
            lineHeight: 1.8,
          }}
        >
          Everything your brokerage needs to acquire, convert, deposit,
          retain, and scale — unified inside one AI-driven revenue engine.
        </p>

        {/* CTA row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.85rem",
          }}
        >
          <a
            href="#watch-demo"
            className="btn-cta"
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              padding: "clamp(0.85rem, 2.5vw, 1rem) clamp(1.75rem, 5vw, 2.5rem)",
              width: "100%",
              maxWidth: 360,
              justifyContent: "center",
            }}
          >
            Watch the Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
              <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor" />
            </svg>
          </a>

          <a
            href="#pricing"
            className="btn-ghost"
            style={{
              fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)",
              padding: "clamp(0.75rem, 2vw, 0.85rem) clamp(1.5rem, 4vw, 2rem)",
              width: "100%",
              maxWidth: 360,
              justifyContent: "center",
            }}
          >
            See Pricing
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Trust signal pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "clamp(1.5rem, 4vw, 2.25rem)",
          }}
        >
          {["No fixed-term contract", "Live in 10 days", "$2k / month flat"].map((pill) => (
            <span
              key={pill}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.58rem, 1.2vw, 0.66rem)",
                letterSpacing: "0.08em",
                color: "var(--muted)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "100px",
                padding: "0.3rem 0.8rem",
              }}
            >
              ◈ {pill}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll hint ────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "clamp(1.5rem, 4vw, 2.5rem)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.35rem",
          opacity: 0.35,
          animation: "float 2.8s ease-in-out infinite",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 24,
            background: "linear-gradient(180deg, var(--muted), transparent)",
          }}
        />
      </div>
    </section>
  );
}
