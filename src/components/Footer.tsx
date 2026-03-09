"use client";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        padding: "2.5rem 1.5rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "radial-gradient(circle at 32% 32%, #7aa8ffcc, #1a3a8f88)",
                boxShadow: "0 0 12px rgba(79,127,255,0.4)",
              }}
            />
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem" }}>Callisto</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted-2)", letterSpacing: "0.06em" }}>by Jupiter Tech</span>
          </div>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted-2)", letterSpacing: "0.08em", textAlign: "center" }}>
            Unified AI Revenue System · CFD & FX Brokerages
          </p>

          <a href="#watch-demo" className="btn-cta" style={{ fontSize: "0.8rem", padding: "0.55rem 1.2rem" }}>
            Watch the Demo
          </a>
        </div>

        <div
          style={{
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted-2)" }}>
            © {new Date().getFullYear()} Jupiter Tech. All rights reserved.
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted-2)" }}>
            Velocity · Signal · Oracle · Horizon
          </span>
        </div>
      </div>
    </footer>
  );
}
