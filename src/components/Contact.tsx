import { useState, type FormEvent } from "react"
import { btnPrimary, card, container, eyebrow, fieldControl, lede, title } from "../ui"

type FormState = {
  name: string
  phone: string
  room: string
  note: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const empty: FormState = { name: "", phone: "", room: "معيشة", note: "" }

export function Contact() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  function update(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: FormErrors = {}
    if (values.name.trim().length < 2) next.name = "اكتب الاسم الثنائي على الأقل."
    if (!/^[\d+\s()-]{8,}$/.test(values.phone.trim())) next.phone = "اكتب رقم موبايل صحيح."
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <section className="py-10" id="contact">
      <div className={`${container} grid items-start gap-5 wide:grid-cols-[0.9fr_1.1fr]`}>
        <div>
          <p className={eyebrow}>زيارة المعرض</p>
          <h2 className={title}>احجز معاد تشوف فيه القماش والخشب.</h2>
          <p className={lede}>
            النموذج واجهة فقط: البيانات بتظهر هنا كتأكيد، ومش بتتبعت لخادم. اربطه بنظام الحجز لما المعرض يبقى جاهز.
          </p>
        </div>

        {sent ? (
          <div className={`${card} grid gap-3 p-4`} role="status">
            <h3 className="text-base font-bold">تم تسجيل طلب الزيارة في المعاينة.</h3>
            <p className="text-sm leading-[1.7] text-muted">
              {values.name.trim()} — {values.phone.trim()} · {values.room}
            </p>
            <button
              type="button"
              className={btnPrimary}
              onClick={() => {
                setSent(false)
                setValues(empty)
              }}
            >
              حجز معاد تاني
            </button>
          </div>
        ) : (
          <form className={`${card} grid gap-3 p-4`} onSubmit={onSubmit} noValidate>
            <div>
              <label className="text-sm font-semibold" htmlFor="lead-name">
                الاسم
              </label>
              <input
                className={fieldControl}
                id="lead-name"
                name="name"
                autoComplete="name"
                value={values.name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "lead-name-error" : undefined}
                onChange={(event) => update("name", event.target.value)}
              />
              {errors.name ? (
                <p id="lead-name-error" className="mt-1 text-xs text-danger">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="lead-phone">
                الموبايل
              </label>
              <input
                className={fieldControl}
                id="lead-phone"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                value={values.phone}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "lead-phone-error" : undefined}
                onChange={(event) => update("phone", event.target.value)}
              />
              {errors.phone ? (
                <p id="lead-phone-error" className="mt-1 text-xs text-danger">
                  {errors.phone}
                </p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="lead-room">
                الغرفة
              </label>
              <select
                className={fieldControl}
                id="lead-room"
                name="room"
                value={values.room}
                onChange={(event) => update("room", event.target.value)}
              >
                <option>معيشة</option>
                <option>سفرة</option>
                <option>نوم</option>
                <option>أكثر من غرفة</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="lead-note">
                مقاس أو ملاحظة
              </label>
              <textarea
                className={`${fieldControl} min-h-20 resize-y`}
                id="lead-note"
                name="note"
                rows={3}
                value={values.note}
                onChange={(event) => update("note", event.target.value)}
                placeholder="عرض الحيطة، أو القطعة اللي عجباك..."
              />
            </div>
            <button type="submit" className={btnPrimary}>
              سجّل الزيارة
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
