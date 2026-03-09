"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pairs = [
  {
    legacy: "Relying on manual follow-up in WhatsApp dominant markets",
    callisto: "Messenger-native automation across WhatsApp and Telegram",
  },
  {
    legacy: "Marketing spend with zero attribution to first deposit",
    callisto: "Full click to deposit to LTV attribution in real time",
  },
  {
    legacy: "KYC abandonment at 68% due to form complexity",
    callisto: "Zero-form onboarding — KYC inside the chat",
  },
  {
    legacy: "Trader lifecycle tracked across 4 disconnected tools",
    callisto: "Every trader touchpoint unified inside one system",
  },
  {
    legacy: "IB management running on spreadsheets",
    callisto: "IB network managed with real-time commission tracking",
  },
  {
    legacy: "6-month wait for any new integration",
    callisto: "Plug and play — live within 10 days",
  },
  {
    legacy: "Revenue questions answered by waiting on reports",
    callisto: "Ask Callisto any revenue question, get an answer instantly",
  },
  {
    legacy: "Competing on legacy infrastructure against faster operators",
    callisto: "Speed infrastructure that giants cannot pivot to overnight",
  },
];

export default function InfrastructureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  useEffect(() => {
    gsap.from(".compare-row", {
      opacity: 0,
      y: 24,
      stagger: 0.07,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".compare-table",
        start: "top 80%",
      },
    });

    gsap.from(".infra-header > *", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ".infra-header", start: "top 85%" },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      id="infrastructure"
      style={{
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
        background: "linear-gradient(180deg, rgba(79,127,255,0.03) 0%, transparent 50%)",
      }}
    >
      <div className="container" style={{ maxWidth: 1100 }}>
        {/* Header */}
        <div className="infra-header" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>The Adoption Curve</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: "1rem" }}>
            Infrastructure for the{" "}
            <span className="grad-text">Next Market Leaders</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 540, margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
            This is where early adopters outrun legacy giants. Hover any row to see the contrast.
          </p>
        </div>

        {/* Column labels */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem 2rem",
            maxWidth: 960,
            margin: "0 auto 1rem",
            padding: "0 0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#c44", boxShadow: "0 0 8px #c44" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c44" }}>
              Legacy CRM Stack
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-light)" }}>
              Callisto AI Revenue System
            </span>
          </div>
        </div>

        {/* Interactive comparison table */}
        <div
          className="compare-table"
          style={{
            maxWidth: 960,
            margin: "0 auto",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {pairs.map((pair, i) => (
            <div
              key={i}
              className="compare-row"
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
              style={{
                borderBottom: i < pairs.length - 1 ? "1px solid rgba(255,255,255,0.045)" : "none",
                transition: "background 0.25s ease",
                background: activeRow === i ? "rgba(79,127,255,0.04)" : "transparent",
                cursor: "default",
              }}
            >
              {/* Mobile: stacked layout */}
              <div className="compare-inner">
                {/* Legacy cell */}
                <div
                  className="compare-cell-legacy"
                  style={{
                    padding: "0.7rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    transition: "background 0.25s ease",
                    background: activeRow === i ? "rgba(220,60,60,0.05)" : "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span style={{ color: activeRow === i ? "#f66" : "#c44", fontSize: "0.8rem", flexShrink: 0, transition: "color 0.2s" }}>✕</span>
                  <span style={{ fontSize: "0.82rem", lineHeight: 1.5, color: activeRow === i ? "#aa7070" : "#6a5050", transition: "color 0.25s" }}>
                    {pair.legacy}
                  </span>
                </div>

                {/* VS divider — desktop only */}
                <div
                  className="compare-cell-vs"
                  style={{
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    background: activeRow === i ? "rgba(79,127,255,0.08)" : "rgba(255,255,255,0.02)",
                    transition: "background 0.25s ease",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.05em", color: activeRow === i ? "var(--accent-light)" : "var(--muted-2)", textTransform: "uppercase", transition: "color 0.25s" }}>
                    vs
                  </div>
                </div>

                {/* Callisto cell */}
                <div
                  className="compare-cell-callisto"
                  style={{
                    padding: "0.7rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    transition: "background 0.25s ease",
                    background: activeRow === i ? "rgba(79,127,255,0.06)" : "transparent",
                  }}
                >
                  <span style={{ color: activeRow === i ? "#7af" : "var(--accent)", fontSize: "0.8rem", flexShrink: 0, filter: activeRow === i ? "drop-shadow(0 0 6px var(--accent))" : "none", transition: "all 0.2s" }}>✓</span>
                  <span style={{ fontSize: "0.82rem", lineHeight: 1.5, color: activeRow === i ? "var(--white)" : "var(--off-white)", transition: "color 0.25s" }}>
                    {pair.callisto}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="glass"
          style={{
            maxWidth: 960,
            margin: "2.5rem auto 0",
            padding: "1.5rem 2rem",
            borderColor: "rgba(79,127,255,0.12)",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #7aa8ff, #1a3a8f)", boxShadow: "0 0 20px rgba(91,143,255,0.4)", flexShrink: 0, animation: "float 4s ease-in-out infinite" }} />
          <p style={{ color: "#bcc4df", flex: 1, fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: "var(--white)", display: "block", marginBottom: "0.2rem" }}>
              Innovators adopt. Laggards react.
            </strong>
            The brokers who move to unified AI revenue systems now will have
            18–24 months of compounding advantage before the market normalises.
          </p>
          <a href="#watch-demo" className="btn-cta" style={{ flexShrink: 0 }}>Watch the Demo</a>
        </div>
      </div>

      {/* Responsive: desktop restores 3-col layout */}
      <style>{`
        .compare-inner {
          display: flex;
          flex-direction: column;
        }
        .compare-cell-legacy {
          border-right: none !important;
        }
        @media (min-width: 640px) {
          .compare-inner {
            display: grid;
            grid-template-columns: 1fr 56px 1fr;
          }
          .compare-cell-legacy {
            padding: 1rem 1.5rem !important;
            border-right: 1px solid rgba(255,255,255,0.04) !important;
            border-bottom: none !important;
          }
          .compare-cell-vs {
            display: flex !important;
          }
          .compare-cell-callisto {
            padding: 1rem 1.5rem !important;
            border-left: 1px solid rgba(255,255,255,0.04) !important;
          }
        }
      `}</style>
    </section>
  );
}
