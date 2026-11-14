import { container, eyebrow, title } from "../ui"

const services = [
  { en: "INTERIOR DESIGN", ar: "تصميم داخلي" },
  { en: "MEP", ar: "إلكتروميكانيك" },
  { en: "FIT-OUT", ar: "تشطيبات" },
  { en: "FURNITURE", ar: "أثاث منزلي ومكتبي" },
]

export function About() {
  return (
    <section className="scroll-mt-[88px] bg-sand-deep py-10" id="about">
      <div className={container}>
        <div className="mb-5 max-w-[36rem]">
          <p className={eyebrow}>من نحن</p>
          <h2 className={title}>SMS — مساحتك.. رسالتنا.</h2>
          <p className="mt-3 text-sm leading-[1.75] text-muted">
            شركة تصميم داخلي وتشطيبات وأثاث، بنحوّل المساحة لتجربة متكاملة من الفكرة للتنفيذ: تصميم،
            إلكتروميكانيك، تشطيبات، وأثاث منزلي ومكتبي.
          </p>
        </div>

        <div className="overflow-hidden rounded-[20px] border border-line">
          <img
            src="/about-sms.jpeg"
            alt="SMS Interior Design — مساحتك رسالتنا"
            className="block w-full object-cover object-center"
          />
        </div>

        <div className="mt-5 grid gap-3 wide:grid-cols-4">
          {services.map((service) => (
            <div key={service.en} className="border-t-2 border-bronze pt-3">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-bronze">{service.en}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{service.ar}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm text-muted wide:flex-row wide:items-center wide:justify-between">
          <p>
            م. سعيد السعدني ·{" "}
            <a className="font-semibold text-ink no-underline hover:text-bronze" href="https://wa.me/201152243404" target="_blank" rel="noreferrer">
              01152243404
            </a>
          </p>
          <p className="font-medium text-ink">Your Space. Our Message.</p>
        </div>
      </div>
    </section>
  )
}
