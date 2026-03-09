"use client";

const legacyPains = [
  "6-month dev queues for simple integrations",
  "Ad spend disappears into unattributed deposits",
  "Trader data siloed across 4+ disconnected tools",
  "Manual KYC creates compliance lag and churn",
  "Your IB network runs on spreadsheets and gut feel",
  "No real-time view of revenue by source, channel, or desk",
];

const callistoWins = [
  "Integrations ship in days, not quarters",
  "Every deposit traced back to its first-touch attribution",
  "Unified trader lifecycle from lead → deposit → LTV",
  "AI-automated KYC pipeline with eKYC provider sync",
  "IB management built-in — real-time commission and volume",
  "Live revenue operating dashboard across every channel",
];

export default function ProblemSection() {
  return (
    <section
      className="section"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(180deg, transparent 0%, rgba(91,143,255,0.04) 50%, transparent 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">The Problem</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
            Legacy stacks are a{" "}
            <span style={{ color: "var(--accent)" }}>revenue liability.</span>
          </h2>
          <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: 560, margin: "1rem auto 0" }}>
            The incumbent CRM vendors were built for generic sales teams.
            You run a brokerage. The mismatch is costing you deposits every day.
          </p>
        </div>

        {/* Comparison grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "0",
            alignItems: "stretch",
          }}
        >
          {/* Legacy column */}
          <div
            className="glass"
            style={{
              padding: "2rem",
              borderRadius: "12px 0 0 12px",
              borderRight: "none",
              background: "rgba(255,60,60,0.04)",
              borderColor: "rgba(255,80,80,0.12)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#e05555",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>✕</span> Legacy CRM Stack
            </div>
            <ul className="rock-list">
              {legacyPains.map((p) => (
                <li key={p} style={{ color: "#8a7070" }}>
                  <span style={{ color: "#c44", marginTop: "0.2rem" }}>◈</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* VS divider */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 1.5rem",
              position: "relative",
            }}
          >
            <div
              style={{
                width: 1,
                flex: 1,
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)",
              }}
            />
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--bg)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--muted)",
                flexShrink: 0,
                margin: "1rem 0",
              }}
            >
              VS
            </div>
            <div
              style={{
                width: 1,
                flex: 1,
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)",
              }}
            />
          </div>

          {/* Callisto column */}
          <div
            className="glass"
            style={{
              padding: "2rem",
              borderRadius: "0 12px 12px 0",
              borderLeft: "none",
              background: "rgba(91,143,255,0.05)",
              borderColor: "rgba(91,143,255,0.18)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>✓</span> Callisto RevOS
            </div>
            <ul className="rock-list">
              {callistoWins.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#watch-demo" className="btn-cta">See It in Action</a>
        </div>
      </div>
    </section>
  );
}
