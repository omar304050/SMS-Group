import { Link } from "react-router-dom"
import { logo } from "../assets"
import { container } from "../ui"

export function Footer() {
  return (
    <footer className="border-t border-line pt-5 pb-6">
      <div className={`${container} flex flex-wrap items-center gap-x-5 gap-y-3 text-sm`}>
        <Link className="inline-flex items-center no-underline" to="/#top">
          <img src={logo} alt="SM" className="block h-8 w-auto rounded-md object-contain" />
        </Link>
        <nav className="flex gap-3" aria-label="روابط التذييل">
          <Link className="no-underline" to="/#collections">
            المجموعات
          </Link>
          <Link className="no-underline" to="/#about">
            من نحن
          </Link>
          <Link className="no-underline" to="/#contact">
            تواصل
          </Link>
        </nav>
        <p className="text-muted max-wide:ms-0 wide:ms-auto">أثاث منزلي · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
