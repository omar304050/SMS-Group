import { useEffect, useState } from "react"
import { hero, image1, image3 } from "../assets"
import { container } from "../ui"

const AUTO_MS = 6500

const slides = [
  {
    image: hero,
    eyebrow: "LIVING ROOM",
    title: "تفاصيل تجمعنا. ومكان لا يُنسى.",
    text: "كنب وطاولات بخطوط ناعمة، تتحمل البيت اليومي وتخلي الجلسة هادية من أول نظرة.",
    primary: { href: "#collections", label: "استكشف مجموعات المعيشة" },
    secondary: { href: "#contact", label: "ناقش مشروعك" },
  },
  {
    image: image1,
    eyebrow: "WARM INTERIORS",
    title: "أثاث يكمّل المكان، مش بيغطّي عليه.",
    text: "خامات دافية وإضاءة هادية. نختار القطعة على مقاس الغرفة وأسلوب الاستخدام.",
    primary: { href: "#collections", label: "شوف المجموعات" },
    secondary: { href: "#contact", label: "احجز زيارة" },
  },
  {
    image: image3,
    eyebrow: "SHOWROOM STYLE",
    title: "من المعرض لحد ما القعدة تتركّب.",
    text: "قماش، خشب، ومقاس حسب الفتحة. التوصيل والتركيب في ميعاد واحد.",
    primary: { href: "#collections", label: "استكشف المعرض" },
    secondary: { href: "#contact", label: "تواصل معنا" },
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = slides[index]

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, index])

  function go(step: number) {
    setIndex((current) => (current + step + slides.length) % slides.length)
  }

  return (
    <section
      className="relative isolate min-h-svh overflow-hidden text-cream"
      aria-roledescription="carousel"
      aria-label="عروض الأثاث"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 -z-10">
        {slides.map((item, i) => (
          <img
            key={item.image}
            src={item.image}
            alt=""
            className={`absolute inset-0 size-full object-cover transition-opacity duration-[1100ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: i === 1 ? "center 40%" : "center 55%" }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,14,10,0.22)_0%,rgba(20,14,10,0.45)_42%,rgba(20,14,10,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.45)_0%,transparent_28%,transparent_62%,rgba(12,10,8,0.55)_100%)]" />
      </div>

      <div className={`${container} relative flex min-h-svh flex-col pt-[88px] pb-8`}>
        <div className="flex flex-1 items-center">
          <div key={slide.image} className="w-full max-w-[34rem]">
            <p className="hero-slide-copy mb-3 text-[0.7rem] font-semibold tracking-[0.24em] text-cream/75">
              {slide.eyebrow}
            </p>
            <h1 className="hero-slide-copy max-w-[15ch] font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.22] font-semibold tracking-tight text-cream">
              {slide.title}
            </h1>
            <p className="hero-slide-copy mt-3.5 max-w-[36ch] text-[0.95rem] leading-[1.75] text-cream/78">
              {slide.text}
            </p>
            <div className="hero-slide-copy mt-6 flex flex-wrap gap-2.5">
              <a
                className="inline-flex min-h-10 items-center gap-2 rounded-none bg-bronze px-4 text-sm font-semibold text-cream no-underline transition-colors hover:bg-[#a57d54]"
                href={slide.primary.href}
              >
                {slide.primary.label}
                <ArrowIcon />
              </a>
              <a
                className="inline-flex min-h-10 items-center gap-2 rounded-none border border-cream/35 bg-cream/10 px-4 text-sm font-semibold text-cream no-underline backdrop-blur-sm transition-colors hover:bg-cream/18"
                href={slide.secondary.href}
              >
                {slide.secondary.label}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
          <div className="hidden items-center gap-3 text-[0.65rem] tracking-[0.2em] text-cream/60 wide:flex">
            <span className="hero-scroll-line block h-8 w-px bg-cream/45" />
            <span className="rotate-180 [writing-mode:vertical-rl]">SCROLL TO EXPLORE</span>
          </div>

          <div className="ms-auto flex w-full max-w-[24rem] flex-col gap-3">
            <div className="h-px overflow-hidden bg-cream/25" aria-hidden="true">
              <span
                key={`${index}-${paused ? "p" : "r"}`}
                className="hero-progress block h-full bg-cream"
                style={{ animationDuration: `${AUTO_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-cream/70">
                {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="min-h-9 cursor-pointer rounded-lg border border-cream/35 bg-transparent px-3 text-xs text-cream transition-colors hover:bg-cream/10"
                  onClick={() => go(-1)}
                >
                  السابق
                </button>
                <button
                  type="button"
                  className="min-h-9 cursor-pointer rounded-lg border border-cream/35 bg-transparent px-3 text-xs text-cream transition-colors hover:bg-cream/10"
                  onClick={() => go(1)}
                >
                  التالي
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="fixed bottom-5 end-5 z-30 hidden min-h-9 cursor-pointer items-center gap-2 rounded-full border border-cream/30 bg-cream/95 px-3.5 text-xs font-semibold text-ink wide:inline-flex"
        aria-label="English"
      >
        <GlobeIcon />
        EN
      </button>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg className="size-4 rotate-180" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
