// Treatment categories, mirroring the clinic's current menu, plus dental care.
// Clinical details (durations, sessions, downtime, FAQ answers) are indicative
// placeholders and must be reviewed by the VO2 medical team before launch.

export type TreatmentItem = {
  name: string;
  description: string;
  duration: string;
  sessions: string;
  downtime: string;
};

export type Step = { title: string; body: string };

export type GroupSlug = "skin-aesthetics" | "ayurveda-recovery" | "movement" | "dental";

export type Category = {
  slug: string;
  group: GroupSlug;
  title: string;
  // Hero heading: the second part is emphasised.
  heading: [string, string];
  keywords: string; // short line for the nav menu
  tagline: string;
  summary: string; // card copy
  intro: string;
  tone: string; // warm stand-in for photography
  brief: string; // shoot brief for the hero image
  concerns: string[];
  items: TreatmentItem[];
  steps?: Step[]; // falls back to defaultSteps
  note: { quote: string; name: string; role: string; placeholder: true };
  faqs: { q: string; a: string }[];
  related: string[];
  firstVisit?: string; // falls back to the group's
  results?: false; // no before/after gallery (movement, therapies)
};

export const defaultSteps: Step[] = [
  { title: "Consult", body: "Forty minutes with a doctor to understand your concern, your history and what you would like to change." },
  { title: "Plan", body: "A written plan with the treatments, number of sessions and prices, agreed with you before anything begins." },
  { title: "Treat", body: "Treatment in a calm, private room, by the doctor or a trained clinician under the doctor's supervision." },
  { title: "Aftercare", body: "Written aftercare, a follow-up on WhatsApp within 48 hours, and a review of your progress." },
];

export const categories: Category[] = [
  {
    slug: "skin",
    group: "skin-aesthetics",
    title: "Skin treatments",
    heading: ["Skin", "treatments"],
    keywords: "Acne, pigmentation, ageing",
    tagline: "Acne, pigmentation and ageing, treated for Indian skin.",
    summary: "Clinical care for acne, pigmentation, texture and ageing, planned around Indian skin tones.",
    intro:
      "Indian skin is resilient and quick to pigment. Every skin plan at VO2 starts with that in mind: a dermatologist reads your skin, your history and your routine, then chooses the gentlest treatment that will actually work.",
    tone: "linear-gradient(170deg,#efe2d8 0%,#d9a58e 55%,#b4614c 100%)",
    brief: "Macro of a cheekbone in raking light. Pores and texture visible. Honesty is the luxury.",
    concerns: ["Acne & breakouts", "Acne scars", "Pigmentation & melasma", "Uneven tone", "Fine lines", "Dark circles", "Open pores", "Dullness"],
    items: [
      {
        name: "Acne management",
        description: "A medical plan that combines in-clinic treatment with prescription care to calm active breakouts and prevent new ones.",
        duration: "30–45 min",
        sessions: "4–6, every 2–3 weeks",
        downtime: "None to mild redness",
      },
      {
        name: "Acne scar revision",
        description: "Microneedling, subcision or peels, chosen for your scar type, to soften rolling, boxcar and ice-pick scars over time.",
        duration: "45–60 min",
        sessions: "3–6, monthly",
        downtime: "2–4 days of redness",
      },
      {
        name: "Pigmentation & melasma care",
        description: "A layered approach of peels, topical therapy and sun discipline for melasma, sun spots and post-acne marks.",
        duration: "30–45 min",
        sessions: "4–8, every 2–4 weeks",
        downtime: "Minimal",
      },
      {
        name: "Chemical peels",
        description: "Medical-grade peels, from gentle brightening to deeper resurfacing, selected for your skin type and the season.",
        duration: "30 min",
        sessions: "4–6, every 2–3 weeks",
        downtime: "1–5 days of light flaking",
      },
      {
        name: "Microneedling",
        description: "Controlled micro-channels that prompt the skin's own collagen, for texture, pores and early scarring.",
        duration: "60 min",
        sessions: "3–6, monthly",
        downtime: "1–3 days of redness",
      },
      {
        name: "Dark circle treatment",
        description: "Diagnosis first, since dark circles can be pigment, hollowness or thin skin, then the treatment that suits the cause.",
        duration: "30–45 min",
        sessions: "Varies by cause",
        downtime: "Minimal",
      },
    ],
    note: {
      quote: "Most skin problems I see were made worse by doing too much. My job is often to find the one or two things that will make the biggest difference, and stop everything else.",
      name: "Dr. Meera Nair",
      role: "Lead Dermatologist · MD, DVL",
      placeholder: true,
    },
    faqs: [
      {
        q: "Is it safe for darker Indian skin tones?",
        a: "Yes, when the treatment and settings are chosen for your skin type. Indian skin can pigment after aggressive treatment, so we start gently and build up, with a patch test where it is needed.",
      },
      {
        q: "How soon will I see results?",
        a: "Some changes, like a brighter tone after a peel, show within a week. Acne scars and melasma take longer, usually several sessions over a few months. Your doctor will give you a realistic timeline at the consultation.",
      },
      {
        q: "Do I need to stop my current skincare?",
        a: "Bring your products to the consultation. Some, like retinoids or exfoliating acids, may need a pause before certain treatments. Your doctor will tell you exactly what to stop and when.",
      },
      {
        q: "Who performs the treatment?",
        a: "Every plan is made by a dermatologist. Treatments are carried out by the doctor or by trained clinicians under the doctor's supervision.",
      },
    ],
    related: ["medi-facials", "laser", "non-surgical-aesthetics"],
  },
  {
    slug: "medi-facials",
    group: "skin-aesthetics",
    title: "Medi facials",
    heading: ["Medi", "facials"],
    keywords: "Glow, hydration, clarity",
    tagline: "Facials with a clinical purpose, and a calm hour to go with them.",
    summary: "Doctor-designed facials that cleanse, hydrate and brighten, with results you can see that evening.",
    intro:
      "A medi facial is a facial with a medical reason behind it. Each one is chosen for your skin on the day, using clinical-grade products and devices, and delivered slowly, in a room designed for you to rest.",
    tone: "linear-gradient(175deg,#f2e7de 0%,#e2b8a3 55%,#c47a63 100%)",
    brief: "Hands resting on a towel-wrapped client, steam softening the light. Calm, unhurried, close.",
    concerns: ["Dullness", "Dehydration", "Congested pores", "Uneven tone", "Pre-event glow", "Sensitive skin"],
    items: [
      {
        name: "Hydra-infusion facial",
        description: "Deep cleansing, gentle exfoliation and serum infusion in one sequence, for clear, hydrated skin with no downtime.",
        duration: "60 min",
        sessions: "One-off, or monthly",
        downtime: "None",
      },
      {
        name: "Brightening medi facial",
        description: "A peel and antioxidant facial for dull or uneven skin, timed well before an occasion.",
        duration: "60 min",
        sessions: "3–4, every 2 weeks",
        downtime: "None to light flaking",
      },
      {
        name: "Acne-clearing facial",
        description: "Medical extraction, soothing actives and blue-light care for congested, breakout-prone skin.",
        duration: "60 min",
        sessions: "4–6, every 2 weeks",
        downtime: "Mild redness for a few hours",
      },
      {
        name: "Oxygen facial",
        description: "Oxygen-infused serums for a soft, plumped finish. A gentle choice for sensitive skin.",
        duration: "45 min",
        sessions: "One-off, or monthly",
        downtime: "None",
      },
      {
        name: "Bridal facial series",
        description: "A sequence of facials planned backwards from the wedding date, so your skin peaks on the day.",
        duration: "60 min each",
        sessions: "4–6, over 3 months",
        downtime: "None",
      },
      {
        name: "Microdermabrasion",
        description: "Fine mechanical exfoliation to polish texture and help your skincare absorb better.",
        duration: "45 min",
        sessions: "4–6, every 2 weeks",
        downtime: "None",
      },
    ],
    note: {
      quote: "A facial should leave your skin calmer than it was, not just shinier. If it stings for days, it was the wrong facial.",
      name: "Dr. Meera Nair",
      role: "Lead Dermatologist · MD, DVL",
      placeholder: true,
    },
    faqs: [
      {
        q: "How is a medi facial different from a salon facial?",
        a: "A medi facial is planned by a doctor for a specific skin concern and uses clinical-grade products and devices. A salon facial is mainly for relaxation and general care.",
      },
      {
        q: "How close to an event should I book?",
        a: "For a one-off glow, three to five days before. For a series, start two to three months ahead. We avoid stronger peels in the final week.",
      },
      {
        q: "Can I wear makeup afterwards?",
        a: "For most facials, yes, after a few hours. After a peel or extractions, we suggest waiting until the next day.",
      },
    ],
    related: ["skin", "laser", "body"],
  },
  {
    slug: "laser",
    group: "skin-aesthetics",
    title: "Laser treatments",
    heading: ["Laser", "treatments"],
    keywords: "Hair reduction, toning, scars",
    tagline: "Precise, doctor-led laser care, set for Indian skin.",
    summary: "Laser hair reduction, toning and resurfacing, with settings chosen for Indian skin tones.",
    intro:
      "A laser is only as good as the hands and settings behind it. Every laser plan at VO2 starts with a skin assessment and a patch test, and uses devices suited to Indian skin, so results come without unnecessary risk.",
    tone: "linear-gradient(185deg,#ece0d7 0%,#cf9a86 55%,#97302e 100%)",
    brief: "A single line of warm light across a shoulder in a dark room. Precise, quiet, clinical without being cold.",
    concerns: ["Unwanted hair", "Pigmentation", "Sun damage", "Acne scars", "Large pores", "Tattoo removal"],
    items: [
      {
        name: "Laser hair reduction",
        description: "Long-term reduction of unwanted hair on the face and body, with devices suited to darker skin tones.",
        duration: "15–60 min, by area",
        sessions: "6–8, every 4–6 weeks",
        downtime: "None to mild redness",
      },
      {
        name: "Laser toning",
        description: "Low-energy laser sessions that gradually even out pigmentation, melasma and dull tone.",
        duration: "30 min",
        sessions: "6–10, every 2 weeks",
        downtime: "None",
      },
      {
        name: "Carbon laser peel",
        description: "A carbon layer and laser pass that deep-cleans pores and leaves skin bright and smooth.",
        duration: "45 min",
        sessions: "One-off, or 3–5 every 2–3 weeks",
        downtime: "None",
      },
      {
        name: "Fractional resurfacing",
        description: "Fractional laser for acne scars, texture and fine lines, working on tiny columns of skin at a time.",
        duration: "45–60 min",
        sessions: "3–5, every 4–6 weeks",
        downtime: "3–7 days of redness and flaking",
      },
      {
        name: "Tattoo removal",
        description: "Gradual fading of unwanted tattoos over several sessions, with care to protect the surrounding skin.",
        duration: "15–30 min",
        sessions: "6–10, every 6–8 weeks",
        downtime: "A few days of tenderness",
      },
    ],
    steps: [
      { title: "Assess", body: "A doctor checks your skin type, history and medication, and explains what a realistic result looks like." },
      { title: "Patch test", body: "A small test area, checked after a few days, so settings are proven on your skin before a full session." },
      { title: "Treat", body: "Sessions with cooling and, where useful, numbing cream, at settings recorded and adjusted each visit." },
      { title: "Aftercare", body: "Written sun and skincare guidance, a follow-up on WhatsApp within 48 hours, and progress reviews." },
    ],
    note: {
      quote: "The right laser setting for Indian skin is a matter of millimetres and milliseconds. I would rather add a session than rush one.",
      name: "Dr. Ananya Rao",
      role: "Aesthetic Physician · MBBS, Dip. Aesthetic Medicine",
      placeholder: true,
    },
    faqs: [
      {
        q: "Does laser hair reduction work on Indian skin?",
        a: "Yes. We use laser types and settings designed for darker skin tones and always begin with a patch test. Most people see a clear reduction after the full course.",
      },
      {
        q: "Does it hurt?",
        a: "Most people describe it as a warm snap. We use cooling and, where useful, numbing cream to keep you comfortable.",
      },
      {
        q: "What should I avoid before a session?",
        a: "Avoid sun exposure, tanning and waxing for a few weeks before. Shaving is fine. Your clinician will give you a full checklist.",
      },
      {
        q: "Is laser hair reduction permanent?",
        a: "It gives long-term reduction rather than total, permanent removal. An occasional maintenance session may be needed.",
      },
    ],
    related: ["skin", "medi-facials", "body"],
  },
  {
    slug: "hair",
    group: "skin-aesthetics",
    title: "Hair treatments",
    heading: ["Hair", "treatments"],
    keywords: "Hair fall, PRP, scalp care",
    tagline: "We find out why it is falling first. Then we treat it.",
    summary: "Diagnosis-led care for hair fall, thinning and scalp health, from PRP to scalp therapy.",
    intro:
      "Hair fall has many causes: hormones, nutrition, stress, genetics, a recent illness or a pregnancy. We start with a scalp analysis and, where needed, blood tests, so the treatment matches the cause rather than the symptom.",
    tone: "linear-gradient(190deg,#eadbcf 0%,#c99079 55%,#8e3a33 100%)",
    brief: "Long hair falling across a warm backdrop, lit from behind so each strand holds light.",
    concerns: ["Hair fall", "Thinning", "Post-partum shedding", "Dandruff & flaking", "Receding hairline", "Weak, brittle hair"],
    items: [
      {
        name: "Scalp and hair analysis",
        description: "A detailed consultation with trichoscopy to look closely at the scalp and roots, plus tests when needed.",
        duration: "40 min",
        sessions: "Once, then reviews",
        downtime: "None",
      },
      {
        name: "PRP therapy",
        description: "Platelet-rich plasma from your own blood, applied to the scalp to support weakened follicles.",
        duration: "60 min",
        sessions: "4–6, monthly",
        downtime: "Mild tenderness for a day",
      },
      {
        name: "GFC therapy",
        description: "A concentrated form of growth factors from your own blood, for thinning areas.",
        duration: "60 min",
        sessions: "3–4, monthly",
        downtime: "Mild tenderness for a day",
      },
      {
        name: "Hair mesotherapy",
        description: "Micro-injections of vitamins and actives into the scalp to nourish the follicles.",
        duration: "45 min",
        sessions: "4–8, every 2–3 weeks",
        downtime: "None",
      },
      {
        name: "Scalp therapy",
        description: "Clinical cleansing and soothing treatments for dandruff, itching and an oily or flaky scalp.",
        duration: "45 min",
        sessions: "4–6, every 2 weeks",
        downtime: "None",
      },
      {
        name: "Post-partum hair care",
        description: "A gentle plan for the shedding many women notice a few months after childbirth, designed around breastfeeding.",
        duration: "40 min",
        sessions: "Varies",
        downtime: "None",
      },
    ],
    note: {
      quote: "Hair is often the first place the body shows that something inside is off. Treating the scalp without checking the rest is only half the job.",
      name: "Dr. Kavya Hegde",
      role: "Wellness & Hormonal Health · MD, Internal Medicine",
      placeholder: true,
    },
    faqs: [
      {
        q: "How long before I see results?",
        a: "Hair grows slowly. Most people notice less shedding in six to eight weeks and visible regrowth in three to six months.",
      },
      {
        q: "Is PRP safe?",
        a: "PRP uses your own blood, so allergic reactions are rare. It is done under medical supervision with sterile technique, and your doctor will check it suits you before starting.",
      },
      {
        q: "Will I need blood tests?",
        a: "Often, yes. Thyroid, iron, vitamin levels and hormones can all affect hair. Your doctor will advise which tests are worth doing.",
      },
    ],
    related: ["advanced", "skin", "laser"],
  },
  {
    slug: "non-surgical-aesthetics",
    group: "skin-aesthetics",
    title: "Non-surgical aesthetics",
    heading: ["Non-surgical", "aesthetics"],
    keywords: "Injectables, fillers, lifting",
    tagline: "Refreshed, never changed. The work should not show.",
    summary: "Anti-wrinkle injections, fillers, skin boosters and lifting, done with restraint.",
    intro:
      "Non-surgical aesthetics can soften lines, restore lost volume and lift gently, without surgery. At VO2 the aim is always that you look rested and like yourself. We will often suggest less than you came in for.",
    tone: "linear-gradient(165deg,#f0e4da 0%,#dba893 55%,#a8473a 100%)",
    brief: "Three-quarter profile in soft window light, no makeup, a faint smile. The result should be invisible.",
    concerns: ["Fine lines & wrinkles", "Volume loss", "Under-eye hollows", "Skin laxity", "Lip definition", "Jawline definition"],
    items: [
      {
        name: "Anti-wrinkle injections",
        description: "Softening of expression lines on the forehead, between the brows and around the eyes, keeping natural movement.",
        duration: "20–30 min",
        sessions: "Every 4–6 months",
        downtime: "None to minor marks",
      },
      {
        name: "Dermal fillers",
        description: "Hyaluronic acid fillers to restore volume in the cheeks, lips, chin or jawline, placed conservatively.",
        duration: "30–45 min",
        sessions: "Lasts 9–18 months",
        downtime: "1–3 days of mild swelling",
      },
      {
        name: "Skin boosters",
        description: "Injectable hydration that improves skin quality, glow and fine crepiness from within.",
        duration: "30 min",
        sessions: "2–3, monthly",
        downtime: "Small bumps for a day",
      },
      {
        name: "Under-eye rejuvenation",
        description: "Treatment for hollows and tired-looking eyes, chosen after assessing what is causing them.",
        duration: "30–45 min",
        sessions: "Varies",
        downtime: "Mild swelling for a few days",
      },
      {
        name: "Thread lift",
        description: "Dissolvable threads that lift and support the mid-face and jawline, without surgery.",
        duration: "45–60 min",
        sessions: "Lasts 12–18 months",
        downtime: "3–7 days of tenderness",
      },
      {
        name: "HIFU skin tightening",
        description: "Focused ultrasound that tightens and lifts skin gradually over the following months.",
        duration: "60–90 min",
        sessions: "Once a year",
        downtime: "None",
      },
    ],
    note: {
      quote: "If anyone can tell you have had something done, I have not done my job well. Restraint is the skill.",
      name: "Dr. Ananya Rao",
      role: "Aesthetic Physician · MBBS, Dip. Aesthetic Medicine",
      placeholder: true,
    },
    faqs: [
      {
        q: "Will I look different?",
        a: "You should look refreshed, not changed. We take a conservative approach and review results at a follow-up before adding anything more.",
      },
      {
        q: "Who performs injectable treatments?",
        a: "Only qualified doctors with specialist aesthetic training perform injectables at VO2.",
      },
      {
        q: "Are fillers reversible?",
        a: "Hyaluronic acid fillers can be dissolved if needed, which is one reason we use them.",
      },
      {
        q: "When should I avoid treatment?",
        a: "We do not offer injectables during pregnancy or breastfeeding, and we may wait if you have an infection or an important event within two weeks.",
      },
    ],
    related: ["skin", "laser", "advanced"],
  },
  {
    slug: "permanent-makeup",
    group: "skin-aesthetics",
    title: "Permanent makeup (PMU)",
    heading: ["Permanent", "makeup"],
    keywords: "Brows, lips, lash line",
    tagline: "Wake up with brows, lips and lashes that look like yours.",
    summary: "Microblading, powder brows, lip blush and lash enhancement, designed to suit your face.",
    intro:
      "Permanent makeup is a cosmetic tattoo that lasts one to three years. Every design at VO2 is drawn and agreed with you before any pigment is placed, using shades chosen for Indian skin undertones.",
    tone: "linear-gradient(180deg,#f2e5dc 0%,#dfa792 52%,#b5584a 100%)",
    brief: "Close crop of a brow and eye, natural skin, a single fine stroke catching the light.",
    concerns: ["Thin or sparse brows", "Uneven brows", "Pale or uneven lips", "Lash line definition", "Busy mornings", "Makeup sensitivity"],
    items: [
      {
        name: "Microblading",
        description: "Fine, hair-like strokes for natural, fuller-looking brows.",
        duration: "2–2.5 hrs",
        sessions: "1, plus a touch-up at 6 weeks",
        downtime: "7–10 days of healing",
      },
      {
        name: "Powder brows",
        description: "A soft, shaded finish, like lightly filled-in brows. Suits oily skin well.",
        duration: "2–2.5 hrs",
        sessions: "1, plus a touch-up at 6 weeks",
        downtime: "7–10 days of healing",
      },
      {
        name: "Combination brows",
        description: "Hair strokes at the front with soft shading through the tail, for definition with a natural start.",
        duration: "2.5 hrs",
        sessions: "1, plus a touch-up at 6 weeks",
        downtime: "7–10 days of healing",
      },
      {
        name: "Lip blush",
        description: "A sheer wash of colour to even out lip tone and define the shape.",
        duration: "2–3 hrs",
        sessions: "1, plus a touch-up at 6–8 weeks",
        downtime: "3–5 days of swelling and flaking",
      },
      {
        name: "Lash line enhancement",
        description: "Fine pigment between the lashes for fuller-looking eyes, without a heavy liner.",
        duration: "1.5–2 hrs",
        sessions: "1, plus a touch-up at 6 weeks",
        downtime: "1–2 days of puffiness",
      },
      {
        name: "Correction & colour refresh",
        description: "A colour refresh for your existing PMU, and correction of older work where it is possible.",
        duration: "1–2 hrs",
        sessions: "Varies",
        downtime: "Varies",
      },
    ],
    steps: [
      { title: "Design", body: "We measure, map and draw your new shape on your face, and adjust it until you love it." },
      { title: "Patch test", body: "A small pigment test to check for any reaction, and to confirm the shade on your skin." },
      { title: "Treatment", body: "Pigment placed in a calm, sterile setting with numbing cream throughout." },
      { title: "Touch-up", body: "A perfecting session at six to eight weeks, once the first layer has healed." },
    ],
    note: {
      quote: "The design matters more than the needle. We do not start until you have seen your brows drawn on and love them.",
      name: "Ritika Menon",
      role: "Senior PMU Artist",
      placeholder: true,
    },
    faqs: [
      {
        q: "How long does it last?",
        a: "Usually one to three years, depending on your skin, lifestyle and sun exposure. A yearly colour refresh keeps it looking fresh.",
      },
      {
        q: "Does it hurt?",
        a: "Numbing cream is used throughout. Most clients feel light scratching or pressure.",
      },
      {
        q: "Will the colour suit my skin tone?",
        a: "We choose pigments for Indian undertones, to avoid the grey or red shift seen with poorly matched colours.",
      },
      {
        q: "Who should avoid permanent makeup?",
        a: "We do not offer PMU during pregnancy or breastfeeding, or if you are prone to keloid scarring. Some medical conditions need a doctor's approval first.",
      },
    ],
    related: ["medi-facials", "non-surgical-aesthetics", "dental"],
  },
  {
    slug: "body",
    group: "skin-aesthetics",
    title: "Body treatments",
    heading: ["Body", "treatments"],
    keywords: "Contouring, tightening, stretch marks",
    tagline: "Care for the skin you live in, not just your face.",
    summary: "Contouring, tightening, stretch marks and body brightening, all without surgery.",
    intro:
      "Body treatments at VO2 are about comfort in your own skin. From stubborn areas after pregnancy to stretch marks and uneven tone, every plan starts with a conversation about what you would actually like to change.",
    tone: "linear-gradient(160deg,#f1e6dc 0%,#e0b39c 55%,#c5765c 100%)",
    brief: "Shoulders and collarbone, soft side light, a linen wrap. Calm, not clinical.",
    concerns: ["Stubborn fat", "Loose skin", "Stretch marks", "Uneven body tone", "Cellulite", "Rough, dry skin"],
    items: [
      {
        name: "Non-invasive body contouring",
        description: "Device-based treatment for stubborn areas that do not respond to diet and exercise.",
        duration: "45–60 min",
        sessions: "4–8, weekly",
        downtime: "None",
      },
      {
        name: "Body skin tightening",
        description: "Radiofrequency treatment to firm loose skin on the tummy, arms and thighs.",
        duration: "45 min",
        sessions: "4–6, every 2 weeks",
        downtime: "None",
      },
      {
        name: "Stretch mark treatment",
        description: "Microneedling and laser options to soften and fade stretch marks, including after pregnancy.",
        duration: "45–60 min",
        sessions: "4–6, monthly",
        downtime: "2–3 days of redness",
      },
      {
        name: "Body polishing",
        description: "Exfoliation and nourishing care for smoother, more even skin, often booked before weddings.",
        duration: "60–75 min",
        sessions: "One-off, or monthly",
        downtime: "None",
      },
      {
        name: "Underarm & body brightening",
        description: "Medical peels and care for darker underarms, elbows, knees and inner thighs.",
        duration: "30–45 min",
        sessions: "4–6, every 2–3 weeks",
        downtime: "Minimal",
      },
      {
        name: "Cellulite care",
        description: "Combined device therapy to smooth the look of cellulite on the thighs and hips.",
        duration: "45 min",
        sessions: "6–10, weekly",
        downtime: "None",
      },
    ],
    note: {
      quote: "Women carry so much in their bodies, quite literally. I want body treatments here to feel like care, not correction.",
      name: "Dr. Ananya Rao",
      role: "Aesthetic Physician · MBBS, Dip. Aesthetic Medicine",
      placeholder: true,
    },
    faqs: [
      {
        q: "Is body contouring a weight-loss treatment?",
        a: "No. It is for stubborn areas once you are close to a weight you are comfortable with. For weight concerns, see our advanced treatments.",
      },
      {
        q: "How soon after pregnancy can I start?",
        a: "Usually once you have recovered and, for some treatments, finished breastfeeding. Your doctor will advise what is safe and when.",
      },
      {
        q: "Do stretch marks go away completely?",
        a: "They can fade significantly and feel smoother, but rarely disappear fully. Newer, redder marks respond best.",
      },
    ],
    related: ["advanced", "laser", "skin"],
  },
  {
    slug: "advanced",
    group: "skin-aesthetics",
    title: "Advanced treatments",
    heading: ["Advanced", "treatments"],
    keywords: "IV therapy, PCOS care, RF",
    tagline: "When what shows on the skin starts inside.",
    summary: "IV nutrient therapy, hormonal skin care, RF microneedling and regenerative treatments.",
    intro:
      "Some concerns need more than a single treatment: hormonal acne, PCOS, fatigue that shows on the skin, or ageing that has moved beyond surface care. Advanced treatments at VO2 bring in internal medicine and newer technology, always after a full consultation.",
    tone: "linear-gradient(175deg,#ebdfd5 0%,#c98f7c 50%,#7d2a28 100%)",
    brief: "A quiet treatment chair by a window, a folded blanket, a cup of tulsi tea. Medicine that feels like rest.",
    concerns: ["PCOS & hormonal skin", "Fatigue & low energy", "Deep wrinkles & laxity", "Severe acne scars", "Nutritional deficiencies", "Weight & metabolic health"],
    items: [
      {
        name: "PCOS & hormonal skin plans",
        description: "Joint care from dermatology and internal medicine for acne, pigmentation and hair changes linked to hormones.",
        duration: "60 min",
        sessions: "Ongoing, reviewed monthly",
        downtime: "None",
      },
      {
        name: "IV nutrient therapy",
        description: "Doctor-prescribed infusions of vitamins and antioxidants, given only after blood tests show a need.",
        duration: "45–60 min",
        sessions: "As prescribed",
        downtime: "None",
      },
      {
        name: "RF microneedling",
        description: "Microneedling combined with radiofrequency energy for deeper scars, pores and skin tightening.",
        duration: "60 min",
        sessions: "3–4, monthly",
        downtime: "2–4 days of redness",
      },
      {
        name: "Regenerative facial therapy",
        description: "Treatments that use your own platelets or advanced biologics to support skin repair and quality.",
        duration: "60 min",
        sessions: "3, monthly",
        downtime: "1–2 days of redness",
      },
      {
        name: "Medical weight management",
        description: "A doctor-led plan covering nutrition, metabolism and, where suitable, medication.",
        duration: "45 min",
        sessions: "Ongoing",
        downtime: "None",
      },
    ],
    note: {
      quote: "Skin is usually the last to know what your hormones are doing. When we treat both together, results last longer.",
      name: "Dr. Kavya Hegde",
      role: "Wellness & Hormonal Health · MD, Internal Medicine",
      placeholder: true,
    },
    faqs: [
      {
        q: "Do I need blood tests first?",
        a: "For IV therapy, hormonal plans and weight management, yes. We only recommend a treatment when the results show a reason for it.",
      },
      {
        q: "Is IV therapy safe?",
        a: "When it is prescribed by a doctor after tests and given by trained staff with sterile technique, it is low risk. It is not suitable for everyone, which is why we test first.",
      },
      {
        q: "Can these work alongside my existing medication?",
        a: "Often, yes. Bring a list of your medicines and supplements to the consultation so your doctor can check for any interactions.",
      },
    ],
    related: ["hair", "body", "non-surgical-aesthetics"],
  },
  {
    slug: "dental",
    group: "dental",
    firstVisit: "Dental check-up",
    title: "Dental & smile care",
    heading: ["Dental &", "smile care"],
    keywords: "Whitening, aligners, implants",
    tagline: "A healthy smile, and one that still looks like yours.",
    summary: "Check-ups, cleaning, whitening, clear aligners, veneers and implants, led by a dentist.",
    intro:
      "Your smile is part of your face, so we plan it with the same restraint as everything else at VO2. A dentist checks your teeth and gums first, then suggests the least invasive way to get the result you want: healthy, comfortable and natural, never a row of identical white tiles.",
    tone: "linear-gradient(172deg,#f1e7df 0%,#dcb7a5 52%,#a5584a 100%)",
    brief: "A woman mid-laugh, soft daylight, natural teeth. Warmth, not a toothpaste advert.",
    concerns: ["Stained or dull teeth", "Crooked or gapped teeth", "Chipped teeth", "Missing teeth", "Gum health", "Sensitivity", "Bad breath", "Smile confidence"],
    items: [
      {
        name: "Dental check-up & cleaning",
        description: "A full examination with digital X-rays where needed, then scaling and polishing to remove plaque, tartar and surface stains.",
        duration: "45 min",
        sessions: "Every 6 months",
        downtime: "None",
      },
      {
        name: "Teeth whitening",
        description: "Professional in-clinic whitening, or custom take-home trays, at a strength chosen to protect your enamel and avoid sensitivity.",
        duration: "60–90 min",
        sessions: "1 in clinic, or 2 weeks at home",
        downtime: "Possible mild sensitivity for 1–2 days",
      },
      {
        name: "Clear aligners",
        description: "Near-invisible, removable aligners that move crooked or gapped teeth gradually, planned with a digital scan of your smile.",
        duration: "30 min reviews",
        sessions: "6–18 months, reviewed every 6–8 weeks",
        downtime: "Slight pressure with each new set",
      },
      {
        name: "Veneers & bonding",
        description: "Tooth-coloured bonding or thin porcelain veneers to repair chips, close small gaps and even out shape, keeping as much natural tooth as possible.",
        duration: "60–90 min per visit",
        sessions: "1–3 visits",
        downtime: "None",
      },
      {
        name: "Smile design",
        description: "A digital preview of your new smile, planned around your face, lips and gum line before any treatment begins.",
        duration: "60 min",
        sessions: "1 planning visit",
        downtime: "None",
      },
      {
        name: "Dental implants",
        description: "A titanium implant that replaces a missing tooth at the root, topped with a crown matched to your natural teeth.",
        duration: "60–90 min per stage",
        sessions: "2–3 stages over 3–6 months",
        downtime: "2–3 days of tenderness after placement",
      },
    ],
    steps: [
      { title: "Examine", body: "A full check of your teeth, gums and bite, with digital X-rays or a 3D scan only where they are needed." },
      { title: "Preview", body: "For cosmetic work, a digital preview of the result, so you can see and adjust your smile before anything changes." },
      { title: "Treat", body: "Treatment in a calm, private room, with numbing where needed and breaks whenever you ask for them." },
      { title: "Maintain", body: "A written care plan, a follow-up on WhatsApp within 48 hours, and reminders for six-monthly check-ups." },
    ],
    note: {
      quote: "The best smile work is the kind people notice as 'you look well', not 'you've had your teeth done'.",
      name: "Dr. Riya Shetty",
      role: "Cosmetic Dentist · BDS, MDS (Prosthodontics)",
      placeholder: true,
    },
    faqs: [
      {
        q: "Does teeth whitening damage enamel?",
        a: "Professional whitening at the right strength, supervised by a dentist, does not damage healthy enamel. Some people feel mild sensitivity for a day or two, which settles on its own.",
      },
      {
        q: "How long do whitening results last?",
        a: "Usually one to two years, depending on tea, coffee, smoking and how you care for your teeth. A short top-up keeps the shade.",
      },
      {
        q: "Am I too old for aligners?",
        a: "No. Teeth can be moved at any age as long as the gums and bone are healthy, which your dentist checks first.",
      },
      {
        q: "Do implants hurt?",
        a: "The area is numbed, so placement itself is not painful. Most people feel tender for two or three days and manage with simple pain relief.",
      },
      {
        q: "Can I combine dental work with other treatments?",
        a: "Yes. Many women plan a smile treatment alongside skin or aesthetic care before a wedding or event. Your doctors will plan the timing together.",
      },
    ],
    related: ["non-surgical-aesthetics", "medi-facials", "permanent-makeup"],
  },
  {
    slug: "ayurveda",
    group: "ayurveda-recovery",
    title: "Ayurveda",
    heading: ["Ayurvedic", "therapies"],
    keywords: "Oil massage, Shirodhara, detox",
    tagline: "An old way of resting, offered with modern care.",
    summary: "Warm oil therapies, Shirodhara and seasonal programmes, guided by an Ayurveda physician.",
    intro:
      "Ayurveda at VO2 is about rest and rhythm: warm oils, unhurried hands and routines that follow the seasons. Every programme begins with a consultation with a qualified Ayurveda physician, and runs alongside, never instead of, the medical care you already receive.",
    tone: "linear-gradient(172deg,#efe4d6 0%,#d6ad7f 52%,#8f4a2c 100%)",
    brief: "Warm oil pouring in a slow ribbon over a brass vessel. Steam, marigold, afternoon light.",
    concerns: ["Stress & poor sleep", "Feeling run down", "Muscle tension", "Dry skin & scalp", "Seasonal reset", "Time for yourself"],
    items: [
      {
        name: "Ayurvedic consultation",
        description: "A conversation with an Ayurveda physician about your routine, sleep, digestion and season, ending in a simple written plan.",
        duration: "45 min",
        sessions: "1, then as needed",
        downtime: "None",
      },
      {
        name: "Warm oil massage (Abhyanga)",
        description: "A full-body massage with warm herbal oils chosen for you, given in long, rhythmic strokes to release tension.",
        duration: "60 min",
        sessions: "Weekly, or as a series of 3–7",
        downtime: "None; rest afterwards",
      },
      {
        name: "Shirodhara",
        description: "A slow, steady stream of warm oil poured across the forehead while you lie still. Deeply calming for a busy mind.",
        duration: "45–60 min",
        sessions: "Series of 3–7",
        downtime: "None; avoid washing hair for a few hours",
      },
      {
        name: "Herbal powder massage (Udvartana)",
        description: "An invigorating massage with warm herbal powders that leaves skin smooth and the body feeling lighter.",
        duration: "45 min",
        sessions: "Series of 5–7",
        downtime: "None",
      },
      {
        name: "Seasonal reset programme",
        description: "A guided programme of therapies, simple food and rest, timed to the change of season and supervised by the physician.",
        duration: "Half days",
        sessions: "5–7 days",
        downtime: "Lighter days advised",
      },
    ],
    steps: [
      { title: "Consult", body: "A relaxed conversation with an Ayurveda physician about your routine, sleep, digestion and what you would like to feel." },
      { title: "Plan", body: "A written plan of therapies, timings and simple daily habits, with prices, agreed before anything begins." },
      { title: "Rest", body: "Therapies in a warm, quiet room, followed by time to lie still with a cup of herbal tea. No rushing back out." },
      { title: "Continue", body: "Simple routines to carry home, a follow-up on WhatsApp within 48 hours, and a review at the next change of season." },
    ],
    note: {
      quote: "Ayurveda asks one gentle question first: how do you live your day? Rest is usually the answer women have stopped allowing themselves.",
      name: "Dr. Lakshmi Iyer",
      role: "Ayurveda Physician · BAMS, MD (Ayurveda)",
      placeholder: true,
    },
    faqs: [
      {
        q: "Is Ayurveda a replacement for medical treatment?",
        a: "No. Our Ayurvedic therapies are for rest and wellbeing and work alongside your medical care. If you have a health condition, keep seeing your doctor and tell our physician about any medicines you take.",
      },
      {
        q: "Are the oils safe for my skin?",
        a: "The physician chooses oils for your skin and season, and we patch test if you have sensitive skin or allergies.",
      },
      {
        q: "Can I have therapies during my period or pregnancy?",
        a: "Some therapies are paused during your period, and pregnancy needs a gentler plan. Tell the physician at your consultation and the programme will be adjusted.",
      },
    ],
    related: ["recovery", "yoga-academy", "medi-facials"],
    firstVisit: "Ayurvedic consultation",
    results: false,
  },
  {
    slug: "recovery",
    group: "ayurveda-recovery",
    title: "Recovery",
    heading: ["Rest &", "recovery"],
    keywords: "Massage, compression, sauna",
    tagline: "Because rest is part of the work.",
    summary: "Deep tissue massage, compression therapy and infrared sauna, planned by a physiotherapist.",
    intro:
      "Long days at a desk, training, travel, a new baby: bodies need to recover, and most of us never give them the chance. Recovery at VO2 brings hands-on therapy and calm technology together, planned by a physiotherapist so every session has a purpose.",
    tone: "linear-gradient(174deg,#ece2da 0%,#c9a294 50%,#6f3330 100%)",
    brief: "A woman wrapped in a soft robe, eyes closed, after a session. Linen, steam, stillness.",
    concerns: ["Muscle soreness", "Stiff neck & shoulders", "Heavy, tired legs", "Recovery after exercise", "Poor sleep", "Postnatal recovery"],
    items: [
      {
        name: "Recovery assessment",
        description: "A short assessment with a physiotherapist to find where you hold tension and what your body needs most.",
        duration: "30 min",
        sessions: "1",
        downtime: "None",
      },
      {
        name: "Deep tissue & sports massage",
        description: "Firm, focused massage for tight muscles and knots, adjusted to what feels right for you.",
        duration: "45–60 min",
        sessions: "Weekly or fortnightly",
        downtime: "Possible mild soreness for a day",
      },
      {
        name: "Compression therapy",
        description: "Air-filled sleeves that gently squeeze and release the legs, helping them feel lighter after long days or training.",
        duration: "30 min",
        sessions: "As needed",
        downtime: "None",
      },
      {
        name: "Infrared sauna",
        description: "Gentle, dry warmth in a private cabin to relax muscles and quiet the mind. Water and a rest corner afterwards.",
        duration: "30–40 min",
        sessions: "As needed",
        downtime: "None; drink plenty of water",
      },
      {
        name: "Postnatal recovery plan",
        description: "A gentle series of massage, breath work and guided rest for the months after birth, cleared by your doctor first.",
        duration: "60 min",
        sessions: "Series of 4–6",
        downtime: "None",
      },
    ],
    steps: [
      { title: "Assess", body: "A physiotherapist checks how you move, where you feel tight and what you do in a typical week." },
      { title: "Plan", body: "A simple plan of sessions, with prices, built around your work, training or new routine." },
      { title: "Recover", body: "Sessions in a warm, private room, with time afterwards to rest before you head back out." },
      { title: "Keep going", body: "Stretches and habits to use at home, and a follow-up on WhatsApp within 48 hours." },
    ],
    note: {
      quote: "Most women only rest when their body forces them to. We'd like rest to be planned, not earned.",
      name: "Dr. Sneha Kulkarni",
      role: "Physiotherapist · BPT, MPT (Musculoskeletal)",
      placeholder: true,
    },
    faqs: [
      {
        q: "Is infrared sauna safe for everyone?",
        a: "It is not suitable during pregnancy, with some heart conditions or with certain medicines. We ask a few health questions before your first session.",
      },
      {
        q: "Will deep tissue massage hurt?",
        a: "It should feel firm, never painful. Tell your therapist at any point and the pressure will be adjusted.",
      },
      {
        q: "How soon after giving birth can I start?",
        a: "Usually after your six-week check, once your doctor has cleared you. After a caesarean, we wait until the wound has fully healed.",
      },
    ],
    related: ["physiotherapy", "ayurveda", "body"],
    firstVisit: "Recovery assessment",
    results: false,
  },
  {
    slug: "physiotherapy",
    group: "movement",
    title: "Physiotherapy",
    heading: ["Women's", "physiotherapy"],
    keywords: "Back pain, posture, pelvic health",
    tagline: "Move without pain, at every stage of life.",
    summary: "Physiotherapy for back and neck pain, posture, sports injuries and pelvic health.",
    intro:
      "Women's bodies go through more change than most physiotherapy plans allow for: pregnancy, desk-bound years, hormonal shifts, menopause. Our physiotherapists assess how you move, explain what they find in plain words, and build a plan that fits your life.",
    tone: "linear-gradient(176deg,#ede3db 0%,#cfa898 52%,#8a3d35 100%)",
    brief: "A physiotherapist's hands guiding a client's shoulder, natural light, a calm studio.",
    concerns: ["Back & neck pain", "Desk posture", "Knee & joint pain", "Sports injuries", "Pelvic floor health", "Postnatal recovery", "Pain after surgery"],
    items: [
      {
        name: "Physiotherapy assessment",
        description: "A thorough assessment of how you move, where it hurts and why, with a clear explanation and a written plan.",
        duration: "45 min",
        sessions: "1",
        downtime: "None",
      },
      {
        name: "Back & neck pain care",
        description: "Hands-on therapy and simple exercises to ease pain and stop it coming back, including advice for your desk and sleep.",
        duration: "45 min",
        sessions: "4–8, weekly",
        downtime: "None",
      },
      {
        name: "Posture correction",
        description: "A programme for the effects of long hours at a laptop or phone: tight shoulders, a sore lower back and headaches.",
        duration: "45 min",
        sessions: "6, weekly",
        downtime: "None",
      },
      {
        name: "Pelvic floor & postnatal care",
        description: "Private, gentle care for pelvic floor weakness, leaking, diastasis and recovery after birth, by a specially trained physiotherapist.",
        duration: "45–60 min",
        sessions: "6–10",
        downtime: "None",
      },
      {
        name: "Sports injury rehab",
        description: "Step-by-step rehabilitation after a sprain, strain or surgery, so you return to running, dancing or training with confidence.",
        duration: "45 min",
        sessions: "As needed",
        downtime: "None",
      },
    ],
    steps: [
      { title: "Assess", body: "A full assessment of how you move, your history and what you would like to get back to doing." },
      { title: "Explain", body: "What is causing your pain, in plain words, and a written plan with the number of sessions and prices." },
      { title: "Treat", body: "Hands-on therapy and guided exercise in a private room, at a pace that feels right for you." },
      { title: "Progress", body: "Exercises to do at home, a follow-up on WhatsApp within 48 hours, and regular reviews of your progress." },
    ],
    note: {
      quote: "Leaking, back pain after pregnancy, a stiff neck from work: women are told these are normal. Common, yes. Something to live with, no.",
      name: "Dr. Sneha Kulkarni",
      role: "Physiotherapist · BPT, MPT (Musculoskeletal)",
      placeholder: true,
    },
    faqs: [
      {
        q: "Do I need a doctor's referral?",
        a: "No. You can book an assessment directly. If we think you need a scan or a doctor's opinion, we will tell you.",
      },
      {
        q: "Is pelvic floor physiotherapy only for after pregnancy?",
        a: "No. It helps at any age, including during pregnancy, around menopause and for anyone with leaking, heaviness or pelvic pain.",
      },
      {
        q: "What should I wear?",
        a: "Comfortable clothes you can move in. For a shoulder or back assessment, a vest top is helpful.",
      },
    ],
    related: ["pilates", "recovery", "yoga-academy"],
    firstVisit: "45-min assessment",
    results: false,
  },
  {
    slug: "pilates",
    group: "movement",
    title: "Pilates",
    heading: ["Pilates", "studio"],
    keywords: "Mat, reformer, core strength",
    tagline: "Strength from the centre, without strain.",
    summary: "Mat and reformer Pilates, prenatal and postnatal classes, and clinical Pilates with a physiotherapist.",
    intro:
      "Pilates builds quiet, deep strength: a stronger core, a straighter back and joints that feel looked after. Classes at VO2 are small, so every instructor can watch your form, and our physiotherapists can adapt sessions after injury or pregnancy.",
    tone: "linear-gradient(170deg,#f0e6de 0%,#d7b2a2 54%,#9c4e43 100%)",
    brief: "A reformer in a sunlit studio, a woman mid-stretch, long lines and pale wood.",
    concerns: ["Weak core", "Back pain", "Poor posture", "Stiffness", "Pregnancy & postnatal", "Low energy"],
    items: [
      {
        name: "Private intro session",
        description: "A one-to-one session to learn the basics, check your posture and find the right class for you.",
        duration: "50 min",
        sessions: "1",
        downtime: "All levels",
      },
      {
        name: "Mat Pilates",
        description: "Small-group classes on the mat, building core strength, balance and flexibility with slow, controlled movement.",
        duration: "50 min",
        sessions: "2–3 a week",
        downtime: "Beginner to advanced",
      },
      {
        name: "Reformer Pilates",
        description: "Classes on the reformer, a sliding machine with springs that supports and challenges you at the same time.",
        duration: "50 min",
        sessions: "2–3 a week",
        downtime: "After an intro session",
      },
      {
        name: "Prenatal & postnatal Pilates",
        description: "Gentle classes for pregnancy and the months after birth, with attention to the pelvic floor and core.",
        duration: "45 min",
        sessions: "1–2 a week",
        downtime: "With your doctor's clearance",
      },
      {
        name: "Clinical Pilates",
        description: "One-to-one Pilates led by a physiotherapist, for recovery from injury, back pain or surgery.",
        duration: "50 min",
        sessions: "Series of 6–8",
        downtime: "Tailored to you",
      },
    ],
    steps: [
      { title: "Meet", body: "A private intro session to understand your body, your goals and any injuries or recent pregnancy." },
      { title: "Plan", body: "The right class and how often, with prices and a simple timetable you can actually keep." },
      { title: "Practise", body: "Small classes with an instructor who watches your form and adjusts every exercise for you." },
      { title: "Progress", body: "Regular check-ins as you grow stronger, and a move to the next level when you are ready." },
    ],
    note: {
      quote: "Pilates isn't about looking a certain way. It's the strength that lets you carry the shopping, the baby and the day.",
      name: "Tara D'Souza",
      role: "Pilates Lead · Comprehensive Mat & Reformer certification",
      placeholder: true,
    },
    faqs: [
      {
        q: "I've never done Pilates. Can I start with reformer?",
        a: "Yes, after a private intro session, so you learn how the machine works and how to move safely.",
      },
      {
        q: "How soon will I feel a difference?",
        a: "Most people feel stronger and stand taller within four to six weeks of two classes a week.",
      },
      {
        q: "Is Pilates safe during pregnancy?",
        a: "Yes, in a prenatal class and with your doctor's agreement. Exercises are changed for each trimester.",
      },
    ],
    related: ["physiotherapy", "yoga-academy", "zumba"],
    firstVisit: "Private intro session",
    results: false,
  },
  {
    slug: "zumba",
    group: "movement",
    title: "Zumba",
    heading: ["Zumba", "classes"],
    keywords: "Dance fitness, cardio, joy",
    tagline: "An hour of music, movement and not thinking about anything else.",
    summary: "Energetic dance-fitness classes, low-impact Zumba Gold, toning sessions and private group parties.",
    intro:
      "Zumba is exercise that doesn't feel like exercise: Latin and Bollywood rhythms, simple steps and a room full of women having a good time. Classes are led by licensed instructors, with options for every fitness level and every age.",
    tone: "linear-gradient(168deg,#f3e3da 0%,#e2a68f 50%,#b24838 100%)",
    brief: "A small group of women mid-step, laughing, warm studio light, movement blur.",
    concerns: ["Low energy", "Stress", "Cardio fitness", "Weight management", "Coordination", "Making time for fun"],
    items: [
      {
        name: "Zumba Fitness",
        description: "The classic class: a full hour of easy-to-follow dance steps that raise your heart rate and your mood.",
        duration: "60 min",
        sessions: "2–3 a week",
        downtime: "All levels",
      },
      {
        name: "Zumba Gold",
        description: "A lower-impact class with gentler moves, ideal for beginners, older adults or anyone returning to exercise.",
        duration: "45 min",
        sessions: "2 a week",
        downtime: "Beginner",
      },
      {
        name: "Zumba Toning",
        description: "Dance fitness with light toning sticks to build strength in the arms, core and legs.",
        duration: "45 min",
        sessions: "1–2 a week",
        downtime: "Intermediate",
      },
      {
        name: "Private group sessions",
        description: "A private class for friends, colleagues or a bride and her family before the wedding.",
        duration: "60 min",
        sessions: "On request",
        downtime: "All levels",
      },
    ],
    steps: [
      { title: "Try", body: "Join an intro class and find your feet. No dance experience needed, just comfortable shoes." },
      { title: "Choose", body: "Pick the classes and times that suit you, with simple monthly packages." },
      { title: "Move", body: "Small, friendly classes where the instructor shows every step and offers easier options." },
      { title: "Keep it up", body: "A timetable that fits your week, reminders on WhatsApp, and a community to keep you coming back." },
    ],
    note: {
      quote: "I tell every new class: nobody is watching your feet. They're all too busy smiling.",
      name: "Neha Kapoor",
      role: "Zumba Instructor · Licensed ZIN member",
      placeholder: true,
    },
    faqs: [
      {
        q: "I can't dance. Will I keep up?",
        a: "Yes. Steps are simple and repeated, and the instructor always shows an easier version. Most people feel at home by the third class.",
      },
      {
        q: "What should I wear?",
        a: "Comfortable workout clothes and supportive trainers. Bring water and a small towel.",
      },
      {
        q: "Is Zumba safe if I have knee problems?",
        a: "Try Zumba Gold, which is low impact, and tell your instructor. If you have pain, see one of our physiotherapists first.",
      },
    ],
    related: ["pilates", "yoga-academy", "recovery"],
    firstVisit: "Intro class",
    results: false,
  },
  {
    slug: "yoga-academy",
    group: "movement",
    title: "Yoga Academy",
    heading: ["Yoga", "academy"],
    keywords: "Classes, prenatal, teacher training",
    tagline: "A practice to keep, taught with care.",
    summary: "Daily classes, a beginners' course, prenatal yoga, breath work and a 200-hour teacher training.",
    intro:
      "The VO2 Yoga Academy teaches yoga as a lifelong practice: strength, steadiness and a calmer mind. Begin with a four-week foundations course, join daily classes, or deepen your practice with our teacher training. Every teacher is certified and every class stays small.",
    tone: "linear-gradient(172deg,#eee5db 0%,#d2ae94 52%,#8e4b39 100%)",
    brief: "A woman in a seated twist on a linen mat, morning light through a jaali screen.",
    concerns: ["Stress & anxiety", "Flexibility", "Strength & balance", "Sleep", "Pregnancy", "Hormonal wellbeing", "Deepening a practice"],
    items: [
      {
        name: "Foundations course",
        description: "Four weeks for complete beginners: the basic postures, breathing and how to practise safely at home.",
        duration: "60 min",
        sessions: "8 classes over 4 weeks",
        downtime: "Beginner",
      },
      {
        name: "Daily classes",
        description: "Morning and evening Hatha and Vinyasa classes, from slow and steady to strong and flowing.",
        duration: "60 min",
        sessions: "As often as you like",
        downtime: "All levels",
      },
      {
        name: "Prenatal yoga",
        description: "Gentle classes for each trimester to ease aches, support breathing and prepare for birth.",
        duration: "60 min",
        sessions: "1–2 a week",
        downtime: "With your doctor's clearance",
      },
      {
        name: "Yoga for hormonal wellbeing",
        description: "A calming practice designed with our doctors for women living with PCOS, thyroid conditions or perimenopause, alongside medical care.",
        duration: "60 min",
        sessions: "2 a week",
        downtime: "All levels",
      },
      {
        name: "Breath work & meditation",
        description: "Short, guided sessions to slow the breath, settle the mind and help with sleep.",
        duration: "30–45 min",
        sessions: "Weekly",
        downtime: "All levels",
      },
      {
        name: "200-hour teacher training",
        description: "An in-depth training in postures, anatomy, philosophy and teaching, for those who wish to teach or simply go deeper.",
        duration: "Weekends",
        sessions: "Over 4–6 months",
        downtime: "Regular practice advised",
      },
    ],
    steps: [
      { title: "Begin", body: "A short chat with a teacher about your experience, health and what you hope yoga will give you." },
      { title: "Learn", body: "The foundations course, or the right daily class for your level, with a simple monthly package." },
      { title: "Practise", body: "Small classes where your teacher knows your name, your body and your progress." },
      { title: "Deepen", body: "Workshops, retreats and teacher training when you are ready to take your practice further." },
    ],
    note: {
      quote: "Yoga isn't about touching your toes. It's about what you notice on the way down.",
      name: "Meghna Bhat",
      role: "Yoga Academy Lead · E-RYT 500",
      placeholder: true,
    },
    faqs: [
      {
        q: "I'm not flexible. Can I still do yoga?",
        a: "Yes. Flexibility comes from practice, not before it. Teachers offer props and simpler versions of every pose.",
      },
      {
        q: "Is the teacher training recognised?",
        a: "The 200-hour programme is designed to meet international registration standards. Ask us for the current syllabus and dates.",
      },
      {
        q: "Can yoga help with PCOS?",
        a: "Regular yoga can support stress, sleep and overall wellbeing, which helps many women feel better. It works alongside medical care, not instead of it.",
      },
    ],
    related: ["pilates", "ayurveda", "physiotherapy"],
    firstVisit: "Chat with a teacher",
    results: false,
  },
];

// The four groups that organise the menu, footer, home page and treatments index
export const groups: {
  slug: GroupSlug;
  title: string;
  heading: [string, string];
  blurb: string;
  photo: string; // a category photo that represents the group
  firstVisit: string;
  cta: string;
  // Copy for the treatment page's offer section
  unit: string;
  guide: string;
  levelLabel: string; // the third meta label on each item
}[] = [
  {
    slug: "skin-aesthetics",
    title: "Skin & Aesthetics",
    heading: ["Skin &", "aesthetics"],
    blurb: "Doctor-led care for skin, hair and body, planned around Indian skin.",
    photo: "skin",
    firstVisit: "40-min consultation",
    cta: "Book a consultation",
    unit: "treatments",
    guide: "Your doctor will recommend the right combination at your consultation.",
    levelLabel: "Downtime",
  },
  {
    slug: "ayurveda-recovery",
    title: "Ayurveda & Recovery",
    heading: ["Ayurveda &", "recovery"],
    blurb: "Warm oils, unhurried hands and modern recovery, for rest that restores.",
    photo: "ayurveda",
    firstVisit: "Consultation",
    cta: "Book a session",
    unit: "therapies",
    guide: "Your physician or therapist will recommend the right combination for you.",
    levelLabel: "Downtime",
  },
  {
    slug: "movement",
    title: "Movement",
    heading: ["Move", "well"],
    blurb: "Physiotherapy, Pilates, Zumba and our Yoga Academy, for strength that lasts.",
    photo: "yoga-academy",
    firstVisit: "Intro session",
    cta: "Book an intro session",
    unit: "ways to move",
    guide: "Your physiotherapist or teacher will help you choose at your intro session.",
    levelLabel: "Level",
  },
  {
    slug: "dental",
    title: "Dental",
    heading: ["Dental &", "smile care"],
    blurb: "Healthy, natural smiles, from check-ups to aligners and implants, led by a dentist.",
    photo: "dental",
    firstVisit: "Dental check-up",
    cta: "Book a dental visit",
    unit: "treatments",
    guide: "Your dentist will recommend the right treatment at your check-up.",
    levelLabel: "Downtime",
  },
];

export const getGroup = (slug: GroupSlug) => groups.find((g) => g.slug === slug)!;

// Groups with their categories, in menu order
export const groupedCategories = groups.map((g) => ({ ...g, items: categories.filter((c) => c.group === g.slug) }));

export const groupHref = (slug: GroupSlug) => `/treatments#${slug}`;

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const treatmentHref = (slug: string) => `/treatments/${slug}`;
