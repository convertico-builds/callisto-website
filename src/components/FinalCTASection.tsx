"use client";

export default function FinalCTASection() {
  return (
    <section
      className="section"
      id="final-cta"
      style={{
        borderTop: "1px solid var(--border)",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Nebula bookend — mirrors Hero but upside down (bottom glow) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/space-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          zIndex: 0,
          transform: "scaleY(-1)",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(180deg,
              rgba(2,3,14,0.95) 0%,
              rgba(2,3,14,0.6) 50%,
              rgba(2,3,14,0.85) 100%
            ),
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(79,127,255,0.15) 0%, transparent 65%)
          `,
          zIndex: 1,
        }}
      />

      <div className="container-narrow" style={{ position: "relative", zIndex: 2 }}>
        {/* Eyebrow — mirrors hero (reflect.app bookend) */}
        <div className="eyebrow" style={{ justifyContent: "center" }}>The Decision</div>

        {/* H2 mirrors H1 treatment — large, gradient */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            marginBottom: "1.5rem",
            background: "linear-gradient(160deg, #ffffff 20%, #7aa8ff 60%, #4f7fff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 60px rgba(79,127,255,0.3))",
          }}
        >
          The Brokers Who
          <br />
          Move First Win
        </h2>

        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "var(--muted)",
            marginBottom: "2.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          The only question is whether you lead it or chase it
        </p>

        <a href="#watch-demo" className="btn-cta" style={{ fontSize: "1.05rem", padding: "1.1rem 2.75rem" }}>
          Watch the Demo
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
            <path d="M7.5 6L11.5 9L7.5 12V6Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
