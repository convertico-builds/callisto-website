"use client";

import Image from "next/image";

const included = [
  "All 4 AI Agents — Velocity, Signal, Oracle, Horizon",
  "MT5 + WhatsApp + Telegram native integration",
  "Full attribution stack — click to deposit to LTV",
  "Unlimited lifecycle automations",
  "In-house KYC pipeline included",
  "Dedicated onboarding — live in 10 days",
  "Real-time executive revenue dashboards",
  "Multi-tier IB & affiliate management",
];

export default function PricingSection() {
  return (
    <section
      className="section"
      id="pricing"
      style={{ borderTop: "1px solid var(--border)", overflow: "hidden" }}
    >
      <div className="container" style={{ maxWidth: 1080 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Pricing</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", marginBottom: "1rem" }}>
            One Price.{" "}
            <span className="grad-text">Everything Included.</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 480, margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
            No tiers, no hidden integrations, no per-seat fees. One flat rate — full platform access from day one.
          </p>
        </div>

        {/* Two-column pricing layout — stacks on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
          className="pricing-grid"
        >
          {/* LEFT — Pricing card */}
          <div
            className="glass"
            style={{
              borderColor: "rgba(79,127,255,0.2)",
              padding: "0",
              overflow: "hidden",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Price header band */}
            <div
              style={{
                padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 3vw, 2rem)",
                borderBottom: "1px solid rgba(79,127,255,0.1)",
                background: "linear-gradient(135deg, rgba(79,127,255,0.08) 0%, rgba(168,85,247,0.04) 100%)",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "1rem" }}>
                Full Platform Access
              </div>

              {/* Price display */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.25rem", marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 500, color: "var(--muted)", marginTop: "0.6rem" }}>
                  USD
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "clamp(3.2rem, 8vw, 5rem)",
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #ffffff 40%, #7aa8ff 80%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.03em",
                  }}
                >
                  2,000
                </span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 400, color: "var(--muted)", alignSelf: "flex-end", paddingBottom: "0.75rem" }}>
                  / month
                </span>
              </div>

              {/* Trust tags */}
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
                {["No fixed-term contract", "Cancel anytime", "Live in 10 days"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      color: "var(--off-white)",
                      background: "rgba(79,127,255,0.1)",
                      border: "1px solid rgba(79,127,255,0.2)",
                      borderRadius: "4px",
                      padding: "3px 9px",
                    }}
                  >
                    ◈ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Included feature list */}
            <div style={{ padding: "clamp(1.25rem, 3vw, 1.75rem) clamp(1.5rem, 4vw, 2.5rem)", flex: 1 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.25rem" }}>
                Everything included
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {included.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.875rem", color: "var(--off-white)", lineHeight: 1.45 }}>
                    <span style={{ color: "var(--accent)", filter: "drop-shadow(0 0 4px var(--accent))", flexShrink: 0, marginTop: "1px", fontSize: "0.8rem" }}>◈</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div style={{ padding: "0 clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 3vw, 2.5rem)" }}>
              <a href="#watch-demo" className="btn-cta" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                Watch the Demo
              </a>
            </div>
          </div>

          {/* RIGHT — Visual + stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Space station image */}
            <div
              style={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                flex: 1,
                minHeight: 220,
                border: "1px solid rgba(79,127,255,0.12)",
              }}
            >
              <Image
                src="/pricing-visual.png"
                alt="Callisto orbital platform"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,3,14,0.65) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.3rem" }}>
                  Mission-critical infrastructure
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1rem", color: "var(--white)", lineHeight: 1.4 }}>
                  Built to run your brokerage revenue at orbital velocity
                </div>
              </div>
            </div>

            {/* Quick stats grid */}
            <div
              className="glass"
              style={{
                borderColor: "rgba(79,127,255,0.1)",
                padding: "1.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              {[
                { stat: "< 10 days", label: "Time to live" },
                { stat: "No contract", label: "Cancel anytime" },
                { stat: "24/7", label: "AI agents working" },
                { stat: "$2k/mo", label: "Flat rate, no surprises" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                      background: "linear-gradient(135deg, #fff 30%, #7aa8ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {stat}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--muted)", textTransform: "uppercase" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: side-by-side */}
      <style>{`
        @media (min-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
