import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crispy.thesylvester.ca"),
  title: "Crispy — a GUI for Claude Code and Codex",
  description:
    "A GUI for Claude Code and Codex, built for multi-agent orchestration — with 'superthink' adversarial verification, agent memory, and Discord remote access.",
  openGraph: {
    title: "Crispy — a GUI for Claude Code and Codex",
    description:
      "A GUI for Claude Code and Codex, built for multi-agent orchestration — with 'superthink' adversarial verification, agent memory, and Discord remote access.",
    url: "https://crispy.thesylvester.ca",
    siteName: "Crispy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#1C1917]">{children}</body>
    </html>
  );
}
