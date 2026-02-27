import { notFound } from "next/navigation"

import About from "../../components/about"
import Skills from "../../components/work"
import Contact from "../../components/contact"
import Works from "../../components/work"

export default async function SectionPage({ params }) {
  const { section } = await params

  const pages = {
    about: <About />,
    skills: <Skills />,
    works: <Works />,
    contact: <Contact />,
  }

  if (!pages[section]) {
    notFound()
  }

  return pages[section]
}