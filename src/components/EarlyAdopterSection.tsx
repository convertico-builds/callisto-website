"use client";

const legacyStack = [
  "CRM built for generic sales teams",
  "Trader data spread across 4+ tools",
  "Marketing attribution is guesswork",
  "KYC handled manually or via disconnected provider",
  "IB management runs on spreadsheets",
  "6-month wait for any new integration",
  "No WhatsApp or Telegram sequences",
  "AI means a chatbot widget in the corner",
];

const callistoStack = [
  "AI-native from the ground up for FX/CFD",
  "Unified trader view across every touchpoint",
  "Full-funnel attribution to deposit level",
  "Automated KYC pipeline with eKYC sync",
  "IB network managed in real time",
  "Integrations ship in days",
  "WhatsApp and Telegram built in as primary channels",
  "Four AI agents working your revenue 24/7",
];

export default function EarlyAdopterSection() {
  return (
    <section
      className="section"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(180deg, rgba(91,143,255,0.04) 0%, transparent 100%)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">The Adoption Curve</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
            Innovators are already moving.
          </h2>
          <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: 600, margin: "1rem auto 0" }}>
            The brokerage industry is crossing a threshold. The operators who move now
            lock in a structural advantage before the incumbents catch up.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 60px 1fr",
            gap: 0,
            alignItems: "stretch",
          }}
        >
          {/* Legacy side */}
          <div
            style={{
              borderRadius: "12px 0 0 12px",
              border: "1px solid rgba(255,80,80,0.1)",
              borderRight: "none",
              background: "rgba(255,60,60,0.03)",
              padding: "2rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c44444",
                marginBottom: "0.5rem",
              }}
            >
              Before
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "1.05rem",
                color: "#9a7070",
                marginBottom: "1.5rem",
              }}
            >
              Legacy CRM-First Stack
            </div>
            <ul className="rock-list">
              {legacyStack.map((item) => (
                <li key={item} style={{ color: "#7a6060" }}>
                  <span style={{ color: "#c44", filter: "none" }}>◈</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow divider */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--bg-2)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent), rgba(91,143,255,0.4))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(91,143,255,0.4)",
                fontSize: "1rem",
                color: "#fff",
              }}
            >
              →
            </div>
          </div>

          {/* Callisto side */}
          <div
            style={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid rgba(91,143,255,0.15)",
              borderLeft: "none",
              background: "rgba(91,143,255,0.05)",
              padding: "2rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "0.5rem",
              }}
            >
              After
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "1.05rem",
                color: "var(--white)",
                marginBottom: "1.5rem",
              }}
            >
              Callisto Unified Revenue System
            </div>
            <ul className="rock-list">
              {callistoStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Adoption curve callout */}
        <div
          className="glass"
          style={{
            marginTop: "2.5rem",
            padding: "1.75rem 2rem",
            borderColor: "rgba(91,143,255,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #7aa8ff, #1a3a8f)",
              boxShadow: "0 0 24px rgba(91,143,255,0.4)",
              flexShrink: 0,
            }}
          />
          <p style={{ color: "#bcc4df", flex: 1, fontSize: "0.95rem", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--white)", display: "block", marginBottom: "0.25rem" }}>
              Innovators adopt. Laggards react.
            </strong>
            The brokerage operators who move to unified AI revenue systems now will have
            18–24 months of compounding advantage before the market normalises.
            The window is open. Not for long.
          </p>
          <a href="#watch-demo" className="btn-cta" style={{ flexShrink: 0 }}>
            I&apos;m Ready to Move
          </a>
        </div>
      </div>
    </section>
  );
}
