import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { logo } from "../assets"
import { container } from "../ui"

const links = [
  { href: "/#top", label: "الرئيسية" },
  { href: "/#collections", label: "المجموعات" },
  { href: "/#about", label: "من نحن" },
  { href: "/#contact", label: "تواصل" },
]

export function Header() {
  const location = useLocation()
  const onHome = location.pathname === "/"
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const overHero = onHome && !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition-[background,border-color,backdrop-filter] ${
        scrolled || open || !onHome
          ? "border-line bg-sand/94 text-ink backdrop-blur-xl"
          : "border-transparent bg-transparent text-cream"
      }`}
    >
      <div className={`${container} relative flex min-h-[68px] items-center gap-3`}>
        <Link className="inline-flex shrink-0 items-center no-underline" to="/#top" onClick={() => setOpen(false)}>
          <img src={logo} alt="SM" className="block h-9 w-auto rounded-md object-contain wide:h-10" />
        </Link>

        <nav
          id="site-nav"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[calc(100%+8px)] z-30 flex-col gap-0.5 rounded-xl border border-line bg-sand p-2 text-sm text-ink shadow-[0_14px_32px_rgba(70,48,28,0.14)] wide:static wide:z-auto wide:mx-auto wide:flex wide:flex-row wide:items-center wide:gap-0.5 wide:border-0 wide:bg-transparent wide:p-0 wide:shadow-none ${overHero && !open ? "wide:text-cream/88" : "wide:text-muted"}`}
          aria-label="التنقل الرئيسي"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              className={`rounded-full px-2.5 py-1.5 no-underline transition-colors ${overHero && !open ? "wide:hover:bg-cream/10 wide:hover:text-cream" : "hover:bg-ink/5 hover:text-ink"}`}
              to={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <Link
            className={`hidden min-h-9 items-center justify-center rounded-full px-3.5 text-xs font-semibold no-underline wide:inline-flex ${
              overHero ? "bg-bronze/85 text-cream hover:bg-bronze" : "bg-bronze text-cream hover:bg-[#a57d54]"
            }`}
            to="/#contact"
            onClick={() => setOpen(false)}
          >
            تواصل معنا
          </Link>
          <button
            type="button"
            className={`inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border bg-transparent wide:hidden ${
              overHero && !open ? "border-cream/35 text-cream" : "border-line text-ink"
            }`}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "إغلاق القائمة" : "فتح القائمة"}</span>
            <svg className="block size-5 fill-none stroke-current stroke-[1.8] [stroke-linecap:round]" viewBox="0 0 24 24" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
