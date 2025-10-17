import type { Metadata } from "next";
import { StrictMode } from "react";
import "./globals.scss";

import RootContext from "@/context/RootContext";
import LayoutSite from "@/components/layout/LayoutSite";

import { JetBrains_Mono, Inconsolata } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arzubek | Frontend Developer",
  description: "Portfolio showcasing web development and creative coding.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${inconsolata.variable}`}>
      <body>
        <StrictMode>
          <RootContext>
            <LayoutSite>{children}</LayoutSite>
          </RootContext>
        </StrictMode>
      </body>
    </html>
  );
}
