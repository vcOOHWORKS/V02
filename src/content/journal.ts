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
  // Other pages worth linking from the article's sidebar
  alsoSee?: { label: string; href: string }[];
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
  {
    slug: "laser-hair-reduction-indian-skin",
    title: "Laser hair reduction on Indian skin: what to really expect",
    category: "Laser",
    excerpt: "How many sessions, how it feels, what to avoid before and after, and why it is reduction rather than removal.",
    published: "2026-10-20",
    author: { name: "Dr. Ananya Rao", role: "Aesthetic Physician · MBBS, Dip. Aesthetic Medicine" },
    treatments: ["laser"],
    sections: [
      {
        id: "intro",
        title: "Yes, it works on Indian skin",
        blocks: [
          {
            p: "For years, many women in India were told laser hair reduction was only for fair skin with dark hair. Modern lasers changed that. With the right device and settings for darker skin, and a patch test first, it can be done safely and effectively on Indian skin.",
          },
        ],
      },
      {
        id: "how-it-works",
        title: "How it works, in plain words",
        blocks: [
          {
            p: "The laser targets the pigment in the hair root and heats it, which weakens the follicle's ability to grow hair. Only hairs in their active growth phase respond, and at any time only some of your hairs are in that phase. That is why one session is never enough.",
          },
        ],
      },
      {
        id: "expect",
        title: "What to expect",
        blocks: [
          {
            ul: [
              "Usually six to eight sessions, four to six weeks apart, depending on the area and your hair.",
              "A warm snap during each pulse. Cooling, and numbing cream where useful, keep it comfortable.",
              "Mild redness for a few hours afterwards is common.",
              "Long-term reduction rather than permanent removal. An occasional maintenance session may be needed.",
            ],
          },
          {
            p: "Hormonal conditions such as PCOS can mean hair keeps being stimulated to grow. Results are still possible, but you may need more sessions and regular maintenance, ideally alongside care for the underlying condition.",
          },
        ],
      },
      {
        id: "before-after",
        title: "Before and after a session",
        blocks: [
          { h3: "Before" },
          {
            ul: [
              "Avoid sun exposure and tanning for a few weeks.",
              "Shave the area a day before. Do not wax, thread or epilate, since the laser needs the root in place.",
              "Tell your clinician about any medicines, especially those that make skin sensitive to light.",
            ],
          },
          { h3: "After" },
          {
            ul: [
              "Use sunscreen every day on treated areas that see the sun.",
              "Skip hot baths, saunas and intense workouts for a day or two.",
              "Expect treated hairs to shed over the following two weeks. This is normal.",
            ],
          },
          { note: "Contact your clinic if you notice blistering, crusting or patches of darker or lighter skin after a session." },
        ],
      },
    ],
  },
  {
    slug: "sunscreen-indian-skin",
    title: "The one habit that does the most for Indian skin",
    category: "Skin",
    excerpt: "Why daily sunscreen matters more than any serum, how to choose one, and how to make it a habit you keep.",
    published: "2026-09-29",
    author: { name: "Dr. Meera Nair", role: "Lead Dermatologist · MD, DVL" },
    treatments: ["skin", "laser"],
    sections: [
      {
        id: "intro",
        title: "Before anything else, protection",
        blocks: [
          {
            p: "If you asked us to choose one habit for healthier, more even skin, it would not be a serum or a treatment. It would be sunscreen, every day. Indian skin pigments easily, and the sun is the biggest everyday trigger for dark spots, melasma, uneven tone and early ageing.",
          },
        ],
      },
      {
        id: "why",
        title: "Why it matters so much here",
        blocks: [
          {
            ul: [
              "Strong sunlight for most of the year, even on cloudy monsoon days.",
              "Pigmentation that is quick to appear and slow to fade.",
              "Visible light, not only UV, can worsen melasma, which is common in Indian women.",
              "Every treatment you do for pigmentation works better, and lasts longer, with daily protection.",
            ],
          },
        ],
      },
      {
        id: "choosing",
        title: "How to choose one",
        blocks: [
          {
            ul: [
              "Broad spectrum, with SPF 30 or higher and a high PA rating for UVA protection.",
              "A texture you will actually wear: gel for oily skin, cream for dry skin.",
              "If you have melasma, ask your doctor about a tinted sunscreen, which also helps block visible light.",
              "Something that suits your skin tone without leaving a white cast.",
            ],
          },
        ],
      },
      {
        id: "habit",
        title: "Making it a habit",
        blocks: [
          {
            ul: [
              "Apply it as the last step of your morning routine, before makeup.",
              "Use enough: roughly two finger-lengths for the face and neck.",
              "Reapply every two to three hours when you are outdoors, or after sweating.",
              "Add a hat, a dupatta or an umbrella at midday. The old ways still work.",
            ],
          },
          { note: "See a doctor if a dark patch changes shape or colour, grows quickly, itches or bleeds." },
        ],
      },
    ],
  },
  {
    slug: "postpartum-hair-fall",
    title: "Post-partum hair fall: why it happens, and when it stops",
    category: "Hair",
    excerpt: "The shedding many mothers notice a few months after birth is common and usually temporary. Here is what helps.",
    published: "2026-09-08",
    author: { name: "Dr. Kavya Hegde", role: "Wellness & Hormonal Health · MD, Internal Medicine" },
    treatments: ["hair", "advanced"],
    sections: [
      {
        id: "intro",
        title: "You are not imagining it",
        blocks: [
          {
            p: "A few months after having a baby, many women see more hair in the brush and the shower drain than ever before. It can be alarming, especially when you are already exhausted. The reassuring news is that, for most women, it is temporary.",
          },
        ],
      },
      {
        id: "why",
        title: "Why it happens",
        blocks: [
          {
            p: "During pregnancy, higher hormone levels keep more hairs in their growing phase, so many women notice thicker hair. After birth, hormones fall and those hairs move into a resting phase together, then shed. The shedding usually begins two to four months after delivery.",
          },
        ],
      },
      {
        id: "when",
        title: "When it usually settles",
        blocks: [
          {
            p: "For most women, shedding eases within six to twelve months, and hair gradually returns to its usual fullness. New short hairs along the hairline are a good sign that regrowth has started.",
          },
        ],
      },
      {
        id: "helps",
        title: "What helps",
        blocks: [
          {
            ul: [
              "Eat regularly, with enough protein. Recovery and feeding both need it.",
              "Ask your doctor to check iron, vitamin D and thyroid. Low iron and post-partum thyroid changes are common and can add to hair fall.",
              "Be gentle: avoid tight hairstyles, harsh treatments and too much heat.",
              "Rest where you can. Stress and broken sleep make it worse.",
            ],
          },
          {
            note: "See a doctor if shedding lasts longer than a year, you notice bald patches, or you also feel unusually tired, cold or low in mood.",
          },
        ],
      },
    ],
  },
  {
    slug: "medi-facial-or-salon-facial",
    title: "Medi facial or salon facial? How to choose",
    category: "Facials",
    excerpt: "Both have their place. The difference is purpose: one is designed to treat a concern, the other to refresh and relax.",
    published: "2026-08-04",
    author: { name: "Dr. Meera Nair", role: "Lead Dermatologist · MD, DVL" },
    treatments: ["medi-facials", "skin"],
    alsoSee: [{ label: "Salon & nails", href: "/salon-nails" }],
    sections: [
      {
        id: "intro",
        title: "Two different jobs",
        blocks: [
          {
            p: "It is a question we hear often. The simplest answer: a medi facial is chosen to treat something specific, while a salon facial is designed to cleanse, refresh and relax. Both can be good for you; they just do different jobs.",
          },
        ],
      },
      {
        id: "medi",
        title: "Choose a medi facial when",
        blocks: [
          {
            ul: [
              "You have a concern such as acne, congestion, dullness or uneven tone.",
              "You are preparing for an event and want results that last beyond the evening.",
              "Your skin is sensitive and you want products and steps chosen with a doctor's input.",
              "You are combining it with other treatments as part of a plan.",
            ],
          },
        ],
      },
      {
        id: "salon",
        title: "Choose a salon facial when",
        blocks: [
          {
            ul: [
              "Your skin is generally healthy and you want a cleanse and glow.",
              "You want an hour of rest and care.",
              "You are pairing it with hair or nail services for a complete refresh.",
            ],
          },
        ],
      },
      {
        id: "either",
        title: "Whichever you choose",
        blocks: [
          {
            p: "Tell your therapist about any active treatments you use, such as retinoids or acids, and avoid strong exfoliation in the week before an important event.",
          },
          { note: "If a facial leaves your skin burning, swollen or broken out for more than a day or two, speak to a doctor before your next one." },
        ],
      },
    ],
  },
  {
    slug: "microblading-or-powder-brows",
    title: "Microblading or powder brows? Choosing the brows for you",
    category: "Permanent makeup",
    excerpt: "Hair strokes or soft shading: how your skin type, routine and style point to the right technique.",
    published: "2026-06-30",
    author: { name: "Ritika Menon", role: "Senior PMU Artist" },
    treatments: ["permanent-makeup"],
    sections: [
      {
        id: "intro",
        title: "Two techniques, two looks",
        blocks: [
          {
            p: "Both microblading and powder brows are forms of cosmetic tattooing that last one to three years. The difference is in the finish, and in which skin each technique suits best.",
          },
        ],
      },
      {
        id: "microblading",
        title: "Microblading",
        blocks: [
          {
            p: "Fine, hair-like strokes are drawn into the skin to mimic natural brow hairs. The result is soft and natural, ideal if you have some brow hair and want to fill gaps or refine the shape.",
          },
          { ul: ["Best for normal to dry skin, where strokes heal crisp.", "A natural, no-makeup look.", "Usually needs a refresh sooner than powder brows."] },
        ],
      },
      {
        id: "powder",
        title: "Powder brows",
        blocks: [
          {
            p: "Tiny dots of pigment build up a soft shaded effect, like lightly filled-in brows. It suits oily skin, where hair strokes can blur as they heal.",
          },
          { ul: ["Best for oily or combination skin.", "A soft, defined finish, from natural to more polished.", "Tends to last longer between refreshes."] },
        ],
      },
      {
        id: "choose",
        title: "How we help you choose",
        blocks: [
          {
            p: "At your consultation we look at your skin type, your existing brows and how you like to wear makeup, then draw the shape on your face before anything begins. Some clients choose combination brows: strokes at the front with shading through the tail.",
          },
          { note: "Permanent makeup is not suitable during pregnancy or breastfeeding, or if you are prone to keloid scarring. Tell us about any medical conditions first." },
        ],
      },
    ],
  },
  {
    slug: "first-consultation-at-vo2",
    title: "Your first consultation at VO2: what actually happens",
    category: "Inside VO2",
    excerpt: "Forty minutes, a doctor, a written plan, and no treatment sold on the day. Here is the visit, step by step.",
    published: "2026-06-09",
    author: { name: "Dr. Meera Nair", role: "Lead Dermatologist · MD, DVL" },
    treatments: [],
    alsoSee: [
      { label: "Our brand story", href: "/our-story" },
      { label: "About us", href: "/about" },
    ],
    sections: [
      {
        id: "intro",
        title: "A conversation, not a sales pitch",
        blocks: [
          {
            p: "Booking a first appointment at any clinic can feel uncertain. Will you be rushed? Pushed into packages? Here is exactly what happens at VO2, so you know before you arrive.",
          },
        ],
      },
      {
        id: "before",
        title: "Before you come",
        blocks: [
          {
            ul: [
              "Bring a list of your medicines and supplements, and the skincare you use.",
              "Bring any reports or past prescriptions that might help.",
              "Come with your concerns written down, if that helps you remember.",
            ],
          },
        ],
      },
      {
        id: "visit",
        title: "The visit",
        blocks: [
          {
            ul: [
              "Arrive: tea, a warm towel and a few quiet minutes before anything begins.",
              "Consult: about forty minutes with a doctor, covering your concern, your history, your routine, sleep and stress.",
              "Examine: a close look at your skin, hair or scalp, and tests only if they are needed.",
              "Plan: a written plan with treatments, number of sessions and prices.",
            ],
          },
          { p: "Nothing is sold on the first visit. You take the plan home and decide in your own time." },
        ],
      },
      {
        id: "after",
        title: "After you leave",
        blocks: [
          {
            p: "If you choose to begin, we will schedule your first session. Either way, you will have a clear understanding of your skin or hair, and of what is realistic.",
          },
          { note: "If you have a sudden or painful change in your skin or hair, don't wait for a routine consultation; see a doctor promptly." },
        ],
      },
    ],
  },
  {
    slug: "caring-for-nail-extensions",
    title: "Nail extensions and gel polish: caring for them between visits",
    category: "Salon & nails",
    excerpt: "Small habits that help your nails look good for longer, and keep your natural nails healthy underneath.",
    published: "2026-05-19",
    author: { name: "The VO2 Salon team", role: "Hair and nail specialists" },
    treatments: [],
    alsoSee: [{ label: "Salon & nails", href: "/salon-nails" }],
    sections: [
      {
        id: "intro",
        title: "Two to three weeks of good nails",
        blocks: [
          {
            p: "With proper care, gel polish and nail extensions usually last two to three weeks. A few simple habits make the difference between nails that stay neat and nails that lift or chip early.",
          },
        ],
      },
      {
        id: "daily",
        title: "Every day",
        blocks: [
          {
            ul: [
              "Use cuticle oil daily. It keeps nails and the skin around them flexible.",
              "Wear gloves for washing up and cleaning. Water and detergents weaken the bond.",
              "Treat nails as jewels, not tools: don't use them to open cans or scrape labels.",
              "Moisturise your hands, especially in dry or air-conditioned rooms.",
            ],
          },
        ],
      },
      {
        id: "dont",
        title: "Please don't",
        blocks: [
          {
            ul: [
              "Pick or peel off gel polish. It takes layers of your natural nail with it.",
              "Try to remove extensions at home. Book a professional removal instead.",
              "Ignore a lifted edge. Water can get trapped underneath; come in for a repair.",
            ],
          },
        ],
      },
      {
        id: "health",
        title: "Keeping natural nails healthy",
        blocks: [
          {
            p: "Give your natural nails a short break between sets now and then, keep them shorter while they recover, and tell your technician if anything feels sore.",
          },
          { note: "See a doctor if you notice swelling, pain, pus, or green or dark discolouration under or around a nail." },
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

// Newest first
export const articlesByDate = [...articles].sort((a, b) => b.published.localeCompare(a.published));

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
