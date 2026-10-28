// Journal articles. Medical content is general education and should be reviewed
// by the VO2 medical team before publishing. Authors are placeholder doctors.
import type { Block, Section } from "./types";

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  published: string; // ISO date
  author: { name: string; role: string };
  sections: Section[];
  // Treatment pages this article links to
  treatments: string[];
};

export const articles: Article[] = [
  {
    slug: "pcos-pigmentation",
    title: "PCOS pigmentation: why your serum isn't working",
    category: "Hormones & skin",
    excerpt: "What's happening under the skin, and the tests worth discussing with your doctor before any treatment.",
    published: "2026-10-06",
    author: { name: "Dr. Kavya Hegde", role: "Wellness & Hormonal Health · MD, Internal Medicine" },
    treatments: ["advanced", "skin"],
    sections: [
      {
        id: "intro",
        title: "When the usual products stop helping",
        blocks: [
          {
            p: "Many women with PCOS tell us the same story. They have tried vitamin C, niacinamide and every brightening serum their friends recommend, and the dark patches on the neck, underarms or cheeks barely move. That is not a failure of willpower or of the products. It is usually a sign that the pigmentation is being driven from inside.",
          },
        ],
      },
      {
        id: "whats-happening",
        title: "What is happening under the skin",
        blocks: [
          { p: "PCOS can show up on the skin in a few different ways, and they need different approaches:" },
          {
            ul: [
              "Velvety darkening on the neck, underarms or inner thighs. This is often linked to insulin resistance, which is common in PCOS.",
              "Patchy brown pigment on the cheeks and upper lip. Hormonal shifts can make this kind of pigmentation more likely, and sun exposure makes it worse.",
              "Dark marks left behind after hormonal acne. These fade slowly, especially on Indian skin, which is quick to pigment after inflammation.",
            ],
          },
          { p: "A serum works on the surface. If insulin or hormones keep sending the signal, the pigment keeps coming back." },
        ],
      },
      {
        id: "tests",
        title: "Tests worth discussing with your doctor",
        blocks: [
          { p: "Every case is different, and your doctor will decide what is needed. These are the conversations we most often have:" },
          {
            ul: [
              "Blood sugar and insulin markers, such as fasting glucose, HbA1c or an insulin-related test, to check for insulin resistance.",
              "A hormone profile, to understand how PCOS is affecting you specifically.",
              "Thyroid function, since thyroid problems can affect skin, hair and weight, and can sit alongside PCOS.",
            ],
          },
        ],
      },
      {
        id: "approach",
        title: "An approach that lasts",
        blocks: [
          {
            p: "The most lasting results come from treating both sides together. Internal medicine looks after insulin, hormones and nutrition. Dermatology treats the pigment that is already there, with gentle peels, prescription creams and strict sun protection, chosen so they do not cause new pigmentation.",
          },
          { p: "Progress is gradual. Most women notice the skin lightening over a few months as the internal picture improves." },
          { note: "See a doctor soon if dark patches appear suddenly or spread quickly, or if you also notice unexplained weight change, excess thirst or very irregular periods." },
        ],
      },
    ],
  },
  {
    slug: "bengaluru-monsoon-hair",
    title: "Bengaluru monsoon hair: a six-week plan",
    category: "Seasonal",
    excerpt: "Humidity, hard water and hair fall. What to do in August so September is easier.",
    published: "2026-08-18",
    author: { name: "Dr. Meera Nair", role: "Lead Dermatologist · MD, DVL" },
    treatments: ["hair"],
    sections: [
      {
        id: "intro",
        title: "Why your hair changes when the rain arrives",
        blocks: [
          {
            p: "Every monsoon, our consultations fill with the same worry: hair coming out in the shower, a scalp that itches, and strands that feel limp by lunchtime. Some of this is normal, and most of it responds well to a simple routine.",
          },
          {
            ul: [
              "Humidity keeps the scalp damp for longer, which suits the yeast linked to dandruff and itching.",
              "Many Bengaluru homes rely on borewell water, which is often hard. Mineral build-up can leave hair dull, tangled and prone to breakage.",
              "Seasonal shedding is common, and stress or a recent illness can add to it.",
            ],
          },
        ],
      },
      {
        id: "weeks-1-2",
        title: "Weeks one and two: reset the scalp",
        blocks: [
          {
            ul: [
              "Wash two or three times a week with a gentle shampoo, and always dry the scalp fully. Avoid tying up damp hair.",
              "If you have flaking or itching, an anti-dandruff shampoo used as directed can help. Leave it on the scalp for a few minutes before rinsing.",
              "Keep oils light and brief. Heavy oil left on overnight in humid weather can make itching worse.",
            ],
          },
        ],
      },
      {
        id: "weeks-3-4",
        title: "Weeks three and four: deal with the water",
        blocks: [
          {
            ul: [
              "A shower filter can reduce mineral build-up if your water is hard.",
              "Use conditioner on the lengths, not the scalp, and detangle gently with a wide-toothed comb.",
              "Eat regular meals with enough protein. Hair is sensitive to crash diets.",
            ],
          },
        ],
      },
      {
        id: "weeks-5-6",
        title: "Weeks five and six: check in",
        blocks: [
          {
            p: "By now, itching should have settled and shedding should be steady or easing. If it is not, it is worth finding out why. Hair fall can be linked to iron, thyroid or hormonal changes, which a scalp analysis and simple tests can pick up.",
          },
          { note: "See a doctor if you notice bald patches, a widening parting, a painful or inflamed scalp, or heavy shedding that lasts longer than three months." },
        ],
      },
    ],
  },
  {
    slug: "bridal-skin-timeline",
    title: "Bridal skin, counted backwards from the date",
    category: "Weddings",
    excerpt: "What to start at six months, three months and three weeks. And what never to do the week before.",
    published: "2026-07-21",
    author: { name: "Dr. Meera Nair", role: "Lead Dermatologist · MD, DVL" },
    treatments: ["medi-facials", "skin", "laser"],
    sections: [
      {
        id: "intro",
        title: "Glowing, not recovering",
        blocks: [
          {
            p: "The best bridal skin is planned, not rushed. Most problems we see in the final fortnight come from trying something new too late. Here is the timeline we use with our brides, counted backwards from the day.",
          },
        ],
      },
      {
        id: "six-months",
        title: "Six months before",
        blocks: [
          {
            ul: [
              "Book a consultation. This is the time to treat acne, pigmentation or scarring, because these need several sessions and time to settle.",
              "Start sunscreen every day if you do not already. It protects every other treatment you do.",
              "If you want laser hair reduction, begin now. A full course takes months.",
            ],
          },
        ],
      },
      {
        id: "three-months",
        title: "Three months before",
        blocks: [
          {
            ul: [
              "Begin a bridal facial series, spaced every few weeks, so your skin is at its best on the day.",
              "Settle on your skincare routine and stop experimenting with new products.",
              "If you are considering injectables, have a conversation with your doctor now, not in the final weeks.",
            ],
          },
        ],
      },
      {
        id: "six-weeks",
        title: "Six to three weeks before",
        blocks: [
          {
            ul: [
              "Have any final peel no later than about four weeks out, so any flaking has fully settled.",
              "Do a full trial of your bridal makeup, so you know how your skin reacts.",
              "Prioritise sleep and water. Pre-wedding stress shows on the skin.",
            ],
          },
        ],
      },
      {
        id: "final-week",
        title: "The final week",
        blocks: [
          { p: "Keep things gentle: a calm hydrating facial, your usual routine, sunscreen and rest." },
          { h3: "What never to do the week before" },
          {
            ul: [
              "A peel, laser or injectable you have never had before",
              "New skincare products, however good the reviews",
              "Waxing or threading an area for the first time",
              "Squeezing a spot. Ask your clinic for a safe treatment instead.",
            ],
          },
          { note: "If your skin reacts badly to anything in the run-up, contact your doctor straight away rather than covering it with more products." },
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const articleHref = (slug: string) => `/journal/${slug}`;

const blockText = (b: Block) => ("p" in b ? b.p : "h3" in b ? b.h3 : "ul" in b ? b.ul.join(" ") : b.note);

// Rough reading time at 200 words a minute
export function readingMinutes(a: Article) {
  const words = a.sections
    .flatMap((s) => [s.title, ...s.blocks.map(blockText)])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
