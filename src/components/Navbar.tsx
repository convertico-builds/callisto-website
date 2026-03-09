"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "1rem",
        left: "1rem",
        right: "1rem",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.8rem 1.25rem",
        background: "rgba(2,3,14,0.82)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "radial-gradient(circle at 32% 32%, #7aa8ffcc, #1a3a8f88)",
            boxShadow: "0 0 16px rgba(79,127,255,0.5)",
            flexShrink: 0,
            animation: "float 4s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "-0.025em",
            color: "var(--white)",
          }}
        >
          Callisto
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            color: "var(--accent-light)",
            border: "1px solid rgba(79,127,255,0.3)",
            borderRadius: "4px",
            padding: "1px 6px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          AI RevOS
        </span>
      </div>

      {/* Nav links — desktop */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "var(--muted)",
        }}
      >
        {[
          ["Outcomes", "#outcomes"],
          ["Features", "#features"],
          ["Agents", "#agents"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--white)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#watch-demo"
        className="btn-cta"
        style={{ fontSize: "0.82rem", padding: "0.6rem 1.35rem" }}
      >
        Watch the Demo
      </a>
    </nav>
  );
}
