// "Our brand story" page, told as the growth of a lotus: Roots (ancient wisdom),
// Rise (technology), Bloom (wellness). Ancient wisdom shapes VO2's philosophy and
// experience only; every treatment is modern and doctor-led, and no traditional
// remedy is claimed to treat anything. Sanskrit terms appear on this page only.
// The reading of the name (VO2 as oxygen, breath and vitality) is a proposed
// interpretation; confirm it with the founders before launch.
import type { MotifName } from "@/lib/motifs";

export type Stage = "roots" | "rise" | "bloom";

export const story = {
  hero: {
    heading: ["Ancient roots.", "Modern care."],
    lead: "Our treatments are modern, evidence-based and led by doctors. Our way of caring is far older: India's understanding that beauty follows balance, rhythm and rest. Like the lotus in our name, VO2 grows in three stages.",
    stages: [
      { stage: "roots" as Stage, numeral: "I", name: "Roots", thread: "Ancient wisdom" },
      { stage: "rise" as Stage, numeral: "II", name: "Rise", thread: "Technology" },
      { stage: "bloom" as Stage, numeral: "III", name: "Bloom", thread: "Wellness" },
    ],
  },

  prologue: {
    title: ["Named for the breath", "behind strength."],
    paragraphs: [
      "VO2 is how science measures the body's capacity to take in and use oxygen. It is the quiet engine behind strength, stamina and vitality, the thing that lets you keep going on the long days.",
      "We chose it because radiance is biology before it is beauty. Skin that glows is skin that is breathing, rested and nourished. Our work begins there.",
    ],
    mark: {
      title: "The lotus and the profile",
      body: "Our mark is a lotus opening around a woman in profile, looking forward. A lotus grows in three stages: roots held in the earth, a stem rising through water, a flower opening clean to the light. It is how we think about care.",
    },
  },

  roots: {
    numeral: "I",
    stageName: "Roots",
    title: ["What India has", "always known."],
    intro:
      "Long before clinics, Indian homes had a language of care, passed from grandmother to mother to daughter. We do not offer traditional therapies; our treatments are modern and doctor-led. But this wisdom shapes how we think, how we plan, and how a visit with us feels.",
    // Each idea: what tradition taught, what science now shows, what it means at VO2.
    principles: [
      {
        term: "Dinacharya",
        meaning: "The rhythm of the day",
        then: "Rise with the sun, rest early, and keep a steady daily rhythm.",
        now: "Skin follows a daily clock and does much of its repair while you sleep. Good sleep shows on the face.",
        atVo2: "Plans that fit your real day, and routines you can actually keep.",
      },
      {
        term: "Ritucharya",
        meaning: "Living by the season",
        then: "Change how you eat and care for yourself as the seasons turn.",
        now: "Heat, humidity and dry air change how skin and scalp behave through the year.",
        atVo2: "Treatments and home care adjusted for Bengaluru's monsoon, summer and winter.",
      },
      {
        term: "Samatva",
        meaning: "Balance, inside and out",
        then: "Beauty is a sign of inner balance, not a mask over its absence.",
        now: "Hormones, nutrition, stress and sleep all show on the skin.",
        atVo2: "Dermatology and internal medicine look at the whole woman, together.",
      },
      {
        term: "Abhyanga",
        meaning: "The ritual of touch",
        then: "Daily oiling and touch as a quiet act of care for oneself and others.",
        now: "Gentle, caring touch helps the body settle and lowers stress.",
        atVo2: "Unhurried hands, warm towels and calm rooms, even in a clinical treatment.",
      },
      {
        term: "Vishrama",
        meaning: "Rest as healing",
        then: "Rest after effort, and after childbirth, is how the body restores itself.",
        now: "Proper recovery protects results and lowers the risk of side effects.",
        atVo2: "Rest is part of every visit, and your aftercare is written down.",
      },
      {
        term: "Raksha",
        meaning: "Protection",
        then: "The dupatta, the umbrella, the shade at midday.",
        now: "Daily sun protection is the most proven way to prevent pigmentation and early ageing.",
        atVo2: "Sun discipline is part of every plan, especially for Indian skin, which pigments easily.",
      },
    ],
    patterns: {
      title: ["The wisdom,", "made visible."],
      intro: "The patterns across our clinic and this website carry the same wisdom in visible form. Each comes from a living Indian tradition.",
      items: [
        {
          motif: "padma" as MotifName,
          name: "Padma jaali",
          origin: "Mughal and Rajput stone screens",
          history: "Carved so light and air could pass through while interiors stayed cool and private. Ours lace eight-pointed stars around lotus rosettes.",
          meaning: "We keep the light and leave the hiding behind. Here, she is seen, and cared for.",
        },
        {
          motif: "kolam" as MotifName,
          name: "Kolam and rangoli",
          origin: "Threshold drawings of Karnataka and the South",
          history: "Drawn fresh each dawn in rice flour by the women of the house, around a grid of dots, and walked over by evening.",
          meaning: "Renewal and welcome. A small daily ritual that belongs to her.",
        },
        {
          motif: "hoysala" as MotifName,
          name: "The Hoysala star",
          origin: "Belur and Halebidu, 12th century, about 220 km from Bengaluru",
          history: "Temple plans that turn squares around a single centre until they become a star, so sunlight moves across each point in turn.",
          meaning: "Light moving around a still centre. Karnataka's own geometry.",
        },
        {
          motif: "lotus" as MotifName,
          name: "Padma mandala",
          origin: "Our mark, opened out",
          history: "Rings of eight, sixteen and twenty-four petals open from a single point, the bindu, where every mandala begins.",
          meaning: "The lotus rising clean from the mud. Rise in your own light, drawn.",
        },
        {
          motif: "ambi" as MotifName,
          name: "Ambi",
          origin: "From Kashmir shawls to Kanchipuram borders",
          history: "The mango-seed shape, mirrored in pairs along a sari border, has travelled through Indian textiles for centuries.",
          meaning: "A seed is the shape of what is coming. We place it wherever something begins.",
        },
      ],
    },
  },

  rise: {
    numeral: "II",
    stageName: "Rise",
    title: ["Proven by", "modern science."],
    intro:
      "Wisdom tells us what matters. Science tells us what works, for whom, and how much. Every treatment at VO2 is modern, evidence-based and led by a registered doctor.",
    pillars: [
      {
        title: "Diagnosis before treatment",
        body: "Skin analysis, trichoscopy for hair, and blood tests when they are needed. We treat causes, not just what shows.",
      },
      {
        title: "Technology set for Indian skin",
        body: "Clinical-grade devices chosen for skin that pigments easily, with patch tests before full sessions.",
      },
      {
        title: "Measured, recorded, refined",
        body: "Settings recorded at every visit, progress photographed with your consent, and plans reviewed as you go.",
      },
      {
        title: "The discipline of restraint",
        body: "We often recommend less than you came in for. The best result looks like you, on a very good day.",
      },
    ],
    bridge: ["Ancient wisdom asks why.", "Modern science shows how."],
  },

  bloom: {
    numeral: "III",
    stageName: "Bloom",
    title: ["Rise in", "your own light."],
    intro:
      "When the roots are steady and the care is precise, what blooms is not a new face. It is you: rested, calm, confident and visibly well.",
    whole: {
      title: "Cared for as a whole",
      items: ["Skin", "Hair", "Hormones", "Sleep and stress", "Nourishment", "Confidence"],
    },
    realities: {
      title: "Built for real lives",
      intro: "Women in India carry a great deal. VO2 is designed around it:",
      items: [
        "Long work hours and high stress",
        "Changing skin and hormonal concerns",
        "Expectations around beauty and appearance",
        "Festivals, weddings and life events where confidence matters",
        "A wish for natural results, not overdone transformation",
        "The need for trust, safety and expert care",
      ],
    },
    close: "Not about changing who a woman is, but helping her feel more like herself: stronger, calmer, more confident and visibly well.",
  },

  epilogue: {
    title: ["Where roots, rise", "and bloom meet."],
    intro: "Every visit brings the three together, in four moments, always in this order.",
    // Which stage each moment of the visit draws on
    stageOf: ["Roots", "Rise", "Rise", "Bloom"],
  },

  promises: {
    always: [
      "A doctor leads every plan",
      "Prices in writing before anything begins",
      "Natural results that still look like you",
      "Honest advice, including when to do less",
      "Your privacy, and your pace",
    ],
    never: [
      "Sell a treatment on the first visit",
      "Talk about flaws that need fixing",
      "Promise perfection, or filter a result",
      "Claim a tradition can treat what needs medicine",
      "Rush you from the door to the chair",
    ],
  },

  closing: {
    quote: "VO2 helps women rise in their own light, with strength, softness and self-trust.",
  },
};
