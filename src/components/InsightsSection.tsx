"use client";

import { useEffect, useRef, useState } from "react";

const query = `"Which marketing campaign from Meta is giving the best LTV results?"`;

export default function InsightsSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(query.slice(0, i + 1));
      i++;
      if (i >= query.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="section"
      id="insights"
      style={{
        borderTop: "1px solid var(--border)",
        backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(79,127,255,0.07) 0%, transparent 70%)`,
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>AI Intelligence</span>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            marginBottom: "1rem",
          }}
        >
          Real Insights That{" "}
          <span className="grad-text">Move Revenue</span>
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 3rem", fontSize: "0.95rem", lineHeight: 1.7 }}>
          Ask Callisto anything. Get a revenue answer backed by your actual data — in seconds.
        </p>

        {/* Browser chrome mockup — paper.design pattern */}
        <div
          className="browser-chrome"
          style={{ maxWidth: 740, margin: "0 auto" }}
        >
          {/* Browser bar */}
          <div className="browser-bar">
            <div className="browser-dot" style={{ background: "#ff5f57" }} />
            <div className="browser-dot" style={{ background: "#ffbd2e" }} />
            <div className="browser-dot" style={{ background: "#28ca41" }} />
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 4,
                padding: "0.25rem 0.75rem",
                marginLeft: "0.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--muted-2)",
                textAlign: "left",
              }}
            >
              app.callisto.ai/oracle
            </div>
          </div>

          {/* Screen content */}
          <div style={{ padding: "2rem", background: "rgba(8,12,34,0.9)" }}>
            {/* Query input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.9rem 1.1rem",
                background: "rgba(79,127,255,0.07)",
                border: "1px solid rgba(79,127,255,0.2)",
                borderRadius: "8px",
                marginBottom: "1.75rem",
                textAlign: "left",
              }}
            >
              {/* Oracle planet icon */}
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 32% 32%, #a855f7dd, #a855f744)",
                  boxShadow: "0 0 14px rgba(168,85,247,0.4)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "var(--accent-light)",
                  flex: 1,
                  textAlign: "left",
                  letterSpacing: "0.01em",
                }}
              >
                {displayedText}
                {displayedText.length < query.length && (
                  <span style={{ animation: "blink-cursor 0.8s step-end infinite", borderRight: "2px solid var(--accent-light)", marginLeft: 1 }} />
                )}
              </span>
            </div>

            {/* Response block */}
            <div
              style={{
                background: "rgba(168,85,247,0.06)",
                border: "1px solid rgba(168,85,247,0.14)",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                textAlign: "left",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#a855f7", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                ORACLE · REVENUE INTELLIGENCE
              </div>
              <p style={{ color: "var(--off-white)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                Your <strong style={{ color: "#fff" }}>Zambian Ballers</strong> Meta campaign is generating the highest LTV results this quarter.
                $10,000 spend produced <strong style={{ color: "#00d4aa" }}>50 first-time depositors</strong> with an average LTV of{" "}
                <strong style={{ color: "#00d4aa" }}>$1,840</strong> — compared to your next best campaign at $1,120. KYC completion rate:{" "}
                <strong style={{ color: "#fff" }}>68%</strong>. Recommend scaling this audience by 2x before end of month.
              </p>
            </div>

            {/* Mini stats row */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Campaign Spend", val: "$10,000" },
                { label: "FTDs Generated", val: "50" },
                { label: "Avg LTV", val: "$1,840" },
                { label: "KYC Rate", val: "68%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    flex: "1 1 120px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "8px",
                    padding: "0.75rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "var(--accent-light)", marginBottom: "0.2rem" }}>
                    {stat.val}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <a href="#watch-demo" className="btn-cta">Watch the Demo</a>
        </div>
      </div>
    </section>
  );
}
