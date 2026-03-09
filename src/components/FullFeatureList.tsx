"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const allFeatures = [
  { category: "Revenue Intelligence", features: ["Full-funnel attribution", "Cost-per-FTD by channel", "IB performance ranking", "Affiliate revenue mapping"], color: "#00d4aa" },
  { category: "Trader Lifecycle", features: ["Post-KYC activation flows", "Dormancy detection", "Re-engagement campaigns", "LTV cohort analysis"], color: "#22d3ee" },
  { category: "AI Agents", features: ["Velocity pipeline scoring", "Signal attribution engine", "Oracle churn prediction", "Horizon lifecycle automation"], color: "#a855f7" },
  { category: "Messaging Channels", features: ["WhatsApp native sequences", "Telegram broadcast + 1:1", "Email as secondary fallback", "Multi-channel A/B testing"], color: "#5b8fff" },
  { category: "Trading Infrastructure", features: ["MT5 bi-directional sync", "Desk-level P&L reporting", "Position-level trader data", "Real-time volume tracking"], color: "#ff6b35" },
  { category: "Compliance & KYC", features: ["eKYC provider integrations", "AI document review", "Compliance audit trails", "Automated KYC follow-up"], color: "#00d4aa" },
  { category: "IB & Partner Network", features: ["Real-time IB portal", "Automated commissions", "Volume and performance ranking", "Sub-IB hierarchy tracking"], color: "#22d3ee" },
  { category: "Payments & Deposits", features: ["Multi-gateway routing", "Failed deposit recovery", "Reconciliation automation", "Deposit source attribution"], color: "#a855f7" },
];

export default function FullFeatureList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planetRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    planetRefs.current.forEach((planet, i) => {
      if (!planet) return;
      gsap.fromTo(
        planet,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: planet,
            start: "top 90%",
          },
          delay: (i % 4) * 0.08,
        }
      );
    });
  }, []);

  return (
    <section
      className="section"
      ref={containerRef}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">Full Capability Set</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
            Everything a modern brokerage needs.
            <br />
            <span className="grad-text">Nothing you don't.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {allFeatures.map((group, i) => (
            <div
              key={group.category}
              ref={(el) => { planetRefs.current[i] = el; }}
              className="glass"
              style={{
                padding: "1.5rem",
                borderColor: `${group.color}18`,
              }}
            >
              {/* Planet header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 35% 30%, ${group.color}cc, ${group.color}33)`,
                    boxShadow: `0 0 14px ${group.color}40`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "var(--white)",
                  }}
                >
                  {group.category}
                </span>
              </div>

              <ul className="rock-list">
                {group.features.map((feat) => (
                  <li key={feat} style={{ fontSize: "0.82rem" }}>
                    <span style={{ color: group.color, filter: `drop-shadow(0 0 2px ${group.color})` }}>◈</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#watch-demo" className="btn-cta">See Everything in the Demo</a>
        </div>
      </div>
    </section>
  );
}
