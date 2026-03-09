"use client";

export default function Hero() {
  return (
    <section
      className="section"
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "9rem",
        paddingBottom: "6rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cinematic nebula background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/space-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      {/* Dark overlay — keeps text crisp, fades bottom to dark */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(180deg,
              rgba(2,3,14,0.25) 0%,
              rgba(2,3,14,0.1) 35%,
              rgba(2,3,14,0.55) 75%,
              rgba(2,3,14,0.92) 100%
            ),
            radial-gradient(ellipse 90% 60% at 50% 10%, rgba(79,127,255,0.1) 0%, transparent 65%)
          `,
          zIndex: 1,
        }}
      />

      {/* Content — sits above the background layers */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Eyebrow — reflect.app pattern */}
        <div className="eyebrow">Welcome to the Future of Revenue</div>

        {/* Giant H1 — the word IS the design */}
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "clamp(5rem, 18vw, 14rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            marginBottom: "1.5rem",
            background: "linear-gradient(160deg, #ffffff 30%, #7aa8ff 70%, #4f7fff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 80px rgba(79,127,255,0.35)) drop-shadow(0 0 20px rgba(79,127,255,0.2))",
          }}
        >
          Callisto
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "var(--off-white)",
            letterSpacing: "-0.01em",
            marginBottom: "1.25rem",
            maxWidth: 640,
            margin: "0 auto 1.25rem",
          }}
        >
          The Unified AI Revenue System For Brokers
        </p>

        {/* Body */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            color: "var(--muted)",
            maxWidth: 580,
            margin: "0 auto 2.75rem",
            lineHeight: 1.75,
          }}
        >
          Everything your brokerage needs to acquire, convert, deposit, retain, and
          scale — unified inside one AI driven revenue engine
        </p>

        {/* CTA */}
        <a href="#watch-demo" className="btn-cta" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
          Watch the Demo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
            <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor"/>
          </svg>
        </a>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          opacity: 0.4,
          animation: "float 2.5s ease-in-out infinite",
          zIndex: 2,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>Scroll</span>
        <div style={{ width: 1, height: 28, background: "linear-gradient(180deg, var(--muted), transparent)" }} />
      </div>
    </section>
  );
}
