"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Jupiter's moons — 8 outcomes, each with unique photorealistic image
const moons = [
  {
    name: "Io",
    label: "Higher Conversion\nFrom First Click to KYC",
    size: 58,
    color: "#e8921a",
    image: "/moon-io.png",
  },
  {
    name: "Europa",
    label: "More Deposits\nNot Just More Leads",
    size: 50,
    color: "#a8c8e8",
    image: "/moon-europa.png",
  },
  {
    name: "Ganymede",
    label: "Faster Time to\nFirst Trade",
    size: 66,
    color: "#8a7060",
    image: "/moon-ganymede.png",
  },
  {
    name: "Callisto",
    label: "Longer Lifetime\nValue by Design",
    size: 62,
    color: "#5a647a",
    image: "/moon-callisto.png",
  },
  {
    name: "Amalthea",
    label: "Complete Revenue\nTransparency",
    size: 36,
    color: "#b05040",
    image: "/moon-amalthea.png",
  },
  {
    name: "Himalia",
    label: "Scale Ad Spend\nWith Confidence",
    size: 32,
    color: "#706858",
    image: "/moon-himalia.png",
  },
  {
    name: "Thebe",
    label: "Eliminate Revenue\nLeaks Across the Lifecycle",
    size: 30,
    color: "#804030",
    image: "/moon-thebe.png",
  },
  {
    name: "Metis",
    label: "Out Execute Brokers\nTwice Your Size",
    size: 28,
    color: "#556070",
    image: "/moon-metis.png",
  },
];

const buildPositions = (count: number, rx: number, ry: number) =>
  Array.from({ length: count }, (_, i) => {
    const angle = (360 / count) * i - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      cx: 50 + rx * Math.cos(rad) * 100,
      cy: 50 + ry * Math.sin(rad) * 100,
    };
  });

export default function OutcomesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const group = groupRef.current;
    if (!section || !group) return;

    // Rotate entire orbital group on scroll
    gsap.to(group, {
      rotation: 360,
      ease: "none",
      transformOrigin: "50% 50%",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // Counter-rotate each label so text always reads right-side up
    labelRefs.current.forEach((el) => {
      if (!el) return;
      gsap.to(el, {
        rotation: -360,
        ease: "none",
        transformOrigin: "50% 50%",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    // Header fade-in
    gsap.from(".outcomes-header > *", {
      y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: ".outcomes-header", start: "top 85%" },
    });
  }, []);

  const positions = buildPositions(8, 0.41, 0.41);

  return (
    <section
      ref={sectionRef}
      className="section"
      id="outcomes"
      style={{
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          className="outcomes-header"
          style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 3.5rem" }}
        >
          <span className="eyebrow" style={{ justifyContent: "center" }}>Revenue Outcomes</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", marginBottom: "1.25rem" }}>
            The Future of Broker Infrastructure Starts with{" "}
            <span className="grad-text">Intelligent Revenue</span>
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: "0.95rem" }}>
            Staying on legacy CRM stacks is the real risk when modern brokers are
            increasing conversion, accelerating first deposits, and scaling lifetime
            value through one unified revenue system. Callisto connects every stage
            from click to long term value so growth is engineered, measured, and
            optimised in real time.
          </p>
        </div>

        {/* Jupiter + moons orbital system */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 680,
            margin: "0 auto",
            aspectRatio: "1 / 1",
          }}
        >
          {/* Orbit rings */}
          {[84, 68, 52].map((size, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: `${size}%`,
                aspectRatio: "1",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                border: `1px solid rgba(200,160,80,${0.06 + i * 0.015})`,
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Rotating moon group */}
          <div
            ref={groupRef}
            style={{ position: "absolute", inset: 0, transformOrigin: "50% 50%" }}
          >
            {positions.map((pos, i) => {
              const moon = moons[i];
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: `${pos.cx}%`,
                    top: `${pos.cy}%`,
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {/* Unique moon image */}
                  <div
                    style={{
                      width: moon.size,
                      height: moon.size,
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      boxShadow: `0 0 16px ${moon.color}66, 0 0 32px ${moon.color}22`,
                      border: `1px solid ${moon.color}44`,
                      animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={moon.image}
                      alt={moon.name}
                      fill
                      sizes={`${moon.size}px`}
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Counter-rotating label */}
                  <div
                    ref={(el) => { labelRefs.current[i] = el; }}
                    style={{ transformOrigin: "50% 50%", textAlign: "center", maxWidth: 110 }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: moon.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1px" }}>
                      {moon.name}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 500,
                        fontSize: "0.68rem",
                        color: "var(--off-white)",
                        lineHeight: 1.3,
                        display: "block",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {moon.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Jupiter at the centre */}
          <div
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: 120,
              height: 120,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              overflow: "hidden",
              zIndex: 2,
              boxShadow: "0 0 60px rgba(200,140,60,0.4), 0 0 120px rgba(200,140,60,0.15)",
              border: "2px solid rgba(200,140,60,0.3)",
              animation: "spin-slow 60s linear infinite",
            }}
          >
            <Image src="/jupiter.png" alt="Jupiter" fill sizes="120px" style={{ objectFit: "cover" }} />
          </div>

          {/* Jupiter label */}
          <div
            style={{
              position: "absolute",
              top: "calc(50% + 70px)",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: 3,
            }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(200,140,60,0.8)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Jupiter · Core Revenue Engine
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a href="#watch-demo" className="btn-cta">Watch the Demo</a>
        </div>
      </div>
    </section>
  );
}
