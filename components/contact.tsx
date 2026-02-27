"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaInstagram,
  FaSquareXTwitter,
  FaBehance,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6"
import { SiThreads } from "react-icons/si"

const socials = [
  { icon: FaInstagram, name: "Instagram", href: "#" },
  { icon: SiThreads,   name: "Threads",   href: "#" },
  { icon: FaSquareXTwitter,   name: "X",         href: "#" },
  { icon: FaBehance,   name: "Behance",   href: "#" },
  { icon: FaGithub,    name: "GitHub",    href: "#" },
  { icon: FaWhatsapp,  name: "WhatsApp",  href: "#" },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#00D632] text-black overflow-hidden">

      {/* Divider */}
      <div className="mx-5 border-t border-black/20 md:mx-10 lg:mx-16" />

      {/* Nav links row */}
      <div className="grid grid-cols-2 gap-y-10 px-5 py-10 md:grid-cols-3 md:px-10 lg:grid-cols-4 lg:px-16">

        {/* Site nav */}
        <div className="flex flex-col gap-3">
          {["HOME", "WORKS", "ABOUT", "CONTACT"].map((link) => (
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

        {/* Address + hours */}
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1 lg:col-start-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60">Location</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide">
             Bhopal, India<br />462001
            </p>
          </div>
         
        </div>
      </div>

      {/* Giant full-width logo at the bottom */}
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

      {/* Copyright bar */}
      <div className="flex items-center justify-between px-5 pb-6 pt-4 md:px-10 lg:px-16">
        <span className="text-xs font-bold uppercase tracking-widest opacity-70">
          ©&apos;{new Date().getFullYear().toString().slice(-2)}
        </span>
      </div>

    </footer>
  )
}