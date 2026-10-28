// Record the chosen Unsplash photos, notify Unsplash of each use (required by the
// API guidelines), and write src/content/unsplash-photos.json for the site.
// Usage: UNSPLASH_ACCESS_KEY=... node select.mjs <candidatesDir> <outJson>
import fs from "node:fs";

const [dir, outJson] = process.argv.slice(2);
const key = process.env.UNSPLASH_ACCESS_KEY;
const candidates = JSON.parse(fs.readFileSync(`${dir}/candidates.json`, "utf8"));

// slot → [candidate slot, 1-based index, object-position, alt text]
const picks = {
  hero: ["hero", 10, "center 30%", "A woman in warm evening light, looking out with a calm smile"],
  skin: ["skin", 2, "center 35%", "A therapist applying a cream mask during a facial treatment"],
  "medi-facials": ["medi-facials", 7, "center 40%", "A peel being brushed onto a client's face during a medical facial"],
  laser: ["laser", 1, "center 30%", "A client wearing protective goggles during a laser treatment"],
  hair: ["hair", 11, "center 30%", "A woman with long, dark, healthy hair"],
  "non-surgical-aesthetics": ["non-surgical-aesthetics", 11, "center 40%", "A practitioner preparing a client's skin for an aesthetic treatment"],
  "permanent-makeup": ["permanent-makeup", 5, "center 45%", "A close view of a natural, defined eyebrow"],
  body: ["body", 1, "center", "A therapist's hands working gently on a client's back"],
  advanced: ["advanced", 5, "center", "A doctor in conversation with a client in a calm, bright consultation room"],
  salon: ["salon", 3, "center 30%", "A stylist working on a client's long dark hair"],
  "salon-hair": ["salon-hair", 6, "center", "A stylist's hands moving through soft, wavy hair"],
  "salon-nails": ["salon-nails", 1, "center", "Hands with soft, neat nude manicured nails"],
  "branch-bengaluru": ["branch-bengaluru", 4, "center", "A calm clinic corner with warm wooden arched shelves and a single flower"],
  "pcos-pigmentation": ["pcos-pigmentation", 8, "center", "A dropper bottle of serum on soft sand-coloured fabric"],
  "bengaluru-monsoon-hair": ["bengaluru-monsoon-hair", 7, "center", "Misty green hills under monsoon clouds"],
  "bridal-skin-timeline": ["bridal-skin-timeline", 2, "center", "A bride's hands with mehendi and bangles"],
  "laser-hair-reduction-indian-skin": ["laser-hair-reduction-indian-skin", 1, "center 40%", "A practitioner treating a relaxed client with a laser handpiece"],
  "sunscreen-indian-skin": ["sunscreen-indian-skin", 7, "center", "A woman squeezing sunscreen into her hand outdoors"],
  "postpartum-hair-fall": ["postpartum-hair-fall", 3, "center", "A mother holding her newborn baby close"],
  "medi-facial-or-salon-facial": ["medi-facial-or-salon-facial", 9, "center", "A therapist's hands giving a calm facial massage"],
  "microblading-or-powder-brows": ["microblading-or-powder-brows", 10, "center", "A close view of a woman's eye and eyebrow in soft light"],
  "first-consultation-at-vo2": ["first-consultation-at-vo2", 6, "center 35%", "A smiling doctor at her desk during a consultation"],
  "caring-for-nail-extensions": ["caring-for-nail-extensions", 6, "center", "Hands with neat nude nails holding a cup"],
};

const out = {};
for (const [slot, [from, index, position, alt]] of Object.entries(picks)) {
  const c = candidates[from]?.results?.[index - 1];
  if (!c) throw new Error(`No candidate ${from} #${index}`);
  // Tell Unsplash this photo is being used (API guideline: "trigger a download")
  const res = await fetch(`${c.downloadLocation}${c.downloadLocation.includes("?") ? "&" : "?"}client_id=${key}`);
  out[slot] = {
    id: c.id,
    raw: c.raw,
    width: c.width,
    height: c.height,
    color: c.color,
    position,
    alt,
    credit: { name: c.name, profile: c.profile, page: c.page },
  };
  console.log(`${slot.padEnd(34)} ${c.id}  ${c.name.padEnd(24)} download ping ${res.status} (left ${res.headers.get("x-ratelimit-remaining")})`);
}
fs.writeFileSync(outJson, JSON.stringify(out, null, 2) + "\n");
console.log("wrote", Object.keys(out).length, "photos");
