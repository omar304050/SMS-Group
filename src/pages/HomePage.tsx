import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Features } from "../components/Features"
import { Hero } from "../components/Hero"

export function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Features />
      <About />
      <Contact />
    </div>
  )
}
