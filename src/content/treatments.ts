// Treatment categories, mirroring the clinic's current menu.
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

export type Category = {
  slug: string;
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
    related: ["medi-facials", "non-surgical-aesthetics", "skin"],
  },
  {
    slug: "body",
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
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const treatmentHref = (slug: string) => `/treatments/${slug}`;
