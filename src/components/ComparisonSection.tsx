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

        {/* Column headers — self-contained, no global class dependency */}
        <div className="cs-row" style={{ marginBottom: "0.5rem" }}>
          <div
            style={{
              padding: "0.65rem clamp(1rem, 3vw, 2rem)",
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
              padding: "0.65rem clamp(1rem, 3vw, 2rem)",
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

        {/* Comparison rows — self-contained styles */}
        {rows.map((row, i) => (
          <div key={i} className="cs-row" style={{ marginBottom: "2px" }}>
            {/* Legacy (left/top) cell */}
            <div
              style={{
                padding: "clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 2rem)",
                background: "rgba(220,50,50,0.03)",
                border: "1px solid rgba(220,60,60,0.1)",
                borderRadius:
                  i === 0
                    ? "12px 12px 0 0"
                    : i === rows.length - 1
                    ? "0 0 0 12px"
                    : "0",
                borderBottom: i === rows.length - 1 ? undefined : "none",
              }}
              className="cs-left"
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

            {/* Callisto (right/bottom) cell */}
            <div
              style={{
                padding: "clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 2rem)",
                background: "rgba(79,127,255,0.04)",
                border: "1px solid rgba(79,127,255,0.14)",
                borderRadius:
                  i === 0
                    ? "0 12px 0 0"
                    : i === rows.length - 1
                    ? "0 0 12px 12px"
                    : "0",
                borderBottom: i === rows.length - 1 ? undefined : "none",
                borderLeft: "none",
              }}
              className="cs-right"
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

      {/* Scoped responsive styles — no global class pollution */}
      <style>{`
        .cs-row {
          display: grid;
          grid-template-columns: 1fr;
        }
        /* Mobile: stack cells, restore borders and radii */
        .cs-left {
          border-bottom: none !important;
          border-radius: 0 !important;
        }
        .cs-right {
          border-left: 1px solid rgba(79,127,255,0.14) !important;
          border-top: none !important;
          border-radius: 0 !important;
        }
        /* First row mobile top corners */
        .cs-row:first-of-type .cs-left  { border-radius: 12px 12px 0 0 !important; }
        .cs-row:first-of-type .cs-right { border-radius: 0 !important; }
        /* Last row mobile bottom corners */
        .cs-row:last-of-type .cs-left  { border-bottom: 1px solid rgba(220,60,60,0.1) !important; border-radius: 0 !important; }
        .cs-row:last-of-type .cs-right { border-bottom: 1px solid rgba(79,127,255,0.14) !important; border-radius: 0 0 12px 12px !important; }

        /* Tablet and up: side-by-side 2-col */
        @media (min-width: 640px) {
          .cs-row { grid-template-columns: 1fr 1fr; }
          .cs-left  { border-right: none !important; border-bottom: none !important; }
          .cs-right { border-left: none !important; border-top: unset !important; }

          /* First row desktop corners */
          .cs-row:first-of-type .cs-left  { border-radius: 12px 0 0 0 !important; }
          .cs-row:first-of-type .cs-right { border-radius: 0 12px 0 0 !important; border-left: none !important; }
          /* Last row desktop corners */
          .cs-row:last-of-type .cs-left  { border-bottom: 1px solid rgba(220,60,60,0.1) !important; border-radius: 0 0 0 12px !important; }
          .cs-row:last-of-type .cs-right { border-bottom: 1px solid rgba(79,127,255,0.14) !important; border-radius: 0 0 12px 0 !important; border-left: none !important; }
        }
      `}</style>
    </section>
  );
}
