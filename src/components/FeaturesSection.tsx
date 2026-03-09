"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const planets = [
  {
    name: "One Unified Revenue Engine",
    color: "#4f7fff",
    // Deep blue gas giant with lighter equatorial bands
    planetStyle: {
      background: "radial-gradient(circle at 30% 28%, #8aafff 0%, #4f7fff 35%, #1a3a9f 65%, #0a1a5f 100%)",
      boxShadow: "0 0 32px #4f7fff55, 0 0 60px #4f7fff22, inset -6px -4px 18px rgba(0,0,20,0.6), inset 2px 2px 8px rgba(140,180,255,0.25)",
    },
    bullets: [
      "Attribution, analytics, reporting, automation, and messaging unified inside one connected system",
      "Everyone in your brokerage works off the same real time source of truth",
      "No silos, no stitched tools, no conflicting data slowing down decisions",
    ],
  },
  {
    name: "Lifecycle Growth by Design",
    color: "#00d4aa",
    // Teal ocean world
    planetStyle: {
      background: "radial-gradient(circle at 32% 28%, #80ffe8 0%, #00d4aa 30%, #00896e 60%, #004d3d 100%)",
      boxShadow: "0 0 32px #00d4aa55, 0 0 60px #00d4aa22, inset -6px -4px 18px rgba(0,20,15,0.6), inset 2px 2px 8px rgba(100,255,210,0.2)",
    },
    bullets: [
      "Every stage from ad spend to long term value engineered to move forward",
      "Signup, KYC, deposit, and first trade nudged with data driven actions",
      "Conversion and retention designed together so revenue compounds",
    ],
  },
  {
    name: "Real Time Business Clarity",
    color: "#a855f7",
    // Purple gas giant with swirling cloud bands
    planetStyle: {
      background: "radial-gradient(circle at 28% 30%, #d4a0ff 0%, #a855f7 30%, #6b21a8 60%, #3b0764 100%)",
      boxShadow: "0 0 32px #a855f755, 0 0 60px #a855f722, inset -6px -4px 18px rgba(20,0,30,0.6), inset 2px 2px 8px rgba(200,140,255,0.2)",
    },
    bullets: [
      "Full visibility across your entire revenue chain at any moment",
      "Ask questions in plain language and get instant answers",
      "No hunting through dashboards and no waiting on reports",
    ],
  },
  {
    name: "Marketing That Scales With Confidence",
    color: "#ff6b35",
    // Volcanic amber-orange rocky world
    planetStyle: {
      background: "radial-gradient(circle at 32% 25%, #ffaa70 0%, #ff6b35 30%, #c83010 60%, #6b0f00 100%)",
      boxShadow: "0 0 32px #ff6b3555, 0 0 60px #ff6b3522, inset -6px -4px 18px rgba(30,5,0,0.6), inset 2px 2px 8px rgba(255,170,100,0.2)",
    },
    bullets: [
      "Campaign specific automations built around real user behaviour",
      "Messaging tailored to lifecycle stage instead of generic blasts",
      "Scale ad spend with clear attribution instead of guesswork",
    ],
  },
  {
    name: "Built for Speed Not Bureaucracy",
    color: "#22d3ee",
    // Icy cyan world with crystalline surface
    planetStyle: {
      background: "radial-gradient(circle at 30% 28%, #a8f6ff 0%, #22d3ee 30%, #0894a8 60%, #044a58 100%)",
      boxShadow: "0 0 32px #22d3ee55, 0 0 60px #22d3ee22, inset -6px -4px 18px rgba(0,15,20,0.6), inset 2px 2px 8px rgba(160,240,255,0.25)",
    },
    bullets: [
      "Plug and play setup without months of development requests",
      "No timezone delays and no waiting on slow external teams",
      "Infrastructure designed for fast moving brokers who want to out execute giants",
    ],
  },
  {
    name: "A Platform That Evolves With You",
    color: "#f59e0b",
    // Golden amber desert planet
    planetStyle: {
      background: "radial-gradient(circle at 32% 28%, #fde68a 0%, #f59e0b 30%, #b45309 60%, #5c2d00 100%)",
      boxShadow: "0 0 32px #f59e0b55, 0 0 60px #f59e0b22, inset -6px -4px 18px rgba(20,8,0,0.6), inset 2px 2px 8px rgba(255,220,100,0.2)",
    },
    bullets: [
      "Built by brokers who understand real operational pain",
      "Feature requests strengthen the platform for everyone",
      "Continuous improvement without charging you for every enhancement",
    ],
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Staggered card entrance on scroll
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.5,
          grid: [2, 3],
          from: "start",
        },
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // Header fade-in
    gsap.from(".features-header > *", {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
      scrollTrigger: { trigger: ".features-header", start: "top 85%" },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      id="features"
      style={{
        borderTop: "1px solid var(--border)",
        background: "linear-gradient(180deg, rgba(79,127,255,0.03) 0%, transparent 40%, transparent 60%, rgba(79,127,255,0.03) 100%)",
      }}
    >
      <div className="container">
        <div className="features-header" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Core Systems</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
            Designed to Grow Your Brokerage{" "}
            <span className="grad-text">Month After Month</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {planets.map((planet, i) => (
            <div
              key={planet.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="feature-card"
              style={{ borderColor: `${planet.color}18` }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${planet.color}50`;
                el.style.boxShadow = `0 16px 48px ${planet.color}18`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${planet.color}18`;
                el.style.boxShadow = "none";
              }}
            >
              {/* Planet header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.25rem" }}>
                {/* Realistic CSS planet sphere */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    flexShrink: 0,
                    animation: `float ${3.5 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.25}s`,
                    position: "relative",
                    ...planet.planetStyle,
                  }}
                >
                  {/* Atmosphere rim */}
                  <div
                    style={{
                      position: "absolute",
                      inset: -2,
                      borderRadius: "50%",
                      background: `radial-gradient(circle at 50% 50%, transparent 46%, ${planet.color}30 60%, ${planet.color}00 70%)`,
                      pointerEvents: "none",
                    }}
                  />
                  {/* Highlight specular */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12%",
                      left: "18%",
                      width: "28%",
                      height: "18%",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.18)",
                      filter: "blur(3px)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.98rem", lineHeight: 1.35, color: "var(--white)" }}>
                  {planet.name}
                </h3>
              </div>

              <ul className="rock-list">
                {planet.bullets.map((b) => (
                  <li key={b} style={{ fontSize: "0.875rem" }}>
                    <span style={{ color: planet.color, filter: `drop-shadow(0 0 3px ${planet.color})`, marginTop: "0.25rem", flexShrink: 0 }}>◈</span>
                    {b}
                  </li>
                ))}
              </ul>
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
