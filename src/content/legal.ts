// Legal pages. DRAFTS: written as a sound starting point for an Indian clinic,
// but they must be reviewed by a qualified lawyer before the site goes live.
import type { Section } from "./types";

export type LegalDoc = {
  slug: "privacy" | "terms" | "medical-disclaimer";
  title: string;
  heading: [string, string];
  summary: string;
  updated: string; // ISO date
  sections: Section[];
};

const contact = "hello@vo2wellness.in";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy policy",
    heading: ["Privacy", "policy"],
    summary:
      "What we collect when you use this website or visit the clinic, why we collect it, how we protect it, and the choices you have.",
    updated: "2026-10-28",
    sections: [
      {
        id: "who-we-are",
        title: "Who we are",
        blocks: [
          { p: "VO2 Wellness (\"VO2\", \"we\", \"us\") runs a women-first aesthetic and wellness clinic in Bengaluru, India, and this website at vo2wellness.in." },
          { p: "We act as the Data Fiduciary for the personal data described in this policy, as defined in India's Digital Personal Data Protection Act, 2023." },
        ],
      },
      {
        id: "what-we-collect",
        title: "What we collect",
        blocks: [
          { h3: "When you request a callback" },
          { ul: ["Your name and mobile number", "The treatment area you would like help with", "Your preferred time for a call, if you give one"] },
          { h3: "When you subscribe to our seasonal letter" },
          { ul: ["Your email address"] },
          { h3: "When you visit the clinic" },
          {
            p: "During a consultation and treatment we create a clinical record. This can include your medical history, medicines, photographs of the treated area (only with your consent), treatment notes and payment details. Health information is sensitive, and we treat it with particular care.",
          },
          { h3: "When you browse this website" },
          {
            p: "This website does not currently use advertising or tracking cookies. Our hosting provider may keep standard server logs, such as IP address, browser type and pages requested, for security and to keep the site running. If we add analytics in future, we will update this policy and ask for consent where the law requires it.",
          },
        ],
      },
      {
        id: "how-we-use",
        title: "How we use it",
        blocks: [
          {
            ul: [
              "To call you back and arrange a consultation",
              "To provide, record and follow up on your care, including the WhatsApp follow-up after a treatment",
              "To send our seasonal letter, if you have subscribed",
              "To meet our legal and professional obligations as a medical provider",
              "To keep this website secure and working",
            ],
          },
          { p: "We do not sell your personal data, and we do not use your health information for marketing." },
        ],
      },
      {
        id: "consent",
        title: "Consent",
        blocks: [
          {
            p: "We process your personal data with your consent, which you give when you submit a form, subscribe, or agree to treatment. You can withdraw consent at any time by writing to us. Withdrawing consent does not affect processing that happened before, and we may still need to keep clinical records where the law requires it.",
          },
        ],
      },
      {
        id: "sharing",
        title: "Who we share it with",
        blocks: [
          {
            ul: [
              "Service providers who help us operate, such as hosting, email, appointment and messaging tools. They act on our instructions and must keep your data secure.",
              "Laboratories or specialists, when your care needs them and you have agreed",
              "Authorities, when the law requires us to",
            ],
          },
          { p: "Some service providers may store data outside India. Where that happens, we transfer it only as permitted under Indian law." },
        ],
      },
      {
        id: "retention",
        title: "How long we keep it",
        blocks: [
          {
            p: "Callback requests that do not lead to a visit are deleted within 12 months. Newsletter subscriptions are kept until you unsubscribe. Clinical records are kept for the period required by medical regulations and professional guidance in India, and then securely deleted.",
          },
        ],
      },
      {
        id: "security",
        title: "How we protect it",
        blocks: [
          {
            p: "We use reasonable technical and organisational safeguards, including restricted access to clinical records, encrypted connections to this website, and staff training on confidentiality. No system is perfectly secure, and we will notify you and the authorities of a personal data breach as the law requires.",
          },
        ],
      },
      {
        id: "your-rights",
        title: "Your rights",
        blocks: [
          { p: "Under the Digital Personal Data Protection Act, 2023, you can:" },
          {
            ul: [
              "Ask for a summary of the personal data we hold about you and how we use it",
              "Ask us to correct, complete or update your data",
              "Ask us to erase data we no longer need, subject to legal retention rules",
              "Withdraw consent",
              "Nominate someone to exercise these rights on your behalf",
              "Raise a grievance with us, and then with the Data Protection Board of India if it is not resolved",
            ],
          },
          { p: `To exercise any of these rights, write to ${contact}. We will respond within the time the law allows.` },
        ],
      },
      {
        id: "children",
        title: "Children",
        blocks: [
          {
            p: "This website is intended for adults. We do not knowingly collect personal data from anyone under 18 through it. Treatment of minors at the clinic needs the consent of a parent or guardian.",
          },
        ],
      },
      {
        id: "grievances",
        title: "Grievances and contact",
        blocks: [
          { p: `For questions or complaints about your personal data, contact our Grievance Officer at ${contact}, or write to VO2 Wellness, Bengaluru.` },
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        blocks: [{ p: "We may update this policy from time to time. The date at the top shows when it last changed. Significant changes will be highlighted on this page." }],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of use",
    heading: ["Terms", "of use"],
    summary: "The terms that apply when you use this website and request a consultation with VO2.",
    updated: "2026-10-28",
    sections: [
      {
        id: "about",
        title: "About these terms",
        blocks: [
          {
            p: "These terms apply to your use of vo2wellness.in, operated by VO2 Wellness, Bengaluru. By using the website you agree to them. If you do not agree, please do not use the website.",
          },
        ],
      },
      {
        id: "information",
        title: "Information on this website",
        blocks: [
          {
            p: "The content on this website is general information about our clinic and the treatments we offer. It is not medical advice and does not replace a consultation with a qualified doctor. Please read our medical disclaimer.",
          },
          { p: "Treatment durations, number of sessions and downtime are indicative. Your doctor will give you advice specific to you." },
        ],
      },
      {
        id: "bookings",
        title: "Callback requests and appointments",
        blocks: [
          {
            ul: [
              "Submitting a callback request does not confirm an appointment. We will contact you to agree a time.",
              "Treatment is only provided after a consultation and your informed consent.",
              "Our doctors may decline or postpone treatment if it is not medically suitable for you.",
              "Please let us know at least 24 hours in advance if you need to reschedule or cancel.",
            ],
          },
        ],
      },
      {
        id: "prices",
        title: "Prices and payment",
        blocks: [
          {
            p: "Prices are given in writing at your consultation, before any treatment begins, and are payable at the clinic. Prices may change, but the price agreed in your written plan applies to that plan.",
          },
        ],
      },
      {
        id: "use",
        title: "Using the website",
        blocks: [
          {
            ul: [
              "Use the website lawfully, and give accurate details in any form",
              "Do not attempt to disrupt, damage or gain unauthorised access to the website",
              "Do not copy or reuse our content, design or brand for commercial purposes without permission",
            ],
          },
        ],
      },
      {
        id: "ip",
        title: "Intellectual property",
        blocks: [
          {
            p: "The VO2 name, logo, text, design and original artwork on this website belong to VO2 Wellness or are used under licence. Photographs from third parties are credited and used under their licences.",
          },
        ],
      },
      {
        id: "links",
        title: "Links to other websites",
        blocks: [{ p: "We may link to other websites, such as messaging apps or social media. We are not responsible for their content or privacy practices." }],
      },
      {
        id: "liability",
        title: "Liability",
        blocks: [
          {
            p: "We work to keep this website accurate and available, but we cannot guarantee it will always be error-free or uninterrupted. To the extent permitted by law, we are not liable for loss arising from reliance on general information on this website. Nothing in these terms limits liability that cannot be limited under Indian law.",
          },
        ],
      },
      {
        id: "law",
        title: "Governing law",
        blocks: [{ p: "These terms are governed by the laws of India. The courts of Bengaluru, Karnataka have jurisdiction over any dispute." }],
      },
      {
        id: "changes",
        title: "Changes and contact",
        blocks: [{ p: `We may update these terms from time to time; the date at the top shows the latest version. Questions? Write to ${contact}.` }],
      },
    ],
  },
  {
    slug: "medical-disclaimer",
    title: "Medical disclaimer",
    heading: ["Medical", "disclaimer"],
    summary: "Important information about the health content on this website and what to expect from treatment.",
    updated: "2026-10-28",
    sections: [
      {
        id: "general",
        title: "General information only",
        blocks: [
          {
            p: "The information on this website, including treatment pages and journal articles, is for general education. It is not a diagnosis, medical advice or a treatment recommendation for you, and it does not create a doctor–patient relationship.",
          },
        ],
      },
      {
        id: "consultation",
        title: "A consultation comes first",
        blocks: [
          {
            p: "Every treatment at VO2 begins with a consultation with a registered doctor, who will assess whether a treatment is suitable for you, explain the expected benefits, risks and alternatives, and ask for your informed consent.",
          },
        ],
      },
      {
        id: "results",
        title: "Results vary",
        blocks: [
          {
            p: "Results differ from person to person. They depend on your skin, health, age, lifestyle and how closely aftercare is followed. Timelines, session numbers and downtime on this website are typical ranges, not guarantees.",
          },
          {
            p: "Testimonials and stories describe individual experiences and do not mean you will have the same result. Any before-and-after images we publish will be of real clients, shared with their written consent.",
          },
        ],
      },
      {
        id: "risks",
        title: "Risks and side effects",
        blocks: [
          {
            p: "All medical and aesthetic treatments carry some risk, which can include redness, swelling, bruising, pigment changes, infection or allergic reaction. Your doctor will explain the specific risks of any treatment before you decide.",
          },
        ],
      },
      {
        id: "tell-us",
        title: "Tell us about your health",
        blocks: [
          {
            p: "Please tell your doctor about any medical conditions, medicines, supplements, allergies, pregnancy or breastfeeding, and previous treatments. Some treatments are not suitable in these situations.",
          },
        ],
      },
      {
        id: "emergencies",
        title: "Emergencies",
        blocks: [
          { note: "This website is not for emergencies. If you have a medical emergency, call 112 or go to your nearest hospital." },
          { p: "If you have an unexpected reaction after a treatment at VO2, contact the clinic straight away." },
        ],
      },
    ],
  },
];

export const getLegalDoc = (slug: LegalDoc["slug"]) => legalDocs.find((d) => d.slug === slug)!;
