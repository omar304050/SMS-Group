import { Link } from "react-router-dom"
import { collections } from "../data/collections"
import { container } from "../ui"

export function Features() {
  return (
    <section className="relative overflow-hidden bg-[#12100e] py-10 text-cream" id="collections">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(720px 320px at 100% 0%, rgba(196,162,122,0.18), transparent 55%), radial-gradient(520px 280px at 0% 100%, rgba(141,106,69,0.12), transparent 50%)",
        }}
      />

      <div className={`${container} relative`}>
        <div className="mb-6 flex flex-col gap-4 wide:mb-7 wide:flex-row wide:items-end wide:justify-between">
          <div className="max-w-[36rem]">
            <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.24em] text-[#c4a27a]">COLLECTIONS</p>
            <h2 className="font-display text-[clamp(1.3rem,2.6vw,1.9rem)] leading-[1.3] font-semibold tracking-tight text-cream">
              مجموعات تتكوّن مع بعض، مش قطع متفرّقة.
            </h2>
          </div>
          <div className="max-w-[20rem]">
            <p className="text-sm leading-[1.7] text-cream/65">
              اضغط على أي مجموعة عشان تشوف الصور والمواصفات بنفس التفاصيل.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {collections.map((collection, index) => (
            <Link
              key={collection.slug}
              to={`/collections/${collection.slug}`}
              className="feature-tile group relative isolate min-h-[220px] overflow-hidden rounded-[18px] no-underline wide:min-h-[280px]"
            >
              <img
                src={collection.cover}
                alt=""
                className="absolute inset-0 size-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.12)_0%,rgba(12,10,8,0.28)_40%,rgba(12,10,8,0.88)_100%)]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 transition-colors group-hover:ring-[#c4a27a]/45" />
              <div className="absolute inset-x-0 bottom-0 p-4 wide:p-6">
                <p className="mb-1.5 text-[0.68rem] tracking-[0.22em] text-[#c4a27a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-[clamp(1.25rem,2.4vw,1.7rem)] font-semibold text-cream">
                  {collection.title}
                </h3>
                <p className="mt-1.5 max-w-[42ch] text-sm leading-[1.65] text-cream/72">{collection.summary}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-cream">
                  استكشف المجموعة
                  <span className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">
                    ←
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
