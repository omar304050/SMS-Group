import { Link, Navigate, useParams } from "react-router-dom"
import { getCollection } from "../data/collections"
import { btnGhost, container, eyebrow, title } from "../ui"

export function CollectionPage() {
  const { slug } = useParams()
  const collection = slug ? getCollection(slug) : undefined

  if (!collection) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="bg-sand pt-[88px] pb-12">
      <div className={container}>
        <Link className="inline-flex items-center gap-2 text-sm text-muted no-underline hover:text-ink" to="/#collections">
          <span aria-hidden="true">→</span>
          رجوع للمجموعات
        </Link>

        <div className="mt-5 grid gap-6 wide:grid-cols-[0.95fr_1.05fr] wide:items-start">
          <div>
            <p className={eyebrow}>مجموعة</p>
            <h1 className={title}>{collection.title}</h1>
            <p className="mt-3 text-sm leading-[1.75] text-muted">{collection.summary}</p>

            <ul className="mt-5 list-none space-y-2.5 p-0">
              {collection.specs.map((spec) => (
                <li key={spec} className="rounded-xl border border-line bg-card px-3.5 py-2.5 text-sm leading-[1.7]">
                  {spec}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link className={btnGhost} to="/#collections">
                كل المجموعات
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[20px]">
            <img
              src={collection.cover}
              alt={collection.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-base font-bold">صور المجموعة</h2>
          <div className="grid gap-2.5 sm:grid-cols-2 wide:grid-cols-3">
            {collection.images.map((image, index) => (
              <figure key={image} className="overflow-hidden rounded-[16px] border border-line bg-card">
                <img
                  src={image}
                  alt={`${collection.title} — صورة ${index + 1}`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
