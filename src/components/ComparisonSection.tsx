"use client";

const rows = [
  {
    left: {
      title: "Contact Tracking Not Revenue",
      body: "Built to store leads and activities, not to drive deposits, first trades, and long term value.",
    },
    right: {
      title: "Unified AI Revenue System",
      body: "Built to run the full revenue lifecycle from acquisition to deposit to retention, not just manage contacts.",
    },
  },
  {
    left: {
      title: "Patchwork Stack Chaos",
      body: "You end up stitching together tools, which creates silos, blind spots, and inconsistent reporting.",
    },
    right: {
      title: "One Platform, One Source Of Truth",
      body: "CRM, marketing, messaging, funding, reporting, compliance, and AI agents unified inside one connected system.",
    },
  },
  {
    left: {
      title: "Email First Engagement",
      body: "Most CRMs push email workflows, which underperform in WhatsApp dominant markets where messaging gets seen fast.",
    },
    right: {
      title: "Real Attribution From Click To Trade",
      body: "See exactly what drives signup, KYC, deposit, first trade, and long term value so you can scale with confidence.",
    },
  },
  {
    left: {
      title: "Manual Follow Up Means Lost Money",
      body: "When follow up relies on humans, leads go cold and conversion drops hard with every delay.",
    },
    right: {
      title: "Messenger Native Lifecycle Automation",
      body: "WhatsApp and Telegram powered engagement supported by email and SMS so your traders respond faster and convert more.",
    },
  },
  {
    left: {
      title: "Slow Changes, Slow Growth",
      body: "Basic improvements often get stuck in dev queues, integrations break, and teams lose speed trying to keep systems in sync.",
    },
    right: {
      title: "AI Driven Decisions In Real Time",
      body: "Ask your revenue system questions, surface what is broken, prioritise what matters, and act instantly instead of guessing.",
    },
  },
];

export default function ComparisonSection() {
  return (
    <section
      className="section"
      id="problem"
      style={{
        borderTop: "1px solid var(--border)",
        background: "linear-gradient(180deg, transparent 0%, rgba(79,127,255,0.03) 50%, transparent 100%)",
      }}
    >
      <div className="container-narrow">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>The Problem</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              marginBottom: "1rem",
            }}
          >
            Still Managing Contacts Instead of
            <br />
            <span className="grad-text">Engineering Revenue?</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
            CRMs were built to record data, not drive deposits, accelerate first
            trades, or increase lifetime value
          </p>
        </div>

        {/* Column headers */}
        <div className="compare-row" style={{ marginBottom: "0.5rem" }}>
          <div
            style={{
              padding: "0.65rem 2rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c44",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>✕</span> Traditional CRMs
          </div>
          <div
            style={{
              padding: "0.65rem 2rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>✓</span> Callisto
          </div>
        </div>

        {/* Comparison rows */}
        {rows.map((row, i) => (
          <div key={i} className="compare-row" style={{ marginBottom: "2px" }}>
            <div
              className="compare-col-left"
              style={{ borderTopLeftRadius: i === 0 ? 12 : 0, borderBottomLeftRadius: i === rows.length - 1 ? 12 : 0 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  color: "#c88",
                  marginBottom: "0.4rem",
                }}
              >
                {row.left.title}
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>{row.left.body}</p>
            </div>
            <div
              className="compare-col-right"
              style={{ borderTopRightRadius: i === 0 ? 12 : 0, borderBottomRightRadius: i === rows.length - 1 ? 12 : 0 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  color: "var(--accent-light)",
                  marginBottom: "0.4rem",
                }}
              >
                {row.right.title}
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--off-white)", lineHeight: 1.6 }}>{row.right.body}</p>
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#watch-demo" className="btn-cta">Watch the Demo</a>
        </div>
      </div>
    </section>
  );
}
