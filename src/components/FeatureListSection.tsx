"use client";

import { useEffect, useRef } from "react";

const features = [
  "Full click to deposit to lifetime value attribution",
  "Real time MetaTrader 5 account and trade sync",
  "AI powered Ask Callisto revenue intelligence",
  "WhatsApp native lifecycle automation",
  "Telegram messaging orchestration",
  "Campaign specific behavioural workflows",
  "Zero form onboarding experience",
  "In house KYC with lower per trader cost",
  "Automated signup to KYC nudging",
  "Time to first deposit tracking and optimisation",
  "Deposit attempt monitoring and recovery triggers",
  "Multi tier IB and affiliate management",
  "50 plus lifecycle event triggers",
  "Lead routing based on value and intent",
  "Urgency detection for high intent traders",
  "LTV by campaign region and segment",
  "Real time executive revenue dashboards",
  "Role based access with compliance audit trails",
  "CSV and PDF reporting exports",
  "Plug and play deployment without dev bottlenecks",
];

const colors = ["#4f7fff", "#00d4aa", "#a855f7", "#ff6b35", "#22d3ee", "#f59e0b"];

export default function FeatureListSection() {
  // One ref per row; each row gets its own IntersectionObserver
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((row) => {
      if (!row) return;

      const planet = row.querySelector<HTMLElement>("[data-part='planet']");
      const text   = row.querySelector<HTMLElement>("[data-part='text']");
      const diamond = row.querySelector<HTMLElement>("[data-part='diamond']");

      // Start everything invisible & shifted left
      const resetEl = (el: HTMLElement | null, x = -30) => {
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = `translateX(${x}px)`;
        el.style.transition = "none";
      };
      resetEl(planet);
      resetEl(text);
      resetEl(diamond);

      const animate = (el: HTMLElement | null, delay: number) => {
        if (!el) return;
        setTimeout(() => {
          el.style.transition = "opacity 500ms ease-out, transform 500ms ease-out";
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        }, delay);
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(planet, 0);       // planet first
              animate(text, 50);        // text 50ms after
              animate(diamond, 150);    // diamond 100ms after text
              observer.disconnect();    // fire once
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(row);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      className="section"
      id="full-features"
      style={{
        borderTop: "1px solid var(--border)",
        backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(79,127,255,0.06) 0%, transparent 65%)`,
      }}
    >
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Everything Included</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
            What You Get Inside the{" "}
            <span className="grad-text">Unified Revenue System</span>
          </h2>
        </div>

        <div>
          {features.map((feat, i) => {
            const color = colors[i % colors.length];
            return (
              <div
                key={feat}
                ref={(el) => { rowRefs.current[i] = el; }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.95rem 0.75rem",
                  borderBottom: "1px solid rgba(255,255,255,0.035)",
                  borderRadius: "0",
                  transition: "background 0.2s ease, padding-left 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${color}08`;
                  (e.currentTarget as HTMLElement).style.paddingLeft = "1.25rem";
                  (e.currentTarget as HTMLElement).style.borderRadius = "8px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "0.75rem";
                  (e.currentTarget as HTMLElement).style.borderRadius = "0";
                }}
              >
                {/* Planet icon — animates first */}
                <div
                  data-part="planet"
                  style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: `radial-gradient(circle at 32% 32%, ${color}cc, ${color}33)`,
                    boxShadow: `0 0 10px ${color}44`,
                    border: `1px solid ${color}44`,
                    flexShrink: 0,
                  }}
                />

                {/* Row number */}
                <div
                  data-part="text"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--muted-2)",
                    width: 22,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Feature text — animates 50ms after planet */}
                <span
                  data-part="text"
                  style={{ color: "var(--off-white)", fontSize: "0.92rem", lineHeight: 1.5, flex: 1 }}
                >
                  {feat}
                </span>

                {/* Diamond — animates last */}
                <span
                  data-part="diamond"
                  style={{ color, fontSize: "0.7rem", opacity: 0.6, flexShrink: 0 }}
                >
                  ◈
                </span>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a href="#watch-demo" className="btn-cta">Watch the Demo</a>
        </div>
      </div>
    </section>
  );
}
