import antrhat1 from "../assets/antrhat/1.jpeg"
import antrhat2 from "../assets/antrhat/2.jpeg"
import antrhat3 from "../assets/antrhat/3.jpeg"
import antrhat4 from "../assets/antrhat/4.jpeg"
import antrhat5 from "../assets/antrhat/5.jpeg"
import antrhat6 from "../assets/antrhat/6.jpeg"
import antrhat7 from "../assets/antrhat/7.jpeg"
import antrhat8 from "../assets/antrhat/8.jpeg"
import antrhat9 from "../assets/antrhat/9.jpeg"
import antrhat10 from "../assets/antrhat/10.jpeg"
import antrhat11 from "../assets/antrhat/11.jpeg"
import dressing1 from "../assets/Dressing/1.jpeg"
import dressing2 from "../assets/Dressing/2.jpeg"
import dressing3 from "../assets/Dressing/3.jpeg"
import dressing4 from "../assets/Dressing/4.jpeg"
import dressing5 from "../assets/Dressing/5.jpeg"
import dressing6 from "../assets/Dressing/6.jpeg"
import dressing7 from "../assets/Dressing/7.jpeg"
import dressing8 from "../assets/Dressing/8.jpeg"
import dressing9 from "../assets/Dressing/9.jpeg"
import dressing10 from "../assets/Dressing/10.jpeg"
import dressing11 from "../assets/Dressing/11.jpeg"
import dressing12 from "../assets/Dressing/12.jpeg"
import matabe51 from "../assets/matabe5/1.jpeg"
import matabe52 from "../assets/matabe5/2.jpeg"
import matabe53 from "../assets/matabe5/3.jpeg"
import matabe54 from "../assets/matabe5/4.jpeg"
import matabe55 from "../assets/matabe5/5.jpeg"
import matabe56 from "../assets/matabe5/6.jpeg"
import matabe57 from "../assets/matabe5/7.jpeg"
import matabe58 from "../assets/matabe5/8.jpeg"

const tvImageModules = import.meta.glob("../assets/TV/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>

const tvImages = Object.keys(tvImageModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => tvImageModules[path])

export type Collection = {
  slug: string
  title: string
  summary: string
  cover: string
  specs: string[]
  images: string[]
}

export const collections: Collection[] = [
  {
    slug: "antrhat",
    title: "انتريهات",
    summary: "انتريهات خشب زان بدهان إيطالي، قماش كتان معالج وإسفنج عالي الكثافة.",
    cover: antrhat11,
    specs: [
      "انتريه خشب زان أحمر — تخانات 7سم و5سم",
      "دهان أوستر بوليستر مط إيطالي",
      "قماش كتان معالج",
      "إسفنج عالي الكثافة 40",
      "فايبر رول معالج ضد البكتيريا",
    ],
    images: [antrhat1, antrhat2, antrhat3, antrhat4, antrhat5, antrhat6, antrhat7, antrhat8, antrhat9, antrhat10],
  },
  {
    slug: "matabikh",
    title: "مطابخ",
    summary: "مطابخ كونتر ميلامين كبس جديد، دولف MDF بـ HPL، ومفصلات إيطالي سوف كلوز.",
    cover: matabe51,
    specs: [
      "العلب خشب كونتر ميلامين كبس جديد 18مم",
      "الدهور 9مم ميلامين وشين — مقاوم للحشرات والحرارة",
      "الدولف خشب MDF إسباني وتركي عليه HPL بخامة عالية",
      "شريط تركي أعلى خامة",
      "مفصلات إيطالي باكم سوفت كلوز",
      "زجاج فاميه 5 ملي",
      "مقبض غاطس ألوميتال محمل",
      "عجل الإدراج مرحلتين",
      "السعر مفاجأة",
    ],
    images: [matabe51, matabe52, matabe53, matabe54, matabe55, matabe56, matabe57, matabe58],
  },
  {
    slug: "dressing",
    title: "دريسنج",
    summary: "دريسنجات من خامة محترمة: كونتر فرست وود وفينيه وود HPL وميلامين، بمقاسات وتصميمات حسب اختيارك.",
    cover: dressing4,
    specs: [
      "دريسنجات من خامة محترمة جدًا",
      "خشب كونتر فرست وود وفينيه وود HPL وميلامين",
      "الدولف خشب MDF إسباني",
      "مفصلات باكم سوفت كلوز إيطالي",
      "عجل أدراج مرحلتين",
      "مقبض مخفي أسود",
      "تقسيمات كلها حسب اختيار العميل بالمقاسات والتصميمات",
    ],
    images: [
      dressing1,
      dressing2,
      dressing3,
      dressing4,
      dressing5,
      dressing6,
      dressing7,
      dressing8,
      dressing9,
      dressing10,
      dressing11,
      dressing12,
    ],
  },
  {
    slug: "tv-walls",
    title: "بانوهات حائط التلفزيون",
    summary:
      "حوّل حائط التلفزيون إلى قطعة فنية تعكس ذوقك وشخصيتك — تصميمات عصرية تجمع بين الأناقة والعملية.",
    cover: tvImages[1],
    specs: [
      "حوائط وديكورات التلفزيون هي اللمسة الجمالية الأساسية في غرفة المعيشة، حيث تجمع بين الأناقة والعملية من خلال تصميمات عصرية ومميزة تناسب مختلف الأذواق والمساحات.",
      "نوفر مجموعة متنوعة من التصميمات باستخدام بديل الرخام، وبديل الخشب، والجبس بورد، والبانوهات الديكورية، مع وحدات تلفزيون ورفوف بتفاصيل أنيقة تضيف لمسة من الفخامة والتميز لمنزلك.",
      "حوّل حائط التلفزيون إلى قطعة فنية تعكس ذوقك وشخصيتك.",
    ],
    images: tvImages,
  },
]

export function getCollection(slug: string) {
  return collections.find((item) => item.slug === slug)
}
