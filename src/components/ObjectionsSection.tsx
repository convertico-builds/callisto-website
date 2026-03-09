"use client";

const objections = [
  {
    q: "Switching sounds disruptive and risky",
    a: "The real risk is staying on legacy infrastructure while competitors move faster. Callisto is deployed in structured phases with guided rollout, modular activation, and zero operational downtime so your brokerage keeps running while your revenue engine upgrades.",
    color: "#4f7fff",
  },
  {
    q: "We already have a CRM and marketing tools",
    a: "Traditional stacks track contacts and send emails but they do not engineer deposits, accelerate first trades, or unify lifecycle intelligence. Callisto replaces stitched tools with one AI native revenue system so marketing, onboarding, funding, and retention work off the same truth.",
    color: "#00d4aa",
  },
  {
    q: "Is this secure and enterprise ready",
    a: "Callisto runs on enterprise grade AWS infrastructure with encrypted data, role based access control, and full audit trails built for broker environments. Powerful does not mean fragile, it means engineered properly for scale and compliance.",
    color: "#a855f7",
  },
  {
    q: "Will my team actually use it",
    a: "Callisto reduces complexity instead of adding to it. AI agents surface what matters, route high intent leads instantly, and answer revenue questions in plain language so your team spends time converting instead of searching through dashboards.",
    color: "#ff6b35",
  },
  {
    q: "Can we really compete with larger brokers",
    a: "Large brokers are locked into legacy stacks and slow development cycles. Smaller brokers win by moving faster, testing faster, and executing faster, and Callisto gives you the speed infrastructure that giants cannot pivot to overnight.",
    color: "#22d3ee",
  },
];

export default function ObjectionsSection() {
  return (
    <section
      className="section"
      id="objections"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container" style={{ maxWidth: 820 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Common Questions</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
            Scale With Confidence,{" "}
            <span className="grad-text">Not Concern</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {objections.map((obj) => (
            <div
              key={obj.q}
              className="glass"
              style={{
                padding: "1.75rem 2rem",
                borderColor: `${obj.color}15`,
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${obj.color}40`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${obj.color}15`; }}
            >
              <div style={{ display: "flex", gap: "1rem", marginBottom: "0.85rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: `${obj.color}18`,
                    border: `1px solid ${obj.color}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: obj.color,
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  Q
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    lineHeight: 1.4,
                    color: "var(--white)",
                  }}
                >
                  {obj.q}
                </h3>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ width: 30, flexShrink: 0 }} />
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{obj.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
