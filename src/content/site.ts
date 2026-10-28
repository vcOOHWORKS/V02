// All site copy lives here so content can change without touching layout.
// Entries marked `placeholder: true` are stand-ins and must be replaced before launch.

export const clinic = {
  name: "VO2",
  legalName: "VO2 Wellness",
  copyrightYear: 2026,
  tagline: "Rise in your own light.",
  city: "Bengaluru",
  address: "Bengaluru · address to be confirmed",
  hours: "Mon–Sat, 10am–7pm",
  phone: "+91 · number to be added",
  email: "hello@vo2wellness.in",
  whatsapp: null as string | null, // e.g. "919800000000" → https://wa.me/919800000000
};

// Treatments has its own mega menu in the nav; these are the remaining links.
export const nav = [
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Branches", href: "/branches" },
  { label: "Journal", href: "/journal" },
];

export const hero = {
  // Text between pipes is emphasised.
  lines: ["Rise in your", "own |light.|"],
  lead: "Doctor-led dermatology and wellness in Bengaluru, built for women who carry a great deal and would like, for an hour, to be carried.",
  brief:
    "Three-quarter profile, dark maroon backdrop. One warm key light from camera left so the skin is the brightest thing in frame. Minimal gold. No retouching beyond colour.",
};

export const marquee = [
  { en: "Care" },
  { en: "Confidence", em: true },
  { en: "Glow" },
  { en: "Balance", em: true },
  { en: "Strength" },
  { en: "Softness", em: true },
  { en: "Self-trust" },
];

export const manifesto = {
  // Segments wrapped in `em` are highlighted when lit.
  segments: [
    { text: "VO2 is not about changing who you are. It is about helping you feel" },
    { text: "more like yourself:", em: true },
    { text: "stronger, calmer, more confident, and visibly well." },
  ],
  promises: [
    {
      title: "Care, not correction",
      body: "We don't fix flaws. We restore what's already yours, with plans built around your skin, your hormones and your week.",
    },
    {
      title: "Doctor-led, always",
      body: "Every plan is written and reviewed by a dermatologist. No sales floor. No targets. Prices on paper before anything begins.",
    },
    {
      title: "Rituals, not routines",
      body: "A visit is slow by design. Arrive, breathe, be looked after, and leave calmer than you came.",
    },
  ],
};

export const ritual = {
  title: ["A visit, not an", "appointment."],
  intro:
    "Four moments, always in this order. The sequence is the point: nobody is rushed from the door to the chair, and nobody leaves straight after a treatment.",
  steps: [
    {
      title: "Arrive",
      body: "Shoes off, phone down. Tulsi tea, a warm towel, five quiet minutes before anyone asks you a question.",
    },
    {
      title: "Consult",
      body: "Forty minutes with a dermatologist, not fifteen. Skin, hormones, sleep, stress. The plan is built with you, with prices on paper.",
    },
    {
      title: "Treat",
      body: "Clinical precision in a room that doesn't feel clinical. Every device certified, every protocol doctor-supervised.",
    },
    {
      title: "Rest",
      body: "A rest lounge, aftercare in writing, and a follow-up on WhatsApp within 48 hours.",
    },
  ],
};

export const result = {
  placeholder: true,
  quote: "I stopped reaching for concealer before the morning stand-up. That's the whole review.",
  name: "Priya, 34",
  detail: "Koramangala · Melasma programme · 12 weeks",
  note: "Sample story for layout. Real case studies appear only with written consent, photographed in the same light, same lens and same angle, with no filters.",
};

export const experts = {
  intro:
    "Trust is the first thing women look for and the last thing most clinics show. Credentials, registration numbers and the doctor's own words go on the page.",
  people: [
    {
      placeholder: true,
      name: "Dr. Meera Nair",
      role: "Lead Dermatologist · MD, DVL",
      bio: "Placeholder profile. Fourteen years in clinical and aesthetic dermatology, with a focus on pigmentation in Indian skin tones.",
      quote: "Most of my job is telling women they need less than they came in for.",
    },
    {
      placeholder: true,
      name: "Dr. Ananya Rao",
      role: "Aesthetic Physician · MBBS, Dip. Aesthetic Medicine",
      bio: "Placeholder profile. Injectables and laser, with a stated preference for restraint.",
      quote: "If you can tell it's been done, I haven't done it well.",
    },
    {
      placeholder: true,
      name: "Dr. Kavya Hegde",
      role: "Wellness & Hormonal Health · MD, Internal Medicine",
      bio: "Placeholder profile. PCOS, thyroid and perimenopause care, and the link between all three and skin.",
      quote: "Your skin is usually the last to know what your hormones are doing.",
    },
  ],
};

export const voices = {
  placeholder: true,
  intro: "No before-and-after theatre. Just what women told us changed in their weeks.",
  // The first item is featured.
  items: [
    {
      quote: "Three clinics told me what was wrong with my face. VO2 asked what my week looked like. That one question changed how I felt walking out.",
      name: "Shruti",
      area: "Indiranagar",
      treatment: "Acne programme",
    },
    {
      quote: "My sister's wedding photos. I look like me, on a very good day. That's exactly what I asked for.",
      name: "Divya",
      area: "Whitefield",
      treatment: "Bridal programme",
    },
    {
      quote: "They treated my PCOS skin and my PCOS. I didn't know that was allowed in the same building.",
      name: "Nandini",
      area: "Jayanagar",
      treatment: "Hormonal skin plan",
    },
  ],
};

export const journal = {
  intro: "Education first. These pages do the search work and earn the trust before the consultation does.",
};

export const booking = {
  title: ["Begin with a", "conversation."],
  body: "Your first visit is a conversation, not a sales pitch. Tell us what you'd like help with and we'll call to find a time that suits you.",
  promises: [
    "Forty minutes with a dermatologist, not fifteen",
    "A written plan, with prices on paper",
    "No treatment is sold on the first visit",
    "A follow-up on WhatsApp within 48 hours",
  ],
  times: ["Morning", "Afternoon", "Evening"],
  consent: "We'll only use your details to arrange your consultation.",
  // {name} is replaced with the first name given in the form.
  confirmationTitle: "Thank you, {name}.",
  confirmationBody: "We'll call you within one working day to find a time. If you need us sooner, message us on WhatsApp.",
};

export const footer = {
  statement: ["Rise in your", "own light."],
  blurb: "A women-first aesthetic and wellness clinic in Bengaluru. Doctor-led care, thoughtful rituals and results that still look like you.",
  letters: {
    title: "Letters from VO2",
    body: "One letter each season on skin, hair and wellbeing. Four a year, never more.",
    placeholder: "Your email address",
    confirmation: "Thank you. Your first letter arrives with the next season.",
  },
  // Rendered as links only once a URL is added.
  social: [
    { label: "Instagram", url: null as string | null },
    { label: "YouTube", url: null as string | null },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Medical disclaimer", href: "/medical-disclaimer" },
  ],
  medicalNote: "Results vary from person to person. Every treatment follows a consultation with a registered doctor.",
};

export const about = {
  hero: {
    heading: ["Doctor-led care,", "designed for women."],
    lead: "VO2 is a women-first aesthetic and wellness clinic in Bengaluru. We bring dermatology, internal medicine and thoughtful rituals together under one roof, so the care you receive is expert, unhurried and planned around your life.",
  },
  glance: [
    { label: "Founded in", value: "Bengaluru" },
    { label: "Care for", value: "Women, first" },
    { label: "Led by", value: "Registered doctors" },
    { label: "Treatment areas", value: "Eight" },
    { label: "Open", value: "Mon–Sat, 10am–7pm" },
  ],
  standards: {
    title: ["Standards we", "hold ourselves to."],
    intro: "Trust is the first thing women look for in a clinic. These are the commitments behind ours.",
    items: [
      { title: "Registered doctors", body: "Every plan is made by a qualified, registered doctor. Injectables are performed only by doctors with specialist aesthetic training." },
      { title: "Certified technology", body: "Devices are medically certified, chosen for Indian skin, and serviced on schedule. Settings are recorded at every visit." },
      { title: "Sterile, single-use", body: "Clinical protocols for hygiene and sterilisation, with single-use consumables wherever they apply." },
      { title: "Informed consent", body: "You hear the benefits, risks and alternatives before you decide, and nothing is sold on the first visit." },
      { title: "Prices on paper", body: "A written plan with transparent pricing before any treatment begins. No surprises at the counter." },
      { title: "Your privacy", body: "Clinical records and photographs are confidential, handled under India's data protection law." },
    ],
  },
};

// Branches. Only Bengaluru exists today; its street address is still to be confirmed.
export type Branch = {
  slug: string;
  name: string;
  label: string;
  city: string;
  region: string;
  address: string | null; // null until confirmed
  hours: string;
  phone: string | null;
  email: string;
  tone: string;
};

export const branches: Branch[] = [
  {
    slug: "bengaluru",
    name: "VO2 Bengaluru",
    label: "Flagship clinic",
    city: "Bengaluru",
    region: "Karnataka",
    address: null,
    hours: "Mon–Sat, 10am–7pm",
    phone: null,
    email: "hello@vo2wellness.in",
    tone: "linear-gradient(172deg,#2b1113 0%,#6b2422 38%,#b2453b 68%,#e8785a 90%,#f2956e 100%)",
  },
];

export const visitPlan = [
  {
    title: "Before you come",
    body: "Bring a list of your medicines and supplements, and any skincare you use. If you have reports or past prescriptions, bring those too.",
  },
  {
    title: "When you arrive",
    body: "Come ten minutes early. There is tea, a warm towel and five quiet minutes before anyone asks you a question.",
  },
  {
    title: "After your visit",
    body: "You leave with written aftercare and a plan with prices. We follow up on WhatsApp within 48 hours.",
  },
];
