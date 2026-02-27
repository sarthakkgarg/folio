import localFont from "next/font/local";
import "./globals.css";
import type { ReactNode } from "react";

const estrella = localFont({
  src: "./fonts/Estrella-Early.woff2",
  variable: "--font-estrella",
  display: "swap",
});

const helvetica = localFont({
  src: "./fonts/Helvetica.woff2",
  variable: "--font-helvetica",
  display: "swap",
});

const manic = localFont({
  src: "./fonts/Manic.woff2",
  variable: "--font-manic",
  display: "swap",
});

const LibreBaskerville = localFont({
  src: "./fonts/LibreBaskerville.woff2",
  variable: "--font-libre-baskerville",
  display: "swap",
});

const NeueMontreal = localFont({
  src: "./fonts/NeueMontreal.woff2",
  variable: "--font-neue-montreal",
  display: "swap",
});
const RobotoMono = localFont({
  src: "./fonts/RobotoMono.woff2",
  variable: "--font-roboto-mono",
  display: "swap",
});




export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${estrella.variable} ${helvetica.variable} ${manic.variable} ${LibreBaskerville.variable} ${NeueMontreal.variable} ${RobotoMono.variable}`}
    >
      {/* 👇 Set Helvetica as default */}
      <body style={{ fontFamily: "var(--font-roboto-mono)" }}>
        {children}
      </body>
    </html>
  );
}