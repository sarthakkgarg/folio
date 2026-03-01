"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import {
  FaInstagram,
  FaSquareXTwitter,
  FaBehance,
  FaGithub,
  FaWhatsapp,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6"

const socials = [
  { icon: FaSquareXTwitter, name: "X",        href: "https://x.com/sarthakgargg" },
  { icon: FaBehance,        name: "Behance",  href: "https://www.behance.net/sarthakgarg33" },
  { icon: FaGithub,         name: "GitHub",   href: "https://github.com/sarthakkgarg" },
  { icon: FaWhatsapp,       name: "WhatsApp", href: "https://wa.me/9340179871" },
]

const EMAIL = "sarthakkgargg@gmail.com"

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="w-full bg-[#00D632] text-black overflow-hidden">

      {/* ── Contact CTA ── */}
      <div className="px-5 pt-16 pb-10 md:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.5,
            marginBottom: 12,
          }}
        >
          Got a project in mind?
        </motion.p>

      <motion.a
  href={`mailto:${EMAIL}`}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="relative inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group"
>
  {EMAIL}
  <FaArrowUpRightFromSquare size={10} />
  <span className="absolute bottom-[-2px] left-0 h-[2px] w-full bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.25,0.4,0.25,1)]" />
</motion.a>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-black/20 md:mx-10 lg:mx-16" />

      {/* Nav links row */}
      <div className="grid grid-cols-2 gap-y-10 px-5 py-10 md:grid-cols-3 md:px-10 lg:grid-cols-4 lg:px-16">

        {/* Site nav */}
        <div className="flex flex-col gap-3">
          {["WORKS", "ABOUT"].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-60"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex flex-col gap-3">
          {socials.map(({ icon: Icon, name, href }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-60"
            >
              <Icon size={14} />
              {name}
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1 lg:col-start-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60">Location</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide">
              Bhopal, India<br />462001
            </p>
          </div>
        </div>
      </div>

      {/* Giant logo */}
      <div className="overflow-hidden leading-none">
        <motion.div
          initial={{ x: "4%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          style={{
            position: "relative",
            width: "100vw",
            height: "18vw",
            marginLeft: "calc(-50vw + 50%)",
          }}
        >
          <Image
            src="/images/footer1.png"
            alt="Logo"
            fill
            draggable={false}
            className="object-cover object-left"
          />
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-between px-5 pb-6 pt-4 md:px-10 lg:px-16">
        <span className="text-xs font-bold uppercase tracking-widest opacity-70">
          ©&apos;{new Date().getFullYear().toString().slice(-2)}
        </span>
      </div>

    </footer>
  )
}