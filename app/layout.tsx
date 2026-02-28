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



const LibreBaskerville = localFont({
  src: "./fonts/LibreBaskerville.woff2",
  variable: "--font-libre-baskerville",
  display: "swap",
});

const NeueMontreal = localFont({
  src: "./fonts/NeueMontreal2.woff2",
  variable: "--font-neue-montreal",
  display: "swap",
});
const RobotoMono = localFont({
  src: "./fonts/RobotoMono.woff2",
  variable: "--font-roboto-mono",
  display: "swap",
});

const Riga = localFont({
  src: "./fonts/Riga-Bold.woff2",
  variable: "--font-riga",
  display: "swap",
});




export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${estrella.variable} ${helvetica.variable}  ${LibreBaskerville.variable} ${NeueMontreal.variable} ${RobotoMono.variable} ${Riga.variable}`}
    >
      {/* 👇 Set Helvetica as default */}
      <body style={{ fontFamily: "var(--font-neue-montreal)" }}>
        {children}
      </body>
    </html>
  );
}