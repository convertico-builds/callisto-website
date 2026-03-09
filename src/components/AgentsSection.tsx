"use client";

import Image from "next/image";

const agents = [
  {
    name: "Velocity",
    color: "#ff6b35",
    image: "/robot-velocity.png",
    desc: "Instantly routes every lead to the right rep based on intent, geography, language, and value so no opportunity ever waits in a queue.",
    badge: "Lead Routing",
    glowColor: "rgba(255,107,53,0.35)",
  },
  {
    name: "Signal",
    color: "#00d4aa",
    image: "/robot-signal.png",
    desc: "Detects high intent behaviour across your lifecycle and surfaces revenue ready traders so your team acts where it converts.",
    badge: "Intent Detection",
    glowColor: "rgba(0,212,170,0.35)",
  },
  {
    name: "Oracle",
    color: "#a855f7",
    image: "/robot-oracle.png",
    desc: "Answers complex revenue questions in seconds so founders and CMOs make decisions with clarity not guesswork.",
    badge: "Revenue Intelligence",
    glowColor: "rgba(168,85,247,0.35)",
  },
  {
    name: "Horizon",
    color: "#22d3ee",
    image: "/robot-horizon.png",
    desc: "Optimises your website and discovery presence for the AI driven search era so inbound growth keeps compounding.",
    badge: "Discovery Growth",
    glowColor: "rgba(34,211,238,0.35)",
  },
];

export default function AgentsSection() {
  return (
    <section
      className="section"
      id="agents"
      style={{
        borderTop: "1px solid var(--border)",
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(79,127,255,0.05) 0%, transparent 70%)`,
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>AI Agents</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
            Meet the Four AI Agents You Can{" "}
            <span className="grad-text">Tailor to Your Business</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "1rem auto 0", fontSize: "0.92rem", lineHeight: 1.7 }}>
            Four specialised agents. One unified system.
            Each built to handle a mission-critical part of your revenue lifecycle.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="glass"
              style={{
                padding: "0",
                borderColor: `${agent.color}18`,
                overflow: "hidden",
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "14px",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px) scale(1.01)";
                el.style.borderColor = `${agent.color}55`;
                el.style.boxShadow = `0 24px 70px ${agent.glowColor}`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.borderColor = `${agent.color}18`;
                el.style.boxShadow = "none";
              }}
            >
              {/* Robot image panel */}
              <div
                style={{
                  position: "relative",
                  height: 280,
                  background: "rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Deep atmospheric glow at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -40,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 240,
                    height: 150,
                    borderRadius: "50%",
                    background: agent.glowColor,
                    filter: "blur(50px)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
                {/* Top atmosphere haze */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse 100% 50% at 50% 0%, ${agent.color}12 0%, transparent 65%)`,
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
                {/* Agent name watermark */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    fontSize: "4.5rem",
                    color: `${agent.color}08`,
                    letterSpacing: "-0.05em",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    zIndex: 0,
                    userSelect: "none",
                  }}
                >
                  {agent.name}
                </div>

                <Image
                  src={agent.image}
                  alt={`${agent.name} AI agent`}
                  width={260}
                  height={270}
                  style={{
                    objectFit: "contain",
                    objectPosition: "bottom center",
                    mixBlendMode: "screen",
                    position: "relative",
                    zIndex: 2,
                    filter: `drop-shadow(0 0 30px ${agent.color}cc) drop-shadow(0 4px 12px ${agent.color}55)`,
                    marginBottom: "-2px",
                  }}
                />
              </div>

              {/* Border line between image and text */}
              <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${agent.color}30, transparent)` }} />

              {/* Text content */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "var(--white)",
                    }}
                  >
                    {agent.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.58rem",
                      color: agent.color,
                      border: `1px solid ${agent.color}44`,
                      borderRadius: "4px",
                      padding: "2px 7px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {agent.badge}
                  </span>
                </div>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  {agent.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#watch-demo" className="btn-cta">Watch the Demo</a>
        </div>
      </div>
    </section>
  );
}
