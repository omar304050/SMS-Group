import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { WhatsAppFab } from "./WhatsAppFab"

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 50)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <>
      <a
        className="absolute start-4 -top-12 z-40 rounded-full bg-bronze px-3 py-2 text-sm text-cream no-underline focus:top-3"
        href="#content"
      >
        تخطي إلى المحتوى
      </a>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
