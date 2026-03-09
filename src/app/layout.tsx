import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Callisto — The AI Revenue Operating System for CFD & FX Brokerages",
  description:
    "Callisto replaces fragmented CRM stacks with a unified AI revenue system built for modern brokerages. Velocity. Signal. Oracle. Horizon. Watch the demo.",
  openGraph: {
    title: "Callisto — Unified AI Revenue System for Brokerages",
    description:
      "Replace your legacy CRM stack with Callisto — the first AI-native revenue operating system built for CFD and FX brokerages. Drive deposits. Own LTV. See the full picture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
