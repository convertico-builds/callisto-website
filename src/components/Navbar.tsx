"use client";

import { useState, useEffect } from "react";

const links = [
  ["Outcomes", "#outcomes"],
  ["Features", "#features"],
  ["Agents", "#agents"],
  ["Pricing", "#pricing"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "0.75rem",
          left: "0.75rem",
          right: "0.75rem",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.7rem 1rem",
          background: scrolled
            ? "rgba(2,3,14,0.92)"
            : "rgba(2,3,14,0.78)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
          transition: "background 0.3s ease",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "radial-gradient(circle at 32% 32%, #7aa8ffcc, #1a3a8f88)",
              boxShadow: "0 0 16px rgba(79,127,255,0.5)",
              flexShrink: 0,
              animation: "float 4s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "-0.025em",
              color: "var(--white)",
            }}
          >
            Callisto
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              color: "var(--accent-light)",
              border: "1px solid rgba(79,127,255,0.3)",
              borderRadius: "4px",
              padding: "1px 5px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            AI RevOS
          </span>
        </div>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            gap: "1.75rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.84rem",
            color: "var(--muted)",
          }}
          className="nav-desktop-links"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--white)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#watch-demo"
          className="btn-cta nav-desktop-cta"
          style={{ fontSize: "0.8rem", padding: "0.55rem 1.25rem" }}
        >
          Watch the Demo
        </a>

        {/* Hamburger button — visible on mobile */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="nav-hamburger"
          style={{
            display: "none", // shown via CSS below
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.3rem",
            color: "var(--off-white)",
            flexShrink: 0,
          }}
        >
          {menuOpen ? (
            // X icon
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 7h14M4 11h14M4 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        style={{
          position: "fixed",
          top: menuOpen ? "calc(0.75rem + 56px + 0.5rem)" : "calc(0.75rem + 56px - 10px)",
          left: "0.75rem",
          right: "0.75rem",
          zIndex: 49,
          background: "rgba(6,8,24,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.07)",
          overflow: "hidden",
          maxHeight: menuOpen ? "340px" : "0",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease, top 0.25s ease",
          boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
        }}
        className="nav-mobile-menu"
      >
        <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--off-white)",
                textDecoration: "none",
                padding: "0.7rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "block",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--white)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--off-white)";
              }}
            >
              {label}
            </a>
          ))}

          <a
            href="#watch-demo"
            className="btn-cta"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "0.85rem",
              fontSize: "0.9rem",
              padding: "0.8rem 1.5rem",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Watch the Demo
          </a>
        </div>
      </div>

      {/* Backdrop — closes menu on tap outside */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 48,
            background: "transparent",
          }}
        />
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
