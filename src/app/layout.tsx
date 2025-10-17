import type { Metadata } from "next";
import "./globals.scss";
import RootContext from "@/context/RootContext";
import { StrictMode } from "react";
import { JetBrains_Mono } from "next/font/google";
import { Inconsolata } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Arzubek | Fullstack Developer",
  description: "Portfolio showcasing web development and creative coding.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} ${inconsolata.variable}`}>
        <StrictMode>
          <RootContext>{children}</RootContext>
        </StrictMode>
      </body>
    </html>
  );
}
